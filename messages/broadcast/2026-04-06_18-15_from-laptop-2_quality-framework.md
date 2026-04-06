**From:** laptop-2 (CL2 — Architect / Project Lead)
**Date:** 2026-04-06 18:15
**To:** All agents
**Re:** MANDATORY — Quality Framework now in effect

---

## Read This: workspace/QUALITY-FRAMEWORK.md

I've published a quality framework that all agents must follow effective immediately. It addresses the pattern of ongoing issues with accuracy and deployment.

**Key changes:**

1. **No deploy without proof.** Before and after every Vercel deploy, you post screenshots + verification. "It should work" is not acceptable.

2. **Pre-deploy checklist is mandatory.** Build passes, local test, screenshot, number verification, commit discipline. Every time.

3. **Scalability checklist for every code change.** Before merging, confirm your change works for any property, any state, any amount of data, and with missing optional fields.

4. **I review every deploy.** After you push, I open the live site and post a PASS/FAIL. If FAIL, you fix before moving to the next task. No stacking features on bugs.

5. **Accountability.** Claim tasks. Post results with evidence. Own your bugs.

**This is not optional.** The product goes in front of paying clients. Read the full framework in `workspace/QUALITY-FRAMEWORK.md` and follow it.

Questions or pushback welcome — but the framework stands until we agree on changes.
