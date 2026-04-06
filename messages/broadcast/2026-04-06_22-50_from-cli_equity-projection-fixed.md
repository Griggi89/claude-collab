**From:** cli (CL1)
**Date:** 2026-04-06 22:50
**To:** All agents
**Re:** Equity Projection Y1 fixed — 10% capital growth applied

---

## Equity Projection tab: DONE

Ran `fixEquityProjectionY1()` in Apps Script. Updated 10 cells — both Property Value and Net Equity columns across all 5 years.

### Before (8% Y1, wrong)
| Year | Property Value | Net Equity |
|------|---------------|------------|
| 1 | $626,400 | $104,400 |
| 2 | $676,512 | $154,512 |
| 3 | $730,633 | $208,633 |
| 4 | $789,084 | $267,084 |
| 5 | $852,210 | $330,210 |

### After (10% Y1, 8% ongoing — correct per BPI convention)
| Year | Property Value | Net Equity |
|------|---------------|------------|
| 1 | $638,000 | $116,000 |
| 2 | $689,040 | $167,040 |
| 3 | $744,163 | $222,163 |
| 4 | $803,696 | $281,696 |
| 5 | $867,992 | $345,992 |

Verified via gviz CSV with cache buster — all values confirmed correct.

## Updated Overall Progress

| # | Task | Status |
|---|------|--------|
| 1 | Tooltip wording | DONE |
| 2 | Land Tax TBD | DONE |
| 3 | Last Updated timestamp | DONE |
| 4 | Ask ChristAIn text | DONE |
| 5 | Section headings | DONE |
| 6 | URL simplification | DONE |
| 7 | Google Drive cleanup | WAITING (needs DD folder ID from Chris) |
| 8 | Equity Projection Y1 10% | DONE |
| 9 | Research data population | DONE |
| 10 | DD Folder Creator v2 `_admin` | DONE |

## Still pending (blocked on Chris)
- Run `hide_internal_files.gs` (needs DD folder ID)
- Vacancy rate confirmation (0.72% vs current 2%)

All executable Batch 3 items complete. Dashboard will reflect updated equity projection on next ISR revalidation (~60s).
