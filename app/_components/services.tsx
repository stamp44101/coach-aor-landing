"use client";

import Image from "next/image";
import { useLang, pick, type Lang } from "./lang";

type Bullet = { en: string; th?: string };
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
  title: { en: "Private Coaching", th: "Private Coaching" },
  description: {
    en: "Deep-dive coaching to identify and resolve root causes while designing a sustainable lifestyle.",
    th: "การโค้ชเชิงลึก เพื่อระบุและแก้ปัญหาที่ต้นตอ รวมถึงช่วยออกแบบและพัฒนาไลฟ์สไตล์ เพื่อให้เกิดผลลัพธ์ที่ยั่งยืน",
  },
  meta: {
    en: "Online session · 60–90 minutes per session",
    th: "ในแต่ละเซสชั่นจะใช้เวลาประมาณ 60–90 นาที",
  },
  topics: coachingTopics,
  img: "/img/service-private-coaching.jpg",
  imgPosition: "center",
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
        th: "ปลุกพลังความเป็นหญิง เนรมิตชีวิตในฝัน",
      },
      {
        en: "High Value Woman",
        th: "ตระหนักรู้คุณค่าในตัวเอง ปลดล็อคศักยภาพด้านความสำเร็จ ความรัก & การเงิน",
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

function CreamPill({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#booking"
      className="inline-block text-[11px] tracking-[0.22em] uppercase px-6 py-3 rounded-full bg-cream text-cocoa hover:bg-cream-soft transition-colors whitespace-nowrap shadow-sm"
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
  return (
    <div
      className="relative h-full flex flex-col justify-center text-cream px-6 md:px-8 py-8 md:py-10"
      style={{ textShadow: "0 1px 8px rgba(0,0,0,0.45)" }}
    >
      <div className="text-center">
        <h3
          className={`font-display italic leading-[1.05] ${layout === "feature" ? "text-4xl md:text-5xl lg:text-6xl" : "text-3xl md:text-4xl lg:text-5xl"}`}
        >
          {titleLines.map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h3>
        <p className="mt-3 md:mt-4 text-[13px] md:text-[14px] leading-relaxed max-w-md mx-auto">
          {s.description[lang]}
        </p>
      </div>

      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 items-end">
        <div>
          {s.topics && (
            <ul className="space-y-1 text-[13px] leading-snug">
              {s.topics.map((t) => (
                <li key={t.en} className="flex gap-2 items-start">
                  <span className="opacity-70 mt-0.5">·</span>
                  <span>{t[lang]}</span>
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
            {s.meta[lang]}
          </p>
          <CreamPill>{pick(lang, "Book a session", "จองเซสชั่น")}</CreamPill>
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
        <h2 className="font-display italic text-4xl md:text-5xl lg:text-6xl leading-[1.05] text-cream mb-10 md:mb-14">
          {pick(lang, "Our Services", "บริการต่าง ๆ ของ Coach Aor CA")}
        </h2>

        {/* === FEATURE CARD: Private Coaching === */}
        <article className="relative rounded-[3px] overflow-hidden mb-5 md:mb-6 min-h-[440px] md:min-h-[520px]">
          <Image
            src={feature.img}
            alt={feature.title[lang]}
            fill
            sizes="(max-width: 768px) 100vw, 1280px"
            style={{ objectPosition: feature.imgPosition ?? "center" }}
            className="object-cover"
            priority
          />
          <div aria-hidden className="absolute inset-0 bg-black/15" />
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
              <div aria-hidden className="absolute inset-0 bg-black/20" />
              <CardBody s={s} lang={lang} />
            </article>
          ))}
        </div>

        {/* === "Ready to start" — plain text on tan-deep, no box === */}
        <div className="mt-14 md:mt-20 flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <h3 className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cream leading-[1.15] max-w-3xl">
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
