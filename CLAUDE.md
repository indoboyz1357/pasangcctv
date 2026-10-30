# Gambaran proyek

Situs Next.js yang dioptimalkan untuk SEO: PasangCCTV (pasangcctv.my.id), jasa pasang CCTV di Jabodetabek. Halaman dirender menjadi HTML statis saat build.

Halaman saat ini: beranda (`/`) dan paket CCTV (`/paket-cctv/`).

Bahasa: semua teks yang dibaca pengunjung dan semua dokumen di `references/` ditulis dalam Bahasa Indonesia. Nama variabel dan kode memakai bahasa Inggris. Komentar kode memakai Bahasa Indonesia.

---

# Suara dan isi: baca sebelum menulis konten

Sebelum menulis **artikel, halaman layanan, FAQ, atau teks apa pun yang dibaca pelanggan**, baca file di `./references/`:

| File | Isi |
|------|-----|
| `references/voice.md` | Gaya tulis, ritme kalimat, kosakata, format, dan ciri tulisan AI yang harus dihapus |
| `references/humour.md` | Cara brand memakai humor |
| `references/stats.md` | Satu-satunya sumber angka dan fakta: harga, paket, alamat, garansi |
| `references/claims.md` | Klaim yang boleh, dilarang, dan menunggu konfirmasi pemilik |
| `references/stories.md` | Cerita nyata yang disetujui pemilik (saat ini kosong) |
| `references/opinions.md` | Opini tegas yang disetujui pemilik (saat ini kosong) |
| `references/keywords.md` | Peta keyword, keyword sekunder, intent, calon halaman |
| `references/faq-bank.md` | Pertanyaan FAQ yang disetujui beserta sumber jawabannya |
| `references/images.md` | Inventaris gambar, status izin pakai, aturan gambar |
| `references/internal-links.md` | Daftar anchor link internal per halaman |
| `references/page-brief-template.md` | Template brief untuk halaman baru |
| `references/owner-data-needed.md` | Pertanyaan yang hanya bisa dijawab pemilik |

**Aturan konten:**

- Jangan memakai frasa khas tulisan AI (misalnya "solusi terbaik", "terpercaya", "berkualitas tinggi", "di era digital saat ini"), tanda seru, atau emoji
- Mulai dengan jawaban, konteks menyusul
- Pakai angka asli dari `stats.md`, jangan dibulatkan. Jika angkanya tidak ada di `stats.md`, jangan menulis angka
- Harga tidak ditulis manual di halaman. Ambil dari `content/packages.ts`
- Maksimal satu cerita per tulisan (dari `stories.md`, jangan mengarang). Jika file kosong, lewati
- Maksimal satu opini tegas per tulisan (dari `opinions.md`). Jika file kosong, lewati
- Beri tahu pembaca kapan mereka tidak perlu memakai jasa kami. Ini ciri suara yang paling penting
- Fakta yang hanya berlaku untuk paket Loewix tidak boleh ditulis seolah berlaku untuk HiLook dan Hikvision
- Jika ada data yang kurang, tanyakan ke pemilik. Jangan menebak. Catat pertanyaannya di `references/owner-data-needed.md`

Sebelum mengirim tulisan, baca ulang `references/voice.md` bagian "Tells that it's AI-written" dan hapus semua yang cocok.

---

# SEO on-page

Saat membuat atau mengubah **halaman mana pun** (beranda, paket, layanan, area, kontak, artikel), baca `on-page-seo.md` di root. Semua butir yang berlaku untuk jenis halaman itu harus terpenuhi.

Wajib untuk setiap halaman:
- Metadata dibuat lewat `buildMetadata()` di `content/seo.ts` (title, description, canonical, Open Graph, Twitter Card)
- Satu H1 yang memuat keyword utama, sesuai `references/keywords.md`
- Schema JSON-LD lewat komponen `JsonLd`, isinya sama dengan teks yang tampil
- Link internal dengan anchor yang dicatat di `references/internal-links.md`
- Gambar hanya dari `references/images.md` yang berstatus "boleh", dengan `alt`, `width`, dan `height`. Nama file berbahasa Indonesia yang menjelaskan isi, disimpan di `public/images/`, tidak memuat "cctvgo"

Tambahan untuk artikel panjang:
- FAQ dengan FAQPage schema (JSON-LD)
- Breadcrumb dan BreadcrumbList schema
- Byline penulis "Tim PasangCCTV" dan schema `author` bertipe Organization (bukan Person), tanpa nama pribadi
- Daftar isi dengan anchor link
- 3 sampai 5 link internal, 2 sampai 3 link eksternal ke sumber otoritatif yang sudah dicek
- Panjang dalam rentang 20 persen dari tiga hasil teratas untuk keyword (cek manual dan catat tanggalnya di page brief)

**Halaman baru:** isi page brief dari `references/page-brief-template.md` dan minta persetujuan pemilik sebelum menulis kode.

---

# SEO teknis

Berlaku untuk seluruh situs:
- `app/sitemap.ts`: sitemap otomatis untuk semua rute, tanggal ubah dari `content/seo.ts`
- `app/robots.ts`: mengizinkan semua crawler dan menunjuk ke sitemap
- URL canonical di setiap halaman lewat `buildMetadata()`
- Gambar Open Graph 1200x630 PNG di `/public/og/`, dibuat dengan `node scripts/generate-og.mjs`
- Atribut `width` dan `height` pada gambar untuk mencegah CLS
- HTML semantik (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- Pre-render statis: `output: 'export'` di `next.config.ts`
- Viewport lewat `export const viewport` di `app/layout.tsx`
- Konten tidak boleh tersembunyi di HTML hasil build. Animasi `ScrollReveal` hanya dipasang di browser
- Favicon (gambar kamera CCTV) dan `apple-touch-icon` sudah ada, dibuat dengan `node scripts/generate-icons.mjs`. Logo nama (`public/logo.png`) dipakai di schema

Target kinerja di URL produksi: LCP di bawah 2,5 detik, CLS di bawah 0,1, INP di bawah 200 ms, Lighthouse SEO, Accessibility, dan Best Practices di atas 90.

Setelah rilis: verifikasi Google Search Console, kirim sitemap, cek status indeks, validasi schema dengan Rich Results Test atau validator.schema.org.

---

# Desain

Premium, modern, elegan. Animasi halus, jarak yang rapi, hierarki visual yang jelas. Tanpa ikon emoji. Tanpa gradasi generik. Satu warna aksen (kuning `#F5C518`), jangan ditambah.

Semua seri kamera (Loewix, HiLook, Hikvision) memakai komponen `PackageSeriesCard` agar tampilannya sama. Jangan membuat tampilan khusus untuk satu seri.

---

# Aturan pengembangan

**Aturan 1: Baca dulu.** Sebelum tindakan apa pun, baca `CLAUDE.md`.

**Aturan 2: Definisikan sebelum membangun.** Tidak ada kode sebelum spesifikasi disetujui. Untuk halaman baru, spesifikasinya adalah page brief.

**Aturan 3: Lihat sebelum membuat.** Periksa file yang sudah ada sebelum membuat file baru.

**Aturan 4: Uji sebelum menjawab.** Jalankan `npm run build` dan `node scripts/seo-check.mjs` sebelum mengatakan "selesai".

**Aturan inti:** kerjakan persis yang diminta. Tidak kurang, tidak lebih. Jika permintaannya hanya saran, jangan ubah file apa pun.

**Aturan data:** jangan menebak fakta, angka, atau klaim. Kalau tidak ada di `stats.md`, tanyakan ke pemilik.

---

# Tumpukan teknologi

- **Bahasa:** TypeScript
- **Framework:** Next.js 15 (App Router)
- **Rendering:** Static Site Generation lewat `output: 'export'`. Folder `out/` adalah hasil yang di-deploy
- **Gaya:** Tailwind CSS
- **Konten:** File TypeScript datar di `/content/*.ts`. Tanpa database
- **Deploy:** Vercel (hosting statis dari `out/`)

**Batasan SSG, jangan dilanggar:**
- Tidak memakai `cookies()`, `headers()`, atau `searchParams` di server component
- Tidak memakai `fetch(..., { cache: 'no-store' })` atau `export const dynamic = 'force-dynamic'`
- Tidak ada API route saat runtime
- Route dinamis (`[slug]`) wajib memakai `generateStaticParams`
- Semua data diambil saat **build**, bukan saat permintaan

---

# Struktur data konten

| File | Isi |
|------|-----|
| `content/site.ts` | Nama brand, kontak, lokasi, garansi, nama halaman untuk pesan WhatsApp |
| `content/packages.ts` | Semua paket dan harga (turunan dari `stats.md`). Harga diformat otomatis |
| `content/seo.ts` | Title, description, canonical, Open Graph, dan tanggal ubah per halaman |
| `content/faq.ts` | FAQ beranda dan halaman paket (turunan dari `faq-bank.md`) |

Urutan saat harga atau fakta berubah: ubah `references/stats.md`, lalu `content/*.ts`, lalu build ulang dan jalankan pemeriksa SEO. Jangan menulis harga langsung di `page.tsx` atau `layout.tsx`.

---

# Menjalankan proyek

1. `npm install`
2. `npm run dev` membuka `http://localhost:3000`
3. Untuk rilis: `npm run build`, lalu folder `out/` adalah situs yang di-deploy
4. `node scripts/seo-check.mjs` memeriksa hasil build (title, meta description, canonical, H1, JSON-LD, gambar, sitemap, robots)
5. `node scripts/generate-og.mjs` membuat ulang gambar OG di `public/og/`
6. `node scripts/generate-icons.mjs` membuat ulang logo (`public/logo.*`) dan favicon (`app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`)

Catatan: jika `npm run build` gagal dengan error `ENOTEMPTY` di `.next`, atau macet lama di tahap "Linting and checking validity of types", hentikan semua proses `node` (termasuk `npm run dev`), hapus folder `.next`, lalu build ulang.

---

# Aturan organisasi

- Satu komponen satu file
- Komponen bersama ada di `/components/`
- Konten khusus halaman ada di `/content/*.ts`
- Skrip bantu ada di `/scripts/`
- Jangan membuat folder tingkat atas baru tanpa bertanya

---

# Pengujian

Sebelum menandai tugas selesai:
- `npm run build` selesai tanpa error
- Setiap rute berstatus `○ (Static)` di log build
- `node scripts/seo-check.mjs` lolos
- **Cek view-source:** HTML berisi konten yang dirender dan JSON-LD
- **Cek suara** (untuk perubahan konten): baca ulang `references/voice.md` bagian "Tells that it's AI-written" dan hapus semua yang cocok
- **Cek klaim:** tidak ada klaim terlarang di `references/claims.md`, dan tidak ada angka di luar `stats.md`

Jangan pernah bilang "selesai" jika build gagal, ada error di konsol, suaranya terdengar seperti AI, atau fiturnya belum diuji di browser.

---

# Lingkup

Bangun hanya yang diminta. Jika ada yang tidak jelas, tanyakan sebelum mulai.
