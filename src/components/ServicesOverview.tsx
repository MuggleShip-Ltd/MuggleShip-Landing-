"use client";

import {
  Tag,
  PackageCheck,
  Globe,
  RotateCcw,
  TrendingUp,
  ChartLine,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import Reveal from "./Reveal";

export default function ServicesOverview() {
  const { t } = useLanguage();

  const core = [
    { icon: Tag, title: t.servicesOverview.svc1Title, desc: t.servicesOverview.svc1Desc, href: "#fba-prep" },
    { icon: PackageCheck, title: t.servicesOverview.svc2Title, desc: t.servicesOverview.svc2Desc, href: "#fulfillment" },
    { icon: Globe, title: t.servicesOverview.svc3Title, desc: t.servicesOverview.svc3Desc, href: "#cross-border" },
    { icon: RotateCcw, title: t.servicesOverview.svc4Title, desc: t.servicesOverview.svc4Desc, href: "#returns" },
  ];

  const amazon = [
    { icon: TrendingUp, title: t.servicesOverview.svc5Title, desc: t.servicesOverview.svc5Desc, href: "#automated-pricing" },
    { icon: ChartLine, title: t.servicesOverview.svc6Title, desc: t.servicesOverview.svc6Desc, href: "#analytics" },
    { icon: Sparkles, title: t.servicesOverview.svc7Title, desc: t.servicesOverview.svc7Desc, href: "#listing-optimization" },
  ];

  const Card = ({
    icon: Icon,
    title,
    desc,
    href,
  }: {
    icon: typeof Tag;
    title: string;
    desc: string;
    href: string;
  }) => (
    <a
      href={href}
      className="group relative flex flex-col p-6 bg-white border border-neutral-200 rounded-2xl hover:border-neutral-900 transition-colors"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="w-10 h-10 rounded-lg bg-neutral-100 flex items-center justify-center group-hover:bg-neutral-900 transition-colors">
          <Icon size={18} className="text-neutral-900 group-hover:text-white transition-colors" strokeWidth={2} />
        </div>
        <ArrowUpRight
          size={18}
          className="text-neutral-300 group-hover:text-neutral-900 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"
        />
      </div>
      <h3 className="text-base font-semibold text-neutral-950 mb-1.5">{title}</h3>
      <p className="text-sm text-neutral-600 leading-relaxed">{desc}</p>
    </a>
  );

  return (
    <section id="services" className="py-24 md:py-32 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="max-w-3xl mb-16">
            <div className="flex items-center gap-3 mb-5 text-xs uppercase tracking-[0.18em] text-neutral-500 font-medium">
              <span className="inline-block w-7 h-px bg-orange-600" />
              {t.servicesOverview.kicker}
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-950 leading-[1.1] tracking-[-0.03em]">
              {t.servicesOverview.title1}
              <br />
              <span className="text-neutral-400">{t.servicesOverview.title2}</span>
            </h2>
            <p className="mt-6 text-lg text-neutral-600 leading-relaxed">
              {t.servicesOverview.subtitle}
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-500 font-medium">
            {t.servicesOverview.core}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {core.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mb-3 text-xs uppercase tracking-[0.16em] text-neutral-500 font-medium">
            {t.servicesOverview.amazon}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {amazon.map((s) => (
              <Card key={s.title} {...s} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
