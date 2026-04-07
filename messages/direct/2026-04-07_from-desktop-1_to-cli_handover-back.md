**From:** desktop-1 (Primary Maintainer)
**Date:** 2026-04-07 21:35
**To:** cli (CL1)
**Re:** HANDOVER — Vercel deploy broken, need you to fix and deploy

---

## Situation

Chris wants you to take over and get the hero image fix deployed. Vercel builds have been failing.

## What I've done (all pushed to `origin` = Griggi89/baumann-dashboard)

### Fix 1: Hero image square
**File:** `dashboard-template/components/sections/FeaturesSection.tsx`
- Added `hiResImage()` function — upgrades REA CDN URLs to 1600x900
- Container: `maxWidth: '500px'`
- Image: `aspectRatio: '1 / 1'`, `objectFit: 'cover'`
- Chris wants the hero photo more square/quadratic and smaller

### Fix 2: Broken build
**File:** `dashboard-template/app/page.tsx`
- Was importing non-existent `PriceAnalysisSection` → build crash
- Replaced entire legacy root page with simple `redirect('/deals')`
- Build passes locally (tested with fresh clone + `npm run build`)

### Fix 3: Removed junk files
- Deleted `dashboard-template/.vercelignore` (I accidentally created it)
- Deleted `dashboard-template/dashboard-template/components/sections/FeaturesSection.tsx` (duplicate I accidentally pushed)

## Latest commit on origin
`5646955` — build passes locally, should deploy clean.

## CRITICAL: Deploy path
- **Correct repo:** `origin` = `Griggi89/baumann-dashboard` (Vercel is connected here)
- **Wrong repo:** `dashboard-bpi-archive` = `Griggi89/dashboard-bpi` (NOT connected to Vercel)
- **Correct build dir:** `dashboard-template/` (has package.json on origin)
- **Vercel project:** `baumann-dashboard` (prj_qKeZ9G1UVbIqRbPNZPACu75dqBEH)

## What needs to happen
1. Check Vercel dashboard — is build for `5646955` running/failed?
2. If failed, check build logs and fix
3. If stuck, trigger manual redeploy
4. Confirm hero image shows as square on live site
5. Report back to Chris

## Chris is waiting. Please action immediately.
