export function CtaStrip() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
        <p className="text-[11px] tracking-[0.28em] uppercase text-mocha mb-5">
          Not sure where to start?
        </p>
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.1]">
          Ready to start your transformation
          <br className="hidden md:block" /> with Coach Adi?
        </h2>
        <p className="mt-7 md:mt-9 max-w-xl mx-auto text-cocoa-soft text-[15px] leading-relaxed">
          Book a complimentary 30-minute discovery call. We&rsquo;ll talk about
          what&rsquo;s real for you and whether any of this is a fit. Nothing
          else.
        </p>
        <a
          href="#booking"
          className="inline-flex items-center gap-3 mt-9 md:mt-11 px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
        >
          Book your call
          <span aria-hidden className="text-base leading-none">→</span>
        </a>
      </div>
    </section>
  );
}
