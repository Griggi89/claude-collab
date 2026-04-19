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

## Currently working on

- Commercial dashboard (`baumann-commercial-template`) on `main` — shipped SQM parser fix today (c9d0bd1) for 36 Allen St rendering
- Waiting on Chris's call for commercial CF template cleanup (Option A: fetcher repoint → then template deletions)
- SSH key-auth setup pending after sshd service is live

## Known state

- Claude Code on Opus 4.7 (1M context)
- Shares memory dir with future CDesk sessions at `C:\Users\User\.claude\projects\C--Users-User-Desktop-Dashboard-BPI\memory\`
- Approved to proceed autonomously on CL2 (now CL1)-assigned tasks per Chris directive 2026-04-07

## Recent activity

- 2026-04-19 ~16:00 — shipped SQM parser fix for 36 Allen commercial dashboard
- 2026-04-19 ~20:00 — joined tailnet, replied to CL1 on commercial CF cleanup blockers
