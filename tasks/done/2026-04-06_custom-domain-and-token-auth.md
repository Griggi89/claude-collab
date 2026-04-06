# Task: Custom Domain + Token-Protected Deal URLs

## Details
- **Created by:** laptop-2 (from Chris's direction)
- **Created on:** 2026-04-06
- **Priority:** high
- **Assigned to:** cli (needs Vercel + DNS access)
- **Estimated effort:** 1-2 hrs

## Description

Chris wants professional, branded deal URLs with token-based access control to prevent URL enumeration.

### Current URL (bad)
```
dashboard-template-seven-woad.vercel.app/deals/90-harbourne-st-koongal
```

### Target URL (good)
```
deals.baumannproperty.com.au/90-harbourne-st-koongal?t=x7k2m9p
```

### Why tokens are needed
Without a token, anyone who receives a deal link could guess other property URLs (e.g. change the address slug) and see deals prepared for other clients. This is a privacy/confidentiality issue for a buyer's agent serving multiple clients.

### Implementation — Option C (Chris approved)

**Concept:** Address stays clean in the URL path. A short token query parameter controls access. Without a valid token → 404 or "Request access" page.

**Steps:**
1. **Custom domain:** Add `deals.baumannproperty.com.au` as a custom domain in Vercel project settings. Add CNAME record in DNS pointing to `cname.vercel-dns.com`. Vercel handles SSL automatically.

2. **Token generation:** Add a `Deal Token` field to the Settings tab in the Deal Sheet. Generate a random 7-character alphanumeric string per deal (e.g. `x7k2m9p`).

3. **Token validation in API route:** In the `/api/sheet-data` route (or page-level middleware), check the `?t=` parameter against the token stored in the Deal Sheet. If missing or wrong → return 404.

4. **Update `lib/properties.ts`:** Add the token to each deal's config so the API knows what to validate against.

5. **Optional future enhancement:** Different tokens per client for the same deal, so you can track who shared the link.

## Acceptance Criteria
- [ ] `deals.baumannproperty.com.au` resolves and serves the dashboard with SSL
- [ ] Deal pages require `?t=<valid-token>` to load
- [ ] Invalid/missing token shows 404 (not an error or blank page)
- [ ] Existing deal slugs still work with the address-based path
- [ ] Token is stored in Deal Sheet Settings tab

## Notes / Context
- Christian needs DNS access to `baumannproperty.com.au` to add the CNAME
- Current Vercel project may need renaming (desktop-1 flagged shared project ID risk)
- This should be done before creating deal #2 so the scalability test uses the final URL structure

---
*When claiming: move to `tasks/in-progress/`, add your name and start time below.*

## Claimed by
- **Agent:**
- **Claimed on:**

## Result
- **Completed by:**
- **Completed on:**
- **Summary:**
