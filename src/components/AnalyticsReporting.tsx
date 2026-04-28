"use client";

import {
  HeartPulse,
  Timer,
  ChartLine,
  Boxes,
  RotateCcw,
  Mail,
  ChartColumn,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AnalyticsReporting() {
  const { t } = useLanguage();

  const features = [
    { icon: HeartPulse, title: t.analytics.f1Title, desc: t.analytics.f1Desc },
    { icon: Timer, title: t.analytics.f2Title, desc: t.analytics.f2Desc },
    { icon: ChartLine, title: t.analytics.f3Title, desc: t.analytics.f3Desc },
    { icon: Boxes, title: t.analytics.f4Title, desc: t.analytics.f4Desc },
    { icon: RotateCcw, title: t.analytics.f5Title, desc: t.analytics.f5Desc },
    { icon: Mail, title: t.analytics.f6Title, desc: t.analytics.f6Desc },
  ];

  return (
    <section
      id="analytics"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-indigo-50/30 via-white/50 to-blue-50/20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-indigo-700 text-sm font-medium mb-4">
            <ChartColumn size={14} />
            {t.analytics.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.analytics.title1}{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
              {t.analytics.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.analytics.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-indigo-100/50 shadow-sm hover:shadow-xl hover:shadow-indigo-100/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-50 border border-indigo-200 rounded-full text-xs text-indigo-700">
            {t.analytics.availability}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-semibold rounded-full hover:from-indigo-600 hover:to-blue-600 transition-all shadow-xl shadow-indigo-500/20"
          >
            {t.analytics.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
