"use client";

import Image from "next/image";
import { useLang, pick } from "./lang";

export function Hero() {
  const { lang } = useLang();
  return (
    <>
      {/* Hero — full-width section with floral lily bg + heavy white wash */}
      <section
        id="top"
        className="relative isolate overflow-hidden w-full pt-12 md:pt-20 pb-20 md:pb-28"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/img/hero-bg-lily.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-cream/80"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-cream/40 via-cream/30 to-cream"
        />

        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="text-center max-w-4xl mx-auto">
            {lang === "en" ? (
              <h1 className="font-display italic text-5xl sm:text-6xl md:text-7xl lg:text-[6rem] leading-[1.02] text-cocoa">
                Step Into Your
                <br />
                Feminine Power
              </h1>
            ) : (
              <h1 className="font-display italic text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] leading-[1.05] text-cocoa">
                ปลดปล่อยพลังภายใน
                <br />
                และศักยภาพความเป็นหญิงของคุณ
              </h1>
            )}
            <p className="mt-4 md:mt-5 text-[11px] md:text-xs tracking-[0.32em] uppercase text-cocoa-soft">
              {pick(lang, "With Coach Aor", "กับโค้ชอ้อ")}
            </p>
            <p className="mt-7 md:mt-9 text-sm md:text-base text-cocoa-soft max-w-xl mx-auto leading-relaxed">
              {pick(
                lang,
                "“I believe that every woman can create the life she desires, once she truly knows herself and unlocks her power within.”",
                "“อ้อเชื่อว่าผู้หญิงทุกคนสามารถสร้างชีวิตที่ตนเองปรารถนาได้ ถ้าเธอรู้จักตัวเองอย่างลึกซึ้งและรู้วิธีใช้พลังอันมหาศาลภายในของตัวเอง”",
              )}
            </p>
            <a
              href="#booking"
              className="inline-block mt-8 md:mt-10 px-10 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cream bg-mocha hover:bg-mocha/85 transition-colors rounded-full"
            >
              {pick(lang, "Book a session", "จองเซสชั่น")}
            </a>
            <p className="mt-6 md:mt-7 text-[13px] text-cocoa-soft tracking-wide max-w-xl mx-auto">
              {pick(
                lang,
                "Unleash Your Inner Power & Feminine Potential With Coach Aor.",
                "เริ่มต้นการปลดปล่อยศักยภาพของคุณไปกับโค้ช",
              )}
            </p>
          </div>
        </div>
      </section>

      {/* About — quote + portrait */}
      <section
        id="about"
        className="mx-auto max-w-7xl px-6 md:px-12 pb-20 md:pb-28"
      >
        <h2 className="font-display italic text-3xl md:text-4xl text-cocoa mb-8 md:mb-10">
          {pick(lang, "About Coach Aor", "ประวัติโค้ชอ้อ")}
        </h2>
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative overflow-hidden rounded-[2px] aspect-[4/5]">
              <Image
                src="/img/about-portrait-v2.jpg"
                alt="Coach Aor — Panida Thongsui"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:col-span-7 md:pl-4 lg:pl-10 flex flex-col">
            <p className="font-display italic text-3xl md:text-4xl lg:text-5xl text-cocoa leading-[1.2]">
              &ldquo;All power comes from reconnecting with your true self.&rdquo;
            </p>
            <p className="mt-3 font-display italic text-sm md:text-base text-cocoa-soft">
              {pick(
                lang,
                "Panida Thongsui — Coach Aor,",
                "โค้ชอ้อ ปนิดา ทองสุย",
              )}
            </p>
            <p className="font-display italic text-[13px] md:text-sm text-cocoa-soft/85">
              (Transformational Coach &amp; Founder of Coach Aor CA)
            </p>
            <div className="mt-6 space-y-4 text-cocoa-soft text-[14.5px] leading-relaxed max-w-xl">
              {lang === "en" ? (
                <>
                  <p>
                    After overcoming chronic health issues, stress, and burnout
                    at just 19, I embarked on a journey of holistic healing. By
                    mastering the art of self-healing without medication, I
                    transformed my life and dedicated myself to professional
                    coaching and counseling at an international standard. With
                    over 1,000 coaching hours, I believe that true
                    transformation must happen across all levels of &ldquo;Body,
                    Mind, Energy, and the Subconscious&rdquo;.
                  </p>
                  <p>
                    My unique approach integrates diverse disciplines including
                    Professional Coaching, Hypnotherapy, Trauma Healing,
                    Yin-Yang Balance, and Spiritual Energy Work. I empower women
                    to reconnect with their inner selves, break free from old
                    limitations, and design a life aligned with their truest
                    values. My philosophy is simple, when a woman deeply
                    reconnects with herself—love, confidence, relationships,
                    and success will naturally and sustainably follow.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    เพราะเคยประสบปัญหาทางสุขภาพ ความเครียดและเบิร์นเอ้าท์ตั้งแต่อายุ
                    19 ทำให้หันมาสนใจศึกษาเรื่องการดูแลสุขภาพแบบองค์รวมอย่างจริงจัง
                    จนสามารถรักษาตัวเองจนหายขาดได้โดยไม่พึ่งยา
                    นำไปสู่การพัฒนาตนเองให้มีความรู้ ทักษะการโค้ช
                    และทักษะให้คำปรึกษาในระดับสากล
                    อ้อเชื่อว่าการเปลี่ยนแปลงชีวิตที่แท้จริงต้องเกิดขึ้นทั้งในระดับ
                    &ldquo;ร่างกาย จิตใจ พลังงาน และจิตใต้สำนึก&rdquo;
                  </p>
                  <p>
                    ตลอดเส้นทางอาชีพโค้ชที่ได้โค้ชผู้คนมามากกว่า 1,000 ชั่วโมง
                    ทำให้เกิดการประยุกต์ศาสตร์หลายแขนงเข้าด้วยกันในการช่วยเหลือผู้หญิง
                    ไม่ว่าจะเป็นศาสตร์การโค้ช การสะกดจิตบำบัด การเยียวยาบาดแผลทางจิตใจ
                    สมดุลพลังงานหยินหยาง พลังงานบำบัดและจิตวิญญาณ
                    เพื่อช่วยให้ผู้หญิงกลับมาเข้าใจตัวเอง ปลดปล่อยข้อจำกัดเดิม ๆ
                    และสร้างชีวิตใหม่ที่สอดคล้องกับคุณค่าที่แท้จริงของตัวเอง
                  </p>
                  <p>
                    อ้อเชื่อว่าเมื่อผู้หญิงกลับมาเชื่อมต่อกับตัวเองได้อย่างลึกซึ้ง
                    ความรัก ความมั่นใจ ความสัมพันธ์ และความสำเร็จจากภายนอก
                    จะค่อย ๆ ปรากฏออกมาอย่างเป็นธรรมชาติ ชัดเจนและยั่งยืน
                  </p>
                </>
              )}
            </div>
            <a
              href="#booking"
              className="inline-block self-start mt-8 px-9 py-3.5 text-[11px] tracking-[0.28em] uppercase text-cocoa border border-cocoa/70 hover:bg-cocoa hover:text-cream transition-colors rounded-full"
            >
              {pick(lang, "Book a session", "จองเซสชั่น")}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
