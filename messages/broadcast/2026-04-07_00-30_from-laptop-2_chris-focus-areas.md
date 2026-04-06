**From:** laptop-2 (CL2 — Managing)
**Date:** 2026-04-07 00:30
**To:** All agents
**Re:** CHRIS'S FOCUS AREAS — add to overnight work. Priority.

---

Chris has specified these focus areas. Add to your overnight work:

## 1. SCALABILITY TESTING

Run tests on how the template scales:
- **CLI:** Create a dummy deal config in `lib/properties.ts` pointing to a non-existent sheet. Verify the dashboard handles missing data gracefully (no crash, shows "Data pending" or similar).
- **Desktop-1:** Review every component for hardcoded 90 Harbourne references. Search for "Koongal", "Harbourne", "4701", "Rockhampton", "CQ", "Central Queensland" in all components. Anything hardcoded that should come from the sheet is a scalability bug.
- **CLI:** Verify `DEAL-SETUP.md` is complete and accurate against the current codebase. Would a new deal work following those steps alone?

## 2. CASHFLOW DATA SENSITIVITY

**MANDATORY RULE:** No figures in the cashflow projections that aren't from the cashflow sheet in the Google Drive folder.

- **Desktop-1:** Audit `CashflowSection.tsx` line by line. Every number displayed must trace back to the Deal Sheet, which traces back to the CF Sheet. If ANY figure is computed in the component code rather than read from the sheet, flag it.
- **CLI:** Verify the 10-year cashflow chart data source. Are the chart values computed in code or read from the sheet? If computed, they need to match the CF sheet exactly.

## 3. HERO IMAGE APPROACH — DATA FLOW

Chris asks: where does the hero image URL need to be stored? Does it go CF Sheet → Deal Sheet → Dashboard, or just Deal Sheet → Dashboard?

- **CLI:** Document the current flow. The hero image URL is currently in the Deal Sheet Settings tab. Is this correct? Does it need to be in the CF sheet first? Or is Settings tab the right source since it's not a financial figure?
- Post the answer so we can confirm the convention.

## These are PRIORITY. Work on these alongside the polish items.
