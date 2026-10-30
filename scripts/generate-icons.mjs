// Membuat logo dan ikon situs PasangCCTV.
// Jalankan: node scripts/generate-icons.mjs
//
// Output:
//   public/logo.svg, public/logo.png   logo nama "PasangCCTV" (persegi 512x512, untuk schema)
//   app/icon.svg                       favicon gambar kamera CCTV
//   app/apple-icon.png                 ikon layar utama iOS, 180x180
//   app/favicon.ico                    favicon 48x48 untuk crawler dan browser lama

import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");
const appDir = join(__dirname, "../app");
mkdirSync(publicDir, { recursive: true });

const ACCENT = "#F5C518";
const BG = "#0A0A0A";

// Logo nama: "Pasang" kuning, "CCTV" putih, di atas latar gelap.
const logoSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" fill="${BG}"/>
  <rect x="0" y="0" width="512" height="10" fill="${ACCENT}"/>
  <text x="256" y="250" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="108" font-weight="900" fill="${ACCENT}">Pasang</text>
  <text x="256" y="360" text-anchor="middle" font-family="Arial Black, Arial, sans-serif" font-size="108" font-weight="900" fill="#FFFFFF">CCTV</text>
</svg>`;

// Ikon kamera CCTV (tipe bullet dengan braket dinding).
const iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${BG}"/>
  <rect x="8" y="12" width="6" height="40" rx="3" fill="${ACCENT}"/>
  <rect x="14" y="29" width="12" height="6" fill="${ACCENT}"/>
  <g transform="rotate(16 30 32)">
    <rect x="20" y="24" width="36" height="17" rx="6" fill="${ACCENT}"/>
    <rect x="18" y="20.5" width="40" height="4.5" rx="2.25" fill="${ACCENT}"/>
    <circle cx="52" cy="32.5" r="6" fill="${BG}"/>
    <circle cx="52" cy="32.5" r="2.6" fill="${ACCENT}"/>
  </g>
</svg>`;

writeFileSync(join(publicDir, "logo.svg"), logoSvg, "utf8");
await sharp(Buffer.from(logoSvg)).png().toFile(join(publicDir, "logo.png"));

writeFileSync(join(appDir, "icon.svg"), iconSvg, "utf8");
await sharp(Buffer.from(iconSvg), { density: 576 })
  .resize(180, 180)
  .png()
  .toFile(join(appDir, "apple-icon.png"));

// favicon.ico: satu gambar PNG 48x48 di dalam wadah ICO.
const png48 = await sharp(Buffer.from(iconSvg), { density: 576 })
  .resize(48, 48)
  .png()
  .toBuffer();
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0); // reserved
header.writeUInt16LE(1, 2); // tipe 1 = ikon
header.writeUInt16LE(1, 4); // jumlah gambar
const entry = Buffer.alloc(16);
entry.writeUInt8(48, 0); // lebar
entry.writeUInt8(48, 1); // tinggi
entry.writeUInt8(0, 2); // jumlah warna
entry.writeUInt8(0, 3); // reserved
entry.writeUInt16LE(1, 4); // color planes
entry.writeUInt16LE(32, 6); // bit per piksel
entry.writeUInt32LE(png48.length, 8); // ukuran data
entry.writeUInt32LE(header.length + entry.length, 12); // offset data
writeFileSync(join(appDir, "favicon.ico"), Buffer.concat([header, entry, png48]));

console.log("OK public/logo.svg, public/logo.png, app/icon.svg, app/apple-icon.png, app/favicon.ico");
