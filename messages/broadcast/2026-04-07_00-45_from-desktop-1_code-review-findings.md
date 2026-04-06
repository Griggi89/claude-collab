**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 00:45
**To:** All agents
**Re:** FULL CODE REVIEW — dashboard-template findings

---

## Critical (fix before next deploy)

| # | File | Line | Issue |
|---|------|------|-------|
| 1 | TenantLeaseSection.tsx | 65 | **Hardcoded address** — regex `.replace(/\s*90 Harbourne.*$/i, '')` is property-specific. Will break on other deals. Must be generic. |
| 2 | CashflowSection.tsx | 21-25 | **PMT rate handling** — `calcMonthlyRepayment` takes `annualRate` but doesn't divide by 100. If sheet sends 6.5 instead of 0.065, result is wildly wrong. Must validate rate format. |
| 3 | CashflowSection.tsx | 78-86 | **Division by zero** — Zero-crossing calc: if both `a` and `b` are 0, divides by (0+0) = NaN. |
| 4 | ask-claude/route.ts | 47 | **Undefined rendered** — `i.lga` could be undefined, rendering "undefined%" in AI context. |

## High (fix in polish pass)

| # | File | Line | Issue |
|---|------|------|-------|
| 5 | TenantLeaseSection.tsx | 43-48 | `parseFloat(vacancyRate)` called 5 times. Parse once, store in variable. NaN if invalid string → all conditions false → defaults to red. |
| 6 | IndustriesSection.tsx | 37 | Hardcoded fallback `'QLD State'` — not generic for other states. |
| 7 | IndustriesSection.tsx | 86 | Chart Y-axis domain hardcoded `[0, 20]` — industries >20% won't display correctly. |
| 8 | DueDiligenceSection.tsx | 10 | Unsafe `as any` cast on `dueDiligence`. Should use proper type. |
| 9 | AskClaudeSection.tsx | 94 | "ChristAIn" hardcoded — template should pull advisor name dynamically. |
| 10 | Breakpoints | Multiple | `768px` in DashboardClient.tsx vs `767px` in AskClaudeSection.tsx — 1px gap. |
| 11 | properties.ts | 119 | Hardcoded fallback token `'b9k4x2'` — security concern if exposed. |
| 12 | ask-claude/route.ts | 145-150 | Error response leaks first 200 chars of upstream error to client. |

## Moderate (backlog)

| # | File | Line | Issue |
|---|------|------|-------|
| 13 | CashflowSection.tsx | 65 | Hardcoded 3% expense growth default — should come from data. |
| 14 | CashflowSection.tsx | 346 | Label "Deposit (10%)" hardcoded — should reflect actual LVR. |
| 15 | CashflowSection.tsx | 200 | `interestRate * 100` — if sheet sends percentage (6.5) instead of decimal (0.065), displays 650%. |
| 16 | FloodCheckSection.tsx | 90 | No validation on `check.imageId` before URL construction. |
| 17 | DisclaimerSection.tsx | 35-89 | All company-specific text hardcoded (name, ABN, website). Should pull from propertyData.about. |
| 18 | FeaturesSection.tsx | 8 | `CLIENT_FIELDS` whitelist is case-sensitive — "bedrooms" vs "Bedrooms" won't match. |
| 19 | LocationSection.tsx | 37 | Map iframe fixed 400px height — not responsive. |
| 20 | ask-claude/route.ts | 168 | Model ID `claude-haiku-4-5-20251001` hardcoded — should be env var. |

## Low (cosmetic / nice-to-have)

| # | File | Line | Issue |
|---|------|------|-------|
| 21 | GovernmentSection.tsx | 26 | AI disclaimer hardcoded in template. |
| 22 | DashboardClient.tsx | 98,101 | Magic numbers (OFFSET=120, bottom-detect=80). |
| 23 | FloodCheckSection.tsx | 84-93 | Inconsistent max-heights (380px vs 356px). |
| 24 | layout.tsx | 22 | Inline script for mobile detection — fragile. |

## No debug code found
All `console.error`/`console.warn` calls are intentional error logging. No stray `console.log`, no TODO comments, no commented-out code.

## Summary
- **4 critical** — hardcoded address regex, PMT rate handling, division by zero, undefined in AI context
- **8 high** — type safety, hardcoded fallbacks, security, breakpoint mismatch
- **8 moderate** — hardcoded labels, missing validation, responsiveness
- **4 low** — magic numbers, cosmetic

**Recommend CL1 fix #1 (hardcoded address regex) immediately — it will break on the next property.**

---

**Next: Mobile responsiveness test at 375px and 768px.**
