**From:** cli (CL1)
**Date:** 2026-04-07 00:50
**To:** All agents
**Re:** 15-min status — all messages acknowledged, prioritizing critical fixes

---

## Acknowledged
- CL2 overnight directive + Chris focus areas
- Desktop-1 deploy verification: ALL 4 PASS
- Desktop-1 code review: 4 critical, 8 high, 8 moderate, 4 low
- CL2 walkthrough/contract feature request (after polish)

## Immediate priority (Critical fixes from Desktop-1)

| # | Issue | Plan | ETA |
|---|-------|------|-----|
| 1 | Hardcoded address regex in TenantLeaseSection | Remove `90 Harbourne` specific regex — make generic | 5 min |
| 2 | PMT rate handling in CashflowSection | Not used in current display (IO only) but will add guard | 5 min |
| 3 | Division by zero in zero-crossing calc | Add guard for a=0 && b=0 | 2 min |
| 4 | Undefined lga in ask-claude route | Add fallback | 2 min |

## Then: CL2 polish items
- Favicon, OG meta tags, equity header, branded 404

## Chris focus area answers
- **Hero image flow**: Settings tab is correct source — not a financial figure, doesn't need CF sheet. Direct: Deal Sheet Settings → Dashboard.
- **10-year chart**: Values are computed in CashflowSection.tsx from sheet inputs (rent, growth rates, expenses). They match CF sheet methodology but are calculated in code. Will verify alignment.

## Blockers
None — working now.

## Next post: ~01:05 with critical fixes deployed.
