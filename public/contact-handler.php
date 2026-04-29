<?php
/**
 * MuggleShip contact form handler.
 *
 * Receives a multipart/form-data POST from the landing page contact form
 * (src/components/ContactForm.tsx) and emails it to support@muggleship.com
 * via SiteGround's PHP mail() function.
 *
 * Lives at: https://muggleship.com/contact-handler.php
 */

declare(strict_types=1);

// --- Config -----------------------------------------------------------------
// Sender MUST be a real mailbox on the muggleship.com domain so SiteGround's
// SMTP and downstream spam filters don't drop it for SPF/DKIM mismatch.
const RECIPIENT      = 'support@muggleship.com';
const FROM_ADDRESS   = 'support@muggleship.com';
const FROM_NAME      = 'MuggleShip Website';
const ALLOWED_ORIGIN = 'https://muggleship.com';

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

// --- Honeypot ---------------------------------------------------------------
// Bot fills the hidden "website" field; silently respond with success
// so they don't retry, but never send the email.
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
if ($name === '')    $errors[] = 'name';
if ($emailRaw === '') {
    $errors[] = 'email';
} elseif (!filter_var($emailRaw, FILTER_VALIDATE_EMAIL)) {
    $errors[] = 'email_invalid';
}
if ($message === '') $errors[] = 'message';
if (!$consent)        $errors[] = 'consent';

if (!empty($errors)) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid submission', 'fields' => $errors]);
    exit;
}

// Reject newlines in single-line text fields — basic header-injection guard
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
$body = implode("\n", $lines);

$headers = [];
$headers[] = 'From: ' . FROM_NAME . ' <' . FROM_ADDRESS . '>';
$headers[] = 'Reply-To: ' . $name . ' <' . $email . '>';
$headers[] = 'Content-Type: text/plain; charset=utf-8';
$headers[] = 'X-Mailer: MuggleShip-Form/1.0';

// On SiteGround, the 5th arg "-f<sender>" sets the envelope sender so SPF
// passes when the From header is on our own domain.
$envelopeFlag = '-f' . FROM_ADDRESS;
$ok = mail(RECIPIENT, $subject, $body, implode("\r\n", $headers), $envelopeFlag);

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Mail dispatch failed']);
}
