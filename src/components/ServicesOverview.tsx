import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, serviceHref } from "@/lib/site";
import Reveal from "./Reveal";

// Short, scannable copy per service; the detail lives on each service page.
const BLURBS: Record<string, string> = {
  "fba-prep": "Inspected, FNSKU labelled, bagged and palletised, then shipped into Amazon.",
  fulfillment: "Every channel picked, packed and shipped from one stock pool.",
  "cross-border": "Delivered duty paid to the EU and beyond, customs handled.",
  returns: "Checked against your rules, then restocked or disposed of the same day.",
  "automated-pricing": "Your own pricing rules and margin floors, applied through SP-API.",
  analytics: "Inventory health, sales velocity and restock signals from your own data.",
  "listing-optimization": "Audits, keyword research, A+ content and images.",
  "buyer-messaging": "Order and returns questions answered on your behalf, inside Amazon.",
};

const NAMES: Record<string, string> = {
  "fba-prep": "FBA prep",
  fulfillment: "eCommerce fulfillment",
  "cross-border": "Cross-border shipping",
  returns: "Returns management",
  "automated-pricing": "Price automation",
  analytics: "Analytics & reporting",
  "listing-optimization": "Listing optimisation",
  "buyer-messaging": "Buyer messaging",
};

export default function ServicesOverview() {
  return (
    <section id="services" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 lg:grid-cols-12 lg:gap-12 lg:px-8">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-28">
            <h2 className="text-4xl font-medium leading-[1.02] tracking-[-0.04em] text-[var(--ink-100)] md:text-5xl lg:text-6xl">
              Eight services.
              <br />
              <span className="text-[var(--ember-glow)]">One operations partner.</span>
            </h2>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-[var(--ink-400)]">
              Same warehouse, same team, one itemised quote.
            </p>
          </div>
        </div>

        <ol className="lg:col-span-7">
          {SERVICES.map((s, i) => (
            <li key={s.id} id={s.id} className="scroll-mt-28">
              <Reveal delay={i * 60} threshold={0.4}>
                <Link
                  href={serviceHref(s.id)}
                  className="group relative grid grid-cols-[2.5rem_1fr_auto] items-baseline gap-3 border-t border-[var(--border-faint)] py-5 md:gap-4 md:py-6"
                >
                  {/* hover wash, slides in from the left */}
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-y-0 -left-4 right-0 origin-left scale-x-0 rounded-xl bg-[linear-gradient(90deg,rgba(255,122,71,0.08),transparent_70%)] transition-transform duration-300 ease-out group-hover:scale-x-100"
                  />
                  <span className="relative text-sm tabular-nums text-[var(--ember)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="relative">
                    <span className="block text-xl font-medium tracking-[-0.02em] text-[var(--ink-100)] transition-transform duration-300 ease-out group-hover:translate-x-1 md:text-[1.6rem]">
                      {NAMES[s.id] ?? s.name}
                    </span>
                    <span className="mt-1.5 block text-[15px] leading-relaxed text-[var(--ink-400)]">
                      {BLURBS[s.id] ?? s.description}
                    </span>
                  </span>
                  <ArrowRight
                    aria-hidden="true"
                    size={18}
                    className="relative self-center text-[var(--ink-500)] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--ember)]"
                  />
                </Link>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
