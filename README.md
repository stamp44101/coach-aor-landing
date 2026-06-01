# Coach Adi — Landing Page

Landing page เวอร์ชัน placeholder สำหรับ Coach Adi (feminine empowerment coaching) — รูปและเนื้อหาจริงเติมทีหลัง

**Live preview:** จะอัปเดตเมื่อ deploy ผ่าน Vercel

## Stack

- **Next.js 16** (App Router + Turbopack)
- **React 19**
- **TypeScript**
- **Tailwind CSS v4** (CSS-first config ใน `app/globals.css`)
- ฟอนต์ Cormorant Garamond (display) + Plus Jakarta Sans (body) ผ่าน `next/font/google`
- เป็น Server Components ล้วน — ไม่มี client JS

## โครงเว็บ

```
app/
├── layout.tsx          # Root layout + font setup
├── page.tsx            # ประกอบ section ทุกตัว
├── globals.css         # Tailwind + theme tokens (cream/tan/cocoa palette)
└── _components/
    ├── nav.tsx           # Sticky header + Book a call CTA
    ├── hero.tsx          # Hero + quote/about block
    ├── services.tsx      # 5 service cards (1:1, retreat, course, circle, discovery)
    ├── cta-strip.tsx     # "Ready to start your transformation"
    ├── testimonials.tsx  # 3 testimonial cards
    ├── booking.tsx       # Booking & consultation form
    ├── footer.tsx        # Dark footer + social
    └── placeholder.tsx   # Gradient block ใช้แทนรูปจริง
```

## วิธีเปลี่ยนรูปจาก placeholder เป็นรูปจริง

ทุก placeholder ใน `_components/*.tsx` ใช้ `<Placeholder ratio="..." label="..." />`

แทนที่ด้วย Next.js `<Image>`:

```tsx
import Image from "next/image";
// ก่อน
<Placeholder ratio="5/7" label="HERO_PORTRAIT.jpg" />
// หลัง
<Image src="/hero-portrait.jpg" alt="..." width={800} height={1120} className="rounded-[2px]" />
```

วางไฟล์รูปไว้ใน `public/` แล้ว reference ด้วย `/filename.ext`

## รัน local

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # production server
```

## Deploy

Push commit ไปที่ `main` (หรือ `master`) → Vercel จะ auto-deploy preview ทุก branch + promote main เป็น production

## License

MIT — © 2026 stamp44101
