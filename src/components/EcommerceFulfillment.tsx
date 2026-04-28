"use client";

import {
  ClipboardCheck,
  Archive,
  PackageCheck,
  Truck,
  DollarSign,
  Bot,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const platforms = [
  "Shopify",
  "Amazon",
  "eBay",
  "Walmart",
  "WooCommerce",
  "BigCommerce",
  "Etsy",
];

export default function EcommerceFulfillment() {
  const { t } = useLanguage();

  const features = [
    { icon: ClipboardCheck, title: t.ecommerce.f1Title, desc: t.ecommerce.f1Desc, num: "01" },
    { icon: Archive, title: t.ecommerce.f2Title, desc: t.ecommerce.f2Desc, num: "02" },
    { icon: PackageCheck, title: t.ecommerce.f3Title, desc: t.ecommerce.f3Desc, num: "03" },
    { icon: Truck, title: t.ecommerce.f4Title, desc: t.ecommerce.f4Desc, num: "04" },
    { icon: DollarSign, title: t.ecommerce.f5Title, desc: t.ecommerce.f5Desc, num: "05" },
    { icon: Bot, title: t.ecommerce.f6Title, desc: t.ecommerce.f6Desc, num: "06" },
  ];

  return (
    <section
      id="fulfillment"
      className="py-32 md:py-40 scroll-mt-20 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Atmospheric ember pool — bottom-right */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 92% 88%, rgba(255,106,31,0.05), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">02.</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.ecommerce.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.ecommerce.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.ecommerce.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.ecommerce.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
            {features.map((f) => (
              <div
                key={f.title}
                className="group relative flex flex-col p-7 rounded-2xl transition-all duration-300 overflow-hidden"
                style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-faint)",
                }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
                  style={{
                    background:
                      "radial-gradient(circle at 80% 0%, rgba(255,106,31,0.08), transparent 60%)",
                    boxShadow:
                      "inset 0 0 0 1px rgba(255,106,31,0.4), 0 24px 60px -20px rgba(255,106,31,0.25)",
                  }}
                />

                <div className="relative flex items-center justify-between mb-8">
                  <span className="scene-label-ember">{f.num}</span>
                  <f.icon
                    size={18}
                    className="text-[var(--ink-500)] group-hover:text-[var(--ember-glow)] transition-colors"
                    strokeWidth={1.6}
                  />
                </div>

                <h3 className="relative text-lg font-medium text-[var(--ink-100)] mb-2 leading-tight">
                  {f.title}
                </h3>
                <p className="relative text-sm text-[var(--ink-400)] leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={220}>
          <div className="flex flex-col items-start gap-5">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
              <span className="scene-label">{t.ecommerce.platforms}</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-[var(--ink-400)]">
              {platforms.map((platform, i) => (
                <span key={platform} className="flex items-center gap-x-3">
                  <span>{platform}</span>
                  {i < platforms.length - 1 && (
                    <span className="text-[var(--ink-500)]" aria-hidden>
                      &middot;
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
