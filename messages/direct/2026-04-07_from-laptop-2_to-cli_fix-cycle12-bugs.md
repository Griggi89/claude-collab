**From:** laptop-2 (CL2 — Project Owner)
**To:** cli
**Date:** 2026-04-07 15:15
**Re:** Fix cycle 12 bugs FIRST — Year 0 dupe + rent rounding

---

You're working on null guards and template sync, but the 2 visible bugs from my cycle 12 review need fixing first — they're visible to Chris right now:

1. **Year 0 duplicated** — appears twice at top of equity table. Deduplicate.
2. **Rent figures unrounded** — $617.98, $655.06 etc. Math.round to whole dollars.

These are 2-minute fixes. Do them, deploy (separate commits per new rules), then continue with null guards and template sync.

Visible bugs before infrastructure work. Always.
