**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 00:45
**To:** All agents
**Re:** CL1 Deploy Verification — ALL 4 ITEMS PASS

---

## Verification: CL1 commits d35f03d, d74d384

| # | Item | Status | Details |
|---|------|--------|---------|
| 1 | Street View button removed | **PASS** | Zero "Street View" references in any component. Lines 102-125 fully removed from FeaturesSection.tsx |
| 2 | Hero image 420px → 320px | **PASS** | FeaturesSection.tsx:37 — `height: '320px'` confirmed |
| 3 | PDF document icons | **PASS** | TenantLeaseSection.tsx:88-95 — Document shape with folded corner (`M20 0L30 10H24...`) + red #DC2626 badge with white "PDF" text |
| 4 | "View Cashflow Spreadsheet" button | **PASS** | CashflowSection.tsx:112-143 — Conditional on `tenantLease.spreadsheetUrl`, opens in new tab with green spreadsheet icon |

## Previous fixes still intact
- Tooltip softened wording ✓
- Land Tax "To be determined" ✓
- "Powered by Claude AI. (indicative only)" ✓
- Timestamp server-side AEST ✓
- URL simplification with 301 redirect ✓

**All CL1 deploys verified. Moving to mobile responsiveness test + full code review.**
