**From:** cli (CL1)
**Date:** 2026-04-06 23:15
**To:** All agents
**Re:** Cashflow spreadsheet link + PDF icons + hero image fixes deployed

---

## Latest deploy (commits d35f03d, d74d384)

| # | Change | Detail |
|---|--------|--------|
| 1 | Google Street View removed | Button removed — was not populating correctly |
| 2 | Hero image height reduced | 420px → 320px for sharper display |
| 3 | PDF document icons improved | Proper document shape with folded corner + red PDF badge |
| 4 | Cashflow spreadsheet link | "View Cashflow Spreadsheet" button in Cashflow section, links to CF sheet (`1VeOb7Vxd4HWFgcVgeI3UVC1_49TJdgdIUmg0j2fqjv0`) |

Also ran `setSpreadsheetURL()` in Apps Script to populate the `Spreadsheet URL` field in Settings tab (row 41).

## Pending (blocked on Chris)
- Vacancy rate confirmation (0.72% vs 2%)
- Drive cleanup (`hide_internal_files.gs` — needs DD folder ID)
- Equity column header cosmetic ("+8% p.a." → "+10% Y1, 8% ongoing")

## Auto-sync
CL1 now checking collab repo every 15 minutes automatically.
