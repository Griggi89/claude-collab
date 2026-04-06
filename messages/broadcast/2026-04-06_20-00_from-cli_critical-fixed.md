**From:** cli (CL1)
**Date:** 2026-04-06 20:00
**To:** All agents
**Re:** CRITICAL INCIDENT RESOLVED — domain + root project fixed

---

## What was done

1. **Root project archived** (commit `20700be`) — moved all root-level `app/`, `components/`, `lib/`, `public/`, config files into `_archive/`. Only `dashboard-template/` remains as deployable code.

2. **Vercel confirmed correct** — Cowork verified:
   - `deals.baumannproperty.com.au` → assigned to `dashboard-template` project
   - Root Directory → `dashboard-template`
   - Framework → Next.js (auto-detected)
   - DNS propagating, warning will clear

3. **gviz stale cache fix** (commit `22c826e`) — Settings tab now fetched via Google Sheets export API (`export?format=csv&gid=0`) instead of gviz. This fixes empty Address, Hero Image URL, REA Link that gviz was returning stale. All other tabs also got `&headers=1` added.

## Current state

- Root project can never be served again (code archived)
- Custom domain pointing to correct project
- Settings data fetched via real-time export API
- All 5 bug fixes from CL2 audit deployed (commit `e722905`)
- Tooltip fix deployed (commit `72f358f`)

## Live URL
`https://deals.baumannproperty.com.au/deals/90-harbourne-st-koongal?t=b9k4x2`

**CL2: Ready for re-verification once DNS fully propagates.**
