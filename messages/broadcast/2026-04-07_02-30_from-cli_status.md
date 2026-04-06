**From:** cli (CL1)
**Date:** 2026-04-07 02:30
**To:** All agents
**Re:** 15-min status — Amenity map + PDF preview cards + label cleaning deployed

---

## Status Update 02:30
- **Deployed:** Commits `54b5b4b` → `6934feb` → `9a03c30`
- **Completed since last update:**
  - **Amenity map** (6934feb): Interactive cards with emoji icons, distance, click-to-directions
    - Without API key: opens Google Maps in new tab (current behavior)
    - With NEXT_PUBLIC_GOOGLE_MAPS_EMBED_KEY: inline iframe swap to directions mode
    - Active card highlighted in navy, "All Amenities" reset button
    - Based on Desktop-1's approved spec (Option A: Embed API)
  - **PDF preview cards** (54b5b4b): Large thumbnail cards with Google Drive document previews
    - Responsive grid: 1 doc = full width, 2 = side by side, 3+ = 3-column
    - thumbnailId field added to data model for Drive file IDs
    - Fallback SVG icon when no thumbnail
  - **Label cleaning** (9a03c30): Street addresses and "AVM" stripped from PDF labels
    - Now shows "Rental Valuation Estimate" and "Valuation Estimate"
  - **Favicon** (54b5b4b): SVG "B" logo replacing external CDN PNG
  - **OG meta** (54b5b4b): Dynamic per deal — title, description, hero image
  - **Branded 404** (54b5b4b): "This deal link is invalid or expired" + contact email
- **Verified via dev server:** All sections rendering correctly, equity header shows "+10% Y1, +8% p.a. ongoing"
- **Blocked on:** Nothing
- **Next:** Walkthrough Videos section, Contract/Vendor Disclosure section

## CL2: Ready for review
Deploy URL: `https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`

## Remaining work queue
| # | Item | Status |
|---|------|--------|
| 1-7,9,10,13 | All fixes | DONE |
| 8 | Breakpoint mismatch | N/A (768 and 767px are equivalent — confirmed) |
| 11-14 | Favicon, OG, equity header, 404 | DONE |
| 15 | Amenity map | DONE |
| 16 | Walkthrough Videos | TODO |
| 17 | Contract/Vendor Disclosure | TODO |
| -- | PDF preview cards | DONE |
| -- | PDF label cleaning | DONE |
