// FAQ — semua jawaban berdasarkan fakta dari references/stats.md
// atau pengetahuan umum CCTV yang akurat.
// Jangan menambah FAQ tanpa mengecek kebenarannya.

export interface FaqItem {
  question: string;
  answer: string;
}

export const HOME_FAQ: FaqItem[] = [
  {
    question: "Berapa harga pasang CCTV untuk rumah?",
    answer:
      "Untuk rumah, paket 4 kamera Loewix 2MP ColorVu seharga Rp3.700.000, sudah termasuk DVR 4 channel, hard disk 500GB, kabel 80 meter, pemasangan, dan setting ke HP. Kalau ruangan lebih banyak, paket 8 kamera tersedia mulai Rp7.100.000.",
  },
  {
    question: "Apakah harga sudah termasuk pemasangan?",
    answer:
      "Ya. Semua harga paket yang tertera sudah termasuk biaya pemasangan, power supply, konektor, dan setting pemantauan dari HP.",
  },
  {
    question: "Berapa lama proses pemasangan?",
    answer:
      "Lama pemasangan tergantung jumlah kamera dan kondisi gedung. Estimasi waktunya kami sampaikan setelah survei lokasi.",
  },
  {
    question: "Kamera apa yang digunakan?",
    answer:
      "Paket utama menggunakan kamera Loewix 2MP ColorVu. Gambarnya tetap berwarna siang dan malam, karena kamera ini memakai lensa dengan bukaan besar dan lampu warm light, bukan inframerah hitam-putih standar. Tersedia juga kamera HiLook dan Hikvision dalam resolusi 2MP dan 5MP sesuai kebutuhan dan anggaran.",
  },
  {
    question: "Area mana saja yang dilayani?",
    answer:
      "Kami melayani seluruh wilayah Jabodetabek: Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Teknisi kami berbasis di Ciledug, Kota Tangerang, dan siap datang untuk survei lokasi.",
  },
  {
    question: "Apakah ada biaya tambahan di luar paket?",
    answer:
      "Harga paket sudah termasuk pemasangan, power supply, konektor, dan setting ke HP. Kabel yang termasuk: 40 meter untuk 2 kamera, 80 meter untuk 4 kamera, 160 meter untuk 8 kamera, dan 320 meter untuk 16 kamera. Kalau denah lokasi butuh kabel lebih panjang, kebutuhannya kami sampaikan setelah survei.",
  },
  {
    question: "Berapa lama garansi kamera CCTV?",
    answer:
      "Kamera Loewix bergaransi 1 tahun. Kamera HiLook dan Hikvision bergaransi 2 tahun.",
  },
  {
    question: "Apakah bisa memilih kamera indoor atau outdoor?",
    answer:
      "Bisa. Dalam satu paket, Anda bebas memilih kombinasi kamera indoor dan outdoor sesuai titik yang ingin dipantau.",
  },
];

export const PACKAGE_FAQ: FaqItem[] = [
  {
    question: "Apa yang termasuk dalam paket Loewix?",
    answer:
      "Setiap paket Loewix mencakup kamera 2MP ColorVu (gambar berwarna siang dan malam), rekam suara 1 arah, DVR, hard disk, kabel sesuai jumlah kamera, power supply, konektor, pemasangan, dan setting pemantauan ke HP.",
  },
  {
    question: "Apa perbedaan Loewix, HiLook, dan Hikvision?",
    answer:
      "Loewix adalah pilihan terjangkau dengan fitur ColorVu dan rekam audio. HiLook adalah lini ekonomis dari Hikvision. Hikvision adalah merek dengan ekosistem paling lengkap dan harga lebih tinggi. Garansi HiLook dan Hikvision sama-sama 2 tahun; Loewix 1 tahun.",
  },
  {
    question: "Bagaimana cara pembayaran untuk paket Loewix?",
    answer:
      "Untuk paket 2 hingga 8 kamera, pembayaran dilakukan setelah pemasangan selesai. Untuk paket 16 kamera, uang muka 50 persen diminta sebelum pengerjaan dimulai dan sisanya dibayar setelah terpasang.",
  },
  {
    question: "Berapa jumlah kamera yang tepat untuk ruko atau kantor?",
    answer:
      "Ruko dua lantai umumnya cukup dengan 4 kamera: satu di depan, satu di kasir, satu di tangga, dan satu di gudang belakang. Kantor tergantung denah — rata-rata 6 hingga 8 kamera untuk ruang kerja, pintu masuk, dan area parkir.",
  },
  {
    question: "Apakah spesifikasi DVR dan hard disk bisa disesuaikan?",
    answer:
      "Paket Loewix sudah disertai DVR dan hard disk sesuai tabel di atas. Jika Anda membutuhkan kapasitas yang berbeda, hubungi kami sebelum survei untuk mendiskusikan penyesuaian.",
  },
];
