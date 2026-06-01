import Image from "next/image";

export function Booking() {
  return (
    <section id="booking" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.05]">
            Booking &amp; Consultation
          </h2>
          <p className="mt-6 text-cocoa-soft text-[15px] leading-relaxed max-w-md">
            Send a message — Coach Aor or the team will reply within two
            business days. For faster contact, use LINE or WhatsApp on the
            right.
          </p>

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
                className="w-full bg-transparent border-b border-cocoa/30 focus:border-cocoa outline-none py-2 text-cocoa placeholder:text-cocoa-soft/50"
                placeholder="Your full name"
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
                className="w-full bg-transparent border-b border-cocoa/30 focus:border-cocoa outline-none py-2 text-cocoa placeholder:text-cocoa-soft/50"
                placeholder="you@example.com"
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
                className="w-full bg-transparent border-b border-cocoa/30 focus:border-cocoa outline-none py-2 text-cocoa placeholder:text-cocoa-soft/50 resize-none"
                placeholder="What's on your mind?"
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-block px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
            >
              Send
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2 flex flex-col items-center md:items-end gap-6">
          <div className="bg-cream-soft rounded-[2px] p-6 md:p-8 border border-cocoa/10 flex flex-col items-center max-w-sm w-full">
            <p className="text-[11px] tracking-[0.28em] uppercase text-cocoa-soft mb-4">
              LINE Official
            </p>
            <div className="relative w-44 h-44 md:w-52 md:h-52">
              <Image
                src="/img/line-qr.png"
                alt="Scan to add Coach Aor on LINE Official"
                fill
                sizes="(max-width: 768px) 176px, 208px"
                className="object-contain"
              />
            </div>
            <p className="mt-4 text-[13px] text-cocoa font-medium">
              @coachaorca
            </p>
            <div className="mt-5 pt-5 border-t border-cocoa/10 w-full flex items-center justify-center gap-6 text-[11px] tracking-[0.22em] uppercase text-cocoa-soft">
              <a
                href="https://line.me/R/ti/p/@coachaorca"
                className="hover:text-cocoa transition-colors"
              >
                LINE
              </a>
              <span className="text-cocoa/20">·</span>
              <a href="#" className="hover:text-cocoa transition-colors">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
