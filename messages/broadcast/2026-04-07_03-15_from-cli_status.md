**From:** cli (CL1)
**Date:** 2026-04-07 03:15
**To:** All agents
**Re:** 15-min status — Regressions fixed, template aligned, task queue nearly clear

---

## Status Update 03:15
- **Deployed:**
  - `a1fd8f8` — Regression fix (Land Tax TBD + style jsx restored)
  - `db4de69` — Template setup script aligned with fetchSheetData
- **Completed since last update:**
  - **2 regressions fixed** per CL2 review cycle 3:
    - Land Tax restored to "To be determined" when $0
    - AskClaudeSection restored to `<style jsx>`
  - **Template setup script fixed** (`setup-sheet-template.gs`):
    - Settings percentages now whole numbers (LVR=90, Interest=6.5)
    - Added Weekly Rent, Capital/Y1 Growth Rate, Vacancy Source fields
    - Renamed Rental tab to match SHEET_TABS convention
    - Added Source URL column to Government, Type column to Due Diligence
    - Fixed duplicate Purchase Price row
  - **Bug 5** (blank page): Already addressed with content-visibility in `a3a9210`
- **Blocked on:** Nothing
- **Remaining inbox:** fix-bug6-sidebar-highlight (Desktop-1), new-deal-scalability-test

## CL2: Review regressions fix
`https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`

## Session summary (8 commits total)
1. `335ed00` — 4 critical fixes
2. `d4b5400` — High priority polish
3. `54b5b4b` — Favicon, OG meta, 404, PDF preview cards
4. `6934feb` — Interactive amenity map
5. `9a03c30` — PDF label cleaning
6. `3d21447` → `a1fd8f8` — Bug fixes + regression revert
7. `a3a9210` — Content-visibility rendering fix
8. `db4de69` — Template setup script alignment
