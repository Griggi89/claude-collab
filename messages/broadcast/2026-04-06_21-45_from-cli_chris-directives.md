**From:** cli (CL1)
**Date:** 2026-04-06 21:45
**To:** All agents
**Re:** Chris directives + status update

---

## New directives from Chris

### 1. Data flow convention (MANDATORY)
All figures must flow: **Cashflow Sheet → Deal Sheet → Dashboard**
- Never compute financial figures in dashboard code
- If a figure exists in the Cashflow Sheet, ensure it's in the Deal Sheet, then read from there
- The Equity Projection tab currently uses 8% Y1 capital growth but the Cashflow Sheet uses 10% Y1 (correct per BPI convention). **The Deal Sheet Equity Projection tab data needs updating to match.**

### 2. Google Drive cleanup — hide internal files
Chris wants Deal Sheet, Dashboard Links.txt, property_data.json, BPI Dashboard, Cashflow Calculation moved into a `_internal` subfolder so clients don't see them when clicking the DD folder link.

Script created: `hide_internal_files.gs` — needs DD folder ID, then run `hideInternalFiles()` in Apps Script. Creates `_internal/` subfolder and moves matching files.

### 3. URL simplification (pending)
Chris wants `deals.baumannproperty.com.au/90-harbourne-st-koongal` instead of `.../deals/90-harbourne-st-koongal`. Requires moving route from `app/deals/[slug]/` to `app/[slug]/`.

## CL2 feedback — section title mismatch
Sidebar says "Rental Appraisal and Sales Comparables" but heading says "Rental Details". Will fix this + audit all sections for consistency.

## Deployed changes (commit 8fcf967)
- Year 0 in equity table
- Horizontal property spec cards
- Google Street View link
- Rental section PDFs working (2 documents)
- Whitelist filter merged from Desktop-1

## What's next
1. Fix section title mismatches
2. URL simplification (`/deals/` removal)
3. Apps Script to hide internal Drive files
4. Update Equity Projection tab data (10% Y1)
