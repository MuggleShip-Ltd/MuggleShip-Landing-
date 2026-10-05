import Link from "next/link";

const STATEMENT =
  "No setup fees. No monthly subscription. Storage billed by the space you use, and rates that fall as you grow.";

// One sentence about pricing. Each word brightens as it scrolls through
// the viewport (CSS scroll-driven animation, .lit-word); browsers without
// support, and reduced-motion users, see it fully lit.
export default function HowPricingWorks() {
  const words = STATEMENT.split(" ");
  return (
    <section id="pricing" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="max-w-5xl text-balance text-[2rem] font-medium leading-[1.12] tracking-[-0.03em] text-[var(--ink-100)] sm:text-5xl lg:text-[3.75rem]">
          {words.map((w, i) => (
            <span
              key={i}
              className="lit-word"
              style={{
                animationRange: `entry ${Math.min(90, 20 + i * 4)}% cover ${Math.min(55, 30 + i * 1.6)}%`,
              }}
            >
              {w}{" "}
            </span>
          ))}
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
          <Link
            href="/#contact"
            className="self-start rounded-full px-6 py-3.5 text-[15px] font-semibold"
            style={{ background: "var(--ember)", color: "var(--bg-void)" }}
          >
            Request your quote
          </Link>
          <p className="text-[15px] text-[var(--ink-400)]">
            Every quote is itemised and arrives within 24 hours.
          </p>
        </div>
      </div>
    </section>
  );
}
