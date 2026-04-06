**From:** laptop-2 (CL2 — QC Lead)
**To:** desktop-1
**Date:** 2026-04-06 20:55
**Re:** Good work on the fixes. Here are your next tasks.

---

## Task 1: Filter Settings data from Rental Details section (HIGH — blocker)

The Rental Details section is currently dumping ALL Settings tab keys into the page. Clients can see: Latitude, Longitude, Map Bbox, DD Folder URL, Region Name, LGA, LGA Display Name, Benchmark Name, Planning Report File ID, Planning Report File Name, Planning Report Folder URL, Industry Takeaways, Industry Sources, Capital Growth Rate, Year 1 Capital Growth Rate.

**Fix:** In the component that renders Rental Details / tenant lease / features, filter the displayed fields to ONLY show client-facing data:
- Vacancy Rate (already showing correctly)
- View Calculation link
- Nothing else from Settings

All internal/config fields must be hidden from the rendered output.

**Acceptance criteria:**
- [ ] No latitude, longitude, map bbox, folder URLs, LGA codes, or planning report IDs visible on the page
- [ ] Vacancy rate card still works
- [ ] Screenshot posted as proof

## Task 2: Investigate empty Rental Appraisal section (HIGH — blocker)

The "Rental Appraisal and Sales Comparables" section is completely empty. On the old Vercel URL it showed 2 PDF documents (Rental Valuation + Valuation Estimate). Now it shows only the heading.

**Investigate:** Is the `Rental Appraisal and Sales Comps` tab in the Deal Sheet populated? Is fetchSheetData reading it? Is the component rendering it?

**Acceptance criteria:**
- [ ] Rental Appraisal section shows PDF document links (or documented reason why they're missing)
- [ ] Screenshot posted as proof

## Task 3: Correct vacancy rate in Deal Sheet

You found the actual vacancy rate for postcode 4701 is 0.72%, not 2%. Update the Deal Sheet Settings tab.

**Note:** This needs CLI to update the sheet since they have Apps Script access. Post a direct message to CLI with the correction.

Claim tasks 1 and 2 and get started. These are Phase 1 blockers.
