import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";
import { GUIDES } from "@/content/guides";
import { readingMinutes } from "@/lib/guides";
import { OG_IMAGE, SITE_NAME, SITE_URL } from "@/lib/site";

const title = "Guides for Amazon & eCommerce Sellers";
const description =
  "Practical guides on Amazon FBA prep, shipping to EU customers from the UK and running eCommerce fulfillment, from the MuggleShip team in Bedford.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/guides/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: "/guides/",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [OG_IMAGE],
  },
};

export default function GuidesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/guides/` },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: GUIDES.map((g, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/guides/${g.slug}/`,
          name: g.h1,
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd data={jsonLd} />
      <Header />
      <main>
        <section className="relative pt-32 md:pt-40 pb-16 overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none -z-10"
            style={{
              background:
                "radial-gradient(ellipse 60% 70% at 90% 0%, rgba(255,122,71,0.18), transparent 70%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
              <span className="scene-label">Guides</span>
            </div>
            <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
              Guides for Amazon and eCommerce sellers
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--ink-300)] leading-relaxed">
              Practical, no-nonsense explainers from the team that preps,
              stores and ships stock for sellers every day in Bedford.
            </p>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {GUIDES.map((g) => (
              <Link
                key={g.slug}
                href={`/guides/${g.slug}/`}
                className="group flex flex-col p-7 rounded-2xl"
                style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
              >
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors mb-8">
                  {g.kicker} · {readingMinutes(g)} min read
                </span>
                <h2 className="text-xl font-medium text-[var(--ink-100)] mb-2">{g.h1}</h2>
                <p className="text-sm text-[var(--ink-400)] leading-relaxed mb-6">{g.metaDescription}</p>
                <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
                  Read guide <ArrowUpRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
