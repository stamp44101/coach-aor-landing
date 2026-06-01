import Image from "next/image";

type Bullet = { en: string; th?: string };
type Service = {
  title: string;
  description: string;
  meta: string;
  img: string;
  imgPosition?: string;
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

const feature: Service = {
  title: "Private Coaching",
  description:
    "Deep-dive coaching to identify and resolve root causes while designing a sustainable lifestyle.",
  meta: "Online Session\nDuration: 60-90 minutes\nper session",
  topics,
  img: "/img/service-private-coaching.jpg",
  imgPosition: "center",
};

const cards: Service[] = [
  {
    title: "Coaching +\nHypnotherapy",
    description:
      "A powerful blend of professional coaching and hypnotherapy to rewire the subconscious mind and release deep-seated blocks:",
    meta: "Online Session\nDuration: 60-90 minutes\nper session",
    topics,
    img: "/img/service-coaching-hypno-v2.jpg",
    imgPosition: "center 30%",
  },
  {
    title: "Online\nCourse",
    description:
      "Transform from the comfort of your home. Focused on Feminine Energy, Self-Love, and Self-Worth.",
    meta: "Course Length: 3-5 hours",
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
    img: "/img/service-online-course.jpg",
    imgPosition: "center 20%",
  },
  {
    title: "Workshops\n& Retreat",
    description:
      "In-person experiences designed as a Safe Space for deep listening and self-reconnection.",
    meta: "Online & Offline workshop\nLocations: Chiang Mai,\nBangkok, and Phuket",
    bullets: [
      { en: "Women's Circle" },
      { en: "Dream Board Workshop" },
      { en: "Sound Healing" },
      { en: "Self-love & Self-care" },
    ],
    img: "/img/service-workshop-retreat-v2.jpg",
    imgPosition: "center",
  },
  {
    title: "Transformational Coach\nTraining Program",
    description:
      "Get certified and master the art of coaching for professional and personal success. Ideal for leaders, trainers, and therapists ready to reach a global standard. Our curriculum covers",
    meta: "Program Duration:\nApproximately 2 months",
    bullets: [
      { en: "Coaching Foundations" },
      { en: "World-Class Coaching Tools" },
      { en: "Self-Care for Professional Coaches" },
      { en: "Case Studies" },
      { en: "Building Client Trust and Rapport" },
      { en: "Building a Successful Coaching Business" },
    ],
    img: "/img/service-coach-training-v2.jpg",
    imgPosition: "center 25%",
  },
];

// Cream-filled pill — matches the BOOK A SESSION button in feedback PNG
function CreamPill({ className = "" }: { className?: string }) {
  return (
    <a
      href="#booking"
      className={`inline-block text-[11px] tracking-[0.22em] uppercase px-6 py-3 rounded-full bg-cream text-cocoa hover:bg-cream-soft transition-colors whitespace-nowrap shadow-sm ${className}`}
    >
      Book a session
    </a>
  );
}

function CardBody({
  s,
  layout = "stacked",
}: {
  s: Service;
  layout?: "stacked" | "feature";
}) {
  // shared multi-line title
  const titleLines = s.title.split("\n");
  return (
    <div className="relative h-full flex flex-col text-cream"
         style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}>
      {/* Title centered top */}
      <div className={`${layout === "feature" ? "pt-12 md:pt-16" : "pt-10 md:pt-12"} text-center px-6 md:px-8`}>
        <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-3 md:mt-4 text-[13px] md:text-[14px] leading-relaxed max-w-sm mx-auto">
          {s.description}
        </p>
      </div>

      {/* Bullets left + meta + button right */}
      <div className="mt-auto px-6 md:px-8 pb-7 md:pb-9 pt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-end">
        <div>
          {s.topics && (
            <ul className="space-y-1 text-[13px] leading-snug">
              {s.topics.map((t) => (
                <li key={t} className="flex gap-2 items-start">
                  <span className="opacity-70 mt-0.5">·</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          )}
          {s.bullets && (
            <ul className="space-y-1.5 text-[13px] leading-snug">
              {s.bullets.map((b) => (
                <li key={b.en} className="flex gap-2 items-start">
                  <span className="opacity-70 mt-0.5">·</span>
                  <div>
                    <span className="block">{b.en}</span>
                    {b.th && (
                      <span className="block text-[12px] opacity-80 leading-snug">
                        {b.th}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex flex-col items-end gap-4 text-right">
          <p
            className="text-[12px] md:text-[13px] italic leading-snug whitespace-pre-line"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            {s.meta}
          </p>
          <CreamPill />
        </div>
      </div>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="bg-tan-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream mb-10 md:mb-14">
          Our Services
        </h2>

        {/* === FEATURE CARD: Private Coaching (full-bleed photo, text overlay) === */}
        <article className="relative rounded-[3px] overflow-hidden mb-5 md:mb-6 min-h-[440px] md:min-h-[520px]">
          <Image
            src={feature.img}
            alt={feature.title}
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            style={{ objectPosition: feature.imgPosition ?? "center" }}
            className="object-cover"
            priority
          />
          {/* Subtle darken to keep white text legible — no heavy cocoa gradient */}
          <div
            aria-hidden
            className="absolute inset-0 bg-black/15"
          />
          <CardBody s={feature} layout="feature" />
        </article>

        {/* === 2x2 GRID (full-bleed photos with text overlaid directly) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((s) => (
            <article
              key={s.title}
              className="relative rounded-[3px] overflow-hidden min-h-[560px] md:min-h-[600px]"
            >
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                style={{ objectPosition: s.imgPosition ?? "center" }}
                className="object-cover"
              />
              {/* Subtle darken for text legibility */}
              <div aria-hidden className="absolute inset-0 bg-black/20" />
              <CardBody s={s} />
            </article>
          ))}
        </div>

        {/* === "Ready to start" CTA strip — photo bg, 60% left focal === */}
        <div className="relative mt-10 md:mt-14 rounded-[3px] overflow-hidden min-h-[260px] md:min-h-[300px] flex items-center">
          <Image
            src="/img/cta-bg-v2.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: "60% center" }}
            className="object-cover"
          />
          <div aria-hidden className="absolute inset-0 bg-black/15" />
          <div className="relative w-full px-7 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3
              className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15] max-w-2xl"
              style={{ textShadow: "0 1px 12px rgba(0,0,0,0.45)" }}
            >
              Ready to start your transformation
              <br className="hidden md:block" /> with Coach Aor?
            </h3>
            <CreamPill />
          </div>
        </div>
      </div>
    </section>
  );
}
