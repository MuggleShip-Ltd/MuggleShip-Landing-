"use client";

import {
  Tag,
  PackageCheck,
  Globe,
  RotateCcw,
  TrendingUp,
  ChartLine,
  Sparkles,
  MessageSquare,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function ServicesOverview() {
  const { t } = useLanguage();

  const core = [
    // ids are the targets of the footer's service links (/#fba-prep …)
    { icon: Tag, title: t.servicesOverview.svc1Title, desc: t.servicesOverview.svc1Desc, href: "#contact", num: "01", id: "fba-prep" },
    { icon: PackageCheck, title: t.servicesOverview.svc2Title, desc: t.servicesOverview.svc2Desc, href: "#contact", num: "02", id: "fulfillment" },
    { icon: Globe, title: t.servicesOverview.svc3Title, desc: t.servicesOverview.svc3Desc, href: "#contact", num: "03", id: "cross-border" },
    { icon: RotateCcw, title: t.servicesOverview.svc4Title, desc: t.servicesOverview.svc4Desc, href: "#contact", num: "04", id: "returns" },
  ];

  const amazon = [
    { icon: TrendingUp, title: t.servicesOverview.svc5Title, desc: t.servicesOverview.svc5Desc, href: "#automated-pricing", num: "05" },
    { icon: ChartLine, title: t.servicesOverview.svc6Title, desc: t.servicesOverview.svc6Desc, href: "#analytics", num: "06" },
    { icon: Sparkles, title: t.servicesOverview.svc7Title, desc: t.servicesOverview.svc7Desc, href: "#listing-optimization", num: "07" },
    { icon: MessageSquare, title: t.servicesOverview.svc8Title, desc: t.servicesOverview.svc8Desc, href: "#buyer-messaging", num: "08" },
  ];

  const Card = ({
    icon: Icon,
    title,
    desc,
    href,
    num,
    id,
  }: {
    icon: typeof Tag;
    title: string;
    desc: string;
    href: string;
    num: string;
    id?: string;
  }) => (
    <a
      id={id}
      href={href}
      className="group relative flex flex-col p-7 rounded-2xl transition-all duration-300 overflow-hidden scroll-mt-28"
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-faint)",
      }}
    >
      {/* Hover ember frame */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl"
        style={{
          background:
            "radial-gradient(circle at 80% 0%, rgba(249,115,22,0.34), transparent 60%)",
          boxShadow: "inset 0 0 0 1px rgba(255,106,31,0.4), 0 24px 60px -20px rgba(255,106,31,0.25)",
        }}
      />

      <div className="relative flex items-center justify-between mb-8">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
          {num}
        </span>
        <Icon
          size={18}
          className="text-[var(--ink-400)] group-hover:text-[var(--ember-glow)] transition-colors"
          strokeWidth={1.6}
        />
      </div>

      <h3 className="relative text-lg font-medium text-[var(--ink-100)] mb-2 leading-tight">
        {title}
      </h3>
      <p className="relative text-sm text-[var(--ink-400)] leading-relaxed mb-6">
        {desc}
      </p>

      <div className="relative mt-auto flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
        {t.servicesOverview.learnMore}
        <ArrowUpRight
          size={14}
          className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform"
        />
      </div>
    </a>
  );

  return (
    <section
      id="services"
      className="relative py-32 md:py-40 scroll-mt-20 overflow-hidden"
      style={{ background: "var(--bg-base)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <Reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-20">
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <span className="scene-label-ember">SCENE 02</span>
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{t.servicesOverview.kicker}</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl leading-[1.0] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
                {t.servicesOverview.title1}
                <br />
                <span className="font-display italic text-[var(--ember-glow)]">
                  {t.servicesOverview.title2}
                </span>
              </h2>
            </div>
            <div className="lg:col-span-6 lg:col-start-7 lg:pt-8">
              <p className="text-lg text-[var(--ink-300)] leading-relaxed">
                {t.servicesOverview.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase">
              I.
            </span>
            <span className="scene-label">{t.servicesOverview.core}</span>
            <span className="h-px flex-1 bg-[var(--border-faint)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
            {core.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex items-center gap-3 mb-5">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase">
              II.
            </span>
            <span className="scene-label">{t.servicesOverview.amazon}</span>
            <span className="h-px flex-1 bg-[var(--border-faint)]" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {amazon.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
