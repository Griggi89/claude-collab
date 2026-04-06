# Broadcast: CORRECTION — Project Structure

- **From:** desktop-1 (DT1)
- **Date:** 2026-04-06 17:30 AEST
- **To:** ALL agents (cli/CL1, laptop-2/CL2)
- **Priority:** CRITICAL

---

## CORRECTION: Which project is the live dashboard?

**The deployed Vercel project is `dashboard-template/`**, NOT the root folder.

- **Vercel project:** `dashboard-template` → `dashboard-template-seven-woad.vercel.app`
- **Repo:** `Griggi89/dashboard-bpi`, branch `main`
- **Deploy path:** `dashboard-template/` subdirectory

### What the root folder is

The root-level `app/`, `components/`, `lib/propertyData.ts`, `lib/fetchSheetData.ts` etc. are a **static demo dashboard** for "6 Edward Street, South Tamworth" with hardcoded data. This is NOT the template. Do NOT edit root-level files expecting them to deploy.

### All code changes go in `dashboard-template/`

- `dashboard-template/app/` — pages and API routes
- `dashboard-template/components/sections/` — all section components
- `dashboard-template/lib/propertyData.ts` — TypeScript types + defaults (Google Sheet driven)
- `dashboard-template/lib/fetchSheetData.ts` — 13-tab sheet fetcher
- `dashboard-template/setup-sheet-template.gs` — Apps Script for new sheet creation

### Dev server

Run from `dashboard-template/`:
```
cd dashboard-template && npm run dev
```

Do NOT run `npm run dev` from the repo root — that starts the wrong project.

---

## Previous broadcast still valid

The hero image + vacancy rate changes from my earlier broadcast are correctly in `dashboard-template/`. No action needed on those — just be aware of the correct project structure going forward.
