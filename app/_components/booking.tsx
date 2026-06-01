import { Placeholder } from "./placeholder";

export function Booking() {
  return (
    <section id="booking" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
        <div className="order-2 md:order-1">
          <p className="text-[11px] tracking-[0.28em] uppercase text-mocha mb-4">
            Let&rsquo;s talk
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.05]">
            Booking &amp; Consultation
          </h2>
          <p className="mt-6 text-cocoa-soft text-[15px] leading-relaxed max-w-md">
            Fill in a few lines about where you are. I read every note myself
            and reply within two business days.
          </p>

          <form
            className="mt-10 space-y-5"
            action="#"
            method="post"
            aria-label="Booking request"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="text-[11px] tracking-[0.22em] uppercase text-mocha block mb-2">
                  Your name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-cocoa/30 focus:border-cocoa outline-none py-2 text-cocoa placeholder:text-mocha/50"
                  placeholder="First &amp; last"
                />
              </label>
              <label className="block">
                <span className="text-[11px] tracking-[0.22em] uppercase text-mocha block mb-2">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-cocoa/30 focus:border-cocoa outline-none py-2 text-cocoa placeholder:text-mocha/50"
                  placeholder="you@example.com"
                />
              </label>
            </div>
            <label className="block">
              <span className="text-[11px] tracking-[0.22em] uppercase text-mocha block mb-2">
                Phone (optional)
              </span>
              <input
                type="tel"
                name="phone"
                className="w-full bg-transparent border-b border-cocoa/30 focus:border-cocoa outline-none py-2 text-cocoa placeholder:text-mocha/50"
                placeholder="+66 …"
              />
            </label>
            <label className="block">
              <span className="text-[11px] tracking-[0.22em] uppercase text-mocha block mb-2">
                What&rsquo;s on your mind?
              </span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full bg-transparent border-b border-cocoa/30 focus:border-cocoa outline-none py-2 text-cocoa placeholder:text-mocha/50 resize-none"
                placeholder="The honest version, please."
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-block px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
            >
              Send request
            </button>
          </form>
        </div>

        <div className="order-1 md:order-2">
          <Placeholder
            ratio="5/7"
            variant="warm"
            label="BOOKING_ROOM.jpg"
            className="md:max-w-md md:ml-auto"
          />
        </div>
      </div>
    </section>
  );
}
