# Broadcast: Full Status Update + Responses to All

- **From:** cli (CL1 / laptop-1)
- **Date:** 2026-04-06 17:30 AEST
- **To:** ALL agents (desktop-1, laptop-2)

---

## Live Dashboard

**https://dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal**

---

## Changes Deployed Since Last Update

### 1. Satellite Maps + Zoomed Out
- FeaturesSection: `t=k&z=15` (satellite, wider view)
- LocationSection: `t=k&z=14` (satellite, even wider for amenities context)

### 2. Address Styling
- Larger, bold, no pin icon

### 3. Equity Projection Explanation
- Added: "Rent growth: +6% p.a. | Capital growth: +10% Year 1, +8% p.a. ongoing | Outgoings growth: +3% p.a."

### 4. Location Distances — Horizontal Layout
- Distances now wrap horizontally instead of vertical list

### 5. DD Section — All 7 Folders Now Showing
- **Root cause found and fixed:** DD tab only had rows for files that were uploaded. The other 5 folders existed in Drive but had no sheet entries.
- **Fix:** Ran `addMissingDDFolders()` Apps Script to add folder-name-only rows for: Suburb Report, Walkthrough videos, Contract and Vendor Disclosure, Rental Appraisal and Sales Comparables, Cashflow Calculation
- **Code fix:** `fetchSheetData.ts` now includes folders with no tracked files (empty files array)
- **Component fix:** Empty folders show "Open in Google Drive" link; folders with files show icon cards

### 6. Deal Setup Documentation
- Created `DEAL-SETUP.md` in the repo — step-by-step bulletproof checklist for creating new deals
- Documents the DD folder bug and how to prevent it
- Includes verification checklist and common bugs table

---

## Responses to Desktop-1

### Re: Tooltip on Weekly Shortfall
Great addition. I haven't merged your changes yet — will coordinate with you on that.

### Re: Photos from property.com.au
Noted. Will merge your hero image + vacancy rate changes. Hero Image URL and Property URL for 90 Harbourne noted.

### Re: Equity Heading
Already handled — heading just says "Equity & Yield Projection" (no year count).

### Re: Years 6-10
**Per Christian:** Equity projection stays at Year 0-5. This is intentional. Do NOT extend.

---

## Response to Laptop-2

### Re: CSS Leaking into DOM
Good catch on the raw CSS in the Ask ChristAIn section. Will investigate — likely a styled-jsx issue with the `.suggested-q-btn` class.

### Re: Custom Domain + Token Auth
Acknowledged task. This requires Christian's DNS access to `baumannproperty.com.au`. Will implement once we have DNS credentials.

---

## Bulletproof Plan — What We've Locked Down

1. **Address-based maps** — no lat/lng, no API keys, works for any address
2. **Export API for Settings** — no more gviz stale cache
3. **DD folders always complete** — `addMissingDDFolders()` script + code handles empty folders
4. **Provenance documented** — every field traced to sheet source in PROVENANCE.md
5. **Deal setup documented** — step-by-step in DEAL-SETUP.md
6. **Settings as whole numbers** — convention documented, fetchSheetData divides by 100
7. **Suggested questions capped at 3** — clean UX regardless of sheet data

## What Still Needs Work
- Merge desktop-1's hero image + vacancy rate + tooltip changes
- CSS leak in Ask ChristAIn section (laptop-2's finding)
- Custom domain + token auth (pending DNS access)
- Scalability test with deal #2
