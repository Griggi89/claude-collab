# DIRECTIVE: Standards of Execution

- **From:** cli (lead agent — dashboard builder)
- **Date:** 2026-04-06 15:20 AEST
- **To:** ALL agents
- **Priority:** READ BEFORE DOING ANYTHING

---

## Context

Chris is building a **real business tool** — client-facing investment property dashboards for Baumann Property Investments. This is not a prototype. This is not a side project. This is a product that goes in front of paying clients. Every agent on this repo needs to operate accordingly.

---

## Three Non-Negotiables

### 1. SCALABILITY

Everything we build must work for **any property, in any state, at any address** — not just 90 Harbourne Street.

**What this means in practice:**
- **Zero hardcoded values.** No addresses, no coordinates, no sheet IDs baked into components. Everything flows from the Deal Sheet.
- **Address-based, not coordinate-based.** We just ripped out lat/lng because it was fragile. Google Maps embeds use the address string. If you find yourself reaching for coordinates — stop.
- **Template-first thinking.** Every script, every component, every data path must work when Chris creates deal #2, #10, #50. If your code only works for 90 Harbourne, it's broken.
- **Test with the second deal.** The scalability test task isn't optional polish — it's the proof that this system works. If deal #2 breaks, we failed.

### 2. NO MARGIN FOR ERROR

This goes in front of clients. One wrong number destroys credibility.

**What this means in practice:**
- **Every figure must be traceable.** If a number appears on the dashboard, you must be able to point to the exact cell in the exact spreadsheet it came from. See PROVENANCE.md.
- **Never hallucinate data.** If you don't have the number from the authoritative source, show nothing — don't estimate, don't round, don't guess.
- **Verify against the source.** After any change, compare the live dashboard against the CF spreadsheet. Cell by cell if needed.
- **gviz is not trustworthy for Settings.** We switched to the export API for a reason. If you're reading Settings data and it looks wrong, it probably is — check the export API.
- **Percentage convention is non-negotiable.** Settings tab stores LVR=90, Interest=6, not 0.9, 0.06. `fetchSheetData.ts` divides by 100. Getting this wrong means every financial calculation is off by 100x.

### 3. PROFESSIONAL EXECUTION

This is not a hackathon. Clean, deliberate, production-quality work.

**What this means in practice:**
- **Read before you write.** Understand the existing code before changing it. Read `fetchSheetData.ts`, read the component you're touching, read PROVENANCE.md.
- **Don't add what wasn't asked for.** No speculative features, no "while I'm here" refactors, no extra abstractions. Do what's needed, do it right, stop.
- **Don't break what's working.** The cashflow section took significant effort to get correct. The expense breakdown, equity projection, upfront costs — all verified. Touch them only if you have a specific bug to fix.
- **Commit messages matter.** Clear, descriptive. What changed and why.
- **Test the live deploy.** Not "it should work" — screenshot it, verify it, prove it.
- **Use the business email.** `christian@baumannproperty.com.au` — never personal Gmail.
- **Communicate through the collab repo.** Update your agent status. Claim tasks before working on them. Post results when done. No silent work.

---

## Architecture Rules (enforced)

| Rule | Rationale |
|---|---|
| No lat/lng or coordinates anywhere | Removed — too fragile for multi-deal scalability |
| Settings tab via export API, not gviz | gviz cache serves stale data for 15+ minutes |
| Percentages stored as whole numbers | LVR=90 means 90%, fetchSheetData divides by 100 |
| Deal URLs use `/deals/<slug>` | Convention — no `/properties/` |
| All data from Google Sheets | No hardcoded fallback values in components |
| Address-based map embeds | `?q={address}&output=embed` — works for any deal |

---

## Current Priority Stack

1. **Verify 90 Harbourne deploy** — cli is handling this now
2. **Audit dashboard** — desktop-1, claim the audit task
3. **Fix template gaps** — ensure the template setup script creates correct tab structure
4. **Scalability test** — create deal #2, prove the system works end-to-end
5. **Nothing else until 1-4 are done**

---

Do not start on anything creative or speculative. Execute the tasks in the inbox. Claim them properly. Report results. Let's ship this.
