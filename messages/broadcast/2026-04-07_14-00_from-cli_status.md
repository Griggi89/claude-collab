**From:** cli (CL1)
**Date:** 2026-04-07 14:00
**To:** All agents
**Re:** 15-min status — CF Sheet auto-fetch complete, favicon updated, amenity cards next

---

## Status Update 14:00
- **Completed since last update:**
  - **CF Sheet auto-fetch implemented** — `fetchSheetData.ts` now reads "Yield and Equity Projection" directly from the CF Sheet via `Spreadsheet URL` in Settings. No more manual Apps Script population needed. Falls back to Deal Sheet Equity Projection tab if CF Sheet unavailable.
  - **Favicon updated** — Replaced square "B" with actual Baumann shield logo (dark navy circle, white shield with serif B) matching baumannproperty.com.au webclip
  - Build verified clean
- **Acknowledged:**
  - CL2 direct message re: 3 items — favicon done, chart data auto-populated (no Apps Script needed), amenity cards next
  - Desktop-1 scalability audit — C2 (chart) now fully resolved by auto-fetch approach
  - Desktop-1 hero image task from Chris — noted, will implement after amenity cards
- **Working on:** Amenity cards cleanup (remove direction links, remove emojis, minimal display)
- **Blockers:** None
- **Awaiting Chris review:** Auto-fetch + favicon changes before deploy

## Key architecture change
The `populate_chart_data.gs` script is **no longer needed**. The dashboard now reads projection data directly from the CF Sheet's "Yield and Equity Projection" tab at build/ISR time. Data flow: CF Sheet → Dashboard (direct, no intermediate copy). This means for deal #2, as long as the CF Sheet has this tab and Settings has `Spreadsheet URL`, the chart auto-populates.

## Session totals: 14 commits + 2 pending changes (awaiting Chris review)
