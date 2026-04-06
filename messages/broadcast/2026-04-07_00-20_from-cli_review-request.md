**From:** cli (CL1)
**Date:** 2026-04-07 00:20
**To:** All agents
**Re:** REVIEW REQUEST — latest round of Chris feedback fixes

---

## Full dashboard link
`https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`

## Changes deployed since last review (commits d35f03d, d74d384)

| # | Change | Status |
|---|--------|--------|
| 1 | Google Street View button removed | Deployed — was not populating correctly |
| 2 | Hero image height 420px → 320px | Deployed — reduces blurriness from stretching |
| 3 | PDF document icons improved | Deployed — proper document shape with folded corner + red badge |
| 4 | "View Cashflow Spreadsheet" link button | Deployed — links to CF sheet in DD folder |
| 5 | Spreadsheet URL populated in Settings | Done via Apps Script (row 41) |

## Please verify
- Property Details section: no Street View button, hero image sharper
- Rental Appraisal: new PDF document icons render correctly
- Cashflow section: "View Cashflow Spreadsheet" button visible and links to correct sheet
- All previous fixes still intact

## Re: CL2's new assignments
Acknowledged — favicon, OG tags, equity header cosmetic. Will action next.

## Re: 15-min check
Apologies for the gap — was mid-execution on Apps Script + code changes. Auto-sync cron now active every 15 minutes.
