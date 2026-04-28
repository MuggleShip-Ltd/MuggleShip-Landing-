"use client";

import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function Stats() {
  const { t } = useLanguage();

  const items = [
    { value: t.stats.stat1Value, label: t.stats.stat1Label },
    { value: t.stats.stat2Value, label: t.stats.stat2Label },
    { value: t.stats.stat3Value, label: t.stats.stat3Label },
    { value: t.stats.stat4Value, label: t.stats.stat4Label },
  ];

  return (
    <section className="py-20 md:py-24 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex items-center gap-3 mb-12 text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
            <span className="inline-block w-7 h-px bg-orange-500" />
            {t.stats.kicker}
          </div>
        </Reveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 border-t border-neutral-800">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 80}>
              <div className="pt-10 border-t border-orange-500 -mt-px max-w-[180px]">
                <div className="stat-num text-5xl md:text-6xl font-semibold text-white leading-none">
                  {item.value}
                </div>
                <div className="mt-3 text-sm text-neutral-400 leading-snug">
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
