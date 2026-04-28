"use client";

import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import ShippingPartners from "./ShippingPartners";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-32 md:pt-40 pb-0 overflow-hidden"
    >
      {/* Atmospheric backdrop — pools of warm light */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {/* Top-right ember pool */}
        <div
          className="absolute top-[-15%] right-[-10%] w-[80vw] h-[80vw] rounded-full opacity-[0.55] blur-3xl animate-drift"
          style={{
            background:
              "radial-gradient(circle, rgba(255,106,31,0.22) 0%, rgba(255,106,31,0.05) 40%, transparent 70%)",
          }}
        />
        {/* Bottom-left soft cool */}
        <div
          className="absolute bottom-[-30%] left-[-15%] w-[70vw] h-[70vw] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,153,90,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Vignette */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 50% 30%, transparent 30%, rgba(10,8,7,0.6) 95%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex-1 flex flex-col justify-center">
        {/* Scene marker */}
        <div className="cinema-fade-up flex items-center gap-3 mb-10" style={{ opacity: 0, animationDelay: "0.1s" }}>
          <span className="scene-label-ember">SCENE 01</span>
          <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
          <span className="scene-label">{t.hero.badge}</span>
        </div>

        {/* Headline — typographic statement, broken across lines for cinematic rhythm */}
        <h1 className="cinema-fade-up max-w-5xl text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5.75rem] leading-[0.98] tracking-[-0.04em] font-medium text-[var(--ink-100)]" style={{ opacity: 0, animationDelay: "0.25s" }}>
          {t.hero.title1}
          <br />
          <span className="font-display text-[var(--ember-glow)] italic">
            {t.hero.title2}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="cinema-fade-up mt-8 max-w-2xl text-lg md:text-xl text-[var(--ink-300)] leading-relaxed"
          style={{ opacity: 0, animationDelay: "0.45s" }}
        >
          {t.hero.subtitle}
        </p>

        {/* CTA row */}
        <div
          className="cinema-fade-up mt-10 flex flex-col sm:flex-row items-start gap-3"
          style={{ opacity: 0, animationDelay: "0.6s" }}
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

        {/* Marquee credits — three-line meta block */}
        <div
          className="cinema-fade-up mt-16 grid grid-cols-1 sm:grid-cols-3 gap-y-6 gap-x-10 max-w-3xl"
          style={{ opacity: 0, animationDelay: "0.8s" }}
        >
          <CreditItem mark="A" label={t.hero.check1} />
          <CreditItem mark="B" label={t.hero.check2} />
          <CreditItem mark="C" label={t.hero.check3} />
        </div>
      </div>

      {/* Animated horizon line + bottom credit strip */}
      <div className="relative mt-20">
        <div className="horizon-line max-w-7xl mx-auto" />
        <div className="cinema-fade-up" style={{ opacity: 0, animationDelay: "1s" }}>
          <ShippingPartners />
        </div>
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
