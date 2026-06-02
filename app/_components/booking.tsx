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
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-stretch md:items-end">
        {/* LEFT — form */}
        <div className="order-2 md:order-1">
          <h2
            className={`${lang === "th" ? "font-display-th font-medium" : "font-display italic"} text-balance text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.1]`}
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
              className="mt-2 w-full px-9 py-4 text-sm md:text-[15px] tracking-[0.24em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft cursor-pointer transition-colors rounded-full"
            >
              {pick(lang, "Send", "ส่ง")}
            </button>
          </form>
        </div>

        {/* RIGHT — photo fills the entire right column, text+QR sits in the whitespace NEXT TO her (left half).
            Subtle white overlay brightens the photo so the cocoa text reads cleanly. */}
        <div className="order-1 md:order-2 relative aspect-[3/4] md:aspect-[4/5] overflow-hidden rounded-[2px]">
          <Image
            src="/img/booking-portrait.jpg"
            alt="Coach Aor"
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            className="object-cover"
            style={{ objectPosition: "20% center" }}
            priority
          />
          {/* Brighten everything subtly so text contrast improves */}
          <div aria-hidden className="absolute inset-0 bg-white/25" />
          {/* Stronger cream wash on the RIGHT half — the "white space" where the text group sits, flush against the right edge */}
          <div
            aria-hidden
            className="absolute inset-y-0 right-0 w-[60%] md:w-[55%] bg-gradient-to-l from-cream via-cream/85 to-transparent"
          />

          {/* Text + QR + LINE id — flush to the RIGHT edge of the photo (per Canva original) */}
          <div className="absolute inset-y-0 right-0 w-[60%] md:w-[50%] flex flex-col items-center justify-end text-center gap-5 md:gap-6 p-4 md:p-7">
            <p className="text-cocoa text-base md:text-lg lg:text-xl leading-snug text-balance">
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

            <div
              className="flex gap-3 md:gap-4"
              style={{ mixBlendMode: "multiply" }}
            >
              <div className="text-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src="/img/whatsapp-qr.jpg"
                    alt="Scan to message Coach Aor on WhatsApp"
                    fill
                    sizes="96px"
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="mt-1.5 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-cocoa">
                  WhatsApp
                </p>
              </div>
              <div className="text-center">
                <div className="relative w-20 h-20 md:w-24 md:h-24">
                  <Image
                    src="/img/line-qr.png"
                    alt="Scan to add Coach Aor on LINE Official"
                    fill
                    sizes="96px"
                    className="object-contain"
                    priority
                  />
                </div>
                <p className="mt-1.5 text-[10px] md:text-[11px] tracking-[0.18em] uppercase text-cocoa">
                  LINE Official
                </p>
              </div>
            </div>

            <p className="text-cocoa text-sm md:text-base font-display italic">
              <a
                href="https://lin.ee/ZVRHOhSu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Line Official : @coachaorca
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
