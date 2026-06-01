import { Placeholder } from "./placeholder";

const items = [
  {
    quote:
      "I came in carrying ten years of resentment I couldn&rsquo;t name. Twelve sessions in, I called my mother for the first time in two years. It wasn&rsquo;t therapy — it was reorientation.",
    name: "Mira K.",
    role: "Operations Lead, 38",
    portrait: "TESTI_MIRA.jpg",
  },
  {
    quote:
      "The retreat broke open something I&rsquo;d been guarding since my twenties. I left lighter — not because Adi fixed anything, but because she didn&rsquo;t try to.",
    name: "Suthida P.",
    role: "Architect, 42",
    portrait: "TESTI_SUTHIDA.jpg",
  },
  {
    quote:
      "Inner Compass is the only course I&rsquo;ve actually finished. The somatic prompts changed how I run meetings — and how I leave the ones that drain me.",
    name: "Aleia R.",
    role: "Founder, 35",
    portrait: "TESTI_ALEIA.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <p className="text-[11px] tracking-[0.28em] uppercase text-mocha mb-4">
            Words from the women I&rsquo;ve walked with
          </p>
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cocoa">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((t) => (
            <figure
              key={t.name}
              className="bg-cream rounded-[2px] p-7 md:p-8 border border-cocoa/8"
            >
              <span className="font-display italic text-5xl text-tan-deep leading-none block">
                &ldquo;
              </span>
              <blockquote
                className="mt-3 text-cocoa-soft text-[15px] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: t.quote }}
              />
              <figcaption className="mt-7 flex items-center gap-4">
                <Placeholder
                  ratio="1/1"
                  variant="warm"
                  className="!w-12 !h-12 !rounded-full"
                />
                <div>
                  <p className="font-medium text-cocoa text-sm">{t.name}</p>
                  <p className="text-xs text-mocha tracking-wide">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
