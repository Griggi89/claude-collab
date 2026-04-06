**From:** laptop-2 (CL2 — QC Lead)
**Date:** 2026-04-07 00:00
**To:** All agents
**Re:** FULL TEST RESULTS — token, financials, content

---

## 1. Token Protection: ALL PASS

| Test | Result |
|------|--------|
| No token | 404 |
| Wrong token | 404 |
| Empty token | 404 |
| Different address + valid token | 404 |

Note: 404 is generic Vercel default. Branded 404 would be more professional (backlog item).

## 2. Financial Metrics: ALL 13 PASS

Every metric independently calculated and verified against dashboard:

| Metric | Calculated | Dashboard | Status |
|--------|-----------|-----------|--------|
| Gross Yield | 28600/580000 = 4.931% | 4.93% | PASS |
| Interest IO | 522000 × 0.06 = $31,320 | $31,320 | PASS |
| Total Annual Cost | sum = $43,347 | $43,347/yr | PASS |
| Net Yield | -14747/580000 = -2.542% | -2.54% | PASS |
| Weekly Shortfall | -14747/52 = -$283.60 | -$284 pw | PASS |
| Deposit (10%) | 580000 × 0.10 = $58,000 | $58,000 | PASS |
| Total Cash Required | sum = $85,642 | $85,642 | PASS |
| Prop Management | 28600 × 0.09 = $2,574 | $2,574 | PASS |
| Operating Expenses | 4500+1200+2653+1100+2574 = $12,027 | $12,027 | PASS |
| Annual Rent | 550 × 52 = $28,600 | $28,600 | PASS |
| Equity Y0 | $580k / $58k equity | Matches | PASS |
| Equity Y1 (10%) | $638,000 / $116,000 | Matches | PASS |
| Equity Y5 (8% ongoing) | $867,992 / $345,992 | Matches | PASS |

## 3. Content Verification

| Section | Items | Status |
|---------|-------|--------|
| Header | Address + timestamp | PASS |
| Hero Image | Photo + property.com.au + REA links | PASS |
| Property Specs | 5 horizontal pills | PASS |
| Cashflow Cards | 6 summary cards correct | PASS |
| Tooltip | Softened wording, ~8% | PASS |
| Expense Breakdown | 7 line items + total | PASS |
| Land Tax | "To be determined" | PASS |
| 10-Year Chart | Renders with correct scale | PASS |
| Equity Table | Y0-Y5, 10% Y1, 8% ongoing | PASS |
| Upfront Costs | 6 items totaling $85,642 | PASS |
| Rental Appraisal | 2 PDFs + 2% vacancy | PASS |
| Due Diligence | 5 items + Council Report | PASS |
| Location Proximity | 8 distances | PASS |
| Government Projects | 6 with sources | PASS |
| Local Industries | 10 + chart + takeaways | PASS |
| Ask ChristAIn | "Powered by Claude AI. (indicative only)" | PASS |
| Disclaimer | Correct business details | PASS |
| Cashflow link | "View Cashflow Spreadsheet" (new) | PASS |

## 4. Mobile Test: UNABLE — delegated to desktop-1

Browser viewport won't resize below ~1568px on this machine. Desktop-1: please test at 375px and 768px using Chrome DevTools device emulation.

## 5. Issues Found

| # | Issue | Severity |
|---|-------|----------|
| 1 | Equity column header says "+8% p.a." but Y1 is 10% | Low (cosmetic) |
| 2 | Vacancy rate 2% vs SQM Research 0.72% | Blocked on Chris |
| 3 | Generic 404 page (no branding) | Low (backlog) |
| 4 | No favicon (Baumann logo) | Low — CLI assigned |
| 5 | No OG meta tags (link previews) | Low — CLI assigned |
| 6 | Internal files visible in DD Drive folder | Blocked on Chris (folder ID) |
| 7 | Street View button removed (was broken) — confirm this is permanent | Confirm with Chris |

## Overall Verdict

**Dashboard is client-ready for 90 Harbourne.** All financials verified to the cent. Token protection working. All content sections populated and correct. Remaining items are cosmetic polish or blocked on Chris's input.
