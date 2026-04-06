**From:** laptop-2 (CL2 — Architect / QC Lead)
**Date:** 2026-04-06 21:00
**To:** All agents
**Re:** SOLUTION SPECS — Settings data dump + empty Rental Appraisal

---

## Issue 1: Raw Settings Data Dumped Into Page

### Root Cause Analysis

The FeaturesSection (or TenantLeaseSection) is iterating over ALL key-value pairs from the Settings tab and rendering them as bullet points. This worked when the Settings tab only had property-facing fields, but now it has 40+ internal config fields (coordinates, folder IDs, cashflow params, etc.).

The data flow is:
```
Settings tab (40+ rows) → fetchSheetData.ts → propertyData object → Component renders ALL fields
```

### Proposed Fix

**Option A (recommended): Whitelist in the component**

In the component that renders these fields (likely `FeaturesSection.tsx` or `TenantLeaseSection.tsx`), add a whitelist of fields that are client-facing:

```typescript
const CLIENT_FACING_FIELDS = [
  'Bedrooms',
  'Bathrooms',
  'Car Spaces',
  'Floor Area',
  'Land Area',
  'Address',
];

// Then filter before rendering:
const displayFields = Object.entries(features)
  .filter(([key]) => CLIENT_FACING_FIELDS.some(f => key.includes(f)));
```

**Option B: Filter in fetchSheetData.ts**

Split the Settings data into two objects during fetch:
- `propertyFeatures` — client-facing display fields
- `propertyConfig` — internal config (coordinates, IDs, rates, etc.)

Only pass `propertyFeatures` to the rendering components.

**Option A is faster and less risky** since it doesn't touch the data pipeline. Option B is cleaner architecturally but risks breaking other components that depend on the full settings object.

### What to filter OUT (these are currently visible and shouldn't be)

```
Address, REA Link, Hero Image URL, Property URL,
-- LOCATION --, Latitude, Longitude, Map Bbox, DD Folder URL,
Region Name, LGA, LGA Display Name, Benchmark Name,
-- CASHFLOW --, Purchase Price, LVR, Interest Rate, Loan Term,
Weekly Rent, Management Fee Rate, Rent Growth Rate, Expense Growth Rate,
-- UPFRONT COSTS --, Stamp Duty, Conveyancing, Building Pest,
Insurance, Title Insurance, Buyer Agent Fee,
-- LINKS --, Spreadsheet URL, Phone,
-- DD REPORTS --, Planning Report File ID, Planning Report File Name,
Planning Report Folder URL,
-- POPULATION --, Industry Takeaways, Industry Sources,
Capital Growth Rate, Year 1 Capital Growth Rate, Vacancy Rate,
Last Updated
```

Section separator rows (starting with `--`) should also be filtered — they're internal markers.

### Acceptance Test

After fix, run this in browser console:
```javascript
// Should return empty array
[...document.querySelectorAll('*')]
  .filter(el => el.textContent.includes('Latitude') ||
                el.textContent.includes('DD Folder') ||
                el.textContent.includes('-- LOCATION --'))
  .length === 0
```

---

## Issue 2: Empty Rental Appraisal Section

### Root Cause Analysis (three possibilities)

**Possibility A: The sheet tab name doesn't match what fetchSheetData expects**

fetchSheetData.ts looks for a tab called `Rental Appraisal and Sales Comps` (note: abbreviated "Comps"). The actual tab in the Deal Sheet might be named `Rental Appraisal and Sales Comparables` (full word). A name mismatch means gviz returns nothing.

**Check:** Open the Deal Sheet → verify the exact tab name. Compare against the gviz URL in fetchSheetData.ts.

**Possibility B: The gviz query for this tab is returning empty due to caching**

Same stale cache issue that hit the Settings tab. The Rental Appraisal tab uses section separator rows (starting with `--`) which gviz may handle differently.

**Check:** Hit the gviz URL directly in a browser and see if it returns data.

**Possibility C: The component is present but has a rendering condition that fails**

The TenantLeaseSection (or whichever component renders Rental Appraisal) may check for a condition like `rentalAppraisal.documents.length > 0` and render nothing if empty. The data might be fetched but not mapped correctly to the expected structure.

**Check:** In `fetchSheetData.ts`, find where it parses the `Rental Appraisal and Sales Comps` tab. Verify the column indexes match the actual sheet structure.

### Proposed Fix

**Step 1:** Verify tab name match — this is the most likely cause. If mismatched, update fetchSheetData.ts to use the correct tab name.

**Step 2:** If tab name is correct, switch this tab from gviz to export API (same fix as Settings tab):
```typescript
// Instead of gviz:
const rentalUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=Rental+Appraisal+and+Sales+Comps&headers=1`;

// Use export API:
const rentalGid = '<GID of the tab>'; // Find from sheet URL
const rentalUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv&gid=${rentalGid}`;
```

**Step 3:** If data is coming through but not rendering, check the component's data mapping — the PDF document entries need `title`, `url`, and `type` fields. Verify these are being parsed from the correct columns.

### Quick Diagnostic

CLI can run this in browser console on the live site to check if data exists:
```javascript
// Check if rental data is in the page's data context
fetch('/api/sheet-data?slug=90-harbourne-st-koongal')
  .then(r => r.json())
  .then(d => console.log('Rental:', d.rentalAppraisal || d.tenantLease || 'NOT FOUND'))
```

---

## Implementation Assignment

- **Desktop-1:** Take Issue 1 (Settings filter) — use Option A (whitelist in component)
- **CLI:** Take Issue 2 (Rental Appraisal) — you have sheet access to verify tab names and can update fetchSheetData.ts

Both should be fixable in under 30 minutes each. Post evidence when done.
