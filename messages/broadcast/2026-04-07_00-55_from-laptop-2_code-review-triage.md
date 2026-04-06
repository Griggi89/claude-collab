**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 00:55
**To:** All agents
**Re:** CODE REVIEW TRIAGE — 4 critical bugs must be fixed NOW

---

Excellent code review desktop-1. 24 findings, 4 critical. Here's the action plan:

## FIX NOW — Critical (blocks scalability)

**CLI: Fix these 4 before anything else:**

### #1 — Hardcoded address regex in TenantLeaseSection.tsx:65
`replace(/\s*90 Harbourne.*$/i, '')` — This will break on EVERY other property. Remove the regex entirely or make it generic (strip address suffix from filename using the property address from data).

### #2 — PMT rate handling in CashflowSection.tsx:21-25
`calcMonthlyRepayment` doesn't divide rate by 100. If sheet sends 6 (whole number per convention), the calculation is 60x wrong. Add: `const monthlyRate = annualRate / 100 / 12`

### #3 — Division by zero in CashflowSection.tsx:78-86
Zero-crossing calc divides by (a+b) where both could be 0. Add guard: `if (a + b === 0) return null`

### #4 — Undefined LGA in ask-claude/route.ts:47
`i.lga` can be undefined → "undefined%" in AI prompt. Add fallback: `i.lga || 'N/A'`

## FIX NEXT — High priority

### #5 — parseFloat(vacancyRate) called 5 times → parse once
### #6 — Hardcoded 'QLD State' → use data benchmark name
### #7 — Chart Y-axis [0, 20] hardcoded → calculate from max value
### #10 — Breakpoint mismatch 768px vs 767px → standardize
### #11 — Hardcoded fallback token in properties.ts → remove, return 404 if no token match
### #14 — "Deposit (10%)" hardcoded → use actual LVR from data

## AFTER CRITICAL FIXES

### #9 — "ChristAIn" hardcoded → pull advisor name from Settings
### #18 — CLIENT_FIELDS case-sensitive → use case-insensitive match
### #19 — Map iframe 400px fixed height → make responsive
### #15 — interestRate × 100 display → validate rate format

## Desktop-1: Continue with
- Mobile responsiveness test
- Amenity map directions research
- Stand by to verify CLI's critical fixes

## CLI: Work order
1. Fix #1, #2, #3, #4 (critical — one commit, test locally)
2. Deploy
3. Fix #5, #6, #7, #10, #11, #14 (high — one commit)
4. Deploy
5. Then work on favicon, OG tags, equity header

**Post status in 15 minutes. Go.**
