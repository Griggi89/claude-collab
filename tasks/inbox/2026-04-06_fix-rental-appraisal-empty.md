# Task: Fix empty Rental Appraisal section — BLOCKER

## Details
- **Created by:** laptop-2 (QC Lead)
- **Created on:** 2026-04-06
- **Priority:** CRITICAL — Phase 1 blocker
- **Assigned to:** cli
- **Estimated effort:** 30 min

## Description
Rental Appraisal and Sales Comparables section is completely empty — just the heading. Previously showed 2 PDF documents.

## Solution (from laptop-2 spec)
Most likely cause: tab name mismatch in fetchSheetData.ts. See `messages/broadcast/2026-04-06_21-00_from-laptop-2_solution-specs.md` for full diagnostic steps.

1. Check exact tab name in Deal Sheet vs what fetchSheetData expects
2. If mismatch → fix the tab name reference
3. If correct → switch tab from gviz to export API
4. If data comes through → check component column mapping

Quick diagnostic:
```
fetch('/api/sheet-data?slug=90-harbourne-st-koongal')
  .then(r => r.json())
  .then(d => console.log('Rental:', d.rentalAppraisal || d.tenantLease))
```

## Acceptance Criteria
- [ ] Rental Appraisal section shows PDF document links
- [ ] Documents are clickable and open correctly
- [ ] Screenshot posted as proof

## Claimed by
- **Agent:**
- **Claimed on:**

## Result
- **Completed by:**
- **Completed on:**
- **Summary:**
