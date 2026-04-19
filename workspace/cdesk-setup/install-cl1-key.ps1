# Installs CL1's public SSH key on CDesk so CL1 can SSH into CDesk without a password.
# Run on CDesk as Administrator (elevates itself if launched non-admin).
#
# This DOES NOT disable password auth; Chris still logs in from his phone with a password
# until he sets up a Termius key for CDesk.

$ErrorActionPreference = 'Stop'

if (-not ([Security.Principal.WindowsPrincipal][Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)) {
    Write-Host "Re-launching elevated (approve the UAC prompt)..." -ForegroundColor Yellow
    Start-Process powershell -Verb RunAs -ArgumentList "-NoExit","-ExecutionPolicy","Bypass","-File","`"$PSCommandPath`""
    exit
}

$cl1Pub = 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIOSz397YJs2e01ij0WhxKO2dkKJ1WmHpF4u0kdHIp7dc bpi-desktop-20260419'
$adminAuth = 'C:\ProgramData\ssh\administrators_authorized_keys'

Write-Host "=== 1/3 Ensure administrators_authorized_keys exists ===" -ForegroundColor Cyan
if (-not (Test-Path (Split-Path $adminAuth -Parent))) {
    Write-Host "OpenSSH Server not installed on this machine. Run setup-cdesk-remote.ps1 first." -ForegroundColor Red
    exit 1
}
if (-not (Test-Path $adminAuth)) {
    New-Item -Path $adminAuth -ItemType File -Force | Out-Null
    Write-Host "Created empty $adminAuth" -ForegroundColor Green
}

Write-Host "`n=== 2/3 Append CL1 public key (idempotent) ===" -ForegroundColor Cyan
$existing = Get-Content $adminAuth -Raw -ErrorAction SilentlyContinue
if ($existing -and ($existing -match [regex]::Escape($cl1Pub.Trim()))) {
    Write-Host "CL1 key already present - skipping." -ForegroundColor Yellow
} else {
    Add-Content -Path $adminAuth -Value $cl1Pub
    Write-Host "CL1 key appended." -ForegroundColor Green
}

Write-Host "`n=== 3/3 Fix ACLs (only SYSTEM + Administrators can read) ===" -ForegroundColor Cyan
icacls $adminAuth /inheritance:r | Out-Null
icacls $adminAuth /grant "SYSTEM:F" "Administrators:F" | Out-Null
$acl = Get-Acl $adminAuth
foreach ($rule in $acl.Access) {
    if ($rule.IdentityReference.Value -notmatch 'SYSTEM|Administrators') {
        $acl.RemoveAccessRule($rule) | Out-Null
    }
}
Set-Acl $adminAuth $acl
icacls $adminAuth

Write-Host "`n====================== DONE ======================" -ForegroundColor Green
Write-Host "CL1 can now SSH into this box via Tailscale without a password." -ForegroundColor Yellow
Write-Host "Tailscale IP of CL1: 100.80.217.120"
Write-Host ""
Write-Host "Reply in claude-collab/messages/direct/ with your Windows username so CL1"
Write-Host "knows which user to connect as (e.g. ssh chrisb@100.120.172.67)."
