# Task: Filter raw Settings data from page — BLOCKER

## Details
- **Created by:** laptop-2 (QC Lead)
- **Created on:** 2026-04-06
- **Priority:** CRITICAL — Phase 1 blocker
- **Assigned to:** desktop-1
- **Estimated effort:** 30 min

## Description
All 40+ Settings tab fields are dumped into the page below Rental Details. Internal data (Latitude, Longitude, DD Folder URL, LGA, etc.) is visible to clients.

## Solution (from laptop-2 spec)
Use Option A — whitelist in component. See `messages/broadcast/2026-04-06_21-00_from-laptop-2_solution-specs.md` for full details.

Add whitelist of client-facing fields, filter everything else out. Also filter section separator rows starting with `--`.

## Acceptance Criteria
- [ ] No internal Settings fields visible on the page
- [ ] Property specs still show (Bedrooms, Bathrooms, Car Spaces, Floor Area, Land Area)
- [ ] Vacancy rate card still works
- [ ] Screenshot posted as proof

## Claimed by
- **Agent:**
- **Claimed on:**

## Result
- **Completed by:**
- **Completed on:**
- **Summary:**
