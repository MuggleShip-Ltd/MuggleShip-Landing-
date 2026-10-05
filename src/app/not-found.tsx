import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const LINKS = [
  { label: "Services", href: "/services/" },
  { label: "Guides", href: "/guides/" },
  { label: "Get a quote", href: "/#contact" },
];

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 flex items-center pt-40 pb-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="scene-label mb-6">404</p>
          <h1 className="text-4xl sm:text-5xl leading-[1.05] tracking-[-0.03em] font-medium text-[var(--ink-100)]">
            We couldn&apos;t find that page
          </h1>
          <p className="mt-6 text-lg text-[var(--ink-300)] leading-relaxed">
            The link may be out of date, or the page may have moved. These
            are the places most people are looking for:
          </p>
          <ul className="mt-10 flex flex-wrap gap-3">
            {LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium rounded-full border transition-colors text-[var(--ink-200)] hover:text-[var(--ink-100)]"
                  style={{ borderColor: "var(--border-soft)" }}
                >
                  {l.label}
                  <ArrowRight size={14} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </>
  );
}
