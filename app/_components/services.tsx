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
    <section id="services" className="bg-tan-deep text-cream py-20 md:py-28">
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
                s.feature ? "min-h-[400px] md:min-h-[480px]" : "min-h-[460px] md:min-h-[560px] aspect-[5/6] md:aspect-auto"
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
              {/* Softer overlay — let photo breathe like Canva */}
              <div
                aria-hidden
                className="absolute inset-0 bg-cocoa/25"
              />

              {/* Feature card layout: title centered-right, bullets bottom-left */}
              {s.feature ? (
                <div className="relative h-full p-7 md:p-10">
                  {/* Title block — centered */}
                  <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center text-center px-6">
                    <h3 className="font-display italic text-4xl md:text-5xl lg:text-6xl text-cream leading-tight drop-shadow-sm">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[14px] md:text-[15px] text-cream max-w-md leading-relaxed">
                      {s.description}
                    </p>
                  </div>

                  {/* Bullets — bottom-left */}
                  {s.topics && (
                    <ul className="absolute left-7 md:left-10 bottom-7 md:bottom-10 space-y-1 text-[11.5px] md:text-[12.5px] text-cream max-w-[34%]">
                      {s.topics.map((t) => (
                        <li key={t} className="flex gap-1.5 items-start">
                          <span className="text-cream/85 mt-0.5">·</span>
                          <span>{t}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Meta + button — bottom-right */}
                  <div className="absolute right-7 md:right-10 bottom-7 md:bottom-10 flex flex-col items-end gap-3">
                    <p className="text-[10.5px] tracking-[0.2em] uppercase text-cream/95 text-right">
                      {s.meta}
                    </p>
                    <a
                      href="#booking"
                      className="text-[10.5px] tracking-[0.24em] uppercase px-5 py-2.5 rounded-full bg-cream hover:bg-cream/90 text-cocoa transition-colors whitespace-nowrap"
                    >
                      Book a session
                    </a>
                  </div>
                </div>
              ) : (
                <div className="relative h-full flex flex-col p-7 md:p-9">
                  {/* Title + description — upper centered */}
                  <div className="mt-2 md:mt-4 text-center px-2">
                    <h3 className="font-display italic text-3xl md:text-4xl lg:text-[2.75rem] text-cream leading-tight drop-shadow-sm">
                      {s.title}
                    </h3>
                    <p className="mt-3 text-[12.5px] md:text-[13px] text-cream leading-relaxed max-w-sm mx-auto">
                      {s.description}
                    </p>
                  </div>

                  {/* Spacer pushes bullets / footer to bottom */}
                  <div className="flex-1" />

                  {/* Bullets — bottom-left, sized for max-w[55%] */}
                  {s.bullets && (
                    <ul className="space-y-1 text-[11.5px] md:text-[12px] text-cream max-w-[55%] mb-3">
                      {s.bullets.map((b) => (
                        <li key={b.en} className="flex gap-1.5 items-start">
                          <span className="text-cream/85 mt-0.5">·</span>
                          <div>
                            <span className="block">{b.en}</span>
                            {b.th && (
                              <span className="block text-[10.5px] text-cream/80 leading-snug font-[var(--font-thai)]">
                                {b.th}
                              </span>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Meta + button — bottom-right, absolute so it overlaps bullet column gap */}
                  <div className="absolute right-7 md:right-9 bottom-7 md:bottom-9 flex flex-col items-end gap-2.5 max-w-[42%]">
                    <p className="text-[10px] tracking-[0.2em] uppercase text-cream/95 text-right leading-snug">
                      {s.meta}
                    </p>
                    <a
                      href="#booking"
                      className="text-[10.5px] tracking-[0.24em] uppercase px-4 py-2.5 rounded-full bg-cream hover:bg-cream/90 text-cocoa transition-colors whitespace-nowrap"
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
