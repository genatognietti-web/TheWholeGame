# The Whole Game — Design System

> An AI-powered operations platform for youth sports organizations running on passion, spreadsheets, and sheer willpower.

The Whole Game simplifies the behind-the-scenes chaos of youth athletics — HR, onboarding, communication, and compliance — into one intelligent system that works the way coaches, parents, and staff actually need it to. Mobile, web, and in-person workflows meet in a single operational layer so organizations can spend less time on logistics and more time on the game.

---

## Sources

This system was designed from a written brief and tone notes only. The attached repo `genatognietti-web/ellara-agent` was found empty (a 14-byte placeholder README) — no existing code or visuals were available to reference. The user opted to design from scratch using the brief.

If you have brand assets, Figma files, or product screenshots to merge in later, drop them in `sources/` and re-run the design-system skill to refine.

## What The Whole Game is (right now)

The Whole Game sells **downloadable HR and compliance document bundles** for youth sports organizations. Customers create an account, purchase a bundle, and receive instant access to a Google Drive folder of 9 ready-to-customize documents.

**Three bundles:**
- **Bundle 1 · $97** — Youth Sports Coach HR Starter (9 docs: onboarding checklist, code of conduct, incident templates, escalation paths, etc.)
- **Bundle 2 · $122** — Parent & Athlete Conduct (9 docs: parent code of conduct, behavior violation response, conflict resolution, etc.)
- **Bundle 3 · $147** — Compliance & Incident Master System (9 docs: compliance framework, incident classification, safety standards, liability protection, etc.)
- **Full Stack · $297** — All three bundles, save $69

**What The Whole Game does NOT do right now:**
- No AI operations, email drafting, or recommendations
- No compliance monitoring or tracking
- No registration management
- No scheduling or roster management

These are aspirational roadmap features — the product voice and brand are written to support that future direction, but the current product is document templates only. Do not mock or imply live software features in current marketing surfaces.

## Products covered (current)

- **Marketing Website** — landing page, bundle summaries, pricing, waitlist. See `ui_kits/marketing/`.
- **Onboarding flow** — account creation → bundle selection → payment → Google Drive access. See `ui_kits/onboarding/`.

Admin dashboard, mobile app, AI ops features are future scope — noted in SKILL.md for when the product expands.

---

## Content fundamentals

The Whole Game's voice is **a trusted operations partner who happens to understand youth sports.** Not a cheerleader, not a corporate vendor, not an AI flexing its own cleverness. More like the one parent on the board who used to run ops at a real company and now quietly keeps the league from falling apart.

### Principles

1. **Relatable, credible, supportive** — we've seen the 9pm email from the volunteer treasurer. We've been in the group chat where nobody knows who's bringing the snacks. Write like we remember.
2. **Straightforward, never preachy** — short sentences. Plain words. No "empower," no "revolutionize," no "unlock."
3. **Consistent, not corporate-stuffy** — contractions are fine ("we've," "you're"). Oxford commas on. Em dashes welcome.
4. **Recommendation, not instruction** — "Here's what we'd do" beats "You must do this." We lean in, not down.

### Voice examples

✅ On brand
- "Here's my recommendation: start with background checks."
- "We've got this handled — you'll see a draft in your inbox tonight."
- "Let's simplify registration this season."
- "Three families still owe fees. Want me to send a nudge?"
- "The ref cancelled on Saturday. I pulled three backups."

❌ Off brand
- "Empower your organization with AI-driven insights." (corporate)
- "You need to complete this task." (instructional, bossy)
- "Revolutionize youth sports ops!" (hypey)
- "As an AI, I can help you…" (self-referential)
- "🔥 Let's GOOO! 🔥" (performative)

### Mechanics

- **Person:** First-person singular when The Whole Game speaks ("I pulled three backups"). First-person plural ("we've got this") for the team/company voice. Always "you" for the reader.
- **Casing:** Sentence case everywhere — headings, buttons, menu items. Never Title Case UI. Proper nouns stay capitalized.
- **Punctuation:** Oxford comma. Em dashes (—) for asides and rhythm. Periods on standalone sentences; optional on single-line button/label copy.
- **Numbers:** Numerals for anything countable ("3 families," "12 practices"). Spell out at the start of a sentence.
- **Emoji:** Avoid in product UI and marketing body. Rare, purposeful use in notification copy is OK (e.g. a single ✅ in a confirmation toast). Never in headlines.
- **Acronyms:** Spell out on first use per page. "Youth sports organization (YSO)."
- **Jargon:** Sports terms are fine when accurate ("roster," "waiver," "background check"). Avoid business jargon ("stakeholder," "leverage," "synergy").

### Taglines & headline patterns

- **Primary tagline:** "Turn chaos into culture. One decision at a time."
- "The operational layer for youth sports."
- "Less logistics. More game."
- "One system. Every season."
- "Built for the people holding it all together."

---

## Visual foundations

See `colors_and_type.css` for the token source of truth. The design system previews in the Design System tab give visual references for every token group.

### Palette

Warm-neutral base, with rose gold / blush pink as a recurring brand signature (moderate presence — not pink-forward, but always in view).

- **Ink** (`--ink-*`) — near-black for text, built warm (slight red-brown undertone, not pure gray).
- **Ivory** (`--ivory-*`) — off-white backgrounds. Not #FFFFFF. A warm paper tone.
- **Clay** (`--clay-*`) — warm neutral mid-tones for borders, dividers, subtle surfaces.
- **Blush** (`--blush-*`) — signature. Used for primary actions, accents, highlights, section markers.
- **Rose** (`--rose-*`) — deeper pink for hover, emphasis, data viz.
- **Sage** (`--sage-*`) — muted green for success, positive states.
- **Amber** (`--amber-*`) — warm yellow for warnings, in-progress.
- **Rust** (`--rust-*`) — muted red for errors, destructive.

Semantic tokens (`--fg-primary`, `--bg-surface`, `--border-subtle`, etc.) map onto the palette and are what components should reference — never raw hex.

### Typography

- **Display** — Newsreader (editorial serif, warm, slightly condensed at large sizes). Used for H1/H2 on marketing, section headers, pull quotes. Italics used intentionally for emphasis and pull quotes (Newsreader italic is gorgeous).
- **UI / Body** — Geist (modern neutral sans, high legibility, humanist enough not to feel cold). Used for all UI, body copy, buttons, forms, navigation.
- **Mono** — JetBrains Mono. Reserved for code samples, numbers-in-tables, receipts.

Scale is modular (1.2 ratio on body, 1.333 on display). Body default 16px. Display tops out at ~72px on marketing.

### Spacing & layout

- **4px base grid.** Spacing tokens go `--space-1` (4px) through `--space-16` (128px).
- **Max content width** ~1200px on marketing. Prose max-width ~640px for readability.
- **Generous vertical rhythm** — marketing sections use `--space-14`–`--space-16` top/bottom padding. Cards breathe.
- **Fixed elements** — sticky nav on marketing, collapses on scroll. No floating CTAs that chase the user.

### Backgrounds

- Primary background is warm ivory (`--ivory-50`), not white.
- Section variation via tint, not gradient: ivory → cream → clay-50 → deeper clay for hero bands.
- Rose gold is used sparingly as a **background wash** only on hero-like sections (blush-50 tint, not gradient).
- **No heavy gradients.** No bluish-purple gradients ever. A single subtle radial wash behind the hero is the one exception.
- Photography, when used, is warm-toned — golden hour, natural light, grain-friendly. B&W allowed for editorial moments.
- Subtle paper/noise texture on hero sections only — 3% opacity, imperceptible except at edges.

### Cards, borders, shadows

- **Cards** — 1px border in `--border-subtle` (clay tone), 12px radius, flat fill. Shadow only on hover/elevated states.
- **Shadows** — warm-tinted, not black. `--shadow-sm` (0 1px 2px rgba(45,30,25,0.06)), `--shadow-md` (0 4px 12px rgba(45,30,25,0.08)), `--shadow-lg` (0 12px 32px rgba(45,30,25,0.10)). Always tinted toward ink, never pure black.
- **No inner shadows** except on form inputs at rest (very subtle, 1px inset highlight on top, clay shadow on bottom — optional).
- **Radii** — `--radius-sm` 6px (buttons, inputs), `--radius-md` 12px (cards), `--radius-lg` 20px (modals, hero panels), `--radius-full` 9999px (pills, avatars).
- Avoid the "rounded corners + left-border accent" card pattern entirely.

### Interaction states

- **Hover** — darken-fills by ~6% (via `color-mix(in oklab, … black 6%)`) or lift via shadow-md + 1px translate-y-up. Never brighten. Never change hue.
- **Press** — scale(0.98) + shadow flatten. ~80ms.
- **Focus** — 2px `--blush-400` outline, 2px offset. Visible on keyboard only (`:focus-visible`).
- **Disabled** — 40% opacity, `cursor: not-allowed`, no hover response.
- **Transitions** — 150ms ease-out on color/opacity; 200ms `cubic-bezier(0.32, 0.72, 0, 1)` on transform/shadow. No bounces. No long fades. Motion is confident and quick.

### Transparency & blur

- Sticky nav uses `backdrop-filter: blur(12px)` with a 70% ivory fill when scrolled. Above the fold it's fully opaque to match the page.
- Modal scrims use rgba(45,30,25,0.40) — ink-tinted, not black.
- No frosted glass cards, no glassmorphism elsewhere.

### Tone of imagery

- Warm, candid, slightly grainy. Natural light, never studio.
- Kids, coaches, parents mid-motion — not posed hero shots.
- B&W used for quote sections and testimonials (reads as "archival," fits the editorial serif).
- Decorative illustrations (if used) are minimal line work in ink on ivory — field diagrams, whistles, clipboards — rendered as SVG with 1.5px strokes to match icons.

---

## Iconography

**System:** [Lucide](https://lucide.dev/) — 1.5px stroke, rounded caps, clean geometry. Matches our humanist sans and warm editorial serif without clashing.

**Delivery:** Loaded from CDN via `lucide@latest/dist/umd/lucide.js`. Also available as inline SVG copies in `assets/icons/` for static mocks and slides (a curated subset of ~40 icons — the ones we actually use).

**Sizes:** 16px (inline with text), 20px (buttons, form affordances), 24px (nav, card headers), 32px+ (feature sections, empty states). Stroke stays 1.5 regardless.

**Color:** Icons inherit `currentColor`. In buttons they match button text. As standalone affordances they use `--fg-secondary`. Blush is reserved for state (success checkmark uses sage, selected-state icons use blush).

**Emoji usage:** Avoid in UI chrome and marketing. Rare purposeful use in notification/system-voice copy only (one ✅, one 🎉 at most, never decorative). Never in headlines.

**Unicode as icons:** No. Use Lucide.

**Custom marks:** The placeholder wordmark is in `assets/logo/`. No symbol yet — a real symbol should be commissioned. Until then, the wordmark alone carries brand presence.

---

## Index

### Root
- **`README.md`** — this file (voice, visual foundations, iconography)
- **`colors_and_type.css`** — token source of truth (CSS custom properties for color, type, spacing, radii, shadows, motion)
- **`SKILL.md`** — Claude/Agent Skills entry point
- **`assets/`**
  - `assets/logo/` — placeholder wordmark (on ivory, on ink) + mark
  - `assets/icons/` — 40-icon curated Lucide set, copied as SVGs
- **`preview/`** — Design-System tab cards (colors, type, spacing, components, brand)
- **`ui_kits/marketing/`** — Marketing website UI kit
  - `index.html` · runnable landing page
  - `kit.css` · kit styles
  - `Nav.jsx` · `Hero.jsx` · `Features.jsx` · `Quote.jsx` · `Pricing.jsx` · `CTA.jsx` · `Footer.jsx`
- **`slides/`** — 16:9 deck template
  - `index.html` · `deck-stage.js` · `slides.css`
  - `TitleSlide.jsx` · `SectionSlide.jsx` · `QuoteSlide.jsx` · `StatSlide.jsx` · `ComparisonSlide.jsx` · `CloseSlide.jsx`

### Fonts note

Fonts are loaded from Google Fonts CDN (Newsreader, Geist, JetBrains Mono) in `colors_and_type.css`. If you want self-hosted files, drop them in `fonts/` and the CSS will prefer local.

### What's next / what to iterate on

1. **Real logo + symbol.** Current wordmark is a placeholder.
2. **Photography.** Imagery is placeholder-only. Real youth sports photography (warm, candid) would lift marketing mocks significantly.
3. **Figma / codebase.** If the real product ships with its own visual direction, replace tokens here with the real ones.
4. **Mobile & admin surfaces.** Add UI kits for the parent/coach mobile app and the admin dashboard once scoped.
