"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

type Variant = "up" | "fade" | "scale" | "blur";

type Props = {
  children: ReactNode;
  delay?: number;
  variant?: Variant;
  className?: string;
  threshold?: number;
  once?: boolean;
};

const variantClass: Record<Variant, string> = {
  up: "rv-up",
  fade: "rv-fade",
  scale: "rv-scale",
  blur: "rv-blur",
};

export default function Reveal({
  children,
  delay = 0,
  variant = "up",
  className = "",
  threshold = 0.15,
  once = true,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      // No observer support: reveal on the next frame instead.
      const id = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(id);
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -80px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, once]);

  return (
    <div
      ref={ref}
      className={`${variantClass[variant]} ${visible ? "rv-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
