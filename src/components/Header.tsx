"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { name: t.nav.services, href: "/#services" },
    { name: t.nav.pricing, href: "/#pricing" },
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.faq, href: "/#faq" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(250,247,242,0.85)] backdrop-blur-xl border-b border-[var(--border-faint)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="MuggleShip"
              width={140}
              height={32}
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[var(--ink-300)] hover:text-[var(--ink-100)] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-1.5 px-4 py-2 text-sm font-medium rounded-full transition-all"
              style={{
                background: "var(--ember)",
                color: "var(--bg-void)",
                boxShadow: "0 0 0 1px rgba(255,106,31,0.4), 0 6px 20px -6px rgba(255,106,31,0.45)",
              }}
            >
              {t.nav.getQuote}
              <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="p-2 text-[var(--ink-200)]"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-[var(--bg-base)] border-t border-[var(--border-faint)]">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-base font-medium text-[var(--ink-200)] hover:text-[var(--ink-100)] py-2.5"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center px-4 py-3 mt-3 text-sm font-medium rounded-full"
              style={{ background: "var(--ember)", color: "var(--bg-void)" }}
            >
              {t.nav.getQuote}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
