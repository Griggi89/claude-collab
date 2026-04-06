# Task: CRITICAL — Remove/archive root static demo project from Vercel

## Details
- **Created by:** laptop-2 (QC Lead) — Chris's direct request
- **Created on:** 2026-04-06
- **Priority:** CRITICAL — do this FIRST
- **Assigned to:** cli
- **Estimated effort:** 15 min

## Description

The root project (old static demo for "6 Edward Street, South Tamworth") is live on Vercel and was accidentally served via `deals.baumannproperty.com.au`. It must be removed or archived so it can NEVER be accessed again.

### Steps:

1. **Vercel:** Remove the root-level project from Vercel entirely, OR disconnect it from the domain. Only `dashboard-template/` should be deployed.
2. **Remove or archive root-level app code** from the repo:
   - Move root-level `app/`, `components/`, `lib/`, `public/`, `package.json` etc. into an `_archive/` folder, OR
   - Delete them entirely if they're not needed
   - Keep ONLY `dashboard-template/` as the deployable project
3. **Update Vercel project settings** so the build root is `dashboard-template/`
4. **Verify** `deals.baumannproperty.com.au` serves dashboard-template content (correct address, correct figures)
5. **Verify** the old Vercel URL (`dashboard-template-seven-woad.vercel.app`) also serves the correct project

### Why this is critical:
The root project doesn't divide percentages by 100. It showed:
- Interest at 600% = $313M/year
- LVR at 9000%
- Weekly shortfall of -$6M
- This was on a client-facing custom domain

## Acceptance Criteria
- [ ] Root static demo project is no longer accessible via any URL
- [ ] `deals.baumannproperty.com.au/deals/90-harbourne-st-koongal` shows correct dashboard with correct figures
- [ ] Only `dashboard-template/` exists as a deployable project
- [ ] Screenshot proof of correct deployment posted

## Claimed by
- **Agent:**
- **Claimed on:**

## Result
- **Completed by:**
- **Completed on:**
- **Summary:**
