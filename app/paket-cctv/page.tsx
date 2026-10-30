import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { PackageSeriesCard } from "@/components/PackageSeriesCard";
import { SITE } from "@/content/site";
import { SERIES, PAYMENT_NOTES, EXTRA_CABLE } from "@/content/packages";
import { PACKAGE_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.paket);

const pageUrl = `${SITE.url}${PAGES.paket.path}`;

// Schema JSON-LD halaman paket.
// Setiap paket yang tampil di tabel menjadi satu Product dengan satu Offer.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Paket CCTV", item: pageUrl },
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
    ...SERIES.flatMap((series) =>
      series.packages.map((pkg) => ({
        "@type": "Product",
        name: `Paket CCTV ${series.title} ${pkg.cameras} Kamera`,
        description: series.hasSpecs
          ? `Paket ${pkg.cameras} kamera ${series.title}, DVR ${pkg.dvr}, hard disk ${pkg.hdd}, kabel ${pkg.cable}. Sudah termasuk pemasangan.`
          : `Paket ${pkg.cameras} kamera ${series.title}. Sudah termasuk kamera, DVR, hard disk, kabel, pemasangan, dan setting ke HP.`,
        brand: { "@type": "Brand", name: series.brand },
        offers: {
          "@type": "Offer",
          url: `${pageUrl}#${series.id}-${pkg.cameras}-kamera`,
          price: pkg.price,
          priceCurrency: "IDR",
          seller: { "@id": `${SITE.url}/#localbusiness` },
        },
      }))
    ),
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
      <JsonLd data={jsonLd} />

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
            Tabel harga paket CCTV di bawah dibagi menurut merek dan resolusi.
            Semua harga sudah termasuk kamera, DVR, hard disk, kabel,
            pemasangan, dan setting pemantauan ke HP. Paket Loewix juga sudah
            termasuk power supply dan konektor.
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

      {/* ── Harga semua paket ── */}
      <section id="harga" className="section-padding pt-0">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-2">
              Harga paket CCTV per merek dan resolusi
            </h2>
            <p className="text-text-secondary text-sm mb-8 max-w-3xl leading-relaxed">
              Paket Loewix tersedia dari 2 sampai 16 kamera. Paket HiLook dan
              Hikvision tersedia dalam 2, 4, 8, dan 16 kamera, masing-masing
              dengan pilihan 2MP dan 5MP.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SERIES.map((series, i) => {
              const isLoewix = series.id === "loewix-2mp";
              return (
                <ScrollReveal
                  key={series.id}
                  delay={i * 60}
                  className={isLoewix ? "md:col-span-2" : ""}
                >
                  <PackageSeriesCard
                    series={series}
                    description={
                      isLoewix
                        ? "Kamera 2MP ColorVu: gambar tetap berwarna di malam hari. Rekam suara 1 arah dan bisa dipantau dari HP. Kamera indoor atau outdoor bebas dipilih. Sudah termasuk power supply, konektor, pemasangan, dan setting ke HP."
                        : undefined
                    }
                  />
                </ScrollReveal>
              );
            })}
          </div>

          <ScrollReveal className="mt-8">
            <div className="card">
              <h3 className="font-bold text-white text-lg mb-2">
                Cara pembayaran
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Berlaku untuk semua paket.
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                {PAYMENT_NOTES.map((note) => (
                  <li key={note} className="flex items-start gap-2">
                    <IconCheck />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>

          <ScrollReveal className="mt-6">
            <div className="card">
              <h3 className="font-bold text-white text-lg mb-2">
                Kabel di luar paket
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-3">
                Kabel yang melebihi jatah paket dikenakan biaya per meter.
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                {EXTRA_CABLE.map((c) => (
                  <li key={c.type} className="flex items-start gap-2">
                    <IconCheck />
                    <span>
                      <span className="font-bold text-white">
                        {c.priceFormatted} per meter
                      </span>{" "}
                      untuk {c.type}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Memilih resolusi ── */}
      <section id="resolusi" className="section-padding bg-surface border-y border-border">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-6">
              Memilih resolusi 2MP atau 5MP
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-text-secondary leading-relaxed">
              <div className="bg-bg/60 p-4 rounded-lg border border-border">
                <h3 className="font-bold text-white mb-1">2MP (Full HD 1080p)</h3>
                Cocok untuk rumah tinggal, toko, atau kantor skala menengah.
                Ukuran rekaman lebih kecil, sehingga hard disk bertahan lebih
                lama.
              </div>
              <div className="bg-bg/60 p-4 rounded-lg border border-border">
                <h3 className="font-bold text-white mb-1">5MP</h3>
                Memiliki sekitar 2,5 kali jumlah piksel dibanding 2MP, sehingga
                gambar lebih detail. Cocok untuk area yang lebih luas. Ukuran
                rekaman lebih besar.
              </div>
            </div>
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
                dipantau kepada teknisi saat survei gratis. Penentuan jumlah kamera
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
              Ceritakan kebutuhan Anda via WhatsApp. Kami akan membantu memilih
              paket dan menjadwalkan survei lokasi gratis.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya tertarik dengan paket CCTV. Bisa minta info lebih lanjut?"
                id="paket-cta-whatsapp-btn"
                className="btn-primary justify-center"
              >
                Tanya via WhatsApp
              </WhatsAppButton>
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
