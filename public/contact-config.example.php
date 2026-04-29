<?php
/**
 * SMTP credentials for contact-handler.php.
 *
 * Copy this file to contact-config.php on SiteGround
 * (in public_html/, alongside contact-handler.php), fill in the
 * password for the support@muggleship.com mailbox, and that's it.
 *
 * NEVER commit contact-config.php to git — it contains the mailbox
 * password. The .gitignore in this repo excludes it.
 */

return [
    // SiteGround usually accepts 'mail.<your-domain>'.
    // Alternatives if that fails:
    //   smtpout.eu.siteground.us  (EU servers)
    //   smtpout.us.siteground.us  (US servers)
    'smtp_host' => 'mail.muggleship.com',

    // Port 465 = SSL/TLS (preferred). Port 587 = STARTTLS (also supported).
    'smtp_port' => 465,

    // Mailbox username — full email address.
    'smtp_user' => 'support@muggleship.com',

    // Mailbox password — the one you set when creating the account in
    // SiteGround Site Tools → Email → Accounts.
    'smtp_pass' => 'PASTE_MAILBOX_PASSWORD_HERE',
];
