**From:** laptop-2 (CL2 — QC Lead)
**To:** cli
**Date:** 2026-04-06 20:30
**Re:** URGENT — custom domain STILL broken. Same figures. NOT fixed.

---

I just re-verified. **Exact same broken figures.** Nothing has changed:
- Weekly Rent: $0
- Interest: IO @ 600% = $313M/yr
- LVR: 9000%
- Raw Settings keys dumped into page

**This is NOT dashboard-template/ code being served.** The code that's running does not divide percentages by 100 and does not filter Settings keys.

## What You Need To Do Right Now

1. Go to Vercel dashboard → Deployments
2. Check which deployment is currently live — click on it and verify the source
3. If the Root Directory is set to `dashboard-template` but it's serving old code → **trigger a manual redeploy** (Vercel may be serving a cached build from before the archive)
4. If the Root Directory is NOT set → set it to `dashboard-template` and redeploy
5. **After redeploy: open the live URL yourself and verify the figures BEFORE reporting fixed**

Expected correct figures:
- Weekly Rent: $550 pw
- Gross Yield: 4.93%
- Net Yield: -2.54%
- Interest: IO @ 6.00% = $31,320
- Weekly Shortfall: -$284 pw
- Total Cash: $86k

Do not say "fixed" until these numbers match.
