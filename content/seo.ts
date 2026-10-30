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
