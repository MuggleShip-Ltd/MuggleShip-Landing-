"use client";

import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import CarrierLogos from "./CarrierLogos";
import RouteCard from "./RouteCard";

// Split a line into word spans for the CSS word-in animation (.rv-words).
function Words({ text, offset = 0, start = 150 }: { text: string; offset?: number; start?: number }) {
  return (
    <>
      {text.split(/(\s+)/).map((chunk, i) =>
        /^\s+$/.test(chunk) ? (
          <span key={i}>{chunk}</span>
        ) : (
          <span key={i} className="word" style={{ animationDelay: `${start + (offset + i) * 55}ms` }}>
            {chunk}
          </span>
        )
      )}
    </>
  );
}

export default function Hero() {
  const { t } = useLanguage();
  const firstLineWords = t.hero.title1.split(/(\s+)/).length;

  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-32">
      {/* The brand's warm light: two pools, no motion */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute -right-[22%] -top-[30%] h-[78vw] w-[78vw] max-h-[1100px] max-w-[1100px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,122,71,0.24) 0%, rgba(255,122,71,0.07) 38%, transparent 68%)" }}
        />
        <div
          className="absolute -bottom-[40%] -left-[25%] h-[60vw] w-[60vw] max-h-[800px] max-w-[800px] rounded-full"
          style={{ background: "radial-gradient(circle, rgba(255,122,71,0.08) 0%, transparent 62%)" }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-7">
          <h1 className="cinema-fade-up mb-7 text-sm text-[var(--ink-400)]" style={{ animationDelay: "0.05s" }}>
            {t.hero.badge}
          </h1>
          <p className="rv-words text-balance text-[2.9rem] font-medium leading-[0.95] tracking-[-0.045em] text-[var(--ink-100)] sm:text-7xl lg:text-[5.5rem]">
            <Words text={t.hero.title1} />
            <br />
            <span className="font-bold text-[var(--ember)]">
              <Words text={t.hero.title2} offset={firstLineWords} start={230} />
            </span>
          </p>
          <p
            className="cinema-fade-up mt-7 max-w-xl text-lg leading-relaxed text-[var(--ink-300)] md:text-xl"
            style={{ animationDelay: "0.75s" }}
          >
            FBA prep, storage, fulfillment and returns, run from one Bedford warehouse by one team. You sell. We make it arrive.
          </p>
          <div className="cinema-fade-up mt-9 flex flex-wrap items-center gap-3" style={{ animationDelay: "0.9s" }}>
            <Link
              href="/#contact"
              className="rounded-full px-7 py-4 text-[15px] font-semibold transition-transform active:scale-[0.98]"
              style={{
                background: "var(--ember)",
                color: "var(--bg-void)",
                boxShadow: "0 16px 40px -14px rgba(255,122,71,0.8)",
              }}
            >
              {t.hero.cta1}
            </Link>
            <Link
              href="/#services"
              className="rounded-full border px-6 py-[15px] text-[15px] text-[var(--ink-100)] transition-colors hover:border-[var(--ink-500)]"
              style={{ borderColor: "rgba(240,246,252,0.18)" }}
            >
              See our services
            </Link>
          </div>
        </div>

        <div className="cinema-fade-up lg:col-span-5" style={{ animationDelay: "0.5s" }}>
          <RouteCard />
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:mt-24 lg:px-8">
        <div className="flex flex-col gap-6 border-y border-[var(--border-faint)] py-7 md:flex-row md:items-center md:gap-12">
          <p className="shrink-0 text-sm text-[var(--ink-400)]">Shipping daily with</p>
          <CarrierLogos className="text-[var(--ink-500)]" />
        </div>
      </div>
    </section>
  );
}
