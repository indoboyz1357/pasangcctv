# Inventaris gambar

Dipindahkan dari `gambar.txt` pada 2026-10-31. Semua gambar ada di Cloudinary (akun `w8egcbkm`).
Gambar sudah dilihat satu per satu. Kolom "Status" diisi pemilik. Jangan memakai gambar di halaman
sebelum statusnya "boleh" dan asal gambarnya jelas.

## Aturan pakai

- Keputusan pemilik 2026-10-31: tidak menambah gambar selain hero. Daftar di bawah menjadi arsip dan belum dipakai di halaman.
- Hanya gambar milik pemilik: foto sendiri atau gambar yang dibuat sendiri. Bukan gambar dari internet,
  bukan materi promosi pabrikan, bukan gambar dari situs lain.
- Gambar buatan AI tidak boleh dipakai seolah-olah foto pekerjaan nyata. Pakai hanya jika diberi keterangan
  "ilustrasi", atau jangan dipakai.
- Rekaman CCTV yang memperlihatkan wajah atau pelat nomor hanya boleh dipakai dengan izin pemilik tempat
  atau setelah diburamkan.
- Merek yang tidak ada di `stats.md` (Loewix, HiLook, Hikvision saja) tidak boleh tampil di halaman.
- Setiap gambar di halaman wajib punya `alt` deskriptif, `width`, `height`, dan nama file berbahasa
  Indonesia bila disimpan lokal. Gambar di atas lipatan memakai `priority`; sisanya lazy-load.
- Format akhir WebP, lebar maksimal 1200 px untuk gambar konten.

## Sedang dipakai di halaman

| Halaman | Gambar | Alt |
|---|---|---|
| Beranda (hero) | `public/images/kotak-kamera-hilook-turbo-hd.webp` (800x600, salinan lokal dari Cloudinary) | Tumpukan kotak kamera CCTV HiLook Turbo HD indoor dan outdoor |

Nama file lokal sengaja tidak memuat "cctvgo". Foto asli di Cloudinary bernama `cctvgo_2.webp`. Aturan: gambar dengan nama berawalan "cctvgo" (termasuk `cctvgo_4` dan `cctvgo_5` di bawah) harus diunduh dan diganti namanya sebelum dipakai di halaman. `scripts/seo-check.mjs` menolak nama gambar yang memuat "cctvgo".

## A. Foto nyata produk dan pemasangan (kandidat paling layak)

| URL | Isi gambar | Alt yang disarankan | Status |
|---|---|---|---|
| `.../v1792847121/cctv123_2.webp` | Isi paket Hikvision Turbo HD: kamera bullet dan dome, hard disk, power supply, konektor, DVR, kabel | Isi paket CCTV Hikvision Turbo HD: kamera, DVR, hard disk, power supply, dan kabel | menunggu |
| `.../v1792847117/IMG_20191009_152511.webp` | Isi paket Hikvision Turbo HD, foto di meja toko | Perangkat paket CCTV Hikvision: kamera, DVR, hard disk, dan power supply | menunggu |
| `.../v1792847117/gb123123.webp` | Tumpukan kotak kamera Hikvision | Tumpukan kotak kamera CCTV Hikvision | menunggu |
| `.../v1792847116/cctvgo_4.webp` | Dua kamera dome HiLook di atas kotaknya, satu dengan lampu | Dua kamera dome CCTV HiLook | menunggu |
| `.../v1792847119/WhatsApp_Image_2026-09-26_at_00.22.20.webp` | Kamera putih terpasang pada tiang dekat kabel listrik | Kamera CCTV outdoor terpasang pada tiang | menunggu (apakah ini hasil pemasangan Anda, dan kamera apa?) |

## B. Tangkapan layar rekaman CCTV (ada orang atau kendaraan)

| URL | Isi gambar | Risiko | Status |
|---|---|---|---|
| `.../v1792847122/cctv123_4.webp` | Monitor 4 kanal, dua kanal tulisan "NO VIDEO", orang di ruangan | Kanal kosong terlihat seperti kerusakan; ada orang | menunggu |
| `.../v1792847120/hikvision_1.webp` | Monitor menampilkan 9 kanal Hikvision di sebuah rumah | Interior rumah milik pihak lain | menunggu |
| `.../v1792847118/WhatsApp_Image_2018-10-12_at_03.42.39.webp` | Rekaman teras rumah, tanggal 2018, orang berkendara motor | Ada orang; tanggal lama | menunggu |
| `.../v1792847118/hikvision5mp.webp` | Rekaman area parkir motor, ada orang dan kendaraan | Pelat nomor atau wajah mungkin terlihat | menunggu |
| `.../v1792847117/hilook_5mp.webp` | Rekaman lobi kantor, beberapa orang terlihat | Wajah terlihat | menunggu |

## C. Ilustrasi yang tampak buatan AI (nama file "Whisk" atau gaya gambar)

Tidak boleh dipakai sebagai foto pekerjaan nyata.

| URL | Isi gambar |
|---|---|
| `.../v1792847122/cctv123.webp` | Komposisi HP, monitor, kamera, DVR, hard disk, router, kabel LAN |
| `.../v1792847121/cctv123_1.webp` | Pekerja di tangga di dinding gedung, deretan motor |
| `.../v1792847121/Whisk_bcd1a3ffcb4625e9994481dfc61bb786dr.webp` | Pekerja di lift boom di area pasar |
| `.../v1792847121/Whisk_68545d5794c13f7aa05473fdd7ca9410dr.webp` | Kolase teknisi, kamera dome, rak DVR, HP menampilkan 4 kanal |
| `.../v1792847121/Whisk_19473af7a900e72a3664e927f9573184dr.webp` | Teknisi di tangga memasang sesuatu di plafon |
| `.../v1792847120/Whisk_9592fce422452c3b7c749e4f7961e8cadr.webp` | Rak jaringan berlabel "ANALOG" dan "IP" |
| `.../v1792847120/Whisk_3193f5adb328c21b78d47acb4cb1ba2edr.webp` | Pria di toko kelontong memasang sesuatu di rak |
| `.../v1792847117/rekomendasi-cctv-night-vision.webp` | Dua pria di toko menunjukkan layar kamera di HP |
| `.../v1792847117/rekomendasi-cctv-murah.webp` | Teknisi merapikan kabel di rak jaringan |
| `.../v1792847116/featured-cara-memasang-cctv-sendiri-1024x538.webp` | Kamera putih di lorong (gambar sampul artikel) |

## D. Merek di luar daftar `stats.md` atau materi promosi pabrikan

| URL | Isi gambar | Masalah |
|---|---|---|
| `.../v1792847118/hiview_1.webp` | Kamera bullet HiView di kotak kuning | Merek HiView tidak ada di stats |
| `.../v1792847119/hiview_2.webp` | Render promosi kamera bullet dan dome HiView | HiView; tampak materi promosi pabrikan |
| `.../v1792847120/hiview_3.webp` | Render promosi DVR dan kamera HiView | HiView; materi promosi |
| `.../v1792847120/hiview_4.webp` | Kamera WiFi pan/tilt HiView dengan kotak dan adaptor | HiView; jenis WiFi |
| `.../v1792847116/hiview_6.webp` | DVR HiView Turbo HD dengan mouse dan power supply | HiView |
| `.../v1792847119/hiview_5.webp` | Deretan kamera Hikvision dengan logo HIK di latar | Materi pemasaran milik pabrikan |
| `.../v1792847116/cctvgo_5.webp` | Tumpukan kotak kamera Dahua | Merek Dahua tidak ada di stats |

Awalan lengkap semua URL: `https://res.cloudinary.com/w8egcbkm/image/upload/`
