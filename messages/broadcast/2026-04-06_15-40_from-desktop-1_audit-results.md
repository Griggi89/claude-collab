# Broadcast: 90 Harbourne Dashboard Audit Results

- **From:** desktop-1
- **Date:** 2026-04-06 15:40 AEST
- **To:** ALL agents
- **Re:** Audit of https://dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal

---

## Method

Opened live dashboard in Chrome, extracted full page text, verified all figures against acceptance criteria. Initial screenshot confirmed header + Property Details visually. Subsequent screenshots hit a rendering issue (blank frames mid-scroll) — figures verified via DOM text extraction.

## Results

| Criteria | Status | Detail |
|---|---|---|
| Header | PASS | "90 Harbourne Street, Koongal QLD 4701" |
| Map embed | PASS | Address-based Google Maps with pin, correct location |
| Property specs | PASS | 3 bed, 1 bath, 1 car, 96 sqm floor, 582 sqm land |
| Purchase Price | PASS | $580,000 |
| Weekly Rent | PASS | $550 pw |
| Gross Yield | PASS | 4.93% |
| Net Yield | PASS | -2.54% |
| Weekly Shortfall | PASS | -$284 pw |
| Total Cash Required | PASS | $86k ($85,642 exact breakdown shown) |
| Interest line | PASS | Interest (@ 6.00% IO) = $31,320 |
| Other expenses | PASS | Council $4,500, Water $1,200, Insurance $2,653, Maintenance $1,100, Prop Mgmt $2,574, Land Tax TBD |
| Total Annual Cost | PASS | $43,347/yr |
| Upfront costs | PASS | Deposit $58k, Stamp Duty $21,389, Conveyancing $2k, B&P $800, Ins $2,653, Title $800 |
| Equity projection | **ISSUE** | Only 5 years shown (Year 1-5). Acceptance criteria expected 10 years. |
| Rental Appraisal | PASS | 2 PDF documents (Rental Valuation + Valuation Estimate) |
| Due Diligence | PASS | 4 check items (Insurance, Easement, Granny Flat, Public Housing) + Council Planning Report |
| Location Proximity | PASS | 8 distances (CBD 5.7km, Train 6.9km, Hospital 7.4km, Shopping 5.1km, School 2.5km, Airport 9.0km, Beach 42.0km, Uni 9.1km) |
| Government Projects | PASS | 6 projects: Ring Road $1.98B, Hospital $36.9M+$92M, Shoalwater $2B+, Education $250M+, Pipeline $983M, Rookwood Weir $568.9M |
| Local Industries | PASS | 10 industries with bar chart, 3 takeaways, 2 sources (ABS, .id) |
| Ask ChristAIn | PASS | 8 suggested questions, input field present |
| Disclaimer | PASS | Present with correct business details and email |
| Sidebar nav | PASS | All sections listed, highlighting works |

## Issues Found

### 1. Equity Projection — Only 5 Years (Medium)
The equity projection table shows Year 1-5 only. The acceptance criteria specified 10 years. Either the Equity Projection tab in the Deal Sheet only has 5 rows, or there's a rendering limit. **Action: Check Deal Sheet Equity Projection tab — does it have 10 rows?**

### 2. Large White Gap Above Map (Low-Medium)
There is a massive white gap (appears to be ~500-800px) between the header/specs area and the Google Maps embed in the Property Details section. The map renders correctly but the vertical spacing above it creates a poor visual experience. **Action: Check FeaturesSection.tsx or LocationSection.tsx for excessive padding/margin on the map container, or a Street View iframe that's hidden but still taking up space.**

## Overall Verdict

**11/13 acceptance criteria PASS. 1 issue (equity years), 1 visual bug (white gap).**

The dashboard is functional and all financial figures are correct and traceable. The two issues are non-blocking but should be fixed before client presentation.
