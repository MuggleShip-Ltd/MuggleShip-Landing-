"use client";

import { MapPin, Globe, Building2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const locations = [
  { city: "Bedford, UK", hub: "UK Hub", address: "Bedford, United Kingdom", isHQ: true },
  { city: "NJ, USA", hub: "New Jersey Hub", address: "Little Falls, NJ 07424", isHQ: false },
  { city: "TX, USA", hub: "Texas Hub", address: "Rosenberg, TX", isHQ: false },
  { city: "ON, Canada", hub: "Canada Hub", address: "Kitchener, Ontario", isHQ: false },
];

export default function Locations() {
  const { t } = useLanguage();

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium mb-4">
            <Globe size={14} />
            {t.locations.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight">
            {t.locations.title1}{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-300 bg-clip-text text-transparent">
              {t.locations.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-white/60">{t.locations.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {locations.map((loc) => (
            <div key={loc.city} className="group p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all relative">
              {loc.isHQ && (
                <div className="absolute -top-3 left-6 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                  {t.locations.hq}
                </div>
              )}
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Building2 size={22} className="text-orange-300" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{loc.city}</h3>
              <p className="text-sm text-white/60 mb-2">{loc.hub}</p>
              <div className="flex items-center gap-1 text-xs text-white/40">
                <MapPin size={12} />
                {loc.address}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl">
            {t.locations.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
