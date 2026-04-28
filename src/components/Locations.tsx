"use client";

import { Building2, Warehouse, Mail, Phone } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function Locations() {
  const { t } = useLanguage();

  const offices = [
    {
      icon: Building2,
      tag: "01.",
      name: t.locations.hq,
      label: t.locations.hqLabel,
      address: t.locations.hqAddress,
    },
    {
      icon: Warehouse,
      tag: "02.",
      name: t.locations.ops,
      label: t.locations.opsLabel,
      address: t.locations.opsAddress,
    },
  ];

  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 85% 50%, rgba(255,106,31,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">SCENE 09</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.locations.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.locations.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.locations.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.locations.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
            {offices.map((office) => (
              <div
                key={office.name}
                className="group relative flex flex-col p-8 md:p-10 rounded-2xl transition-all duration-300 overflow-hidden"
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
                  <span className="scene-label-ember">{office.tag}</span>
                  <office.icon
                    size={20}
                    className="text-[var(--ink-500)] group-hover:text-[var(--ember-glow)] transition-colors"
                    strokeWidth={1.6}
                  />
                </div>

                <div className="relative">
                  <div className="text-2xl md:text-3xl font-medium text-[var(--ink-100)] mb-1">
                    {office.name}
                  </div>
                  <div className="scene-label mb-6">{office.label}</div>
                  <div className="text-sm text-[var(--ink-300)] leading-relaxed font-mono">
                    {office.address}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div
            className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 pt-8"
            style={{ borderTop: "1px solid var(--border-faint)" }}
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
              <span className="scene-label">{t.locations.shared}</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 text-sm">
              <a
                href={`mailto:${t.locations.sharedEmail}`}
                className="flex items-center gap-2.5 text-[var(--ink-200)] hover:text-[var(--ember)] transition-colors"
              >
                <Mail size={15} className="text-[var(--ember-glow)]" />
                {t.locations.sharedEmail}
              </a>
              <a
                href={`tel:${t.locations.sharedPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-[var(--ink-200)] hover:text-[var(--ember)] transition-colors font-mono"
              >
                <Phone size={15} className="text-[var(--ember-glow)]" />
                {t.locations.sharedPhone}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
