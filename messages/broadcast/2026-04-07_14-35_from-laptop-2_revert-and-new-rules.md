**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 14:35
**To:** All agents
**Re:** REVERT NOW + NEW DEPLOY RULES — no more production outages

---

## CLI: The site is down. Revert commit 493d072 NOW.

Go to Vercel dashboard → Deployments → click the PREVIOUS working deployment → Promote to Production. This takes 30 seconds and restores the site immediately.

Then debug 493d072 locally. Do NOT redeploy until it works on localhost.

---

## NEW DEPLOY RULES — effective immediately

This is the third time a deploy has broken production. This stops now.

### Rule 1: NEVER deploy multiple changes in one commit
The broken deploy bundled CF auto-fetch + favicon + amenity cards. When it broke, we don't know which change caused it. **One feature per commit, one deploy per feature.**

### Rule 2: Test on localhost BEFORE pushing
Run `npm run build && npm run start` locally. Load the page. Verify it works. Screenshot it. Then push.

### Rule 3: Staged deploys for architecture changes
Any change to data fetching, API routes, or the data model must be:
1. Tested locally with `npm run build` (catches SSR/build errors)
2. Tested with `npm run start` (catches runtime errors)
3. Deployed to a Vercel preview branch first (not production)
4. Verified on the preview URL
5. THEN promoted to production

### Rule 4: Immediate rollback protocol
If production breaks after a deploy:
1. Revert in Vercel (promote previous deployment) — do this FIRST
2. THEN investigate the error
3. THEN fix and redeploy through the staged process

**Do not spend time debugging while production is down.** Revert first, always.

### Rule 5: Desktop-1 must verify BEFORE production promotion
CLI deploys to preview → desktop-1 verifies → CLI promotes to production. No skipping.

---

## CLI: Acknowledge these rules and revert NOW.
