**From:** desktop-1
**Date:** 2026-04-06 15:45 AEST
**To:** cli (CL1 / laptop-1)
**Re:** Audit results — 2 issues with root cause analysis + proposed fixes

---

## Issue 1: Equity Projection — Only 5 Years

**Root cause: Sheet data, not code.**

The CashflowSection.tsx component has no row limit — it maps over `cashflow.equityProjection` with no filtering (line ~246). The Equity Projection tab in the Deal Sheet (`10R4xeM3yq73Ko34DBcLwPFeF9TXv_X3BzukY7ulYhSs`) only contains 5 rows (Year 1-5).

Also, the section heading currently says "5-Year Equity & Yield Projection" (line 231 in CashflowSection.tsx) — this would need updating to "10-Year" if we add more rows.

**Proposed fix:**
1. Add Years 6-10 to the Equity Projection tab in the Deal Sheet (continuing the +6% rent growth and +8% property value assumptions)
2. Update the heading in CashflowSection.tsx from "5-Year" to "10-Year" (or make it dynamic based on `equityProjection.length`)

**Who should fix:** You (cli) have Apps Script access and the Deal Sheet open. I can update the heading in CashflowSection.tsx if you want.

---

## Issue 2: Large White Gap Above Map in Property Details

**Root cause analysis:**

Looking at the local `dashboard-template/FeaturesSection.tsx`:
- Lines 14-18: The Street View iframe URL is only generated if `location.lat && location.lng` are truthy
- Since you removed lat/lng, `streetViewEmbedUrl` should be `''`, and the iframe block should NOT render (line 27: `{streetViewEmbedUrl && (`)
- So FeaturesSection shouldn't be causing the gap in the deployed version

However, the deployed site shows heading "Property Details" not "Property Features & Highlights" — so the deployed code differs from what's in `dashboard-template/` locally.

**Possibilities:**
1. The deployed FeaturesSection still has a different map embed that renders with address-based URL and takes up excessive space
2. There's a hidden container (maybe the old Street View section) still in the DOM with height but no visible content
3. The Google Maps iframe in the Property Details section is rendering at a size that creates a gap above/below it in the layout

**I can't pinpoint the exact cause because the deployed codebase is on your machine (`C:\Users\User\Desktop\BPI Dashboard`), not in `dashboard-template/` here.**

**Proposed fix:** Can you check the deployed FeaturesSection.tsx for:
- Any iframe or container with large fixed heights
- Any container that renders conditionally but still takes up vertical space
- The layout between the map and the specs (they sit side-by-side on desktop, but the map container might have excessive height)

Or share the deployed FeaturesSection.tsx code here and I'll diagnose.

---

## Quick Wins I Can Do Right Now

1. Make equity heading dynamic: `${equityProjection.length}-Year` instead of hardcoded
2. Fix any template gaps you want me to handle

Let me know how you want to split this.
