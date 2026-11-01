// Metadata SEO per halaman — satu sumber untuk title, description, canonical, Open Graph, dan sitemap.
// Angka harga diambil dari content/packages.ts, jangan ditulis manual di sini.

import type { Metadata } from "next";
import { SITE } from "@/content/site";
import { MIN_PRICE_FORMATTED } from "@/content/packages";

export interface PageSeo {
  path: string;
  title: string;
  description: string;
  ogImage: string;
  ogAlt: string;
  // Tanggal ubah terakhir (YYYY-MM-DD). Perbarui hanya saat isi halaman berubah.
  lastModified: string;
}

export const PAGES = {
  home: {
    path: "/",
    title: `Jasa Pasang CCTV Jabodetabek Mulai ${MIN_PRICE_FORMATTED} | ${SITE.name}`,
    description: `Jasa pasang CCTV Jabodetabek untuk rumah, ruko, kantor, dan gudang. Paket 2 sampai 16 kamera mulai ${MIN_PRICE_FORMATTED}, sudah termasuk pasang. Tanya via WhatsApp.`,
    ogImage: "/og/home.png",
    ogAlt: "PasangCCTV, jasa pasang CCTV Jabodetabek",
    lastModified: "2026-10-31",
  },
  paket: {
    path: "/paket-cctv/",
    title: `Harga Paket CCTV 2 sampai 16 Kamera Terpasang | ${SITE.name}`,
    description:
      "Daftar harga paket CCTV 2 sampai 16 kamera: Loewix, HiLook, Hikvision. Sudah termasuk DVR, hard disk, kabel, dan pasang. Tanya paket via WhatsApp.",
    ogImage: "/og/paket.png",
    ogAlt: "PasangCCTV, daftar harga paket CCTV terpasang",
    lastModified: "2026-10-31",
  },
  tentang: {
    path: "/tentang/",
    title: `Tentang Kami: Tim Pasang CCTV untuk Jabodetabek | ${SITE.name}`,
    description:
      "Tim PasangCCTV memasang CCTV sejak 2020 untuk rumah, ruko, hotel, instansi, dan pabrik di Jabodetabek. Survei gratis, hubungi kami lewat WhatsApp.",
    ogImage: "/og/home.png",
    ogAlt: "PasangCCTV, tim pasang CCTV untuk Jabodetabek",
    lastModified: "2026-10-31",
  },
  area: {
    path: "/area/",
    title: `Area Pasang CCTV Jabodetabek: Survei Gratis | ${SITE.name}`,
    description:
      "Cakupan area pasang CCTV dan survei gratis di Jakarta, Bogor, Depok, Tangerang, dan Bekasi. Teknisi datang cek denah dan jalur kabel. Hubungi kami.",
    ogImage: "/og/home.png",
    ogAlt: "PasangCCTV, cakupan area pasang CCTV dan survei gratis Jabodetabek",
    lastModified: "2026-11-01",
  },
  kontak: {
    path: "/kontak/",
    title: `Kontak Pasang CCTV Jabodetabek: Survei Gratis | ${SITE.name}`,
    description:
      "Hubungi kontak pasang CCTV untuk konsultasi denah dan survei lokasi gratis se-Jabodetabek. Kantor buka 24 jam di Ciledug, Tangerang. Tanya via WhatsApp.",
    ogImage: "/og/home.png",
    ogAlt: "PasangCCTV, kontak dan layanan survei pasang CCTV Jabodetabek",
    lastModified: "2026-11-01",
  },
  loewix2mp: {
    path: "/paket-cctv/loewix-2mp/",
    title: `Paket CCTV Loewix 2MP ColorVu Audio | ${SITE.name}`,
    description:
      "Harga paket CCTV Loewix 2MP ColorVu 2 sampai 16 kamera terpasang mulai Rp2.400.000. Rekam suara, gambar berwarna malam hari, gratis survei. Hubungi kami.",
    ogImage: "/og/paket.png",
    ogAlt: "PasangCCTV, paket CCTV Loewix 2MP ColorVu Audio terpasang",
    lastModified: "2026-11-01",
  },
  hilook2mp: {
    path: "/paket-cctv/hilook-2mp/",
    title: `Paket CCTV HiLook 2MP Full HD | ${SITE.name}`,
    description:
      "Harga paket CCTV HiLook 2MP Full HD 2 sampai 16 kamera terpasang mulai Rp2.800.000. Garansi unit 2 tahun, gratis survei Jabodetabek. Hubungi kami via WA.",
    ogImage: "/og/paket.png",
    ogAlt: "PasangCCTV, paket CCTV HiLook 2MP Full HD terpasang",
    lastModified: "2026-11-01",
  },
} as const satisfies Record<string, PageSeo>;

export function buildMetadata(page: PageSeo): Metadata {
  const url = `${SITE.url}${page.path}`;
  const image = `${SITE.url}${page.ogImage}`;
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: SITE.locale,
      siteName: SITE.name,
      title: page.title,
      description: page.description,
      url,
      images: [{ url: image, width: 1200, height: 630, alt: page.ogAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [image],
    },
  };
}
