"use client";

import { useState } from "react";
import { Plus, Minus, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function FAQ() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const items = [
    { q: t.faq.q1, a: t.faq.a1 },
    { q: t.faq.q2, a: t.faq.a2 },
    { q: t.faq.q3, a: t.faq.a3 },
    { q: t.faq.q4, a: t.faq.a4 },
    { q: t.faq.q5, a: t.faq.a5 },
    { q: t.faq.q6, a: t.faq.a6 },
    { q: t.faq.q7, a: t.faq.a7 },
    { q: t.faq.q8, a: t.faq.a8 },
    { q: t.faq.q9, a: t.faq.a9 },
    { q: t.faq.q10, a: t.faq.a10 },
  ];

  return (
    <section
      id="faq"
      className="scroll-mt-20 relative py-32 md:py-40 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Cinematic header */}
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">SCENE 12</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.faq.badge}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.faq.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.faq.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.faq.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        {/* Accordion */}
        <Reveal delay={120}>
          <ul className="space-y-3">
            {items.map((item, index) => {
              const isOpen = openIndex === index;
              const panelId = `faq-panel-${index}`;
              const buttonId = `faq-button-${index}`;

              return (
                <li
                  key={index}
                  className="rounded-2xl border bg-white/70 backdrop-blur-sm transition-shadow duration-300"
                  style={{
                    borderColor: "var(--border-faint)",
                  }}
                >
                  <h3>
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex items-center justify-between gap-4 p-5 text-left rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
                      style={{
                        // @ts-expect-error CSS custom prop
                        "--tw-ring-color": "var(--ember)",
                      }}
                    >
                      <span
                        className="text-base font-medium leading-snug"
                        style={{ color: "var(--ink-100)" }}
                      >
                        {item.q}
                      </span>
                      <span
                        className="flex-shrink-0 transition-transform duration-300"
                        style={{
                          color: isOpen ? "var(--ember)" : "var(--ink-400)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                        aria-hidden="true"
                      >
                        {isOpen ? (
                          <Minus size={18} strokeWidth={1.6} />
                        ) : (
                          <Plus size={18} strokeWidth={1.6} />
                        )}
                      </span>
                    </button>
                  </h3>

                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="min-h-0 overflow-hidden">
                      <div
                        className="px-5 pb-6 pt-0 text-sm leading-relaxed"
                        style={{ color: "var(--ink-300)" }}
                      >
                        {item.a}
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* Still have questions — left aligned */}
        <Reveal delay={220}>
          <div className="mt-12 flex">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 scene-label-ember hover:text-[var(--ember-glow)] transition-colors"
            >
              Still have questions? Talk to our team
              <ArrowRight
                size={12}
                className="group-hover:translate-x-0.5 transition-transform"
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
