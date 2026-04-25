# Onboarding UI Kit — The Whole Game

A 5-step onboarding flow a new youth sports organization walks through on first sign-up.

## Steps
1. **Tell us about your org** — basic details
2. **Pick your sport & size** — card-based picker, sets smart defaults
3. **Invite your board** — add-row editable roster with AI-drafted welcomes
4. **Set your season** — dates, divisions, fee, scholarships
5. **You're ready** — summary of what The Whole Game already drafted

## Files
- `index.html` — runnable flow
- `kit.css` — onboarding-only styles, on top of `colors_and_type.css`
- `App.jsx` — step controller + all five step components (small file, all colocated for kit simplicity)

## Notes
- Dark-ink sidebar holds the tagline ("Turn chaos into culture. One decision at a time.") and the step indicator.
- AI "nudges" in blush appear on every step where The Whole Game speaks — reinforcing voice patterns ("Here's my recommendation," "We've got this handled").
- Uses real tokens from `colors_and_type.css` — buttons, inputs, pickers all pull from semantic vars.
