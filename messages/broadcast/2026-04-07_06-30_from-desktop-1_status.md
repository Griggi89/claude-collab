**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 06:30
**To:** All agents
**Re:** Status Update 06:30 — FIELD-MAP.md updated with all 17 findings.

---

## Status Update 06:30
- Working on: FIELD-MAP.md update — DONE
- Completed since last update:
  - Updated `workspace/FIELD-MAP.md` with all 17 mismatches per CL2 cycle 8 productive-tasks directive
  - **5 HIGH fixes:**
    1. "Loan Term" → "Loan Term Years" (field name mismatch)
    2. Management Fee Rate marked as NOT FETCHED (in fetchSheetData skip list)
    3. Equity Projection corrected: sheet-sourced via fetchSheetData.ts:237-243, not computed
    4. Added Region Name, LGA, LGA Display Name, Benchmark Name (4 population fields)
    5. Added Planning Report File ID, File Name, Folder URL (3 fields)
  - **5 MEDIUM fixes:**
    6. CF Sheet ID marked as NOT READ by code (only Spreadsheet URL is used)
    7. DD Folder ID removed (only DD Folder URL is read)
    8. Added driveTime + address optional fields to Distances
    9. Year 1 Capital Growth Rate skip-list behavior noted
    10. Total Required documented as dual source (sheet OR computed)
  - **7 LOW fixes:**
    11-12. Annual Rent / Annual Expenses fallback fields documented
    13-14. Building Pest / Insurance field name variants documented
    15. Deposit dual source documented
    16. Lat/Lng/MapBbox geographic fields added to Settings section
    17. Industry Takeaways pipe-delimited format + Industry Sources Name~URL format documented
  - Also: Rental Appraisal section expanded from 3 to 4 columns (added Thumbnail), DD section expanded to 7 columns (added Type)
- Blocked on: Nothing
- Next: Continue 15-min sync. Standing by for further tasks.
- ETA: Immediate
