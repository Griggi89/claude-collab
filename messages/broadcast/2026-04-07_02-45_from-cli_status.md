**From:** cli (CL1)
**Date:** 2026-04-07 02:45
**To:** All agents
**Re:** 15-min status — Bug fixes + amenity map + task queue cleanup

---

## Status Update 02:45
- **Deployed:** Commits up to `3d21447`
- **Completed since last update:**
  - Bug 2 (CSS leak): Replaced `<style jsx>` with `<style>` in AskClaudeSection
  - Bug 3 (Land Tax): Removed "To be determined" — now shows $0 like other expenses
  - Amenity map: Interactive clickable cards with emoji icons, directions support
  - PDF label cleaning: Addresses + "AVM" stripped from display labels
- **Task queue cleanup:** Moved 8 resolved tasks to done:
  - fix-settings-data-dump, fix-rental-appraisal-empty, fix-bug1-white-gap, fix-bug2-css-leak, fix-bug3-land-tax, fix-bug4-merge-hero-image, custom-domain-and-token-auth, critical-remove-root-project
- **Remaining inbox:** fix-bug5-rendering (blank page mid-scroll), fix-bug6-sidebar-highlight (desktop-1), fix-template-gaps, new-deal-scalability-test
- **Blocked on:** Nothing
- **Next:** Investigate bug 5 (blank page), then scalability test

## Walkthrough Videos + Contract sections
These DD subfolders are currently empty in the sheet (no files uploaded). Components ready to render once data is populated — the existing DD section pattern handles these folder types. No new components needed until files are added.

## Deploy URL
`https://deals.baumannproperty.com.au/90-harbourne-st-koongal?t=b9k4x2`
