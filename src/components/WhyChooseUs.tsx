"use client";

import { HandshakeIcon, TrendingDown, Headset, LayoutGrid, Sparkles } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function WhyChooseUs() {
  const { t } = useLanguage();

  const features = [
    {
      icon: HandshakeIcon,
      title: t.whyUs.feature1Title,
      desc: t.whyUs.feature1Desc,
      color: "#ea580c",
      gradient: "from-orange-500 to-amber-500",
      lightBg: "bg-gradient-to-br from-orange-50 to-amber-50",
    },
    {
      icon: TrendingDown,
      title: t.whyUs.feature2Title,
      desc: t.whyUs.feature2Desc,
      color: "#d97706",
      gradient: "from-amber-500 to-yellow-500",
      lightBg: "bg-gradient-to-br from-amber-50 to-yellow-50",
    },
    {
      icon: Headset,
      title: t.whyUs.feature3Title,
      desc: t.whyUs.feature3Desc,
      color: "#dc2626",
      gradient: "from-red-500 to-orange-500",
      lightBg: "bg-gradient-to-br from-red-50 to-orange-50",
    },
    {
      icon: LayoutGrid,
      title: t.whyUs.feature4Title,
      desc: t.whyUs.feature4Desc,
      color: "#c2410c",
      gradient: "from-orange-600 to-red-500",
      lightBg: "bg-gradient-to-br from-orange-50 to-red-50",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-orange-50/40 via-white/60 to-amber-50/50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-5">
            <Sparkles size={14} />
            {t.whyUs.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.whyUs.title1}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              {t.whyUs.title2}
            </span>
          </h2>
          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">{t.whyUs.subtitle}</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-7 rounded-3xl bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-orange-100/50 hover:-translate-y-2 transition-all duration-400 cursor-default overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 ${feature.lightBg} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-3xl`} />

              <div className="relative z-10">
                {/* Icon with gradient background */}
                <div
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                  style={{ boxShadow: `0 8px 20px ${feature.color}25` }}
                >
                  <feature.icon size={24} className="text-white" strokeWidth={1.8} />
                </div>

                <h3 className="text-lg font-extrabold text-gray-900 mb-2.5">{feature.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="https://share.google/bfvym3AHRoiDMqCaE"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Google</span>
          </a>

          <a
            href="https://www.linkedin.com/company/muggleship-ltd/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="#0A66C2" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">LinkedIn</span>
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61586705093845"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-full border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
          >
            <svg className="w-5 h-5" fill="#1877F2" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900">Facebook</span>
          </a>
        </div>
      </div>
    </section>
  );
}
