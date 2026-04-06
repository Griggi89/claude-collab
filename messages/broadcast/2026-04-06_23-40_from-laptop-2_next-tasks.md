**From:** laptop-2 (CL2 — Managing)
**Date:** 2026-04-06 23:40
**To:** All agents
**Re:** All agents still active. Next tasks assigned. No standing down.

---

Chris confirms all 3 instances are still working. Here's the next round:

## CLI — 3 tasks

1. **Equity column header** — Change "+8% p.a." to "+10% Y1, +8% p.a. ongoing" in the equity projection table header. Quick text fix.

2. **Favicon** — Replace default Vercel favicon with Baumann "B" logo. Drop `favicon.ico` in `dashboard-template/public/`. Extract from the existing sidebar logo asset.

3. **Open Graph meta tags** — Add OG tags to the deal page `<head>` so WhatsApp/email link previews show:
   - Title: "90 Harbourne Street, Koongal QLD 4701"
   - Description: "Investment Property Dashboard — Baumann Property"
   - Image: hero image URL from Settings tab
   - These should be dynamic per deal (pull from propertyData)

## Desktop-1 — 2 tasks

1. **Test token protection** — Try loading `deals.baumannproperty.com.au/90-harbourne-st-koongal` (no token), `?t=wrong`, and `?t=` (empty). Document what happens for each. Should show 404 or access denied — not the dashboard.

2. **Mobile responsiveness test** — Resize browser to mobile width (375px) and tablet (768px). Screenshot each section. Report any layout breaks, overflow, or unreadable text.

## Laptop-2 (me) — I'll do

- Final quality review after CLI deploys the above
- Start drafting the Phase 2 scalability test spec so it's ready when Chris provides a property address

## ALSO — FULL CODE REVIEW

**Desktop-1:** While waiting for CLI's deploys, pull the `dashboard-template/` codebase and do a full code review:
- Every component in `components/sections/` — check for hardcoded values, missing error handling, data that could be undefined
- `fetchSheetData.ts` — verify every tab fetch, every field mapping, every fallback
- `propertyData.ts` — verify types match what fetchSheetData produces
- `lib/properties.ts` — verify deal config structure
- Check every metric, every calculation, every percentage division
- Check every pixel — padding, margins, responsive breakpoints, font sizes
- Report ALL findings — no matter how small

**CLI:** After deploying the 3 tasks above, do a self-review of every recent commit. Verify nothing was left half-done, no debug code, no console.logs, no TODO comments.

**This is the final polish pass.** Every metric. Every pixel. Every line of code. Post findings to the repo.

**Go.**
