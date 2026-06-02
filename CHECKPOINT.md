# Checkpoint — Coach Aor CA landing (2026-06-02, post round 18)

> Status: 18 feedback rounds shipped + multiple in-flight PRs from today's session.
> Resume order when context resets: this file → REVIEW-NOTES.md → README.md → recent `git log` → PR list.

## State of the world

- **Live (prod):** https://coach-aor-landing.vercel.app  ·  also `coach-adi-landing.vercel.app`
- **Repo:** stamp44101/coach-aor-landing
- **Branch state (right now):**
  - `main` — through `6eeed7b` README rewrite (= post round 9 + tag `v1.0-feedback-round-9` on the merge commit `803a40f`)
  - PR #2 `nav-mobile-lang-toggle` — **MERGED** (round 10)
  - PR #3 `btn-font-size-bump` — OPEN, deployed to prod (round 11)
  - PR #4 `thai-text-wrap` — OPEN, deployed (round 12)
  - PR #5 `cursor-pointer-clickables` — OPEN, deployed (round 13)
  - PR #6 `services-feature-pixel-perfect` — OPEN, deployed; this branch holds rounds 14-18 of services iterations
- **Latest prod deployment** = whichever branch was last `vercel --prod` (right now: `services-feature-pixel-perfect`, commit `5f60a68`)
- **Tag:** `v1.0-feedback-round-9` on `803a40f` (restore point)

## Round-by-round history

### Rounds 1–9 + hover fx (merged to main as `803a40f`)

| Round | Commit | Change |
|---|---|---|
| 1 | `8438dbc` | Brand favicon (CA monogram) + REVIEW-NOTES |
| 2 | `dd5102e` | dusty-blue hero/about subtitles · service bullets centered · TH-only translations · brighter testimonial bg · SEND filled full-width · uniform 32×32 social icons |
| 3 | `bc5ff47` | service-card CTAs aligned at bottom · testimonial cards grow to fit text · booking full-width seamless bg · hero H1 bolder (later reverted) · about quote 2 lines |
| 4 | `1c55b13` | booking restructured to Canva (photo right · text+QR overlay) · QR transparent via mix-blend-multiply · cream fade on photo left edge · **hero H1 reverted to font-normal** per CSS sample |
| 5 | `5fa11c9` | booking right center group · email line removed · LINE id fixed `coachaorca` (no dot) |
| 6 | `0315a9a` | text+QR moved to whitespace next to woman · `bg-white/25` overlay · objectPosition 75% |
| 7 | `018b1f8` | grid items-end + right-group justify-end → LINE id aligned with SEND |
| 8 | `c1c48ce` | text-group shifted `left-[18%] w-[42%]` for breathing · objectPosition 90% |
| 9 | `8ef66e3` | text flush to `right-0 w-[50%]` · objectPosition flipped to 20% (woman on left) |
| hover | `e96f672` | testimonial bg `group-hover:scale-[1.06]` + gradient lightens (700ms ease-out) |

### Rounds 10–18 (today's session — branches not all merged yet)

| Round | Branch / Commit | Change |
|---|---|---|
| 10 | `nav-mobile-lang-toggle` → MERGED `ec11489` | Mobile drawer: TH/EN toggle moved up under menu list (was bottom with BOOK A SESSION) |
| 11 | PR #3 `btn-font-size-bump` `e0c6ffb` | CTA font bumps text-[11/12]px → text-[13]/text-sm: nav header, hero pill, about outline, services CreamPill, booking SEND |
| 12 | PR #4 `thai-text-wrap` `d01dffe` | text-balance on h1/h2/h3 + text-pretty on paragraphs · globals adds `:lang(th)` block · LangProvider already syncs html[lang] so browser Thai dictionary segments words |
| 13 | PR #5 `cursor-pointer-clickables` `85e7596` | cursor-pointer on all interactive elements · globals fallback `button:not(:disabled) { cursor: pointer }` · Tailwind v4 preflight strips UA pointer |
| 14 | PR #6 `aadd7fb` | Services feature pixel-perfect: Our Services → sans-serif regular smaller · Private/Coaching 2-line · disc bullets bottom-left · 2-line italic meta + smaller wider-tracking BOOK bottom-right |
| 14b | PR #6 `9b5a466` | Stacked cards rewritten to absolute spec: title `top-[35%]` center · bottom row `absolute bottom-[30] left-[30] right-[30]` · `<ul list-disc>` · dark gradient overlay (top→bottom 20%→40%→60%) |
| 15 | PR #6 `790dcbb` → `f5e02aa` → `971ccbe` → `59a915a` → `9d7a0ab` | Feature focal iteration: 75 → 77 → aspect lock (`aspect-[3/2]` mobile, `md:aspect-[12/5]` desktop) → 42 → **60% (final)**. Aspect lock fixed inconsistency across desktop widths |
| 16 | PR #6 `1cc88c0` | Feature meta+CTA: switched from items-end/text-right to **items-start/text-left** so "Online session" and "Duration: 60-90 minutes per session" share a left edge · removed `smaller` flag so button back to 13-14px |
| 17 | PR #6 `ee18d7a` | Mobile fix: feature `aspect-[3/4]` (was 228h, now 456h) · both feature + stacked bottom rows go `flex-col items-center` on mobile, `md:flex-row md:justify-between` on desktop · bullets now 157-302px wide instead of 84-97px broken-wrap |
| 18 | PR #6 `5f60a68` | Mobile button alignment: meta+CTA column switched to `items-center md:items-start` + `text-center md:text-left` · all 5 cards' buttons now centerOffset=0 (was -26 to -37px off-center on cards with long meta) |

## Layout decisions that must NOT regress

1. **`text-mocha` IS dusty-blue (`#82939b`)** — token name misleading. `app/globals.css:24`. Hero subtitle, about italic quote, hero+nav button all use it.
2. **Hero H1: `font-normal`, not `font-bold`** (Playfair italic 400). Original Canva CSS sample is weight 400.
3. **Service bullet types**: `subtitle` = always-shown secondary; `th` = language-swap. NOT interchangeable.
4. **Service feature card aspect**: `aspect-[3/4]` mobile · `md:aspect-[12/5]` (2.4:1) desktop — never `min-h` because aspect drifts across widths.
5. **Feature card focal**: `center 60%` — Y<50 gives only foliage, Y>80 crops heads completely. Source jpg has people in lower 40-60% of frame.
6. **Stacked cards layout**: `absolute top-[35%]` title+desc · `absolute bottom-[24/30px] left-[20/30px] right-[20/30px]` bottom row · disc bullets via `<ul list-disc>` · subtle dark gradient overlay (darkest at middle/bottom).
7. **Mobile bottom row**: stacks vertically with `items-center` (button centered) — desktop uses `md:flex-row md:justify-between md:items-start` per spec.
8. **Booking section**: woman on LEFT (objectPosition 20%) · text/QR flush RIGHT · LINE id baseline = SEND button.
9. **QR transparent**: `mixBlendMode: "multiply"` on QR wrapper — white JPG bg drops out against woman's white shirt.
10. **Testimonial cards**: `min-h-[460px] md:min-h-[540px]` (no aspect lock) so they grow to fit text on narrow viewports.
11. **Thai wrap**: requires `lang="th"` on html (LangProvider does it) + `:lang(th)` CSS rules + `text-balance`/`text-pretty` utilities. Combined effect = browser uses Thai dictionary segmenter.

## Recurring gotchas

- **Vercel alias-stickiness:** EVERY `vercel --prod` leaves `coach-aor-landing.vercel.app` on the previous deployment. Always run `vercel alias set <new-host> coach-aor-landing.vercel.app` after and curl-verify a marker. Has happened consistently every deploy. See [[feedback-vercel-alias-stuck]].
- **Tailwind v4 preflight resets `cursor` on buttons** — needs explicit `cursor-pointer` or a globals rule.
- **Discord plugin lacks some Discord API verbs** — for those, call REST directly with the bot token at `~/.claude/channels/discord/.env`. See [[episode-2026-05-31-discord-thread-via-rest]].
- **Don't trust raw transcript output for Discord replies** — must use the `reply` tool. See [[feedback-discord-must-call-reply-tool]].
- **god-eye screenshot can timeout** on font load — first retry after `time.sleep(3)` usually succeeds.
- **`obectPosition` Y direction:** Y=0% shows TOP of source · Y=100% shows BOTTOM · contrary to "Y=high = focal high" intuition.

## How to run / deploy

```bash
npm run dev        # http://localhost:3001 (3000 if free)
npx tsc --noEmit   # type check
npm run build      # production build

vercel --prod      # deploy from current branch
# Then ALWAYS:
vercel alias set <newly-deployed-host>.vercel.app coach-aor-landing.vercel.app
curl -sS https://coach-aor-landing.vercel.app/ | grep -oE '<marker-from-latest-commit>'
```

## Key file references

- `app/_components/lang.tsx:27` — html[lang] sync (foundation for Thai dictionary segmenter)
- `app/_components/nav.tsx` — sticky header + mobile drawer (TH/EN toggle now under menu items, cursor-pointer on toggles + X + backdrop)
- `app/_components/hero.tsx:36-99` — hero h1 (font-normal italic Playfair, text-balance) + about quote (text-mocha, 2-line br)
- `app/_components/services.tsx:42-55` — feature data (`Private\nCoaching` 2-line title, multi-line meta, objectPosition 60%)
- `app/_components/services.tsx:170-340` — CardBody with feature vs stacked branches; absolute layout for stacked
- `app/_components/services.tsx:152-180` — CreamPill (smaller variant for spec-shaped stacked cards)
- `app/_components/services.tsx:6-12` — Bullet type with `th` vs `subtitle` split
- `app/_components/testimonials.tsx:72-95` — figure with `group-hover:scale-[1.06]` + min-h instead of aspect
- `app/_components/booking.tsx:60-180` — form left · photo right with text overlay on right edge · QR mix-blend-multiply
- `app/_components/footer.tsx:9-104` — uniform 32×32 social icons (4 rounded squares)
- `app/globals.css:23-65` — `--color-mocha` dusty-blue · `:lang(th)` block · `text-wrap: balance` on h1-h3 · `button:not(:disabled) { cursor: pointer }` fallback

## Open PRs awaiting merge

- #3 button font bump
- #4 thai text wrap
- #5 cursor pointer
- #6 services pixel-perfect (5+ rounds of iteration, biggest one)

All four deployed to prod sequentially. Could squash-merge in order or merge-commit each.
