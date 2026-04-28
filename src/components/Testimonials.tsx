"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

const testimonials = [
  { name: "James W.", role: "Amazon Seller", text: "MuggleShip transformed our FBA prep process. Their accuracy rate is incredible, and shipping times have improved dramatically." },
  { name: "Sarah M.", role: "Shopify Store Owner", text: "The integration was seamless. We connected our Shopify store in minutes and orders started flowing through automatically." },
  { name: "Michael T.", role: "E-Commerce Entrepreneur", text: "Their cross-border fulfillment has allowed us to expand into 5 new markets. The customs clearance rate is outstanding." },
  { name: "Emily R.", role: "Amazon FBA Seller", text: "We switched from our old prep center and immediately saw cost savings. Their pricing is transparent with no hidden fees." },
  { name: "David L.", role: "Multi-Channel Seller", text: "MuggleShip handles our eBay, Amazon, and Shopify fulfillment flawlessly. One partner for everything — that's the dream." },
  { name: "Alexandra K.", role: "DTC Brand Owner", text: "Returns were our biggest headache until we found MuggleShip. Their returns management is incredibly efficient." },
  { name: "Robert C.", role: "Wholesale Distributor", text: "The warehouse team is fantastic. Quality inspections catch issues before they reach customers. Highly recommended!" },
  { name: "Hannah P.", role: "Etsy Seller", text: "As a small seller, I felt valued from day one. Their support team responds within minutes and always has solutions." },
];

const ROTATION_MS = 7000;

export default function Testimonials() {
  const { t } = useLanguage();
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const total = testimonials.length;
  const active = testimonials[index];

  const clearTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startTimer = () => {
    clearTimer();
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % total);
    }, ROTATION_MS);
  };

  useEffect(() => {
    if (paused) {
      clearTimer();
      return;
    }
    startTimer();
    return clearTimer;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const goTo = (next: number) => {
    setIndex(((next % total) + total) % total);
    if (!paused) startTimer();
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  return (
    <section
      className="py-32 md:py-44 scroll-mt-20 relative overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      {/* Single atmospheric ember pool — centered, mostly behind */}
      <div
        className="absolute inset-0 pointer-events-none -z-10"
        aria-hidden
        style={{
          background:
            "radial-gradient(ellipse 55% 60% at 50% 55%, rgba(249,115,22,0.16), transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial header — horizontal one-line layout */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 md:mb-28">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">SCENE 09</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.testimonials.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.testimonials.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.testimonials.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.testimonials.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Quote stage */}
        <div
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Large floating typographic mark */}
          <span
            aria-hidden
            className="font-display italic absolute -left-4 md:-left-12 -top-16 md:-top-20 select-none pointer-events-none"
            style={{
              fontSize: "9rem",
              lineHeight: 1,
              color: "var(--ember)",
              opacity: 0.6,
            }}
          >
            &ldquo;
          </span>

          {/* Quote — re-keyed for fade animation */}
          <div key={index} className="cinema-fade-up relative">
            <blockquote
              className="font-display italic text-3xl md:text-5xl leading-tight tracking-tight text-[var(--ink-100)]"
            >
              {active.text}
            </blockquote>

            {/* Hairline rule */}
            <div
              className="mt-10 h-px w-full"
              style={{ background: "var(--border-soft)" }}
            />

            {/* Attribution */}
            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-2">
              <span className="text-base font-medium text-[var(--ink-200)]">
                {active.name}
              </span>
              <span className="text-[var(--ink-500)]">&mdash;</span>
              <span className="scene-label">{active.role}</span>
            </div>
          </div>

          {/* Rotation controls row */}
          <div className="mt-12 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                style={{
                  border: "1px solid var(--border-soft)",
                  background: "transparent",
                  color: "var(--ink-300)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ember)";
                  e.currentTarget.style.color = "var(--ember)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-soft)";
                  e.currentTarget.style.color = "var(--ink-300)";
                }}
              >
                <ChevronLeft size={16} strokeWidth={1.6} />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="group inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors"
                style={{
                  border: "1px solid var(--border-soft)",
                  background: "transparent",
                  color: "var(--ink-300)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--ember)";
                  e.currentTarget.style.color = "var(--ember)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-soft)";
                  e.currentTarget.style.color = "var(--ink-300)";
                }}
              >
                <ChevronRight size={16} strokeWidth={1.6} />
              </button>
            </div>

            <div className="scene-label-ember tabular-nums">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </div>
          </div>

          {/* Frame indicator bars */}
          <div
            className="mt-10 flex items-end justify-center"
            style={{ gap: "12px" }}
            role="tablist"
            aria-label="Testimonial frames"
          >
            {testimonials.map((tItem, i) => {
              const isActive = i === index;
              return (
                <button
                  key={`${tItem.name}-${i}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => goTo(i)}
                  className="block transition-all duration-300"
                  style={{
                    width: isActive ? "1.5px" : "1px",
                    height: isActive ? "24px" : "16px",
                    background: isActive ? "var(--ember)" : "var(--border-faint)",
                    padding: 0,
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
