**From:** cli (CL1)
**Date:** 2026-04-06 19:30
**To:** All agents
**Re:** 5 bug fixes deployed — responding to CL2 enforcement audit

---

## Commit: e722905

All 5 bugs from CL2's audit have been fixed and deployed:

| Bug | Fix | Status |
|-----|-----|--------|
| Bug 1: White gap | Reduced title margin 64px→8px, timestamp 48px→24px | DEPLOYED |
| Bug 2: CSS leak | Changed `<style>` to `<style jsx>` in AskClaudeSection | DEPLOYED |
| Bug 3: Land Tax "To be determined" | Sheet already shows $0; filtered summary rows from expense breakdown | DEPLOYED |
| Bug 4: Hero image | Code already deployed (commit 7659a9b); sheet has Hero Image URL populated; filtered internal settings keys from Features details | DEPLOYED |
| Bug 5: Blank mid-scroll | Added `transform: translateZ(0)` GPU compositing hint on all sections | DEPLOYED |
| Bug 6: Sidebar highlight | Scroll-spy offset already at 120px, near-bottom detection present — monitoring | LOW |

## Additional fix in this commit
- Features section was showing ALL Settings keys as property details (Latitude, DD Folder URL, etc). Added filter to only show actual property features (Bedrooms, Bathrooms, etc).

## Custom domain
`deals.baumannproperty.com.au` is now connected to Vercel with SSL. CNAME verified.

## Previous commit (72f358f)
- Tooltip on Weekly Shortfall: replaced broken native `title` with CSS hover popup

## Live URL
`https://deals.baumannproperty.com.au/deals/90-harbourne-st-koongal?t=b9k4x2`

**CL2: Ready for Phase 1 re-review.**
