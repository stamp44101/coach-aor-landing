"use client";

import Image from "next/image";
import { useLang, pick } from "./lang";

export function Booking() {
  const { lang } = useLang();
  return (
    <section
      id="booking"
      className="relative bg-cream py-20 md:py-28 overflow-hidden"
    >
      {/* Full-width seamless portrait bg — face on the right, cream wash on the left for form legibility */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        <Image
          src="/img/booking-portrait.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "right center" }}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 via-40% to-transparent" />
        {/* Soft bottom + top cream wash so the section blends into siblings seamlessly */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-cream to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-cream to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2
            className={`${lang === "th" ? "font-display-th font-medium" : "font-display italic"} text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.1]`}
          >
            {pick(lang, "Booking & Consultation", "การจองคิวปรึกษา")}
          </h2>

          <form
            className="mt-10 space-y-5"
            action="#"
            method="post"
            aria-label="Booking request"
          >
            <label className="block">
              <span className="text-[11px] tracking-[0.22em] uppercase text-cocoa-soft block mb-2">
                {pick(lang, "Name", "ชื่อ")}
              </span>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-cream-soft border border-cocoa/15 focus:border-cocoa outline-none px-4 py-3 text-cocoa rounded-[3px] placeholder:text-cocoa-soft/40"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.22em] uppercase text-cocoa-soft block mb-2">
                {pick(lang, "Email", "อีเมล")}
              </span>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-cream-soft border border-cocoa/15 focus:border-cocoa outline-none px-4 py-3 text-cocoa rounded-[3px] placeholder:text-cocoa-soft/40"
                placeholder=""
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.22em] uppercase text-cocoa-soft block mb-2">
                {pick(lang, "Message", "ข้อความ")}
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-cream-soft border border-cocoa/15 focus:border-cocoa outline-none px-4 py-3 text-cocoa rounded-[3px] placeholder:text-cocoa-soft/40 resize-none"
                placeholder=""
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-full px-9 py-3.5 text-[12px] tracking-[0.24em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
            >
              {pick(lang, "Send", "ส่ง")}
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-end text-right">
          <p className="text-cocoa text-lg md:text-xl lg:text-2xl leading-snug">
            {pick(
              lang,
              <>
                Ready to start your transformation
                <br />
                with Coach Aor?
              </>,
              <>สนใจนัดหมายจองคิวเซสชั่นกับโค้ชอ้อ</>,
            )}
          </p>
          <div className="mt-5 flex gap-3 md:gap-4">
            <div className="text-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 bg-cream rounded-[2px] overflow-hidden shadow-sm">
                <Image
                  src="/img/whatsapp-qr.jpg"
                  alt="Scan to message Coach Aor on WhatsApp"
                  fill
                  sizes="112px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <p className="mt-2 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-cocoa-soft">
                WhatsApp
              </p>
            </div>
            <div className="text-center">
              <div className="relative w-24 h-24 md:w-28 md:h-28 bg-cream rounded-[2px] overflow-hidden shadow-sm">
                <Image
                  src="/img/line-qr.png"
                  alt="Scan to add Coach Aor on LINE Official"
                  fill
                  sizes="112px"
                  className="object-contain p-1"
                  priority
                />
              </div>
              <p className="mt-2 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-cocoa-soft">
                LINE Official
              </p>
            </div>
          </div>
          <p className="mt-5 text-cocoa text-base md:text-lg font-display italic">
            <a
              href="https://lin.ee/ZVRHOhSu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Line Official : @coachaor.ca
            </a>
          </p>
          <a
            href="mailto:soulfulwomens@gmail.com"
            className="mt-1 text-cocoa-soft text-xs md:text-sm tracking-wide hover:text-cocoa transition-colors"
          >
            soulfulwomens@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
