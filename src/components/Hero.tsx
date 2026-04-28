"use client";

import { ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import FulfillmentAnimation from "./FulfillmentAnimation";
import ShippingPartners from "./ShippingPartners";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative pt-28 md:pt-36 pb-0 overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-6 text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
              <span className="inline-block w-7 h-px bg-orange-600" />
              {t.hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold text-neutral-950 leading-[1.05] tracking-[-0.035em]">
              {t.hero.title1}
              <br />
              <span className="text-neutral-900">
                {t.hero.title2}
              </span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-neutral-600 max-w-xl leading-relaxed">
              {t.hero.subtitle}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-neutral-950 text-white text-sm font-medium rounded-full hover:bg-orange-600 transition-colors"
              >
                {t.hero.cta1}
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-0.5 transition-transform"
                />
              </a>
              <a
                href="#pricing"
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white text-neutral-900 text-sm font-medium rounded-full border border-neutral-300 hover:border-neutral-900 transition-colors"
              >
                {t.hero.cta2}
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2.5">
              {[t.hero.check1, t.hero.check2, t.hero.check3].map((item) => (
                <div key={item} className="flex items-center gap-2">
                  <Check size={14} className="text-neutral-900 flex-shrink-0" strokeWidth={2.5} />
                  <span className="text-sm text-neutral-600">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - animation */}
          <div className="hidden lg:flex lg:col-span-5 justify-center">
            <FulfillmentAnimation />
          </div>
        </div>
      </div>

      {/* Shipping Partners */}
      <div className="mt-20">
        <ShippingPartners />
      </div>
    </section>
  );
}
