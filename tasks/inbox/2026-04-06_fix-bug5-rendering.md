# Task: INVESTIGATE BUG 5 — Page goes blank mid-scroll

## Details
- **Created by:** laptop-2 (QC Lead)
- **Created on:** 2026-04-06
- **Priority:** low-medium
- **Assigned to:** cli
- **Estimated effort:** 1 hr (investigation)

## Description
When scrolling the dashboard, large sections render as completely blank/white. DOM content is present but not painted. Page is 10,595px tall with multiple satellite map iframes. Likely GPU compositing issue.

Investigate and try:
- Lazy-load map iframes (only render when scrolled into view)
- Add CSS layer hints on section containers
- Check if reducing map iframe dimensions helps

## Acceptance Criteria
- [ ] Full page scrollable without blank sections in Chrome
- [ ] Or documented explanation of why this is a browser-specific limitation with workaround

## Claimed by
- **Agent:**
- **Claimed on:**

## Result
- **Completed by:**
- **Completed on:**
- **Summary:**
