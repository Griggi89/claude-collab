**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 13:35
**To:** All agents (CL2 for discussion, Chris for decisions)
**Re:** SCALABILITY AUDIT — What needs fixing before deal #2

---

## Executive Summary

The codebase is **80% ready** for multi-deal deployment. The dynamic architecture (Master Index → Deal Sheet → Dashboard) works. But there are **2 critical**, **3 high**, and **2 medium** issues to fix first.

---

## CRITICAL (Blocks deal #2)

### C1. `properties.ts` fallback still hardcoded in local template
**File:** `dashboard-template/dashboard-template/lib/properties.ts:115-119`
**Issue:** Local template copy still has `90-harbourne-st-koongal` + sheet ID + token as fallback. CL1 fixed this in deployed code (`44592d5`), but the **template directory** that gets duplicated for new deals still has it.
**Fix:** Sync deployed fix to template dir, or ensure DEAL-SETUP.md says "always deploy from the deploy repo, not the template dir."

### C2. 10-year cashflow chart computed in code
**File:** `CashflowSection.tsx:64-77`
**Issue:** Chart extrapolates 10 years using JS math instead of reading from sheet. CL2 already tasked CLI to fix this. **Must be done before deal #2** — different deals may have PI loans where the IO formula is wrong.
**Status:** CL2 directive sent to CLI. Awaiting implementation.

---

## HIGH (Should fix before deal #2)

### H1. Branding is hardcoded throughout — NOT parameterized
All Baumann branding is baked into components. This is **fine for BPI deals** but would break for white-label. For BPI-only use, these are acceptable as-is. But if Chris ever wants to rebrand or partner:

| Location | What's hardcoded |
|----------|-----------------|
| `ask-claude/route.ts:17,25-26,94-95` | "Baumann Property", "Christian Baumann", email, website |
| `layout.tsx:5-6` | Page title + description |
| `DashboardClient.tsx:170,239,260` | Logo alt text, copyright, website link |
| `DisclaimerSection.tsx:37,89,96` | Company name, website URL |
| `AskClaudeSection.tsx:110` | "Powered by Christian Baumann & Claude AI" |
| `SalesComparisonsSection.tsx:47` | "Not provided by Christian Baumann" |
| `GovernmentSection.tsx:26` | "Not provided by Christian Baumann" |
| `Sidebar.tsx:64` | Logo alt text |
| `propertyData.ts:230-232` | Default advisor name, email |

**Recommendation:** For now, leave as-is (all deals are BPI). But consider moving advisor name/email/company to the Settings tab so it's sheet-driven. One-time refactor.

### H2. CDN logo/favicon URLs point to specific Webflow assets
| File | Asset |
|------|-------|
| `layout.tsx:9,23` | Favicon (bp webclip.png) |
| `Sidebar.tsx:63` | Extended logo |
| `AskClaudeSection.tsx:27` | Chat icon |
| `propertyData.ts:234` | Christian's profile photo |

**Risk:** If the Webflow CDN changes or these files are deleted, the dashboard breaks visually. **Not deal-specific** but fragile.
**Recommendation:** Copy assets to `public/` directory and reference locally.

### H3. Ask Claude system prompt has hardcoded advisor context
**File:** `ask-claude/route.ts:17-26, 94-95`
**Issue:** The AI advisor identity is hardcoded twice. If a different advisor handles deal #2, the AI would still say "Christian Baumann."
**Recommendation:** Read advisor name/email from the property's Settings tab and inject into the system prompt dynamically.

---

## MEDIUM (Nice to fix)

### M1. `setup-sheet-template.gs` assumptions
The Apps Script creates tabs for a new Deal Sheet. Need to verify it matches DEAL-SETUP.md and creates all 13 tabs with correct column headers. CL1 aligned this in commit `db4de69` but should be re-verified against the updated DEAL-SETUP.md.

### M2. `populateResearchData()` is region-specific
The Apps Script that populates Government, Industries, and Distances tabs is tuned for Rockhampton/CQ. For a VIC property, it would need a different data set. CL1's scalability prep (`workspace/scalability-prep.md`) confirmed this needs a per-region clone.

---

## WHAT'S ALREADY WORKING (No changes needed)

| Feature | Status |
|---------|--------|
| Master Index → multi-property routing | ✅ Dynamic |
| `/deals/[slug]` routing | ✅ Dynamic |
| Google Sheet data fetching (all 13 tabs) | ✅ Dynamic |
| Token-gated access | ✅ Dynamic |
| ISR revalidation (60s) | ✅ Automatic |
| Property details, cashflow, expenses | ✅ Sheet-sourced |
| Equity projections | ✅ Sheet-sourced |
| Due diligence folders | ✅ Sheet-sourced |
| Rental appraisal PDFs | ✅ Sheet-sourced |
| Map location (lat/lng from Settings) | ✅ Sheet-sourced |
| TenantLeaseSection address regex | ✅ Fixed (generic in deployed code) |

---

## DEPLOYMENT CHECKLIST FOR DEAL #2

### Google Sheet setup
- [ ] Duplicate Deal Sheet template (or run `setupDashboardTemplate()`)
- [ ] Populate ALL Settings tab fields per DEAL-SETUP.md
- [ ] Populate Expenses, Equity Projection, Questions tabs from CF Sheet
- [ ] Run `populateResearchData()` (adapted for deal #2's region)
- [ ] Set up DD tab with all subfolder rows
- [ ] Add Rental Appraisal entries with thumbnails
- [ ] Add row to Master Index Sheet (slug, sheet ID, address, active, token)

### Code changes (one-time before first non-BPI deal)
- [ ] **C2:** Chart sheet-sourcing (CLI in progress)
- [ ] **C1:** Sync properties.ts fix to template dir
- [ ] **H2:** Move CDN assets to `public/` (optional but recommended)
- [ ] **H3:** Parameterize advisor info in Ask Claude prompt (optional for BPI deals)

### Deploy
- [ ] `git push` → Vercel auto-deploys
- [ ] Wait 60s for ISR
- [ ] Run verification checklist from DEAL-SETUP.md

---

## CL2: Discussion points

1. **C1 (template sync):** Should we maintain the `dashboard-template/dashboard-template/` nested dir as the canonical template? Or should new deals just fork from the deploy repo's `dashboard-template/` root? This dual-directory structure is confusing.

2. **H1 (branding):** Is it worth parameterizing branding now, or wait until there's actually a non-BPI deal? I lean toward "leave it" — it's ~30 min of work when needed.

3. **H2 (CDN assets):** Should CLI move the logo/favicon/photo to `public/` this session? Low risk, prevents future CDN breakage.

4. **Priority order:** I'd suggest C2 (chart) → C1 (template sync) → H2 (assets) → everything else later.
