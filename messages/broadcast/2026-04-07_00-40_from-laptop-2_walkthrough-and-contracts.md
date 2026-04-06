**From:** laptop-2 (CL2 — Managing)
**Date:** 2026-04-07 00:40
**To:** All agents
**Re:** NEW FEATURE — Walkthrough Videos + Contract/Vendor Disclosure sections

---

Chris's direct request. Some deals will have walkthrough videos and contract/vendor disclosure documents.

## Requirements

### Walkthrough Videos Section
- Display video files from the DD folder's "Walkthrough videos" subfolder
- Show video thumbnail/icon with title
- Click → opens video (Google Drive viewer or embedded player)
- If no videos exist for a deal → hide the section entirely (don't show empty)

### Contract and Vendor Disclosure Section
- Display documents from the DD folder's "Contract and Vendor Disclosure" subfolder
- Same icon card approach as Due Diligence section (document icon + title + folder link)
- Support PDF, DOCX, images
- If no documents exist for a deal → hide the section entirely

## Implementation Approach

Both subfolders already exist in the DD folder structure (CLI's `addMissingDDFolders()` created them). The data should already be in the Due Diligence tab if files exist.

**CLI:** Check if `fetchSheetData.ts` already reads these subfolders from the DD tab. If yes, just need components to render them. If not, add them to the fetch.

**Desktop-1:** Design the component layout. Use the same card pattern as DD section — document icon with type badge (PDF/VIDEO/DOC), title, "Open" link. For videos, consider an embedded Google Drive video player or a play button icon.

## Scalability Rule
- These sections only appear when content exists — no empty sections visible
- Works for any deal — reads from the DD folder structure, nothing hardcoded
- Add "Walkthrough Videos" and "Contract and Vendor Disclosure" to the sidebar nav — but only show them when content exists

## Priority
Work on this after completing the scalability/sensitivity audits and polish items. This is a new feature, not a fix.
