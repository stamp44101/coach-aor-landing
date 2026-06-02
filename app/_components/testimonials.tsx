"use client";

import { useLang, pick } from "./lang";

type Item = {
  quote: { en: string; th: string };
  name: { en: string; th: string };
  role: { en: string; th: string };
  img: string;
  /** backgroundSize — use "cover" or e.g. "auto 180%" to force vertical overflow so we can crop into the face. */
  bgSize?: string;
  /** backgroundPosition keeping the face in the top ~30% (above quote text). */
  focal: string;
};

const items: Item[] = [
  {
    quote: {
      en: "I'm so grateful we met. I used to be paralyzed by the fear of building a business and investing my effort. Today, I've found the courage to take action and turn my vision into reality. I now wake up every day excited to live my life to the fullest.",
      th: "ขอบคุณโค้ชมาก ๆ ดีใจที่เราได้เจอกัน จากคนที่กลัวมากกับการสร้างธุรกิจ กลัวการลงทุนที่ต้องลงมือทำ จนวันนี้กล้าที่จะลงมือทำ สร้างทุกอย่างในหัว เป็นการทำที่อยากตื่นขึ้นมาใช้ชีวิตในทุก ๆ วันค่ะ",
    },
    name: { en: "Khun Sine", th: "คุณทราย" },
    role: {
      en: "Psychotherapist & Business Owner",
      th: "นักจิตบำบัด & เจ้าของกิจการส่วนตัว",
    },
    img: "/img/testi-pear.jpg",
    bgSize: "auto 160%",
    focal: "center 18%",
  },
  {
    quote: {
      en: "I want to thank you, Coach Aor, and thank myself for choosing to shift my inner energy. I spent so long chasing success until my body and mind completely broke down. Now, I've found the courage to quit and start building a new life for myself.",
      th: "อยากขอบคุณคุณอ้อและขอบคุณตัวเอง ที่ตัดสินใจปรับเปลี่ยนพลังงานจากภายใน จากเคยไล่ล่าความสำเร็จจนร่างกายจิตใจป่วยหนัก ตอนนี้กล้าลาออกมาสร้างชีวิตใหม่ให้ตัวเองแล้วค่ะ",
    },
    name: { en: "Khun Pear", th: "คุณแพร" },
    role: { en: "Investor", th: "นักลงทุน" },
    img: "/img/testi-bam.jpg",
    bgSize: "auto 150%",
    focal: "40% 15%",
  },
  {
    quote: {
      en: "Thank you for being my mirror and providing the guidance that helped me see myself so clearly. I've moved past the need to find who's right or wrong, and my mindset has shifted tremendously. I feel so much more mature — even my friends have noticed the change. I only wish we had met sooner!",
      th: "ขอบคุณสำหรับการเป็นกระจกและคำแนะนำต่าง ๆ ที่ทำให้แบมเห็นตัวเองชัดขึ้น จากที่เคยต้องหาว่าใครผิดใครถูก มายเซ็ตเปลี่ยนไปมาก มีวุฒิภาวะขึ้นมาก ๆ จนเพื่อน ๆ สังเกตเห็นได้ เราน่าจะเจอกันเร็วกว่านี้",
    },
    name: { en: "Khun Bam", th: "คุณแบม" },
    role: { en: "Investor", th: "นักลงทุน" },
    img: "/img/testi-sine.jpg",
    bgSize: "auto 200%",
    focal: "62% 88%",
  },
];

export function Testimonials() {
  const { lang } = useLang();
  return (
    <section id="testimonials" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-10 md:mb-14">
          <h2
            className={`${lang === "th" ? "font-display-th font-medium" : "font-display"} text-balance text-4xl md:text-5xl lg:text-6xl text-cocoa leading-[1.1]`}
          >
            {pick(lang, "Testimonials", "เสียงจากผู้ที่เคยรับการโค้ช")}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-7">
          {items.map((t) => (
            <figure
              key={t.name.en}
              className="group relative overflow-hidden rounded-[2px] min-h-[460px] md:min-h-[540px] flex"
            >
              {/* Use background-image (not next/image) so we can zoom/crop into the face precisely.
                  backgroundSize 'cover' + backgroundPosition gives full control of focal point.
                  Slight scale-up on hover so the card feels interactive. */}
              <div
                role="img"
                aria-label={t.name[lang]}
                className="absolute inset-0 transition-transform duration-700 ease-out will-change-transform group-hover:scale-[1.06]"
                style={{
                  backgroundImage: `url('${t.img}')`,
                  backgroundSize: t.bgSize ?? "cover",
                  backgroundPosition: t.focal,
                  backgroundRepeat: "no-repeat",
                  filter: "brightness(0.7) saturate(0.85)",
                }}
              />
              {/* Stronger gradient — keeps quote legible, leaves top 40% clean for the face */}
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/25 to-transparent transition-opacity duration-500 group-hover:from-black/45 group-hover:via-black/15"
              />
              <div
                className="relative z-10 flex-1 p-6 md:p-8 text-white flex flex-col justify-end"
                style={{ textShadow: "0 1px 12px rgba(0,0,0,0.55)" }}
              >
                <blockquote className="text-[13px] md:text-[13.5px] leading-relaxed text-white/95 text-pretty">
                  &ldquo;{t.quote[lang]}&rdquo;
                </blockquote>
                <figcaption className="mt-5">
                  <p className="font-display italic text-lg md:text-xl text-white">
                    {t.name[lang]},
                  </p>
                  <p className="font-display italic text-xs md:text-[13px] text-white/90">
                    {t.role[lang]}
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
