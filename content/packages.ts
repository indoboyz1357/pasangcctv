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

export const LOEWIX_ITEMIZED = [
  { cameras: 2, price: 2400000, priceFormatted: "Rp2.400.000", indoor: 1, outdoor: 1, dvr: "DVR Loewix 1080N 4 Channel", hdd: "500GB", psu: "PSU 4 Port", connectors: 4, cableMeters: 40 },
  { cameras: 3, price: 3100000, priceFormatted: "Rp3.100.000", indoor: 1, outdoor: 2, dvr: "DVR Loewix 1080N 4 Channel", hdd: "500GB", psu: "PSU 4 Port", connectors: 6, cableMeters: 60 },
  { cameras: 4, price: 3750000, priceFormatted: "Rp3.750.000", indoor: 2, outdoor: 2, dvr: "DVR Loewix 1080N 4 Channel", hdd: "500GB", psu: "PSU 4 Port", connectors: 8, cableMeters: 80 },
  { cameras: 5, price: 4650000, priceFormatted: "Rp4.650.000", indoor: 2, outdoor: 3, dvr: "DVR Loewix 1080N 8 Channel", hdd: "500GB", psu: "PSU 8 Port", connectors: 10, cableMeters: 100 },
  { cameras: 6, price: 5850000, priceFormatted: "Rp5.850.000", indoor: 3, outdoor: 3, dvr: "DVR Loewix 1080N 8 Channel", hdd: "1TB", psu: "PSU 8 Port", connectors: 12, cableMeters: 120 },
  { cameras: 7, price: 6550000, priceFormatted: "Rp6.550.000", indoor: 3, outdoor: 4, dvr: "DVR Loewix 1080N 8 Channel", hdd: "1TB", psu: "PSU 8 Port", connectors: 14, cableMeters: 140 },
  { cameras: 8, price: 7150000, priceFormatted: "Rp7.150.000", indoor: 4, outdoor: 4, dvr: "DVR Loewix 1080N 8 Channel", hdd: "1TB", psu: "PSU 8 Port", connectors: 16, cableMeters: 160 },
  { cameras: 9, price: 8550000, priceFormatted: "Rp8.550.000", indoor: 4, outdoor: 5, dvr: "DVR Loewix 1080N 16 Channel", hdd: "1TB", psu: "PSU 16 Port", connectors: 18, cableMeters: 180 },
  { cameras: 10, price: 9250000, priceFormatted: "Rp9.250.000", indoor: 5, outdoor: 5, dvr: "DVR Loewix 1080N 16 Channel", hdd: "1TB", psu: "PSU 16 Port", connectors: 20, cableMeters: 200 },
  { cameras: 11, price: 10650000, priceFormatted: "Rp10.650.000", indoor: 5, outdoor: 6, dvr: "DVR Loewix 1080N 16 Channel", hdd: "2TB", psu: "PSU 16 Port", connectors: 22, cableMeters: 220 },
  { cameras: 12, price: 11300000, priceFormatted: "Rp11.300.000", indoor: 6, outdoor: 6, dvr: "DVR Loewix 1080N 16 Channel", hdd: "2TB", psu: "PSU 16 Port", connectors: 24, cableMeters: 240 },
  { cameras: 13, price: 11950000, priceFormatted: "Rp11.950.000", indoor: 6, outdoor: 7, dvr: "DVR Loewix 1080N 16 Channel", hdd: "2TB", psu: "PSU 16 Port", connectors: 26, cableMeters: 260 },
  { cameras: 14, price: 12650000, priceFormatted: "Rp12.650.000", indoor: 7, outdoor: 7, dvr: "DVR Loewix 1080N 16 Channel", hdd: "2TB", psu: "PSU 16 Port", connectors: 28, cableMeters: 280 },
  { cameras: 15, price: 13300000, priceFormatted: "Rp13.300.000", indoor: 7, outdoor: 8, dvr: "DVR Loewix 1080N 16 Channel", hdd: "2TB", psu: "PSU 16 Port", connectors: 30, cableMeters: 300 },
  { cameras: 16, price: 13950000, priceFormatted: "Rp13.950.000", indoor: 8, outdoor: 8, dvr: "DVR Loewix 1080N 16 Channel", hdd: "2TB", psu: "PSU 16 Port", connectors: 32, cableMeters: 320 },
];

export const HILOOK_2MP_ITEMIZED = [
  { cameras: 2, price: 2800000, priceFormatted: "Rp2.800.000", indoor: 1, outdoor: 1, dvr: "DVR Hilook 4 Ch 2MP", hdd: "500GB", psu: "PSU 4 Port", connectors: 4, supporting: 1, cableMeters: 40 },
  { cameras: 3, price: 3500000, priceFormatted: "Rp3.500.000", indoor: 1, outdoor: 2, dvr: "DVR Hilook 4 Ch 2MP", hdd: "500GB", psu: "PSU 4 Port", connectors: 6, supporting: 1.5, cableMeters: 60 },
  { cameras: 4, price: 4200000, priceFormatted: "Rp4.200.000", indoor: 2, outdoor: 2, dvr: "DVR Hilook 4 Ch 2MP", hdd: "500GB", psu: "PSU 4 Port", connectors: 8, supporting: 2, cableMeters: 80 },
  { cameras: 5, price: 5200000, priceFormatted: "Rp5.200.000", indoor: 2, outdoor: 3, dvr: "DVR Hilook 8 Ch 2MP", hdd: "500GB", psu: "PSU 8 Port", connectors: 10, supporting: 2.5, cableMeters: 100 },
  { cameras: 6, price: 6400000, priceFormatted: "Rp6.400.000", indoor: 3, outdoor: 3, dvr: "DVR Hilook 8 Ch 2MP", hdd: "1TB", psu: "PSU 8 Port", connectors: 12, supporting: 3, cableMeters: 120 },
  { cameras: 7, price: 7100000, priceFormatted: "Rp7.100.000", indoor: 3, outdoor: 4, dvr: "DVR Hilook 8 Ch 2MP", hdd: "1TB", psu: "PSU 8 Port", connectors: 14, supporting: 3.5, cableMeters: 140 },
  { cameras: 8, price: 7800000, priceFormatted: "Rp7.800.000", indoor: 4, outdoor: 4, dvr: "DVR Hilook 8 Ch 2MP", hdd: "1TB", psu: "PSU 8 Port", connectors: 16, supporting: 4, cableMeters: 160 },
  { cameras: 9, price: 9500000, priceFormatted: "Rp9.500.000", indoor: 4, outdoor: 5, dvr: "DVR Hilook 16 Ch 2MP", hdd: "1TB", psu: "PSU 16 Port", connectors: 18, supporting: 4.5, cableMeters: 180 },
  { cameras: 10, price: 10200000, priceFormatted: "Rp10.200.000", indoor: 5, outdoor: 5, dvr: "DVR Hilook 16 Ch 2MP", hdd: "1TB", psu: "PSU 16 Port", connectors: 20, supporting: 5, cableMeters: 200 },
  { cameras: 11, price: 11650000, priceFormatted: "Rp11.650.000", indoor: 5, outdoor: 6, dvr: "DVR Hilook 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 22, supporting: 5.5, cableMeters: 220 },
  { cameras: 12, price: 12350000, priceFormatted: "Rp12.350.000", indoor: 6, outdoor: 6, dvr: "DVR Hilook 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 24, supporting: 6, cableMeters: 240 },
  { cameras: 13, price: 13050000, priceFormatted: "Rp13.050.000", indoor: 6, outdoor: 7, dvr: "DVR Hilook 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 26, supporting: 6.5, cableMeters: 260 },
  { cameras: 14, price: 13750000, priceFormatted: "Rp13.750.000", indoor: 7, outdoor: 7, dvr: "DVR Hilook 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 28, supporting: 7, cableMeters: 280 },
  { cameras: 15, price: 14450000, priceFormatted: "Rp14.450.000", indoor: 7, outdoor: 8, dvr: "DVR Hilook 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 30, supporting: 7.5, cableMeters: 300 },
  { cameras: 16, price: 15150000, priceFormatted: "Rp15.150.000", indoor: 8, outdoor: 8, dvr: "DVR Hilook 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 32, supporting: 8, cableMeters: 320 },
];

const HILOOK_2MP: Series = {
  id: "hilook-2mp",
  brand: "HiLook",
  name: "HiLook",
  resolution: "2MP Full HD",
  title: "HiLook 2MP Full HD",
  warranty: WARRANTY.hilook,
  description:
    "Kamera HiLook 2MP dari Hikvision. Sudah termasuk DVR, hard disk, kabel, pemasangan, dan setting ke HP.",
  hasSpecs: true,
  packages: HILOOK_2MP_ITEMIZED.map((item) =>
    pkg(item.cameras, item.price, {
      dvr: item.dvr,
      hdd: item.hdd,
      cable: `${item.cableMeters} meter`,
    })
  ),
};

export const HIKVISION_2MP_ITEMIZED = [
  { cameras: 2, price: 3900000, priceFormatted: "Rp3.900.000", indoor: 1, outdoor: 1, dvr: "DVR Hikvision 4 Ch 2MP", hdd: "500GB", psu: "PSU 4 Port", connectors: 4, supporting: 1, cableMeters: 40 },
  { cameras: 3, price: 4750000, priceFormatted: "Rp4.750.000", indoor: 1, outdoor: 2, dvr: "DVR Hikvision 4 Ch 2MP", hdd: "500GB", psu: "PSU 4 Port", connectors: 6, supporting: 1.5, cableMeters: 60 },
  { cameras: 4, price: 5600000, priceFormatted: "Rp5.600.000", indoor: 2, outdoor: 2, dvr: "DVR Hikvision 4 Ch 2MP", hdd: "500GB", psu: "PSU 4 Port", connectors: 8, supporting: 2, cableMeters: 80 },
  { cameras: 5, price: 7500000, priceFormatted: "Rp7.500.000", indoor: 2, outdoor: 3, dvr: "DVR Hikvision 8 Ch 2MP", hdd: "500GB", psu: "PSU 8 Port", connectors: 10, supporting: 2.5, cableMeters: 100 },
  { cameras: 6, price: 8850000, priceFormatted: "Rp8.850.000", indoor: 3, outdoor: 3, dvr: "DVR Hikvision 8 Ch 2MP", hdd: "1TB", psu: "PSU 8 Port", connectors: 12, supporting: 3, cableMeters: 120 },
  { cameras: 7, price: 9750000, priceFormatted: "Rp9.750.000", indoor: 3, outdoor: 4, dvr: "DVR Hikvision 8 Ch 2MP", hdd: "1TB", psu: "PSU 8 Port", connectors: 14, supporting: 3.5, cableMeters: 140 },
  { cameras: 8, price: 10600000, priceFormatted: "Rp10.600.000", indoor: 4, outdoor: 4, dvr: "DVR Hikvision 8 Ch 2MP", hdd: "1TB", psu: "PSU 8 Port", connectors: 16, supporting: 4, cableMeters: 160 },
  { cameras: 9, price: 13800000, priceFormatted: "Rp13.800.000", indoor: 4, outdoor: 5, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "1TB", psu: "PSU 16 Port", connectors: 18, supporting: 4.5, cableMeters: 180 },
  { cameras: 10, price: 14650000, priceFormatted: "Rp14.650.000", indoor: 5, outdoor: 5, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "1TB", psu: "PSU 16 Port", connectors: 20, supporting: 5, cableMeters: 200 },
  { cameras: 11, price: 16250000, priceFormatted: "Rp16.250.000", indoor: 5, outdoor: 6, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 22, supporting: 5.5, cableMeters: 220 },
  { cameras: 12, price: 17150000, priceFormatted: "Rp17.150.000", indoor: 6, outdoor: 6, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 24, supporting: 6, cableMeters: 240 },
  { cameras: 13, price: 18000000, priceFormatted: "Rp18.000.000", indoor: 6, outdoor: 7, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 26, supporting: 6.5, cableMeters: 260 },
  { cameras: 14, price: 18850000, priceFormatted: "Rp18.850.000", indoor: 7, outdoor: 7, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 28, supporting: 7, cableMeters: 280 },
  { cameras: 15, price: 19750000, priceFormatted: "Rp19.750.000", indoor: 7, outdoor: 8, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 30, supporting: 7.5, cableMeters: 300 },
  { cameras: 16, price: 20600000, priceFormatted: "Rp20.600.000", indoor: 8, outdoor: 8, dvr: "DVR Hikvision 16 Ch 2MP", hdd: "2TB", psu: "PSU 16 Port", connectors: 32, supporting: 8, cableMeters: 320 },
];

const HIKVISION_2MP: Series = {
  id: "hikvision-2mp",
  brand: "Hikvision",
  name: "Hikvision",
  resolution: "2MP Full HD",
  title: "Hikvision 2MP Full HD",
  warranty: WARRANTY.hikvision,
  description:
    "Kamera Hikvision 2MP standar industri global teruji. Sudah termasuk DVR, hard disk, kabel, pemasangan, dan setting ke HP.",
  hasSpecs: true,
  packages: HIKVISION_2MP_ITEMIZED.map((item) =>
    pkg(item.cameras, item.price, {
      dvr: item.dvr,
      hdd: item.hdd,
      cable: `${item.cableMeters} meter`,
    })
  ),
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
