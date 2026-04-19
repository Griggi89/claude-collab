# CDesk remote-access setup: installs OpenSSH Server + Tailscale
# Same setup as CL1 (2026-04-19). Run in Terminal (Admin) or right-click > Run as Administrator.

$ErrorActionPreference = 'Stop'

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "Re-launching elevated (approve the UAC prompt)..." -ForegroundColor Yellow
    Start-Process powershell -Verb RunAs -ArgumentList "-NoExit","-ExecutionPolicy","Bypass","-File","`"$PSCommandPath`""
    exit
}

# ---------------- OpenSSH Server ----------------
Write-Host "=== 1/5 Installing OpenSSH Server ===" -ForegroundColor Cyan
$cap = Get-WindowsCapability -Online -Name OpenSSH.Server*
if ($cap.State -ne 'Installed') {
    Add-WindowsCapability -Online -Name $cap.Name | Out-Null
    Write-Host "Installed: $($cap.Name)" -ForegroundColor Green
} else {
    Write-Host "Already installed." -ForegroundColor Green
}

Write-Host "`n=== 2/5 Starting sshd + ssh-agent ===" -ForegroundColor Cyan
Start-Service sshd
Set-Service -Name sshd -StartupType Automatic
Set-Service -Name ssh-agent -StartupType Automatic
Start-Service ssh-agent
Get-Service sshd, ssh-agent | Format-Table Name, Status, StartType -AutoSize

Write-Host "`n=== 3/5 Firewall rule for port 22 ===" -ForegroundColor Cyan
if (-not (Get-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -ErrorAction SilentlyContinue)) {
    New-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -DisplayName 'OpenSSH Server (sshd)' -Enabled True -Direction Inbound -Protocol TCP -Action Allow -LocalPort 22 | Out-Null
    Write-Host "Firewall rule created." -ForegroundColor Green
} else {
    Set-NetFirewallRule -Name 'OpenSSH-Server-In-TCP' -Enabled True
    Write-Host "Firewall rule enabled." -ForegroundColor Green
}

# ---------------- Tailscale ----------------
Write-Host "`n=== 4/5 Installing Tailscale ===" -ForegroundColor Cyan
$tsExe = "$env:ProgramFiles\Tailscale\tailscale.exe"
if (-not (Test-Path $tsExe)) {
    winget install --id tailscale.tailscale --silent --accept-package-agreements --accept-source-agreements
    Start-Sleep -Seconds 3
} else {
    Write-Host "Tailscale already installed." -ForegroundColor Green
}

if (-not (Test-Path $tsExe)) {
    Write-Host "Tailscale install failed - binary not at $tsExe" -ForegroundColor Red
    Write-Host "Try manually: winget install tailscale.tailscale" -ForegroundColor Yellow
    exit 1
}

Write-Host "`n=== 5/5 Tailscale login ===" -ForegroundColor Cyan
Write-Host "A browser window will open. Sign in with christian@baumannproperty.com.au" -ForegroundColor Yellow
& $tsExe up --operator=$env:USERNAME

Start-Sleep -Seconds 2
Write-Host "`n--- Tailscale status ---" -ForegroundColor Cyan
& $tsExe status

# ---------------- Summary ----------------
$user = $env:USERNAME
$ts = (& $tsExe ip -4 2>$null | Select-Object -First 1)

Write-Host "`n====================== DONE ======================" -ForegroundColor Green
Write-Host "CDesk username:   $user"
Write-Host "CDesk Tailscale:  $ts"
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Reply in claude-collab/messages/direct/ with this IP"
Write-Host "2. Create or update claude-collab/agents/cdesk.md with status + IP"
Write-Host "3. Chris can now SSH in from phone: ssh $user@$ts"
Write-Host ""
Write-Host "Note: password auth is still enabled. Key-based auth should be set up next"
Write-Host "following the same pattern as CL1 (see setup-ssh-key.ps1 on CL1's desktop)."
