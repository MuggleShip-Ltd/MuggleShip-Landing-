"use client";

import {
  ListChecks,
  Sparkles,
  Search,
  Image as ImageIcon,
  GitBranch,
  FileSearch,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function ListingOptimization() {
  const { t } = useLanguage();

  const features = [
    { icon: ListChecks, title: t.listing.f1Title, desc: t.listing.f1Desc },
    { icon: Sparkles, title: t.listing.f2Title, desc: t.listing.f2Desc },
    { icon: Search, title: t.listing.f3Title, desc: t.listing.f3Desc },
    { icon: ImageIcon, title: t.listing.f4Title, desc: t.listing.f4Desc },
    { icon: GitBranch, title: t.listing.f5Title, desc: t.listing.f5Desc },
    { icon: FileSearch, title: t.listing.f6Title, desc: t.listing.f6Desc },
  ];

  return (
    <section
      id="listing-optimization"
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-rose-50/30 via-white/50 to-pink-50/20 scroll-mt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-200 rounded-full text-rose-700 text-sm font-medium mb-4">
            <Sparkles size={14} />
            {t.listing.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.listing.title1}{" "}
            <span className="bg-gradient-to-r from-rose-500 to-pink-500 bg-clip-text text-transparent">
              {t.listing.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.listing.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-rose-100/50 shadow-sm hover:shadow-xl hover:shadow-rose-100/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform shadow-md">
                <feature.icon size={22} className="text-white" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-200 rounded-full text-xs text-rose-700">
            {t.listing.availability}
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all shadow-xl shadow-rose-500/20"
          >
            {t.listing.cta}
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
