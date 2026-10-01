// Google Analytics 4 helpers.
//
// GA only loads when NEXT_PUBLIC_GA_MEASUREMENT_ID is set at build time AND
// the visitor has accepted analytics cookies (UK GDPR / PECR). Until then
// every helper here is a no-op, so call sites never need to check.

export const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";

export type Consent = "granted" | "denied";

const CONSENT_KEY = "muggleship-analytics-consent";

// Fired by the footer "Cookie settings" link to reopen the banner.
export const OPEN_COOKIE_SETTINGS = "muggleship:open-cookie-settings";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Tiny external store so components can useSyncExternalStore() the
// visitor's choice without a hydration mismatch.
const listeners = new Set<() => void>();
// Fallback when localStorage is blocked, so the banner still closes.
let memoryConsent: Consent | null = null;

export function subscribeConsent(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

export function readConsent(): Consent | null {
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : memoryConsent;
  } catch {
    return memoryConsent;
  }
}

export function writeConsent(value: Consent) {
  memoryConsent = value;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    /* storage blocked — the choice just won't persist */
  }
  // If the tag is already loaded (consent withdrawn mid-session), this
  // official kill switch stops it sending anything further.
  (window as unknown as Record<string, unknown>)[`ga-disable-${GA_ID}`] =
    value === "denied";
  window.gtag?.("consent", "update", { analytics_storage: value });
  if (value === "denied") clearGaCookies();
  listeners.forEach((l) => l());
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));
}

export function trackEvent(name: string, params?: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  window.gtag?.("event", name, params);
}

// Remove _ga / _ga_<id> cookies when consent is withdrawn. GA sets them on
// the registrable domain (e.g. .muggleship.com), so try each parent.
function clearGaCookies() {
  const names = document.cookie
    .split(";")
    .map((c) => c.split("=")[0].trim())
    .filter((n) => n === "_ga" || n.startsWith("_ga_"));
  const parts = window.location.hostname.split(".");
  const domains = parts.map((_, i) => parts.slice(i).join("."));
  for (const name of names) {
    for (const domain of ["", ...domains]) {
      document.cookie =
        `${name}=; Max-Age=0; path=/` + (domain ? `; domain=.${domain}` : "");
    }
  }
}
