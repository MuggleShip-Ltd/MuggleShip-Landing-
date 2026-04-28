"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Locale } from "@/lib/i18n";

const languages: { code: Locale; label: string; flag: string }[] = [
  { code: "en", label: "EN", flag: "🇬🇧" },
  { code: "tr", label: "TR", flag: "🇹🇷" },
];

export default function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const current = languages.find((l) => l.code === locale)!;

  // Close on outside click
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 border border-gray-200 hover:border-orange-300 rounded-full transition-all ${
          compact ? "px-2.5 py-1.5 text-xs" : "px-3 py-2 text-sm"
        } font-medium text-gray-700 hover:text-orange-600 bg-white/80 backdrop-blur-sm`}
      >
        <span className={compact ? "text-sm" : "text-base"}>{current.flag}</span>
        <span>{current.label}</span>
        <ChevronDown
          size={compact ? 12 : 14}
          className={`text-gray-400 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-32 bg-white/95 backdrop-blur-xl rounded-xl border border-orange-100/60 shadow-xl shadow-orange-100/20 overflow-hidden z-50 animate-fade-in-up"
          style={{ animationDuration: "0.15s" }}
        >
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLocale(lang.code);
                setOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-3 text-sm transition-colors ${
                locale === lang.code
                  ? "bg-orange-50 text-orange-700 font-semibold"
                  : "text-gray-700 hover:bg-orange-50/50 hover:text-orange-600"
              }`}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="flex-1">{lang.label}</span>
              {locale === lang.code && (
                <span className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
