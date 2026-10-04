import Link from "next/link";
import { ArrowRight, ArrowUpRight, BadgeCheck, ChevronRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import BackToTop from "@/components/BackToTop";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import { getGuide } from "@/content/guides";
import { getService } from "@/content/services";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";
import { readingMinutes, type GuideContent } from "@/lib/guides";
import type { ServiceContent } from "@/lib/services";

const ctaStyle = {
  background: "var(--ember)",
  color: "var(--bg-void)",
  boxShadow:
    "0 0 0 1px rgba(255,106,31,0.4), 0 12px 36px -8px rgba(255,106,31,0.5)",
};

function formatDate(iso: string) {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

// Long-form guide: header, key takeaways, body sections (paragraphs and
// lists), FAQ, related services and guides — plus Article, BreadcrumbList
// and FAQPage structured data.
export default function GuidePage({ guide }: { guide: GuideContent }) {
  const url = `${SITE_URL}/guides/${guide.slug}/`;
  const services = guide.relatedServices
    .map((s) => getService(s))
    .filter((s): s is ServiceContent => Boolean(s));
  const guides = guide.relatedGuides
    .map((g) => getGuide(g))
    .filter((g): g is GuideContent => Boolean(g));
  const minutes = readingMinutes(guide);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${url}#article`,
        headline: guide.h1,
        description: guide.metaDescription,
        url,
        mainEntityOfPage: url,
        image: `${SITE_URL}${OG_IMAGE.url}`,
        datePublished: guide.published,
        dateModified: guide.updated,
        inLanguage: "en-GB",
        author: { "@id": `${SITE_URL}/#organization` },
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides/` },
          { "@type": "ListItem", position: 3, name: guide.h1, item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: guide.faqs.map((f) => ({
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
        <article>
          {/* Header */}
          <header className="relative pt-32 md:pt-40 pb-14 overflow-hidden">
            <div
              className="absolute inset-0 pointer-events-none -z-10"
              style={{
                background:
                  "radial-gradient(ellipse 60% 70% at 90% 0%, rgba(255,122,71,0.18), transparent 70%)",
              }}
            />
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <nav aria-label="Breadcrumb" className="mb-10">
                <ol className="flex flex-wrap items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[var(--ink-500)]">
                  <li>
                    <Link href="/" className="hover:text-[var(--ink-200)] transition-colors">Home</Link>
                  </li>
                  <li aria-hidden><ChevronRight size={12} /></li>
                  <li>
                    <Link href="/guides/" className="hover:text-[var(--ink-200)] transition-colors">Guides</Link>
                  </li>
                </ol>
              </nav>

              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">{guide.kicker}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl leading-[1.05] tracking-[-0.03em] font-medium text-[var(--ink-100)]">
                {guide.h1}
              </h1>

              <p className="mt-8 text-lg md:text-xl text-[var(--ink-300)] leading-relaxed">
                {guide.intro}
              </p>

              <p className="mt-8 text-xs font-mono uppercase tracking-[0.18em] text-[var(--ink-500)]">
                {SITE_NAME} · Updated{" "}
                <time dateTime={guide.updated}>{formatDate(guide.updated)}</time> · {minutes} min read
              </p>
            </div>
          </header>

          {/* Key takeaways */}
          <section className="pb-6">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className="p-7 md:p-8 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
              >
                <h2 className="scene-label mb-5">Key takeaways</h2>
                <ul className="space-y-3">
                  {guide.keyTakeaways.map((k) => (
                    <li key={k} className="flex gap-3 text-sm md:text-base text-[var(--ink-200)] leading-relaxed">
                      <BadgeCheck size={18} className="flex-shrink-0 mt-0.5 text-[var(--ember)]" strokeWidth={1.6} />
                      <span>{k}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Body */}
          <section className="py-16 md:py-20">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
              {guide.sections.map((s) => {
                const ListTag = s.list?.ordered ? "ol" : "ul";
                return (
                  <Reveal key={s.heading}>
                    <h2 className="text-2xl md:text-3xl leading-tight tracking-[-0.02em] font-medium text-[var(--ink-100)] mb-5">
                      {s.heading}
                    </h2>
                    <div className="space-y-4">
                      {s.paragraphs.map((p, i) => (
                        <p key={i} className="text-base md:text-lg text-[var(--ink-300)] leading-relaxed">{p}</p>
                      ))}
                    </div>
                    {s.list && (
                      <ListTag
                        className={`mt-6 space-y-3 pl-6 text-base md:text-lg text-[var(--ink-200)] leading-relaxed ${
                          s.list.ordered ? "list-decimal" : "list-disc"
                        } marker:text-[var(--ember)]`}
                      >
                        {s.list.items.map((item) => (
                          <li key={item} className="pl-1">{item}</li>
                        ))}
                      </ListTag>
                    )}
                    {s.after && (
                      <div className="mt-6 space-y-4">
                        {s.after.map((p, i) => (
                          <p key={i} className="text-base md:text-lg text-[var(--ink-300)] leading-relaxed">{p}</p>
                        ))}
                      </div>
                    )}
                  </Reveal>
                );
              })}
            </div>
          </section>

          {/* FAQ */}
          <section className="py-16 md:py-24" style={{ background: "var(--bg-band)" }}>
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                <span className="scene-label">FAQ</span>
              </div>
              <h2 className="text-3xl md:text-4xl leading-tight tracking-[-0.03em] font-medium text-[var(--ink-100)] mb-10">
                Frequently asked questions
              </h2>
              <div>
                {guide.faqs.map((f) => (
                  <details key={f.q} className="group py-6 border-t border-[var(--border-faint)] first:border-t-0">
                    <summary className="flex items-start justify-between gap-6 cursor-pointer list-none text-base md:text-lg font-medium text-[var(--ink-100)] [&::-webkit-details-marker]:hidden">
                      <h3 className="font-medium">{f.q}</h3>
                      <span className="flex-shrink-0 mt-1 text-[var(--ember)] transition-transform group-open:rotate-45" aria-hidden>+</span>
                    </summary>
                    <p className="mt-4 text-sm md:text-base text-[var(--ink-300)] leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </article>

        {/* Related services + guides */}
        <section className="py-20 md:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {services.length > 0 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                  <span className="scene-label">Related services</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
                  {services.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      className="group flex flex-col p-7 rounded-2xl"
                      style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
                    >
                      <h3 className="text-lg font-medium text-[var(--ink-100)] mb-2">{s.name}</h3>
                      <p className="text-sm text-[var(--ink-400)] leading-relaxed mb-6">{s.metaDescription}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
                        View service <ArrowUpRight size={14} />
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}

            {guides.length > 0 && (
              <>
                <div className="flex items-center gap-3 mb-8">
                  <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
                  <span className="scene-label">More guides</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {guides.map((g) => (
                    <Link
                      key={g.slug}
                      href={`/guides/${g.slug}/`}
                      className="group flex flex-col p-7 rounded-2xl"
                      style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
                    >
                      <h3 className="text-lg font-medium text-[var(--ink-100)] mb-2">{g.h1}</h3>
                      <p className="text-sm text-[var(--ink-400)] leading-relaxed mb-6">{g.metaDescription}</p>
                      <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
                        Read guide <ArrowUpRight size={14} />
                      </span>
                    </Link>
                  ))}
                </div>
              </>
            )}

            <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition-all"
                style={ctaStyle}
              >
                Get a free quote
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <span className="text-sm text-[var(--ink-400)]">
                Itemised, no-obligation quote within 24 hours.
              </span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
