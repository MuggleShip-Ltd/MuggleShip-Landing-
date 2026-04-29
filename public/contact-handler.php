<?php
/**
 * MuggleShip contact form handler — SMTP authenticated send.
 *
 * PHP mail() on shared hosting is unreliable (silently dropped, lost in
 * spam, no error). This script connects directly to the SiteGround SMTP
 * server and authenticates as the support@muggleship.com mailbox, which
 * delivers reliably and survives downstream spam filters.
 *
 * Setup:
 *   1. Upload this file to public_html/contact-handler.php
 *   2. Create public_html/contact-config.php from the template below,
 *      filling in the SMTP password (the password set on the
 *      support@muggleship.com mailbox in Site Tools → Email).
 *
 * contact-config.php template:
 *   <?php
 *   return [
 *     'smtp_host' => 'mail.muggleship.com',     // or smtpout.eu.siteground.us
 *     'smtp_port' => 465,                       // 465 SSL or 587 TLS
 *     'smtp_user' => 'support@muggleship.com',
 *     'smtp_pass' => 'YOUR_MAILBOX_PASSWORD',
 *   ];
 */

declare(strict_types=1);

// --- Config -----------------------------------------------------------------
const RECIPIENT      = 'support@muggleship.com';
const FROM_ADDRESS   = 'support@muggleship.com';
const FROM_NAME      = 'MuggleShip Website';
const ALLOWED_ORIGIN = 'https://muggleship.com';
const LOG_FILE       = __DIR__ . '/contact-debug.log';

$smtpConfigPath = __DIR__ . '/contact-config.php';

// --- CORS / method gates ----------------------------------------------------
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: ' . ALLOWED_ORIGIN);
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Vary: Origin');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

// --- Load SMTP credentials --------------------------------------------------
if (!file_exists($smtpConfigPath)) {
    http_response_code(500);
    echo json_encode(['error' => 'SMTP config missing — see contact-handler.php header for setup']);
    exit;
}
$smtp = require $smtpConfigPath;
foreach (['smtp_host', 'smtp_port', 'smtp_user', 'smtp_pass'] as $k) {
    if (empty($smtp[$k])) {
        http_response_code(500);
        echo json_encode(['error' => "SMTP config: missing $k"]);
        exit;
    }
}

// --- Honeypot ---------------------------------------------------------------
if (!empty(trim($_POST['website'] ?? ''))) {
    echo json_encode(['ok' => true]);
    exit;
}

// --- Read & sanitize fields -------------------------------------------------
function field(string $key, int $maxLen = 1000): string
{
    $val = trim((string)($_POST[$key] ?? ''));
    if (strlen($val) > $maxLen) {
        $val = substr($val, 0, $maxLen);
    }
    return $val;
}

$name     = field('name', 200);
$company  = field('company', 200);
$emailRaw = field('email', 320);
$phone    = field('phone', 60);
$country  = field('country', 100);
$volume   = field('volume', 60);
$message  = field('message', 8000);
$consent  = !empty($_POST['consent']);

// --- Validate ---------------------------------------------------------------
$errors = [];
if ($name === '')       $errors[] = 'name';
if ($emailRaw === '')   $errors[] = 'email';
elseif (!filter_var($emailRaw, FILTER_VALIDATE_EMAIL)) $errors[] = 'email_invalid';
if ($message === '')    $errors[] = 'message';
if (!$consent)          $errors[] = 'consent';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid submission', 'fields' => $errors]);
    exit;
}

foreach (['name', 'company', 'phone', 'country', 'volume'] as $key) {
    if (preg_match("/[\r\n]/", $$key)) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid characters in input']);
        exit;
    }
}

$email = filter_var($emailRaw, FILTER_SANITIZE_EMAIL);

// --- Build the email --------------------------------------------------------
$subject = sprintf('Quote Request — %s', $company ?: $name);

$lines = [
    "New quote request from muggleship.com",
    str_repeat('-', 48),
    sprintf('Name:      %s', $name),
    sprintf('Company:   %s', $company ?: '—'),
    sprintf('Email:     %s', $email),
    sprintf('Phone:     %s', $phone ?: '—'),
    sprintf('Country:   %s', $country ?: '—'),
    sprintf('Volume:    %s', $volume ?: '—'),
    str_repeat('-', 48),
    'Message:',
    '',
    $message,
    '',
    str_repeat('-', 48),
    sprintf('Submitted: %s UTC', gmdate('Y-m-d H:i:s')),
    sprintf('IP:        %s', $_SERVER['REMOTE_ADDR'] ?? '—'),
    sprintf('User-Agent: %s', $_SERVER['HTTP_USER_AGENT'] ?? '—'),
];
$body = implode("\r\n", $lines);

// --- Send via SMTP ----------------------------------------------------------
[$ok, $log] = smtpSend(
    $smtp['smtp_host'],
    (int)$smtp['smtp_port'],
    $smtp['smtp_user'],
    $smtp['smtp_pass'],
    FROM_ADDRESS,
    FROM_NAME,
    RECIPIENT,
    $email,
    $name,
    $subject,
    $body
);

@file_put_contents(LOG_FILE, "[" . gmdate('Y-m-d H:i:s') . "Z] " . ($ok ? "OK" : "FAIL") . "\n" . $log . "\n\n", FILE_APPEND);

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail dispatch failed', 'detail' => 'See contact-debug.log']);
}

// ============================================================================
// Minimal authenticated SMTP client over fsockopen — no external library.
// ============================================================================
function smtpSend(
    string $host,
    int $port,
    string $user,
    string $pass,
    string $fromAddr,
    string $fromName,
    string $toAddr,
    string $replyToAddr,
    string $replyToName,
    string $subject,
    string $body
): array {
    $log = '';
    $transport = ($port === 465) ? "ssl://$host" : $host;
    $socket = @stream_socket_client(
        "$transport:$port",
        $errno,
        $errstr,
        15,
        STREAM_CLIENT_CONNECT
    );
    if (!$socket) {
        return [false, "Connect failed: $errno $errstr"];
    }
    stream_set_timeout($socket, 15);

    $read = function () use ($socket, &$log): string {
        $out = '';
        while (!feof($socket)) {
            $line = fgets($socket, 8192);
            if ($line === false) break;
            $log .= "S: $line";
            $out .= $line;
            if (strlen($line) >= 4 && $line[3] === ' ') break;
        }
        return $out;
    };
    $write = function (string $cmd) use ($socket, &$log): void {
        $log .= "C: $cmd";
        fwrite($socket, $cmd);
    };

    $banner = $read();
    if (substr($banner, 0, 3) !== '220') return [false, $log];

    $write("EHLO muggleship.com\r\n");
    $ehlo = $read();
    if (substr($ehlo, 0, 3) !== '250') return [false, $log];

    // STARTTLS upgrade for port 587
    if ($port === 587 && strpos($ehlo, 'STARTTLS') !== false) {
        $write("STARTTLS\r\n");
        $tls = $read();
        if (substr($tls, 0, 3) !== '220') return [false, $log];
        $cryptoOk = stream_socket_enable_crypto(
            $socket,
            true,
            STREAM_CRYPTO_METHOD_TLS_CLIENT
        );
        if (!$cryptoOk) return [false, $log . "STARTTLS handshake failed\n"];
        $write("EHLO muggleship.com\r\n");
        $read();
    }

    // AUTH LOGIN
    $write("AUTH LOGIN\r\n");
    if (substr($read(), 0, 3) !== '334') return [false, $log];
    $write(base64_encode($user) . "\r\n");
    if (substr($read(), 0, 3) !== '334') return [false, $log];
    $write(base64_encode($pass) . "\r\n");
    if (substr($read(), 0, 3) !== '235') return [false, $log . "AUTH failed\n"];

    $write("MAIL FROM:<$fromAddr>\r\n");
    if (substr($read(), 0, 3) !== '250') return [false, $log];

    $write("RCPT TO:<$toAddr>\r\n");
    if (substr($read(), 0, 3) !== '250') return [false, $log];

    $write("DATA\r\n");
    if (substr($read(), 0, 3) !== '354') return [false, $log];

    // Build message
    $headers = [];
    $headers[] = 'From: ' . encodeHeader($fromName) . ' <' . $fromAddr . '>';
    $headers[] = 'To: <' . $toAddr . '>';
    $headers[] = 'Reply-To: ' . encodeHeader($replyToName) . ' <' . $replyToAddr . '>';
    $headers[] = 'Subject: ' . encodeHeader($subject);
    $headers[] = 'Date: ' . date('r');
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-Type: text/plain; charset=utf-8';
    $headers[] = 'Content-Transfer-Encoding: 8bit';
    $headers[] = 'X-Mailer: MuggleShip-Form/1.0';

    $msg = implode("\r\n", $headers) . "\r\n\r\n" . dotStuff($body) . "\r\n.\r\n";
    fwrite($socket, $msg);
    $log .= "C: <message body, " . strlen($msg) . " bytes>\n";

    $finalResp = $read();
    if (substr($finalResp, 0, 3) !== '250') return [false, $log];

    $write("QUIT\r\n");
    $read();
    fclose($socket);

    return [true, $log];
}

function encodeHeader(string $s): string
{
    if (preg_match('/[^\x20-\x7e]/', $s)) {
        return '=?utf-8?B?' . base64_encode($s) . '?=';
    }
    return $s;
}

function dotStuff(string $body): string
{
    return preg_replace('/^\./m', '..', $body);
}
