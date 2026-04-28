"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollTop}
      aria-label="Back to top"
      className={`group fixed right-5 sm:right-8 bottom-6 sm:bottom-8 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full transition-all duration-500 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none"
      }`}
      style={{
        background: "var(--ember)",
        color: "#0d1117",
        boxShadow:
          "0 0 0 1px rgba(255,122,71,0.4), 0 10px 36px -10px rgba(255,122,71,0.5)",
      }}
    >
      <ArrowUp size={18} strokeWidth={2} className="transition-transform group-hover:-translate-y-0.5" />
    </button>
  );
}
