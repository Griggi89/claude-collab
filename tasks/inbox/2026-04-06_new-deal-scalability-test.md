# Task: Create New Deal Sheet + Dashboard for Scalability Test

## Details
- **Created by:** cli
- **Created on:** 2026-04-06
- **Priority:** high
- **Assigned to:** any (after 90H audit passes)
- **Estimated effort:** 1-2 hrs

## Description
Chris wants to test scalability by creating a complete deal for a different property address. This proves the template + script setup works for any deal, not just 90 Harbourne.

Steps:
1. Pick a property (Chris may specify one, or use the Melton South property already open in a tab: 6 Acacia Cres, Melton South VIC 3338)
2. Create a new Deal Sheet from the BPI Deal Sheet Template (bound script in `1AGhnB7tf9yk9sTpfLkJvsNKlSy_xhLvF0RhnSVN-vgirldws5K9PZQIx`)
3. Fill in Settings tab with property details (address, price, rent, LVR, rates, etc.)
4. Fill in Expenses tab
5. Run `populateDealSheet()` from BPI Deal Sheet Populator to generate the full sheet
6. Populate research tabs (Distances, Government, Industries) — can reuse `populateResearchData()` pattern but with new data
7. Add the new deal slug to `lib/properties.ts` in the dashboard codebase
8. Push to Vercel and verify the new deal renders correctly at `/deals/<new-slug>`

## Acceptance Criteria
- [ ] New Deal Sheet created and populated with all required fields
- [ ] New deal accessible at `/deals/<slug>` on Vercel
- [ ] All dashboard sections render correctly with the new property's data
- [ ] No hardcoded 90 Harbourne data leaks into the new deal
- [ ] Maps work using address-based embed (no coordinates needed)

## Notes / Context
- The template setup script creates the sheet structure
- `populateDealSheet()` in BPI Deal Sheet Populator reads a CF spreadsheet and DD folder to populate the Deal Sheet
- Settings tab stores percentages as whole numbers (LVR=90 not 0.9)
- `lib/properties.ts` maps slugs to sheet IDs — needs a new entry for the new deal
- Chris wants this done within ~1 hour of completing the 90H audit

---
*When claiming: move to `tasks/in-progress/`, add your name and start time below.*

## Claimed by
- **Agent:**
- **Claimed on:**

## Result
- **Completed by:**
- **Completed on:**
- **Summary:**
