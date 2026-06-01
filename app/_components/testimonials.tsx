import Image from "next/image";

const items = [
  {
    quote:
      "I'm so grateful we met. I used to be paralyzed by the fear of building a business and investing my effort. Today, I've found the courage to take action and turn my vision into reality. I now wake up every day excited to live my life to the fullest.",
    name: "Khun Sine",
    role: "Psychotherapist & Business Owner",
    img: "/img/testi-sine.jpg",
  },
  {
    quote:
      "I want to thank you, Coach Aor, and thank myself for choosing to shift my inner energy. I spent so long chasing success until my body and mind completely broke down. Now, I've found the courage to quit and start building a new life for myself.",
    name: "Khun Pear",
    role: "Investor",
    img: "/img/testi-pear.jpg",
  },
  {
    quote:
      "Thank you for being my mirror and providing the guidance that helped me see myself so clearly. I've moved past the need to find who's right or wrong, and my mindset has shifted tremendously. I feel so much more mature — even my friends have noticed the change. I only wish we had met sooner!",
    name: "Khun Bam",
    role: "Investor",
    img: "/img/testi-bam.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream-soft py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cocoa">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {items.map((t) => (
            <figure
              key={t.name}
              className="bg-cream rounded-[2px] p-7 md:p-8 border border-cocoa/8 flex flex-col"
            >
              <span className="font-display italic text-5xl text-tan-deep leading-none block">
                &ldquo;
              </span>
              <blockquote className="mt-3 text-cocoa-soft text-[15px] leading-relaxed flex-1">
                {t.quote}
              </blockquote>
              <figcaption className="mt-7 flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <Image
                    src={t.img}
                    alt={t.name}
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
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
