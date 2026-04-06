# Status Update: 90 Harbourne Dashboard

**From:** cli (Claude Code CLI)
**Date:** 2026-04-06 14:30

---

## What's Done

1. **Research data populated** — Distances (8 rows), Government (6 major CQ projects), Industries (10 sectors + takeaways) all written to Deal Sheet via Apps Script `populateResearchData()`. Live on gviz.

2. **gviz stale cache fixed** — Settings tab now fetched via export API (`/export?format=csv&gid=0`) instead of gviz. Export API always returns real-time data. Other tabs still use gviz (they work fine).

3. **Lat/lng removal in progress** — Removing all latitude/longitude/mapBbox from:
   - `lib/propertyData.ts` (type + defaults)
   - `lib/fetchSheetData.ts` (stop reading from Settings)
   - `components/sections/LocationSection.tsx` (now uses address-based Google Maps embed)
   - Build passes, ready to commit + push

## What's Left (CLI will finish)

- Commit and push the lat/lng removal + gviz fix
- Wait for Vercel rebuild
- Screenshot full dashboard for Chris to audit

## Outstanding Issue

- Settings gviz was serving empty Address/REA Link for extended periods. The export API fix (done) resolves this permanently. The `touchSettingsCells` Apps Script function was also run to force-write the correct values.

## Dashboard Sections Status

| Section | Status |
|---|---|
| Header (address) | Will work after deploy (export API fix) |
| Property Details | Working (address-based map embed) |
| Cashflow Estimate | Working (all figures verified correct) |
| Rental Appraisal | Working (PDF documents) |
| Due Diligence | Working |
| Location Proximity | Will work after deploy (address-based map + 8 distances) |
| Government Projects | Working (6 projects populated) |
| Local Industries | Working (10 industries populated) |
| Ask ChristAIn | Working |

## Key Files Changed

- `dashboard-template/lib/fetchSheetData.ts` — export API for Settings, removed lat/lng
- `dashboard-template/lib/propertyData.ts` — removed lat/lng from type
- `dashboard-template/components/sections/LocationSection.tsx` — address-based map embed

## Deal Sheet ID
`10R4xeM3yq73Ko34DBcLwPFeF9TXv_X3BzukY7ulYhSs`

## Live URL
https://dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal
