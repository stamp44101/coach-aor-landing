# Checkpoint — Coach Aor CA landing (2026-06-02, round 9)

> Status: feedback rounds 1–9 + hover effect all shipped to production.
> Branch model: PR #1 (feedback-round-1) ready to merge into `main` with merge-commit strategy.
> Resume here: read this file → REVIEW-NOTES.md → PR #1 comments → latest commits.

## State of the world

- **Live (prod):** https://coach-aor-landing.vercel.app  ·  also aliased at coach-adi-landing.vercel.app
- **Repo:** stamp44101/coach-aor-landing
- **Branch state:**
  - `main` — pre-favicon (10 commits behind feedback-round-1)
  - `feedback-round-1` — favicon + rounds 2-9 + hover, **pushed**
- **PR #1** (`feedback-round-1` → `main`) — OPEN, ready to merge
- **Latest production commit:** `e96f672` (Testimonial cards: hover zoom)
- **Local dev:** `npm run dev` → http://localhost:3001 (Turbopack), typecheck clean

## What feedback rounds 1–9 + hover covered

| Round | Commit | Section | Change |
|---|---|---|---|
| 1 | `8438dbc` | global | brand favicon (CA monogram), REVIEW-NOTES doc |
| 2 | `dd5102e` | hero / about / services / testi / booking / footer | dusty-blue subtitles · stacked service bullets centered · Thai→TH-only on bullet translations · brighter testimonial bg · SEND filled full-width · uniform 32×32 rounded-square social icons |
| 3 | `bc5ff47` | services / testi / booking / hero | service-card CTAs aligned at bottom · testimonial cards grow to fit text (no overflow) · booking section uses portrait as full-width seamless bg · hero H1 bolder (later reverted in round 4) · about quote forced to 2 lines (text-4xl at lg) |
| 4 | `1c55b13` | booking / hero | booking restructured to Canva layout (photo right · text+QR+contact overlay) · QR transparent via `mix-blend-multiply` · cream fade on photo left edge · **hero H1 reverted to `font-normal`** (Playfair italic 400 cocoa) per user's CSS sample |
| 5 | `5fa11c9` | booking right | tagline + QR + LINE id centered as a single stacked group · **email line removed** · **LINE id fixed** `coachaor.ca` → `coachaorca` |
| 6 | `0315a9a` | booking right | text+QR moved to cream whitespace next to the woman · `bg-white/25` overlay brightens portrait · objectPosition shifted to 75% |
| 7 | `018b1f8` | booking | right group bottom-aligned to SEND (grid `items-end` + text-group `justify-end`) |
| 8 | `c1c48ce` | booking right | shifted to `left-[18%] w-[42%]` for breathing room from form · objectPosition → 90% (model hugs right) |
| 9 | `8ef66e3` | booking | text group flush to **right edge** of photo (`right-0 w-[50%]`) · objectPosition flipped to 20% (model on left) · cream wash mirrored to right — matches Canva original |
| hover | `e96f672` | testimonials | bg image `group-hover:scale-[1.06]` + gradient lightens (700ms ease-out) |

## Layout decisions worth remembering

- **`text-mocha` IS dusty-blue (`#82939b`)** — the token name is misleading. `app/globals.css:23`. The hero subtitle, about italic quote, and BOOK A SESSION button all use it.
- **Hero H1 uses `font-normal`, not `font-bold`** (Playfair Display italic 400). Earlier feedback "make heavier" was a font-loading red herring — the original Canva sample is weight 400 too.
- **Service bullet types:** `subtitle` is always-shown secondary text (e.g. Online Course's Thai descriptions). `th` is a language-swap translation (e.g. Coach Training). They are NOT interchangeable.
- **Service-card CTAs** are pinned to the bottom of each card via `justify-between` on stacked layout; feature card keeps `justify-center` side-by-side.
- **Testimonial cards** use `min-h-[460px] md:min-h-[540px]` (no fixed aspect-ratio) so they grow to fit content on narrow viewports.
- **Booking section** has the woman on the LEFT (objectPosition 20%) and text/QR group flush RIGHT — opposite of what you'd guess from "form on left." This is the deliberate Canva layout.
- **QR transparent bg** uses `mixBlendMode: "multiply"` on the QR wrapper so the JPG's white background drops out against the woman's white shirt.

## Likely next steps when you resume

1. **Wait for the next feedback round** — coach sees the live URL, leaves Vercel Toolbar comments on PR #1.
2. **If round 10+ feedback arrives:** branch off `main` (post-merge) with a fresh `feedback-round-N` branch.
3. **If no more feedback:** treat current state as "done"; no further commits until something changes.

## Gotchas

- **Vercel alias-stickiness:** EVERY `vercel --prod` leaves `coach-aor-landing.vercel.app` stuck on the previous deployment. After every prod deploy, run `vercel alias set <new-deployment-host> coach-aor-landing.vercel.app` and curl the canonical URL for a build marker. This has happened 8 times in a row across rounds 2-9. See [[feedback-vercel-alias-stuck]] memory.
- **Don't trust transcript output for replies** — use the Discord `reply` tool. See [[feedback-discord-must-call-reply-tool]] memory.

## Key file references

- `app/_components/hero.tsx:35-99` — hero h1 + about quote (font-normal italic Playfair, mocha)
- `app/_components/services.tsx:160-260` — CardBody with feature vs stacked layout split
- `app/_components/services.tsx:6-12` — Bullet type with `th` vs `subtitle` split
- `app/_components/booking.tsx:55-180` — current layout: form left, photo right with text overlay on right edge
- `app/_components/testimonials.tsx:70-95` — figure with hover zoom + min-h instead of aspect-ratio
- `app/_components/footer.tsx:9-104` — uniform 32×32 social icons
- `app/globals.css:23` — `--color-mocha: #82939b` (dusty-blue token)
