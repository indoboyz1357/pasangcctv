# Checklist On-Page SEO PasangCCTV

Berlaku untuk semua halaman: beranda, paket, dan halaman baru apa pun. Semua item yang berlaku untuk jenis halaman wajib terpenuhi sebelum halaman dinyatakan selesai. Bagian "Checklist sebelum selesai" di akhir file dijalankan satu per satu.

File pendukung di `references/`: `keywords.md` (peta keyword), `claims.md` (klaim boleh dan dilarang), `faq-bank.md`, `images.md`, `internal-links.md`, `page-brief-template.md`, `owner-data-needed.md`.

## Peta keyword (tidak boleh ditukar)
Peta lengkap beserta keyword sekunder, intent, dan calon halaman ada di `references/keywords.md`.

| Halaman | URL | Keyword utama |
|---|---|---|
| Beranda | / | pasang cctv |
| Paket | /paket-cctv/ | paket cctv |

Satu keyword utama hanya untuk satu halaman. Beranda tidak mengejar "paket cctv". Halaman paket tidak mengejar "pasang cctv".

## Aturan semua halaman

### Metadata
- Title, description, canonical, Open Graph, dan Twitter Card dibuat lewat `buildMetadata()` di `content/seo.ts`. Jangan menulis metadata manual di `page.tsx`.
- Satu H1 per halaman, memuat keyword utama halaman itu.
- Title tag maksimal 60 karakter, keyword di bagian awal, format: "[Judul] | PasangCCTV".
- Meta description 140 sampai 155 karakter, memuat keyword utama dan satu ajakan bertindak yang konkret.
- Canonical memakai URL lengkap dengan domain pasangcctv.my.id dan garis miring di akhir.
- Atribut lang="id" pada elemen html. Open Graph dengan og:locale id_ID.
- Gambar OG 1200x630 PNG di /public/og/, dibuat dengan `node scripts/generate-og.mjs`. Harga tidak ditulis di gambar OG.
- Viewport dan theme color lewat `export const viewport` di app/layout.tsx.
- Favicon (gambar kamera CCTV) dan apple-touch-icon wajib ada: `app/icon.svg`, `app/favicon.ico`, `app/apple-icon.png`. Logo nama ada di `public/logo.png` dan dipakai di schema. Semua dibuat dengan `node scripts/generate-icons.mjs`.
- Halaman 404: noindex, tanpa canonical, title memakai akhiran brand.

### Isi dan struktur
- Keyword utama muncul di 100 kata pertama dengan pemakaian wajar. Dilarang memadatkan keyword.
- Heading H2 dan H3 berurutan, tanpa lompat level. Variasi keyword muncul alami di heading, bukan di semuanya.
- Jawaban langsung di kalimat pertama setiap bagian.
- Slug pendek, huruf kecil, dipisah tanda hubung.
- HTML semantik: header, nav, main, article, section, footer.
- Konten tidak boleh tersembunyi di HTML hasil build. Animasi muncul-saat-scroll hanya dipasang di browser (lihat `ScrollReveal`), konten harus tetap terlihat tanpa JavaScript.
- Jawaban FAQ tetap ada di HTML meski accordion tertutup.
- Angka harga tidak ditulis manual. Ambil dari `content/packages.ts`.

### WhatsApp
- Tombol WhatsApp terlihat di layar HP tanpa scroll jauh, dan ada di footer.
- Semua tombol memakai komponen `WhatsAppButton`. Pesan terisi otomatis dan menyebut halaman asal (nama halaman ada di `PAGE_LABELS` di `content/site.ts`; tambahkan di sana untuk halaman baru).

### Gambar
- Aturan lengkap di `references/images.md`.
- Format WebP, atribut width dan height diisi untuk mencegah CLS.
- Alt menjelaskan isi gambar secara spesifik, bukan sekadar keyword.
- Gambar di atas lipatan (hero) dimuat prioritas dan memakai `sizes`. Gambar lain lazy loading.
- Hanya gambar yang benar-benar dimiliki pemilik dan statusnya "boleh" di `images.md`.
- Nama file gambar berbahasa Indonesia yang menjelaskan isi (contoh: `kotak-kamera-hilook-turbo-hd.webp`), disimpan di `public/images/`. Nama file tidak boleh memuat "cctvgo".

### Link
- Link internal kontekstual di badan teks (navbar dan footer tidak dihitung). Selama situs masih dua halaman, tiap halaman minimal 2 link kontekstual ke halaman lain. Setelah ada halaman area, kontak, atau artikel: 3 sampai 5 link per halaman panjang. Anchor text deskriptif. Dilarang "klik di sini" dan "selengkapnya".
- Catat semua anchor di `references/internal-links.md`.
- 2 sampai 3 link eksternal ke sumber otoritatif hanya pada artikel blog. Link harus benar-benar dibuka dan dicek sebelum dipakai, dan memakai rel yang sesuai.

### Aturan anchor text antara dua halaman utama
- Dari beranda ke /paket-cctv/: anchor memakai variasi "paket cctv", misalnya "paket cctv 4 kamera", "daftar paket cctv lengkap", "harga paket cctv". Jangan pakai "pasang cctv" sebagai anchor ke halaman paket.
- Dari /paket-cctv/ ke beranda: anchor memakai variasi "pasang cctv", misalnya "layanan pasang cctv", "jasa pasang cctv". Jangan pakai "paket cctv" sebagai anchor ke beranda.
- Setiap anchor dipakai satu kali per halaman. Jangan mengulang anchor yang sama.

### Schema JSON-LD
- Ditulis lewat komponen `JsonLd` (meng-escape karakter "<") sebagai tag script type="application/ld+json" di HTML hasil build (cek di view-source).
- BreadcrumbList wajib di halaman level kedua ke bawah. Beranda tidak memakainya.
- Isi schema harus sama dengan teks yang tampil di halaman. Tidak ada data di schema yang tidak tampil di halaman.
- Gunakan `@id` untuk menghubungkan entitas (`/#localbusiness`, `/#website`). Jangan membuat dua entitas dengan nama berbeda untuk usaha yang sama.
- Harga di schema berupa angka, mata uang IDR.
- FAQPage: Google hanya menampilkan rich result FAQ untuk situs tertentu (pemerintah dan kesehatan), jadi schema ini tidak dihitung sebagai faktor ranking. Tetap dipasang, tetapi jawaban harus tampil di halaman.

### SEO lokal
- Nama, alamat, dan nomor identik dengan references/stats.md, di footer, halaman kontak, dan schema. Nama usaha di schema: "PasangCCTV" saja.
- Schema LocalBusiness: satu entri untuk kantor Ciledug, alamat persis dari stats.md, `image`, `logo`, `priceRange` (dari harga terendah dan tertinggi di `packages.ts`), `openingHoursSpecification`, koordinat, `areaServed`, `hasMap`. Tambahkan `sameAs` setelah ada profil Google Bisnis atau media sosial. Rating tidak dimasukkan.
- Tombol ke Google Maps berupa tautan biasa, bukan iframe, supaya halaman tidak lambat.

## Beranda (/)
- Keyword utama: pasang cctv. H1 memuat "pasang cctv".
- Schema: LocalBusiness (termasuk contactPoint), WebSite, FAQPage.
- FAQ minimal 5 pertanyaan yang benar-benar sering ditanyakan calon pelanggan, dijawab pendek dan langsung. Hanya fakta dari references/stats.md atau pengetahuan umum yang akurat (lihat `faq-bank.md`).
- Cuplikan paket (tiga kartu, tampilan sama dengan halaman paket) dengan link ke /paket-cctv/ sesuai aturan anchor. Jangan menggandakan seluruh tabel halaman paket.
- Bagian "kapan Anda tidak perlu jasa kami" minimal satu paragraf.

## Halaman paket (/paket-cctv/)
- Keyword utama: paket cctv. H1 memuat "paket cctv".
- Semua seri memakai komponen `PackageSeriesCard` agar tampilan sama. Tabel Loewix (15 paket, 2 sampai 16 kamera) menampilkan harga, DVR, hard disk, dan kabel dari stats.md. Tabel harus bisa digulir ke samping di HP tanpa merusak halaman.
- Teks pengantar, penjelasan cara memilih jumlah kamera, dan FAQ ditulis baru. Dilarang menyalin teks dari cctvgo.id.
- Schema: satu `Product` dengan satu `Offer` untuk setiap paket yang tampil di tabel (`url` ke anchor baris tabel, `priceCurrency` IDR, harga dari packages.ts), plus BreadcrumbList dan FAQPage. Tidak ada `availability`, AggregateRating, atau Review.
- Link kembali ke beranda sesuai aturan anchor.

## Halaman layanan atau area (jika dibuat nanti)
- Buat page brief dari `references/page-brief-template.md` dan minta persetujuan pemilik sebelum menulis kode.
- Satu halaman satu fokus: satu layanan atau satu area.
- Isi tidak boleh sekadar menukar nama kota di halaman lain. Setiap halaman harus berisi hal yang berbeda dan nyata (kondisi bangunan di area itu, pertanyaan yang sering muncul di area itu, hanya jika benar dan datang dari pemilik).
- Schema: Service, BreadcrumbList, FAQPage.

## Halaman kontak dan tentang (jika dibuat nanti)
- Berisi NAP persis dari stats.md, foto kantor atau toko (milik pemilik), tautan Google Maps, jam buka, dan nama usaha yang sudah dikonfirmasi.
- Bagian tentang hanya memuat fakta yang ada di stats.md atau dijawab pemilik di `owner-data-needed.md`.

## Artikel blog (jika dibuat nanti)
- Buat page brief lebih dulu.
- Panjang dalam rentang 20 persen dari rata-rata tiga hasil teratas Google untuk keyword. Cek manual dan catat hasil pengecekan beserta tanggalnya di page brief.
- Daftar isi dengan anchor link.
- Byline penulis "Tim PasangCCTV" (bukan nama pribadi) dan schema `author` bertipe Organization yang menunjuk ke `/#localbusiness`. Tanpa schema Person.
- FAQ dengan schema FAQPage. Breadcrumbs dengan BreadcrumbList. Schema Article dengan tanggal terbit dan tanggal ubah.
- 3 sampai 5 link internal dan 2 sampai 3 link eksternal ke sumber otoritatif yang sudah dicek.

## Teknis SEO situs
- app/sitemap.ts mencakup semua rute dengan tanggal ubah dari `content/seo.ts` (tetap, hanya berubah saat isi halaman berubah). app/robots.ts mengizinkan semua crawler dan menunjuk ke sitemap.
- Semua rute statis: `output: 'export'` di next.config.ts, tidak ada API route, tidak ada cookies atau headers, route dinamis memakai generateStaticParams.
- Halaman 404 memiliki link kembali ke beranda dan ke /paket-cctv/.
- Target kinerja di URL produksi: LCP di bawah 2,5 detik, CLS di bawah 0,1, INP di bawah 200 ms, Lighthouse SEO, Accessibility, dan Best Practices di atas 90.
- Setelah rilis: verifikasi kepemilikan di Google Search Console, kirim sitemap, cek status indeks kedua halaman, validasi schema dengan Rich Results Test atau validator.schema.org.

## Larangan
- Tidak ada ulasan, rating, jumlah klien, jumlah proyek, atau testimoni yang tidak tercantum di references/stats.md.
- Tidak ada schema Review atau AggregateRating tanpa ulasan nyata yang tampil di halaman.
- Tidak ada klaim "terbaik", "termurah", "terpercaya", "garansi resmi", atau "bergaransi" tanpa data pendukung di stats.md. Daftar lengkap di `references/claims.md`.
- Tidak ada teks tersembunyi, keyword stuffing, halaman kembar, atau halaman pintu masuk (doorway) yang hanya menukar nama kota.
- Tidak menyalin teks atau struktur kalimat dari cctvgo.id. Paket dan harga di dua situs milik pemilik berbeda (lihat riwayat harga di stats.md); teks, gambar, dan penawaran juga harus berbeda.

## Checklist sebelum selesai
1. `npm run build` sukses tanpa error, semua rute berstatus Static.
2. `node scripts/seo-check.mjs` lolos (title, meta description, canonical, H1, JSON-LD, gambar, sitemap, robots).
3. View-source tiap halaman memuat teks isi dan JSON-LD yang benar.
4. Peta keyword dipatuhi, tidak ada keyword utama yang tumpang tindih.
5. Anchor antara beranda dan /paket-cctv/ sesuai aturan, dan `internal-links.md` diperbarui.
6. Semua gambar memiliki alt, width, dan height, dan statusnya "boleh" di `images.md`.
7. NAP identik di footer, kontak, dan schema.
8. Tidak ada angka, harga, atau klaim di luar stats.md dan tidak ada klaim yang dilarang di `claims.md`.
9. Voice check lolos: baca ulang "Tells that it's AI-written" di references/voice.md dan hapus semua yang cocok.
10. Tombol WhatsApp berfungsi dan pesan menyebut halaman asal.
