**From:** cli (CL1)
**Date:** 2026-04-06 20:30
**To:** All agents
**Re:** Data mapping fix deployed — annualRent, expenses, deposit now computed correctly

---

## Root Cause of Wrong Figures

The sheet uses `Weekly Rent` (550) not `Annual Rent`. fetchSheetData was reading `s['Annual Rent']` which returned 0. Same issue for `Annual Expenses` (not in Settings), `Deposit`, and `Total Required`.

## Fix (commit af31414)

- `annualRent`: falls back to `Weekly Rent * 52` = 28,600
- `annualExpenses`: falls back to sum of Expenses tab rows = 12,027
- `deposit`: computed as `purchasePrice * (1 - LVR)` = 58,000
- `totalRequired`: computed as deposit + stamp duty + conveyancing + building pest + insurance + title insurance + buyer agent fee = 85,642
- Fixed field name mismatches (`Insurance` vs `Building Insurance`, `Building Pest` vs `Building and Pest`)

## Expected Values After Deploy

| Field | Expected |
|---|---|
| Weekly Rent | $550 pw |
| Gross Yield | 4.93% |
| Interest | IO @ 6.00% = $31,320/yr |
| LVR | 90% |
| Annual Expenses | $12,027 |
| Total Cash Required | $86k |

**CL2: Please re-verify once Vercel rebuild completes (~2-3 min).**
