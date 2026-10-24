// Data paket — semua angka dari references/stats.md
// Jangan menambah atau mengubah harga tanpa memperbarui stats.md.

export interface LoewixPackage {
  cameras: number;
  price: number;
  priceFormatted: string;
  dvr: string;
  hdd: string;
  cable: string;
}

export interface OtherSeriesPackage {
  cameras: number;
  price: number;
  priceFormatted: string;
}

export interface OtherSeries {
  name: string;
  resolution: string;
  warranty: string;
  packages: OtherSeriesPackage[];
}

// Paket Loewix 2MP ColorVu + Audio
// Semua harga sudah termasuk pemasangan dan setting ke HP.
export const LOEWIX_PACKAGES: LoewixPackage[] = [
  { cameras: 2,  price: 2350000,  priceFormatted: "Rp2.350.000",  dvr: "4 channel",  hdd: "500GB", cable: "40 meter" },
  { cameras: 3,  price: 3050000,  priceFormatted: "Rp3.050.000",  dvr: "4 channel",  hdd: "500GB", cable: "60 meter" },
  { cameras: 4,  price: 3700000,  priceFormatted: "Rp3.700.000",  dvr: "4 channel",  hdd: "500GB", cable: "80 meter" },
  { cameras: 5,  price: 4600000,  priceFormatted: "Rp4.600.000",  dvr: "8 channel",  hdd: "500GB", cable: "100 meter" },
  { cameras: 6,  price: 5800000,  priceFormatted: "Rp5.800.000",  dvr: "8 channel",  hdd: "1TB",   cable: "120 meter" },
  { cameras: 7,  price: 6500000,  priceFormatted: "Rp6.500.000",  dvr: "8 channel",  hdd: "1TB",   cable: "140 meter" },
  { cameras: 8,  price: 7100000,  priceFormatted: "Rp7.100.000",  dvr: "8 channel",  hdd: "1TB",   cable: "160 meter" },
  { cameras: 9,  price: 8500000,  priceFormatted: "Rp8.500.000",  dvr: "16 channel", hdd: "1TB",   cable: "180 meter" },
  { cameras: 10, price: 9200000,  priceFormatted: "Rp9.200.000",  dvr: "16 channel", hdd: "1TB",   cable: "200 meter" },
  { cameras: 11, price: 10600000, priceFormatted: "Rp10.600.000", dvr: "16 channel", hdd: "2TB",   cable: "220 meter" },
  { cameras: 12, price: 11250000, priceFormatted: "Rp11.250.000", dvr: "16 channel", hdd: "2TB",   cable: "240 meter" },
  { cameras: 13, price: 11900000, priceFormatted: "Rp11.900.000", dvr: "16 channel", hdd: "2TB",   cable: "260 meter" },
  { cameras: 14, price: 12600000, priceFormatted: "Rp12.600.000", dvr: "16 channel", hdd: "2TB",   cable: "280 meter" },
  { cameras: 15, price: 13250000, priceFormatted: "Rp13.250.000", dvr: "16 channel", hdd: "2TB",   cable: "300 meter" },
  { cameras: 16, price: 13900000, priceFormatted: "Rp13.900.000", dvr: "16 channel", hdd: "2TB",   cable: "320 meter" },
];

// Paket preview untuk beranda (2, 4, 8, 16 kamera)
export const LOEWIX_PREVIEW = LOEWIX_PACKAGES.filter((p) =>
  [2, 4, 8, 16].includes(p.cameras)
);

// Cara pembayaran Loewix
// Paket 9-15: cara bayar belum diketahui, jangan ditulis.
export const PAYMENT_NOTES = [
  "Paket 2 hingga 8 kamera: bayar setelah pemasangan selesai.",
  "Paket 16 kamera: uang muka 50 persen, sisanya dibayar setelah terpasang.",
] as const;

// Seri lain — hanya 2, 4, 8, 16 kamera.
// Spesifikasi DVR, hard disk, dan kabel belum diketahui, tidak ditulis.
export const OTHER_SERIES: OtherSeries[] = [
  {
    name: "HiLook",
    resolution: "2MP",
    warranty: "2 tahun",
    packages: [
      { cameras: 2,  price: 2750000,  priceFormatted: "Rp2.750.000" },
      { cameras: 4,  price: 4150000,  priceFormatted: "Rp4.150.000" },
      { cameras: 8,  price: 7750000,  priceFormatted: "Rp7.750.000" },
      { cameras: 16, price: 15100000, priceFormatted: "Rp15.100.000" },
    ],
  },
  {
    name: "Hikvision",
    resolution: "2MP",
    warranty: "2 tahun",
    packages: [
      { cameras: 2,  price: 3800000,  priceFormatted: "Rp3.800.000" },
      { cameras: 4,  price: 5550000,  priceFormatted: "Rp5.550.000" },
      { cameras: 8,  price: 10550000, priceFormatted: "Rp10.550.000" },
      { cameras: 16, price: 20550000, priceFormatted: "Rp20.550.000" },
    ],
  },
  {
    name: "HiLook",
    resolution: "5MP",
    warranty: "2 tahun",
    packages: [
      { cameras: 2,  price: 3520000,  priceFormatted: "Rp3.520.000" },
      { cameras: 4,  price: 5337000,  priceFormatted: "Rp5.337.000" },
      { cameras: 8,  price: 10235000, priceFormatted: "Rp10.235.000" },
      { cameras: 16, price: 20232000, priceFormatted: "Rp20.232.000" },
    ],
  },
  {
    name: "Hikvision",
    resolution: "5MP",
    warranty: "2 tahun",
    packages: [
      { cameras: 2,  price: 5350000,  priceFormatted: "Rp5.350.000" },
      { cameras: 4,  price: 7600000,  priceFormatted: "Rp7.600.000" },
      { cameras: 8,  price: 14500000, priceFormatted: "Rp14.500.000" },
      { cameras: 16, price: 28450000, priceFormatted: "Rp28.450.000" },
    ],
  },
];
