import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, WARRANTY } from "@/content/site";
import { HILOOK_2MP_ITEMIZED, EXTRA_CABLE } from "@/content/packages";
import { HILOOK_2MP_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.hilook2mp);

const pageUrl = `${SITE.url}${PAGES.hilook2mp.path}`;
const [coaxial] = EXTRA_CABLE;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Paket CCTV", item: `${SITE.url}/paket-cctv/` },
        { "@type": "ListItem", position: 3, name: "HiLook 2MP", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: HILOOK_2MP_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    ...HILOOK_2MP_ITEMIZED.map((item) => ({
      "@type": "Product",
      name: `Paket CCTV HiLook 2MP ${item.cameras} Kamera`,
      description: `Paket ${item.cameras} kamera HiLook 2MP Full HD, ${item.dvr}, hard disk ${item.hdd}, ${item.psu}, kabel ${item.cableMeters}m. Sudah termasuk instalasi teknisi dan garansi ${WARRANTY.hilook}.`,
      brand: { "@type": "Brand", name: "HiLook" },
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

export default function Hilook2mpPage() {
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
            <span className="text-white font-semibold">HiLook 2MP</span>
          </li>
        </ol>
      </nav>

      {/* ── Header ── */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Garansi 2 Tahun</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Paket CCTV HiLook 2MP Full HD:
            <br className="hidden sm:block" />
            <span className="text-accent"> Rincian Harga dan Komponen</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Halaman ini menyajikan rincian lengkap paket CCTV HiLook 2MP Full HD mulai dari
            2 hingga 16 titik kamera untuk bangunan rumah tinggal, ruko pertokoan, kantor operasional,
            maupun area pergudangan di kawasan Jabodetabek. Seluruh banderol harga yang tertera
            sudah meliputi perangkat kamera indoor dome dan outdoor bullet, mesin perekam DVR, hard disk,
            central power supply, konektor BNC dan DC, supporting device, kabel CCTV, jasa instalasi rapi,
            hingga pengaturan pemantauan online ke smartphone Anda.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            HiLook adalah lini produk resmi di bawah naungan pabrikan Hikvision. Seri ini sangat
            populer bagi pemilik properti yang menginginkan ketahanan komponen standar industri global,
            kejernihan sensor 1080p, serta perlindungan garansi unit selama {WARRANTY.hilook} dengan
            anggaran investasi yang tetap ramah di kantong.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Ingin melihat seri lain dengan fitur rekam suara bawaan? Kunjungi halaman{" "}
            <Link href="/paket-cctv/loewix-2mp/" className="text-accent hover:underline">
              paket Loewix 2MP ColorVu
            </Link>{" "}
            atau bandingkan seluruh pilihan di{" "}
            <Link href="/paket-cctv/" className="text-accent hover:underline">
              daftar semua paket CCTV
            </Link>
            . Untuk kepastian jalur kabel, Anda dapat mengajukan survei melalui{" "}
            <Link href="/area/" className="text-accent hover:underline">
              layanan survei Jabodetabek
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
                  Daftar harga dan isi komponen paket HiLook 2MP
                </h2>
                <p className="text-text-secondary text-sm">
                  Komposisi jumlah indoor dan outdoor dapat disesuaikan dengan denah bangunan saat survei.
                  Masa garansi unit perangkat {WARRANTY.hilook}.
                </p>
              </div>
              <div className="text-sm text-text-secondary">
                Wilayah: Jakarta, Bogor, Depok, Tangerang, Bekasi
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="overflow-x-auto border border-border rounded-lg bg-surface">
              <table className="w-full text-left text-sm">
                <thead className="bg-bg/80 border-b border-border text-white font-semibold">
                  <tr>
                    <th className="py-3.5 px-4">Paket</th>
                    <th className="py-3.5 px-4">Komposisi Kamera</th>
                    <th className="py-3.5 px-4">DVR Perekam</th>
                    <th className="py-3.5 px-4">Hard Disk</th>
                    <th className="py-3.5 px-4">Power Supply</th>
                    <th className="py-3.5 px-4">Konektor</th>
                    <th className="py-3.5 px-4">Supporting</th>
                    <th className="py-3.5 px-4">Kabel</th>
                    <th className="py-3.5 px-4 text-right">Harga Terpasang</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-text-secondary">
                  {HILOOK_2MP_ITEMIZED.map((item) => (
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
                        {item.supporting} Device
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
              * Harga di atas mencakup seluruh jasa instalasi teknisi dan konfigurasi aplikasi live view di smartphone.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Keunggulan Seri HiLook 2MP ── */}
      <section id="keunggulan-hilook" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Karakteristik dan keunggulan kamera pengawas HiLook 2MP
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                HiLook hadir sebagai jawaban bagi pelanggan yang menginginkan kamera bermutu
                tinggi dengan keandalan operasional tanpa henti 24 jam sehari. Mengadopsi teknologi
                dari induk perusahaannya, Hikvision, seri ini membawa sejumlah kelebihan mendasar:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">
                    Sensor EXIR Infrared Malam Hari
                  </h3>
                  <p className="text-sm">
                    Teknologi infra-red EXIR pada kamera outdoor bullet HiLook menghasilkan sebaran
                    cahaya inframerah yang rata dan jauh ke depan tanpa efek silau di tengah frame,
                    sehingga lingkungan gelap gulita tetap tertangkap tajam dan jelas.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">
                    Daya Tahan Fisik Standar Pabrikan
                  </h3>
                  <p className="text-sm">
                    Kamera outdoor HiLook memiliki peringkat proteksi tahan air hujan dan debu panas.
                    Casing kokoh menjamin perangkat tahan terhadap cuaca ekstrem tropis Jabodetabek
                    untuk perlindungan aset jangka panjang.
                  </p>
                </div>
              </div>

              <p>
                Resolusi 2MP Full HD 1080p memberikan jarak pengenalan wajah dan plat kendaraan yang
                cukup tajam hingga radius 10 meter. Selain itu, manajemen kompresi video pada mesin DVR
                HiLook membuat penyimpanan rekaman di hard disk menjadi sangat efisien, sehingga rekaman
                beberapa minggu ke belakang tetap tersimpan aman.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Perbandingan HiLook vs Loewix ── */}
      <section id="komparasi-loewix" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Perbandingan: Memilih antara HiLook 2MP dan Loewix 2MP
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Banyak calon pelanggan menanyakan perbedaan mendasar antara kedua seri 2MP ini.
                Keduanya memiliki keunggulan spesifik sesuai kebutuhan pengawasan Anda:
              </p>

              <div className="border border-border rounded-lg overflow-hidden my-4 bg-surface text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-5 space-y-2">
                    <span className="text-accent font-bold text-base block">HiLook 2MP</span>
                    <p className="text-white font-medium">Fokus: Ketahanan perangkat & reputasi merek</p>
                    <ul className="space-y-1.5 text-xs text-text-secondary pt-2">
                      <li>• Garansi unit 2 tahun penuh</li>
                      <li>• Sub-brand resmi Hikvision</li>
                      <li>• Penerangan malam infra-red EXIR</li>
                      <li>• Cocok untuk area outdoor keras dan kantor resmi</li>
                    </ul>
                  </div>
                  <div className="p-5 space-y-2 bg-bg/40">
                    <span className="text-white font-bold text-base block">Loewix 2MP ColorVu</span>
                    <p className="text-white font-medium">Fokus: Gambar warna malam hari & audio</p>
                    <ul className="space-y-1.5 text-xs text-text-secondary pt-2">
                      <li>• Garansi unit 1 tahun</li>
                      <li>• Gambar tetap berwarna 24 jam (ColorVu)</li>
                      <li>• Dilengkapi mikrofon built-in rekam suara</li>
                      <li>• Cocok untuk kasir, teras hunian, dan ruang toko</li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-sm">
                Jika target utama Anda adalah garansi lebih panjang (2 tahun) dan nama besar Hikvision,
                HiLook adalah pilihan terbaik. Bila Anda lebih memprioritaskan rekaman berwarna saat malam
                serta suara percakapan di area pintu masuk, pertimbangkan seri Loewix ColorVu.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Panduan Penempatan Titik ── */}
      <section id="panduan-titik" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Rekomendasi jumlah kamera untuk efektivitas keamanan
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Berdasarkan pengalaman tim lapangan kami saat mengerjakan instalasi di berbagai wilayah,
                berikut acuan jumlah titik kamera yang biasa kami sarankan:
              </p>

              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Hunian 1 lantai (2 sampai 4 titik):</strong> Mengawasi
                    akses pintu pagar depan, garasi kendaraan (carport), dan area belakang atau void samping.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Hunian 2 lantai (4 sampai 8 titik):</strong> Penambahan
                    titik pada area balkon atas, ruang keluarga utama, bordes tangga, dan jalur perimeter rumah.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Ruko dan tempat usaha (4 sampai 8 titik):</strong> Menghadap
                    tempat parkir pembeli, kasir dan meja transaksi, koridor display barang, serta gudang stok.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Kantor dan gudang besar (8 sampai 16 titik):</strong> Pemantauan
                    area bongkar muat barang, pintu akses loading dock, ruang arsip atau server, dan ruang kerja staf.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Ketentuan Garansi, Kabel, & Pembayaran ── */}
      <section id="garansi-pembayaran" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Ketentuan garansi, kabel tambahan, dan pembayaran
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
              <p>
                Kami menjalankan prosedur kerja yang transparan tanpa biaya tersembunyi:
              </p>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Garansi Unit 2 Tahun Penuh
                </h3>
                <p>
                  Unit kamera dan mesin DVR HiLook pada paket ini dilindungi garansi selama 2 tahun.
                  Bila ditemukan kerusakan cacat pabrik atau gangguan fungsi selama masa garansi, tim
                  kami siap membantu penanganan servis hingga tuntas.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Kabel Coaxial Ekstra Transparan
                </h3>
                <p>
                  Setiap paket telah dilengkapi jatah kabel coaxial RG59 plus power yang cukup panjang
                  (misal 80 meter untuk paket 4 titik). Apabila denah lokasi Anda berukuran luas dan
                  memerlukan tarikan kabel melebihi batas jatah paket, kelebihannya dihitung secara
                  transparan sebesar {coaxial.priceFormatted} per meter.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Sistem Pembayaran Bertahap
                </h3>
                <p>
                  Untuk paket 2 hingga 8 kamera, Anda baru melakukan pembayaran setelah instalasi fisik
                  selesai dan aplikasi live view di smartphone telah berfungsi normal. Untuk proyek
                  9 hingga 16 kamera, berlaku ketentuan uang muka 50 persen saat pekerjaan dimulai dan
                  pelunasan diselesaikan setelah pengujian sistem diserahkan.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kapan Tidak Perlu Paket Ini ── */}
      <section id="kapan-tidak-perlu" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan Anda sebaiknya tidak membeli paket CCTV kabel ini?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4 text-sm">
              Kami selalu mengutamakan kejujuran solusi bagi kebutuhan setiap pemilik properti:
            </p>
            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Jika Anda hanya perlu memantau satu titik ruangan kecil sementara (misalnya kamar anak
                atau meja kasir darurat) dan memiliki akses stopkontak terdekat, kamera WiFi lepas mandiri
                sudah cukup memadai. Anda tidak perlu mengeluarkan anggaran untuk DVR, hard disk besar,
                maupun penarikan kabel instalasi.
              </p>
              <p>
                Namun, bila tujuan Anda adalah sistem pengawasan permanen yang tahan lama, tidak membebani
                bandwidth WiFi rumah, serta memiliki rekaman fisik terlindungi di dalam brankas DVR, maka
                instalasi kabel terstruktur dari HiLook ini adalah solusi yang tepat dan bernilai jangka panjang.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ HiLook 2MP ── */}
      <section id="faq-hilook" className="section-padding" aria-labelledby="faq-hilook-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-hilook-heading" className="section-title">
              Pertanyaan seputar paket HiLook 2MP
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={HILOOK_2MP_FAQ} />
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp Penutup ── */}
      <section id="cta-hilook" className="section-padding bg-surface border-t border-border">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Pesan paket HiLook 2MP sekarang</h2>
            <p className="section-subtitle mx-auto mt-3">
              Jadwalkan survei teknisi gratis ke lokasi hunian atau tempat usaha Anda di kawasan Jabodetabek.
              Diskusikan kebutuhan sudut pandang dan estimasi kabel bersama kami.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya tertarik dengan paket CCTV HiLook 2MP Full HD. Bisa minta info jadwal survei ke lokasi saya?"
                id="hilook-bottom-wa-btn"
                className="btn-primary justify-center"
              >
                Pesan & Jadwalkan Survei
              </WhatsAppButton>
              <Link href="/paket-cctv/" id="hilook-back-paket-link" className="btn-outline justify-center">
                Lihat pilihan paket lain
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
