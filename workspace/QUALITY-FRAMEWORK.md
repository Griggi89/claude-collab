# Quality Framework — Baumann Property Dashboards

**Owner:** laptop-2 (CL2 — Architect / Project Lead)
**Created:** 2026-04-06
**Status:** ACTIVE — all agents must follow this

---

## The Problem

Too many variables not fully drilled down. Ongoing issues with accuracy and deployment. Fixes on top of fixes instead of getting it right the first time. This stops now.

---

## Four Pillars

### 1. QUALITY — No deploy without proof

**Before ANY deploy to Vercel, the implementing agent MUST post:**

- [ ] What changed (file list + one-line description each)
- [ ] What was tested locally (`npm run build` passes, no warnings)
- [ ] Screenshot of the affected section(s) from local dev server
- [ ] Confirmation that no other sections broke (full scroll-through)

**After deploy, before declaring "done":**

- [ ] Live URL screenshot of changed section(s)
- [ ] Side-by-side comparison: expected vs actual
- [ ] Any numbers verified against source spreadsheet

**If you can't prove it works, it's not done.**

### 2. RESILIENCE — Handle every edge case

**Every field read from the Google Sheet must have:**

- A defined expected format (string, number, percentage-as-whole-number, URL)
- A fallback behavior when empty (show placeholder, hide section, show error — NOT crash or show "undefined")
- Documentation in PROVENANCE.md mapping field → sheet tab → column → row

**Known fragile points that MUST be addressed:**

| Risk | What happens if broken | Mitigation |
|---|---|---|
| Settings tab empty fields | Dashboard shows blank/broken cards | Validate on fetch, show "Data pending" |
| gviz cache stale | Old data displayed | Export API for Settings (done), monitor others |
| Hero Image URL invalid | Broken image | Validate URL format, show placeholder on error |
| Deal Sheet not fully populated | Partial dashboard | Health check script before going live |
| Vercel ISR cache | Old version persists | Document revalidation process |
| Google Sheets rate limiting | API fails | Error handling + retry in fetchSheetData.ts |
| Token missing from URL | Unauthorized access | 404 page (Phase 5) |

### 3. SCALABILITY — Template-first, always

**The golden rule:** If you have to touch code to make a new deal work, the template is broken.

**Scalability checklist for every code change:**

- [ ] Does this work for a property in ANY state/suburb? (not just QLD)
- [ ] Does this work with ANY number of DD folders? (0, 1, 7, 20)
- [ ] Does this work with ANY number of distances? (0, 5, 8, 15)
- [ ] Does this work with missing optional data? (no hero image, no vacancy rate)
- [ ] Is there any hardcoded value that assumes a specific property? (address, sheet ID, folder ID)
- [ ] Would this work if Chris created the deal sheet himself with no Claude help?

**If the answer to any of these is "no" or "I'm not sure," fix it before merging.**

### 4. ACCOUNTABILITY — Track every change

**Every agent must:**

1. **Claim tasks before starting.** No silent work.
2. **Update agent status** when starting and finishing work.
3. **Post results** with evidence (screenshots, test output) — not just "done."
4. **Own your bugs.** If something you deployed breaks, you fix it. Don't pass it to another agent.

**Change log discipline:**

Every commit message must follow: `type: what changed and why`
- `feat:` new feature
- `fix:` bug fix (reference what was broken)
- `refactor:` restructure without behavior change
- `docs:` documentation only
- `chore:` tooling, config, non-functional

**No more "various fixes" or "updates" commits.** If you can't describe what changed in one line, the commit is too big — split it.

---

## Pre-Deploy Checklist (mandatory)

Before pushing to Vercel, run through this:

```
[ ] npm run build — passes with zero errors
[ ] npm run build — zero warnings related to my changes
[ ] Local dev server — all sections render
[ ] Local dev server — scroll through entire page, no layout issues
[ ] Changed sections — screenshot captured
[ ] Numbers — verified against source spreadsheet
[ ] No hardcoded values introduced
[ ] No console errors in browser
[ ] Commit message is descriptive
[ ] Agent status updated in collab repo
[ ] Results posted to collab repo with evidence
```

---

## Quality Review Process

After every deploy, I (laptop-2) will:

1. Open the live URL in Chrome
2. Extract full page text
3. Verify all sections render
4. Check for visual bugs (white gaps, broken images, layout issues)
5. Spot-check 3+ financial figures against the sheet
6. Post a PASS/FAIL review to the collab repo

**If FAIL:** implementing agent fixes before moving to next task. No stacking new features on top of bugs.

---

## Incident Tracking

When something breaks in production:

1. **Document it** — What broke, when, what the user saw
2. **Root cause** — Why it broke (not just what fixed it)
3. **Prevention** — What we change so this class of bug can't happen again
4. **Add to the resilience table above**

We don't just fix bugs. We make them impossible to recur.
