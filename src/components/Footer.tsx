"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { GA_ID, openCookieSettings } from "@/lib/analytics";
import { GOOGLE_MAPS, PORTALS, SOCIAL, serviceHref } from "@/lib/site";

const INSTAGRAM_PATH =
  "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z";
const LINKEDIN_PATH =
  "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z";

// Only profiles with a URL set in SOCIAL are shown.
const socialLinks = [
  { label: "LinkedIn", href: SOCIAL.linkedin, path: LINKEDIN_PATH },
  { label: "Instagram", href: SOCIAL.instagram, path: INSTAGRAM_PATH },
].filter((s) => s.href);

export default function Footer() {
  const { t } = useLanguage();

  const companyLinks = [
    { name: t.footer.about, href: "/#about" },
    { name: t.footer.servicesLink, href: "/services/" },
    { name: t.footer.pricingLink, href: "/#pricing" },
    { name: t.footer.contactLink, href: "/#contact" },
  ];

  const serviceLinks = [
    { name: t.footer.fbaPrep, href: serviceHref("fba-prep") },
    { name: t.footer.fulfillment, href: serviceHref("fulfillment") },
    { name: t.footer.crossBorderShipping, href: serviceHref("cross-border") },
    { name: t.footer.returnsHandling, href: serviceHref("returns") },
    { name: t.footer.automatedPricing, href: serviceHref("automated-pricing") },
    { name: t.footer.analytics, href: serviceHref("analytics") },
    { name: t.footer.listingOptimization, href: serviceHref("listing-optimization") },
    { name: t.footer.buyerMessaging, href: serviceHref("buyer-messaging") },
  ];

  const resourceLinks = [
    { name: "Guides", href: "/guides/" },
    { name: t.footer.privacy, href: "/privacy" },
    { name: t.footer.terms, href: "/terms" },
    { name: PORTALS.app.label, href: PORTALS.app.href },
    { name: PORTALS.returns.label, href: PORTALS.returns.href },
  ];

  return (
    <footer className="text-white" style={{ background: "var(--bg-void)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <Image src="/logo-light.png" alt="MuggleShip" width={191} height={40} className="h-10 w-auto mb-4" />
            <p className="text-sm text-gray-400 mb-6 max-w-sm leading-relaxed">{t.footer.desc}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-400 mb-2">London Office</div>
                <div className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                  <MapPin size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>86-90 Paul Street,<br />London, EC2A 4NE</span>
                </div>
              </div>
              <div>
                <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-orange-400 mb-2">Operations</div>
                <div className="flex items-start gap-2 text-sm text-gray-400 leading-relaxed">
                  <MapPin size={14} className="text-orange-400 flex-shrink-0 mt-0.5" />
                  <span>
                    Unit 2, Caxton Rd,<br />Bedford MK41 0LF
                    <br />
                    <a href={GOOGLE_MAPS.url} target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors">
                      Get directions
                    </a>
                  </span>
                </div>
              </div>
            </div>

            <div className="space-y-2 pt-4 border-t border-gray-800/60">
              <a href="tel:+447931580067" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-orange-400 transition-colors font-mono">
                <Phone size={14} className="text-orange-400 flex-shrink-0" />
                +44 7931 580067
              </a>
              <a href="mailto:support@muggleship.com" className="flex items-center gap-2.5 text-sm text-gray-400 hover:text-orange-400 transition-colors">
                <Mail size={14} className="text-orange-400 flex-shrink-0" />
                support@muggleship.com
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4">{t.footer.company}</h2>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4">{t.footer.services}</h2>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">{link.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold text-white mb-4">{t.footer.resources}</h2>
            <ul className="space-y-3">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">{link.name}</Link>
                </li>
              ))}
              {GA_ID && (
                <li>
                  <button type="button" onClick={openCookieSettings} className="text-sm text-gray-400 hover:text-orange-400 transition-colors">
                    Cookie settings
                  </button>
                </li>
              )}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mb-8">
          <p className="text-xs text-gray-400 leading-relaxed max-w-4xl">
            {t.footer.disclosure}
          </p>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <div className="inline-flex items-center gap-2.5">
                <span className="status-dot" />
                <span className="text-[10px] font-mono uppercase tracking-[0.22em] text-gray-400">
                  Operations Live · Bedford UK
                </span>
              </div>
              <p className="text-xs text-gray-400">
                Copyright &copy; {new Date().getFullYear()} {t.footer.copyright}
              </p>
            </div>
            {socialLinks.length > 0 && (
              <div className="flex items-center gap-6">
                {socialLinks.map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-400 transition-colors" aria-label={s.label}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d={s.path} /></svg>
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
