# Checklist On-Page SEO PasangCCTV

Semua item yang berlaku untuk jenis halaman wajib terpenuhi sebelum halaman dinyatakan selesai. Bagian "Checklist sebelum selesai" di akhir file dijalankan satu per satu.

## Peta keyword (tidak boleh ditukar)
| Halaman | URL | Keyword utama | Variasi di teks isi |
|---|---|---|---|
| Beranda | / | pasang cctv | pemasangan cctv, jasa pasang cctv |
| Paket | /paket-cctv/ | paket cctv | paket cctv lengkap, harga paket cctv |

Satu keyword utama hanya untuk satu halaman. Beranda tidak mengejar "paket cctv". Halaman paket tidak mengejar "pasang cctv".

## Aturan semua halaman

### Metadata
- Satu H1 per halaman, memuat keyword utama halaman itu.
- Title tag maksimal 60 karakter, keyword di bagian awal, format: "[Judul] | PasangCCTV".
- Meta description 140 sampai 155 karakter, memuat keyword utama dan satu ajakan bertindak yang konkret.
- Canonical lewat metadata.alternates.canonical, memakai URL lengkap dengan domain pasangcctv.my.id dan garis miring di akhir.
- Atribut lang="id" pada elemen html. Open Graph dengan og:locale id_ID.
- Open Graph dan Twitter Card lengkap. Gambar OG 1200x630 di /public/og/.
- Viewport mobile di app/layout.tsx.

### Isi dan struktur
- Keyword utama muncul di 100 kata pertama dengan pemakaian wajar. Dilarang memadatkan keyword.
- Heading H2 dan H3 berurutan, tanpa lompat level. Variasi keyword muncul alami di heading, bukan di semuanya.
- Jawaban langsung di kalimat pertama setiap bagian.
- Slug pendek, huruf kecil, dipisah tanda hubung.
- HTML semantik: header, nav, main, article, section, footer.
- Tombol WhatsApp terlihat di layar HP tanpa scroll jauh, dan ada di footer.
- Tautan WhatsApp memakai format https://wa.me/6281919037533 dengan teks pesan terisi otomatis yang menyebut halaman asal.

### Gambar
- Format WebP, atribut width dan height diisi untuk mencegah CLS.
- Alt menjelaskan isi gambar secara spesifik, bukan sekadar keyword.
- Gambar di atas lipatan (hero) dimuat prioritas. Gambar lain lazy loading.
- Hanya gambar yang benar-benar dimiliki pemilik. Tidak mengunduh gambar dari internet atau dari template referensi.

### Link
- 3 sampai 5 link internal per halaman panjang dengan anchor text deskriptif. Dilarang "klik di sini" dan "selengkapnya".
- Link antara beranda dan halaman paket memakai aturan anchor di bawah.
- 2 sampai 3 link eksternal ke sumber otoritatif hanya pada artikel blog. Link harus benar-benar dibuka dan dicek sebelum dipakai, dan memakai rel yang sesuai.

### Aturan anchor text antara dua halaman utama
- Dari beranda ke /paket-cctv/: anchor memakai variasi "paket cctv", misalnya "paket cctv 4 kamera", "daftar paket cctv lengkap", "harga paket cctv". Jangan pakai "pasang cctv" sebagai anchor ke halaman paket.
- Dari /paket-cctv/ ke beranda: anchor memakai variasi "pasang cctv", misalnya "layanan pasang cctv", "jasa pasang cctv". Jangan pakai "paket cctv" sebagai anchor ke beranda.
- Setiap anchor dipakai satu kali per halaman. Jangan mengulang anchor yang sama.

### Schema JSON-LD
- Ditulis sebagai tag script type="application/ld+json" yang ada di HTML hasil build (cek di view-source).
- Setiap halaman memiliki BreadcrumbList.
- Isi schema harus sama dengan teks yang tampil di halaman. Tidak ada data di schema yang tidak tampil di halaman.

### SEO lokal
- Nama, alamat, dan nomor identik dengan references/stats.md, di footer, halaman kontak, dan schema.
- Schema LocalBusiness: satu entri untuk kantor Ciledug, memakai alamat persis dari stats.md. Jam buka, koordinat, dan rating hanya dimasukkan jika sudah ada di stats.md. Selama belum ada, jangan dimasukkan.
- Tombol ke Google Maps berupa tautan biasa, bukan iframe, supaya halaman tidak lambat.

## Beranda (/)
- Keyword utama: pasang cctv. H1 memuat "pasang cctv".
- Schema: Organization, LocalBusiness, WebSite, FAQPage, BreadcrumbList.
- FAQ minimal 5 pertanyaan yang benar-benar sering ditanyakan calon pelanggan, dijawab pendek dan langsung. Hanya fakta dari references/stats.md atau pengetahuan umum yang akurat.
- Cuplikan paket dengan link ke /paket-cctv/ sesuai aturan anchor.
- Bagian "kapan Anda tidak perlu jasa kami" minimal satu paragraf.

## Halaman paket (/paket-cctv/)
- Keyword utama: paket cctv. H1 memuat "paket cctv".
- Tabel 15 paket (2 sampai 16 kamera) dari references/stats.md, lengkap dengan harga, DVR, hard disk, dan panjang kabel. Tabel harus bisa digulir ke samping di HP tanpa merusak halaman.
- Teks pengantar, penjelasan cara memilih jumlah kamera, dan FAQ ditulis baru. Dilarang menyalin teks dari cctvgo.id.
- Schema: Product atau Offer untuk setiap paket dengan priceCurrency IDR dan harga dari stats.md saja, plus BreadcrumbList dan FAQPage. Tidak ada AggregateRating atau Review.
- Link kembali ke beranda sesuai aturan anchor.

## Halaman layanan atau area (jika dibuat nanti)
- Satu halaman satu fokus: satu layanan atau satu area.
- Isi tidak boleh sekadar menukar nama kota di halaman lain. Setiap halaman harus berisi hal yang berbeda dan nyata (kondisi bangunan di area itu, pertanyaan yang sering muncul di area itu, hanya jika benar).
- Schema: Service, BreadcrumbList, FAQPage.

## Artikel blog (jika dibuat nanti)
- Panjang dalam rentang 20 persen dari rata-rata tiga hasil teratas Google untuk keyword.
- Daftar isi dengan anchor link.
- Byline penulis dan schema Person, hanya jika nama penulis diberikan pemilik.
- FAQ dengan schema FAQPage. Breadcrumbs dengan BreadcrumbList. Schema Article dengan tanggal terbit dan tanggal ubah.
- 3 sampai 5 link internal dan 2 sampai 3 link eksternal ke sumber otoritatif yang sudah dicek.

## Teknis SEO situs
- app/sitemap.ts mencakup semua rute, app/robots.ts mengizinkan semua crawler dan menunjuk ke sitemap.
- Semua rute statis: output export, tidak ada API route, tidak ada cookies atau headers, route dinamis memakai generateStaticParams.
- Halaman 404 memiliki link kembali ke beranda dan ke /paket-cctv/.

## Larangan
- Tidak ada ulasan, rating, jumlah klien, jumlah proyek, atau testimoni yang tidak tercantum di references/stats.md.
- Tidak ada schema Review atau AggregateRating tanpa ulasan nyata yang tampil di halaman.
- Tidak ada klaim "terbaik", "termurah", "terpercaya", atau "bergaransi" tanpa data pendukung di stats.md.
- Tidak ada teks tersembunyi, keyword stuffing, halaman kembar, atau halaman pintu masuk (doorway) yang hanya menukar nama kota.
- Tidak menyalin teks atau struktur kalimat dari cctvgo.id.

## Checklist sebelum selesai
1. npm run build sukses tanpa error, semua rute berstatus Static.
2. View-source tiap halaman memuat teks isi dan JSON-LD yang benar.
3. Title, meta description, canonical, Open Graph terisi di tiap halaman dan panjangnya sesuai.
4. Satu H1 per halaman, urutan heading benar.
5. Peta keyword dipatuhi, tidak ada keyword utama yang tumpang tindih.
6. Anchor antara beranda dan /paket-cctv/ sesuai aturan.
7. Semua gambar memiliki alt, width, dan height.
8. NAP identik di footer, kontak, dan schema.
9. Tidak ada angka, harga, atau klaim di luar stats.md.
10. Voice check lolos: baca ulang "Tells that it's AI-written" di references/voice.md dan hapus semua yang cocok.