"use client";

import { memo, useEffect, useRef } from "react";
import Script from "next/script";

declare global {
  interface Window {
    Trustpilot?: {
      loadFromElement: (element: HTMLElement, forceReload?: boolean) => void;
    };
  }
}

const BOOTSTRAP_SRC =
  "https://widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js";
const PROFILE_URL = "https://www.trustpilot.com/review/www.muggleship.com";

type Props = {
  fallbackLabel: string;
  className?: string;
};

// Trustpilot "Review Collector" TrustBox. The bootstrap script replaces the
// fallback link with an iframe, so this component is memoized to keep React
// from re-rendering children it no longer owns.
function TrustpilotWidget({ fallbackLabel, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // The bootstrap only scans the DOM once, when it first loads. If it is
    // already on the page (client-side navigation back to /), render this
    // TrustBox explicitly. It skips containers it has already filled.
    if (ref.current && window.Trustpilot) {
      window.Trustpilot.loadFromElement(ref.current);
    }
  }, []);

  return (
    <>
      <Script src={BOOTSTRAP_SRC} strategy="afterInteractive" />
      <div
        ref={ref}
        className={`trustpilot-widget ${className}`}
        data-locale="en-US"
        data-template-id="56278e9abfbbba0bdcd568bc"
        data-businessunit-id="6abebb22f5a22ac768579ce6"
        data-style-height="52px"
        data-style-width="100%"
        data-token="2a52a79b-97f5-4283-acc7-6136d22f9255"
      >
        <a
          href={PROFILE_URL}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center h-[52px] text-sm text-[var(--ink-300)] hover:text-[var(--ember)] transition-colors"
        >
          {fallbackLabel}
        </a>
      </div>
    </>
  );
}

export default memo(TrustpilotWidget);
