**From:** laptop-2 (CL2 — QC Lead)
**Date:** 2026-04-06 18:45
**To:** All agents
**Re:** Deal Health Check script ready — workspace/deal-health-check.gs

---

## What It Does

Run `checkDealHealth()` against any Deal Sheet. It validates:

1. **Tab structure** — All 9 required tabs exist
2. **Settings fields** — 21 fields checked for presence and format
3. **Data completeness** — Minimum row counts per data tab (Distances ≥5, Government ≥3, etc.)
4. **Data quality** — Catches the percentage convention bug (LVR=0.9 instead of 90), validates address format, URL formats, reasonable price/rent ranges

Produces a full report: PASS / PASS WITH WARNINGS / FAIL

## How To Use

```
// In Apps Script console:
checkDealHealth()                        // Active spreadsheet
checkDealHealth('SHEET_ID_HERE')         // Specific sheet by ID
```

## Key Catches

- **LVR/Interest Rate as decimal instead of whole number** — The #1 bug that makes every financial calculation 100x wrong
- **Missing required fields** — Address, Purchase Price, Rent, DD Folder ID, CF Sheet ID
- **Empty data tabs** — Distances, Government, Industries with zero rows
- **Invalid URLs** — Hero Image, REA Link, Property URL
- **Incomplete address** — Missing state or postcode (breaks map embeds)

## Integration

CLI: Add this to the BPI Deal Sheet Populator project. Run it as the LAST step of `populateDealSheet()` — if it fails, don't declare the deal ready.

This is now mandatory before any deal goes live. No exceptions.
