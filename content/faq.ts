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
      "Kami melayani Jabodetabek: Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Kantor kami buka 24 jam.",
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


export const ABOUT_FAQ: FaqItem[] = [
  {
    question: "Sejak kapan PasangCCTV memasang CCTV?",
    answer:
      "Tim kami memasang CCTV sejak 2020, mulai dari rumah dan ruko sampai proyek skala lingkungan RW.",
  },
  {
    question: "Wilayah mana yang dilayani?",
    answer:
      "Seluruh Jabodetabek: Jakarta, Bogor, Depok, Tangerang, dan Bekasi.",
  },
  {
    question: "Jenis tempat apa saja yang pernah dipasang?",
    answer:
      "Rumah, ruko, kantor, gudang, hotel, instansi pemerintah, dan pabrik. Kami juga pernah mengerjakan pemasangan dengan kabel fiber optik point to point dan kamera thermal PTZ.",
  },
  {
    question: "Apakah teknisi mengajarkan cara melihat rekaman?",
    answer:
      "Ya. Pada serah terima, teknisi mengatur pemantauan dari HP dan mengajarkan cara melihat playback atau rekaman.",
  },
];

export const CONTACT_FAQ: FaqItem[] = [
  {
    question: "Apakah survei lokasi ke rumah atau kantor benar-benar gratis?",
    answer:
      "Ya, survei lokasi gratis tanpa biaya untuk seluruh wilayah Jabodetabek. Teknisi kami datang langsung ke lokasi untuk mengukur kebutuhan kabel dan mengecek potensi titik buta (blind spot).",
  },
  {
    question: "Bagaimana cara cepat memesan jadwal survei teknisi?",
    answer:
      `Hubungi kontak pasang CCTV kami via WhatsApp di ${CONTACT.phone}. Sebutkan jenis tempat (rumah, ruko, kantor, atau gudang), perkiraan jumlah titik kamera, dan alamat lengkap Anda.`,
  },
  {
    question: "Apakah kantor atau layanan konsultasi buka setiap hari?",
    answer:
      "Kantor kami di Paninggilan, Ciledug, Kota Tangerang buka 24 jam setiap hari, sehingga Anda dapat menghubungi kami kapan saja untuk konsultasi maupun penjadwalan survei.",
  },
  {
    question: "Apakah wajib jadi memesan paket setelah disurvei?",
    answer:
      "Tidak wajib. Survei lokasi kami sediakan untuk memberikan masukan denah dan rincian kebutuhan teknis yang transparan tanpa ikatan pemesanan.",
  },
  {
    question: "Bagaimana sistem pembayaran setelah pemasangan?",
    answer:
      "Untuk paket 2 sampai 8 kamera, pembayaran dilakukan setelah seluruh unit terpasang dan aplikasi pemantau aktif di HP. Untuk paket 9 sampai 16 kamera, berlaku uang muka 50 persen dan pelunasan setelah pekerjaan selesai.",
  },
];

export const AREA_FAQ: FaqItem[] = [
  {
    question: "Apakah ada biaya transport survei untuk lokasi seperti Bogor atau Cikarang?",
    answer:
      "Tidak ada. Survei lokasi gratis tanpa biaya transport tambahan untuk seluruh area Jabodetabek, mulai dari perumahan di Bogor hingga kawasan industri Cikarang.",
  },
  {
    question: "Berapa lama teknisi bisa datang ke lokasi setelah kami menghubungi?",
    answer:
      `Waktu kunjungan teknisi disepakati bersama melalui WhatsApp di ${CONTACT.phone}. Untuk sebagian besar wilayah Jabodetabek, survei dapat dijadwalkan pada hari yang sama atau hari berikutnya.`,
  },
  {
    question: "Bagaimana jika jalur kabel di rumah melebihi kuota bawaan paket?",
    answer:
      "Setiap paket sudah menyertakan jatah kabel coaxial yang cukup. Jika denah bangunan memanjang dan membutuhkan kabel tambahan, kelebihannya dihitung Rp6.000 per meter untuk kabel coaxial RG59+P.",
  },
  {
    question: "Apakah teknisi melayani survei dan pasang di akhir pekan?",
    answer:
      "Ya. Kantor kami di Ciledug, Tangerang beroperasi 24 jam dan teknisi kami melayani pemasangan setiap hari, termasuk hari Sabtu dan Minggu.",
  },
  {
    question: "Kapan pembayaran paket pasang CCTV dilakukan?",
    answer:
      "Untuk paket 2 sampai 8 kamera, pembayaran baru dilakukan setelah seluruh kamera terpasang dan pemantauan di HP aktif. Untuk paket 9 sampai 16 kamera, berlaku uang muka 50 persen dan pelunasan setelah serah terima.",
  },
];

export const LOEWIX_FAQ: FaqItem[] = [
  {
    question: "Apa keunggulan utama kamera Loewix 2MP ColorVu?",
    answer:
      "Keunggulan utamanya adalah gambar video tetap berwarna di malam hari (ColorVu) dan memiliki mikrofon bawaan untuk merekam suara 1 arah di sekitar titik kamera.",
  },
  {
    question: "Apakah bisa bebas memilih kombinasi kamera indoor dan outdoor?",
    answer:
      "Bisa. Pada paket Loewix, Anda bebas menentukan berapa unit kamera indoor dome untuk ruangan dalam dan berapa kamera outdoor bullet tahan cuaca untuk halaman luar tanpa perbedaan biaya.",
  },
  {
    question: "Berapa kapasitas DVR dan hard disk pada paket Loewix 2MP?",
    answer:
      "Paket 2 sampai 4 kamera memakai DVR 4 channel dan hard disk 500GB. Paket 5 kamera memakai DVR 8 channel dan HDD 500GB. Paket 6 sampai 8 kamera memakai DVR 8 channel dan HDD 1TB. Paket 9 dan 10 kamera memakai DVR 16 channel dan HDD 1TB. Paket 11 sampai 16 kamera memakai DVR 16 channel dan HDD 2TB.",
  },
  {
    question: "Apakah sudah termasuk konektor dan power supply central?",
    answer:
      "Ya. Semua paket Loewix 2MP sudah lengkap termasuk power supply central 4, 8, atau 16 port, konektor BNC dan DC, kabel coaxial RG59+P, jasa pemasangan, dan setting pemantauan ke HP.",
  },
  {
    question: "Berapa lama garansi untuk paket CCTV Loewix 2MP?",
    answer:
      "Kamera Loewix pada paket ini bergaransi unit selama 1 tahun.",
  },
];

export const HILOOK_2MP_FAQ: FaqItem[] = [
  {
    question: "Berapa lama garansi unit untuk kamera dan DVR HiLook 2MP?",
    answer:
      "Paket CCTV HiLook 2MP memiliki masa garansi unit selama 2 tahun untuk perangkat kamera dan DVR HiLook.",
  },
  {
    question: "Apa keunggulan kamera HiLook dibanding merek lain?",
    answer:
      "HiLook adalah lini produk dari Hikvision yang terkenal dengan durabilitas tinggi dan kualitas sensor gambar yang tajam dan stabil untuk pemantauan jangka panjang.",
  },
  {
    question: "Apakah komposisi kamera indoor dan outdoor bebas disesuaikan?",
    answer:
      "Bisa. Komposisi kamera indoor dome untuk ruangan dalam dan outdoor bullet untuk area luar bebas Anda tentukan saat survei teknisi tanpa perubahan harga.",
  },
  {
    question: "Komponen apa saja yang sudah termasuk dalam paket HiLook 2MP?",
    answer:
      "Seluruh paket sudah mencakup unit kamera HiLook 2MP, DVR HiLook, hard disk (500GB, 1TB, atau 2TB), power supply port, konektor BNC dan DC, supporting device, kabel CCTV, jasa instalasi teknisi, dan setting aplikasi HP.",
  },
  {
    question: "Bagaimana sistem pembayaran untuk paket pasang HiLook 2MP?",
    answer:
      "Untuk paket 2 sampai 8 kamera, pembayaran dilakukan setelah instalasi selesai dan sistem aktif di HP. Untuk paket 9 sampai 16 kamera, berlaku uang muka 50 persen dan pelunasan setelah pemasangan tuntas.",
  },
];

