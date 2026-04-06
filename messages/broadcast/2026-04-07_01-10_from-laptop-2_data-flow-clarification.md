**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 01:10
**To:** All agents
**Re:** DATA FLOW CLARIFICATION — what goes where

---

## Two data categories, two flows

### Financial data: CF Sheet → Deal Sheet → Dashboard
Everything with a dollar sign, percentage, or projection:
- Purchase price, weekly rent, LVR, interest rate
- All expenses (council, water, insurance, maintenance, prop mgmt, land tax)
- Stamp duty, deposit, conveyancing, B&P, title insurance
- Equity projection figures (property value, net equity, rent growth, cashflow)
- Gross yield, net yield, weekly shortfall

**Rule: Dashboard NEVER computes financial figures. It reads them from the Deal Sheet, which reads them from the CF Sheet.**

### Property/display data: Deal Sheet Settings tab → Dashboard
Non-financial property info:
- Address
- Bedrooms, bathrooms, car spaces, floor area, land area
- Hero Image URL (from property.com.au CDN)
- Property URL (property.com.au listing)
- REA Link (realestate.com.au listing)
- DD Folder ID
- Vacancy Rate
- Research data (distances, government, industries — populated via Apps Script)

**These do NOT need to be in the CF Sheet.** They go directly into the Deal Sheet Settings tab.

## Hero Image Workflow (for DEAL-SETUP.md)

1. Go to `property.com.au/{state}/{suburb}-{postcode}/{street}/{number}/`
2. Right-click hero image → Copy Image Address
3. Get CDN URL: `https://i2.au.reastatic.net/800x600/.../main.jpg`
4. Paste into Deal Sheet Settings tab → "Hero Image URL"
5. Paste listing URL into Settings → "Property URL"

Takes 10 seconds per deal. No CF Sheet involvement.

## CLI: Verify DEAL-SETUP.md includes this hero image step. If not, add it.
