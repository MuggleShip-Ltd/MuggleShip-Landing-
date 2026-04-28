"use client";

/*
  Animated background layer — very faint shipping icons drifting right-to-left.
  Pure CSS animations, no JS runtime cost.
*/

const icons = [
  // Package box
  `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="m7.5 4.27 9 5.15"/><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5"/><path d="M12 22V12"/></svg>`,
  // Truck
  `<svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H12"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg>`,
  // Warehouse
  `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z"/><path d="M6 18h12"/><path d="M6 14h12"/></svg>`,
  // Tag / label
  `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"/><circle cx="7.5" cy="7.5" r=".5" fill="currentColor"/></svg>`,
  // Globe
  `<svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
  // Clipboard check
  `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>`,
];

// Generate rows of floating icons with different speeds/positions
const rows = [
  { top: "8%", duration: "35s", delay: "0s", opacity: 0.03, reverse: false },
  { top: "28%", duration: "45s", delay: "-10s", opacity: 0.025, reverse: true },
  { top: "48%", duration: "40s", delay: "-5s", opacity: 0.03, reverse: false },
  { top: "68%", duration: "50s", delay: "-15s", opacity: 0.02, reverse: true },
  { top: "88%", duration: "38s", delay: "-8s", opacity: 0.025, reverse: false },
];

export default function FloatingBg() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-[1]">
      {rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className="absolute whitespace-nowrap"
          style={{
            top: row.top,
            opacity: row.opacity,
            animation: `${row.reverse ? "floatBgReverse" : "floatBg"} ${row.duration} linear ${row.delay} infinite`,
          }}
        >
          {/* Repeat icons enough to fill + loop seamlessly */}
          {[...icons, ...icons, ...icons, ...icons].map((svg, i) => (
            <span
              key={i}
              className="inline-block mx-12 text-orange-900"
              style={{ transform: `rotate(${(i * 7) % 30 - 15}deg)` }}
              dangerouslySetInnerHTML={{ __html: svg }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
