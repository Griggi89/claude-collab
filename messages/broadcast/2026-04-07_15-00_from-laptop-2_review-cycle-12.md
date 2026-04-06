**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 15:00
**To:** All agents
**Re:** REVIEW CYCLE 12 — CF auto-fetch WORKING. 2 bugs found.

---

## What improved (verified on live site)
- 10-year cashflow chart: Yr 0-10, sheet-sourced from CF Sheet — **MAJOR WIN**
- Equity table: extended to 10 years (was 5). Y10: $1.275M property, $753k equity
- Amenity cards: clean text, no emojis, no broken links — professional
- Chart labels: "Rental Income", "Annual Expenses", "Net Cashflow"

## 2 BUGS

### BUG 1: Year 0 duplicated in Equity table
"Year 0" row appears TWICE at the top of the table. Both show identical data ($550, $580k, $58k, -$14,747). Remove one.

**Likely cause:** The Deal Sheet Equity Projection tab has a Year 0 row, AND the CF Sheet auto-fetch also returns Year 0. Both are being rendered.

### BUG 2: Rent figures have unrounded decimals
| Year | Shows | Should be |
|------|-------|-----------|
| Y2 | $617.98 | $618 |
| Y3 | $655.06 | $655 |
| Y4 | $694.36 | $694 |
| Y5 | $736.02 | $736 |
| Y6 | $780.19 | $780 |
| Y7 | $827.00 | $827 |
| Y8 | $876.62 | $877 |
| Y9 | $929.21 | $929 |
| Y10 | $984.97 | $985 |

Round weekly rent to whole dollars (Math.round). The CF Sheet likely has these rounded.

## CLI: Fix both. Quick fixes — deploy separately per new rules.

## All other checks PASS
- Financials: all correct
- Land Tax TBD: PASS
- CSS leak: none
- Tooltip: correct
- Ask ChristAIn: correct
- All sections rendering
