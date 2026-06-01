import Image from "next/image";

type Bullet = { en: string; th?: string };
type Service = {
  title: string;
  description: string;
  meta: string;
  img: string;
  imgPosition?: string;
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

// NOTE: image filenames in /public/img are content-mislabeled vs Canva ordering;
// the mapping below uses each file by its actual visual content.
const services: Service[] = [
  {
    // Wide feature card — top
    title: "Private Coaching",
    description:
      "Deep-dive coaching to identify and resolve root causes while designing a sustainable lifestyle.",
    meta: "Online session · 60–90 minutes per session",
    topics,
    img: "/img/service-coach-training.jpg", // poolside, two women
    imgPosition: "center",
    span: "lg:col-span-12",
    feature: true,
  },
  {
    title: "Coaching + Hypnotherapy",
    description:
      "A powerful blend of professional coaching and hypnotherapy to rewire the subconscious mind and release deep-seated blocks.",
    meta: "Online session · 60–90 minutes per session",
    bullets: topics.map((t) => ({ en: t })),
    img: "/img/service-private-coaching.jpg", // gray-suit portrait
    imgPosition: "center 25%",
    span: "lg:col-span-6",
  },
  {
    title: "Online Course",
    description:
      "Transform from the comfort of your home. Focused on Feminine Energy, Self-Love, and Self-Worth.",
    meta: "Course length: 3–5 hours",
    bullets: [
      {
        en: "Awaken Feminine Energy",
        th: "ปลุกพลังความเป็นหญิง เนรมิตชีวิตในฝัน",
      },
      {
        en: "High Value Woman",
        th: "เพิ่มคุณค่าในตัวเอง สำเร็จความรัก & การเงิน",
      },
    ],
    img: "/img/service-online-course.jpg", // woman writing notebook
    imgPosition: "center",
    span: "lg:col-span-6",
  },
  {
    title: "Workshops & Retreat",
    description:
      "In-person experiences designed as a Safe Space for deep listening and self-reconnection.",
    meta: "Online & Offline workshop · Chiang Mai, Bangkok, Phuket",
    bullets: [
      { en: "Women's Circle" },
      { en: "Dream Board Workshop" },
      { en: "Sound Healing" },
      { en: "Self-Love & Self-Care" },
    ],
    img: "/img/service-workshop-retreat.jpg", // meditation circle
    imgPosition: "center",
    span: "lg:col-span-6",
  },
  {
    title: "Transformational Coach Training Program",
    description:
      "Get certified and master the art of coaching for professional and personal success. Ideal for leaders, trainers, and therapists ready to reach a global standard. Our curriculum covers:",
    meta: "Program duration: approximately 2 months",
    bullets: [
      { en: "Coaching Foundations" },
      { en: "World-Class Coaching Tools" },
      { en: "Self-Care for Professional Coaches" },
      { en: "Case Studies" },
      { en: "Building Client Trust and Rapport" },
      { en: "Building a Successful Coaching Business" },
    ],
    img: "/img/service-coaching-hypno.jpg", // workshop scene fallback
    imgPosition: "center",
    span: "lg:col-span-6",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-tan-deep/95 text-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 md:mb-14">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className={`relative overflow-hidden rounded-[2px] ${s.span ?? ""} ${
                s.feature ? "min-h-[420px] md:min-h-[520px]" : "min-h-[480px] md:min-h-[600px] aspect-[5/6] md:aspect-auto"
              }`}
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 1200px"
                style={{ objectPosition: s.imgPosition ?? "center" }}
                className="object-cover"
                priority
              />
              {/* Dark gradient overlay for legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-cocoa/35 via-cocoa/45 to-cocoa/75"
              />

              {/* Feature card layout: bullets left, title center */}
              {s.feature ? (
                <div className="relative h-full flex flex-col md:flex-row p-7 md:p-10 gap-6">
                  <div className="md:w-1/3 flex flex-col justify-center">
                    {s.topics && (
                      <ul className="space-y-2 text-[13px] md:text-sm text-cream">
                        {s.topics.map((t) => (
                          <li key={t} className="flex gap-2 items-start">
                            <span className="text-cream/70 mt-0.5">·</span>
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <div className="md:w-2/3 flex flex-col items-center text-center justify-center">
                    <h3 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cream leading-tight">
                      {s.title}
                    </h3>
                    <p className="mt-4 text-[14px] md:text-[15px] text-cream/90 max-w-md leading-relaxed">
                      {s.description}
                    </p>
                    <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
                      <p className="text-[11px] tracking-[0.22em] uppercase text-cream/85">
                        {s.meta}
                      </p>
                      <a
                        href="#booking"
                        className="text-[11px] tracking-[0.24em] uppercase px-5 py-2.5 rounded-full bg-mocha hover:bg-mocha/85 text-cream transition-colors whitespace-nowrap"
                      >
                        Book a session
                      </a>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative h-full flex flex-col p-7 md:p-9">
                  <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cream leading-tight text-center mt-2">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-[13.5px] md:text-[14px] text-cream/90 leading-relaxed text-center max-w-md mx-auto">
                    {s.description}
                  </p>

                  {s.bullets && (
                    <ul className="mt-5 space-y-1.5 text-[13px] text-cream/95 max-w-md mx-auto w-full">
                      {s.bullets.map((b) => (
                        <li key={b.en} className="flex gap-2 items-start">
                          <span className="text-cream/65 mt-0.5">·</span>
                          <div>
                            <span className="block">{b.en}</span>
                            {b.th && (
                              <span className="block text-[12px] text-cream/70 leading-snug font-[var(--font-thai)]">
                                {b.th}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  <div className="mt-auto pt-6 flex items-end justify-between gap-4">
                    <p className="text-[11px] tracking-[0.22em] uppercase text-cream/85 max-w-[55%] leading-snug">
                      {s.meta}
                    </p>
                    <a
                      href="#booking"
                      className="text-[11px] tracking-[0.24em] uppercase px-4 py-2.5 rounded-full bg-mocha hover:bg-mocha/85 text-cream transition-colors whitespace-nowrap"
                    >
                      Book a session
                    </a>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>

        {/* Inline "Ready to start" strip — INSIDE services section per Canva */}
        <div className="mt-14 md:mt-20 flex items-center justify-between gap-6">
          <p className="text-cream text-[22px] md:text-3xl lg:text-4xl leading-tight max-w-2xl">
            Ready to start
            <br />
            your transformation with Coach Aor?
          </p>
          <a
            href="#booking"
            aria-label="Jump to booking"
            className="shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-full border border-cream/60 text-cream hover:bg-cream hover:text-cocoa transition-colors inline-flex items-center justify-center"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
