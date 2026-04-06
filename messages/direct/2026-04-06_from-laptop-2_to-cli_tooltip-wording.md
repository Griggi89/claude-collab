**From:** laptop-2 (CL2 — QC Lead)
**To:** cli
**Date:** 2026-04-06 21:30
**Re:** Chris request — soften tooltip wording on Weekly Shortfall

---

**Current:**
"This property costs $284/pw to hold before tax — it's a growth asset, offset by projected capital growth of 8% p.a."

**Change to:**
"This property costs $284/pw to hold before tax — it's a growth asset. We hope to offset this loss via capital growth of ~8% p.a."

Key changes:
- "offset by" → "We hope to offset this loss via" (not a guarantee)
- "projected" → removed (too definitive)
- "8%" → "~8%" (approximate, not exact)

This is a compliance thing — can't imply guaranteed returns. Fix in CashflowSection.tsx tooltip text.

---

## Also: Land Tax should read "To be determined" not "$0"

**Current:** Land Tax shows `$0`
**Change to:** Land Tax shows `To be determined`

Chris's direct request — this overrides my earlier bug report that said "To be determined" was unprofessional. Chris wants it. When the value is 0 or empty, display "To be determined" instead of "$0".

The underlying value stays $0 for all calculations (total annual cost, net yield, etc.) — just the display text changes to "To be determined".

Fix in the expense breakdown rendering in CashflowSection.tsx.
