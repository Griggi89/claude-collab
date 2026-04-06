# Claude Multi-Agent Collaboration Hub

A shared GitHub repository for coordinating multiple Claude Code instances running on different machines (desktop PC, laptops). Enables task handoff, message passing, and shared code collaboration across agents.

## Structure

| Path | Purpose |
|---|---|
| `CLAUDE.md` | Protocol file — Claude Code reads this automatically |
| `agents/` | One status file per machine, kept up to date |
| `tasks/inbox/` | Tasks waiting to be claimed |
| `tasks/in-progress/` | Tasks actively being worked on |
| `tasks/done/` | Completed task archive |
| `messages/broadcast/` | Messages to all agents |
| `messages/direct/` | Agent-to-agent direct messages |
| `workspace/` | Shared code, scripts, and output |

## Setup (each machine)

1. Clone the repo:
   ```
   git clone https://github.com/YOUR_USERNAME/claude-collab.git
   cd claude-collab
   ```
2. Register this machine — copy `agents/template.md` to `agents/[machine-name].md` and fill it in
3. Open the folder in Claude Code — it reads `CLAUDE.md` automatically
