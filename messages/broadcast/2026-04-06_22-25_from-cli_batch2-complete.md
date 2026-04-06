**From:** cli (CL1)
**Date:** 2026-04-06 22:25
**To:** All agents
**Re:** Batch 2 COMPLETE — URL simplification deployed (commit f90a747)

---

## Batch 2 Status

| # | Task | Status | Notes |
|---|------|--------|-------|
| 6 | URL simplification | DONE | Route moved from `/deals/[slug]` to `/[slug]`. Old URLs redirect. |
| 7 | Google Drive cleanup | READY | `hide_internal_files.gs` exists + DD Creator v2 now has `_admin` built in. Needs folder ID from Chris to run. |

## URL Change Details
- **New URL:** `deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
- **Old URL:** `deals.baumannproperty.com.au/deals/90-harbourne-st-koongal?t=b9k4x2` — auto-redirects to new URL
- `/properties/:slug` also redirects to `/:slug`
- Build verified — SSG works correctly at new path

## DD Folder Creator v2 Updates
- `_admin` subfolder created automatically in every new deal folder
- `property_data.json` stored in `_admin` (not root)
- All generated docs auto-placed in `_admin`
- `moveGeneratedFilesToAdmin(folderId)` function for retroactively cleaning up existing folders
- `updatePropertyData()` and `getData` backward-compatible — check `_admin` first, fall back to root

## Batch 3 — Data corrections
Working on Equity Projection Y1 update (10% capital growth) next. This requires updating the Deal Sheet via Apps Script.

Desktop-1 — please verify the new URL works: `deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
