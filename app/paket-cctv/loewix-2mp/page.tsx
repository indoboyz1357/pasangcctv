import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, WARRANTY } from "@/content/site";
import { LOEWIX_ITEMIZED, EXTRA_CABLE } from "@/content/packages";
import { LOEWIX_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.loewix2mp);

const pageUrl = `${SITE.url}${PAGES.loewix2mp.path}`;
const [coaxial] = EXTRA_CABLE;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Paket CCTV", item: `${SITE.url}/paket-cctv/` },
        { "@type": "ListItem", position: 3, name: "Loewix 2MP", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: LOEWIX_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    ...LOEWIX_ITEMIZED.map((item) => ({
      "@type": "Product",
      name: `Paket CCTV Loewix 2MP ColorVu ${item.cameras} Kamera`,
      description: `Paket ${item.cameras} kamera Loewix 2MP ColorVu audio, ${item.dvr}, hard disk ${item.hdd}, kabel ${item.cableMeters}m. Sudah termasuk pemasangan.`,
      brand: { "@type": "Brand", name: "Loewix" },
      offers: {
        "@type": "Offer",
        url: `${pageUrl}#paket-${item.cameras}-kamera`,
        price: item.price,
        priceCurrency: "IDR",
        seller: { "@id": `${SITE.url}/#localbusiness` },
      },
    })),
  ],
};

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function Loewix2mpPage() {
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
            <Link href="/paket-cctv/" className="hover:text-white transition-colors">
              Paket CCTV
            </Link>
          </li>
          <li aria-hidden="true">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </li>
          <li>
            <span className="text-white font-semibold">Loewix 2MP</span>
          </li>
        </ol>
      </nav>

      {/* ── Header ── */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Paket Loewix ColorVu</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Paket CCTV Loewix 2MP ColorVu Audio:
            <br className="hidden sm:block" />
            <span className="text-accent"> Rincian Harga dan Komponen</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Halaman ini memuat daftar lengkap paket CCTV Loewix 2MP ColorVu Audio mulai dari
            2 hingga 16 kamera untuk hunian rumah tinggal, ruko, kantor, dan gudang di seluruh
            wilayah Jabodetabek. Seluruh harga paket yang tertera di bawah sudah mencakup unit
            kamera, DVR perekam, hard disk penyimpanan, power supply central, konektor BNC dan
            DC, kabel coaxial, jasa pemasangan, hingga setting pemantauan ke smartphone Anda.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Seri Loewix 2MP unggul berkat dua fitur eksklusif yang tidak ditemukan pada kamera
            konvensional sekelasnya: pertama, teknologi <strong className="text-white">ColorVu 24 jam</strong> yang
            mempertahankan rekaman berwarna terang bahkan di kondisi minim cahaya; kedua,
            kemampuan <strong className="text-white">1-Way Audio</strong> melalui mikrofon built-in pada setiap
            unit kamera untuk merekam suara satu arah secara jernih langsung ke hard disk DVR.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Ingin membandingkan dengan seri lain seperti HiLook dan Hikvision? Buka halaman{" "}
            <Link href="/paket-cctv/" className="text-accent hover:underline">
              semua paket CCTV
            </Link>{" "}
            atau cek jangkauan teknisi di{" "}
            <Link href="/area/" className="text-accent hover:underline">
              halaman area layanan Jabodetabek
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Tabel Rincian Komponen Lengkap ── */}
      <section id="tabel-rincian" className="section-padding pt-0">
        <div className="container-max">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-2">
                  Daftar harga dan komponen isi paket Loewix 2MP
                </h2>
                <p className="text-text-secondary text-sm">
                  Komposisi kamera indoor dan outdoor bebas Anda tentukan saat survei lokasi
                  tanpa perbedaan harga. Garansi unit {WARRANTY.loewix}.
                </p>
              </div>
              <div className="text-sm text-text-secondary">
                Harga berlaku: Jabodetabek (Survei Gratis)
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto border border-border rounded-lg bg-surface">
              <table className="w-full text-left text-sm">
                <thead className="bg-bg/80 border-b border-border text-white font-semibold">
                  <tr>
                    <th className="py-3.5 px-4">Paket</th>
                    <th className="py-3.5 px-4">Komposisi Standar</th>
                    <th className="py-3.5 px-4">DVR Perekam</th>
                    <th className="py-3.5 px-4">Hard Disk</th>
                    <th className="py-3.5 px-4">Power Supply</th>
                    <th className="py-3.5 px-4">Konektor</th>
                    <th className="py-3.5 px-4">Kabel</th>
                    <th className="py-3.5 px-4 text-right">Harga Terpasang</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-text-secondary">
                  {LOEWIX_ITEMIZED.map((item) => (
                    <tr key={item.cameras} id={`paket-${item.cameras}-kamera`} className="hover:bg-bg/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">
                        {item.cameras} Kamera
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {item.indoor} Indoor + {item.outdoor} Outdoor
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {item.dvr}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {item.hdd}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {item.psu}
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {item.connectors} BNC + DC
                      </td>
                      <td className="py-3.5 px-4 whitespace-nowrap">
                        {item.cableMeters} Meter
                      </td>
                      <td className="py-3.5 px-4 font-mono font-bold text-accent text-right whitespace-nowrap">
                        {item.priceFormatted}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-3 text-xs text-text-secondary">
              * Seluruh harga di atas sudah termasuk jasa instalasi oleh teknisi dan konfigurasi aplikasi HP.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Keunggulan Fitur Loewix ColorVu + Audio ── */}
      <section id="keunggulan-fitur" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Keunggulan kamera Loewix 2MP ColorVu untuk hunian dan usaha
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Kamera Loewix 2MP ColorVu dirancang untuk mengatasi kelemahan utama kamera
                pengawas konvensional. Berikut dua fitur pembeda utama yang menjadikannya
                pilihan favorit pelanggan di Jabodetabek:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">
                    Gambar Tetap Berwarna Malam Hari (ColorVu)
                  </h3>
                  <p className="text-sm">
                    Kamera biasa beralih ke rekaman hitam putih saat malam. Dengan sensor
                    ColorVu, kamera tetap mempertahankan rekaman berwarna terang selama ada
                    sedikit cahaya sekitar, sehingga warna pakaian, warna bodi kendaraan, dan
                    ciri fisik objek terlihat jauh lebih jelas.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">
                    Rekam Suara 1 Arah (1-Way Audio)
                  </h3>
                  <p className="text-sm">
                    Setiap unit kamera Loewix 2MP dilengkapi mikrofon built-in yang merekam suara
                    satu arah secara otomatis bersamaan dengan rekaman video. Audio tersimpan
                    langsung di hard disk DVR tanpa membutuhkan kabel atau perangkat tambahan.
                    Fitur ini sangat berguna untuk memantau percakapan di area meja kasir, pintu
                    masuk toko atau ruko, ruang transaksi, maupun pagar depan rumah. Perlu
                    diperhatikan bahwa fitur ini bersifat <em>satu arah</em>: kamera dapat
                    menangkap dan merekam suara dari lingkungan sekitar, namun tidak mendukung
                    komunikasi dua arah (talk-back) dari perangkat pemantau ke lokasi kamera.
                  </p>
                </div>
              </div>

              <p>
                Resolusi 2MP Full HD 1080p memberikan jarak pandang jernih sekitar 10 meter
                ke depan. Angka ini sangat pas untuk luas pekarangan rumah, garasi carport,
                maupun ruangan ruko. Keuntungan lain, konsumsi ruang rekaman pada hard disk
                jauh lebih hemat dibanding kamera 5MP, sehingga riwayat rekaman Anda bertahan
                lebih lama sebelum tertimpa secara otomatis.
              </p>
              <p>
                Kombinasi ColorVu dan 1-Way Audio menjadikan kamera Loewix 2MP sebagai
                solusi pengawasan yang lebih informatif dibanding kamera standar: rekaman
                video tidak hanya memperlihatkan <em>apa</em> yang terjadi, tetapi juga
                merekam <em>percakapan atau suara</em> yang berlangsung di lokasi tersebut.
                Hal ini sangat membantu saat memutar ulang rekaman untuk keperluan investigasi
                atau konfirmasi kejadian.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Panduan Pemilihan Jumlah Titik ── */}
      <section id="panduan-titik" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Panduan menentukan jumlah kamera yang dibutuhkan
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Menurut pendapat tegas tim kami, jumlah kamera dan penempatan sudut harus
                ditentukan oleh survei lokasi, bukan sekadar tebakan denah di atas kertas.
                Namun sebagai gambaran umum, berikut acuan yang sering kami terapkan di lapangan:
              </p>

              <ul className="space-y-2.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 1 lantai (2 sampai 4 kamera):</strong> Mencakup
                    pintu pagar depan, carport, dan pintu akses dapur belakang.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 2 lantai (4 sampai 8 kamera):</strong> Tambahan
                    titik untuk balkon lantai atas, tangga dalam, ruang tamu, dan jalan samping.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Ruko niaga 2 lantai (4 kamera):</strong> Satu titik
                    outdoor parkir depan, satu menghadap meja kasir, satu di area tangga, dan satu di gudang.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Kantor dan tempat usaha (6 sampai 16 kamera):</strong> Pengawasan
                    menyeluruh untuk lobi, ruang kerja staf, koridor, ruang server, dan area parkir.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Garansi, Kabel, & Cara Pembayaran ── */}
      <section id="garansi-pembayaran" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Ketentuan garansi, kabel tambahan, dan pembayaran
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
              <p>
                Kami mengutamakan keamanan dan kenyamanan transaksi Anda:
              </p>

              <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Garansi Unit 1 Tahun
                </h3>
                <p>
                  Seluruh kamera dan DVR Loewix pada paket ini dilindungi garansi unit selama
                  1 tahun. Jika terjadi kendala pada perangkat selama masa garansi, teknisi kami
                  siap membantu pengecekan dan penggantian unit.
                </p>
              </div>

              <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Kabel Coaxial di Luar Paket
                </h3>
                <p>
                  Setiap paket sudah menyertakan kuota kabel coaxial RG59 plus power yang cukup
                  (misalnya 80 meter pada paket 4 kamera). Jika denah bangunan Anda memanjang dan
                  membutuhkan kabel tambahan di atas jatah paket, kelebihannya dikenakan biaya
                  transparan sebesar {coaxial.priceFormatted} per meter.
                </p>
              </div>

              <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Sistem Pembayaran Aman
                </h3>
                <p>
                  Untuk paket 2 sampai 8 kamera, Anda baru membayar setelah seluruh kamera
                  terpasang rapi dan sistem pemantauan di HP Anda telah aktif dan diajarkan oleh
                  teknisi. Untuk paket 9 sampai 16 kamera, berlaku uang muka 50 persen saat mulai
                  pekerjaan dan pelunasan diselesaikan setelah serah terima tuntas.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kapan Tidak Butuh Paket Ini ── */}
      <section id="kapan-tidak-perlu" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan Anda tidak memerlukan paket CCTV ini?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Kami selalu berterus terang kepada pelanggan. Anda tidak selalu membutuhkan sistem
              kabel DVR lengkap:
            </p>
            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Jika Anda hanya membutuhkan satu titik pemantau di dalam kamar anak atau ruang
                kerja kecil dan terdapat colokan listrik di dekatnya, kamera WiFi mandiri dari
                toko online sudah sangat mencukupi. Anda bisa memasangnya sendiri tanpa perlu
                mengeluarkan biaya jasa instalasi dan tanpa perlu menarik kabel ke mesin DVR.
              </p>
              <p>
                Paket instalasi Loewix 2MP ini menjadi pilihan tepat ketika Anda membutuhkan pengawasan
                permanen yang stabil, rekam fisik terpusat di hard disk DVR yang tidak membebani
                kecepatan internet rumah, dan instalasi kabel yang tertata rapi di plafon bangunan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ Loewix ── */}
      <section id="faq-loewix" className="section-padding bg-surface border-y border-border" aria-labelledby="faq-loewix-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-loewix-heading" className="section-title">
              Pertanyaan seputar paket Loewix 2MP
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={LOEWIX_FAQ} />
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp Penutup ── */}
      <section id="cta-loewix" className="section-padding">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Pesan paket Loewix 2MP sekarang</h2>
            <p className="section-subtitle mx-auto mt-3">
              Konsultasikan denah rumah atau tempat usaha Anda bersama tim kami. Dapatkan survei
              lokasi gratis untuk seluruh wilayah Jabodetabek.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya tertarik dengan paket Loewix 2MP ColorVu Audio. Bisa minta info jadwal survei?"
                id="loewix-bottom-wa-btn"
                className="btn-primary justify-center"
              >
                Pesan & Jadwalkan Survei
              </WhatsAppButton>
              <Link href="/paket-cctv/" id="loewix-back-paket-link" className="btn-outline justify-center">
                Lihat pilihan paket lain
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
