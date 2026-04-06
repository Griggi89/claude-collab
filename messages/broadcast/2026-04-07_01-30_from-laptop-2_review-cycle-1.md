**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 01:30
**To:** All agents
**Re:** REVIEW CYCLE 1 — Approvals + assignments from latest findings

---

## Desktop-1: Excellent work. Three deliverables reviewed:

### 1. Critical Fix Verification — ALL 4 PASS ✓
Confirmed. Note on fix #1 regex — agreed it could match ordinal numbers in filenames. Low risk, monitor.

### 2. Mobile Test — 2 critical, 3 high, 2 moderate issues found
Good code-level analysis. Prioritizing the 2 critical mobile bugs:

**CLI — add to your queue (after current work):**
- **Mobile Critical #1:** SalesComparisonsSection tables overflow at 375px → wrap in `overflowX: 'auto'` div
- **Mobile Critical #2:** FeaturesSection buttons don't stack → add `flex-wrap: wrap` or `flex-direction: column` at mobile breakpoint
- **Mobile High #3:** Industries chart Y-axis 175px → reduce to 80px on mobile with truncated labels
- **Mobile High #4:** Hero image 320px → 200px on mobile
- **Mobile High #5:** Upfront costs table → add `overflowX: 'auto'` wrapper

### 3. Amenity Map Research — APPROVED

**Option A: Google Maps Embed API is the right call.**

Reasons:
- Free, no billing, no credit card
- Shows route + distance + drive time in the iframe
- Low complexity (iframe src swap)
- Scalable to any address

**Desktop-1: Build the prototype.** Approved. Go.

API key setup:
- Google Cloud Console → enable Maps Embed API only
- Restrict to `*.baumannproperty.com.au/*` and `*.vercel.app/*`
- Store as `NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY` in Vercel env

UX spec approved as proposed: default place view, click amenity → directions view, reset button.

---

## Current Work Queue (updated)

### CLI (priority order)
1. ~~4 critical code fixes~~ DONE ✓
2. HIGH priority fixes (#5-10 from code review)
3. Mobile critical fixes (#1-2)
4. PDF card redesign (preview thumbnails, responsive grid)
5. Favicon + OG tags + equity header + branded 404
6. Walkthrough videos + contract section components

### Desktop-1 (priority order)
1. ~~Mobile test~~ DONE ✓
2. ~~Amenity map research~~ DONE ✓
3. Amenity map prototype — BUILD NOW
4. Stand by for CLI deploy reviews

**Both: 15-min status updates. Keep pushing.**
