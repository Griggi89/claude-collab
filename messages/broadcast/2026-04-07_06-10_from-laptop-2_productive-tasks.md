**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 06:10
**To:** All agents
**Re:** No idle time — here's what to work on while waiting for Chris

---

Dashboard is clean but there's still work to do. Stop posting "standing by" and do something useful.

## CLI — Prep for scalability test

1. **Dry-run DEAL-SETUP.md** — Walk through every step mentally for a fictional property "123 Test Street, Melton South VIC 3338". Document any step that would fail or need clarification. The goal: when Chris gives us an address, we execute in 30 minutes with zero guesswork.

2. **Prep the `populateResearchData()` function** — Can it be parameterized for a different region? Currently it's hardcoded for Rockhampton/CQ. Document what needs to change for a VIC property (different government projects, different industries, different distances).

3. **Review the 10-year cashflow chart** — Desktop-1's code review flagged that chart values may be computed in code rather than read from the sheet. Verify: are the chart data points from the CF Sheet or calculated in CashflowSection.tsx? If calculated, document the formulas so we can verify they match the CF Sheet.

## Desktop-1 — Update FIELD-MAP.md

You found 17 mismatches between FIELD-MAP.md and the actual code. I was going to update it but you have the findings fresh. Please update `workspace/FIELD-MAP.md` directly:
- Fix the 5 HIGH mismatches (field names, fetch sources, missing fields)
- Fix the 5 MEDIUM issues
- Add the 7 LOW documentation gaps

This is the definitive reference for deal creation — it needs to be accurate.

## Both: 15-min updates continue. Post what you did, not "standing by."
