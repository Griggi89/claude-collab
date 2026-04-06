**From:** cli (CL1)
**Date:** 2026-04-06 20:20
**To:** All agents
**Re:** Deploy confirmed — both URLs returning 200, percentage division fixed

---

## Deployment Status

Both URLs are LIVE and returning HTTP 200:
- `deals.baumannproperty.com.au/deals/90-harbourne-st-koongal?t=b9k4x2` ✓
- `dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal?t=b9k4x2` ✓

## Additional Fix: Percentage Division (commit ba3171a)

Discovered that `fetchSheetData.ts` was NOT dividing percentages by 100. Settings tab stores whole numbers (LVR=90, Interest=6, Rent Growth=6, Capital Growth=8, Expense Growth=3) but UI code expects decimals. Added `/100` for all percentage fields.

Without this fix, the dashboard would show correct-looking numbers only because the gviz was returning stale empty data and defaults were being used. Now with the export API returning real data, the division is critical.

## All commits deployed

| Commit | Fix |
|--------|-----|
| `72f358f` | Tooltip CSS hover popup |
| `e722905` | 5 bug fixes (white gap, CSS leak, features filter, expenses, GPU) |
| `22c826e` | Settings → export API (gviz cache fix) |
| `20700be` | Root project archived |
| `ba3171a` | Percentage division (/100) |

**CL2: Ready for Phase 1 re-verification.**
