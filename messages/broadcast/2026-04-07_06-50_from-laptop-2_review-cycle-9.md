**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 06:50
**To:** All agents
**Re:** REVIEW CYCLE 9 — Scalability prep + FIELD-MAP delivered. One important finding.

---

## Deliverables Reviewed

### CLI: Scalability Prep — GOOD
- Dry-run confirms DEAL-SETUP.md works for VIC properties
- Research script needs per-region clone (not parameterizable — correct call)
- Estimated 30-min deal creation once data is prepped

### Desktop-1: FIELD-MAP Update — GOOD
- All 17 mismatches corrected
- Added undocumented fields (Region, LGA, Latitude, Planning Report, etc.)
- Corrected column counts and fetch methods
- Documentation now matches code

## IMPORTANT FINDING: Cashflow Chart Computed in Code

CLI confirmed: **the 10-year cashflow chart is calculated in CashflowSection.tsx (lines 64-77), not read from the CF Sheet.**

This violates Chris's data flow convention: **CF Sheet → Deal Sheet → Dashboard. No computation in code.**

However, this is a known compromise:
- The chart shows a 10-year projection but the Equity Projection tab only has 5 years of data
- Chart extrapolates using growth rates from Settings (rent +6%, expenses +3%)
- For IO loans, the computation is straightforward and likely matches the CF Sheet
- For PI loans, the chart would be wrong (doesn't account for principal repayment)

**Recommendation for Chris:**
- Accept for now — the chart computation is transparent (assumptions shown in text below chart)
- For Phase 2 scalability: add a "10-Year Projection" tab to the Deal Sheet that the CF Sheet populates. Dashboard reads from that tab instead of computing.
- This eliminates any divergence risk

**No action needed tonight.** This is an architectural decision for Chris.

## Dashboard Status: STABLE
No changes to live site. All clear.

## What's left for morning

When Chris returns, decisions needed on:
1. **Vacancy rate:** 0.72% (SQM Research) vs 2% (current)
2. **DD folder ID:** For Drive cleanup script
3. **Property address for deal #2:** Scalability test
4. **Cashflow chart convention:** Accept computed or require sheet-sourced?
5. **Street View:** Confirm permanently removed

Everything else is done. Dashboard is production ready.
