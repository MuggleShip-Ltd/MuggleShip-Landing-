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
foreach (['smtp_host', 'smtp_port'] as $k) {
    if (empty($smtp[$k])) {
        http_response_code(500);
        echo json_encode(['error' => "SMTP config: missing $k"]);
        exit;
    }
}
$smtp['smtp_user'] = $smtp['smtp_user'] ?? '';
$smtp['smtp_pass'] = $smtp['smtp_pass'] ?? '';

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
$subject = sprintf('New quote request — %s', $company !== '' ? $company : $name);

// Compact field list — optional fields appear only when filled.
$fields = [
    ['Name',    $name,    'text'],
    ['Email',   $email,   'email'],
];
if ($company !== '') $fields[] = ['Company', $company, 'text'];
if ($phone   !== '') $fields[] = ['Phone',   $phone,   'tel'];
if ($country !== '') $fields[] = ['Country', $country, 'text'];
if ($volume  !== '') $fields[] = ['Volume',  $volume,  'text'];

// Plain text body
$plainLines = ["New quote request from muggleship.com", str_repeat('-', 48)];
foreach ($fields as [$label, $value]) {
    $plainLines[] = sprintf('%-9s %s', $label . ':', $value);
}
$plainLines[] = str_repeat('-', 48);
$plainLines[] = 'Message:';
$plainLines[] = '';
$plainLines[] = $message;
$plainBody = implode("\r\n", $plainLines);

// HTML body — branded card, ember accent
$htmlBody = renderHtmlBody($name, $fields, $message, gmdate('M j, Y · H:i') . ' UTC');

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
    $plainBody,
    $htmlBody
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
    string $plainBody,
    string $htmlBody = ''
): array {
    $log = '';
    $endpoint = ($port === 465) ? "ssl://$host:$port" : "tcp://$host:$port";
    $socket = @stream_socket_client(
        $endpoint,
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

    // AUTH LOGIN — skip if no credentials supplied (local relay)
    if ($user !== '' && $pass !== '') {
        $write("AUTH LOGIN\r\n");
        if (substr($read(), 0, 3) !== '334') return [false, $log];
        $write(base64_encode($user) . "\r\n");
        if (substr($read(), 0, 3) !== '334') return [false, $log];
        $write(base64_encode($pass) . "\r\n");
        if (substr($read(), 0, 3) !== '235') return [false, $log . "AUTH failed\n"];
    }

    $write("MAIL FROM:<$fromAddr>\r\n");
    if (substr($read(), 0, 3) !== '250') return [false, $log];

    $write("RCPT TO:<$toAddr>\r\n");
    if (substr($read(), 0, 3) !== '250') return [false, $log];

    $write("DATA\r\n");
    if (substr($read(), 0, 3) !== '354') return [false, $log];

    // Build message — multipart/alternative if HTML body present
    $headers = [];
    $headers[] = 'From: ' . encodeHeader($fromName) . ' <' . $fromAddr . '>';
    $headers[] = 'To: <' . $toAddr . '>';
    $headers[] = 'Reply-To: ' . encodeHeader($replyToName) . ' <' . $replyToAddr . '>';
    $headers[] = 'Subject: ' . encodeHeader($subject);
    $headers[] = 'Date: ' . date('r');
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'X-Mailer: MuggleShip-Form/1.0';

    if ($htmlBody === '') {
        $headers[] = 'Content-Type: text/plain; charset=utf-8';
        $headers[] = 'Content-Transfer-Encoding: 8bit';
        $msgBody = dotStuff($plainBody);
    } else {
        $boundary = 'mship_' . bin2hex(random_bytes(8));
        $headers[] = 'Content-Type: multipart/alternative; boundary="' . $boundary . '"';
        $parts = [];
        $parts[] = "--$boundary";
        $parts[] = "Content-Type: text/plain; charset=utf-8";
        $parts[] = "Content-Transfer-Encoding: 8bit";
        $parts[] = "";
        $parts[] = dotStuff($plainBody);
        $parts[] = "";
        $parts[] = "--$boundary";
        $parts[] = "Content-Type: text/html; charset=utf-8";
        $parts[] = "Content-Transfer-Encoding: 8bit";
        $parts[] = "";
        $parts[] = dotStuff($htmlBody);
        $parts[] = "";
        $parts[] = "--$boundary--";
        $msgBody = implode("\r\n", $parts);
    }

    $msg = implode("\r\n", $headers) . "\r\n\r\n" . $msgBody . "\r\n.\r\n";
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

// ============================================================================
// HTML email template — branded MuggleShip card. Uses inline styles so
// every email client (Gmail, Outlook, Apple Mail, mobile clients) renders
// it consistently. No external CSS, no images, no tracking.
// ============================================================================
function renderHtmlBody(string $name, array $fields, string $message, string $timestamp): string
{
    $h = function (string $s): string {
        return htmlspecialchars($s, ENT_QUOTES | ENT_HTML5, 'UTF-8');
    };

    // Field rows
    $rows = '';
    foreach ($fields as [$label, $value, $type]) {
        $valHtml = $h($value);
        if ($type === 'email') {
            $valHtml = '<a href="mailto:' . $h($value) . '" style="color:#ea580c;text-decoration:none;font-weight:500;">' . $valHtml . '</a>';
        } elseif ($type === 'tel') {
            $valHtml = '<a href="tel:' . $h(preg_replace('/[^+\d]/', '', $value)) . '" style="color:#ea580c;text-decoration:none;">' . $valHtml . '</a>';
        }
        $rows .= '
        <tr>
          <td style="padding:14px 0;border-bottom:1px solid #f0f0f0;">
            <div style="font:600 10px/1 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;letter-spacing:0.18em;text-transform:uppercase;color:#a3a3a3;margin-bottom:6px;">' . $h($label) . '</div>
            <div style="font:400 15px/1.4 -apple-system,BlinkMacSystemFont,Segoe UI,sans-serif;color:#1a1a1a;">' . $valHtml . '</div>
          </td>
        </tr>';
    }

    $msgEsc = nl2br($h($message));
    $nameEsc = $h($name);
    $tsEsc = $h($timestamp);

    return <<<HTML
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>New quote request</title>
</head>
<body style="margin:0;padding:32px 16px;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a1a;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;margin:0 auto;background:#ffffff;border-radius:12px;border:1px solid #e5e5e5;overflow:hidden;">
    <tr>
      <td style="background:#ea580c;padding:24px 32px;">
        <div style="font:600 11px/1 ui-monospace,SFMono-Regular,Menlo,monospace;letter-spacing:0.22em;text-transform:uppercase;color:rgba(255,255,255,0.75);margin-bottom:8px;">— New quote request</div>
        <h1 style="font:600 22px/1.2 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;margin:0;color:#ffffff;letter-spacing:-0.01em;">From {$nameEsc}</h1>
      </td>
    </tr>
    <tr>
      <td style="padding:24px 32px 8px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">{$rows}</table>
      </td>
    </tr>
    <tr>
      <td style="padding:8px 32px 24px;">
        <div style="font:600 10px/1 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;letter-spacing:0.18em;text-transform:uppercase;color:#a3a3a3;margin:18px 0 12px;">Message</div>
        <div style="font:400 15px/1.55 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#1a1a1a;padding:18px 20px;background:#fafafa;border-left:3px solid #ea580c;border-radius:4px;">{$msgEsc}</div>
      </td>
    </tr>
    <tr>
      <td style="padding:18px 32px;background:#fafafa;border-top:1px solid #e5e5e5;font:400 13px/1.5 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#525252;">
        <strong style="color:#1a1a1a;">Reply directly</strong> to this email — your response goes back to {$nameEsc}.
      </td>
    </tr>
    <tr>
      <td style="padding:14px 32px 22px;font:400 11px/1.4 -apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#a3a3a3;text-align:center;">
        Submitted {$tsEsc} · muggleship.com
      </td>
    </tr>
  </table>
</body>
</html>
HTML;
}
