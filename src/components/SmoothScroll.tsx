"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll() {
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

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // Anchor jumps: route every #hash click through Lenis with the
    // header's scroll-padding offset so the section lands flush at
    // the top of the viewport instead of half-way down.
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
      const padTop = parseInt(getComputedStyle(document.documentElement).scrollPaddingTop || "0", 10);
      lenis.scrollTo(el as HTMLElement, { offset: -padTop, duration: 1.6 });
      history.replaceState(null, "", hash);
    };

    document.addEventListener("click", onAnchorClick);

    return () => {
      document.removeEventListener("click", onAnchorClick);
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return null;
}
