**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 01:00
**To:** All agents
**Re:** MOBILE RESPONSIVENESS TEST — Code-based analysis at 375px & 768px

---

## Test Method

Browser viewport can't resize below ~1568px on this machine (same issue as CL2). Performed code-level analysis of all CSS media queries, inline styles, and React responsive logic instead.

## Core Mobile Framework: PASS

| Item | Status | Details |
|------|--------|---------|
| Sidebar hide/show | **PASS** | `mob` class added at <768px. Sidebar slides from left with `translateX(-100%)`. Hamburger button works. |
| Mobile topbar | **PASS** | Fixed 56px top bar with logo + hamburger |
| Main content full-width | **PASS** | `margin-left: 0` on mobile, `padding: 72px 16px 80px` |
| Font size reduction | **PASS** | Title → 1.4rem, section h2 → 1.3rem on mobile |
| Backdrop overlay | **PASS** | Semi-transparent backdrop behind sidebar on mobile |
| Equity table scroll | **PASS** | Has `overflowX: 'auto'` + `minWidth: 520px` — scrollable |
| Ask Claude suggestions | **PASS** | Horizontal scroll, no-wrap, hidden scrollbar at <767px |

## CRITICAL Issues (will break at 375px)

### 1. SalesComparisonsSection — Tables overflow horizontally
**File:** SalesComparisonsSection.tsx:54-107
- `flex: '1 1 280px'` (sales) and `flex: '2 1 380px'` (rent)
- 380px basis exceeds 343px available width (375 - 32px padding)
- Tables have NO `overflowX: 'auto'` wrapper
- **Result:** Horizontal page scroll on mobile. Breaks entire page layout.
- **Fix:** Wrap tables in `overflowX: 'auto'` div, or add media query to force `flex-basis: 100%`

### 2. FeaturesSection Buttons — Don't stack on mobile
**File:** FeaturesSection.tsx:56-125
- "All Photos & Details on property.com.au" button + "realestate.com.au" button = ~500px total
- Both are `inline-flex` with `flexShrink: 0`
- NO media query to stack vertically
- **Fix:** Add `flex-direction: column` at mobile breakpoint or `flex-wrap: wrap`

## HIGH Issues (degraded UX at 375px)

### 3. IndustriesSection Chart — Y-axis too wide
**File:** IndustriesSection.tsx:93
- `YAxis width={175}` — fixed 175px for industry names
- Leaves only 168px for actual chart bars at 375px
- **Fix:** Reduce to `width={80}` and truncate labels on mobile

### 4. Hero Image — 320px height excessive on mobile
**File:** FeaturesSection.tsx:37
- Fixed `height: '320px'` (was 420px, already reduced)
- On 375px portrait screen, image takes 40% of viewport
- **Fix:** Add `globals.css` rule: `html.mob #features img { height: 200px !important; }`

### 5. Upfront Costs Table — No scroll container
**File:** CashflowSection.tsx:343
- 6 columns in a `width: 100%` table with no overflow wrapper
- Columns might compress OK but could truncate text on narrow screens
- **Fix:** Wrap in `overflowX: 'auto'` div like the equity table

## MODERATE Issues

### 6. Disclaimer Photo Layout
**File:** DisclaimerSection.tsx:48-100
- Photo (140px) + contact div (`minWidth: 220px`) + 40px gap = 400px
- Exceeds 343px available. Will wrap, but globals.css Line 298 adds `flex-direction: column !important` — **ACTUALLY OK**

### 7. Breakpoint Mismatch
- `DashboardClient.tsx:67` uses `window.innerWidth < 768`
- `AskClaudeSection.tsx:353` uses `@media(max-width:767px)`
- `layout.tsx:22` uses `window.innerWidth < 768`
- **These are technically consistent** (768px = desktop in all cases)

## 768px Tablet: ALL PASS
At 768px, sidebar is visible (280px), main content gets 488px. All components fit. No overflow issues detected.

## Summary

| Severity | Count | Impact |
|----------|-------|--------|
| Critical | 2 | Page-breaking horizontal scroll |
| High | 3 | Cramped/unreadable content |
| Moderate | 2 | Minor layout issues |

**Recommend CL1 fix Critical #1 (SalesComparisonsSection tables) and #2 (FeaturesSection buttons) before any mobile users access the dashboard.**

---

**All assigned tasks complete. Standing by for next round.**
