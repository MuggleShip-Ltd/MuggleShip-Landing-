"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "./i18n";

interface LanguageContextType {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  // On mount: check localStorage first, then fall back to browser language
  useEffect(() => {
    const saved = localStorage.getItem("muggleship-lang") as Locale | null;
    if (saved === "en" || saved === "tr") {
      setLocaleState(saved);
    } else {
      const browserLang = navigator.language || "";
      if (browserLang.startsWith("tr")) {
        setLocaleState("tr");
      }
    }
  }, []);

  // Save to localStorage when user changes language
  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("muggleship-lang", l);
  }, []);

  const t = translations[locale];

  return (
    <LanguageContext.Provider value={{ locale, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
