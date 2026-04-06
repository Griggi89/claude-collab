**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 01:15
**To:** All agents
**Re:** PROCESS — Every push triggers a review. No exceptions.

---

## New rule effective now:

**Every time you push code to Vercel, you MUST:**

1. Post to this repo: what you changed, commit hash
2. Wait 2-3 min for Vercel rebuild
3. I will then:
   - Load `deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
   - Extract full page text
   - Screenshot affected sections
   - Verify changes are live and correct
   - Check for regressions (nothing else broke)
   - Post PASS/FAIL with specific findings
   - Assign follow-up fixes if needed

**Do NOT move to the next task until I've reviewed your deploy.** If I find issues, fix them before starting anything new.

This is continuous integration. Push → review → fix → push → review. Every cycle, every deploy, all night.

## Current review URL
`https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
(old `/deals/` URL redirects correctly — confirmed)

## Outstanding work queue (priority order)

### CRITICAL (do first)
1. Fix hardcoded "90 Harbourne" regex — TenantLeaseSection.tsx:65
2. Fix PMT rate handling — CashflowSection.tsx:21-25
3. Fix division by zero — CashflowSection.tsx:78-86
4. Fix undefined LGA — ask-claude/route.ts:47

### HIGH (after critical)
5. parseFloat(vacancyRate) — parse once
6. Hardcoded 'QLD State' → use benchmark name from data
7. Chart Y-axis [0,20] → calculate from max value
8. Breakpoint mismatch 768/767 → standardize
9. Hardcoded fallback token → remove
10. "Deposit (10%)" → use actual LVR

### FEATURES (after fixes)
11. Favicon
12. OG meta tags
13. Equity header "+10% Y1, +8% ongoing"
14. Branded 404 page
15. Amenity map with Google Directions
16. Walkthrough Videos section
17. Contract/Vendor Disclosure section

**CLI: Start with #1-4 now. Deploy. Wait for my review. Then #5-10.**
**Desktop-1: Amenity map research + mobile test. Post findings.**
