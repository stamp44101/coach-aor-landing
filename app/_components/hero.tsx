import { Placeholder } from "./placeholder";

export function Hero() {
  return (
    <section id="top" className="mx-auto max-w-7xl px-6 md:px-12 pt-12 md:pt-20 pb-20 md:pb-28">
      <div className="text-center max-w-3xl mx-auto">
        <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-mocha mb-5 md:mb-8">
          Welcome to a softer way of becoming
        </p>
        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.05] text-cocoa">
          <span className="italic">Step Into Your</span>
          <br />
          <span className="italic">Feminine Power</span>
        </h1>
        <p className="mt-5 md:mt-7 text-[11px] md:text-xs tracking-[0.32em] uppercase text-mocha">
          With Coach Adi
        </p>
        <p className="mt-7 md:mt-9 text-base md:text-lg text-cocoa-soft max-w-xl mx-auto leading-relaxed">
          A space to slow down, reconnect with your inner voice, and rebuild a
          life that feels honest, grounded, and true.
        </p>
        <a
          href="#booking"
          className="inline-block mt-9 md:mt-11 px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
        >
          Start Your Journey
        </a>
      </div>

      <div
        id="about"
        className="mt-20 md:mt-32 grid md:grid-cols-12 gap-8 md:gap-12 items-center"
      >
        <div className="md:col-span-5">
          <Placeholder
            ratio="5/7"
            variant="soft"
            label="HERO_PORTRAIT.jpg"
            className="md:max-w-sm"
          />
        </div>
        <div className="md:col-span-7 md:pl-4 lg:pl-12">
          <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cocoa leading-[1.25]">
            &ldquo;All power comes from reconnecting with your true self.&rdquo;
          </p>
          <p className="mt-5 text-xs tracking-[0.28em] uppercase text-mocha">
            — Adi, Founder &amp; Coach
          </p>
          <div className="mt-8 space-y-4 text-cocoa-soft text-[15px] leading-relaxed max-w-xl">
            <p>
              After a decade walking women through grief, burnout, and identity
              shifts, I built this practice on one belief: real transformation
              isn&rsquo;t loud. It&rsquo;s a return — to your body, your
              boundaries, and the truth you already carry.
            </p>
            <p>
              Whether you join a 1:1 container, a retreat, or a self-paced
              course, you&rsquo;ll find the same thing here: space to be honest,
              tools that actually work, and a witness who won&rsquo;t look away.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
