**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 04:30
**To:** All agents
**Re:** Status Update 04:30 — FIELD-MAP review + hardcoded value audit complete

---

## Status Update 04:30
- Working on: FIELD-MAP review + hardcoded value scan (CL2 assigned)
- Completed since last update:
  - Final full-page regression review — ALL PASS (posted at 04:15)
  - FIELD-MAP.md cross-referenced against codebase — 17 findings
  - Hardcoded value audit — 1 remaining item in deployed code
- Blocked on: Nothing
- Next: Standing by
- ETA: All tasks complete

---

## FIELD-MAP.md Review — 17 Mismatches Found

### HIGH (Fix in FIELD-MAP or code)

| # | Issue | FIELD-MAP | Code |
|---|-------|-----------|------|
| 1 | Field name mismatch | "Loan Term" | `"Loan Term Years"` in fetchSheetData.ts:213 |
| 2 | Management Fee Rate not fetched | Says "CF Sheet" | fetchSheetData.ts doesn't read this field — it's in the skip list |
| 3 | Equity Projection source wrong | Says "Computed in Dashboard Code" | Actually sheet-sourced (fetchSheetData.ts:237-243) |
| 4 | Region/LGA/Benchmark fields missing | Not documented | fetchSheetData.ts:276,286-288 reads all 4 population fields |
| 5 | Planning Report fields missing | Not documented | fetchSheetData.ts:312-317 reads fileId, fileName, folderUrl |

### MEDIUM

| # | Issue | Details |
|---|-------|---------|
| 6 | "CF Sheet ID" documented but not read by code | FIELD-MAP line 43 |
| 7 | "DD Folder ID" documented but not read (only URL is) | FIELD-MAP line 41 |
| 8 | Distances type now includes `driveTime?` and `address?` | Not in FIELD-MAP |
| 9 | Year 1 Capital Growth Rate in skip list | FIELD-MAP says it's used, but fetchSheetData skips it in features |
| 10 | "Total Required" can be read from sheet | FIELD-MAP only shows it as computed |

### LOW (Documentation gaps)

| # | Issue |
|---|-------|
| 11 | "Annual Rent" fallback to "Weekly Rent × 52" not documented |
| 12 | "Annual Expenses" fallback field not documented |
| 13 | "Building and Pest" / "Building Pest" variant not documented |
| 14 | "Insurance" / "Building Insurance" variant not documented |
| 15 | Deposit can be sheet-sourced OR computed |
| 16 | Lat/Lng/MapBbox geographic fields not in Distances section |
| 17 | Industry Takeaways stored as pipe-delimited strings |

---

## Hardcoded Value Audit (deployed code)

| File | Value | Risk for Deal #2 |
|------|-------|-------------------|
| `properties.ts:115-119` | Fallback: `'90 Harbourne Street, Koongal QLD 4701'` + `sheetId` + empty token | **LOW** — only triggers if master index fetch fails. Should be replaced with empty array fallback. |

**All other property-specific values (addresses, sheet IDs, tokens) are dynamic** — read from the master index Google Sheet or per-deal sheet. Deal #2 will work correctly.

### Previously fixed hardcoded values (tonight)
- ~~`TenantLeaseSection.tsx:65` — "90 Harbourne" regex~~ → Fixed to generic street regex ✓
- ~~`properties.ts:119` — token "b9k4x2"~~ → Fixed to empty string ✓
- ~~`IndustriesSection.tsx:37` — "QLD State"~~ → Fixed to "State Average" ✓

---

## CL1: Recommended action
1. Update FIELD-MAP.md with the 5 HIGH findings (or let CL2 know to update)
2. Change properties.ts fallback to return empty array instead of hardcoded property
