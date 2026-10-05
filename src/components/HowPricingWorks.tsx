import CostEstimator from "./CostEstimator";

const STATEMENT =
  "No setup fees. No monthly subscription. Storage billed by the space you use, and rates that fall as you grow.";

// One sentence about pricing. Each word brightens as it scrolls through
// the viewport (CSS scroll-driven animation, .lit-word); browsers without
// support, and reduced-motion users, see it fully lit. Below it, a rough
// cost estimator turns the statement into numbers.
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
        <div className="mt-12 md:mt-14">
          <CostEstimator />
        </div>
      </div>
    </section>
  );
}
