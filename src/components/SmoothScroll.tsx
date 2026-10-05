"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

// Document-relative top of an anchor target, ignoring CSS transforms.
// Sections sit inside <Reveal> wrappers that are translated down until
// they animate in, so getBoundingClientRect() would be off by that amount.
function anchorY(el: HTMLElement) {
  let y = 0;
  for (let n: HTMLElement | null = el; n; n = n.offsetParent as HTMLElement | null) {
    y += n.offsetTop;
  }
  const margin = parseFloat(getComputedStyle(el).scrollMarginTop) || 0;
  return Math.max(0, y - margin);
}

export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  // Arriving on a page with a #hash (e.g. "Contact" clicked on /services/
  // → /#contact): once the new page has laid out, align the target with
  // its scroll-margin the same way an in-page anchor click does.
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash || hash === "#") return;
    const id = window.setTimeout(() => {
      const el = document.querySelector<HTMLElement>(hash);
      if (!el) return;
      const y = anchorY(el);
      // resize() first: Lenis caches the scrollable height, and after a
      // client-side navigation it still holds the previous page's limit.
      if (lenisRef.current) {
        lenisRef.current.resize();
        lenisRef.current.scrollTo(y, { immediate: true, force: true });
      }
      else window.scrollTo(0, y);
    }, 150);
    return () => window.clearTimeout(id);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Anchor jumps: route every #hash click through Lenis. Lenis applies
    // the target's scroll-margin-top itself, which is what keeps the
    // section clear of the fixed header.
    const onAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#") return;

      let hash = "";
      try {
        const url = new URL(target.href, window.location.href);
        if (url.pathname !== window.location.pathname) return;
        hash = url.hash;
      } catch {
        return;
      }
      if (!hash || hash === "#") return;

      const el = document.querySelector(hash);
      if (!el) return;
      e.preventDefault();
      const section = el as HTMLElement;
      // Refresh Lenis's cached scroll limit; if the page grew since it was
      // measured, the scroll would otherwise stop short of the target.
      lenis.resize();
      lenis.scrollTo(anchorY(section), {
        duration: 1.6,
        // The target is measured when the scroll starts. If anything above
        // it changes height mid-scroll, land on the section's real position.
        onComplete: () => {
          const y = anchorY(section);
          if (Math.abs(window.scrollY - y) > 2) lenis.scrollTo(y, { immediate: true });
        },
      });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return null;
}
