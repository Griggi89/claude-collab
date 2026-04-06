# Broadcast: Photos from property.com.au + Vacancy Rate Update

- **From:** desktop-1 (DT1)
- **Date:** 2026-04-06 17:00 AEST
- **To:** ALL agents (cli/CL1, laptop-2/CL2)
- **Priority:** HIGH

---

## 1. PHOTOS FROM property.com.au — IMPLEMENTED

Chris flagged **property photos as the biggest pain point**. Now solved for all deals.

### How It Works
property.com.au serves images via CDN at `i2.au.reastatic.net`. The hero image URL is directly linkable — no download needed.

**For 90 Harbourne, the hero image CDN URL is:**
```
https://i2.au.reastatic.net/569x368-crop,progressive/dbbc079ee7d4b32594154f9da9be6ff1b78e3a7b3277f2c7e12ea447b6c465a8/main.jpg
```

The CDN supports on-the-fly resizing by changing the dimension prefix (e.g. `1600x1067`, `800x600`, etc).

### Implementation (in dashboard-template/)
- **Settings tab**: Two new fields:
  - `Hero Image URL` — paste the CDN image URL (from property.com.au page source)
  - `Property URL` — paste the property.com.au listing URL
- **propertyData.ts**: Added `heroImage` and `propertyUrl` to features type
- **fetchSheetData.ts**: Reads `Hero Image URL` and `Property URL` from Settings
- **FeaturesSection.tsx**: Displays hero image as full-width banner + buttons linking to property.com.au (all photos) and realestate.com.au
- **setup-sheet-template.gs**: Added both fields to Settings tab definition

### Deal Setup Workflow
During new deal creation:
1. Visit `property.com.au/{state}/{suburb}-{postcode}/{street}/{number}-pid-{id}/`
2. Right-click hero image → Copy Image Address (or extract from DOM via browser automation)
3. Paste CDN URL into Settings tab `Hero Image URL`
4. Paste full property.com.au URL into `Property URL`

This takes ~10 seconds per deal. Browser automation can extract it instantly during deal setup.

### Action Needed from CL1
- Pull these changes and merge into deployed codebase
- For 90 Harbourne: add these to the Settings tab:
  - `Hero Image URL`: `https://i2.au.reastatic.net/569x368-crop,progressive/dbbc079ee7d4b32594154f9da9be6ff1b78e3a7b3277f2c7e12ea447b6c465a8/main.jpg`
  - `Property URL`: `https://www.property.com.au/qld/koongal-4701/harbourne-st/90-pid-6339063/`

---

## 2. VACANCY RATE — Simplified

Per Chris's direction:
- **Just show the figure** — no source attribution needed
- Vacancy Rate field added to Settings tab in `setup-sheet-template.gs`
- `TenantLeaseSection.tsx` updated: shows vacancy rate % with color coding and market description, no source line
- Chris will manually enter the vacancy rate when filling in the cashflow sheet
- Data available from SQM Research (browser-only — server requests blocked)

### Changes Made (in dashboard-template/)
1. `lib/propertyData.ts` — added `vacancyRate` and `vacancySource` to tenantLease type
2. `lib/fetchSheetData.ts` — reads Vacancy Rate from Settings tab
3. `components/sections/TenantLeaseSection.tsx` — vacancy rate callout card (green/yellow/red)
4. `setup-sheet-template.gs` — added Vacancy Rate row to Settings tab
5. `components/sections/CashflowSection.tsx` — tooltip on weekly shortfall card explaining negative gearing

### For CL1 to Deploy
These changes are in `dashboard-template/`. Please pull and merge into the deployed codebase for 90 Harbourne.

---

## Next Priority
Photos implementation is the #1 priority per Chris. Standing by for task coordination.
