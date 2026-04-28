"use client";

import { ShieldCheck, Clock, Users, UserCheck, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function AboutUs() {
  const { t } = useLanguage();

  const stats = [
    { icon: ShieldCheck, value: "100%", label: t.about.stat1, color: "orange" },
    { icon: Clock, value: "24h", label: t.about.stat2, color: "amber" },
    { icon: Users, value: "25+", label: t.about.stat3, color: "red" },
    { icon: UserCheck, value: "5K+", label: t.about.stat4, color: "yellow" },
  ];

  const colorMap: Record<string, { bg: string; text: string }> = {
    orange: { bg: "bg-orange-100", text: "text-orange-600" },
    amber: { bg: "bg-amber-100", text: "text-amber-600" },
    red: { bg: "bg-red-100", text: "text-red-500" },
    yellow: { bg: "bg-yellow-100", text: "text-yellow-600" },
  };

  return (
    <section id="about" className="py-20 md:py-28 bg-gradient-to-br from-orange-50/40 via-amber-50/20 to-white/60 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-amber-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
              {t.about.badge}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight mb-6">
              {t.about.title1}{" "}
              <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                {t.about.title2}
              </span>
            </h2>
            <p className="text-lg text-gray-600 mb-4 leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">{t.about.p2}</p>
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
              <Clock size={16} className="text-orange-500" />
              {t.about.since}
            </div>
            <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white font-semibold rounded-full hover:from-orange-600 hover:via-orange-700 hover:to-red-600 transition-all shadow-xl shadow-orange-500/30">
              {t.about.cta}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => {
              const c = colorMap[stat.color];
              return (
                <div key={stat.label} className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm hover:shadow-xl hover:shadow-orange-100/40 hover:-translate-y-1 transition-all duration-300 text-center">
                  <div className={`w-14 h-14 ${c.bg} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}>
                    <stat.icon size={26} className={c.text} />
                  </div>
                  <div className="text-3xl font-black text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
