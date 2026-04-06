**From:** laptop-2 (CL2 — Architect / Project Lead)
**Date:** 2026-04-06 18:00
**To:** All agents
**Re:** PROJECT ROADMAP — 6 phases to bulletproof scalability

---

## Objective

Get to a state where Chris can go from "I have a property address" to "live client-ready dashboard link" in under 30 minutes, with zero bugs, every time.

---

## Phase 1: STABILISE (now)

**Goal:** One perfect deal with zero known bugs.

**CLI — do these immediately:**
1. Merge desktop-1's changes: hero image, vacancy rate, tooltip
2. Fix CSS leak in Ask ChristAIn section
3. Fix white gap in Property Details section
4. Deploy to Vercel

**Desktop-1:**
- Stand by. Once CLI deploys, you will re-audit 90 Harbourne (same criteria as last time).

**Gate:** I (laptop-2) will review the deployed result. Every section must be clean — no visual bugs, no missing data, no layout issues. If anything fails, we iterate before moving on.

---

## Phase 2: PROVE SCALABILITY (after Phase 1 gate passes)

**Goal:** Deal #2 works first try using only DEAL-SETUP.md. No ad-hoc fixes.

**CLI:**
1. Pick up the scalability test task from inbox
2. Follow DEAL-SETUP.md step by step for the new property address (Chris to provide)
3. Document every friction point — if something isn't in the docs, that's a bug
4. Deploy deal #2

**Desktop-1:**
- Audit deal #2 using same criteria as 90 Harbourne audit

**The rule:** If ANY code change is needed to make deal #2 work, the template is broken. Fix the template, not the deal.

**Gate:** Deal #2 renders identically in structure to deal #1 with zero code changes.

---

## Phase 3: BLIND TEST (after Phase 2)

**Goal:** Prove the docs are complete — not just the code.

- Chris creates deal #3 himself following DEAL-SETUP.md
- No Claude assistance during setup
- If Chris gets stuck → documentation bug. We fix the docs.

**Gate:** Chris goes from address to live link in under 30 minutes without help.

---

## Phase 4: HARDEN (after Phase 3)

**Goal:** Eliminate classes of bugs, not individual bugs.

I (laptop-2) will design and spec these as tasks:

1. **Input validation** — If a Settings field is empty/wrong, dashboard shows a clear error message instead of broken UI
2. **Deal health check script** — Scans a Deal Sheet, reports what's populated vs missing
3. **Pre-deploy verification** — Automated script that hits the API, checks every section has data, produces pass/fail report
4. **Consistent error states** — Every section handles missing data gracefully. No blanks, no "undefined", no layout collapse

---

## Phase 5: PRODUCTION INFRASTRUCTURE (after Phase 4)

1. Custom domain: `deals.baumannproperty.com.au` (blocked on DNS from Chris)
2. Token auth: `?t=x7k2m9p` required to view any deal
3. Branded 404 page
4. Open Graph meta tags (WhatsApp/email preview cards)
5. Favicon (Baumann logo)
6. Loading skeleton UI

---

## Phase 6: OPERATIONAL WORKFLOW

1. Deal creation < 30 min end to end
2. Deal update < 5 min (change sheet → dashboard auto-updates)
3. Client delivery = generate token link, send
4. Deal archival for closed/expired deals

---

## Key Principle

**Every bug gets fixed in the template, not in a specific deal.** If we patch 90 Harbourne but deal #2 has the same issue, we failed.

---

## Current Blockers

- DNS credentials for `baumannproperty.com.au` (Chris)
- Property address for deal #2 (Chris)

## Immediate Action

**CLI:** Start Phase 1 now. Merge, fix, deploy.
**Desktop-1:** Stand by for re-audit once CLI deploys.
**Laptop-2 (me):** Will review all deployed output and design Phase 4 hardening tasks.
