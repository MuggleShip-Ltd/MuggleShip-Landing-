import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import JsonLd from "@/components/JsonLd";
import { SERVICE_PAGES } from "@/content/services";
import { OG_IMAGE, SERVICES, SITE_NAME, SITE_URL, serviceHref } from "@/lib/site";

const title = "Fulfillment & Amazon Seller Services";
const description =
  "FBA prep, eCommerce fulfillment, cross-border shipping and returns from our Bedford warehouse, plus Amazon price automation and listing optimization.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/services/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_GB",
    url: "/services/",
    title: `${title} | ${SITE_NAME}`,
    description,
    images: [OG_IMAGE],
  },
};

// Services without a dedicated page yet link to their home-page section.
const extras = SERVICES.filter((s) => !s.slug);

export default function ServicesIndex() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Services", item: `${SITE_URL}/services/` },
        ],
      },
      {
        "@type": "ItemList",
        itemListElement: SERVICE_PAGES.map((s, i) => ({
          "@type": "ListItem",
          position: i + 1,
          url: `${SITE_URL}/services/${s.slug}/`,
          name: s.name,
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
                "radial-gradient(ellipse 60% 70% at 90% 0%, rgba(255,122,71,0.20), transparent 70%)",
            }}
          />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-8 bg-[var(--ember)] opacity-60" />
              <span className="scene-label">Services</span>
            </div>
            <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.035em] font-medium text-[var(--ink-100)]">
              UK fulfillment and Amazon seller services
            </h1>
            <p className="mt-8 max-w-2xl text-lg md:text-xl text-[var(--ink-300)] leading-relaxed">
              One Bedford warehouse and one operations team for FBA prep,
              multichannel fulfillment, cross-border shipping and returns —
              plus the Amazon tooling to price, list and report on your
              catalogue. Pricing is quote-based, with no setup fees or monthly
              subscriptions.
            </p>
          </div>
        </section>

        <section className="pb-24 md:pb-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {SERVICE_PAGES.map((s, i) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  className="group flex flex-col p-7 rounded-2xl transition-colors"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors mb-8">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h2 className="text-xl font-medium text-[var(--ink-100)] mb-2">{s.name}</h2>
                  <p className="text-sm text-[var(--ink-400)] leading-relaxed mb-6">{s.metaDescription}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
                    Learn more
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              ))}
              {extras.map((s) => (
                <Link
                  key={s.id}
                  href={serviceHref(s.id)}
                  className="group flex flex-col p-7 rounded-2xl transition-colors"
                  style={{ background: "var(--bg-card)", border: "1px solid var(--border-faint)" }}
                >
                  <span className="font-mono text-[10px] tracking-[0.3em] text-[var(--ink-500)] mb-8">
                    Amazon tooling
                  </span>
                  <h2 className="text-xl font-medium text-[var(--ink-100)] mb-2">{s.name}</h2>
                  <p className="text-sm text-[var(--ink-400)] leading-relaxed mb-6">{s.description}</p>
                  <span className="mt-auto inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.2em] text-[var(--ink-500)] group-hover:text-[var(--ember)] transition-colors">
                    Learn more
                    <ArrowUpRight size={14} />
                  </span>
                </Link>
              ))}
            </div>

            <div className="mt-16">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium rounded-full transition-all"
                style={{
                  background: "var(--ember)",
                  color: "var(--bg-void)",
                  boxShadow:
                    "0 0 0 1px rgba(255,106,31,0.4), 0 12px 36px -8px rgba(255,106,31,0.5)",
                }}
              >
                Get a free quote
                <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
