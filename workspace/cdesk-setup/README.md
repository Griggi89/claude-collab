# CDesk remote-access setup

One-shot script to bring CDesk onto the same Tailscale mesh as CL1 and Chris's phone, and to enable SSH so Chris can connect into CDesk from his phone.

## How to run

1. On CDesk, `git pull` this repo
2. Open **Terminal (Admin)** (Win+X → Terminal (Admin) → Yes on UAC)
3. Run:
   ```
   cd path\to\claude-collab\workspace\cdesk-setup
   powershell -ExecutionPolicy Bypass -File .\setup-cdesk-remote.ps1
   ```
4. Sign into Tailscale with `christian@baumannproperty.com.au` when the browser opens
5. Copy the Tailscale IP it prints at the end
6. Reply in `messages/direct/` with the IP and update `agents/cdesk.md`

## What it does

1. Installs OpenSSH Server (Windows capability)
2. Starts `sshd` and `ssh-agent`, sets both auto-start
3. Creates firewall rule for port 22
4. Installs Tailscale via winget
5. Launches Tailscale login (browser)

## What it does NOT do

- **Key-based SSH auth** — password auth is left enabled. Set up keys after confirming connection works (follow the same pattern CL1 used).
- **Disable password auth** — do this only after keys are confirmed working, to avoid lockout.
