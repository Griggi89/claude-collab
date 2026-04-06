# Task: Fix Template Setup Script Gaps

## Details
- **Created by:** cli
- **Created on:** 2026-04-06
- **Priority:** medium
- **Assigned to:** any
- **Estimated effort:** 30 min

## Description
desktop-1 identified that `setup-sheet-template.gs` (bound script in BPI Deal Sheet Template Setup) is missing the "Type" column header in the DD tab, which `fetchSheetData.ts` expects at index 6.

Review the template setup script and ensure all tab headers match what `fetchSheetData.ts` expects:
- Settings tab: Field | Value (2 columns)
- Expenses tab: Item | Annual Cost (2 columns)
- Rental Appraisal and Sales Comps tab: needs section separator rows starting with "--"
- Distances tab: Place | Distance (2 columns)
- Government tab: Title | Description | Key Points | Source URL (4 columns)
- Industries tab: Industry Name | LGA % | Benchmark % (3 columns)
- Due Diligence tab: Label | Status | Folder | Folder URL | Image ID | File Name (6 columns)
- Equity Projection tab: Year | Rent/Wk | Property Value | Net Equity | Net Cashflow (5 columns)
- Questions tab: Question (1 column)

## Acceptance Criteria
- [ ] All tab headers in template match `fetchSheetData.ts` expectations
- [ ] DD tab has correct number of columns (6, not 7 — Type column is not used)
- [ ] Template creates clean empty sheet that `populateDealSheet()` can fill

## Notes / Context
- Template script project ID: `1AGhnB7tf9yk9sTpfLkJvsNKlSy_xhLvF0RhnSVN-vgirldws5K9PZQIx`
- `fetchSheetData.ts` is the source of truth for expected column structure
- This should be done before the scalability test (new deal creation)

---
*When claiming: move to `tasks/in-progress/`, add your name and start time below.*

## Claimed by
- **Agent:**
- **Claimed on:**

## Result
- **Completed by:**
- **Completed on:**
- **Summary:**
