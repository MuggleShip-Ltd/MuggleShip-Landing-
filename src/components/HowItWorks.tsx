import Reveal from "./Reveal";

const STEPS = [
  { when: "Day 0", title: "Tell us what you ship", desc: "Channels, SKUs and monthly volume." },
  { when: "Within 24 hours", title: "Itemised quote", desc: "Priced for your account. No obligation." },
  { when: "Within 5 business days", title: "Onboarding", desc: "Channels connected, stock received in Bedford." },
  { when: "Every day after", title: "Same-day processing", desc: "Orders, prep and returns, handled." },
];

// Four steps on a track that fills once the section is in view
// (.track-fill / .track-dot react to <Reveal>'s rv-in class).
export default function HowItWorks() {
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--bg-band)" }}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="max-w-2xl text-4xl font-medium leading-[1.05] tracking-[-0.035em] text-[var(--ink-100)] md:text-5xl">
          Live in about a week.
        </h2>

        <Reveal threshold={0.35} className="relative mt-14 md:mt-16">
          {/* Track: vertical on mobile, horizontal from md */}
          <div aria-hidden="true" className="absolute bottom-2 left-[5px] top-2 w-px bg-[var(--border-soft)] md:hidden">
            <div className="track-fill-y h-full w-full bg-[var(--ember)]" />
          </div>
          <div aria-hidden="true" className="absolute left-0 right-0 top-[5px] hidden h-px bg-[var(--border-soft)] md:block">
            <div className="track-fill h-full w-full bg-[var(--ember)]" />
          </div>

          <ol className="relative grid grid-cols-1 gap-10 md:grid-cols-4 md:gap-8">
            {STEPS.map((s, i) => (
              <li key={s.title} className="relative pl-8 md:pl-0 md:pt-9">
                <span
                  aria-hidden="true"
                  className="track-dot absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full md:top-0"
                  style={{ transitionDelay: `${0.35 + i * 0.35}s` }}
                />
                <div className="text-sm text-[var(--ember)]">{s.when}</div>
                <div className="mt-2 text-xl font-medium text-[var(--ink-100)]">{s.title}</div>
                <p className="mt-1.5 text-[15px] leading-relaxed text-[var(--ink-400)]">{s.desc}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
