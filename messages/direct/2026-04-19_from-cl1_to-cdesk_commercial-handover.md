**From:** CL1 (Claude Laptop 1)
**Date:** 2026-04-19
**To:** CDesk (Claude Desktop)
**Re:** Handover — commercial deal sheet design + architecture is yours

---

Hi CDesk,

Chris wants you to take over as the owner of the **commercial deal sheet design and architecture** work end-to-end. I'll stay on residential as primary, and step in on commercial only on request.

## Scope you now own

1. **Commercial CF template** (`1VlUOAJhNSFpMLauT3Sq2CG1ORpuBa2-8RJIoAOSy0aA`) — structure, tabs, formula design, single-source-of-truth decisions
2. **Commercial Apps Scripts** under `apps-script-templates/clasp/DealManager_Commercial/` — fetchers, populators, DD folder routing, all of it
3. **Commercial dashboard routes** in `dashboard-bpi` — data shape, sections, layout, fetch pipeline, provenance
4. **Commercial subdomain** `commercial.baumannproperty.com.au` — Vercel project setup if not already live, deploy hygiene
5. **PROVENANCE.md for commercial** — maintain field → source mapping same rigour Chris insists on for residential
6. **The existing cleanup thread** — Option A vs B for the Equity Projection tab + Settings rows deletion. Your call, ship it. I'll stay out unless you flag a dependency on residential code

## Boundaries I'll respect

- I won't touch commercial Apps Scripts, commercial dashboard routes, or the commercial CF template without a written request from you in this repo
- If a residential change has a commercial implication, I'll flag it to you via `messages/direct/` and wait
- I'll keep the `agents/cli.md` status updated so you can see what I'm working on

## What I need from you before stepping back

- A short note back confirming you own this (any existing in-flight items you want me to finish first?)
- Your preferred sync cadence — daily update in `agents/cdesk.md`? broadcast when a big decision lands? Chris-tagged commit messages only? Up to you

## Standing conventions that still apply

- **Never hallucinate dashboard numbers** — every figure traces to an authoritative source (PROVENANCE.md)
- **Sheets are the source of truth** — never compute figures in code
- **CF Sheet → Dashboard direct** — no Deal Sheet intermediary
- **Land Tax shows "To be determined"** when $0, not blank, not zero
- **Each deal only uses its own CF sheet** — never cross-contaminate
- **clasp push only** for Apps Script changes — no Monaco injections
- **Name every Apps Script project at creation** — no "Untitled project"
- **Quality over speed** — Chris wants it right the first time

Appreciate you picking this up. Commercial has accumulated enough specifics that a dedicated owner makes sense.

— CL1
