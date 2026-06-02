# Coach Aor CA — Landing Page

Single-page landing สำหรับ Panida Thongsui (Coach Aor) — Transformational Coach & Founder of Coach Aor CA
ครอบคลุม service breakdown, testimonials, การจอง consultation ผ่าน LINE Official

**Production:** https://coach-aor-landing.vercel.app
**Alias:** https://coach-adi-landing.vercel.app

## Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4** — CSS-first config ใน `app/globals.css` พร้อม brand tokens (cream / cocoa / mocha=ฟ้าตุ่น / gold)
- ฟอนต์ผ่าน `next/font/google`: **Playfair Display** (display EN), **Prompt** (display TH ไร้หัว), **Inter** (body EN), **Noto Sans Thai** (body TH)
- เป็น mix ของ Server + Client Components (Client เฉพาะที่ใช้ language toggle / hover / mobile menu)
- รองรับ **EN/TH toggle** เก็บใน `localStorage` ผ่าน `LangProvider` context

## โครงสร้าง

```
app/
├── layout.tsx                  # Root + font setup + metadata + open graph
├── page.tsx                    # ประกอบ section ทั้งหมด ตามลำดับ
├── globals.css                 # Tailwind v4 + brand color tokens
├── icon.png                    # Favicon (CA monogram)
└── _components/
    ├── lang.tsx                # LangProvider + useLang hook + pick(en, th) helper
    ├── nav.tsx                 # Sticky header + TH/EN toggle + mobile hamburger drawer
    ├── hero.tsx                # Hero (lily floral bg) + About Coach Aor + italic quote
    ├── services.tsx            # Feature card "Private Coaching" + 2×2 grid (Hypno · Course · Retreat · Coach Training)
    ├── testimonials.tsx        # 3 cards พร้อม hover zoom effect
    ├── booking.tsx             # Booking & Consultation — form ซ้าย · photo+QR+LINE id ขวา
    └── footer.tsx              # Dusty-blue footer + uniform 32×32 social icons (IG · FB · TikTok · YT)

public/img/                     # รูปจริงทั้งหมด (portrait, service cards, QR codes ฯลฯ)
```

## Brand tokens — สำคัญ

อยู่ใน `app/globals.css` (Tailwind v4 `@theme`):

| Token | Value | ใช้กับ |
|---|---|---|
| `--color-cream` | `#f9f7ef` | bg หลัก |
| `--color-cream-soft` / `--color-cream-deep` | (variants) | inputs, dim sections |
| `--color-cocoa` | `#674328` | text หลัก, hero h1 |
| `--color-cocoa-soft` | `#856953` | meta text |
| `--color-mocha` | `#82939b` | **ฟ้าตุ่น (the only blue)** — hero subtitle, about quote, BOOK A SESSION button, footer bg |
| `--color-gold` / `--color-gold-soft` | (champagne) | accent |

> **หมายเหตุชื่อ token:** `mocha` คือสีฟ้าตุ่น ไม่ใช่สีน้ำตาล (กันลืม)

## รัน local

```bash
npm install
npm run dev          # http://localhost:3000 (Turbopack HMR)
npm run build        # production build
npm run start        # production server
npx tsc --noEmit     # type check
```

## Deploy

ใช้ Vercel — link ผ่าน `.vercel/project.json` (projectId/orgId ใน repo)

```bash
vercel --prod                # deploy production
```

### ⚠️ Alias-stickiness gotcha

ทุก `vercel --prod` Vercel มัก **ไม่อัปเดต** alias `coach-aor-landing.vercel.app` ให้ deployment ใหม่อัตโนมัติ
ต้องสั่ง alias ใหม่ทุกครั้ง แล้ว verify ด้วย curl:

```bash
# หลัง deploy success
vercel alias set <new-deployment-host>.vercel.app coach-aor-landing.vercel.app
curl -sS https://coach-aor-landing.vercel.app/ | grep -oE 'class="[^"]{0,40}font-display[^"]{0,40}"'
```

ใช้คลาส/ค่าที่เพิ่งเปลี่ยนใน commit ล่าสุดเป็น "new-build marker" ก็พอ

## Feedback iteration workflow

1. Coach Aor (หรือ reviewer) เปิด preview deployment
2. คลิก Vercel Toolbar → **💬 Comments** → คลิกที่ element แล้ว comment
3. Comment ส่ง webhook เข้า GitHub PR → react/แก้ตาม comment
4. Push commit → Vercel auto deploy preview → comment ใหม่ → loop

ดูตัวอย่าง round-by-round feedback ที่ `CHECKPOINT.md`

## Restore point

Tag `v1.0-feedback-round-9` คือ snapshot ของรอบ feedback แรกที่ส่งมอบ
Rollback ได้ผ่าน:

```bash
git checkout main && git reset --hard v1.0-feedback-round-9
# หรือ revert merge เฉพาะ
git revert -m 1 <merge-commit-sha>
```

## License

MIT — © 2026 stamp44101
