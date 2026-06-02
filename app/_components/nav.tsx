"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useLang, pick } from "./lang";

export function Nav() {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: pick(lang, "About Me", "ประวัติ") },
    { href: "#services", label: pick(lang, "Service", "บริการ") },
    {
      href: "#testimonials",
      label: pick(lang, "Testimonials", "เสียงจากผู้เคยรับการโค้ช"),
    },
    { href: "#booking", label: pick(lang, "Contact", "ติดต่อ") },
  ];

  // Lock body scroll while menu open
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur-md bg-cream/85 border-b border-cocoa/8">
        <nav className="mx-auto max-w-7xl flex items-center justify-between px-5 md:px-12 h-16 md:h-20">
          <a href="#top" className="flex items-center gap-3 text-cocoa">
            <Image
              src="/img/logo-ca.png"
              alt="Coach Aor CA"
              width={64}
              height={64}
              className="h-9 md:h-12 w-auto"
              priority
            />
          </a>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-9 text-[13px] tracking-wide text-cocoa-soft">
            {links.map((l) => (
              <li key={l.href}>
                <a className="hover:text-cocoa transition-colors" href={l.href}>
                  {l.label}
                </a>
              </li>
            ))}
            <li className="flex items-center gap-1 text-[11px] tracking-[0.18em] pl-3 border-l border-cocoa/15">
              <button
                type="button"
                onClick={() => setLang("th")}
                className={`px-2 cursor-pointer transition-colors ${lang === "th" ? "text-cocoa font-medium" : "text-cocoa-soft hover:text-cocoa"}`}
              >
                TH
              </button>
              <span className="text-cocoa/30">/</span>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`px-2 cursor-pointer transition-colors ${lang === "en" ? "text-cocoa font-medium" : "text-cocoa-soft hover:text-cocoa"}`}
              >
                EN
              </button>
            </li>
          </ul>

          {/* Desktop CTA */}
          <a
            href="#booking"
            className="hidden md:inline-block text-[13px] md:text-sm uppercase tracking-[0.2em] text-cocoa border border-cocoa/70 hover:bg-cocoa hover:text-cream transition-colors px-5 md:px-7 py-2.5 md:py-3 rounded-full"
          >
            {pick(lang, "Book a session", "จองเซสชั่น")}
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            aria-label={pick(lang, "Open menu", "เปิดเมนู")}
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex flex-col gap-[5px] p-2 -mr-2 cursor-pointer"
          >
            <span className="block w-6 h-[2px] bg-cocoa" />
            <span className="block w-6 h-[2px] bg-cocoa" />
            <span className="block w-6 h-[2px] bg-cocoa" />
          </button>
        </nav>
      </header>

      {/* Mobile slide-in drawer (from right) */}
      <div
        aria-hidden={!open}
        className={`md:hidden fixed inset-0 z-[60] transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <button
          type="button"
          aria-label={pick(lang, "Close menu", "ปิดเมนู")}
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-cocoa/40 backdrop-blur-sm cursor-pointer"
        />
        {/* Panel */}
        <aside
          className={`absolute top-0 right-0 h-full w-[82%] max-w-sm bg-cream shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-center justify-between px-6 h-16 border-b border-cocoa/10">
            <Image
              src="/img/logo-ca.png"
              alt="Coach Aor CA"
              width={48}
              height={48}
              className="h-9 w-auto"
            />
            <button
              type="button"
              aria-label={pick(lang, "Close menu", "ปิดเมนู")}
              onClick={() => setOpen(false)}
              className="p-2 -mr-2 text-cocoa text-2xl leading-none cursor-pointer"
            >
              ×
            </button>
          </div>

          <ul className="flex flex-col px-6 pt-6 gap-1 text-cocoa">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base tracking-wide border-b border-cocoa/10 hover:text-cocoa-soft transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Language toggle — sits right under the menu list so it's grouped with the nav items */}
          <div className="px-6 pt-5 flex items-center gap-1 text-[12px] tracking-[0.18em]">
            <button
              type="button"
              onClick={() => setLang("th")}
              className={`px-3 py-1 rounded-full border cursor-pointer transition-colors ${
                lang === "th"
                  ? "bg-cocoa text-cream border-cocoa"
                  : "text-cocoa border-cocoa/40"
              }`}
            >
              TH
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={`px-3 py-1 rounded-full border cursor-pointer transition-colors ${
                lang === "en"
                  ? "bg-cocoa text-cream border-cocoa"
                  : "text-cocoa border-cocoa/40"
              }`}
            >
              EN
            </button>
          </div>

          <div className="mt-auto px-6 pb-7">
            <a
              href="#booking"
              onClick={() => setOpen(false)}
              className="block text-center text-sm tracking-[0.22em] uppercase text-cream bg-mocha hover:bg-mocha/85 transition-colors px-6 py-3.5 rounded-full"
            >
              {pick(lang, "Book a session", "จองเซสชั่น")}
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
