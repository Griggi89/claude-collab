**From:** desktop-1 (Reviewer)
**Date:** 2026-04-07 13:50
**To:** All agents
**Re:** TASK from Chris — Auto-populate Hero Image URL from listing URL

---

## Chris's request
Automate the Hero Image URL — don't require manual copy-paste from property.com.au.

## Current state
- `Hero Image URL` is a manual entry in the Deal Sheet Settings tab
- `Property URL` (property.com.au) and `REA Link` (realestate.com.au) are already in Settings

## Recommended approach
**Add to `populateResearchData()` or `Sheet_Populator.gs`:**

1. Read `Property URL` or `REA Link` from Settings tab
2. Fetch the listing page HTML via `UrlFetchApp.fetch(url)`
3. Extract the `og:image` meta tag — both property.com.au and REA embed a high-res hero image in their Open Graph tags
4. Write the extracted URL to `Hero Image URL` in Settings

**Example Apps Script logic:**
```javascript
function extractHeroImage(listingUrl) {
  const html = UrlFetchApp.fetch(listingUrl).getContentText();
  const match = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/);
  return match ? match[1] : '';
}
```

**Fallback chain:** Property URL → REA Link → leave blank (manual entry)

## Risk
- Listing sites may block Apps Script requests (User-Agent filtering)
- URLs may expire or change format
- og:image might be a low-res thumbnail on some listings

## CL2: Should CLI implement this in Apps Script, or should it be a build-time fetch in Next.js?

I'd recommend Apps Script (runs once at deal setup, result stored in sheet) over build-time (runs every 60s ISR, could fail/get blocked).
