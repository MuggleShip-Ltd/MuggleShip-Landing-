"use client";

import {
  TrendingUp,
  Layers,
  Warehouse,
  MessageSquare,
  FileCheck2,
  Rocket,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function HowPricingWorks() {
  const { t } = useLanguage();

  const drivers = [
    {
      number: "01.",
      icon: TrendingUp,
      title: t.pricing.driver1Title,
      desc: t.pricing.driver1Desc,
    },
    {
      number: "02.",
      icon: Layers,
      title: t.pricing.driver2Title,
      desc: t.pricing.driver2Desc,
    },
    {
      number: "03.",
      icon: Warehouse,
      title: t.pricing.driver3Title,
      desc: t.pricing.driver3Desc,
    },
  ];

  const steps = [
    {
      numeral: "I.",
      icon: MessageSquare,
      title: t.pricing.step1,
      desc: t.pricing.step1d,
    },
    {
      numeral: "II.",
      icon: FileCheck2,
      title: t.pricing.step2,
      desc: t.pricing.step2d,
    },
    {
      numeral: "III.",
      icon: Rocket,
      title: t.pricing.step3,
      desc: t.pricing.step3d,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-32 md:py-40 scroll-mt-20 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Single atmospheric ember pool — lower-right */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 90% 90%, rgba(255,106,31,0.06), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-24">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">SCENE 07</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.pricing.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.pricing.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.pricing.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.pricing.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Pricing-driver frames */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-32">
          {drivers.map((driver, i) => (
            <Reveal key={driver.number} delay={120 + i * 120}>
              <div
                className="group relative p-7 h-full overflow-hidden"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-faint)",
                  borderRadius: "1rem",
                }}
              >
                {/* Top hairline ember bar — 32px flush-left */}
                <div
                  className="absolute top-0 left-0 h-px"
                  style={{
                    width: "32px",
                    background: "var(--ember)",
                    boxShadow: "0 0 12px var(--ember)",
                  }}
                />

                <div className="flex items-start justify-between mb-8">
                  <span className="scene-label-ember">{driver.number}</span>
                  <driver.icon
                    size={18}
                    strokeWidth={1.6}
                    className="text-[var(--ink-500)] group-hover:text-[var(--ember-glow)] transition-colors"
                  />
                </div>

                <h3 className="text-xl font-medium text-[var(--ink-100)] mb-3 leading-tight">
                  {driver.title}
                </h3>
                <p className="text-sm text-[var(--ink-400)] leading-relaxed">
                  {driver.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Process divider title */}
        <Reveal delay={120}>
          <div className="flex items-center gap-3 mb-16">
            <span className="scene-label-ember">PROCESS</span>
            <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
            <h3 className="font-display italic text-3xl md:text-4xl text-[var(--ink-100)] leading-none">
              {t.pricing.stepsTitle}
            </h3>
          </div>
        </Reveal>

        {/* Process filmstrip — three numbered editorial steps */}
        <Reveal delay={240}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 mb-24">
            {steps.map((step) => (
              <div
                key={step.numeral}
                className="relative pt-8"
                style={{ borderTop: "1px solid var(--border-faint)" }}
              >
                <div className="font-display italic text-6xl md:text-7xl text-[var(--ember)] leading-none mb-6">
                  {step.numeral}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <step.icon size={16} strokeWidth={1.6} className="text-[var(--ember)]" />
                  <h4 className="text-lg font-medium text-[var(--ink-100)] leading-tight">
                    {step.title}
                  </h4>
                </div>
                <p className="text-sm text-[var(--ink-400)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Reassurance */}
        <Reveal delay={360}>
          <div className="flex justify-center mb-12">
            <span className="scene-label text-center">{t.pricing.reassurance}</span>
          </div>
        </Reveal>

        {/* Final CTA — left-aligned ember pill */}
        <Reveal delay={480}>
          <div className="flex justify-start">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-8 py-4 text-sm font-medium rounded-full transition-all bg-[var(--ember)] text-[var(--bg-void)]"
              style={{
                boxShadow:
                  "0 0 0 1px rgba(255,106,31,0.4), 0 12px 36px -8px rgba(255,106,31,0.5)",
              }}
            >
              {t.pricing.cta}
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
