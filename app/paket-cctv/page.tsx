import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { SITE, CONTACT, WARRANTY } from "@/content/site";
import { LOEWIX_PACKAGES, OTHER_SERIES, PAYMENT_NOTES } from "@/content/packages";
import { PACKAGE_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: `Harga Paket CCTV 2–16 Kamera Terpasang | ${SITE.name}`,
  description:
    "Lihat daftar harga paket CCTV 2 hingga 16 kamera terpasang lengkap. Termasuk kamera Loewix, HiLook, Hikvision, DVR, hard disk, kabel, dan garansi resmi.",
  alternates: {
    canonical: `${SITE.url}/paket-cctv/`,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `Harga Paket CCTV 2–16 Kamera Terpasang | ${SITE.name}`,
    description:
      "Daftar harga paket CCTV 2 hingga 16 kamera terpasang lengkap. Termasuk kamera, DVR, hard disk, kabel, pasang, dan setting HP.",
    url: `${SITE.url}/paket-cctv/`,
    images: [
      {
        url: `${SITE.url}/og/paket.svg`,
        width: 1200,
        height: 630,
        alt: "PasangCCTV - Harga Paket CCTV Terpasang",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Harga Paket CCTV 2–16 Kamera Terpasang | ${SITE.name}`,
    description:
      "Paket CCTV 2 hingga 16 kamera. Harga sudah termasuk pemasangan, kabel, dan setting ke HP.",
    images: [`${SITE.url}/og/paket.svg`],
  },
};

// Schema JSON-LD halaman paket
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Paket CCTV", item: `${SITE.url}/paket-cctv/` },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: PACKAGE_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    ...LOEWIX_PACKAGES.map((pkg) => ({
      "@type": "Offer",
      name: `Paket CCTV Loewix ${pkg.cameras} Kamera`,
      description: `Paket ${pkg.cameras} kamera Loewix 2MP ColorVu, DVR ${pkg.dvr}, hard disk ${pkg.hdd}, kabel ${pkg.cable}. Sudah termasuk pemasangan.`,
      price: pkg.price,
      priceCurrency: "IDR",
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "PasangCCTV" },
    })),
  ],
};

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function PaketCCTV() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Spacer untuk fixed navbar */}
      <div className="h-16" aria-hidden="true" />

      {/* ── Breadcrumb ── */}
      <nav
        aria-label="Breadcrumb"
        className="container-max px-4 sm:px-6 lg:px-8 py-4 text-sm text-text-secondary"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white transition-colors">
              Beranda
            </Link>
          </li>
          <li aria-hidden="true">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </li>
          <li>
            <span className="text-white font-semibold">Paket CCTV</span>
          </li>
        </ol>
      </nav>

      {/* ── Header halaman ── */}
      <section className="section-padding pt-8">
        <div className="container-max">
          <div className="label-tag">Daftar harga</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Paket CCTV 2 hingga 16 Kamera,
            <br className="hidden sm:block" />
            <span className="text-accent"> Harga Sudah Termasuk Pasang</span>
          </h1>
          <p className="mt-4 text-text-secondary max-w-2xl leading-relaxed">
            Tabel harga paket CCTV di bawah mencakup kamera, DVR, hard disk,
            kabel, pemasangan, dan setting pemantauan ke HP. Sesuaikan dengan
            jumlah titik yang ingin Anda pantau.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Butuh pemasangan sekarang?{" "}
            <Link href="/" className="text-accent hover:underline">
              layanan pasang CCTV
            </Link>{" "}
            kami melayani seluruh wilayah Jabodetabek.
          </p>
        </div>
      </section>

      {/* ── Tabel Loewix ── */}
      <section id="loewix" className="section-padding pt-0">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Paket Loewix 2MP ColorVu + Audio
            </h2>
            <p className="text-text-secondary text-sm mb-2 max-w-3xl leading-relaxed">
              Teknologi ColorVu memanfaatkan sensor sensitivitas tinggi dan warm lighting agar rekaman tetap berwarna terang 24 jam penuh (bukan inframerah hitam-putih). Kamera dilengkapi mikrofon terpasang untuk merekam suara 1 arah, serta bisa dipantau langsung dari HP secara online. Kombinasi kamera indoor/outdoor bebas ditentukan sesuai kebutuhan lokasi.
            </p>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-text-secondary mb-6">
              <li className="flex items-center gap-2"><IconCheck />Harga termasuk pemasangan</li>
              <li className="flex items-center gap-2"><IconCheck />Setting ke HP</li>
              <li className="flex items-center gap-2"><IconCheck />Power supply + konektor</li>
              <li className="flex items-center gap-2"><IconCheck />Garansi {WARRANTY.loewix}</li>
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={80}>
            {/* Wrapper dengan overflow-x untuk HP */}
            <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-xl border border-border">
              <table className="w-full min-w-[560px] text-sm">
                <thead>
                  <tr className="bg-surface">
                    <th className="px-5 py-4 text-left font-semibold text-accent">Kamera</th>
                    <th className="px-5 py-4 text-left font-semibold text-white">Harga</th>
                    <th className="px-5 py-4 text-left font-semibold text-text-secondary">DVR</th>
                    <th className="px-5 py-4 text-left font-semibold text-text-secondary">Hard Disk</th>
                    <th className="px-5 py-4 text-left font-semibold text-text-secondary">Kabel</th>
                  </tr>
                </thead>
                <tbody>
                  {LOEWIX_PACKAGES.map((pkg, i) => (
                    <tr
                      key={pkg.cameras}
                      className={`border-t border-border hover:bg-accent/5 transition-colors ${
                        i % 2 === 0 ? "bg-bg" : "bg-surface/50"
                      }`}
                    >
                      <td className="px-5 py-4 font-bold text-accent">
                        {pkg.cameras} kamera
                      </td>
                      <td className="px-5 py-4 font-bold text-white whitespace-nowrap">
                        {pkg.priceFormatted}
                      </td>
                      <td className="px-5 py-4 text-text-secondary">{pkg.dvr}</td>
                      <td className="px-5 py-4 text-text-secondary">{pkg.hdd}</td>
                      <td className="px-5 py-4 text-text-secondary whitespace-nowrap">{pkg.cable}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>

          {/* Cara pembayaran */}
          <ScrollReveal delay={120} className="mt-6">
            <div className="card border-l-2 border-l-accent max-w-lg">
              <h3 className="font-bold text-white mb-3 text-sm uppercase tracking-wide">
                Cara pembayaran
              </h3>
              <ul className="space-y-2 text-sm text-text-secondary">
                {PAYMENT_NOTES.map((note, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <IconCheck />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Tabel seri lain ── */}
      <section id="seri-lain" className="section-padding bg-surface border-y border-border">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Paket CCTV HiLook dan Hikvision
            </h2>
            <p className="text-text-secondary text-sm mb-4 max-w-3xl leading-relaxed">
              Tersedia paket 2, 4, 8, dan 16 kamera. Semua paket sudah lengkap termasuk unit kamera (indoor/outdoor bebas pilih), DVR dedicated, hard disk rekaman, kabel coaxial + power, power supply, konektor, jasa pemasangan rapi, serta setting pemantauan via aplikasi smartphone.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8 text-xs text-text-secondary">
              <div className="bg-bg/60 p-3 rounded-lg border border-border">
                <span className="font-bold text-white block mb-1">Pilihan Resolusi 2MP (Full HD 1080p):</span>
                Sangat ideal dan efisien untuk rumah tinggal, toko, atau kantor skala menengah. Wajah dan pergerakan objek terlihat jelas dengan penggunaan memori hard disk yang hemat.
              </div>
              <div className="bg-bg/60 p-3 rounded-lg border border-border">
                <span className="font-bold text-white block mb-1">Pilihan Resolusi 5MP (Ultra HD):</span>
                Resolusi 2,5 kali lebih detail dibanding 2MP. Cocok untuk area luas, lorong gudang, lobi perkantoran, atau kebutuhan membaca nomor plat kendaraan secara lebih presisi.
              </div>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {OTHER_SERIES.map((series, si) => (
              <ScrollReveal key={`${series.name}-${series.resolution}`} delay={si * 80}>
                <div className="card">
                  <h3 className="font-bold text-white mb-1">
                    {series.name} {series.resolution}
                  </h3>
                  <p className="text-xs text-text-secondary mb-4">
                    Garansi {series.warranty}
                  </p>
                  <div className="overflow-x-auto -mx-2">
                    <table className="w-full min-w-[280px] text-sm">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="px-2 py-2 text-left text-text-secondary font-medium">Kamera</th>
                          <th className="px-2 py-2 text-left text-accent font-semibold">Harga</th>
                        </tr>
                      </thead>
                      <tbody>
                        {series.packages.map((pkg) => (
                          <tr key={pkg.cameras} className="border-b border-border/50 hover:bg-accent/5 transition-colors">
                            <td className="px-2 py-3 text-text-secondary">
                              {pkg.cameras} kamera
                            </td>
                            <td className="px-2 py-3 font-bold text-white whitespace-nowrap">
                              {pkg.priceFormatted}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 text-xs text-text-secondary text-center max-w-2xl mx-auto">
            *Semua paket mencakup jatah kabel standar (40m untuk 2 kamera, 80m untuk 4 kamera, 160m untuk 8 kamera, 320m untuk 16 kamera). Apabila denah gedung atau jalur instalasi memerlukan kabel lebih panjang, kelebihan kabel dihitung transparan per meter dan disepakati saat survei lokasi tanpa biaya tersembunyi.
          </ScrollReveal>
        </div>
      </section>

      {/* ── Panduan memilih jumlah kamera ── */}
      <section id="panduan" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-6">
              Panduan memilih jumlah kamera
            </h2>
            <div className="space-y-5 text-text-secondary leading-relaxed">
              <p>
                Jumlah kamera yang tepat bergantung pada berapa banyak area yang
                ingin Anda pantau, bukan pada ukuran ruangan saja.
              </p>
              <p>
                Untuk rumah tinggal satu lantai, 2 hingga 4 kamera biasanya
                cukup untuk mencakup pintu depan, carport, dan pintu belakang.
                Rumah dua lantai atau lebih umumnya membutuhkan 4 hingga 8
                kamera tergantung jumlah titik masuk dan area yang perlu
                diawasi.
              </p>
              <p>
                Ruko dua lantai rata-rata menggunakan 4 kamera: satu di depan,
                satu di area kasir, satu di tangga atau lorong, dan satu di
                gudang. Kantor dengan beberapa ruang kerja dan area parkir
                biasanya membutuhkan 6 hingga 8 kamera.
              </p>
              <p>
                Kalau Anda belum yakin, ceritakan denah dan area yang ingin
                dipantau kepada teknisi saat survei. Penentuan jumlah kamera
                yang tepat dilakukan setelah melihat lokasi secara langsung.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ paket ── */}
      <section id="faq-paket" className="section-padding bg-surface border-y border-border" aria-labelledby="faq-paket-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-paket-heading" className="section-title">
              Pertanyaan seputar paket CCTV
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={PACKAGE_FAQ} />
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp ── */}
      <section id="cta-paket" className="section-padding">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Sudah tahu paket yang cocok?</h2>
            <p className="section-subtitle mx-auto mt-3">
              Ceritakan kebutuhan Anda via WhatsApp. Kami akan menjadwalkan
              survei dan memberi estimasi harga yang sesuai dengan kondisi
              lokasi.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <a
                href={`${CONTACT.whatsappUrl}?text=Halo%2C%20saya%20tertarik%20dengan%20paket%20CCTV.%20Bisa%20minta%20info%20lebih%20lanjut%3F`}
                target="_blank"
                rel="noopener noreferrer"
                id="paket-cta-whatsapp-btn"
                className="btn-primary justify-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.856L.057 23.492a.75.75 0 0 0 .93.93l5.7-1.493A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.964-1.356l-.356-.212-3.685.966.983-3.596-.232-.371A9.75 9.75 0 1 1 12 21.75z" />
                </svg>
                Tanya via WhatsApp
              </a>
              <Link href="/" id="paket-back-link" className="btn-outline justify-center">
                Lihat jasa pasang CCTV
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
