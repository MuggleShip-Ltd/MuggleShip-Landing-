"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";
import {
  PackageOpen,
  Warehouse,
  ClipboardCheck,
  Truck,
  PackageCheck,
} from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";

const steps = [
  {
    Icon: PackageOpen,
    color: "#ea580c",
    bg: "#fff7ed",
    en: { label: "Received", desc: "Products checked in" },
    tr: { label: "Teslim Alindi", desc: "Urunler teslim alindi" },
  },
  {
    Icon: Warehouse,
    color: "#d97706",
    bg: "#fffbeb",
    en: { label: "Stored", desc: "Securely warehoused" },
    tr: { label: "Depolandi", desc: "Guvenle depolandi" },
  },
  {
    Icon: ClipboardCheck,
    color: "#dc2626",
    bg: "#fef2f2",
    en: { label: "Prepped", desc: "Labeled & inspected" },
    tr: { label: "Hazirlandi", desc: "Etiketlendi ve kontrol edildi" },
  },
  {
    Icon: Truck,
    color: "#c2410c",
    bg: "#fff7ed",
    en: { label: "Shipped", desc: "On its way" },
    tr: { label: "Gonderildi", desc: "Yola cikti" },
  },
  {
    Icon: PackageCheck,
    color: "#16a34a",
    bg: "#f0fdf4",
    en: { label: "Delivered", desc: "Arrived on time" },
    tr: { label: "Teslim Edildi", desc: "Zamaninda ulasti" },
  },
];

/* ── GSAP Step Animation ─────────────────────────────────── */

function StepAnimation({ stepIdx }: { stepIdx: number }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const step = steps[stepIdx];

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const icon = el.querySelector(".step-icon");
      const ring1 = el.querySelector(".ring-1");
      const ring2 = el.querySelector(".ring-2");
      const particles = el.querySelectorAll(".particle");
      const label = el.querySelector(".step-label");

      // Reset
      gsap.set([icon, ring1, ring2, label, ...Array.from(particles)], {
        opacity: 0,
        scale: 0,
      });

      const tl = gsap.timeline();

      // Rings expand outward
      tl.to(ring1, {
        opacity: 0.15,
        scale: 1,
        duration: 0.6,
        ease: "back.out(1.7)",
      }, 0);

      tl.to(ring2, {
        opacity: 0.08,
        scale: 1,
        duration: 0.8,
        ease: "back.out(1.4)",
      }, 0.1);

      // Icon bounces in
      tl.to(icon, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(2.5)",
      }, 0.15);

      // Particles burst out
      particles.forEach((p, i) => {
        const angle = (i / particles.length) * Math.PI * 2;
        const dist = 55 + Math.random() * 20;
        tl.to(p, {
          opacity: 0.6,
          scale: 1,
          x: Math.cos(angle) * dist,
          y: Math.sin(angle) * dist,
          duration: 0.6,
          ease: "power2.out",
        }, 0.3 + i * 0.05);

        tl.to(p, {
          opacity: 0,
          scale: 0,
          duration: 0.8,
          ease: "power1.in",
        }, 1 + i * 0.05);
      });

      // Label fades in
      tl.to(label, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out",
      }, 0.5);

    }, el);

    return () => ctx.revert();
  }, [stepIdx]);

  return (
    <div
      ref={containerRef}
      className="relative w-36 h-36 rounded-full flex items-center justify-center"
    >
      {/* Subtle rings — very faint */}
      <div
        className="ring-1 absolute w-28 h-28 rounded-full"
        style={{ border: `1px solid ${step.color}15` }}
      />
      <div
        className="ring-2 absolute w-36 h-36 rounded-full"
        style={{ border: `1px solid ${step.color}08` }}
      />

      {/* Particles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute w-2 h-2 rounded-full"
          style={{ backgroundColor: step.color }}
        />
      ))}

      {/* Icon — no background box */}
      <div className="step-icon flex items-center justify-center">
        <step.Icon size={48} strokeWidth={1.3} style={{ color: step.color, filter: `drop-shadow(0 4px 12px ${step.color}30)` }} />
      </div>

      {/* Label below */}
      <div
        className="step-label absolute -bottom-2 text-sm font-bold"
        style={{ color: step.color, transform: "translateY(8px)" }}
      >
        {/* Label rendered by parent */}
      </div>
    </div>
  );
}

/* ── Main ────────────────────────────────────────────────── */

export default function FulfillmentAnimation() {
  const { locale } = useLanguage();
  const [phase, setPhase] = useState(0);
  const [firstCycleDone, setFirstCycleDone] = useState(false);
  const notifAudio = useRef<HTMLAudioElement | null>(null);

  // Play notification sound when a new card appears
  useEffect(() => {
    if (phase >= 1 && phase <= steps.length) {
      if (!notifAudio.current) {
        notifAudio.current = new Audio("/notification.wav");
        notifAudio.current.volume = 0.3;
      }
      notifAudio.current.currentTime = 0;
      notifAudio.current.play().catch(() => {});
    }
  }, [phase]);

  useEffect(() => {
    if (phase <= steps.length) {
      const delay = phase === 0 ? 1200 : 4400;
      const t = setTimeout(() => {
        setPhase((p) => p + 1);
      }, delay);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setFirstCycleDone(true);
      setPhase(0);
    }, 6000);
    return () => clearTimeout(t);
  }, [phase, firstCycleDone]);

  const allDone = phase > steps.length;
  const activeIdx = allDone ? steps.length - 1 : Math.max(0, phase - 1);
  const activeStep = steps[activeIdx];
  const activeData = locale === "tr" ? activeStep.tr : activeStep.en;

  return (
    <div className="flex gap-6 min-h-[320px]">
      {/* Left — Twin circles: MuggleShip logo + GSAP step animation */}
      <div className="flex flex-col items-center justify-center flex-shrink-0">
        <div className="flex items-center -space-x-6">
          {/* MuggleShip logo circle — floating */}
          <motion.div
            className="relative w-36 h-36 rounded-full flex items-center justify-center z-10"
            style={{
              background: "radial-gradient(circle, rgba(255,247,237,0.6) 0%, rgba(255,255,255,0.25) 70%)",
              boxShadow: "0 8px 32px rgba(234,88,12,0.08)",
              border: "1.5px solid rgba(234,88,12,0.12)",
              backdropFilter: "blur(8px)",
            }}
            animate={{
              y: [0, -8, 0, 4, 0],
              x: [0, 3, 0, -2, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/favicon.png"
              alt="MuggleShip"
              width={64}
              height={64}
              className="w-16 h-16 drop-shadow-md"
            />
          </motion.div>

          {/* Step animation circle — floating opposite */}
          <motion.div
            className="relative z-20"
            animate={{
              y: [0, 6, 0, -5, 0],
              x: [0, -4, 0, 3, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIdx}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <StepAnimation stepIdx={activeIdx} />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Step label */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIdx}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="text-sm font-bold mt-2"
            style={{ color: activeStep.color }}
          >
            {activeData.label}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Right — Notifications + Summary */}
      <div className="flex-1 min-w-[220px]">
        {/* Notification cards */}
        <div className="relative" style={{ height: 260 }}>
          {steps.map((step, idx) => {
            const isVisible = idx < phase;
            if (!isVisible) return null;

            const data = locale === "tr" ? step.tr : step.en;
            const isLatest = idx === phase - 1 && !allDone;

            if (allDone) {
              const fromFront = steps.length - 1 - idx;
              const isFront = idx === steps.length - 1;
              // Delivered lands at Prepped's position (idx 2 * 46 = 92)
              // Others compress above it with small gaps
              const deliveredTop = 120;
              const stackTop = isFront
                ? deliveredTop
                : deliveredTop - fromFront * 14;
              const stackScale = isFront ? 1 : 1 - fromFront * 0.025;
              const stackOpacity = isFront ? 1 : Math.max(0.2, 0.6 - fromFront * 0.12);

              return (
                <motion.div
                  key={idx}
                  className="absolute left-0 right-0 flex items-center gap-3 px-3.5 py-3 rounded-xl border backdrop-blur-md"
                  style={{
                    backgroundColor: isFront ? `${step.bg}ee` : "#f9fafbdd",
                    borderColor: isFront ? `${step.color}25` : "#e5e7eb25",
                    boxShadow: isFront ? `0 4px 16px ${step.color}10` : "none",
                    zIndex: idx,
                  }}
                  animate={{ top: stackTop, scale: stackScale, opacity: stackOpacity }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${step.color}12` }}
                  >
                    <step.Icon size={16} strokeWidth={1.8} style={{ color: step.color }} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-[11px] font-bold truncate" style={{ color: step.color }}>{data.label}</div>
                    <div className="text-[10px] text-gray-500 truncate">{data.desc}</div>
                  </div>
                </motion.div>
              );
            }

            const stackPos = phase - 1 - idx;

            return (
              <motion.div
                key={idx}
                className="absolute left-0 right-0 flex items-center gap-3 px-3.5 py-3 rounded-xl border backdrop-blur-md"
                style={{
                  backgroundColor: isLatest ? `${step.bg}ee` : "#f9fafbdd",
                  borderColor: isLatest ? `${step.color}25` : "#e5e7eb25",
                  boxShadow: isLatest ? `0 4px 16px ${step.color}10` : "none",
                  zIndex: idx,
                }}
                initial={{ opacity: 0, x: 50, scale: 0.92 }}
                animate={{
                  opacity: isLatest ? 1 : Math.max(0.3, 0.8 - stackPos * 0.18),
                  x: 0,
                  scale: isLatest ? 1 : 1 - stackPos * 0.02,
                  top: idx * 46,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 25,
                  opacity: { duration: 0.4 },
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: `${step.color}12` }}
                >
                  <step.Icon size={16} strokeWidth={1.8} style={{ color: step.color }} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[11px] font-bold truncate" style={{ color: step.color }}>{data.label}</div>
                  <div className="text-[10px] text-gray-500 truncate">{data.desc}</div>
                </div>
                {isLatest && (
                  <motion.div
                    className="text-[9px] text-gray-400 flex-shrink-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {locale === "tr" ? "simdi" : "now"}
                  </motion.div>
                )}
              </motion.div>
            );
          })}

          {/* Summary */}
          <AnimatePresence>
            {allDone && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="absolute left-0 right-0 flex items-center gap-2.5 px-1"
                style={{ top: 185 }}
              >
                <motion.div
                  className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  transition={{ delay: 0.7, duration: 0.5, ease: "backOut" }}
                >
                  <motion.svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <motion.path
                      d="M3 8.5L6.5 12L13 4"
                      stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 1, duration: 0.4 }}
                    />
                  </motion.svg>
                </motion.div>
                <motion.p
                  className="text-xs font-semibold text-gray-700"
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.1, duration: 0.3 }}
                >
                  {locale === "tr"
                    ? "Tum surec hizli ve kolayca tamamlandi!"
                    : "Entire process completed fast and easily!"}
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
