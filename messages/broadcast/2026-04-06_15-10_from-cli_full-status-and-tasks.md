# Broadcast: Full Status + Task Assignments

- **From:** cli (Claude Code CLI — main dashboard builder)
- **Date:** 2026-04-06 15:10 AEST
- **To:** ALL agents (desktop-1, laptop-2)

---

## What CLI Has Done (completed this session)

### Code Changes (pushed to main, Vercel rebuilding now)
1. **Removed lat/lng entirely** — no more fragile coordinates anywhere in the codebase
   - `propertyData.ts`: removed `lat`, `lng`, `mapBbox` from type and defaults
   - `fetchSheetData.ts`: stopped reading Latitude/Longitude/Map Bbox from Settings
   - `LocationSection.tsx`: now uses address-based Google Maps embed (`?q={address}&output=embed`)
   - `FeaturesSection.tsx`: already address-based (done in previous session)
   - **Result:** Every deal just needs an address string. Maps work automatically. No coords to maintain.

2. **Fixed gviz stale cache** — Settings tab switched from gviz CSV to export API
   - gviz (`/gviz/tq?tqx=out:csv`) has aggressive caching that can serve stale data for 15+ minutes
   - Export API (`/export?format=csv&gid=0`) always returns real-time data
   - Only changed Settings tab (most affected). Other tabs use gviz fine with `&headers=1`.

3. **Populated all research data** via Apps Script `populateResearchData()`:
   - **Distances tab:** 8 rows (CBD 5.7km, Train Station 6.9km, Hospital 7.4km, etc.)
   - **Government tab:** 6 major CQ infrastructure projects (~$6B combined)
   - **Industries tab:** 10 sectors from ABS Census 2021 + takeaways + sources in Settings

4. **Previous session fixes** (already deployed):
   - Interest double-counting bug fixed
   - Sheet percentage convention enforced (LVR=90, Interest=6 — fetchSheetData divides by 100)
   - Tenant section simplified to PDF documents only
   - DD subfolder deduplication
   - All cashflow figures verified against authoritative CF spreadsheet

### Apps Script Functions Added to BPI Deal Sheet Populator
- `populateResearchData()` — populates Distances, Government, Industries tabs
- `touchSettingsCells()` — force-writes Settings values to invalidate gviz cache

---

## Current Dashboard State (90 Harbourne)

| Section | Status | Notes |
|---|---|---|
| Header (address) | Should fix with this deploy | export API will return correct address |
| Property Details | Working | Address-based map embed, property specs |
| Cashflow Estimate | Working | All figures verified correct |
| Rental Appraisal | Working | PDF documents rendering |
| Due Diligence | Working | Single folder, all check items |
| Location Proximity | Working | Address-based map + 8 distances |
| Government Projects | Working | 6 projects with descriptions + source links |
| Local Industries | Working | 10 industries, bar chart, takeaways, sources |
| Ask ChristAIn | Working | Suggested questions |

**Live URL:** https://dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal
**Deal Sheet:** `10R4xeM3yq73Ko34DBcLwPFeF9TXv_X3BzukY7ulYhSs`
**CF Sheet:** `1VeOb7Vxd4HWFgcVgeI3UVC1_49TJdgdIUmg0j2fqjv0`

---

## Response to desktop-1's Gap Findings

Great review. Here's my take on each:

1. **DD tab missing "Type" column** — Low priority. The dashboard renders DD items without Type. Can fix in template setup script.
2. **`dueDiligence.subfolders` never populated** — Actually it IS populated now from DD tab data (see `fetchSheetData.ts` line 278-293, the IIFE that dedupes by folder name). The hardcoded defaults in `propertyData.ts` are only fallbacks.
3. **`features.photos` always empty** — By design currently. Photos come from REA link (external). Could add a Photos tab to the sheet later.
4. **`valuationReports` always defaults** — Not a current priority. No section renders this.
5. **`about` section mostly hardcoded** — Phone comes from sheet. Rest is intentionally static (Christian's details).
6. **Shared Vercel project ID** — Need to understand this better. What's the conflict risk?

---

## Chris's Goal (from this session)

> "I want you to run it to the fullest, let me audit, iterate and within an hour we do a new deal sheet + deal dashboard for a different address to test scalability of current template and script setup"

**Priority order:**
1. Get 90 Harbourne dashboard to 100% (almost there — waiting on deploy)
2. Chris audits and gives feedback
3. Create a new deal for a different address to prove scalability

---

## Key Architecture Decisions (for all agents)

- **Settings tab stores whole-number percentages:** LVR=90, Interest=6 (not 0.9, 0.06). `fetchSheetData.ts` divides by 100.
- **No lat/lng anywhere.** All maps are address-based. Do not reintroduce coordinates.
- **gviz cache is unreliable for Settings.** Use export API for Settings tab. Other tabs are fine with gviz + `&headers=1`.
- **Deal URLs use `/deals/<slug>`** format. No `/properties/`.
- **Every dashboard number must be traceable** to the authoritative spreadsheet. See PROVENANCE.md.
- **Business email only:** christian@baumannproperty.com.au (never personal Gmail)
