"use client";

import { MapPin, Building2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const locations = [
  { city: "Bedford, UK", hub: "UK Hub", address: "Bedford, United Kingdom", isHQ: true },
  { city: "NJ, USA", hub: "New Jersey Hub", address: "Little Falls, NJ 07424", isHQ: false },
  { city: "TX, USA", hub: "Texas Hub", address: "Rosenberg, TX", isHQ: false },
  { city: "ON, Canada", hub: "Canada Hub", address: "Kitchener, Ontario", isHQ: false },
];

export default function Locations() {
  const { t } = useLanguage();

  return (
    <section
      className="relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--bg-void)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cinematic header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">SCENE 11</span>
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

        {/* Section II marker */}
        <Reveal delay={120}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase">
              XI.
            </span>
            <span className="scene-label">Network</span>
            <span className="h-px flex-1 bg-[var(--border-faint)]" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {locations.map((loc) => (
              <div
                key={loc.city}
                className="group relative flex flex-col p-7 rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-faint)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-strong)";
                  e.currentTarget.style.boxShadow =
                    "0 0 0 1px var(--ember-shadow), 0 18px 60px -20px var(--ember-shadow)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-faint)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                {/* HQ hairline + label */}
                {loc.isHQ && (
                  <>
                    <div
                      className="absolute top-0 left-0 h-px w-full"
                      style={{ background: "var(--border-faint)" }}
                    >
                      <div
                        className="h-px"
                        style={{
                          width: "48px",
                          background: "var(--ember)",
                          boxShadow: "0 0 12px var(--ember)",
                        }}
                      />
                    </div>
                    <div className="scene-label-ember mb-5">
                      {t.locations.hq}
                    </div>
                  </>
                )}

                {!loc.isHQ && (
                  <div
                    className="absolute top-0 left-0 h-px w-full"
                    style={{ background: "var(--border-faint)" }}
                  />
                )}

                <div className="flex items-center justify-between mb-8 mt-1">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors uppercase">
                    {loc.isHQ ? "HQ" : "HUB"}
                  </span>
                  <Building2
                    size={18}
                    className="text-[var(--ember)]"
                    strokeWidth={1.4}
                  />
                </div>

                <h3 className="text-lg font-medium text-[var(--ink-100)] mb-1 leading-tight">
                  {loc.city}
                </h3>
                <p className="text-sm text-[var(--ink-400)] mb-5">{loc.hub}</p>

                <div className="mt-auto flex items-center gap-1.5 text-xs text-[var(--ink-500)]">
                  <MapPin size={12} strokeWidth={1.6} />
                  {loc.address}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="flex justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium rounded-full transition-all"
              style={{
                background: "var(--ember)",
                color: "var(--bg-void)",
                boxShadow:
                  "0 0 0 1px rgba(255,106,31,0.4), 0 8px 28px -8px var(--ember-shadow)",
              }}
            >
              {t.locations.cta}
              <ArrowRight
                size={16}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
