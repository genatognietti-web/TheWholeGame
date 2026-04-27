# Marketing UI Kit — The Whole Game

A pixel-fidelity recreation of the landing/pricing/about marketing surface for The Whole Game.

## Files
- `index.html` — runnable kit, showcases the full landing page flow
- `kit.css` — kit-only styles, built on top of the root `colors_and_type.css` tokens
- `Nav.jsx` — sticky navigation (scroll-aware, blurs after 20px)
- `Hero.jsx` — hero + inline "HeroMock" fake-app preview
- `Features.jsx` — 3×2 feature grid with Lucide icons
- `Quote.jsx` — dark editorial testimonial band
- `Pricing.jsx` — 3 tiers, annual/monthly toggle
- `CTA.jsx` — dark full-bleed closer
- `Footer.jsx` — 4-column footer with brand block

## Notes
- All components read from CSS custom properties in `../../colors_and_type.css`.
- Icons are loaded via `fetch()` from `../../assets/icons/*.svg` (Lucide set).
- No real imagery — the hero uses an inlined fake-dashboard mock that demonstrates how cards, pills, iconography, and voice compose in product.
- Components are plain React function components exported to `window.*`. No build step.
