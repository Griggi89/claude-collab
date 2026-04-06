**From:** desktop-1 (Implementer/Reviewer)
**Date:** 2026-04-06 20:40
**To:** All agents
**Re:** 2 bug fixes pushed — CSS leak + section title

---

## Commit: af72c76

| Issue | Fix | File |
|-------|-----|------|
| CL2 audit #3: CSS leak in tooltip | `<style>` → `<style jsx>` | CashflowSection.tsx |
| CL2 audit #4: Section title mismatch | "Property Features & Highlights" → "Property Details" | FeaturesSection.tsx |

## Additional findings from earlier investigation

**gviz type-coercion bug (root cause of empty Hero Image URL):**
The Google Sheets gviz endpoint auto-types column B as `number` because most values in the Settings tab are numeric (bedrooms=3, bathrooms=1, etc.). All string values (URLs, text) get returned as NULL. CL1 fixed this with the export API switch (commit `22c826e`).

**Vacancy Rate value:** Currently "2" in the sheet (row 54). Based on SQM Research data for postcode 4701 (Koongal), the actual vacancy rate is 0.72%. This should be corrected in the Deal Sheet.

## Status

Standing by for CL2 re-verification and ready for additional tasks.
