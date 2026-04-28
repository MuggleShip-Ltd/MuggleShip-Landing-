"use client";

import { HandshakeIcon, TrendingDown, Headset, LayoutGrid } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const reasons = [
    {
      mark: "A.",
      icon: HandshakeIcon,
      title: t.whyUs.feature1Title,
      desc: t.whyUs.feature1Desc,
    },
    {
      mark: "B.",
      icon: TrendingDown,
      title: t.whyUs.feature2Title,
      desc: t.whyUs.feature2Desc,
    },
    {
      mark: "C.",
      icon: Headset,
      title: t.whyUs.feature3Title,
      desc: t.whyUs.feature3Desc,
    },
    {
      mark: "D.",
      icon: LayoutGrid,
      title: t.whyUs.feature4Title,
      desc: t.whyUs.feature4Desc,
    },
  ];

  return (
    <section
      className="py-32 md:py-40 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Single soft ember pool — top-left */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 55% at 8% 10%, rgba(255,106,31,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">INTRO</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.whyUs.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.whyUs.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.whyUs.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.whyUs.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Four-reason editorial row */}
        <Reveal delay={120}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {reasons.map((reason) => (
              <div key={reason.mark} className="relative pt-8">
                {/* Top hairline with 32px ember segment flush-left */}
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

                <div className="scene-label-ember mb-6">{reason.mark}</div>

                <reason.icon
                  size={24}
                  strokeWidth={1.6}
                  className="mb-5 text-[var(--ember-glow)]"
                />

                <h3 className="text-lg font-medium text-[var(--ink-100)] mb-3 leading-tight">
                  {reason.title}
                </h3>
                <p className="text-sm text-[var(--ink-400)] leading-relaxed">
                  {reason.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
