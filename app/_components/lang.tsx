"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "en" | "th";

const LangCtx = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
}>({ lang: "en", setLang: () => {} });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  // Restore choice from localStorage on mount (default EN)
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("coach-aor-lang");
      if (saved === "th" || saved === "en") setLangState(saved);
    } catch {
      /* localStorage unavailable */
    }
  }, []);

  // Reflect lang on <html lang> for accessibility / fonts
  useEffect(() => {
    document.documentElement.setAttribute("lang", lang);
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem("coach-aor-lang", l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LangCtx.Provider value={{ lang, setLang }}>{children}</LangCtx.Provider>
  );
}

export function useLang() {
  return useContext(LangCtx);
}

/** Helper: pick the appropriate string based on current lang. */
export function pick<T>(lang: Lang, en: T, th: T): T {
  return lang === "th" ? th : en;
}
