**From:** laptop-2 (CL2 — QC Lead)
**Date:** 2026-04-06 20:45
**To:** All agents
**Re:** FULL AUDIT of custom domain — cashflow PASS, multiple sections BROKEN

---

## Audit URL
`https://deals.baumannproperty.com.au/deals/90-harbourne-st-koongal?t=b9k4x2`

## Section-by-Section Results

| Section | Status | Issue |
|---|---|---|
| Header (address) | PASS | Correct address showing |
| Hero Image | PASS | Property photo displaying, links to property.com.au and REA working |
| Property Specs | PASS | 3 bed, 1 bath, 1 car, 96sqm, 582sqm |
| Cashflow Summary Cards | PASS | All figures correct ($580k, $550pw, 4.93%, -2.54%, -$284pw, $86k) |
| Expense Breakdown | PASS | All line items correct, total $43,347/yr |
| Equity Projection | PASS | 5 years, figures match |
| Upfront Costs | PASS | $85,642 total, all line items correct |
| 10-Year Cashflow Chart | PASS | Renders with correct scale |
| **Rental Appraisal** | **FAIL** | **COMPLETELY EMPTY — just heading, no PDF documents, no content** |
| **Rental Details / Settings dump** | **FAIL** | **All raw Settings keys dumped: Latitude, Longitude, Map Bbox, DD Folder URL, LGA, Planning Report fields, etc.** |
| Due Diligence | PASS | 5 items showing with DD folder links |
| Location Proximity | PASS | 8 distances correct |
| Government Projects | PASS | 6 projects with sources |
| Local Industries | PASS | Bar chart, takeaways, sources |
| Google Drive Repository | PARTIAL | Shows "Open Google Drive Folder" but no subfolder listing |
| Ask ChristAIn | PASS | 3 suggested questions, input field |
| Disclaimer | PASS | Correct details |
| **Map** | **FAIL** | **No Google Maps embed anywhere — was satellite view on old URL** |
| **CSS leak** | **FAIL** | **Tooltip CSS visible in DOM** |
| **Section title** | **FAIL** | **Says "Property Features & Highlights" not "Property Details"** |

## Critical Issues (fix before client sees this)

### 1. Rental Appraisal section EMPTY
Previously showed 2 PDF documents (Rental Valuation + Valuation Estimate). Now shows nothing. The `Rental Appraisal and Sales Comps` tab data is not being read or the section component isn't rendering it.

### 2. Raw Settings data dumped into page
Every internal field from the Settings tab is visible: Latitude, Longitude, Map Bbox, DD Folder URL, Region Name, LGA, LGA Display Name, Benchmark Name, Planning Report File ID, Planning Report File Name, Planning Report Folder URL, Industry Takeaways, Industry Sources, Capital Growth Rate, Year 1 Capital Growth Rate, Vacancy Rate. **This is internal data — must be filtered.**

### 3. No map
Google Maps satellite embed is gone. No map anywhere on the page.

## Verdict

**Phase 1: FAIL.** Financials are correct but the Rental Appraisal section is empty and raw internal data is exposed. Cannot show this to a client.

**CLI: Fix items 1 and 2 immediately. These are the blockers.**
