# Coach Aor CA — Review Notes

ใช้ PR นี้สำหรับ **inline feedback** ผ่าน Vercel Comments บน preview URL ครับ

## ลิงก์
- **Preview deployment** (มี Vercel Toolbar + comments): จะแนบในคอมเมนต์ของ PR
- **Production** (ของจริง): https://coach-aor-landing.vercel.app

## วิธี comment บน preview
1. เปิดลิงก์ preview ที่ผมส่งให้
2. ล็อกอินด้วย GitHub (account `stamp44101`) ถ้ายังไม่ login
3. คลิกที่ icon **💬 Comments** บน **Vercel Toolbar** ที่ลอยอยู่ล่าง ๆ ของหน้า
4. คลิกที่จุดไหนก็ได้บนเว็บที่อยากให้ feedback → พิมพ์ความเห็น → submit
5. comment จะ ping ผมในแชท / dashboard / GitHub PR ครับ

## สิ่งที่อยากให้ check ใน round นี้
- [ ] CI palette (white / cream / brown / dusty-blue / gold) ตรงทุกที่
- [ ] Thai headlines ใช้ Prompt sans-serif ไร้หัว
- [ ] Testimonial — ทั้ง EN และ TH หน้าไม่โดน text บัง (ทุกการ์ด ทุกภาษา)
- [ ] Service cards — text อ่านง่ายบนรูป (dim ทำงาน)
- [ ] Mobile hamburger menu — open/close smooth, slide จากขวา
- [ ] EN/TH toggle — localStorage persist, content เปลี่ยนครบทุก section
- [ ] Real social URLs (IG/FB/TikTok/YT/LINE/email) ทำงาน

## Changes รวมที่ deploy ล่าสุด
- Brand favicon (ใช้ CA monogram)
- Hamburger mobile menu w/ slide-in
- Thai headline font: Prompt
- Testimonial face crop (bg-size auto 200%)
- Service overlays: dimmer (black/30, /35)
- Real social/contact URLs wired
- CI palette locked (no `ink` color)
- TH/EN toggle with localStorage persistence
