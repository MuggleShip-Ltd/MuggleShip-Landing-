"use client";

import {
  Tag,
  ShieldCheck,
  Search,
  Eraser,
  Layers,
  Warehouse,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function FBAPrep() {
  const { t } = useLanguage();

  const services = [
    { icon: Tag, title: t.fba.s1Title, desc: t.fba.s1Desc, num: "01" },
    { icon: ShieldCheck, title: t.fba.s2Title, desc: t.fba.s2Desc, num: "02" },
    { icon: Search, title: t.fba.s3Title, desc: t.fba.s3Desc, num: "03" },
    { icon: Eraser, title: t.fba.s4Title, desc: t.fba.s4Desc, num: "04" },
    { icon: Layers, title: t.fba.s5Title, desc: t.fba.s5Desc, num: "05" },
    { icon: Warehouse, title: t.fba.s6Title, desc: t.fba.s6Desc, num: "06" },
  ];

  return (
    <section
      id="fba-prep"
      className="py-32 md:py-40 scroll-mt-20 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Atmospheric ember pool — top-left */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 8% 12%, rgba(255,106,31,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">01.</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.fba.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.fba.title}
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.fba.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {services.map((s) => (
              <div
                key={s.title}
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
                  <span className="scene-label-ember">{s.num}</span>
                  <s.icon
                    size={18}
                    className="text-[var(--ink-500)] group-hover:text-[var(--ember-glow)] transition-colors"
                    strokeWidth={1.6}
                  />
                </div>

                <h3 className="relative text-lg font-medium text-[var(--ink-100)] mb-2 leading-tight">
                  {s.title}
                </h3>
                <p className="relative text-sm text-[var(--ink-400)] leading-relaxed">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="flex justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full transition-all"
              style={{
                background: "var(--ember)",
                color: "var(--bg-void)",
                boxShadow:
                  "0 0 0 1px rgba(255,106,31,0.4), 0 12px 36px -8px rgba(255,106,31,0.5)",
              }}
            >
              {t.fba.requestQuote}
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
