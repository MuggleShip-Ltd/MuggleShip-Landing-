"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import Script from "next/script";
import Link from "next/link";
import {
  GA_ID,
  OPEN_COOKIE_SETTINGS,
  readConsent,
  subscribeConsent,
  trackEvent,
  writeConsent,
  type Consent,
} from "@/lib/analytics";

// GA4 loader + cookie banner. Google's tag is only requested after the
// visitor clicks "Accept" (Consent Mode "basic"), advertising signals stay
// off, and the footer "Cookie settings" link reopens the banner so consent
// can be withdrawn at any time.
export default function Analytics() {
  // null = no choice yet; undefined = server render (storage unknown)
  const consent = useSyncExternalStore(
    subscribeConsent,
    readConsent,
    () => undefined,
  );
  const [settingsOpen, setSettingsOpen] = useState(false);
  const bannerOpen = consent === null || settingsOpen;

  useEffect(() => {
    if (!GA_ID) return;
    const reopen = () => setSettingsOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS, reopen);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, reopen);
  }, []);

  // Contact-intent clicks: phone, WhatsApp, email and every "Get a quote" CTA.
  useEffect(() => {
    if (consent !== "granted") return;
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element | null)?.closest?.("a");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      const text = (link.textContent || "").trim().slice(0, 100);
      if (href.startsWith("tel:")) {
        trackEvent("contact_phone_click", { link_text: text });
      } else if (href.startsWith("https://wa.me/")) {
        trackEvent("contact_whatsapp_click", { link_text: text || "WhatsApp" });
      } else if (href.startsWith("mailto:")) {
        trackEvent("contact_email_click", { link_text: text });
      } else if (href.endsWith("#contact")) {
        trackEvent("quote_cta_click", { link_text: text });
      }
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [consent]);

  if (!GA_ID) return null;

  const choose = (value: Consent) => {
    writeConsent(value);
    setSettingsOpen(false);
  };

  return (
    <>
      {consent === "granted" && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              window.gtag = gtag;
              gtag('consent', 'default', {
                analytics_storage: 'granted',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
              gtag('js', new Date());
              gtag('config', ${JSON.stringify(GA_ID)}, {
                allow_google_signals: false,
                allow_ad_personalization_signals: false
              });
            `}
          </Script>
        </>
      )}

      {bannerOpen && (
        <div
          role="dialog"
          aria-live="polite"
          aria-label="Cookie consent"
          className="fixed inset-x-3 bottom-3 sm:inset-x-auto sm:left-6 sm:bottom-6 z-[70] sm:max-w-md rounded-2xl p-5 sm:p-6 shadow-2xl"
          style={{
            background: "var(--bg-elevated)",
            border: "1px solid var(--border-soft)",
          }}
        >
          <p className="text-sm font-medium text-[var(--ink-100)] mb-1.5">
            Cookies &amp; analytics
          </p>
          <p className="text-sm text-[var(--ink-300)] leading-relaxed mb-4">
            We&apos;d like to use Google Analytics cookies to understand how
            visitors use our site. No advertising, no cross-site tracking.
            See our{" "}
            <Link
              href="/privacy/#cookies"
              className="underline underline-offset-2 text-[var(--ink-100)] hover:text-[var(--ember)]"
            >
              Privacy Policy
            </Link>
            .
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => choose("denied")}
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-full border transition-colors text-[var(--ink-200)] hover:text-[var(--ink-100)]"
              style={{ borderColor: "var(--border-soft)" }}
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => choose("granted")}
              className="flex-1 px-4 py-2.5 text-sm font-medium rounded-full transition-all"
              style={{ background: "var(--ember)", color: "var(--bg-void)" }}
            >
              Accept
            </button>
          </div>
        </div>
      )}
    </>
  );
}
