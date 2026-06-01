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
  panel: "cocoa" | "tan" | "cream-tint";
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
  meta: "Online session · 60–90 minutes per session",
  topics,
  img: "/img/service-private-coaching.jpg",
  imgPosition: "center",
  panel: "cocoa",
};

const cards: Service[] = [
  {
    title: "Coaching + Hypnotherapy",
    description:
      "A powerful blend of professional coaching and hypnotherapy to rewire the subconscious mind and release deep-seated blocks.",
    meta: "Online session · 60–90 minutes per session",
    topics,
    img: "/img/service-coaching-hypno.jpg",
    imgPosition: "center 30%",
    panel: "cocoa",
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
    img: "/img/service-online-course.jpg",
    imgPosition: "center 20%",
    panel: "tan",
  },
  {
    title: "Workshops & Retreat",
    description:
      "In-person experiences designed as a Safe Space for deep listening and self-reconnection.",
    meta: "Online & Offline · Chiang Mai, Bangkok, Phuket",
    bullets: [
      { en: "Women's Circle" },
      { en: "Dream Board Workshop" },
      { en: "Sound Healing" },
      { en: "Self-Love & Self-Care" },
    ],
    img: "/img/service-workshop-retreat.jpg",
    imgPosition: "center",
    panel: "cocoa",
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
    imgPosition: "center 25%",
    panel: "tan",
  },
];

// Reusable outline pill — matches Canva's transparent-bg + border buttons
function OutlineBtn({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  return (
    <a
      href="#booking"
      className={
        light
          ? "inline-block text-[11px] tracking-[0.24em] uppercase px-5 py-2.5 rounded-full border border-cream/70 text-cream hover:bg-cream hover:text-cocoa transition-colors whitespace-nowrap"
          : "inline-block text-[11px] tracking-[0.24em] uppercase px-5 py-2.5 rounded-full border border-cocoa/70 text-cocoa hover:bg-cocoa hover:text-cream transition-colors whitespace-nowrap"
      }
    >
      {children}
    </a>
  );
}

function PanelTextContent({ s }: { s: Service }) {
  const light = s.panel !== "tan";
  const textBase = light ? "text-cream" : "text-cocoa";
  const textMuted = light ? "text-cream/85" : "text-cocoa-soft";
  const dotColor = light ? "text-cream/60" : "text-cocoa-soft/60";
  const metaColor = light ? "text-cream/75" : "text-cocoa-soft/85";

  return (
    <div className="flex flex-col h-full">
      <h3
        className={`font-display italic text-3xl md:text-4xl ${textBase} leading-tight`}
      >
        {s.title}
      </h3>
      <p className={`mt-3 text-[14px] ${textMuted} leading-relaxed`}>
        {s.description}
      </p>

      {s.topics && (
        <ul className={`mt-4 grid grid-cols-1 gap-y-1.5 text-[13px] ${textMuted}`}>
          {s.topics.map((t) => (
            <li key={t} className="flex gap-2 items-start">
              <span className={`${dotColor} mt-0.5`}>·</span>
              <span>{t}</span>
            </li>
          ))}
        </ul>
      )}
      {s.bullets && (
        <ul className={`mt-4 space-y-2 text-[13px] ${textMuted}`}>
          {s.bullets.map((b) => (
            <li key={b.en} className="flex gap-2 items-start">
              <span className={`${dotColor} mt-0.5`}>·</span>
              <div>
                <span className="block">{b.en}</span>
                {b.th && (
                  <span
                    className={`block text-[12px] ${light ? "text-cream/65" : "text-cocoa-soft/70"} leading-snug`}
                  >
                    {b.th}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-auto pt-5 flex items-end justify-between gap-3">
        <p
          className={`text-[11px] tracking-[0.18em] uppercase ${metaColor} max-w-[55%] leading-relaxed`}
        >
          {s.meta}
        </p>
        <OutlineBtn light={light}>Book a session</OutlineBtn>
      </div>
    </div>
  );
}

const panelBg = {
  cocoa: "bg-cocoa",
  tan: "bg-cream-soft",
  "cream-tint": "bg-cream-deep",
};

export function Services() {
  return (
    <section id="services" className="bg-tan-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream mb-10 md:mb-14">
          Our Services
        </h2>

        {/* === FEATURE CARD: Private Coaching (text-LEFT / photo-RIGHT) === */}
        <article className="grid md:grid-cols-2 rounded-[3px] overflow-hidden mb-5 md:mb-6 min-h-[440px] md:min-h-[480px]">
          <div className={`${panelBg[feature.panel]} p-7 md:p-10 lg:p-12`}>
            <PanelTextContent s={feature} />
          </div>
          <div className="relative min-h-[300px] md:min-h-full">
            <Image
              src={feature.img}
              alt={feature.title}
              fill
              sizes="(max-width: 768px) 100vw, 720px"
              style={{ objectPosition: feature.imgPosition ?? "center" }}
              className="object-cover"
              priority
            />
          </div>
        </article>

        {/* === 2x2 GRID (photo-TOP / panel-BOTTOM) === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((s) => (
            <article
              key={s.title}
              className="flex flex-col rounded-[3px] overflow-hidden min-h-[640px] md:min-h-[680px]"
            >
              <div className="relative h-[260px] md:h-[300px] flex-shrink-0">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  style={{ objectPosition: s.imgPosition ?? "center" }}
                  className="object-cover"
                />
              </div>
              <div className={`${panelBg[s.panel]} p-7 md:p-8 flex-1 flex flex-col`}>
                <PanelTextContent s={s} />
              </div>
            </article>
          ))}
        </div>

        {/* === "Ready to start" CTA strip — CoachingHypnotherapy bg, focal 60% left === */}
        <div className="relative mt-10 md:mt-14 rounded-[3px] overflow-hidden min-h-[260px] md:min-h-[300px] flex items-center">
          <Image
            src="/img/cta-bg.jpg"
            alt=""
            fill
            sizes="100vw"
            style={{ objectPosition: "60% center" }}
            className="object-cover"
          />
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-r from-cocoa/85 via-cocoa/55 to-cocoa/30"
          />
          <div className="relative w-full px-7 md:px-12 py-10 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15] max-w-2xl">
              Ready to start your transformation
              <br className="hidden md:block" /> with Coach Aor?
            </h3>
            <OutlineBtn light>Book a session</OutlineBtn>
          </div>
        </div>
      </div>
    </section>
  );
}
