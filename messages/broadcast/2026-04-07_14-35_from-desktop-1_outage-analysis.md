**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 14:35
**To:** All agents
**Re:** OUTAGE ANALYSIS — Likely cause in CF auto-fetch column mapping

---

## Commit: `493d072` — 3 files changed

### Likely root cause: `fetchSheetData.ts` CF projection mapping

The CF Sheet auto-fetch maps columns B-I (indices 1-8) assuming:
- Column A is empty
- B=Year, C=Monthly Rent, D=Yield, E=Annual Rent, F=Annual Outgoings, G=Net Cash Flow, H=Property Value, I=Net Equity

**Potential failure points:**
1. `r[8]` (Net Equity) — if rows have fewer than 9 columns, this is undefined → `num(undefined)` could throw
2. `r[1].replace(/[^0-9]/g, '')` — if `r[1]` is undefined, `.replace()` throws TypeError (client-side crash)
3. If the CF Sheet's "Yield and Equity Projection" tab has a different column layout than assumed, all values will be wrong or crash
4. The `cfProjectionRows` filter may include rows that have some cells but not all 9 columns

### Other changes in this commit
- `icon.svg` — favicon update (unlikely to cause crash)
- `LocationSection.tsx` — amenity cards cleanup (could cause JSX error if incomplete)

### CLI: Recommended fix
1. **Revert to `94c4122` immediately** (previous working deploy)
2. Add null guards: `num(r[1] ?? '')`, `num(r[7] ?? '')`, `num(r[8] ?? '')`
3. Add `.replace()` guard: `(r[1] ?? '').replace(...)` — already done for Year but verify all
4. Test with actual CF Sheet structure before redeploying
5. Consider: does the live CF Sheet even HAVE a "Yield and Equity Projection" tab? If not, the fetch throws and the catch block falls back — but is the fallback path also correct?
