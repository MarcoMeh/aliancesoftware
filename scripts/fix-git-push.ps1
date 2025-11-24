<#
PowerShell script: fix-git-push.ps1
This script runs safe diagnostics and tries common workarounds for 'git push' failures
(e.g., "RPC failed; curl 55 Send failure: Connection was aborted").

Usage (PowerShell):
  cd <repo-root>
  pwsh ./scripts/fix-git-push.ps1

It will:
 - show remotes/status
 - fetch/prune
 - run git gc and repack
 - temporarily increase http.postBuffer and disable compression
 - attempt a push
 - if push fails, run a verbose push and write logs to ./git-push-debug.txt
 - restore compression setting (optional prompt)

Note: This script does NOT rewrite history or remove files. If large objects are present, follow-up steps (BFG / git filter-repo / git lfs) are required.
#>

Write-Host "Running Git push helper script...`n" -ForegroundColor Cyan

# Ensure we're in a git repository
if (-not (Test-Path -Path .git)) {
  Write-Error "This does not appear to be a git repository. Run this script from the repository root."
  exit 1
}

# Show remotes and status
Write-Host "Remote URLs:" -ForegroundColor Yellow
git remote -v

Write-Host "\nGit status:" -ForegroundColor Yellow
git status --porcelain=2 --branch

Write-Host "\nFetching remote (prune)..." -ForegroundColor Yellow
git fetch --all --prune

# Garbage collect and repack
Write-Host "\nRunning git gc --aggressive and repack (this may take a while)..." -ForegroundColor Yellow
git gc --prune=now --aggressive
git repack -a -f -d --window=250 --depth=250

# Save previous compression setting
$prevCompression = git config --get core.compression 2>$null
Write-Host "\nPrevious core.compression: $prevCompression" -ForegroundColor Gray

# Increase buffers and disable compression to reduce pack size during push
Write-Host "Setting temporary git configs: http.postBuffer, http.maxRequestBuffer, core.compression=0" -ForegroundColor Yellow
git config http.postBuffer 524288000
git config http.maxRequestBuffer 524288000
git config core.compression 0

# Attempt a normal push
Write-Host "\nAttempting normal push (origin main:main)..." -ForegroundColor Cyan
$pushResult = & git push origin main:main 2>&1
if ($LASTEXITCODE -eq 0) {
  Write-Host "Push succeeded." -ForegroundColor Green
  # Restore compression if necessary
  if ($prevCompression -ne $null -and $prevCompression -ne "0") {
    git config core.compression $prevCompression
    Write-Host "Restored core.compression to $prevCompression" -ForegroundColor Gray
  } else {
    git config --unset core.compression 2>$null
  }
  # Unset increased buffers
  git config --unset http.postBuffer 2>$null
  git config --unset http.maxRequestBuffer 2>$null
  exit 0
}

Write-Host "Push failed with exit code $LASTEXITCODE. Capturing verbose logs..." -ForegroundColor Red
# Run verbose push with packet, trace and curl output
$env:GIT_TRACE_PACKET = '1'
$env:GIT_TRACE = '1'
$env:GIT_CURL_VERBOSE = '1'

$logFile = Join-Path -Path (Get-Location) -ChildPath 'git-push-debug.txt'
Write-Host "Writing verbose push output to: $logFile" -ForegroundColor Yellow

# Run verbose push and capture
git push origin main:main *>&1 | Tee-Object -FilePath $logFile

Write-Host "\nVerbose push completed. Review $logFile for details. You can paste it here if you want me to analyze it." -ForegroundColor Cyan

# Restore core.compression to previous value
if ($prevCompression -ne $null -and $prevCompression -ne "0") {
  git config core.compression $prevCompression
  Write-Host "Restored core.compression to $prevCompression" -ForegroundColor Gray
} else {
  git config --unset core.compression 2>$null
}

Write-Host "Unsetting temporary http buffer configs..." -ForegroundColor Gray
git config --unset http.postBuffer 2>$null
git config --unset http.maxRequestBuffer 2>$null

Write-Host "\nNext recommendations if this did not fix the problem:" -ForegroundColor Yellow
Write-Host " - Try pushing over SSH (set remote to git@github.com:owner/repo.git) after configuring SSH keys." -ForegroundColor Gray
Write-Host " - Inspect git-push-debug.txt and share it for analysis." -ForegroundColor Gray
Write-Host " - If large objects are present, run the 'detect large objects' commands below or ask me to prepare a BFG/git-filter-repo migration." -ForegroundColor Gray

Write-Host "\nCommands to find large objects (run after this script):" -ForegroundColor Yellow
Write-Host "git gc --prune=now" -ForegroundColor Gray
Write-Host "git verify-pack -v .git/objects/pack/*.pack | sort -k3 -n | tail -n 20" -ForegroundColor Gray
Write-Host "git rev-list --objects --all | grep <sha-from-verify-pack> | sort -k2 -n" -ForegroundColor Gray

Write-Host "\nIf you'd like, run this script and paste the contents of git-push-debug.txt here and I'll analyze it." -ForegroundColor Cyan

exit 1
