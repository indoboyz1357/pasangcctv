// Membuat gambar OG (Open Graph) 1200x630 dalam format SVG dan PNG.
// Jalankan: node scripts/generate-og.mjs
// Output: public/og/home.(svg|png) dan public/og/paket.(svg|png)
// PNG dibuat dengan sharp (sudah terpasang bersama Next.js).
// Harga sengaja tidak ditulis di gambar agar tidak ketinggalan saat harga berubah.

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/og");
mkdirSync(outDir, { recursive: true });

function makeSvg(headline, keyword) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
      <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#F5C518" stroke-width="0.4" stroke-opacity="0.15"/>
    </pattern>
  </defs>

  <!-- Background -->
  <rect width="1200" height="630" fill="#0A0A0A"/>
  <!-- Grid -->
  <rect width="1200" height="630" fill="url(#grid)"/>
  <!-- Accent line top -->
  <rect x="0" y="0" width="1200" height="4" fill="#F5C518"/>
  <!-- Left accent bar -->
  <rect x="80" y="100" width="6" height="120" fill="#F5C518" rx="3"/>

  <!-- Brand -->
  <text x="110" y="165" font-family="Arial Black, Arial, sans-serif" font-size="28" font-weight="900" fill="#F5C518">Pasang</text>
  <text x="240" y="165" font-family="Arial Black, Arial, sans-serif" font-size="28" font-weight="900" fill="#FFFFFF">CCTV</text>

  <!-- Headline -->
  <text x="80" y="300" font-family="Arial Black, Arial, sans-serif" font-size="64" font-weight="900" fill="#FFFFFF">${headline}</text>

  <!-- Keyword pill -->
  <rect x="80" y="340" width="${keyword.length * 18 + 40}" height="50" rx="8" fill="#F5C518"/>
  <text x="100" y="374" font-family="Arial, sans-serif" font-size="22" font-weight="700" fill="#0A0A0A">${keyword}</text>

  <!-- Domain -->
  <text x="80" y="540" font-family="Arial, sans-serif" font-size="22" fill="#A1A1AA">pasangcctv.my.id</text>

  <!-- Decorative circles -->
  <circle cx="1050" cy="200" r="180" fill="#F5C518" fill-opacity="0.04"/>
  <circle cx="1100" cy="450" r="100" fill="#F5C518" fill-opacity="0.06"/>
</svg>`;
}

const pages = [
  { name: "home", headline: "Pasang CCTV", keyword: "Jabodetabek: rumah, ruko, kantor" },
  { name: "paket", headline: "Paket CCTV", keyword: "2 sampai 16 kamera" },
];

for (const p of pages) {
  const svg = makeSvg(p.headline, p.keyword);
  writeFileSync(join(outDir, `${p.name}.svg`), svg, "utf8");
  await sharp(Buffer.from(svg)).png().toFile(join(outDir, `${p.name}.png`));
  console.log(`OK public/og/${p.name}.svg dan ${p.name}.png`);
}
