// FAQ — semua jawaban berdasarkan fakta dari references/stats.md
// atau pengetahuan umum CCTV yang akurat.
// Harga diambil dari content/packages.ts, jangan ditulis manual.
// Jangan menambah FAQ tanpa mengecek kebenarannya (lihat references/faq-bank.md dan claims.md).

import { CONTACT } from "@/content/site";
import { getPackage, EXTRA_CABLE } from "@/content/packages";

export interface FaqItem {
  question: string;
  answer: string;
}

const loewix4 = getPackage("loewix-2mp", 4).priceFormatted;
const loewix8 = getPackage("loewix-2mp", 8).priceFormatted;
const [coaxial] = EXTRA_CABLE;

export const HOME_FAQ: FaqItem[] = [
  {
    question: "Berapa harga pasang CCTV untuk rumah?",
    answer: `Paket 4 kamera Loewix 2MP ColorVu seharga ${loewix4}, sudah termasuk DVR 4 channel, hard disk 500GB, kabel 80 meter, pemasangan, dan setting ke HP. Untuk titik yang lebih banyak, paket 8 kamera seharga ${loewix8}.`,
  },
  {
    question: "Apakah harga sudah termasuk pemasangan?",
    answer:
      "Ya. Semua harga paket di situs ini sudah termasuk kamera, DVR, hard disk, kabel, pemasangan, dan setting ke HP. Paket Loewix juga sudah termasuk power supply dan konektor.",
  },
  {
    question: "Apakah survei lokasi gratis?",
    answer:
      "Ya, survei lokasi gratis. Teknisi datang untuk memeriksa denah dan jalur kabel sebelum pemasangan.",
  },
  {
    question: "Bagaimana cara memesan?",
    answer: `Kirim pesan WhatsApp ke ${CONTACT.phone}. Sebutkan jenis tempat, perkiraan jumlah kamera, dan area Anda.`,
  },
  {
    question: "Kamera apa yang digunakan?",
    answer:
      "Paket utama memakai kamera Loewix 2MP ColorVu. Gambarnya tetap berwarna di malam hari. Tersedia juga kamera HiLook dan Hikvision, masing-masing dalam resolusi 2MP dan 5MP.",
  },
  {
    question: "Area mana saja yang dilayani?",
    answer:
      "Kami melayani Jabodetabek: Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Kantor kami ada di Ciledug, Kota Tangerang, dan buka 24 jam.",
  },
  {
    question: "Berapa meter kabel yang termasuk paket Loewix?",
    answer:
      "Paket 2 kamera mendapat 40 meter, paket 4 kamera 80 meter, paket 8 kamera 160 meter, dan paket 16 kamera 320 meter. Daftar lengkap semua paket ada di halaman paket CCTV.",
  },
  {
    question: "Berapa biaya kabel di luar paket?",
    answer: `Kabel yang melebihi jatah paket dikenakan ${coaxial.priceFormatted} per meter untuk kabel coaxial RG59+P. Semua paket di situs ini memakai kamera analog.`,
  },
  {
    question: "Berapa lama garansi kamera CCTV?",
    answer:
      "Kamera Loewix bergaransi 1 tahun. Kamera HiLook dan Hikvision bergaransi 2 tahun.",
  },
  {
    question: "Apakah bisa memilih kamera indoor atau outdoor?",
    answer:
      "Bisa pada paket Loewix. Anda bebas memilih kombinasi kamera indoor dan outdoor sesuai titik yang ingin dipantau.",
  },
];

export const PACKAGE_FAQ: FaqItem[] = [
  {
    question: "Apa yang termasuk dalam paket CCTV?",
    answer:
      "Semua paket sudah termasuk kamera, DVR, hard disk, kabel, pemasangan, dan setting ke HP. Paket Loewix juga mencakup kamera 2MP ColorVu (gambar berwarna siang dan malam), rekam suara 1 arah, power supply, dan konektor, dengan kabel sesuai jumlah kamera.",
  },
  {
    question: "Apa perbedaan Loewix, HiLook, dan Hikvision?",
    answer:
      "Loewix berupa kamera 2MP ColorVu dengan rekam suara 1 arah, garansi 1 tahun. HiLook dan Hikvision tersedia dalam 2MP dan 5MP, garansi 2 tahun. HiLook adalah merek di bawah Hikvision. Perbandingan harga ada di tabel halaman ini.",
  },
  {
    question: "Bagaimana cara pembayaran?",
    answer:
      "Untuk paket 2 sampai 8 kamera, pembayaran dilakukan setelah pemasangan selesai. Untuk paket 9 sampai 16 kamera, uang muka 50 persen, sisanya dibayar setelah pemasangan. Berlaku untuk semua paket.",
  },
  {
    question: "Berapa jumlah kamera yang tepat untuk ruko atau kantor?",
    answer:
      "Ruko dua lantai umumnya cukup dengan 4 kamera: satu di depan, satu di kasir, satu di tangga, dan satu di gudang belakang. Kantor tergantung denah, rata-rata 6 sampai 8 kamera untuk ruang kerja, pintu masuk, dan area parkir.",
  },
  {
    question: "Berapa kapasitas DVR dan hard disk di paket Loewix?",
    answer:
      "Paket 2 sampai 4 kamera memakai DVR 4 channel dan hard disk 500GB. Paket 5 kamera memakai DVR 8 channel dan hard disk 500GB. Paket 6 sampai 8 kamera memakai DVR 8 channel dan hard disk 1TB. Paket 9 dan 10 kamera memakai DVR 16 channel dan hard disk 1TB. Paket 11 sampai 16 kamera memakai DVR 16 channel dan hard disk 2TB.",
  },
];
