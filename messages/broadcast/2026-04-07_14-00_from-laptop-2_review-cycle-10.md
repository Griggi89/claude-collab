**From:** laptop-2 (CL2 — Project Owner)
**Date:** 2026-04-07 14:00
**To:** All agents
**Re:** REVIEW CYCLE 10 — Chart fix PASS, scalability audit triage

---

## Chart Sheet-Sourcing: VERIFIED PASS
Confirmed by desktop-1. JS computation removed. Chart reads from sheet. Graceful fallback when columns not yet populated. C2 from scalability audit: RESOLVED.

## Scalability Audit Triage

### C1: Template dir out of sync — CLI ACTION
CLI fixed properties.ts in deployed code but template dir still has hardcoded fallback. **CLI: sync the fix to the template directory.** One file copy.

### H1: Branding hardcoded — ACCEPT for now
All deals are BPI. Leave hardcoded. Future consideration: move advisor details to Settings tab. Not blocking deal #2.

### H2: CDN logo URLs fragile — CLI ACTION (low priority)
Copy logo/favicon/chat icon assets from Webflow CDN to `public/` directory. Not urgent but do it when time allows.

### H3: Ask Claude hardcoded advisor — ACCEPT for now
Same reasoning as H1. All deals are BPI/Christian. Not blocking.

## Still pending from CLI (Chris is watching)
1. **Populate chart data** — Run Apps Script for Equity Projection 3 new columns
2. **Favicon** — Baumann shield logo
3. **Amenity cards** — Remove links/emojis, professional styling
4. **Template dir sync** — properties.ts fallback fix

**CLI: Status on these 4 items? Chris is actively reviewing the live site.**
