// Data paket — semua angka dari references/stats.md
// Jangan menambah atau mengubah harga tanpa memperbarui stats.md.
// Harga diperbarui 2026-10-31: +Rp50.000 per paket (Loewix, HiLook 2MP, Hikvision 2MP)
// dan +Rp100.000 per paket (HiLook 5MP, Hikvision 5MP). Lihat stats.md.

import { WARRANTY } from "@/content/site";

export interface SeriesPackage {
  cameras: number;
  price: number;
  priceFormatted: string;
  // Spesifikasi hanya ada untuk Loewix. Seri lain belum diketahui, jangan diisi.
  dvr?: string;
  hdd?: string;
  cable?: string;
}

export interface Series {
  id: string;
  brand: string;
  name: string; // contoh: "HiLook"
  resolution: string; // contoh: "2MP"
  title: string; // judul kartu
  warranty: string;
  // Deskripsi singkat di bawah garansi. Hanya fakta dari stats.md.
  description?: string;
  hasSpecs: boolean;
  packages: SeriesPackage[];
}

export function formatRupiah(value: number): string {
  return "Rp" + value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function pkg(
  cameras: number,
  price: number,
  specs?: { dvr: string; hdd: string; cable: string }
): SeriesPackage {
  return { cameras, price, priceFormatted: formatRupiah(price), ...specs };
}

// Paket Loewix 2MP ColorVu + Audio
// Semua harga sudah termasuk pemasangan, power supply, konektor, dan setting ke HP.
const LOEWIX: Series = {
  id: "loewix-2mp",
  brand: "Loewix",
  name: "Loewix",
  resolution: "2MP ColorVu + Audio",
  title: "Loewix 2MP ColorVu + Audio",
  warranty: WARRANTY.loewix,
  hasSpecs: true,
  packages: [
    pkg(2, 2400000, { dvr: "4 channel", hdd: "500GB", cable: "40 meter" }),
    pkg(3, 3100000, { dvr: "4 channel", hdd: "500GB", cable: "60 meter" }),
    pkg(4, 3750000, { dvr: "4 channel", hdd: "500GB", cable: "80 meter" }),
    pkg(5, 4650000, { dvr: "8 channel", hdd: "500GB", cable: "100 meter" }),
    pkg(6, 5850000, { dvr: "8 channel", hdd: "1TB", cable: "120 meter" }),
    pkg(7, 6550000, { dvr: "8 channel", hdd: "1TB", cable: "140 meter" }),
    pkg(8, 7150000, { dvr: "8 channel", hdd: "1TB", cable: "160 meter" }),
    pkg(9, 8550000, { dvr: "16 channel", hdd: "1TB", cable: "180 meter" }),
    pkg(10, 9250000, { dvr: "16 channel", hdd: "1TB", cable: "200 meter" }),
    pkg(11, 10650000, { dvr: "16 channel", hdd: "2TB", cable: "220 meter" }),
    pkg(12, 11300000, { dvr: "16 channel", hdd: "2TB", cable: "240 meter" }),
    pkg(13, 11950000, { dvr: "16 channel", hdd: "2TB", cable: "260 meter" }),
    pkg(14, 12650000, { dvr: "16 channel", hdd: "2TB", cable: "280 meter" }),
    pkg(15, 13300000, { dvr: "16 channel", hdd: "2TB", cable: "300 meter" }),
    pkg(16, 13950000, { dvr: "16 channel", hdd: "2TB", cable: "320 meter" }),
  ],
};

// Seri lain — hanya 2, 4, 8, 16 kamera.
// Spesifikasi DVR, hard disk, dan kabel belum diketahui, tidak ditulis.
function otherSeries(
  brand: "HiLook" | "Hikvision",
  resolution: "2MP" | "5MP",
  prices: [number, number, number, number]
): Series {
  const warranty = brand === "HiLook" ? WARRANTY.hilook : WARRANTY.hikvision;
  const base =
    "Sudah termasuk DVR, hard disk, kabel, pemasangan, dan setting ke HP.";
  const intro =
    brand === "HiLook"
      ? resolution === "2MP"
        ? "Kamera HiLook 2MP, merek di bawah Hikvision."
        : "Kamera HiLook 5MP, sekitar 2,5 kali jumlah piksel dibanding 2MP."
      : resolution === "2MP"
        ? "Kamera Hikvision 2MP."
        : "Kamera Hikvision 5MP, sekitar 2,5 kali jumlah piksel dibanding 2MP.";
  return {
    id: `${brand.toLowerCase()}-${resolution.toLowerCase()}`,
    brand,
    name: brand,
    resolution,
    title: `${brand} ${resolution}`,
    warranty,
    description: `${intro} ${base}`,
    hasSpecs: false,
    packages: [
      pkg(2, prices[0]),
      pkg(4, prices[1]),
      pkg(8, prices[2]),
      pkg(16, prices[3]),
    ],
  };
}

const HILOOK_2MP = otherSeries("HiLook", "2MP", [2800000, 4200000, 7800000, 15150000]);
const HIKVISION_2MP = otherSeries("Hikvision", "2MP", [3850000, 5600000, 10600000, 20600000]);
const HILOOK_5MP = otherSeries("HiLook", "5MP", [3620000, 5437000, 10335000, 20332000]);
const HIKVISION_5MP = otherSeries("Hikvision", "5MP", [5450000, 7700000, 14600000, 28550000]);

// Urutan tampil di halaman: Loewix lebih dulu, lalu 2MP, lalu 5MP.
export const SERIES: Series[] = [
  LOEWIX,
  HILOOK_2MP,
  HIKVISION_2MP,
  HILOOK_5MP,
  HIKVISION_5MP,
];

export const LOEWIX_PACKAGES = LOEWIX.packages;
export const OTHER_SERIES: Series[] = SERIES.filter((s) => s.id !== LOEWIX.id);

// Seri yang tampil di beranda (cuplikan). Paket 2, 4, 8, 16 kamera.
export const PREVIEW_CAMERAS = [2, 4, 8, 16];
export const PREVIEW_SERIES: Series[] = [LOEWIX, HILOOK_2MP, HIKVISION_2MP].map(
  (s) => ({
    ...s,
    packages: s.packages.filter((p) => PREVIEW_CAMERAS.includes(p.cameras)),
  })
);

export function getPackage(seriesId: string, cameras: number): SeriesPackage {
  const series = SERIES.find((s) => s.id === seriesId);
  const found = series?.packages.find((p) => p.cameras === cameras);
  if (!found) {
    throw new Error(`Paket tidak ditemukan: ${seriesId} ${cameras} kamera`);
  }
  return found;
}

const ALL_PRICES = SERIES.flatMap((s) => s.packages.map((p) => p.price));
export const MIN_PRICE = Math.min(...ALL_PRICES);
export const MAX_PRICE = Math.max(...ALL_PRICES);
export const MIN_PRICE_FORMATTED = formatRupiah(MIN_PRICE);
export const MAX_PRICE_FORMATTED = formatRupiah(MAX_PRICE);

// Cara pembayaran Loewix (dikonfirmasi pemilik 2026-10-31)
export const PAYMENT_NOTES = [
  "Paket 2 sampai 8 kamera: bayar setelah pemasangan selesai.",
  "Paket 9 sampai 16 kamera: uang muka 50 persen, sisanya dibayar setelah pemasangan.",
] as const;

// Biaya kabel di luar jatah paket (dikonfirmasi pemilik 2026-10-31).
// Semua paket di situs ini analog, jadi hanya coaxial yang ditampilkan.
// Kabel LAN Rp9.000 per meter (kamera IP) baru dipakai setelah paket IP camera ada.
export const EXTRA_CABLE = [
  { type: "Coaxial RG59+P (kamera analog)", pricePerMeter: 6000 },
].map((c) => ({ ...c, priceFormatted: formatRupiah(c.pricePerMeter) }));
