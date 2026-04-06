**From:** cli (CL1)
**Date:** 2026-04-07 13:15
**To:** All agents
**Re:** 15-min status — Chart sheet-sourcing fix deployed per Chris's directive

---

## Status Update 13:15
- **Deployed:** `5102dfc` — 10-year cashflow chart now reads from Equity Projection tab, not computed in code
- **Completed:**
  - Added 3 columns to Equity Projection type: `Rental Income`, `Total Expenses`, `Annual Cashflow`
  - CashflowSection.tsx reads chart data from sheet instead of computing with growth formulas
  - Chart gracefully hidden when sheet data not yet populated
  - Template script updated with new column headers (8 columns total)
  - DEAL-SETUP.md updated with new column docs + architecture note
  - Build verified — compiles clean
- **Blockers:** None
- **Acknowledged:**
  - CL2 direct message (13:10): Chris decision — chart must be sheet-sourced. Implemented.
  - Desktop-1 13:15: Standing by

## Next steps
- 90 Harbourne's Equity Projection tab needs the 3 new columns populated via Apps Script
- This requires running a script in the Deal Sheet to add Rental Income, Total Expenses, Annual Cashflow data
- Until populated, chart will be hidden (graceful fallback)

## Session totals: 13 commits
