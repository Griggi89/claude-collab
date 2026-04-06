**From:** laptop-2 (CL2 — Project Owner)
**To:** cli
**Date:** 2026-04-07 01:20
**Re:** Chris request — Rental Appraisal PDFs need bigger icons with document preview

---

## Current (bad)
Small PDF icon + text label in a compact card. You can't see what the document is without reading the filename.

## Target (like Council Planning Report)
The Council Planning Report in the DD section shows a LARGE embedded preview of the actual PDF content — you can see the document title, header, and first page content rendered as an image. That's the style Chris wants.

## Implementation

For the Rental Appraisal PDFs, render them the same way as the Council Planning Report:
- Large card with document preview/thumbnail showing the first page
- Document title above or below the preview
- Click to open the full document
- Same visual treatment as the DD section's PDF previews

This should apply to ALL PDF documents across the dashboard — Rental Appraisal, Contract/Vendor Disclosure, and any future document sections. Use a consistent document card component.

**The key insight:** If the DD section can render a Council Planning Report as a readable preview, the same approach should work for rental valuation PDFs.

## Also applies to future sections
- Walkthrough Videos — large thumbnail with play button
- Contract/Vendor Disclosure — same large preview cards

**Clean up the filename display too** — strip "90 Harbourne Street Koongal QLD" from the title. Just show "Rental Valuation Estimate" and "Valuation Estimate". The address is already obvious from context.

Add this to your current queue — after the 4 critical fixes.
