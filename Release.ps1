[CmdletBinding()]
param (
    [Parameter()]
    [System.String]
    $VersionBump = "patch"
)

# $PackageJsonPath = Resolve-Path -Path "./package.json"

# Get-Content -Path $PackageJsonPath

$Status = git status -s

if ($Status.Length -gt 0) {
  Write-Host -ForegroundColor Red "Uncommitted changes detected. Please deal with these changes and try again."
  exit 1
}

npm run pretty

git add .

git commit -m 'style: executed prettier across codebase'

npm version $VersionBump

git add .

git commit -m 'chore: version bumped'
