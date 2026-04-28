"use client";

import { Tag, ShieldCheck, Search, Eraser, Layers, Warehouse, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function FBAPrep() {
  const { t } = useLanguage();

  const services = [
    { icon: Tag, title: t.fba.s1Title, desc: t.fba.s1Desc },
    { icon: ShieldCheck, title: t.fba.s2Title, desc: t.fba.s2Desc },
    { icon: Search, title: t.fba.s3Title, desc: t.fba.s3Desc },
    { icon: Eraser, title: t.fba.s4Title, desc: t.fba.s4Desc },
    { icon: Layers, title: t.fba.s5Title, desc: t.fba.s5Desc },
    { icon: Warehouse, title: t.fba.s6Title, desc: t.fba.s6Desc },
  ];

  return (
    <section id="fba-prep" className="py-20 md:py-28 bg-gradient-to-br from-amber-50/40 via-white/60 to-orange-50/40 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/15 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
            {t.fba.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">{t.fba.title}</h2>
          <p className="mt-4 text-lg text-gray-500">{t.fba.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service) => (
            <div key={service.title} className="p-6 bg-white/70 backdrop-blur-sm border border-orange-100/40 rounded-2xl hover:bg-white/90 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <service.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full hover:from-orange-600 hover:to-orange-700 transition-all shadow-xl shadow-orange-500/20">
            {t.fba.requestQuote}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white/80 text-gray-700 font-semibold rounded-full border border-orange-200 hover:border-orange-400 hover:text-orange-600 transition-all shadow-lg">
            {t.fba.learnMore}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
