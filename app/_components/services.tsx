import Image from "next/image";

type Bullet = { en: string; th?: string };
type Service = {
  title: string;
  description: string;
  meta: string;
  img: string;
  span?: string;
  feature?: boolean;
  topics?: string[];
  bullets?: Bullet[];
};

const topics = [
  "Love & Relationships",
  "Self-Worth & Confidence",
  "Inner Child & Trauma Healing",
  "Feminine Energy",
  "Wealth & Success",
  "Toxic Relationships",
  "Life Purpose & Values",
];

const services: Service[] = [
  {
    title: "Coaching + Hypnotherapy",
    description:
      "A powerful blend of professional coaching and hypnotherapy to rewire the subconscious mind and release deep-seated blocks.",
    meta: "Online Session · 60–90 minutes per session",
    topics,
    img: "/img/service-coaching-hypno.jpg",
    span: "lg:col-span-12",
    feature: true,
  } as Service,
  {
    title: "Private Coaching",
    description:
      "Deep-dive coaching to identify and resolve root causes while designing a sustainable lifestyle.",
    meta: "Online · 60–90 minutes per session",
    topics,
    img: "/img/service-private-coaching.jpg",
    span: "lg:col-span-6",
  },
  {
    title: "Online Course",
    description:
      "Transform from the comfort of your home. Focused on Feminine Energy, Self-Love, and Self-Worth.",
    meta: "Course length: 3–5 hours",
    bullets: [
      { en: "Awaken Feminine Energy", th: "ปลุกพลังความเป็นหญิง เนรมิตชีวิตในฝัน" },
      { en: "High Value Woman", th: "เพิ่มคุณค่าในตัวเอง สำเร็จความรัก & การเงิน" },
    ],
    img: "/img/service-online-course.jpg",
    span: "lg:col-span-6",
  },
  {
    title: "Workshops & Retreat",
    description:
      "In-person experiences designed as a Safe Space for deep listening and self-reconnection.",
    meta: "Online & Offline · Chiang Mai · Bangkok · Phuket",
    bullets: [
      { en: "Women's Circle" },
      { en: "Dream Board Workshop" },
      { en: "Sound Healing" },
      { en: "Self-Love & Self-Care" },
    ],
    img: "/img/service-workshop-retreat.jpg",
    span: "lg:col-span-6",
  },
  {
    title: "Transformational Coach Training Program",
    description:
      "Get certified and master the art of coaching for professional and personal success. Ideal for leaders, trainers, and therapists ready to reach a global standard.",
    meta: "Program duration: approximately 2 months",
    bullets: [
      { en: "Coaching Foundations" },
      { en: "World-Class Coaching Tools" },
      { en: "Self-Care for Professional Coaches" },
      { en: "Case Studies" },
      { en: "Building Client Trust and Rapport" },
      { en: "Building a Successful Coaching Business" },
    ],
    img: "/img/service-coach-training.jpg",
    span: "lg:col-span-6",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-tan-deep/95 text-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`bg-cocoa/30 backdrop-blur-sm rounded-[2px] overflow-hidden flex ${s.feature ? "flex-col lg:flex-row" : "flex-col"} ${s.span ?? ""}`}
            >
              <div
                className={`relative ${s.feature ? "lg:w-1/2 aspect-[4/3] lg:aspect-auto lg:min-h-[360px]" : "aspect-[4/3]"} bg-cocoa-soft/40`}
              >
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 600px"
                  className="object-cover"
                />
              </div>
              <div
                className={`p-6 md:p-8 flex-1 flex flex-col ${s.feature ? "lg:p-10" : ""}`}
              >
                <h3
                  className={`font-display ${s.feature ? "text-3xl md:text-4xl lg:text-5xl" : "text-2xl md:text-3xl"} text-cream leading-tight`}
                >
                  {s.title}
                </h3>
                <p className="mt-4 text-[14px] text-cream/85 leading-relaxed">
                  {s.description}
                </p>

                {s.topics && (
                  <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 text-[13px] text-cream/80">
                    {s.topics.map((t) => (
                      <li key={t} className="flex gap-2 items-start">
                        <span className="text-cream/50 mt-0.5">·</span>
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {s.bullets && (
                  <ul className="mt-5 space-y-2 text-[13px] text-cream/85">
                    {s.bullets.map((b) => (
                      <li key={b.en} className="flex gap-2 items-start">
                        <span className="text-cream/50 mt-0.5">·</span>
                        <div>
                          <span className="block">{b.en}</span>
                          {b.th && (
                            <span className="block text-[12px] text-cream/60 leading-snug">
                              {b.th}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-auto pt-7 flex items-center justify-between gap-4">
                  <p className="text-[11px] tracking-[0.22em] uppercase text-cream/70 max-w-[60%]">
                    {s.meta}
                  </p>
                  <a
                    href="#booking"
                    className="text-[11px] tracking-[0.24em] uppercase px-4 py-2.5 rounded-full border border-cream/40 hover:bg-cream hover:text-cocoa transition-colors whitespace-nowrap"
                  >
                    Book session
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
