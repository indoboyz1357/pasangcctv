import { MetadataRoute } from "next";
import { SITE } from "@/content/site";
import { PAGES } from "@/content/seo";

export const dynamic = "force-static";

// Tanggal ubah diambil dari content/seo.ts dan hanya berubah saat isi halaman berubah.
// Google mengabaikan changeFrequency dan priority, jadi tidak ditulis.
export default function sitemap(): MetadataRoute.Sitemap {
  return Object.values(PAGES).map((page) => ({
    url: `${SITE.url}${page.path}`,
    lastModified: page.lastModified,
  }));
}
