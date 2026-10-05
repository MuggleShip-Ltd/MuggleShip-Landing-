import Image from "next/image";

// Hero visual: how stock moves through MuggleShip. HTML nodes sit on an
// SVG of connectors sharing a 0–100 coordinate space; a light pulse runs
// along each connector (CSS, see .route-flow in globals.css).
const OUTPUTS = [
  { x: 17, title: "Amazon FBA", note: "Prepped & palletised" },
  { x: 50, title: "UK customers", note: "Every channel" },
  { x: 83, title: "EU & worldwide", note: "Duties paid" },
];

// Connectors start at the hub's centre and run underneath it, so they
// meet the card cleanly at any aspect ratio.
const PATHS = [
  "M50 12 L50 44",
  "M50 44 C50 70 17 66 17 80",
  "M50 44 L50 80",
  "M50 44 C50 70 83 66 83 80",
];

export default function RouteCard() {
  return (
    <figure
      aria-label="Your stock arrives at our Bedford warehouse from your supplier and leaves for Amazon FBA, UK customers, and the EU and worldwide."
      className="relative m-0"
    >
      <div
        className="relative aspect-[5/6] sm:aspect-[6/5] lg:aspect-[5/6] w-full rounded-[28px] overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 45%, rgba(255,122,71,0.16), transparent 70%), linear-gradient(165deg, #1a1411 0%, #12151b 55%, #0e1116 100%)",
          border: "1px solid rgba(255,122,71,0.22)",
        }}
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {PATHS.map((d) => (
            <path key={d} d={d} fill="none" stroke="rgba(240,246,252,0.14)" strokeWidth="1.5" vectorEffect="non-scaling-stroke" />
          ))}
          {PATHS.map((d, i) => (
            <path
              key={`flow-${d}`}
              d={d}
              pathLength={100}
              fill="none"
              stroke="#ff7a47"
              strokeWidth="2"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              className="route-flow"
              style={{ animationDelay: i === 0 ? "0s" : `${0.9 + i * 0.25}s` }}
            />
          ))}
        </svg>

        {/* Supplier */}
        <div className="absolute left-1/2 top-[12%] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-[var(--border-soft)] bg-[#11151b] px-4 py-2 text-sm text-[var(--ink-200)]">
          Your supplier
        </div>

        {/* Bedford hub */}
        <div className="route-hub absolute left-1/2 top-[44%] w-[62%] max-w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-[rgba(255,122,71,0.55)] bg-[#1a1410] p-4 sm:p-5">
          <div className="flex items-center gap-3">
            <Image src="/favicon.png" alt="" width={28} height={28} className="h-7 w-7" />
            <div>
              <div className="text-base font-semibold leading-tight text-[var(--ink-100)]">Bedford, UK</div>
              <div className="text-xs text-[var(--ink-400)]">One warehouse, one team</div>
            </div>
          </div>
          <div className="mt-3 text-xs leading-relaxed text-[var(--ink-300)]">
            Inspect · label · store · pick · pack · returns
          </div>
        </div>

        {/* Destinations */}
        {OUTPUTS.map((o) => (
          <div
            key={o.title}
            className="absolute top-[80%] w-[30%] -translate-x-1/2 -translate-y-1/2 rounded-xl border border-[var(--border-soft)] bg-[#11151b] px-2 py-2.5 text-center sm:px-3"
            style={{ left: `${o.x}%` }}
          >
            <div className="text-[13px] font-semibold leading-tight text-[var(--ink-100)] sm:text-sm">{o.title}</div>
            <div className="mt-0.5 text-[11px] text-[var(--ink-400)] sm:text-xs">{o.note}</div>
          </div>
        ))}
      </div>

      {/* Floating fact */}
      <div className="float-soft absolute -bottom-6 right-4 sm:-right-6 flex items-center gap-3 rounded-2xl border border-[var(--border-soft)] bg-[rgba(17,21,27,0.92)] px-4 py-3 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.7)] backdrop-blur">
        <span className="h-2.5 w-2.5 rounded-full bg-[#3fb950] shadow-[0_0_0_4px_rgba(63,185,80,0.18)]" aria-hidden="true" />
        <div>
          <div className="text-sm font-semibold text-[var(--ink-100)]">Same-day processing</div>
          <div className="text-xs text-[var(--ink-400)]">Quote within 24 hours</div>
        </div>
      </div>
    </figure>
  );
}
