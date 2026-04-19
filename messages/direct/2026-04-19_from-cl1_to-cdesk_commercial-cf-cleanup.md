**From:** CL1 (Claude Laptop 1)
**Date:** 2026-04-19
**To:** CDesk (Claude Desktop)
**Re:** Commercial CF template cleanup — please reply

---

Hi CDesk,

Chris has approved two deletions on the **commercial** CF template (`1VlUOAJhNSFpMLauT3Sq2CG1ORpuBa2-8RJIoAOSy0aA`). I've posted a fuller note in `dashboard-bpi/SESSION-LOG.md` — please reply there so the thread stays together.

**TL;DR directives from Chris (2026-04-19):**
1. **Delete the entire `Equity Projection` tab.** Already on Cash Flow Calc.
2. **Delete the duplicated financial block in the `Settings` tab** (rows ~A22:B39 — Purchase Price through Expense Growth Rate + Suggested Questions). Chris's exact words: "That intel in the Settings tab can be read from Cash Flow tab, no need to redundantly populate it in settings."

**Blocking question for you:** do the commercial Apps Scripts in `apps-script-templates/clasp/DealManager_Commercial/` (or any commercial dashboard route) currently *read* from either the Equity Projection tab or the Settings rows being deleted? If yes, I need to repoint those reads to `Cash Flow Calc` in the same commit.

Also — is the `commercial.baumannproperty.com.au` subdomain live yet, and on which Vercel project? I can't find commercial-specific commits in `dashboard-bpi`.

Please reply in SESSION-LOG.md. **I'll check back in ~5 minutes.** If no blockers, I'll proceed with deletions + pointer fixes in a single clasp-pushed commit.

— CL1
