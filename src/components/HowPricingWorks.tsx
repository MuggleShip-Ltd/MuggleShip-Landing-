"use client";

import {
  Calculator,
  TrendingUp,
  Layers,
  Warehouse,
  MessageSquare,
  FileCheck2,
  Rocket,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function HowPricingWorks() {
  const { t } = useLanguage();

  const drivers = [
    {
      number: "01",
      icon: TrendingUp,
      title: t.pricing.driver1Title,
      desc: t.pricing.driver1Desc,
    },
    {
      number: "02",
      icon: Layers,
      title: t.pricing.driver2Title,
      desc: t.pricing.driver2Desc,
    },
    {
      number: "03",
      icon: Warehouse,
      title: t.pricing.driver3Title,
      desc: t.pricing.driver3Desc,
    },
  ];

  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: t.pricing.step1,
      desc: t.pricing.step1d,
    },
    {
      number: "02",
      icon: FileCheck2,
      title: t.pricing.step2,
      desc: t.pricing.step2d,
    },
    {
      number: "03",
      icon: Rocket,
      title: t.pricing.step3,
      desc: t.pricing.step3d,
    },
  ];

  return (
    <section
      id="pricing"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-orange-50/20 via-white/60 to-amber-50/20 scroll-mt-20"
    >
      {/* Decorative blobs */}
      <div className="absolute top-20 -left-20 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -right-20 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
            <Calculator size={14} />
            {t.pricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.pricing.title1}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              {t.pricing.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.pricing.subtitle}</p>
        </div>

        {/* Pricing drivers */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-20">
          {drivers.map((driver) => (
            <div
              key={driver.number}
              className="group relative p-8 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm hover:shadow-xl hover:shadow-orange-100/40 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Subtle gradient accent on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50/0 via-transparent to-amber-50/0 group-hover:from-orange-50/40 group-hover:to-amber-50/30 transition-all duration-500 pointer-events-none" />

              <div className="relative flex items-start justify-between mb-6">
                <span className="font-display text-6xl font-semibold text-orange-200/90 leading-none select-none">
                  {driver.number}
                </span>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                  <driver.icon size={22} className="text-white" />
                </div>
              </div>

              <h3 className="relative text-xl font-bold text-gray-900 mb-2">
                {driver.title}
              </h3>
              <p className="relative text-sm text-gray-600 leading-relaxed">
                {driver.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Steps */}
        <div className="mb-12">
          <h3 className="text-center text-2xl sm:text-3xl font-black text-gray-900 mb-10">
            {t.pricing.stepsTitle}
          </h3>

          <div className="flex flex-col lg:flex-row items-stretch justify-center gap-4 lg:gap-2">
            {steps.map((step, idx) => (
              <div key={step.number} className="flex flex-col lg:flex-row items-stretch lg:items-center lg:flex-1">
                <div className="group flex-1 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-orange-100/60 shadow-sm hover:shadow-lg hover:shadow-orange-100/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-orange-500 to-amber-500" />
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-11 h-11 bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <step.icon size={20} className="text-orange-600" />
                    </div>
                    <span className="font-display text-2xl font-semibold text-orange-300/90 leading-none select-none">
                      {step.number}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                {/* Chevron between steps - desktop only */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex items-center justify-center px-1 text-orange-400 shrink-0">
                    <ChevronRight size={28} strokeWidth={2.5} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Reassurance */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex items-center gap-2 bg-green-50/70 border border-green-200/50 text-green-700 rounded-full px-6 py-3 text-sm font-medium">
            <CheckCircle2 size={16} className="text-green-600 shrink-0" />
            <span>{t.pricing.reassurance}</span>
          </div>
        </div>

        {/* CTA */}
        <div className="flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-base font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/25 hover:shadow-2xl hover:shadow-orange-500/30 hover:-translate-y-0.5"
          >
            {t.pricing.cta}
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
