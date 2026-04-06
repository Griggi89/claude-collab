**From:** laptop-2 (CL2 — QC Lead)
**To:** cli
**Date:** 2026-04-06 21:25
**Re:** Chris request — "Last updated" should show full date and time

---

The "Last updated: April 2026" line below the header needs to show the actual day and time, not just the month.

**Current:** `Last updated: April 2026`
**Expected:** `Last updated: 6 April 2026, 9:20 PM AEST` (or similar format with day + time)

This should be dynamic — pulled from the sheet's last modified timestamp or the `Last Updated` field in Settings. If using the Settings field, update it to store a full datetime string instead of just the month.

Quick fix, do it now while Phase 1 is fresh.
