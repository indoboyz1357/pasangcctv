// Pemeriksa SEO dasar untuk hasil build (folder out/).
// Jalankan setelah build: npm run build && node scripts/seo-check.mjs
// Memeriksa title, meta description, canonical, H1, JSON-LD, gambar, dan sitemap.
// Keluar dengan kode 1 jika ada kegagalan.

import { readFileSync, existsSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "../out");

const pages = [
  { file: "index.html", url: "https://pasangcctv.my.id/" },
  { file: "paket-cctv/index.html", url: "https://pasangcctv.my.id/paket-cctv/" },
];

let failures = 0;
function check(ok, label, detail = "") {
  console.log(`${ok ? "OK   " : "GAGAL"} ${label}${detail ? ` (${detail})` : ""}`);
  if (!ok) failures++;
}

function first(re, html) {
  const m = html.match(re);
  return m ? m[1] : "";
}

for (const page of pages) {
  const path = join(outDir, page.file);
  console.log(`\n== ${page.url}`);
  if (!existsSync(path)) {
    check(false, "file hasil build ada", page.file);
    continue;
  }
  const html = readFileSync(path, "utf8");

  const title = first(/<title>([^<]*)<\/title>/, html);
  check(title.length > 0 && title.length <= 60, "title 60 karakter atau kurang", `${title.length}: ${title}`);

  const desc = first(/<meta name="description" content="([^"]*)"/, html);
  check(desc.length >= 140 && desc.length <= 155, "meta description 140 sampai 155 karakter", `${desc.length}`);

  const canonical = first(/<link rel="canonical" href="([^"]*)"/, html);
  check(canonical === page.url, "canonical sesuai URL halaman", canonical);

  const h1 = (html.match(/<h1[\s>]/g) || []).length;
  check(h1 === 1, "tepat satu H1", `${h1}`);

  check(/<meta property="og:image" content="https:\/\/pasangcctv\.my\.id\/og\/[a-z]+\.png"/.test(html), "og:image PNG ada");
  check(/<html lang="id"/.test(html), "html lang=id");
  check(/name="viewport"/.test(html), "meta viewport ada");

  const ld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  check(ld.length > 0, "JSON-LD ada", `${ld.length} blok`);
  for (const block of ld) {
    try {
      JSON.parse(block[1]);
      check(true, "JSON-LD valid sebagai JSON");
    } catch {
      check(false, "JSON-LD valid sebagai JSON");
    }
  }

  const imgs = [...html.matchAll(/<img[^>]*>/g)].map((m) => m[0]);
  for (const img of imgs) {
    const ok = /alt="[^"]+"/.test(img) && /width="/.test(img) && /height="/.test(img);
    check(ok, "gambar punya alt, width, height", img.slice(0, 60));
    check(!/cctvgo/i.test(img), "nama file gambar tidak memuat 'cctvgo'", img.slice(0, 60));
  }

  check(/<link rel="icon"/.test(html), "favicon (link rel=icon) ada");
  check(/<link rel="apple-touch-icon"/.test(html), "apple-touch-icon ada");

  check(!/Rp2\.350\.000/.test(html), "tidak ada harga lama Rp2.350.000");
  check(!/garansi resmi/i.test(html), "tidak ada klaim 'garansi resmi'");
}

console.log("\n== sitemap dan robots");
const sitemapPath = join(outDir, "sitemap.xml");
if (existsSync(sitemapPath)) {
  const sm = readFileSync(sitemapPath, "utf8");
  for (const page of pages) {
    check(sm.includes(`<loc>${page.url}</loc>`), "sitemap memuat URL", page.url);
  }
} else {
  check(false, "sitemap.xml ada");
}
const robotsPath = join(outDir, "robots.txt");
check(existsSync(robotsPath) && /Sitemap:/i.test(readFileSync(robotsPath, "utf8")), "robots.txt memuat Sitemap");

console.log(failures === 0 ? "\nSemua pemeriksaan lolos." : `\n${failures} pemeriksaan gagal.`);
process.exit(failures === 0 ? 0 : 1);
