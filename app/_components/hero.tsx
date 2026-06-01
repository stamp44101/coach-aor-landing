import Image from "next/image";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-28">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.02] text-cocoa">
          <span className="italic">Step Into Your</span>
          <br />
          <span className="italic">Feminine Power</span>
        </h1>
        <p className="mt-5 md:mt-7 text-[11px] md:text-xs tracking-[0.32em] uppercase text-cocoa-soft">
          With Coach Aor
        </p>
        <p className="mt-7 md:mt-9 font-display italic text-xl md:text-2xl lg:text-3xl text-cocoa/85 max-w-2xl mx-auto leading-snug">
          &ldquo;I believe that every woman can create the life she desires,
          once she truly knows herself and unlocks her power within.&rdquo;
        </p>
        <p className="mt-6 md:mt-8 text-sm md:text-base text-cocoa-soft tracking-wide">
          Unleash your potential with professional coaching.
        </p>
        <a
          href="#booking"
          className="inline-block mt-9 md:mt-11 px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
        >
          Book a session
        </a>
      </div>

      <div
        id="about"
        className="mt-20 md:mt-32 grid md:grid-cols-12 gap-8 md:gap-12 items-start"
      >
        <div className="md:col-span-5">
          <div className="relative overflow-hidden rounded-[2px] md:max-w-sm aspect-[5/7]">
            <Image
              src="/img/hero-portrait.jpg"
              alt="Coach Aor — Panida Thongsui"
              fill
              sizes="(max-width: 768px) 100vw, 400px"
              className="object-cover"
              priority
            />
          </div>
        </div>
        <div className="md:col-span-7 md:pl-4 lg:pl-12">
          <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cocoa leading-[1.25]">
            &ldquo;All power comes from reconnecting with your true self.&rdquo;
          </p>
          <div className="mt-7 space-y-4 text-cocoa-soft text-[15px] leading-relaxed max-w-xl">
            <p>
              After overcoming chronic health issues, stress, and burnout at
              just 19, I embarked on a journey of holistic healing. By mastering
              the art of self-healing without medication, I transformed my life
              and dedicated myself to professional coaching and counseling at an
              international standard.
            </p>
            <p>
              With over 1,000 coaching hours, I believe that true transformation
              must happen across all levels of &ldquo;Body, Mind, Energy, and
              the Subconscious&rdquo;.
            </p>
            <p>
              My unique approach integrates Professional Coaching, Hypnotherapy,
              Trauma Healing, Yin-Yang Balance, and Spiritual Energy Work. I
              empower women to reconnect with their inner selves, break free
              from old limitations, and design a life aligned with their truest
              values.
            </p>
          </div>
          <p className="mt-7 text-xs tracking-[0.28em] uppercase text-cocoa font-medium">
            Panida Thongsui · Coach Aor
          </p>
          <p className="mt-1 text-[11px] tracking-[0.18em] uppercase text-cocoa-soft">
            Transformational Coach &amp; Founder of Coach Aor CA
          </p>
          <a
            href="#booking"
            className="inline-block mt-8 px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
          >
            Book session
          </a>
        </div>
      </div>
    </section>
  );
}
