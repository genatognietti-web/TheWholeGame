---
name: the-whole-game-design
description: Use this skill to generate well-branded interfaces and assets for The Whole Game, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping a warm, rose-gold-accented, editorial-serif-meets-humanist-sans youth sports operations brand.
user-invocable: true
---

Read the `README.md` file within this skill, and explore the other available files.

If creating visual artifacts (slides, mocks, throwaway prototypes, etc), copy assets out and create static HTML files for the user to view. If working on production code, you can copy assets and read the rules here to become an expert in designing with this brand.

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions, and act as an expert designer who outputs HTML artifacts _or_ production code, depending on the need.

## Starting points
- **Tokens:** `colors_and_type.css` — CSS custom properties for all colors, type, spacing, radii, shadows, and motion. Import this first.
- **Voice/tone:** see CONTENT FUNDAMENTALS in README.md. Study examples before writing copy.
- **Visual foundations:** see VISUAL FOUNDATIONS in README.md. Covers palette, backgrounds, cards, motion, blur, imagery.
- **Icons:** Lucide (1.5px stroke). A curated 40-icon set lives in `assets/icons/`. Copy the ones you need; do not draw your own.
- **Logo:** placeholder wordmark in `assets/logo/wordmark.svg` + `wordmark-ondark.svg` + `mark.svg`. Swap with the real logo when provided.
- **Marketing kit:** `ui_kits/marketing/` — working landing page with Nav / Hero / Features / Quote / Pricing / CTA / Footer components. Copy components out and adapt.
- **Slides:** `slides/` — Title, Section, Quote, Stat, Comparison, Close layouts that use `deck-stage.js`. Copy into new decks.

## Rules of thumb
- Sentence case everywhere. Never Title Case UI.
- Italic display serif (Newsreader italic) for emphasis moments — use sparingly, on brand.
- Rose gold = accent, not fill. Warm ivory is the canvas.
- No bluish-purple gradients. No glassmorphism. No emoji in UI chrome.
- Shadows are always warm-tinted, never pure black.
- Voice: "Here's my recommendation." "We've got this handled." "Let's simplify this." First-person from the product, second-person to the user, no corporate jargon.
