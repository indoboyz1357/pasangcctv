// Script untuk menghasilkan gambar OG (Open Graph) 1200x630 sebagai PNG
// Dijalankan sekali: node scripts/generate-og.mjs
// Output: public/og/home.png dan public/og/paket.png
// Tidak membutuhkan foto — menggunakan teks dan grafis sederhana.

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

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

// Simpan sebagai SVG (PNG tidak bisa dibuat tanpa dependency eksternal)
// Next.js menerima SVG untuk OG image jika tidak ada PNG.
// Untuk PNG sungguhan, jalankan: npx svgexport public/og/home.svg public/og/home.png 1200:630

const pages = [
  { file: "home.svg", headline: "Pasang CCTV", keyword: "JABODETABEK mulai Rp2.350.000" },
  { file: "paket.svg", headline: "Paket CCTV", keyword: "2 hingga 16 kamera" },
];

for (const p of pages) {
  const svg = makeSvg(p.headline, p.keyword);
  writeFileSync(join(outDir, p.file), svg, "utf8");
  console.log(`✓ public/og/${p.file}`);
}
console.log("OG images ditulis sebagai SVG. Ganti referensi .png ke .svg atau convert ke PNG.");
