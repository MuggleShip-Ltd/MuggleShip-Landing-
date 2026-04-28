"use client";

import { ShieldCheck, Clock, Users, UserCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function AboutUs() {
  const { t } = useLanguage();

  const stats = [
    { icon: ShieldCheck, value: "100%", label: t.about.stat1, mark: "I" },
    { icon: Clock, value: "24h", label: t.about.stat2, mark: "II" },
    { icon: Users, value: "25+", label: t.about.stat3, mark: "III" },
    { icon: UserCheck, value: "5K+", label: t.about.stat4, mark: "IV" },
  ];

  return (
    <section
      id="about"
      className="relative py-32 md:py-40 scroll-mt-20 overflow-hidden"
      style={{ background: "var(--bg-band)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cinematic header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">SCENE 10</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.about.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.about.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.about.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed mb-5">
                {t.about.p1}
              </p>
              <p className="text-base text-[var(--ink-400)] leading-relaxed mb-8">
                {t.about.p2}
              </p>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label-ember">{t.about.since}</span>
              </div>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-mono uppercase tracking-[0.2em] text-[var(--ember)] hover:text-[var(--ember-glow)] transition-colors"
              >
                {t.about.cta}
                <ArrowRight
                  size={14}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
            </div>
          </div>
        </Reveal>

        {/* Numerical roll-call — bare row, no cards */}
        <Reveal delay={140}>
          <div className="flex items-center gap-3 mb-10">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase">
              X.
            </span>
            <span className="scene-label">By the record</span>
            <span className="h-px flex-1 bg-[var(--border-faint)]" />
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-6">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 80}>
                <div className="relative pt-5">
                  {/* Top hairline */}
                  <div className="absolute top-0 left-0 h-px w-full bg-[var(--border-faint)]">
                    <div
                      className="h-px"
                      style={{
                        width: "28px",
                        background: "var(--ember)",
                        boxShadow: "0 0 12px var(--ember)",
                      }}
                    />
                  </div>

                  <div className="flex items-center justify-between mb-5">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase">
                      {stat.mark}
                    </span>
                    <stat.icon
                      size={16}
                      className="text-[var(--ember)]"
                      strokeWidth={1.4}
                    />
                  </div>

                  <div className="stat-num font-display italic text-6xl md:text-7xl font-normal text-[var(--ink-100)] leading-[0.9]">
                    {stat.value}
                  </div>

                  <div className="mt-4 scene-label">{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
