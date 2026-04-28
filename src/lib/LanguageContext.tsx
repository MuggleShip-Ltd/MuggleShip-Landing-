"use client";

import {
  createContext,
  useContext,
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

// English-only mode. The Turkish translation set is kept in i18n.ts
// for future re-enablement, but the public UI is locked to "en".
const FORCED_LOCALE: Locale = "en";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const setLocale = useCallback(() => {
    /* no-op: locale is locked while the language switcher is hidden */
  }, []);

  const t = translations[FORCED_LOCALE];

  return (
    <LanguageContext.Provider value={{ locale: FORCED_LOCALE, t, setLocale }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
