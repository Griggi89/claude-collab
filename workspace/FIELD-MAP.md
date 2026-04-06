# Complete Field Map — Source → Deal Sheet → Dashboard

Every metric on the dashboard, where it comes from, where it's stored, and where it displays.

**Owner:** laptop-2 (CL2)
**Created:** 2026-04-07
**Status:** ACTIVE — CLI to verify against codebase and correct any mismatches

---

## Settings Tab → Dashboard

| Field in Settings Tab | Source | Dashboard Section | Display |
|---|---|---|---|
| Address | Manual entry | Header + Property Details | "90 Harbourne Street, Koongal QLD 4701" |
| Hero Image URL | property.com.au CDN (right-click → copy) | Property Details | Hero photo banner |
| Property URL | property.com.au listing URL | Property Details | "All Photos & Details" button |
| REA Link | realestate.com.au listing URL | Property Details | "realestate.com.au" button |
| Bedrooms | Manual entry | Property Details | Spec pill |
| Bathrooms | Manual entry | Property Details | Spec pill |
| Car Spaces | Manual entry | Property Details | Spec pill |
| Floor Area | Manual entry | Property Details | Spec pill "(sqm)" |
| Land Area | Manual entry | Property Details | Spec pill "(sqm)" |
| Purchase Price | CF Sheet | Cashflow Summary | "$580,000" card |
| Weekly Rent | CF Sheet | Cashflow Summary | "$550 pw" card |
| LVR | CF Sheet (whole number, e.g. 90) | Cashflow calculations | Divided by 100 in fetchSheetData |
| Interest Rate | CF Sheet (whole number, e.g. 6) | Cashflow | "IO @ 6%" + $31,320 |
| Loan Term | CF Sheet | Cashflow calculations | Used internally |
| Management Fee Rate | CF Sheet (whole number, e.g. 9) | Expenses | $2,574 |
| Rent Growth Rate | CF Sheet (whole number, e.g. 6) | Equity Projection | "+6% p.a." column header |
| Expense Growth Rate | CF Sheet (whole number, e.g. 3) | Cashflow chart | Assumptions text |
| Capital Growth Rate | CF Sheet (whole number, e.g. 8) | Equity Projection | "+8% p.a." column header |
| Year 1 Capital Growth Rate | CF Sheet (whole number, e.g. 10) | Equity Projection | Y1 value |
| Stamp Duty | CF Sheet | Upfront Costs | "$21,389" |
| Conveyancing | CF Sheet | Upfront Costs | "$2,000" |
| Building Pest | CF Sheet | Upfront Costs | "$800" |
| Insurance | CF Sheet | Upfront Costs + Expenses | "$2,653" |
| Title Insurance | CF Sheet | Upfront Costs | "$800" |
| Buyer Agent Fee | CF Sheet | Upfront Costs | "$0" (if applicable) |
| Vacancy Rate | SQM Research (manual) | Rental Appraisal | "2%" card with market description |
| DD Folder ID | Google Drive folder ID | DD Section | Folder links |
| DD Folder URL | Google Drive folder URL | DD Section + Drive Repo | "Open DD Folder" links |
| CF Sheet ID | CF spreadsheet ID | Cashflow | "View Cashflow Spreadsheet" link |
| Spreadsheet URL | CF spreadsheet URL | Cashflow | Link button |
| Phone | Manual entry | Disclaimer | Contact info |
| Last Updated | Auto/manual | Header | "6 April 2026 09:05 pm" |
| Industry Takeaways | Apps Script research | Local Industries | Bullet points |
| Industry Sources | Apps Script research | Local Industries | Source links |

---

## Expenses Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Council Rates | CF Sheet | Expense Breakdown | "$4,500" |
| Water | CF Sheet | Expense Breakdown | "$1,200" |
| Building Insurance | CF Sheet | Expense Breakdown | "$2,653" |
| Maintenance | CF Sheet | Expense Breakdown | "$1,100" |
| Property Management | Calculated: rent × mgmt rate | Expense Breakdown | "$2,574" |
| Land Tax | CF Sheet (0 if TBD) | Expense Breakdown | "To be determined" when $0 |

---

## Equity Projection Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Year | Sequential (0-5) | Equity Table | "Year 0" through "Year 5" |
| Rent / Wk | CF Sheet (base rent × growth^year) | Equity Table | "$550", "$583", etc. |
| Property Value | CF Sheet (purchase × growth^year) | Equity Table | "$580,000", "$638,000", etc. |
| Net Equity | CF Sheet (property value - loan) | Equity Table | "$58,000", "$116,000", etc. |
| Net Annual CF | CF Sheet | Equity Table | "-$14,747", "-$14,331", etc. |

**Convention:** Y1 uses 10% capital growth, Y2+ uses 8%. All values from CF Sheet.

---

## Rental Appraisal and Sales Comps Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Document title | Filename from DD folder | Rental Appraisal | PDF icon card |
| Document URL | Google Drive link | Rental Appraisal | Click to open |
| Document type | File extension | Rental Appraisal | "PDF" badge |

---

## Due Diligence Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Label | DD subfolder file name | DD Checks | Item title |
| Status | Manual ("Uploaded" / "Reviewed") | DD Checks | Status badge |
| Folder | DD subfolder name | DD Checks | Grouped by folder |
| Folder URL | Google Drive subfolder link | DD Checks | "Open DD Folder" link |
| Image ID | Google Drive file ID | DD Checks | Thumbnail preview |
| File Name | DD file name | DD Checks | Display name |

---

## Distances Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Place | Apps Script research | Location Proximity | "CBD", "Train Station", etc. |
| Distance | Apps Script research | Location Proximity | "5.7 km" |

---

## Government Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Title | Apps Script research | Government Projects | Project name |
| Description | Apps Script research | Government Projects | Summary text |
| Key Points | Apps Script research | Government Projects | Bullet points |
| Source URL | Apps Script research | Government Projects | "Source" link |

---

## Industries Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Industry Name | Apps Script (ABS Census) | Local Industries | Bar chart labels |
| LGA % | Apps Script (ABS Census) | Local Industries | Regional bar |
| Benchmark % | Apps Script (ABS Census) | Local Industries | QLD comparison bar |

---

## Questions Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Question | Manual or Apps Script | Ask ChristAIn | Suggested question buttons |

---

## Computed in Dashboard Code (should be verified against CF Sheet)

| Metric | Calculation | Verify against |
|---|---|---|
| Gross Yield | annualRent / purchasePrice × 100 | CF Sheet |
| Net Yield | (annualRent - totalExpenses) / purchasePrice × 100 | CF Sheet |
| Weekly Shortfall | (annualRent - totalExpenses) / 52 | CF Sheet |
| Total Cash Required | deposit + stampDuty + conveyancing + B&P + insurance + title + buyerAgent | CF Sheet |
| Deposit | purchasePrice × (1 - LVR/100) | CF Sheet |
| Loan Amount | purchasePrice × LVR/100 | CF Sheet |
| Interest Amount | loanAmount × interestRate/100 | CF Sheet |
| 10-Year Chart values | Projected from base figures with growth rates | CF Sheet |

**NOTE:** These are currently computed in CashflowSection.tsx. Per Chris's data flow convention, they should ideally be read from the CF Sheet, not computed. Desktop-1 flagged this in the code review. CLI to assess whether to move these to sheet-sourced values.

---

## New Sections (to be implemented)

### Walkthrough Videos
| Field | Source | Dashboard Section |
|---|---|---|
| Video title | DD folder "Walkthrough videos" subfolder | Walkthrough Videos |
| Video URL | Google Drive link | Embedded player or link |
| Thumbnail | Auto from video or placeholder | Video card |

### Contract and Vendor Disclosure
| Field | Source | Dashboard Section |
|---|---|---|
| Document title | DD folder "Contract and Vendor Disclosure" subfolder | Contract Section |
| Document URL | Google Drive link | Document icon card |
| Document type | File extension | Type badge (PDF/DOC) |

---

## CLI Action Required

1. Verify this field map against the actual codebase — correct any mismatches
2. Ensure DEAL-SETUP.md references this map so anyone creating a deal knows exactly where every field goes
3. Flag any fields that are computed in code but should come from the CF Sheet
