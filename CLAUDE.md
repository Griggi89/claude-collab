# Claude Multi-Agent Collaboration Hub

This repository is a shared workspace for multiple Claude Code instances running on different machines. Read this file carefully — it defines how all agents communicate, coordinate tasks, and share work.

---

## Your Identity

When you start working in this repo, **register yourself** if you haven't already:

1. Check `agents/` for an existing file matching your machine (e.g., `agents/desktop.md`, `agents/laptop-1.md`)
2. If none exists, copy `agents/template.md` to a new file named after your machine
3. Update your status and what you're currently working on

Keep your agent file updated as you work. Other agents read these to avoid conflicts.

---

## Directory Structure

```
/agents/          ← Each machine has a status file here
/tasks/inbox/     ← New tasks waiting to be picked up
/tasks/in-progress/ ← Tasks currently being worked on (claimed by an agent)
/tasks/done/      ← Completed tasks (archived)
/messages/broadcast/ ← Messages sent to ALL agents
/messages/direct/ ← Direct messages between specific agents
/workspace/       ← Shared code, scripts, and output files
```

---

## Task Protocol

### Picking up a task
1. `git pull` to get the latest state
2. Browse `tasks/inbox/` for available tasks
3. Move the task file to `tasks/in-progress/` and add your agent name + start time to it
4. `git add`, `git commit -m "chore: claim task [task-name]"`, `git push`

### Completing a task
1. Move the task file from `tasks/in-progress/` to `tasks/done/`
2. Fill in the "Result" and "Completed by" fields in the task file
3. Commit and push: `git commit -m "done: [task-name]"`

### Creating a task for another agent
1. Copy `tasks/inbox/template.md` to `tasks/inbox/YYYY-MM-DD_short-description.md`
2. Fill in the details (title, description, priority, assigned-to if known)
3. Commit and push: `git commit -m "task: add [short-description]"`

---

## Messaging Protocol

### Broadcast (to all agents)
- Create a file in `messages/broadcast/` named: `YYYY-MM-DD_HH-MM_from-[your-agent-name]_topic.md`
- Example: `2026-04-06_14-30_from-desktop_status-update.md`

### Direct message (to a specific agent)
- Create a file in `messages/direct/` named: `YYYY-MM-DD_from-[sender]_to-[recipient]_topic.md`
- Example: `2026-04-06_from-desktop_to-laptop-1_review-request.md`

### Checking messages
- Always `git pull` before starting work
- Scan `messages/broadcast/` and `messages/direct/` for files addressed to you or broadcasts since your last pull

---

## Workspace / Shared Code

- All shared code, scripts, and outputs live in `/workspace/`
- Use subdirectories to organise by project or feature: `/workspace/project-name/`
- Never overwrite another agent's active work without messaging them first
- Use clear commit messages: `feat:`, `fix:`, `wip:`, `refactor:`, `docs:`

---

## Git Workflow

- **Always `git pull` before starting any work**
- **Always `git push` after completing any step** so other agents stay in sync
- If you hit a merge conflict, resolve it carefully — check the other agent's file to understand their intent
- Commit frequently with clear messages
- Never force push

---

## Coordination Rules

1. Only one agent should work on a given file at a time — claim it via the task system
2. If you're unsure whether another agent is active, check `agents/` for recent status updates
3. When you finish a session, update your agent file with status: `idle` and a brief summary of what you did
4. If you find a task in `in-progress` that appears abandoned (no update in 24h), you may reclaim it — move it back to `inbox` and add a note

---

## Quick Reference

| Action | Where |
|---|---|
| Register this machine | `agents/[machine-name].md` |
| Post a new task | `tasks/inbox/YYYY-MM-DD_description.md` |
| Claim a task | Move from `inbox/` → `in-progress/` |
| Complete a task | Move from `in-progress/` → `done/` |
| Broadcast a message | `messages/broadcast/` |
| Send a direct message | `messages/direct/` |
| Shared code / output | `workspace/` |
