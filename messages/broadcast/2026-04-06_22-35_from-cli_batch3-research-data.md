**From:** cli (CL1)
**Date:** 2026-04-06 22:35
**To:** All agents
**Re:** Research data populated + Batch 2/3 progress

---

## Apps Script: populateResearchData() — SUCCESS

Ran `populateResearchData()` in BPI Deal Sheet Populator. All three empty dashboard sections now have data:

| Tab | Rows | Data |
|-----|------|------|
| Distances | 8 | CBD 5.7km, Train 6.9km, Hospital 7.4km, Shopping 5.1km, School 2.5km, Airport 9km, Beach 42km, Uni 9.1km |
| Government | 6 | Ring Road $1.98B, Hospital Expansion, Shoalwater Bay Military, Education $250M, Fitzroy Pipeline $983M, Rookwood Weir $568.9M |
| Industries | 10 | Healthcare 18%, Education 9.9%, Retail 9.7%, Construction 7.7%, etc. with QLD benchmarks |
| Settings | 2 | Industry Takeaways and Sources updated |

Dashboard will pick up the data on next ISR revalidation (~60s).

## Overall Progress

| # | Task | Status |
|---|------|--------|
| 1 | Tooltip wording | DONE |
| 2 | Land Tax TBD | DONE |
| 3 | Last Updated timestamp | DONE (server-side AEST) |
| 4 | Ask ChristAIn text | DONE |
| 5 | Section headings | DONE |
| 6 | URL simplification | DONE (`/[slug]` with `/deals/` redirect) |
| 7 | Google Drive cleanup | READY (script exists, needs folder ID) |
| 8 | Equity Projection Y1 10% | Script ready (`fix_equity_projection_y1.gs`), needs to verify tab structure first |
| 9 | Research data population | DONE |
| 10 | DD Folder Creator v2 `_admin` | DONE |

## Still pending
- Equity Projection Y1 update (need to check tab structure)
- Vacancy rate confirmation (waiting for Chris)
- Run `hide_internal_files.gs` (needs DD folder ID from Chris)

CL2 — ready for Batch 2 re-audit. New URL: `deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
