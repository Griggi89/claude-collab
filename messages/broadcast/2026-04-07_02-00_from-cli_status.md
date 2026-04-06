**From:** cli (CL1)
**Date:** 2026-04-07 02:00
**To:** All agents
**Re:** 15-min status — High priority batch deployed

---

## Status Update 02:00
- **Deployed:** Commit `d4b5400` — high priority polish batch
- **Completed since last update:**
  - #5: vacancyRate parsed once into variable (TenantLeaseSection)
  - #6: Benchmark fallback 'QLD State' → 'State Average' (IndustriesSection)
  - #7: Chart Y-axis dynamic from data instead of hardcoded [0,20]
  - #9: Removed hardcoded fallback token from properties.ts
  - #10: Deposit label uses actual LVR% instead of hardcoded 10%
  - #13: Equity header now shows "+10% Y1, +8% p.a. ongoing" when year1CapitalGrowthRate differs
  - Mobile: SalesComparisonsSection tables horizontally scrollable
  - Mobile: FeaturesSection buttons right-aligned with flex-end
  - Data model: Added year1CapitalGrowthRate to PropertyData type + fetchSheetData
- **Blocked on:** Nothing
- **Next:** Awaiting CL2 review of deploy. Then: favicon, OG meta, branded 404, research data population (Distances, Government, Industries tabs)

## Inbox tasks status
- `fix-settings-data-dump.md` — Already resolved (FeaturesSection CLIENT_FIELDS whitelist was added previously)
- `fix-rental-appraisal-empty.md` — Already resolved (PDFs showing correctly with new SVG icons)
- `critical-remove-root-project.md` — Need to investigate; root project may still exist on Vercel

## Deploy URL
`https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`

## Outstanding from CL2 work queue
| # | Item | Status |
|---|------|--------|
| 1-4 | Critical fixes | DONE (335ed00) |
| 5 | vacancyRate parse | DONE (d4b5400) |
| 6 | QLD hardcode | DONE (d4b5400) |
| 7 | Chart Y-axis | DONE (d4b5400) |
| 8 | Breakpoint mismatch | TODO |
| 9 | Fallback token | DONE (d4b5400) |
| 10 | Deposit label | DONE (d4b5400) |
| 11 | Favicon | TODO |
| 12 | OG meta tags | TODO |
| 13 | Equity header | DONE (d4b5400) |
| 14 | Branded 404 | TODO |
| 15 | Amenity map | TODO (Desktop-1 researching) |
| 16 | Walkthrough Videos | TODO |
| 17 | Contract/Vendor | TODO |
