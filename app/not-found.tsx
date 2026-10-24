import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/content/site";

export const metadata: Metadata = {
  title: "Halaman Tidak Ditemukan",
  description: "Halaman yang Anda cari tidak ada. Kembali ke beranda atau lihat paket CCTV kami.",
  alternates: {
    canonical: `${SITE.url}/404/`,
  },
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center section-padding">
      <div className="text-center max-w-md">
        <div className="text-8xl font-extrabold text-accent/20 select-none mb-4">
          404
        </div>
        <h1 className="text-2xl font-extrabold text-white mb-3">
          Halaman ini tidak ada
        </h1>
        <p className="text-text-secondary mb-8 leading-relaxed">
          Alamat yang Anda buka tidak ditemukan. Mungkin URL salah ketik atau
          halaman sudah dipindahkan.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link
            href="/"
            id="not-found-home-link"
            className="btn-primary justify-center"
          >
            Kembali ke beranda
          </Link>
          <Link
            href="/paket-cctv/"
            id="not-found-packages-link"
            className="btn-outline justify-center"
          >
            Lihat paket CCTV
          </Link>
        </div>
      </div>
    </div>
  );
}
