"use client";

import {
  RotateCcw,
  FileText,
  ClipboardList,
  PackagePlus,
  Trash2,
  Send,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function ReturnsManagement() {
  const { t } = useLanguage();

  const steps = [
    { icon: RotateCcw, title: t.returns.s1, desc: t.returns.s1d, num: "01" },
    { icon: FileText, title: t.returns.s2, desc: t.returns.s2d, num: "02" },
    { icon: ClipboardList, title: t.returns.s3, desc: t.returns.s3d, num: "03" },
    { icon: PackagePlus, title: t.returns.s4, desc: t.returns.s4d, num: "04" },
    { icon: Trash2, title: t.returns.s5, desc: t.returns.s5d, num: "05" },
    { icon: Send, title: t.returns.s6, desc: t.returns.s6d, num: "06" },
  ];

  const metrics = [
    { value: "98%", label: t.returns.m1, scene: "I." },
    { value: "24h", label: t.returns.m2, scene: "II." },
    { value: "100%", label: t.returns.m3, scene: "III." },
  ];

  return (
    <section
      id="returns"
      className="py-32 md:py-40 scroll-mt-20 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Atmospheric ember pool — bottom-left */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 8% 92%, rgba(255,106,31,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">04.</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.returns.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.returns.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.returns.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.returns.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-24">
            {steps.map((step) => (
              <div
                key={step.title}
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
                  <span className="scene-label-ember">{step.num}</span>
                  <step.icon
                    size={18}
                    className="text-[var(--ink-500)] group-hover:text-[var(--ember-glow)] transition-colors"
                    strokeWidth={1.6}
                  />
                </div>

                <h3 className="relative text-lg font-medium text-[var(--ink-100)] mb-2 leading-tight">
                  {step.title}
                </h3>
                <p className="relative text-sm text-[var(--ink-400)] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="relative pt-6">
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
                  {metric.scene}
                </div>

                <div className="stat-num font-display italic text-5xl md:text-6xl font-normal text-[var(--ink-100)] leading-[0.9]">
                  {metric.value}
                </div>

                <div className="mt-4 text-xs text-[var(--ink-400)] uppercase tracking-wider font-mono leading-snug max-w-[220px]">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
