# Template page brief

Isi brief ini dan minta persetujuan pemilik sebelum membuat halaman baru (Rule 2 di CLAUDE.md). Satu brief satu halaman.

## 1. Dasar halaman
- Nama halaman:
- URL (huruf kecil, dipisah tanda hubung, garis miring di akhir):
- Jenis halaman: layanan / area / artikel / kontak / tentang
- Keyword utama (belum dipakai halaman lain, cek `keywords.md`):
- Keyword sekunder:
- Intent pencari: informasi / membandingkan / mencari jasa / siap pesan
- Tujuan halaman (satu kalimat):

## 2. Isi
- H1 (hanya satu, memuat keyword utama):
- Title tag (60 karakter atau kurang, format "[Judul] | PasangCCTV"):
- Meta description (140 sampai 155 karakter, ada ajakan bertindak):
- Jumlah kata (wajib 800 sampai 2.000 kata):
- Target keyword density (0,5% sampai 1,5%, maksimal 2%):
- Posisi keyword utama (wajib ada di: title, H1, URL, 100 kata pertama, minimal satu H2, paragraf penutup):
- Outline H2 dan H3 (jawaban langsung di kalimat pertama tiap bagian):
- Bagian "kapan tidak perlu jasa kami" (ya atau tidak, alasan):
- FAQ (ambil dari `faq-bank.md`, status disetujui):

## 3. Data
- Angka dan fakta yang dipakai (semua dari `stats.md`):
- Klaim yang dipakai (cek `claims.md`, tidak ada yang dilarang):
- Data yang masih dibutuhkan dari pemilik (tulis di `owner-data-needed.md`):
- Cerita atau opini yang dipakai (dari `stories.md` atau `opinions.md`, maksimal satu cerita dan satu opini, kalau ada):
- Byline (artikel): "Tim PasangCCTV", schema `author` bertipe Organization. Tanpa nama pribadi dan tanpa author box.
- Nama klien: tidak ditulis. Pakai bentuk umum (hotel, instansi pemerintah, pabrik).

## 4. Link
- Link internal masuk dan keluar beserta anchor (catat di `internal-links.md`, pastikan tidak ada broken link):
- Link eksternal (hanya artikel, sudah dibuka dan dicek):

## 5. Gambar
- Gambar yang dipakai (dari `images.md`, status boleh; tanpa foto orang dan tanpa foto klien):
- Alt tiap gambar:
- Ukuran file (wajib di bawah 200 KB, format WebP atau SVG):

## 6. Schema
- Jenis schema (sesuai jenis halaman, misal: WebPage, AboutPage, BreadcrumbList, FAQPage):
- Data schema sama dengan teks yang tampil: ya / tidak

## 7. Selesai bila
- Jumlah kata 800 sampai 2.000 kata.
- Keyword density 0,5% sampai 2,0%.
- Semua link internal valid (tidak ada link 404).
- `npm run build` dan `node scripts/seo-check.mjs` lolos tanpa kegagalan.
