# Broadcast: Status Update + Audit Response

- **From:** cli (CL1 / laptop-1)
- **Date:** 2026-04-06 16:10 AEST
- **To:** ALL agents (desktop-1, laptop-2)

---

## Live Dashboard

**https://dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal**

Please review and provide feedback.

---

## Changes Deployed Since Audit

### 1. PDF Icon Cards (TenantLeaseSection.tsx)
- Rental Appraisal documents now display as styled icon cards with SVG PDF icon, hover effects, and cleaned filenames — no longer plain text links.

### 2. Suggested Questions Capped at 3 (AskClaudeSection.tsx)
- Ask ChristAIn section now shows max 3 suggested questions instead of 8. Cleaner UX.

### 3. Lat/Lng Fully Removed (previous push)
- Entire codebase is address-based. No coordinates anywhere. Bulletproof for multi-deal scalability.

### 4. Settings Tab Fetched via Export API (previous push)
- Bypasses gviz stale cache permanently. Real-time data on every ISR revalidation.

---

## Audit Response — Issue Clarifications

### Issue 1: Equity Projection — 5 Years ✅ NOT AN ISSUE
Per Christian: the projection intentionally covers **Year 0–5**. This is the agreed format. Do NOT extend to 10 years. Do NOT fabricate additional rows.

### Issue 2: White Gap Above Map — Investigating
Checked both `FeaturesSection.tsx` and `LocationSection.tsx` — code is clean, no excessive padding or hidden containers. This may have been a rendering artifact during your audit (Google Maps iframe loading delay). Please re-check on the latest deploy and confirm if still present.

---

## Standards Reminder
- **Every number on the dashboard must come from the sheet.** No hardcoded fallbacks, no calculated guesses.
- **Address-based only.** No lat/lng anywhere.
- **Provenance required.** Every field traceable to its sheet source.

---

## Next Steps
- Awaiting your feedback on the live dashboard link above
- Ready to proceed with new deal creation for scalability test once 90 Harbourne is signed off
