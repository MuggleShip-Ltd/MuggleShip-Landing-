"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { trackEvent } from "@/lib/analytics";
import {
  CURRENCY,
  DOMESTIC_SHIPPING_FROM,
  storagePerMonth,
  volumetricUnits,
} from "@/lib/pricing";

const money = (n: number, digits = 0) =>
  new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: CURRENCY,
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(n);

// Tweens a number towards its target so results "count" when inputs change.
function useTween(target: number, ms = 450) {
  const [value, setValue] = useState(target);
  const from = useRef(target);
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();
    const a = from.current;
    let raf = 0;
    const step = (now: number) => {
      const t = reduce ? 1 : Math.min(1, (now - start) / ms);
      const eased = 1 - Math.pow(1 - t, 3);
      const v = a + (target - a) * eased;
      from.current = v;
      setValue(v);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [target, ms]);
  return value;
}

function Slider({
  id,
  label,
  value,
  min,
  max,
  step,
  suffix,
  onChange,
}: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  suffix: string;
  onChange: (v: number) => void;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[15px] text-[var(--ink-200)]">
          {label}
        </label>
        <span className="tabular-nums text-[15px] font-medium text-[var(--ink-100)]">
          {value.toLocaleString("en-GB")} <span className="text-[var(--ink-400)]">{suffix}</span>
        </span>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="estimator-range mt-3 w-full"
        style={{ "--fill": `${pct}%` } as React.CSSProperties}
      />
    </div>
  );
}

const SIZES = [
  { id: "s", label: "Small", dims: [40, 30, 30] },
  { id: "m", label: "Medium", dims: [60, 40, 40] },
  { id: "l", label: "Large", dims: [80, 60, 50] },
] as const;

// Rough monthly cost from three inputs. Storage uses the tiered monthly volumetric
// rates in lib/pricing.ts; shipping is the domestic "from" price per order.
export default function CostEstimator() {
  const [cartons, setCartons] = useState(20);
  const [size, setSize] = useState<(typeof SIZES)[number]["id"]>("m");
  const [orders, setOrders] = useState(300);
  const used = useRef(false);

  const dims = SIZES.find((s) => s.id === size)!.dims;
  const units = cartons * volumetricUnits(dims[0], dims[1], dims[2]);
  const storageMonth = storagePerMonth(units);
  const shippingMonth = orders * DOMESTIC_SHIPPING_FROM;

  const tStorage = useTween(storageMonth);
  const tShipping = useTween(shippingMonth);
  const tTotal = useTween(storageMonth + shippingMonth);

  const touch = () => {
    if (used.current) return;
    used.current = true;
    trackEvent("cost_estimator_used");
  };

  return (
    <div
      className="grid grid-cols-1 overflow-hidden rounded-3xl border border-[var(--border-soft)] lg:grid-cols-12"
      style={{ background: "var(--bg-card)" }}
    >
      <div className="space-y-7 p-6 sm:p-8 lg:col-span-7" onPointerDown={touch} onKeyDown={touch}>
        <Slider id="est-cartons" label="Cartons in storage" value={cartons} min={1} max={300} step={1} suffix="cartons" onChange={setCartons} />

        <fieldset>
          <legend className="text-[15px] text-[var(--ink-200)]">Carton size</legend>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {SIZES.map((s) => (
              <label
                key={s.id}
                className={`cursor-pointer rounded-xl border px-3 py-2.5 text-center transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-[var(--ember)] ${
                  size === s.id
                    ? "border-[var(--ember)] bg-[rgba(255,122,71,0.08)] text-[var(--ink-100)]"
                    : "border-[var(--border-soft)] text-[var(--ink-300)] hover:border-[var(--ink-500)]"
                }`}
              >
                <input type="radio" name="est-size" value={s.id} checked={size === s.id} onChange={() => setSize(s.id)} className="sr-only" />
                <span className="block text-sm font-medium">{s.label}</span>
                <span className="block text-xs tabular-nums text-[var(--ink-400)]">{s.dims.join("×")} cm</span>
              </label>
            ))}
          </div>
        </fieldset>

        <Slider id="est-orders" label="UK orders per month" value={orders} min={0} max={5000} step={50} suffix="orders" onChange={setOrders} />
      </div>

      <div
        className="flex flex-col justify-between gap-8 border-t border-[var(--border-soft)] p-6 sm:p-8 lg:col-span-5 lg:border-l lg:border-t-0"
        style={{ background: "linear-gradient(160deg, rgba(255,122,71,0.10), transparent 60%)" }}
      >
        <dl className="space-y-4" aria-live="polite">
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[15px] text-[var(--ink-300)]">Storage</dt>
            <dd className="tabular-nums text-[var(--ink-100)]">{money(tStorage)}<span className="text-[var(--ink-400)]">/mo</span></dd>
          </div>
          <div className="flex items-baseline justify-between gap-4">
            <dt className="text-[15px] text-[var(--ink-300)]">UK shipping, from</dt>
            <dd className="tabular-nums text-[var(--ink-100)]">{money(tShipping)}<span className="text-[var(--ink-400)]">/mo</span></dd>
          </div>
          <div className="border-t border-[var(--border-soft)] pt-4">
            <dt className="text-sm text-[var(--ember)]">Estimated from</dt>
            <dd className="mt-1 text-5xl font-medium tabular-nums tracking-[-0.04em] text-[var(--ink-100)]">
              {money(tTotal)}
              <span className="text-xl text-[var(--ink-400)]">/mo</span>
            </dd>
          </div>
        </dl>
        <div>
          <Link
            href="/#contact"
            className="inline-block rounded-full px-6 py-3.5 text-[15px] font-semibold"
            style={{ background: "var(--ember)", color: "var(--bg-void)" }}
          >
            Get your exact quote
          </Link>
          <p className="mt-4 text-[13px] leading-relaxed text-[var(--ink-400)]">
            Indicative only. Storage is billed by volume (L × W × H in cm ÷ 3,000), with lower rates as you grow; prep,
            pick &amp; pack and returns are priced in your itemised quote.
          </p>
        </div>
      </div>
    </div>
  );
}
