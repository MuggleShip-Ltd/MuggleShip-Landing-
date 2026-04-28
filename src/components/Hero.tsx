"use client";

import { ArrowRight, CircleCheck } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import FulfillmentAnimation from "./FulfillmentAnimation";
import ShippingPartners from "./ShippingPartners";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-24 md:pt-32 pb-0 overflow-hidden"
    >
      {/* Background Image + Overlays */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/hero-bg.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/90 to-white/70" />
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50/80 via-transparent to-amber-50/40" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-amber-200/20 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 leading-tight tracking-tight animate-fade-in-up">
              {t.hero.title1}
              <br />
              <span className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 bg-clip-text text-transparent">
                {t.hero.title2}
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-xl leading-relaxed animate-fade-in-up">
              {t.hero.subtitle}
            </p>

            <div className="mt-6 flex flex-col gap-2 animate-fade-in-up">
              {[t.hero.check1, t.hero.check2, t.hero.check3].map((item) => (
                <div key={item} className="flex items-center gap-2.5">
                  <CircleCheck size={18} className="text-green-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-4 animate-fade-in-up">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700 text-white text-base font-semibold rounded-full hover:from-orange-600 hover:via-orange-700 hover:to-red-600 transition-all shadow-xl shadow-orange-500/30 hover:shadow-orange-600/40"
              >
                {t.hero.cta1}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-white/90 backdrop-blur-sm text-gray-700 text-base font-semibold rounded-full border border-orange-200 hover:border-orange-400 hover:text-orange-600 transition-all shadow-lg"
              >
                {t.hero.cta2}
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>

          {/* Right - Logo + Notification Stack */}
          <div className="hidden lg:flex justify-center animate-fade-in-up">
            <FulfillmentAnimation />
          </div>
        </div>

      </div>

      {/* Shipping Partners — full width */}
      <div className="animate-fade-in-up">
        <ShippingPartners />
      </div>
    </section>
  );
}
