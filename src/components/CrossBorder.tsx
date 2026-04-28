"use client";

import { Globe, ShieldCheck, Store, Zap } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const countries = [
  { flag: "🇺🇸", name: "United States" },
  { flag: "🇨🇦", name: "Canada" },
  { flag: "🇲🇽", name: "Mexico" },
  { flag: "🇬🇧", name: "United Kingdom" },
  { flag: "🇩🇪", name: "Germany" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇮🇹", name: "Italy" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇯🇵", name: "Japan" },
  { flag: "🇦🇺", name: "Australia" },
];

export default function CrossBorder() {
  const { t } = useLanguage();

  const values = [
    { icon: ShieldCheck, title: t.crossBorder.val1Title, desc: t.crossBorder.val1Desc },
    { icon: Globe, title: t.crossBorder.val2Title, desc: t.crossBorder.val2Desc },
    { icon: Store, title: t.crossBorder.val3Title, desc: t.crossBorder.val3Desc },
    { icon: Zap, title: t.crossBorder.val4Title, desc: t.crossBorder.val4Desc },
  ];

  const stats = [
    { value: "15+", label: t.crossBorder.stat1 },
    { value: "99.9%", label: t.crossBorder.stat2 },
    { value: "3-5 Days", label: t.crossBorder.stat3 },
  ];

  return (
    <section id="cross-border" className="py-20 md:py-28 bg-gradient-to-br from-orange-50/50 via-amber-50/30 to-white/60 relative overflow-hidden scroll-mt-20">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-amber-200/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.crossBorder.title1}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {t.crossBorder.title2}
            </span>
          </h2>
          <p className="mt-5 text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">{t.crossBorder.subtitle}</p>
        </div>

        {/* Amazon Marketplace Coverage — boxed */}
        <div className="mb-14 p-6 md:p-8 bg-white/60 backdrop-blur-sm border border-orange-100/50 rounded-3xl">
          <h3 className="text-lg font-bold text-gray-900 mb-5 text-center">{t.crossBorder.marketplacesTitle}</h3>
          <div className="grid grid-cols-5 gap-3">
            {countries.map((country) => (
              <div key={country.name} className="flex items-center justify-center gap-2 px-3 py-2.5 bg-white/80 border border-orange-100/40 rounded-xl hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default group">
                <span className="text-lg">{country.flag}</span>
                <span className="text-xs font-medium text-gray-600 group-hover:text-gray-900 transition-colors">{country.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Value Props */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {values.map((item) => (
            <div key={item.title} className="p-6 bg-white/70 backdrop-blur-sm border border-orange-100/40 rounded-2xl hover:bg-white/90 hover:shadow-lg hover:-translate-y-1 transition-all group">
              <div className="w-11 h-11 bg-gradient-to-br from-orange-500 to-amber-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <item.icon size={20} className="text-white" />
              </div>
              <h3 className="text-sm font-bold text-gray-900 mb-1.5">{item.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
