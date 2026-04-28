"use client";

import { RotateCcw, FileText, ClipboardList, PackagePlus, Trash2, Send, Clock, CheckCircle2, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ReturnsManagement() {
  const { t } = useLanguage();

  const steps = [
    { icon: RotateCcw, title: t.returns.s1, desc: t.returns.s1d },
    { icon: FileText, title: t.returns.s2, desc: t.returns.s2d },
    { icon: ClipboardList, title: t.returns.s3, desc: t.returns.s3d },
    { icon: PackagePlus, title: t.returns.s4, desc: t.returns.s4d },
    { icon: Trash2, title: t.returns.s5, desc: t.returns.s5d },
    { icon: Send, title: t.returns.s6, desc: t.returns.s6d },
  ];

  const metrics = [
    { value: "98%", label: t.returns.m1 },
    { value: "24h", label: t.returns.m2 },
    { value: "100%", label: t.returns.m3 },
  ];

  return (
    <section id="returns" className="py-20 md:py-28 bg-gradient-to-br from-orange-50/30 via-white/50 to-red-50/20 relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-medium mb-4">
            <RotateCcw size={14} />
            {t.returns.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.returns.title1}{" "}
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              {t.returns.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.returns.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((step, idx) => (
            <div key={step.title} className="group flex items-start gap-4 p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm hover:shadow-lg hover:shadow-orange-100/30 hover:-translate-y-1 transition-all duration-300">
              <div className="flex-shrink-0 w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <step.icon size={20} className="text-orange-600" />
              </div>
              <div>
                <div className="text-xs font-bold text-orange-400 mb-1">Step {idx + 1}</div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{step.title}</h3>
                <p className="text-sm text-gray-600">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {metrics.map((metric) => (
            <div key={metric.label} className="flex items-center gap-4 p-4 bg-white/80 rounded-2xl border border-orange-100/50 shadow-sm">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle2 size={22} className="text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-black text-gray-900">{metric.value}</div>
                <div className="text-xs text-gray-500">{metric.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
