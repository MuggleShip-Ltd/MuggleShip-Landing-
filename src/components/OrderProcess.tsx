"use client";

import { Link2, PackageCheck, Truck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function OrderProcess() {
  const { t } = useLanguage();

  const steps = [
    { icon: Link2, step: "01", title: t.process.step1Title, desc: t.process.step1Desc, gradient: "from-orange-500 to-orange-600" },
    { icon: PackageCheck, step: "02", title: t.process.step2Title, desc: t.process.step2Desc, gradient: "from-amber-500 to-amber-600" },
    { icon: Truck, step: "03", title: t.process.step3Title, desc: t.process.step3Desc, gradient: "from-red-500 to-red-600" },
  ];

  return (
    <section id="services" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-white/60 via-orange-50/20 to-slate-100/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
            {t.process.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.process.title1}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              {t.process.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.process.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-24 left-[calc(33.33%_-_16px)] w-[calc(33.33%_+_32px)] h-0.5 bg-gradient-to-r from-orange-200 via-amber-200 to-red-200" />

          {steps.map((step, idx) => (
            <div key={step.title} className="relative group">
              <div className="text-center p-8 bg-white/70 backdrop-blur-sm rounded-3xl border border-orange-100/50 shadow-sm hover:shadow-xl hover:shadow-orange-100/40 hover:-translate-y-2 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${step.gradient} rounded-2xl text-white text-xl font-black mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.desc}</p>
              </div>
              {idx < steps.length - 1 && (
                <div className="flex justify-center my-4 md:hidden">
                  <ArrowRight size={24} className="text-orange-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
