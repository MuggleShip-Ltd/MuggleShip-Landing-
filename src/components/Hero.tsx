"use client";

import { useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Hero() {
  const { t } = useLanguage();
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const emberA = useRef<HTMLDivElement>(null);
  const emberB = useRef<HTMLDivElement>(null);

  // Trigger word-stagger on mount
  useEffect(() => {
    const t = setTimeout(() => {
      headlineRef.current?.classList.add("rv-in");
    }, 250);
    return () => clearTimeout(t);
  }, []);

  // Subtle scroll-linked parallax for the ember pools — tied to window scroll,
  // not the section's bounding box, so the camera-pan reads while the hero
  // is on screen.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    let raf = 0;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        const y = window.scrollY;
        if (emberA.current) emberA.current.style.transform = `translate3d(${y * 0.05}px, ${y * 0.25}px, 0)`;
        if (emberB.current) emberB.current.style.transform = `translate3d(${-y * 0.04}px, ${y * 0.15}px, 0)`;
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const renderWords = (text: string) =>
    text.split(/(\s+)/).map((chunk, i) =>
      /^\s+$/.test(chunk) ? (
        <span key={i}>{chunk}</span>
      ) : (
        <span
          key={i}
          className="word"
          style={{ transitionDelay: `${i * 60}ms` }}
        >
          {chunk}
        </span>
      )
    );

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 md:pt-40 pb-0 overflow-hidden"
    >
      {/* Atmospheric backdrop — daylight studio */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div
          ref={emberA}
          className="absolute top-[-20%] right-[-15%] w-[75vw] h-[75vw] rounded-full opacity-70 blur-3xl animate-drift will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(249,115,22,0.16) 0%, rgba(249,115,22,0.04) 40%, transparent 70%)",
          }}
        />
        <div
          ref={emberB}
          className="absolute bottom-[-30%] left-[-15%] w-[65vw] h-[65vw] rounded-full opacity-60 blur-3xl will-change-transform"
          style={{
            background:
              "radial-gradient(circle, rgba(194,65,12,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        <div
          className="cinema-fade-up flex items-center gap-3 mb-10"
          style={{ animationDelay: "0.1s" }}
        >
          <span className="scene-label-ember">SCENE 01</span>
          <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
          <span className="scene-label">{t.hero.badge}</span>
        </div>

        <h1
          ref={headlineRef}
          className="rv-words max-w-5xl text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] leading-[0.98] tracking-[-0.04em] font-medium text-[var(--ink-100)]"
        >
          {renderWords(t.hero.title1)}
          <br />
          <span className="font-display text-[var(--ember-glow)] italic">
            {t.hero.title2.split(/(\s+)/).map((chunk, i) =>
              /^\s+$/.test(chunk) ? (
                <span key={`b-${i}`}>{chunk}</span>
              ) : (
                <span
                  key={`b-${i}`}
                  className="word"
                  style={{ transitionDelay: `${(i + t.hero.title1.split(/\s+/).length) * 60 + 80}ms` }}
                >
                  {chunk}
                </span>
              )
            )}
          </span>
        </h1>

        <p
          className="cinema-fade-up mt-8 max-w-2xl text-lg md:text-xl text-[var(--ink-300)] leading-relaxed"
          style={{ animationDelay: "0.85s" }}
        >
          {t.hero.subtitle}
        </p>

        <div
          className="cinema-fade-up mt-10 flex flex-col sm:flex-row items-start gap-3"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition-all"
            style={{
              background: "var(--ember)",
              color: "var(--bg-void)",
              boxShadow:
                "0 0 0 1px rgba(255,106,31,0.4), 0 12px 36px -8px rgba(255,106,31,0.5)",
            }}
          >
            {t.hero.cta1}
            <ArrowRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </a>
          <a
            href="#services"
            className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full border transition-colors"
            style={{
              borderColor: "var(--border-soft)",
              color: "var(--ink-200)",
            }}
          >
            {t.hero.cta2}
          </a>
        </div>

        <div
          className="cinema-fade-up mt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-10 max-w-3xl"
          style={{ animationDelay: "1.2s" }}
        >
          <CreditItem mark="A" label={t.hero.check1} />
          <CreditItem mark="B" label={t.hero.check2} />
          <CreditItem mark="C" label={t.hero.check3} />
        </div>
      </div>

      <div className="relative mt-24 mb-12">
        <div className="horizon-line max-w-7xl mx-auto" />
      </div>
    </section>
  );
}

function CreditItem({ mark, label }: { mark: string; label: string }) {
  return (
    <div className="flex items-baseline gap-3">
      <span
        className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase"
        aria-hidden
      >
        {mark}
      </span>
      <span className="text-sm text-[var(--ink-200)] leading-snug">{label}</span>
    </div>
  );
}
