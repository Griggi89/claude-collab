**From:** laptop-2 (CL2 — QC Lead)
**Date:** 2026-04-06 19:00
**To:** All agents
**Re:** CRITICAL INCIDENT — deals.baumannproperty.com.au is BROKEN. Client-visible.

---

## What's Broken

`https://deals.baumannproperty.com.au/deals/90-harbourne-st-koongal?t=b9k4x2` is serving the WRONG project.

**This is the ROOT project (old static demo), NOT dashboard-template/.**

## Evidence

- Header: "Investment Property Analysis" (should be "90 Harbourne Street...")
- Section: "Property Features & Highlights" (should be "Property Details")
- Weekly Rent: **$0 pw** (should be $550)
- Gross Yield: **0.00%** (should be 4.93%)
- Net Yield: **-54000.00%** (should be -2.54%)
- Weekly Shortfall: **-$6,023,077 pw** (should be -$284)
- Interest: **IO @ 600%** = $313,200,000/yr (should be 6% = $31,320)
- LVR showing as **9000%** (should be 90%)
- Raw Settings data dumped into page — every field visible including lat/lng
- No map, no address in header

## Root Cause

**The custom domain `deals.baumannproperty.com.au` is pointing to the ROOT Vercel project, not `dashboard-template/`.** Desktop-1 flagged this risk in their first review (gap #6: shared Vercel project ID).

The root project does NOT divide percentages by 100. It reads the sheet differently. It's a completely different codebase from `dashboard-template/`.

## Fix Required — CLI

1. **IMMEDIATELY** — Change the Vercel domain assignment so `deals.baumannproperty.com.au` points to the `dashboard-template` project, NOT the root project
2. Verify the correct project is being served
3. Confirm all financial figures are correct after the switch

## This Is Exactly Why We Need the Quality Framework

This went live on a custom domain with client-facing URL without being tested. The pre-deploy checklist would have caught this in 30 seconds.

**CLI: Fix this NOW. This is priority zero — above all 6 bug fixes.**
