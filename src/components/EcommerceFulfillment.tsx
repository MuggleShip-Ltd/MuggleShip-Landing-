"use client";

import { ClipboardCheck, Archive, PackageCheck, Truck, DollarSign, Bot, ShoppingCart } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const platforms = ["Shopify", "Amazon", "eBay", "Walmart", "WooCommerce", "BigCommerce", "Etsy"];

export default function EcommerceFulfillment() {
  const { t } = useLanguage();

  const features = [
    { icon: ClipboardCheck, title: t.ecommerce.f1Title, desc: t.ecommerce.f1Desc },
    { icon: Archive, title: t.ecommerce.f2Title, desc: t.ecommerce.f2Desc },
    { icon: PackageCheck, title: t.ecommerce.f3Title, desc: t.ecommerce.f3Desc },
    { icon: Truck, title: t.ecommerce.f4Title, desc: t.ecommerce.f4Desc },
    { icon: DollarSign, title: t.ecommerce.f5Title, desc: t.ecommerce.f5Desc },
    { icon: Bot, title: t.ecommerce.f6Title, desc: t.ecommerce.f6Desc },
  ];

  return (
    <section id="fulfillment" className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-br from-slate-100/40 via-white/50 to-orange-50/30 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 border border-orange-200 rounded-full text-orange-700 text-sm font-medium mb-4">
            <ShoppingCart size={14} />
            {t.ecommerce.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 leading-tight">
            {t.ecommerce.title1}{" "}
            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              {t.ecommerce.title2}
            </span>
          </h2>
          <p className="mt-4 text-lg text-gray-600">{t.ecommerce.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature) => (
            <div key={feature.title} className="group p-6 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100/50 shadow-sm hover:shadow-xl hover:shadow-orange-100/40 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <feature.icon size={22} className="text-orange-600" />
              </div>
              <h3 className="text-base font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm font-medium text-gray-500 mb-6">{t.ecommerce.platforms}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {platforms.map((platform) => (
              <div key={platform} className="px-6 py-3 bg-white/80 rounded-xl border border-orange-100/50 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all">
                <span className="text-sm font-bold text-gray-700">{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
