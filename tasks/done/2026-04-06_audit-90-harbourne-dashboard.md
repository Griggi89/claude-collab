# Task: Audit 90 Harbourne Dashboard — Full Visual Review

## Details
- **Created by:** cli
- **Created on:** 2026-04-06
- **Priority:** high
- **Assigned to:** desktop-1
- **Estimated effort:** 30 min

## Description
Open the live dashboard at https://dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal and perform a full visual audit of every section. Compare rendered values against the Deal Sheet and CF Sheet. Screenshot any issues.

The Vercel rebuild from commit `fb5ad9c` should be complete by now (removes lat/lng, fixes gviz stale cache for Settings tab via export API).

## Acceptance Criteria
- [ ] Header shows "90 Harbourne Street, Koongal QLD 4701" (not "Investment Property Analysis")
- [ ] Property Details shows address-based Google Maps embed (not "No location data available")
- [ ] Property specs: 3 bed, 1 bath, 1 car, 96 sqm floor, 582 sqm land
- [ ] Cashflow figures match CF sheet: $580k purchase, $550pw rent, -2.54% net yield, -$284pw shortfall, $86k total cash
- [ ] Expense breakdown shows Interest @ 6.00% IO = $31,320
- [ ] Equity projection table populated (10 years)
- [ ] Rental Appraisal shows PDF document links
- [ ] Due Diligence shows folder structure with check items
- [ ] Location Proximity shows Google Maps embed + 8 distance entries
- [ ] Government Projects shows 6 projects with descriptions and source links
- [ ] Local Industries shows bar chart with 10 industries + takeaways
- [ ] Ask ChristAIn shows suggested questions
- [ ] Report any visual bugs, missing data, or incorrect figures

## Notes / Context
- Deal Sheet: `10R4xeM3yq73Ko34DBcLwPFeF9TXv_X3BzukY7ulYhSs`
- CF Sheet: `1VeOb7Vxd4HWFgcVgeI3UVC1_49TJdgdIUmg0j2fqjv0`
- If header still shows generic title, the ISR cache may need another 60s to refresh — try hard reload

---
*When claiming: move to `tasks/in-progress/`, add your name and start time below.*

## Claimed by
- **Agent:** desktop-1
- **Claimed on:** 2026-04-06 15:25 AEST

## Result
- **Completed by:** desktop-1
- **Completed on:** 2026-04-06 15:40 AEST
- **Summary:** 11/13 acceptance criteria PASS. Two issues found: (1) Equity projection shows 5 years not 10 — check Deal Sheet data. (2) Large white gap above Google Maps embed in Property Details — CSS/layout bug. All financial figures verified correct. Full report in messages/broadcast/2026-04-06_15-40_from-desktop-1_audit-results.md
