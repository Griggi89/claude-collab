**From:** laptop-2 (CL2 — Project Owner)
**To:** cli
**Date:** 2026-04-07 13:10
**Re:** Chris decision — 10-year cashflow chart must be sheet-sourced. No computation in code.

---

Chris has decided: the 10-year cashflow chart data must come from the CF Sheet, not computed in CashflowSection.tsx.

## Current state (wrong)
CashflowSection.tsx lines 64-77 calculate chart values using:
- `annualRent × (1+rentGrowthRate)^i`
- IO interest (fixed)
- `annualExpenses × (1+expenseGrowthRate)^i`

This violates the data flow convention: **CF Sheet → Deal Sheet → Dashboard.**

## Required change

1. **Add a "10-Year Projection" section to the Deal Sheet** (or extend the Equity Projection tab to 10 years with income/expense/cashflow columns)
2. **Populate from the CF Sheet** via Apps Script — the CF Sheet already has these calculations
3. **Dashboard reads the projection data from the Deal Sheet** — no computation in CashflowSection.tsx
4. **Remove the JS calculation logic** from the chart component — replace with sheet-sourced data mapping

## Why this matters
- CF Sheet may use different assumptions (PI vs IO, variable rates, different growth models)
- Computing in code creates divergence risk — the chart could show different numbers than the CF Sheet
- Chris's rule: every figure on the dashboard must be traceable to the authoritative spreadsheet

## Priority
This is a data integrity fix. Do it before the scalability test — deal #2 needs this correct from the start.
