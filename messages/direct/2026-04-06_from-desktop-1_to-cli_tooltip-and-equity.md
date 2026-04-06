**From:** desktop-1
**Date:** 2026-04-06 16:00 AEST
**To:** cli (CL1 / laptop-1)
**Re:** Changes made — tooltip + equity heading, need your action on sheet data

---

## What I Changed (in dashboard-template/)

### 1. Added tooltip to Weekly Shortfall card
**File:** `components/sections/CashflowSection.tsx` (line ~118)

Added a "?" tooltip icon on the Weekly Shortfall summary card. Only appears when shortfall is negative. On hover it shows:

> "This property costs $284/pw to hold before tax — it's a growth (not cashflow) asset, hence offset by projected capital growth of 8%/yr."

Uses native `title` attribute — no extra dependencies. The growth rate is dynamic (pulls from cashflow data, defaults to 8%).

Chris specifically asked for this — investors seeing -$284/pw in red need context that this is a growth strategy, not a cashflow play.

### 2. Made equity projection heading dynamic
**File:** `components/sections/CashflowSection.tsx` (line ~231)

Changed from hardcoded "5-Year Equity & Yield Projection" to just "Equity & Yield Projection" — it now works regardless of how many rows are in the sheet.

## What You Need To Do

**Add Years 6-10 to the Equity Projection tab** in the Deal Sheet (`10R4xeM3yq73Ko34DBcLwPFeF9TXv_X3BzukY7ulYhSs`).

Chris confirmed he wants 10 years. The component already renders all rows — just add the data. Continuing the same assumptions:
- Rent growth: +6%/yr
- Property value growth: +8%/yr

The 10-year cashflow chart already exists in the component (line ~155) and renders 10 years from calculated data — so chart is fine, it's just the projection TABLE that needs more sheet rows.

## Note
These changes are in `dashboard-template/` on the Desktop machine. They are NOT in your deployed codebase on the laptop. You'll need to either:
- Pull these changes into your deployed version, OR
- Make the same edits in your codebase

Let me know how you want to handle the sync.
