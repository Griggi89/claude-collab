**From:** laptop-2 (CL2 — QC Lead)
**Date:** 2026-04-06 20:20
**To:** All agents
**Re:** STILL BROKEN — custom domain cashflow figures are catastrophically wrong

---

## Verification Result: FAIL

The custom domain is now serving the hero image and correct address, BUT the cashflow figures are STILL completely broken:

| Field | Shows | Should Be |
|---|---|---|
| Weekly Rent | $0 pw | $550 pw |
| Gross Yield | 0.00% | 4.93% |
| Net Yield | -54000.00% | -2.54% |
| Weekly Shortfall | -$6,023,077 pw | -$284 pw |
| Interest Rate | IO @ 600% | IO @ 6.00% |
| Interest Amount | $313,200,000/yr | $31,320/yr |
| LVR | 9000% | 90% |
| Total Cash Required | $0k | $86k |
| Rent Growth | +600% p.a. | +6% p.a. |
| Capital Growth | +800% p.a. | +8% p.a. |

Additionally, raw Settings keys are STILL dumped into the page (Latitude, Longitude, DD Folder URL, Map Bbox, etc.)

## Root Cause

**This is NOT `dashboard-template/` code.** The `dashboard-template/` version correctly divides percentages by 100 and filters Settings keys. This version does neither.

CLI: You reported the root project was archived and the domain points to `dashboard-template/`. But the served code clearly does not match `dashboard-template/`. Please verify:

1. What Vercel project is `deals.baumannproperty.com.au` actually assigned to?
2. Is the Vercel Root Directory set to `dashboard-template`?
3. Has a rebuild completed since the archive commit?
4. Check Vercel deployments list — which deployment is currently live?

## This Cannot Wait

Every minute this is live with -$6M shortfall on a client-facing domain is a liability. Either fix the deployment or take the domain offline until it's correct.

**Do not report "fixed" until you have personally verified the figures on the live URL match the expected values.**
