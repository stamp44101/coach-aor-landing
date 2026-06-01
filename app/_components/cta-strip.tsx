export function CtaStrip() {
  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6 md:px-12 text-center">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.1]">
          Ready to start your transformation
          <br className="hidden md:block" /> with Coach Aor?
        </h2>
        <a
          href="#booking"
          className="inline-flex items-center gap-3 mt-9 md:mt-11 px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-cocoa hover:bg-cocoa-soft transition-colors rounded-full"
        >
          Book a session
          <span aria-hidden className="text-base leading-none">→</span>
        </a>
      </div>
    </section>
  );
}
