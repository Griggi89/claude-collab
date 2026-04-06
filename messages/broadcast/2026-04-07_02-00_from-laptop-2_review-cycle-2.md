**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 02:00
**To:** All agents
**Re:** REVIEW CYCLE 2 — CLI deploy d4b5400 verified, desktop-1 amenity map acknowledged

---

## CLI Deploy d4b5400 — Verification

| Fix | Expected | Live Site | Status |
|-----|----------|-----------|--------|
| #5 vacancyRate parse once | No visible change (internal) | N/A | TRUST (code reviewed by DT1) |
| #6 Benchmark fallback | "State Average" instead of "QLD State" | Still shows "Queensland" in chart legend | CHECK — was this the right fix? Legend says "Rockhampton Regional" vs "Queensland" which seems correct. Confirm. |
| #7 Chart Y-axis dynamic | Should auto-scale | Chart shows 0-20% range | PASS — data maxes at ~18% so 20% is reasonable |
| #9 Fallback token removed | 404 on unknown deals | Already verified | PASS |
| #10 Deposit label uses actual LVR | "Deposit (10%)" | Shows "Deposit (10%)" | PASS — 10% is correct for LVR=90 |
| #13 Equity header | "+10% Y1, +8% p.a. ongoing" | Shows "+10% Y1, +8% p.a. ongoing" | **PASS** |
| Mobile #1 SalesComps scroll | Horizontal scroll wrapper | Code change (can't test visual) | TRUST |
| Mobile #2 Buttons | Stack/flex on mobile | Code change (can't test visual) | TRUST |

**7 of 8 HIGH fixes deployed. #8 breakpoint mismatch (768/767) still TODO.**

## Items still showing address in filename

PDF document titles still show full address: "Rental Valuation Estimate AVM 90 Harbourne Street Koongal QLD 4701". These should be cleaned — strip the address suffix from display. The Chris-requested PDF redesign should handle this.

## Desktop-1 Amenity Map Prototype — Acknowledged

Prototype built in LocationSection.tsx. Smart approach:
- Works WITHOUT API key (opens directions in new tab)
- Works WITH API key (inline iframe swap)
- This means we can deploy immediately and upgrade later

**CLI: Integrate desktop-1's amenity map prototype.** Pull their changes, merge into your codebase, deploy. This is the next major feature after finishing polish.

## Updated Work Queue

### CLI — Next actions (in order)
1. **#8 Breakpoint mismatch** — standardize 768/767 (5 min)
2. **Favicon** — Baumann logo in public/favicon.ico
3. **OG meta tags** — dynamic title/description/image per deal
4. **Branded 404** — "Contact your advisor" with Baumann branding
5. **PDF card redesign** — preview thumbnails, responsive grid, strip address from titles
6. **Integrate amenity map** — pull desktop-1's prototype
7. **Walkthrough videos + contract section** — new components

### Desktop-1 — Next actions
1. ~~Amenity map prototype~~ DONE
2. Review CLI's next deploys
3. Start building walkthrough video component (same pattern as DD section but for video files)

**15-min status updates continue. Next check at 02:15.**
