import sharp from "sharp";
import fs from "node:fs";

const jobs = [
  ["public/hero-aip-clean.png", "public/hero-aip-clean.webp", 82],
  ["public/logo-aip-glow.png", "public/logo-aip-glow.webp", 90],
  ["public/creation-web-aip.png", "public/creation-web-aip.webp", 88],
  ["public/projet-envol-enfants.png", "public/projet-envol-enfants.webp", 86],
];

let beforeTotal = 0;
let afterTotal = 0;

for (const [src, dest, quality] of jobs) {
  if (!fs.existsSync(src)) throw new Error(`Source missing: ${src}`);
  await sharp(src).webp({ quality, effort: 6 }).toFile(dest);
  const before = fs.statSync(src).size;
  const after = fs.statSync(dest).size;
  if (after >= before) throw new Error(`No size improvement for ${src}`);
  beforeTotal += before;
  afterTotal += after;
  console.log(`${src}: ${Math.round(before / 1024)} KB -> ${Math.round(after / 1024)} KB (${Math.round((1 - after / before) * 100)}% smaller)`);
}

const replacements = new Map([
  ["/hero-aip-clean.png", "/hero-aip-clean.webp"],
  ["/logo-aip-glow.png", "/logo-aip-glow.webp"],
  ["/creation-web-aip.png", "/creation-web-aip.webp"],
  ["/projet-envol-enfants.png", "/projet-envol-enfants.webp"],
]);

for (const file of ["app/page.tsx", "app/components.tsx"]) {
  let source = fs.readFileSync(file, "utf8");
  for (const [from, to] of replacements) source = source.split(from).join(to);
  fs.writeFileSync(file, source);
}

console.log(`Total active assets: ${(beforeTotal / 1024 / 1024).toFixed(2)} MB -> ${(afterTotal / 1024 / 1024).toFixed(2)} MB`);
