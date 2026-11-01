// Mengambil foto dari Cloudinary ke public/images/ dengan nama berbahasa Indonesia.
// Jalankan sekali: node scripts/ambil-gambar.mjs
// Foto asal ada di references/images.md (bagian A). Nama asli "cctvgo_4" diganti di sini.
// Jika paket "sharp" ada di node_modules, lebar gambar dibatasi 1200 px.

import { mkdirSync, writeFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../public/images");
const base = "https://res.cloudinary.com/w8egcbkm/image/upload/";

const files = {
  "isi-paket-cctv-hikvision-turbo-hd.webp": "v1792847121/cctv123_2.webp",
  "tumpukan-kotak-kamera-hikvision.webp": "v1792847117/gb123123.webp",
  "dua-kamera-dome-hilook.webp": "v1792847116/cctvgo_4.webp",
};

let sharp = null;
try {
  sharp = (await import("sharp")).default;
} catch {
  console.log("sharp tidak ditemukan, gambar disimpan apa adanya.");
}

mkdirSync(outDir, { recursive: true });

for (const [name, path] of Object.entries(files)) {
  const target = join(outDir, name);
  if (existsSync(target)) {
    console.log(`SUDAH ADA ${name}`);
    continue;
  }
  try {
    const res = await fetch(base + path);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    let buf = Buffer.from(await res.arrayBuffer());
    if (sharp) {
      buf = await sharp(buf)
        .resize({ width: 1200, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toBuffer();
    }
    writeFileSync(target, buf);
    console.log(`OK    ${name} (${Math.round(buf.length / 1024)} KB)`);
  } catch (e) {
    console.log(`GAGAL ${name}: ${e.message}`);
  }
}
