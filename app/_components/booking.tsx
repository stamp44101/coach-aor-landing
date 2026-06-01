import Image from "next/image";

export function Booking() {
  return (
    <section id="booking" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.05]">
            Booking &amp; Consultation
          </h2>

          <form
            className="mt-10 space-y-5"
            action="#"
            method="post"
            aria-label="Booking request"
          >
            <label className="block">
              <span className="text-[11px] tracking-[0.22em] uppercase text-cocoa-soft block mb-2">
                Name
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
                Email
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
                Message
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
              className="mt-2 w-full md:w-auto md:min-w-[280px] px-9 py-3.5 text-[12px] tracking-[0.24em] uppercase text-cocoa border border-cocoa/70 hover:bg-cocoa hover:text-cream transition-colors rounded-full"
            >
              Send
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative aspect-[4/5] md:aspect-[4/5] overflow-hidden rounded-[2px]">
            <Image
              src="/img/booking-portrait.jpg"
              alt="Coach Aor"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover"
              style={{ objectPosition: "left center" }}
              priority
            />
            {/* Soft white wash on right side only */}
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-l from-cream via-cream/70 via-30% to-transparent"
            />

            <div className="absolute inset-y-0 right-0 w-[62%] flex flex-col items-end justify-center px-5 md:px-7 text-right">
              <p className="text-cocoa text-lg md:text-xl lg:text-2xl leading-snug">
                Ready to start your transformation
                <br />
                with Coach Aor?
              </p>
              <div className="mt-5 flex gap-3 md:gap-4">
                <div className="text-center">
                  <div className="relative w-24 h-24 md:w-28 md:h-28 bg-cream rounded-[2px] overflow-hidden">
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
                  <div className="relative w-24 h-24 md:w-28 md:h-28 bg-cream rounded-[2px] overflow-hidden">
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
        </div>
      </div>
    </section>
  );
}
