import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Boxes,
  Camera,
  ChartLine,
  ChevronRight,
  ClipboardCheck,
  Clock,
  FileText,
  Gauge,
  Globe,
  Image as ImageIcon,
  Languages,
  Layers,
  ListChecks,
  MessageSquare,
  PackageCheck,
  Phone,
  Plane,
  Plug,
  Receipt,
  Recycle,
  RotateCcw,
  Scale,
  ScanBarcode,
  Search,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  Store,
  Tag,
  TrendingUp,
  Truck,
  Warehouse,
  type LucideIcon,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { guidesForService } from "@/content/guides";
import { getService } from "@/content/services";
import { CONTACT, SITE_URL } from "@/lib/site";
import type { ServiceContent, ServiceIcon } from "@/lib/services";

const ICONS: Record<ServiceIcon, LucideIcon> = {
  tag: Tag,
  "package-check": PackageCheck,
  boxes: Boxes,
  truck: Truck,
  globe: Globe,
  shield: ShieldCheck,
  returns: RotateCcw,
  chart: ChartLine,
  search: Search,
  image: ImageIcon,
  layers: Layers,
  clock: Clock,
  message: MessageSquare,
  file: FileText,
  sliders: SlidersHorizontal,
  plug: Plug,
  clipboard: ClipboardCheck,
  warehouse: Warehouse,
  barcode: ScanBarcode,
  recycle: Recycle,
  languages: Languages,
  trending: TrendingUp,
  sparkles: Sparkles,
  badge: BadgeCheck,
  scale: Scale,
  receipt: Receipt,
  plane: Plane,
  store: Store,
  list: ListChecks,
  gauge: Gauge,
  camera: Camera,
};

const QUOTE_HREF = "/#contact";

const ctaStyle = {
  background: "var(--ember)",
  color: "var(--bg-void)",
  boxShadow:
    "0 0 0 1px rgba(255,106,31,0.4), 0 12px 36px -8px rgba(255,106,31,0.5)",
};

// Service landing page: hero, what's included, long-form copy, process,
// who it's for, FAQ, related services and a closing CTA — plus Service,
// BreadcrumbList and FAQPage structured data.
export default function ServicePage({ service }: { service: ServiceContent }) {
  const url = `${SITE_URL}/services/${service.slug}/`;
  const guides = guidesForService(service.slug);
  const related = service.related
    .map((slug) => getService(slug))
    .filter((s): s is ServiceContent => Boolean(s));
  const ctaLabel = service.ctaLabel || "Get a free quote";

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: "Worldwide",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
          { "@type": "ListItem", position: 3, name: service.name, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: service.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <ScrollProgress />
      <Header />
      <main>
        {/* Hero */}
        <section className="relative pt-32 md:pt-40 pb-20 md:pb-28 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 90% 0%, rgba(255,122,71,0.20), transparent 70%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav aria-label="Breadcrumb" className="mb-10">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[var(--ink-500)]">
                <li>
                  <Link href="/" className="hover:text-[var(--ink-200)] transition-colors">
                    Home
                  </Link>
                </li>
                <li aria-hidden><ChevronRight size={12} /></li>
                <li>
                  <Link href="/services/" className="hover:text-[var(--ink-200)] transition-colors">
                    Services
                  </Link>
                </li>
                <li aria-hidden><ChevronRight size={12} /></li>
                <li aria-current="page" className="text-[var(--ink-300)]">
                  {service.name}
                </li>
              </ol>
            </nav>

            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
              <span className="scene-label">{service.kicker}</span>
            </div>

            <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
              {service.h1}
            </h1>

            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--ink-300)] leading-relaxed">
              {service.intro}
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-start gap-3">
              <Link
                href={QUOTE_HREF}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition-all"
                style={ctaStyle}
              >
                {ctaLabel}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={`tel:${CONTACT.phoneE164}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full border transition-colors text-[var(--ink-200)] hover:text-[var(--ink-100)]"
                style={{ borderColor: "var(--border-soft)" }}
              >
                <Phone size={15} />
                {CONTACT.phone}
              </a>
            </div>

            {service.portal && (
              <p className="mt-5 text-sm text-[var(--ink-400)]">
                {service.portal.note}{" "}
                <a
                  href={service.portal.href}
                  className="inline-flex items-center gap-1 text-[var(--ember)] hover:text-[var(--ember-glow)] underline underline-offset-4"
                >
                  {service.portal.label}
                  <ArrowUpRight size={14} />
                </a>
                {service.portal.appHref && (
                  <>
                    {" "}or the{" "}
                    <a
                      href={service.portal.appHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[var(--ember)] hover:text-[var(--ember-glow)] underline underline-offset-4"
                    >
                      iPhone app
                      <ArrowUpRight size={14} />
                    </a>
                  </>
                )}
              </p>
            )}

            <ul className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-y-5 gap-x-10 max-w-3xl">
              {service.highlights.map((h, i) => (
                <li key={h} className="flex items-baseline gap-3">
                  <span
                    className="font-mono text-[10px] tracking-[0.3em] text-[var(--ember)] uppercase"
                    aria-hidden
                  >
                    {String.fromCharCode(65 + i)}
                  </span>
                  <span className="text-sm text-[var(--ink-200)] leading-snug">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* What's included */}
        <section
          className="py-24 md:py-32"
          style={{ background: "var(--bg-band)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">What&apos;s included</span>
              </div>
              <h2 className="max-w-3xl text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] font-medium text-[var(--ink-100)] mb-14">
                What our {service.name} service covers
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {service.included.map((f, i) => {
                  const Icon = ICONS[f.icon];
                  return (
                    <div
                      key={f.title}
                      className="relative flex flex-col p-7 rounded-2xl"
                      style={{
                        background: "var(--bg-card)",
                        border: "1px solid var(--border-faint)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-8">
                        <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ink-500)]">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <Icon size={18} className="text-[var(--ember)]" strokeWidth={1.6} />
                      </div>
                      <h3 className="text-lg font-medium text-[var(--ink-100)] mb-2 leading-tight">
                        {f.title}
                      </h3>
                      <p className="text-sm text-[var(--ink-400)] leading-relaxed">{f.desc}</p>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* Long-form copy */}
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
            {service.sections.map((s) => (
              <Reveal key={s.heading}>
                <h2 className="text-2xl md:text-3xl leading-tight tracking-[-0.02em] font-medium text-[var(--ink-100)] mb-5">
                  {s.heading}
                </h2>
                <div className="space-y-4">
                  {s.paragraphs.map((p, i) => (
                    <p key={i} className="text-base md:text-lg text-[var(--ink-300)] leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}

            {(service.availability || service.disclosure) && (
              <Reveal>
                <div className="flex flex-col gap-5">
                  {service.availability && (
                    <div className="flex items-center gap-3">
                      <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                      <span className="scene-label">{service.availability}</span>
                    </div>
                  )}
                  {service.disclosure && (
                    <p className="text-sm leading-relaxed text-[var(--ink-400)] border-l-2 border-[var(--ember)] pl-5 py-1">
                      {service.disclosure}
                    </p>
                  )}
                </div>
              </Reveal>
            )}
          </div>
        </section>

        {/* Process + who it's for */}
        <section
          className="py-24 md:py-32"
          style={{ background: "var(--bg-band)" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-16">
            <Reveal className="lg:col-span-7">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">How it works</span>
              </div>
              <h2 className="text-3xl md:text-4xl leading-tight tracking-[-0.03em] font-medium text-[var(--ink-100)] mb-10">
                From first call to first shipment
              </h2>
              <ol className="space-y-8">
                {service.process.map((step, i) => (
                  <li key={step.title} className="flex gap-5">
                    <span
                      className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-mono text-xs text-[var(--ember)]"
                      style={{ border: "1px solid var(--border-soft)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <h3 className="text-lg font-medium text-[var(--ink-100)] mb-1">{step.title}</h3>
                      <p className="text-sm md:text-base text-[var(--ink-400)] leading-relaxed">{step.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal className="lg:col-span-5" delay={120}>
              <div
                className="p-8 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                  <span className="scene-label">Who it&apos;s for</span>
                </div>
                <ul className="space-y-4">
                  {service.idealFor.map((item) => (
                    <li key={item} className="flex gap-3 text-sm md:text-base text-[var(--ink-200)] leading-relaxed">
                      <BadgeCheck size={18} className="flex-shrink-0 mt-0.5 text-[var(--ember)]" strokeWidth={1.6} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 md:py-32">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl leading-tight tracking-[-0.03em] font-medium text-[var(--ink-100)] mb-10">
                {service.name}: common questions
              </h2>
            </Reveal>
            <div>
              {service.faqs.map((f) => (
                <details
                  key={f.q}
                  className="group py-6 border-t border-[var(--border-faint)] first:border-t-0"
                >
                  <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-base md:text-lg font-medium text-[var(--ink-100)] [&::-webkit-details-marker]:hidden">
                    <h3 className="font-medium">{f.q}</h3>
                    <span
                      className="flex-shrink-0 mt-1 text-[var(--ember)] transition-transform group-open:rotate-45"
                      aria-hidden
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm md:text-base text-[var(--ink-300)] leading-relaxed">
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Related services */}
        {related.length > 0 && (
          <section className="py-24" style={{ background: "var(--bg-band)" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">Related services</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    href={`/services/${r.slug}/`}
                    className="group flex flex-col p-7 rounded-2xl transition-colors"
                    style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
                  >
                    <h3 className="text-lg font-medium text-[var(--ink-100)] mb-2">{r.name}</h3>
                    <p className="text-sm text-[var(--ink-400)] leading-relaxed mb-6">{r.metaDescription}</p>
                    <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
                      Learn more
                      <ArrowUpRight size={14} />
                    </span>
                  </Link>
                ))}
              </div>

              {guides.length > 0 && (
                <>
                  <div className="flex items-center gap-3 mt-16 mb-10">
                    <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                    <span className="scene-label">Guides</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {guides.map((g) => (
                      <Link
                        key={g.slug}
                        href={`/guides/${g.slug}/`}
                        className="group flex flex-col p-7 rounded-2xl transition-colors"
                        style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
                      >
                        <h3 className="text-lg font-medium text-[var(--ink-100)] mb-2">{g.h1}</h3>
                        <p className="text-sm text-[var(--ink-400)] leading-relaxed mb-6">{g.metaDescription}</p>
                        <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
                          Read guide
                          <ArrowUpRight size={14} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        )}

        {/* Closing CTA */}
        <section className="py-28 md:py-36 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(ellipse 50% 70% at 50% 100%, rgba(255,122,71,0.22), transparent 70%)",
            }}
          />
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-5xl leading-[1.05] tracking-[-0.03em] font-medium text-[var(--ink-100)]">
              Get a tailored {service.name} quote
            </h2>
            <p className="mt-6 text-lg text-[var(--ink-300)] leading-relaxed">
              Tell us about your products and volumes. We send an itemised,
              no-obligation quote within 24 hours.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href={QUOTE_HREF}
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition-all"
                style={ctaStyle}
              >
                {ctaLabel}
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={`mailto:${CONTACT.email}`}
                className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full border transition-colors text-[var(--ink-200)] hover:text-[var(--ink-100)]"
                style={{ borderColor: "var(--border-soft)" }}
              >
                {CONTACT.email}
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
