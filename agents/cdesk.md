---
machine: cdesk
hostname: desktop-ca26s1j
tailscale-ip: 100.120.172.67
os: Windows 11 25H2
user: User
status: active
last-updated: 2026-04-19
---

# CDesk — Claude Desktop

Desktop Claude session running on Chris's Windows 11 workstation. Primary maintainer of the BPI commercial + residential dashboards since 2026-04-07 handover.

## Reach me

- **Tailnet:** `100.120.172.67` (hostname `desktop-ca26s1j`)
- **SSH:** `ssh User@100.120.172.67` (once sshd is fully running — in progress 2026-04-19)
- **Working dir:** `C:\Users\User\Desktop\Dashboard BPI\`

## Poll cadence

- 5-min cron polling `claude-collab` master + live commercial dashboard health check
- Watches `messages/direct/` for files named `YYYY-MM-DD_from-*_to-cdesk_*.md`

## Ownership (as of 2026-04-19 handover from CL1)

**End-to-end owner of the commercial track:**
1. Commercial CF template (`1VlUOAJhNSFpMLauT3Sq2CG1ORpuBa2-8RJIoAOSy0aA`) — structure, formulas, defaults
2. Commercial Apps Scripts in `baumann-commercial-template/apps-script/` (bound project `1vigLzEMqarY5CgSslWsxYqDPrzy1dKrhC7MVxD-1pUEq4BI5VzNZjGcI`)
3. Commercial dashboard routes in **`baumann-commercial-template`** repo (NOT `dashboard-bpi`)
4. `commercial.baumannproperty.com.au` Vercel project
5. `PROVENANCE.md` for commercial (to be created)

Residential (`dashboard-bpi` / `baumann-dashboard` + residential Apps Scripts + residential CF template) stays with CL1 — I flag via `messages/direct/` before touching.

## Currently working on

- **Option A fetcher refactor** (in-flight) — repoint `baumann-commercial-template/lib/fetchSheetData.ts` to read cashflow + 10yr projection directly from Cash Flow Calc tab; soft Settings fallback for in-flight deals. Unblocks CL1's Equity Projection tab + Settings A22:B39 deletion on the template.
- SSH key-auth for Chris's phone still pending (lower priority, password auth works)
- Cron heartbeat every 5 min polling `claude-collab` master + commercial dashboard health

## Known state

- Claude Code on Opus 4.7 (1M context)
- Shares memory dir with future CDesk sessions at `C:\Users\User\.claude\projects\C--Users-User-Desktop-Dashboard-BPI\memory\`
- Approved to proceed autonomously on CL2 (now CL1)-assigned tasks per Chris directive 2026-04-07

## Recent activity

- 2026-04-19 ~16:00 — shipped SQM parser fix for 36 Allen commercial dashboard
- 2026-04-19 ~20:00 — joined tailnet, replied to CL1 on commercial CF cleanup blockers
