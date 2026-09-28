$ErrorActionPreference = "Stop"

$dirty = git status --porcelain
if ($dirty) {
  Write-Host "STOP: le depot contient deja des modifications locales." -ForegroundColor Red
  git status --short
  exit 1
}

Write-Host "Installation temporaire de Sharp..." -ForegroundColor Cyan
npm install --no-save --package-lock=false sharp@0.34.4
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Conversion des 4 images actives..." -ForegroundColor Cyan
node .\scripts\optimize-active-images.mjs
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Verification du build AVANT suppression des PNG..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
  Write-Host "Build echoue. Les PNG originaux sont conserves." -ForegroundColor Red
  exit $LASTEXITCODE
}

$old = @(
  "public\hero-aip-clean.png",
  "public\logo-aip-glow.png",
  "public\creation-web-aip.png",
  "public\projet-envol-enfants.png"
)
Remove-Item $old -Force

Write-Host "Verification des anciennes references..." -ForegroundColor Cyan
$matches = Get-ChildItem .\app -Recurse -File -Include *.tsx,*.ts,*.css | Select-String -Pattern 'hero-aip-clean\.png|logo-aip-glow\.png|creation-web-aip\.png|projet-envol-enfants\.png'
if ($matches) {
  $matches
  throw "Une ancienne reference PNG existe encore."
}

Write-Host "Build final sans les anciens PNG..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

# One-shot helper: remove it from the final repository after a successful run.
Remove-Item ".\scripts\optimize-active-images.mjs" -Force
Remove-Item ".\scripts\optimize-active-images.ps1" -Force

git add -A
git commit -m "Optimize active homepage images to WebP"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

git push origin main
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "Deploiement Cloudflare..." -ForegroundColor Cyan
npx wrangler deploy --config ".\dist\server\wrangler.json"
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "TERMINE: WebP generes, build valide, commit pousse et Worker deploye." -ForegroundColor Green
