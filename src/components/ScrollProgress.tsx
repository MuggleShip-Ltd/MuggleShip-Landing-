"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const doc = document.documentElement;
        const max = doc.scrollHeight - doc.clientHeight;
        const next = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0;
        setProgress(next);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      aria-hidden
      className="fixed top-0 left-0 right-0 z-[60] h-[2px] pointer-events-none"
      style={{ background: "transparent" }}
    >
      <div
        className="h-full origin-left transition-transform duration-150 ease-out"
        style={{
          background:
            "linear-gradient(to right, var(--ember-deep), var(--ember), var(--ember-glow))",
          boxShadow: "0 0 12px rgba(255, 122, 71, 0.5)",
          transform: `scaleX(${progress})`,
          transformOrigin: "0 50%",
        }}
      />
    </div>
  );
}
