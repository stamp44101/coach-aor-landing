import Image from "next/image";

export function Hero() {
  return (
    <>
      {/* Hero — full-width section with floral lily bg + heavy white wash */}
      <section
        id="top"
        className="relative isolate overflow-hidden w-full pt-12 md:pt-20 pb-20 md:pb-28"
      >
        {/* Floral lily wash (sourced from published Canva) — full viewport width */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/img/hero-bg-lily.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        {/* Heavy cream wash — keep photo subtle, focus on text */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-cream/80"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream/40 via-cream/30 to-cream"
        />

        <div className="mx-auto max-w-7xl px-6 md:px-12">

        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display italic text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.02] text-cocoa">
            Step Into Your
            <br />
            Feminine Power
          </h1>
          <p className="mt-4 md:mt-5 text-[11px] md:text-xs tracking-[0.32em] uppercase text-cocoa-soft">
            With Coach Aor
          </p>
          <p className="mt-7 md:mt-9 text-sm md:text-base text-cocoa-soft max-w-xl mx-auto leading-relaxed">
            &ldquo;I believe that every woman can create the life she desires,
            once she truly knows herself and unlocks her power within.&rdquo;
          </p>
          <a
            href="#booking"
            className="inline-block mt-8 md:mt-10 px-10 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-mocha hover:bg-mocha/85 transition-colors rounded-full"
          >
            Book a session
          </a>
          <p className="mt-6 md:mt-7 text-[13px] text-cocoa-soft tracking-wide">
            Unleash your potential with professional coaching.
          </p>
        </div>
        </div>
      </section>

      {/* About — quote + portrait */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 md:px-12 pb-20 md:pb-28"
      >
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-[2px] aspect-[4/5]">
              <Image
                src="/img/about-portrait-v2.jpg"
                alt="Coach Aor — Panida Thongsui"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-4 lg:pl-10 flex flex-col">
            <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cocoa leading-[1.2]">
              &ldquo;All power comes from reconnecting with your true self.&rdquo;
            </p>
            <p className="mt-3 font-display italic text-sm md:text-base text-cocoa-soft">
              Panida Thongsui &mdash; Coach Aor,
            </p>
            <p className="font-display italic text-[13px] md:text-sm text-cocoa-soft/85">
              (Transformational Coach &amp; Founder of Coach Aor CA)
            </p>
            <div className="mt-6 space-y-4 text-cocoa-soft text-[14.5px] leading-relaxed max-w-xl">
              <p>
                After overcoming chronic health issues, stress, and burnout at
                just 19, I embarked on a journey of holistic healing. By
                mastering the art of self-healing without medication, I
                transformed my life and dedicated myself to professional
                coaching and counseling at an international standard. With over
                1,000 coaching hours, I believe that true transformation must
                happen across all levels of &ldquo;Body, Mind, Energy, and the
                Subconscious&rdquo;.
              </p>
              <p>
                My unique approach integrates diverse disciplines including
                Professional Coaching, Hypnotherapy, Trauma Healing, Yin-Yang
                Balance, and Spiritual Energy Work. I empower women to
                reconnect with their inner selves, break free from old
                limitations, and design a life aligned with their truest
                values. My philosophy is simple, when a woman deeply reconnects
                with herself&mdash;love, confidence, relationships, and success
                will naturally and sustainably follow.
              </p>
            </div>
            <a
              href="#booking"
              className="inline-block self-start mt-8 px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cocoa border border-cocoa/70 hover:bg-cocoa hover:text-cream transition-colors rounded-full"
            >
              Book a session
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
