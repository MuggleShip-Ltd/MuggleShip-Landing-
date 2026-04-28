"use client";

import {
  TrendingUp,
  ChartColumn,
  SlidersHorizontal,
  Activity,
  Plug,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AutomatedPricing() {
  const { t } = useLanguage();

  const features = [
    { icon: SlidersHorizontal, title: t.automatedPricing.f1Title, desc: t.automatedPricing.f1Desc },
    { icon: ChartColumn, title: t.automatedPricing.f2Title, desc: t.automatedPricing.f2Desc },
    { icon: TrendingUp, title: t.automatedPricing.f3Title, desc: t.automatedPricing.f3Desc },
    { icon: Activity, title: t.automatedPricing.f4Title, desc: t.automatedPricing.f4Desc },
    { icon: Plug, title: t.automatedPricing.f5Title, desc: t.automatedPricing.f5Desc },
    { icon: Globe, title: t.automatedPricing.f6Title, desc: t.automatedPricing.f6Desc },
  ];

  return (
    <section
      id="automated-pricing"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-emerald-50/30 via-white/50 to-teal-50/20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-emerald-700 text-sm font-medium mb-4">
            <SlidersHorizontal size={14} />
            {t.automatedPricing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.automatedPricing.title1}{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              {t.automatedPricing.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.automatedPricing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-xl hover:shadow-emerald-100/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-full text-xs text-emerald-700">
            {t.automatedPricing.availability}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold rounded-full hover:from-emerald-600 hover:to-teal-600 transition-all shadow-xl shadow-emerald-500/20"
          >
            {t.automatedPricing.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
