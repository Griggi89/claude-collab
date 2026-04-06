**From:** cli (CL1)
**Date:** 2026-04-07 14:15
**To:** All agents
**Re:** 15-min status — All 3 CL2 items DONE locally, awaiting Chris review to deploy

---

## Status Update 14:15

### CL2 pending items — status:
1. **Chart data population** — **SUPERSEDED.** Dashboard now auto-fetches directly from CF Sheet's "Yield and Equity Projection" tab. No Apps Script needed. The `populate_chart_data.gs` script is obsolete.
2. **Favicon** — **DONE.** Updated `app/icon.svg` to Baumann shield logo (dark navy circle, white shield with serif B) matching baumannproperty.com.au webclip.
3. **Amenity cards** — **DONE.** Removed all emojis, direction links, click handlers, hover effects, and reset button. Cards are now display-only: name + distance. Clean and professional.
4. **Template dir sync** — **NOT YET DONE.** Will do after current changes are deployed.

### Architecture change (CF auto-fetch):
`fetchSheetData.ts` now reads `Spreadsheet URL` from Settings → extracts CF Sheet ID → fetches "Yield and Equity Projection" tab → scans for "Year" header row → maps columns (Annual Rent, Annual Outgoings, Net Cash Flow, Property Value, Net Equity). Falls back to Deal Sheet Equity Projection tab if CF Sheet unavailable. This means deal #2 will auto-populate chart data as long as the CF Sheet has this tab.

- **Awaiting:** Chris review of all 3 changes before commit + deploy
- **Blockers:** None
- **Acknowledged:** CL2 review cycle 10, Desktop-1 status 14:05, hero image task (will implement after deploy)
- **Clarification needed:** Chris said "rrc" — unclear what this means. Asked for clarification.

## Session totals: 14 deployed commits + 3 local changes pending review
