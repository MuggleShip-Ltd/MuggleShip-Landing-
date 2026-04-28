"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function Stats() {
  const { t } = useLanguage();

  const items = [
    { value: t.stats.stat1Value, label: t.stats.stat1Label, scene: "II.I" },
    { value: t.stats.stat2Value, label: t.stats.stat2Label, scene: "II.II" },
    { value: t.stats.stat3Value, label: t.stats.stat3Label, scene: "II.III" },
    { value: t.stats.stat4Value, label: t.stats.stat4Label, scene: "II.IV" },
  ];

  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--bg-void)" }}
    >
      {/* Atmospheric ember pool */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 50% 50%, rgba(255,106,31,0.09), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-20">
            <span className="scene-label-ember">SCENE 03</span>
            <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
            <span className="scene-label">{t.stats.kicker}</span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 100}>
              <div className="relative pt-6">
                {/* Top hairline ember */}
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

                <div className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase mb-6">
                  {item.scene}
                </div>

                <div
                  className="stat-num font-display italic text-7xl md:text-8xl font-normal text-[var(--ink-100)] leading-[0.85]"
                >
                  {item.value}
                </div>

                <div className="mt-5 text-sm text-[var(--ink-400)] leading-snug max-w-[200px] uppercase tracking-wider font-mono">
                  {item.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
