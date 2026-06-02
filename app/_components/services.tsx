"use client";

import Image from "next/image";
import { useLang, pick, type Lang } from "./lang";

type Bullet = {
  en: string;
  /** translation — shown only when lang === "th" (replaces en). */
  th?: string;
  /** secondary text — always shown UNDER the main line regardless of lang. */
  subtitle?: string;
};
type Service = {
  title: { en: string; th: string };
  description: { en: string; th: string };
  meta: { en: string; th: string };
  img: string;
  imgPosition?: string;
  topics?: { en: string; th: string }[];
  bullets?: Bullet[];
};

const coachingTopics = [
  { en: "Love & Relationships", th: "ความรักและความสัมพันธ์" },
  { en: "Self-Worth & Confidence", th: "คุณค่าและความมั่นใจในตัวเอง" },
  { en: "Inner Child & Trauma Healing", th: "เยียวยาปมวัยเด็กและบาดแผลในใจ" },
  { en: "Feminine Energy", th: "Feminine Energy" },
  { en: "Wealth & Success", th: "การเงินและความสำเร็จ" },
  { en: "Toxic Relationships", th: "ความสัมพันธ์ที่เป็นพิษ" },
  { en: "Life Purpose & Values", th: "การค้นหาคุณค่าและเป้าหมายของชีวิต" },
];

const hypnotherapyTopics = [
  { en: "Fear of abandonment", th: "ความกลัวการถูกทิ้ง" },
  { en: "Repeating relationship patterns", th: "ดึงดูดความสัมพันธ์เดิมซ้ำ ๆ" },
  { en: "Lack of self-worth", th: "ขาดคุณค่าในตัวเอง" },
  { en: "Fear of success", th: "ความกลัวความสำเร็จ" },
  { en: "Limiting beliefs about money", th: "ความเชื่อผิด ๆ เรื่องเงิน" },
  { en: "Trauma & emotional blocks", th: "Trauma หรือ Emotional blocks" },
];

const feature: Service = {
  title: { en: "Private\nCoaching", th: "Private\nCoaching" },
  description: {
    en: "Deep-dive coaching to identify and resolve root causes while designing a sustainable lifestyle.",
    th: "การโค้ชเชิงลึก เพื่อระบุและแก้ปัญหาที่ต้นตอ รวมถึงช่วยออกแบบและพัฒนาไลฟ์สไตล์ เพื่อให้เกิดผลลัพธ์ที่ยั่งยืน",
  },
  meta: {
    en: "Online session\nDuration: 60-90 minutes per session",
    th: "Online session\nระยะเวลา: 60-90 นาที / เซสชั่น",
  },
  topics: coachingTopics,
  img: "/img/service-private-coaching.jpg",
  // Focal: heads at the very top edge — hair just touches/slightly cropped per Canva ref.
  imgPosition: "center 60%",
};

const cards: Service[] = [
  {
    title: { en: "Coaching +\nHypnotherapy", th: "Coaching +\nHypnotherapy" },
    description: {
      en: "A powerful blend of professional coaching and hypnotherapy to rewire the subconscious mind and release deep-seated blocks:",
      th: "การผสมผสานระหว่างศาสตร์การโค้ชและการสะกดจิตบำบัด เพื่อปรับเปลี่ยนจิตใต้สำนึกและคลายปมที่ฝังลึก:",
    },
    meta: {
      en: "Online session · 90–120 minutes per session",
      th: "ในแต่ละเซสชั่นจะใช้เวลาประมาณ 90–120 นาที",
    },
    topics: hypnotherapyTopics,
    img: "/img/service-coaching-hypno-v2.jpg",
    imgPosition: "center 30%",
  },
  {
    title: { en: "Online\nCourse", th: "คอร์สออนไลน์" },
    description: {
      en: "Transform from the comfort of your home. Focused on Feminine Energy, Self-Love, and Self-Worth.",
      th: "เรียนรู้และพัฒนาตนเองจากบ้านของคุณเอง หรือในสิ่งแวดล้อมที่คุณสะดวกสบาย เน้นเนื้อหาเกี่ยวกับ Feminine Energy, การรักตัวเอง, การตระหนักรู้ในคุณค่าและความมั่นใจในตัวเอง",
    },
    meta: {
      en: "Course length: 3–5 hours",
      th: "ความยาวแต่ละคอร์สประมาณ 3–5 ชั่วโมง",
    },
    bullets: [
      {
        en: "Awaken Feminine Energy",
        subtitle: "ปลุกพลังความเป็นหญิง เนรมิตชีวิตในฝัน",
      },
      {
        en: "High Value Woman",
        subtitle: "ตระหนักรู้คุณค่าในตัวเอง ปลดล็อคศักยภาพด้านความสำเร็จ ความรัก & การเงิน",
      },
    ],
    img: "/img/service-online-course.jpg",
    imgPosition: "center 20%",
  },
  {
    title: { en: "Workshops\n& Retreat", th: "Workshops\n& Retreat" },
    description: {
      en: "In-person experiences designed as a Safe Space for deep listening and self-reconnection.",
      th: "เวิร์กชอปและรีทรีตแบบเจอตัวสำหรับผู้หญิง บรรยากาศเน้น safe space การฟังกันอย่างลึกซึ้ง และการ reconnect กับตัวเอง",
    },
    meta: {
      en: "Online & Offline · Chiang Mai, Bangkok, Phuket",
      th: "กิจกรรมนอกสถานที่ Chiang Mai · Bangkok · Phuket",
    },
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
    title: {
      en: "Transformational Coach\nTraining Program",
      th: "Transformational Coach\nTraining Program",
    },
    description: {
      en: "Get certified and master the art of coaching for professional and personal success. Ideal for leaders, trainers, and therapists ready to reach a global standard. Our curriculum covers",
      th: "หลักสูตรฝึกอบรมพร้อมประกาศนียบัตรสำหรับคนที่อยากเป็นโค้ช หรือใช้ทักษะการโค้ชในงาน ธุรกิจ และชีวิตส่วนตัว เหมาะกับบุคคลทั่วไป ผู้นำองค์กร เทรนเนอร์ นักบำบัดที่ต้องการยกระดับตนเองสู่สากล",
    },
    meta: {
      en: "Program duration: approximately 2 months",
      th: "หลักสูตรอบรม ระยะเวลาการเรียนรวมประมาณ 2 เดือน",
    },
    bullets: [
      { en: "Coaching Foundations", th: "พื้นฐานการเป็นโค้ช" },
      { en: "World-Class Coaching Tools", th: "เครื่องมือการโค้ชระดับโลก" },
      {
        en: "Self-Care for Professional Coaches",
        th: "การดูแลตนเองเมื่อต้องทำงานโค้ชเป็นอาชีพ",
      },
      { en: "Case Studies", th: "Case Studies" },
      {
        en: "Building Client Trust and Rapport",
        th: "การสร้างความเชื่อใจลูกค้า",
      },
      {
        en: "Building a Successful Coaching Business",
        th: "การพัฒนาธุรกิจโค้ชชิ่งให้ประสบความสำเร็จ",
      },
    ],
    img: "/img/service-coach-training-v2.jpg",
    imgPosition: "center 25%",
  },
];

function CreamPill({
  children,
  smaller = false,
}: {
  children: React.ReactNode;
  smaller?: boolean;
}) {
  return (
    <a
      href="#booking"
      className={`inline-block uppercase rounded-full bg-cream text-cocoa hover:bg-cream-soft transition-colors whitespace-nowrap shadow-sm ${
        smaller
          ? "text-[11px] md:text-[12px] tracking-[0.32em] px-6 py-3"
          : "text-[13px] md:text-sm tracking-[0.22em] px-7 py-3.5"
      }`}
    >
      {children}
    </a>
  );
}

function CardBody({
  s,
  lang,
  layout = "stacked",
}: {
  s: Service;
  lang: Lang;
  layout?: "stacked" | "feature";
}) {
  const titleLines = s.title[lang].split("\n");
  const isFeature = layout === "feature";

  // Bullet marker — disc for feature (per Canva ref), middle-dot for stacked cards.
  const bulletMark = isFeature ? "•" : "·";

  const bulletsBlock = (s.topics || s.bullets) && (
    <div>
      {s.topics && (
        <ul className="space-y-1 text-[13px] leading-snug">
          {s.topics.map((t) => (
            <li key={t.en} className="flex gap-2 items-start">
              <span className="opacity-80 mt-0.5">{bulletMark}</span>
              <span>{t[lang]}</span>
            </li>
          ))}
        </ul>
      )}
      {s.bullets && (
        <ul className="space-y-1.5 text-[13px] leading-snug">
          {s.bullets.map((b) => (
            <li key={b.en} className="flex gap-2 items-start">
              <span className="opacity-80 mt-0.5">{bulletMark}</span>
              <div>
                <span className="block">
                  {lang === "th" && b.th ? b.th : b.en}
                </span>
                {b.subtitle && (
                  <span className="block text-[12px] opacity-80 leading-snug">
                    {b.subtitle}
                  </span>
                )}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

  const metaCtaBlock = (
    <div
      className={`flex flex-col items-center gap-4 text-center ${
        isFeature ? "md:items-end md:text-right" : ""
      }`}
    >
      <p
        className={`leading-snug whitespace-pre-line ${
          isFeature
            ? "italic text-[13px] md:text-sm"
            : "italic text-[12px] md:text-[13px]"
        }`}
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
      >
        {s.meta[lang]}
      </p>
      <CreamPill smaller={isFeature}>
        {pick(lang, "Book a session", "จองเซสชั่น")}
      </CreamPill>
    </div>
  );

  // Feature card per Canva reference: title at top, bullets bottom-left, meta+CTA bottom-right.
  if (isFeature) {
    return (
      <div
        className="relative h-full flex flex-col text-cream px-6 md:px-10 lg:px-14 pt-6 md:pt-8 pb-6 md:pb-8 justify-between"
        style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
      >
        <div className="text-center">
          <h3
            className={`leading-[1] text-balance ${lang === "th" && /[ก-๛]/.test(s.title.th) ? "font-display-th font-medium" : "font-display italic"} text-4xl md:text-5xl lg:text-6xl`}
          >
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h3>
          <p className="mt-3 md:mt-4 text-[13px] md:text-[14px] leading-relaxed max-w-xl mx-auto text-pretty">
            {s.description[lang]}
          </p>
        </div>

        {/* Bottom row: bullets / meta+CTA aligned to the SAME width as the subtitle above (max-w-xl mx-auto). */}
        <div className="mt-auto max-w-xl mx-auto w-full flex items-end justify-between gap-6 md:gap-10">
          <div className="self-end">{bulletsBlock}</div>
          <div className="self-end">{metaCtaBlock}</div>
        </div>
      </div>
    );
  }

  // Stacked card (2×2 grid) — absolute-positioned layout per design spec.
  // Title+desc float at top 35%, bottom row pins to bottom-left / bottom-right corners.
  return (
    <div
      className="absolute inset-0 text-cream"
      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
    >
      {/* Center title + description — absolute at top 35% */}
      <div className="absolute top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] text-center">
        <h3
          className={`leading-[1.1] text-balance ${lang === "th" && /[ก-๛]/.test(s.title.th) ? "font-display-th font-medium" : "font-display italic"} text-3xl md:text-4xl lg:text-5xl`}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-3 text-[13px] md:text-[14px] leading-relaxed text-pretty font-body">
          {s.description[lang]}
        </p>
      </div>

      {/* Bottom row — absolute at bottom-30 left-30 right-30 */}
      <div className="absolute bottom-[28px] md:bottom-[30px] left-[24px] md:left-[30px] right-[24px] md:right-[30px] flex items-end justify-between gap-5">
        {/* Bullets bottom-left */}
        {(s.topics || s.bullets) ? (
          <ul className="list-disc list-outside pl-4 space-y-1 text-[12.5px] md:text-[13px] leading-snug marker:opacity-90 font-body">
            {s.topics?.map((t) => (
              <li key={t.en}>{t[lang]}</li>
            ))}
            {s.bullets?.map((b) => (
              <li key={b.en}>
                <span className="block">
                  {lang === "th" && b.th ? b.th : b.en}
                </span>
                {b.subtitle && (
                  <span className="block text-[12px] opacity-80 leading-snug">
                    {b.subtitle}
                  </span>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <div />
        )}

        {/* Info text + Book button bottom-right, left-aligned within column */}
        <div className="flex flex-col items-start gap-3 shrink-0">
          <p
            className="italic text-[12px] md:text-[13px] leading-snug whitespace-pre-line text-left font-body"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.5)" }}
          >
            {s.meta[lang]}
          </p>
          <CreamPill smaller>
            {pick(lang, "Book a session", "จองเซสชั่น")}
          </CreamPill>
        </div>
      </div>
    </div>
  );
}

export function Services() {
  const { lang } = useLang();
  return (
    <section id="services" className="bg-tan-deep py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <h2
          className={`${lang === "th" ? "font-display-th font-medium" : "font-body font-normal"} text-3xl md:text-4xl leading-[1.1] text-cream mb-10 md:mb-14`}
        >
          {pick(lang, "Our Services", "บริการต่าง ๆ ของ Coach Aor CA")}
        </h2>

        {/* === FEATURE CARD: Private Coaching ===
            Fixed aspect ratio so the image crop stays consistent at every desktop width
            (min-h would let aspect drift → heads cropping inconsistently). */}
        <article className="relative rounded-[3px] overflow-hidden mb-5 md:mb-6 aspect-[3/2] md:aspect-[12/5]">
          <Image
            src={feature.img}
            alt={feature.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            style={{ objectPosition: feature.imgPosition ?? "center" }}
            className="object-cover"
            priority
          />
          {/* Subtle dark gradient overlay — darkest middle+bottom for legibility */}
          <div
            aria-hidden
            className="absolute inset-0 bg-gradient-to-b from-black/15 via-black/35 to-black/55"
          />
          <CardBody s={feature} lang={lang} layout="feature" />
        </article>

        {/* === 2x2 GRID === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {cards.map((s) => (
            <article
              key={s.title.en}
              className="relative rounded-[3px] overflow-hidden min-h-[560px] md:min-h-[600px]"
            >
              <Image
                src={s.img}
                alt={s.title[lang]}
                fill
                sizes="(max-width: 768px) 100vw, 720px"
                style={{ objectPosition: s.imgPosition ?? "center" }}
                className="object-cover"
              />
              {/* Subtle dark gradient overlay — darkest middle+bottom for legibility */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/60"
              />
              <CardBody s={s} lang={lang} />
            </article>
          ))}
        </div>

        {/* === "Ready to start" — plain text on tan-deep, no box === */}
        <div className="mt-14 md:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h3
            className={`${lang === "th" ? "font-display-th font-medium" : "font-display italic"} text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.2] max-w-3xl`}
          >
            {pick(
              lang,
              <>
                Ready to start your transformation
                <br className="hidden md:block" /> with Coach Aor?
              </>,
              <>
                พร้อมเริ่มต้นการเปลี่ยนแปลง
                <br className="hidden md:block" /> ไปกับโค้ชอ้อแล้วหรือยัง?
              </>,
            )}
          </h3>
          <CreamPill>{pick(lang, "Book a session", "จองเซสชั่น")}</CreamPill>
        </div>
      </div>
    </section>
  );
}
