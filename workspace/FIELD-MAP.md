# Complete Field Map — Source → Deal Sheet → Dashboard

Every metric on the dashboard, where it comes from, where it's stored, and where it displays.

**Owner:** laptop-2 (CL2)
**Created:** 2026-04-07
**Status:** UPDATED by desktop-1 (2026-04-07 06:15) — 17 mismatches corrected

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
| Loan Term Years | CF Sheet | Cashflow calculations | Used internally |
| Management Fee Rate | CF Sheet (whole number, e.g. 9) | **NOT FETCHED** — in fetchSheetData skip list | Was intended for Expenses but currently skipped |
| Rent Growth Rate | CF Sheet (whole number, e.g. 6) | Equity Projection | "+6% p.a." column header |
| Expense Growth Rate | CF Sheet (whole number, e.g. 3) | Cashflow chart | Assumptions text |
| Capital Growth Rate | CF Sheet (whole number, e.g. 8) | Equity Projection | "+8% p.a." column header |
| Year 1 Capital Growth Rate | CF Sheet (whole number, e.g. 10) | Equity Projection | Y1 value — **note: in fetchSheetData skip list for features, but read for cashflow** |
| Annual Rent | CF Sheet (or Weekly Rent × 52 fallback) | Cashflow calculations | Used to compute yields — **fallback not previously documented** |
| Annual Expenses | CF Sheet (or sum from Expenses tab) | Cashflow calculations | Used to compute net yield — **fallback not previously documented** |
| Deposit | CF Sheet (or computed: Purchase Price × (1 - LVR/100)) | Upfront Costs | Can be sheet-sourced OR computed — **dual source not previously documented** |
| Total Required | CF Sheet (or computed from upfront costs) | Cashflow Summary | Can be sheet-sourced OR computed — **dual source not previously documented** |
| Stamp Duty | CF Sheet | Upfront Costs | "$21,389" |
| Conveyancing | CF Sheet | Upfront Costs | "$2,000" |
| Building and Pest | CF Sheet | Upfront Costs | "$800" — **also accepts "Building Pest" variant** |
| Insurance | CF Sheet | Upfront Costs + Expenses | "$2,653" — **also accepts "Building Insurance" variant** |
| Title Insurance | CF Sheet | Upfront Costs | "$800" |
| Buyer Agent Fee | CF Sheet | Upfront Costs | "$0" (if applicable) |
| Vacancy Rate | SQM Research (manual) | Tenant/Rental section | As-is string display with source |
| Vacancy Source | Manual entry | Tenant/Rental section | Source attribution for vacancy rate |
| Region Name | Manual entry | Government section header | "Central Queensland" — **not previously documented** |
| LGA | Manual entry (lowercase slug) | Industries (.id profile lookups) | "rockhampton" — **not previously documented** |
| LGA Display Name | Manual entry | Industries section header | "Rockhampton Regional Council" — **not previously documented** |
| Benchmark Name | Manual entry | Industries chart benchmark label | "Queensland" — **not previously documented** |
| Latitude | Manual entry | Location map centering | -23.3925 — **not previously documented** |
| Longitude | Manual entry | Location map centering | 150.5217 — **not previously documented** |
| Map Bbox | Manual entry (optional) | Location map bounds | Optional bounding box — **not previously documented** |
| Planning Report File ID | Google Drive file ID | Due Diligence | Planning report link — **not previously documented** |
| Planning Report File Name | Manual entry | Due Diligence | Display name — **not previously documented** |
| Planning Report Folder URL | Google Drive folder URL | Due Diligence | Folder link — **not previously documented** |
| DD Folder URL | Google Drive folder URL | DD Section + Drive Repo | "Open DD Folder" links |
| CF Sheet ID | CF spreadsheet ID | Cashflow | **NOT READ by code** — only Spreadsheet URL is used |
| Spreadsheet URL | CF spreadsheet URL | Cashflow | Link button |
| Phone | Manual entry | Disclaimer | Contact info |
| Last Updated | Auto/manual | Header | "6 April 2026 09:05 pm" |
| Industry Takeaways | Apps Script research | Local Industries | Bullet points — **stored as pipe-delimited strings** |
| Industry Sources | Apps Script research | Local Industries | Source links — **stored as `Name~URL` pairs, pipe-separated** |

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

4 columns: Label, URL, Thumbnail, File Name

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Label (col 1) | Manual entry | Rental Appraisal | Section headers start with `--` (filtered out) |
| URL (col 2) | Google Drive file URL | Rental Appraisal | Click to open |
| Thumbnail (col 3) | Google Drive file ID | Rental Appraisal | **Large preview card** rendered as `lh3.googleusercontent.com/d/{id}=w600` |
| File Name (col 4) | Manual clean label | Rental Appraisal | Display name on card — falls back to col 1 if blank. Street addresses and "AVM" suffixes auto-stripped |

---

## Due Diligence Tab → Dashboard

7 columns: Label, Status, Folder Name, Folder URL, Image ID, File Name, Type

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Label (col 1) | DD subfolder file name | DD Checks | Item title |
| Status (col 2) | Manual ("Complete" / etc.) | DD Checks | Status badge |
| Folder Name (col 3) | DD subfolder name | DD Checks | Grouped by folder |
| Folder URL (col 4) | Google Drive subfolder link | DD Checks | "Open DD Folder" link |
| Image ID (col 5) | Google Drive file ID | DD Checks | Thumbnail preview |
| File Name (col 6) | DD file name | DD Checks | Display name |
| Type (col 7) | Manual (`image`/`pdf`/`video`/`link`) | DD Checks | Render mode — **not previously documented** |

---

## Distances Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Place | Apps Script research | Location Proximity | "CBD", "Train Station", etc. with emoji icon |
| Distance | Apps Script research | Location Proximity | "5.7 km" |
| Drive Time | Apps Script research (optional) | Location Proximity | **Optional** — not previously documented |
| Address | Apps Script research (optional) | Location Proximity (amenity map) | **Optional** — used for Google Maps directions |

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
| Benchmark % | Apps Script (ABS Census) | Local Industries | Benchmark comparison bar (label from Settings `Benchmark Name`, e.g. "Queensland") |

---

## Questions Tab → Dashboard

| Field | Source | Dashboard Section | Display |
|---|---|---|---|
| Question | Manual or Apps Script | Ask ChristAIn | Suggested question buttons |

---

## Computed in Dashboard Code (verified against CF Sheet)

| Metric | Calculation | Verify against |
|---|---|---|
| Gross Yield | annualRent / purchasePrice × 100 | CF Sheet |
| Net Yield | (annualRent - totalExpenses) / purchasePrice × 100 | CF Sheet |
| Weekly Shortfall | (annualRent - totalExpenses) / 52 | CF Sheet |
| Total Cash Required | deposit + stampDuty + conveyancing + B&P + insurance + title + buyerAgent | CF Sheet — **can also be sheet-sourced (Total Required field)** |
| Deposit | purchasePrice × (1 - LVR/100) | CF Sheet — **can also be sheet-sourced** |
| Loan Amount | purchasePrice × LVR/100 | CF Sheet |
| Interest Amount | loanAmount × interestRate/100 | CF Sheet |
| 10-Year Chart values | Projected from base figures with growth rates | CF Sheet |

**NOTE:** These are currently computed in CashflowSection.tsx. Per Chris's data flow convention, they should ideally be read from the CF Sheet, not computed. Desktop-1 flagged this in the code review.

**CORRECTION (desktop-1):** Equity Projection values (Year, Rent/Wk, Property Value, Net Equity, Net Annual CF) are **sheet-sourced** from the Equity Projection tab via fetchSheetData.ts:237-243, NOT computed in dashboard code. Previously documented as "Computed in Dashboard Code" — this was wrong.

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

## Revision Log

**2026-04-07 06:15 — desktop-1:** Updated with 17 mismatches found during codebase cross-reference:
- HIGH: Fixed "Loan Term" → "Loan Term Years"; marked Management Fee Rate as not fetched; corrected Equity Projection as sheet-sourced; added Region/LGA/Benchmark/LGA Display Name fields; added Planning Report fields
- MEDIUM: Marked CF Sheet ID and DD Folder ID as not read by code; added driveTime/address to Distances; noted Y1 Capital Growth Rate skip-list behavior; documented Total Required dual source
- LOW: Documented Annual Rent/Annual Expenses fallbacks; Building Pest/Insurance field variants; Deposit dual source; Lat/Lng/MapBbox geographic fields; Industry Takeaways pipe-delimited format; Rental Appraisal 4 columns with thumbnails
