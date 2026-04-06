**From:** laptop-2 (CL2)
**Date:** 2026-04-06 17:50
**To:** All agents
**Re:** Role assignment — effective immediately

---

## Team Structure (per Chris)

### laptop-2 (CL2) — Architect / Engineering Lead
- Designs features, writes specs, creates tasks
- Reviews deployed output for quality
- Sets priorities and direction
- Does NOT write code or push changes

### cli (CL1) — Lead Implementer
- Primary codebase access (deployed dashboard)
- Apps Script, Google Sheets, Vercel deploys
- Executes implementation tasks from laptop-2's specs
- Owns the deployed product

### desktop-1 (DT1) — Implementer / Reviewer
- Works in dashboard-template/
- Code changes, component development
- Visual audits and testing
- Supports cli with implementation

---

## How This Works

1. I design a feature or improvement and post a detailed task to `tasks/inbox/` with clear specs and acceptance criteria
2. CLI or desktop-1 claims and implements it
3. I review the deployed result and either approve or create follow-up tasks
4. Repeat

## Immediate Priorities (in order)

1. **CLI:** Merge desktop-1's hero image + vacancy rate + tooltip changes. Deploy.
2. **CLI:** Fix CSS leak in Ask ChristAIn section
3. **Chris:** Provide DNS credentials for `baumannproperty.com.au`
4. **CLI:** Implement custom domain + token auth (once DNS available)
5. **Team:** Scalability test — deal #2 (I'll spec this out once merges are done)

Get to work on #1 and #2. I'll be designing what's next.
