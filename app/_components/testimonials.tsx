import Image from "next/image";

type Item = {
  quote: string;
  name: string;
  role: string;
  img: string;
};

const items: Item[] = [
  {
    quote:
      "I'm so grateful we met. I used to be paralyzed by the fear of building a business and investing my effort. Today, I've found the courage to take action and turn my vision into reality. I now wake up every day excited to live my life to the fullest.",
    name: "Khun Sine",
    role: "Psychotherapist & Business Owner",
    img: "/img/testi-pear.jpg",
  },
  {
    quote:
      "I want to thank you, Coach Aor, and thank myself for choosing to shift my inner energy. I spent so long chasing success until my body and mind completely broke down. Now, I've found the courage to quit and start building a new life for myself.",
    name: "Khun Pear",
    role: "Investor",
    img: "/img/testi-bam.jpg",
  },
  {
    quote:
      "Thank you for being my mirror and providing the guidance that helped me see myself so clearly. I've moved past the need to find who's right or wrong, and my mindset has shifted tremendously. I feel so much more mature — even my friends have noticed the change. I only wish we had met sooner!",
    name: "Khun Bam",
    role: "Investor",
    img: "/img/testi-sine.jpg",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 md:mb-14">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.05]">
            Testimonials
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {items.map((t) => (
            <figure
              key={t.name}
              className="relative overflow-hidden rounded-[2px] aspect-[3/4]"
            >
              {/* Dimmed photo — uses brightness filter so text stands out by contrast */}
              <Image
                src={t.img}
                alt={t.name}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                style={{ filter: "brightness(0.55) saturate(0.85)" }}
                priority
              />
              {/* Subtle bottom-to-top dim to give caption breathing room */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/15 to-transparent"
              />
              <div
                className="absolute inset-0 p-6 md:p-8 text-white flex flex-col justify-end"
                style={{ textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}
              >
                <blockquote className="text-[13px] md:text-[13.5px] leading-relaxed text-white/95">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-display italic text-lg md:text-xl text-white">
                    {t.name},
                  </p>
                  <p className="font-display italic text-xs md:text-[13px] text-white/90">
                    {t.role}
                  </p>
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
