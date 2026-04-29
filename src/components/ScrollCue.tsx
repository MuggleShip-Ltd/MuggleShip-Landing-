"use client";

import { useEffect, useState } from "react";

export default function ScrollCue() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => setHidden(window.scrollY > 120);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute left-1/2 -translate-x-1/2 bottom-8 flex flex-col items-center gap-2 transition-opacity duration-500 ${
        hidden ? "opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--ink-500)]">
        Scroll
      </span>
      <span
        className="block h-8 w-px relative overflow-hidden"
        style={{ background: "var(--border-soft)" }}
      >
        <span
          className="absolute top-0 left-0 w-full h-3"
          style={{
            background:
              "linear-gradient(to bottom, var(--ember), transparent)",
            animation: "scroll-cue 2.4s cubic-bezier(0.65, 0, 0.35, 1) infinite",
          }}
        />
      </span>
    </div>
  );
}
