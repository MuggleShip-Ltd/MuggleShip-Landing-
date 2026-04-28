"use client";

import { Globe, ShieldCheck, Store, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const countries = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇮🇹", name: "Italy" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇦🇺", name: "Australia" },
];

export default function CrossBorder() {
  const { t } = useLanguage();

  const values = [
    { icon: ShieldCheck, title: t.crossBorder.val1Title, desc: t.crossBorder.val1Desc, num: "01" },
    { icon: Globe, title: t.crossBorder.val2Title, desc: t.crossBorder.val2Desc, num: "02" },
    { icon: Store, title: t.crossBorder.val3Title, desc: t.crossBorder.val3Desc, num: "03" },
    { icon: Zap, title: t.crossBorder.val4Title, desc: t.crossBorder.val4Desc, num: "04" },
  ];

  const stats = [
    { value: "15+", label: t.crossBorder.stat1, scene: "I." },
    { value: "99.9%", label: t.crossBorder.stat2, scene: "II." },
    { value: "3-5", label: t.crossBorder.stat3, scene: "III." },
  ];

  return (
    <section
      id="cross-border"
      className="py-32 md:py-40 scroll-mt-20 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Atmospheric ember pool — center-top */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 55% at 50% 6%, rgba(255,106,31,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">03.</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.crossBorder.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.crossBorder.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.crossBorder.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.crossBorder.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Marketplace coverage — minimal hairline grid */}
        <Reveal delay={120}>
          <div className="mb-20">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
              <span className="scene-label">
                {t.crossBorder.marketplacesTitle}
              </span>
            </div>
            <div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
              style={{ borderTop: "1px solid var(--border-faint)" }}
            >
              {countries.map((country) => (
                <div
                  key={country.name}
                  className="flex items-center gap-2 px-4 py-4"
                  style={{
                    borderBottom: "1px solid var(--border-faint)",
                    borderRight: "1px solid var(--border-faint)",
                  }}
                >
                  <span className="text-base">{country.flag}</span>
                  <span className="text-xs text-[var(--ink-400)] font-mono uppercase tracking-wider">
                    {country.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Value Props — dark elevated cards */}
        <Reveal delay={180}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24">
            {values.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col p-7 rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-faint)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 0%, rgba(255,106,31,0.08), transparent 60%)",
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,106,31,0.4), 0 24px 60px -20px rgba(255,106,31,0.25)",
                  }}
                />

                <div className="relative flex items-center justify-between mb-8">
                  <span className="scene-label-ember">{item.num}</span>
                  <item.icon
                    size={18}
                    className="text-[var(--ink-500)] group-hover:text-[var(--ember-glow)] transition-colors"
                    strokeWidth={1.6}
                  />
                </div>

                <h3 className="relative text-lg font-medium text-[var(--ink-100)] mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="relative text-sm text-[var(--ink-400)] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Stats — Stats.tsx pattern, smaller scale */}
        <Reveal delay={240}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="relative pt-6">
                <div className="h-px w-full bg-[var(--border-faint)] absolute top-0 left-0">
                  <div
                    className="h-px"
                    style={{
                      width: "32px",
                      background: "var(--ember)",
                      boxShadow: "0 0 12px var(--ember)",
                    }}
                  />
                </div>

                <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase mb-5">
                  {stat.scene}
                </div>

                <div className="stat-num font-display italic text-5xl md:text-6xl font-normal text-[var(--ink-100)] leading-[0.9]">
                  {stat.value}
                </div>

                <div className="mt-4 text-xs text-[var(--ink-400)] uppercase tracking-wider font-mono leading-snug max-w-[220px]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
