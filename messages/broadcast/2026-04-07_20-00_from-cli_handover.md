**From:** cli (CL1)
**Date:** 2026-04-07 20:00
**To:** desktop-1 (Primary Maintainer)
**Re:** HANDOVER — Full project state, access, and maintenance guide

---

## Project Overview

**BPI Dashboard** — Property investment analysis dashboard for Baumann Property Investments.
- **Live URL:** `https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
- **Vercel URL:** `https://dashboard-template-seven-woad.vercel.app`
- **Framework:** Next.js 15 (SSG + ISR, 60s revalidation)
- **Hosting:** Vercel (auto-deploys on push to `main`)

---

## Repositories

### 1. Dashboard (primary)
- **Repo:** `https://github.com/Griggi89/dashboard-bpi.git`
- **Branch:** `main`
- **Local path:** `C:\Users\User\Desktop\BPI Dashboard\dashboard-bpi\dashboard-template`
- **Deploys:** Push to `main` → Vercel auto-builds and deploys

### 2. Claude Collab (coordination)
- **Repo:** `https://github.com/Griggi89/claude-collab.git`
- **Branch:** `master`
- **Purpose:** Multi-agent messaging (can be archived)

### 3. Static Site Refactor (template backup)
- **Path:** `C:\Users\User\Desktop\BPI Dashboard\static-site-refactor\dashboard-template`
- **Note:** `properties.ts` synced to match deployed version

---

## Google Sheets

### Master Index Sheet
- **ID:** `1ed5SsZeJFW27pBQLqhNeg7cIFaahdlaPf9337CwyNq8`
- **Tab:** `Index`
- **Columns:** Slug | Sheet ID | Address | Active | Token
- **Purpose:** Adding a row here = new deal on dashboard. Zero code changes needed.

### Deal Sheet (90 Harbourne)
- **ID:** `10R4xeM3yq73Ko34DBcLwPFeF9TXv_X3BzukY7ulYhSs`
- **13 tabs:** Settings, Features, Rental Appraisal and Sales Comps, Expenses, Price Analysis, Sales Comps, Rent Comps, Distances, Government, Industries, Due Diligence, Equity Projection, Questions
- **New tab needed:** Suburb Profile (component built, awaiting data)

### CF Sheet (90 Harbourne)
- **ID:** `1VeOb7Vxd4HWFgcVgeI3UVC1_49TJdgdIUmg0j2fqjv0`
- **Key tab:** "Yield and Equity Projection" — dashboard reads this directly via auto-fetch
- **Linked via:** `Spreadsheet URL` field in Deal Sheet Settings tab

---

## Key Architecture Decisions

1. **Data flow:** CF Sheet → Dashboard (direct auto-fetch for projections). All other data: Deal Sheet → Dashboard.
2. **No computation in code.** Every number comes from sheets. The dashboard is a renderer, not a calculator.
3. **Settings tab stores percentages as whole numbers:** LVR=90, Interest=6. `fetchSheetData.ts` divides by 100.
4. **Capital growth convention:** 10% Year 1, 8% ongoing (BPI standard).
5. **Token-gated access:** URL must include `?t=<token>` matching Master Index.
6. **Hero image auto-upgrade:** `hiResImage()` in FeaturesSection.tsx converts REA CDN URLs from low-res to 1600x900.
7. **Land Tax:** Shows "To be determined" when $0 — Chris directive, do not change without approval.

---

## Key Files

| File | Purpose |
|------|---------|
| `lib/fetchSheetData.ts` | Fetches all 14 tabs from Deal Sheet + CF Sheet projection |
| `lib/properties.ts` | Fetches property list from Master Index Sheet |
| `lib/propertyData.ts` | TypeScript types + defaults for all property data |
| `app/[slug]/DashboardClient.tsx` | Main dashboard layout, imports all sections |
| `components/layout/Sidebar.tsx` | Navigation sidebar with section IDs |
| `components/sections/*.tsx` | 12 section components |
| `DEAL-SETUP.md` | Complete guide for setting up a new deal |

---

## Deploy Rules (CL2 directive)

1. **One feature per commit**
2. **Test locally** (`npm run build`) before pushing
3. **Staged deploys** for architecture changes (preview branch → verify → production)
4. **Immediate rollback** if production breaks (revert first, debug second)
5. **Reviewer verifies** preview before production promotion

---

## Pending Items

| Item | Status | Notes |
|------|--------|-------|
| Suburb Profile section | Component built, hidden | Needs "Suburb Profile" tab populated in Deal Sheet |
| Hero image automation | Spec ready | Apps Script to extract og:image from listing URL |
| CDN assets to public/ | Low priority | Copy logo/favicon from Webflow CDN to local public/ |
| Deal #2 | Blocked on Chris | Needs address, region, CF Sheet |
| Vacancy rate | Blocked on Chris | 0.72% vs 2% decision |
| DD folder cleanup | Blocked on Chris | Folder ID needed |

---

## Apps Script Projects

- **BPI Deal Sheet Populator** — Contains `fixSettingsToWholeNumbers()`, `populateResearchData()`, `populateChartData()` (obsolete — replaced by auto-fetch)
- **`setup-sheet-template.gs`** — Creates new Deal Sheet with all 13 tabs
- **`populate_chart_data.gs`** — Obsolete, kept for reference

---

## Session Summary

22 deployed commits this session covering:
- CF Sheet auto-fetch (eliminates manual Apps Script for chart data)
- Baumann shield favicon
- Amenity cards cleanup (display-only, no emojis/links)
- Suburb Market Profile section (hidden until data populated)
- Year 0 dedup + rent rounding fix
- Hero image: 16:9 aspect ratio, auto hi-res upgrade, 280px height
- Null guards on CF auto-fetch
- Template dir sync (properties.ts)

---

**CLI (CL1) signing off. Desktop-1 has full ownership. Good luck.**
