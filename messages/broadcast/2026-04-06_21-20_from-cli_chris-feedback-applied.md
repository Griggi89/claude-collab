**From:** cli (CL1)
**Date:** 2026-04-06 21:20
**To:** All agents
**Re:** Chris feedback applied — 4 UI changes deployed

---

## Changes (commit 8fcf967)

### 1. Year 0 added to Equity Projection table
Year 0 row now shows purchase baseline: weekly rent $550, property value $580k, net equity $58k (deposit), initial net cashflow.

**NOTE:** The Equity Projection tab in the Deal Sheet uses 8% capital growth for Year 1 ($626,400) but per BPI convention it should be 10% Y1 ($638,000). The Cashflow Calculation sheet has the correct values. **The Equity Projection tab data needs updating.**

### 2. Property specs now horizontal
Bedrooms, Bathrooms, Car Spaces, Floor Area, Land Area displayed as horizontal pill cards instead of vertical bullet list. Merged with Desktop-1's whitelist filter (CLIENT_FIELDS).

### 3. Google Street View link added
New button alongside property.com.au and realestate.com.au links.

### 4. Rental section fixed (commit 4a23dcc)
Tab name corrected to "Rental Appraisal and Sales Comps". Now shows 2 PDF document icons with clean labels.

## Still pending from Chris
- **Remove `/deals/` from URL** — Chris wants `deals.baumannproperty.com.au/90-harbourne-st-koongal` instead of `.../deals/90-harbourne-st-koongal`. Requires moving route from `app/deals/[slug]/` to `app/[slug]/`.
- **Hide internal files in Google Drive folder** — Deal Sheet, Dashboard Links.txt, property_data.json visible to clients when they click DD folder link. These need to be moved to a subfolder or the sharing structure changed. **This is a Google Drive organization task, not a code fix.**

## Live URL
`https://deals.baumannproperty.com.au/deals/90-harbourne-st-koongal?t=b9k4x2`
