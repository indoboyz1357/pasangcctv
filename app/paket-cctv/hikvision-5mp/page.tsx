import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, WARRANTY } from "@/content/site";
import { HIKVISION_5MP_ITEMIZED, EXTRA_CABLE } from "@/content/packages";
import { HIKVISION_5MP_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.hikvision5mp);

const pageUrl = `${SITE.url}${PAGES.hikvision5mp.path}`;
const [coaxial] = EXTRA_CABLE;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Paket CCTV", item: `${SITE.url}/paket-cctv/` },
        { "@type": "ListItem", position: 3, name: "Hikvision 5MP", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: HIKVISION_5MP_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    ...HIKVISION_5MP_ITEMIZED.map((item) => ({
      "@type": "Product",
      name: `Paket CCTV Hikvision 5MP ${item.cameras} Kamera`,
      description: `Paket ${item.cameras} kamera Hikvision 5MP Ultra HD, ${item.dvr}, hard disk ${item.hdd}, ${item.psu}, kabel ${item.cableMeters}m. Sudah termasuk instalasi teknisi dan garansi ${WARRANTY.hikvision}.`,
      brand: { "@type": "Brand", name: "Hikvision" },
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

export default function Hikvision5mpPage() {
  return (
    <>
      <JsonLd data={jsonLd} />

      {/* Spacer untuk fixed navbar */}
      <div className="h-16" aria-hidden="true" />

      {/* Breadcrumb */}
      <nav
        aria-label="Breadcrumb"
        className="container-max px-4 sm:px-6 lg:px-8 py-4 text-sm text-text-secondary"
      >
        <ol className="flex items-center gap-2">
          <li>
            <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
          </li>
          <li aria-hidden="true">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </li>
          <li>
            <Link href="/paket-cctv/" className="hover:text-white transition-colors">Paket CCTV</Link>
          </li>
          <li aria-hidden="true">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </li>
          <li>
            <span className="text-white font-semibold">Hikvision 5MP</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Garansi 2 Tahun</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Paket CCTV Hikvision 5MP Ultra HD:
            <br className="hidden sm:block" />
            <span className="text-accent"> Rincian Harga dan Komponen</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Halaman ini memuat daftar lengkap paket CCTV Hikvision 5MP Ultra HD mulai dari 2 hingga
            16 titik kamera untuk rumah tinggal, ruko pertokoan, kantor operasional, maupun area
            pergudangan di seluruh wilayah Jabodetabek. Seluruh harga paket yang tertera sudah
            mencakup unit kamera Hikvision 5MP indoor dome dan outdoor bullet, mesin perekam DVR
            Hikvision 5MP, hard disk penyimpanan, power supply central, konektor BNC dan DC,
            supporting device, kabel CCTV coaxial, jasa pemasangan oleh teknisi, hingga
            pengaturan pemantauan online ke smartphone Anda.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Hikvision adalah produsen perangkat keamanan dan pengawas video nomor satu di dunia
            yang digunakan secara luas pada perbankan, bandara, instansi pemerintah, dan pusat
            perbelanjaan. Seri 5MP membawa resolusi{" "}
            <strong className="text-white">2,5 kali lebih tinggi dari 2MP Full HD</strong>, sehingga
            detail rekaman seperti nomor plat kendaraan dan wajah dapat dikenali lebih jauh dan
            lebih akurat. Seluruh komponen pada paket ini dilindungi garansi unit selama {WARRANTY.hikvision}.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Ingin membandingkan dengan seri 2MP? Kunjungi halaman{" "}
            <Link href="/paket-cctv/hikvision-2mp/" className="text-accent hover:underline">
              paket Hikvision 2MP Full HD
            </Link>{" "}
            atau bandingkan seluruh pilihan di{" "}
            <Link href="/paket-cctv/" className="text-accent hover:underline">
              daftar semua paket CCTV
            </Link>
            . Untuk kepastian jangkauan teknisi, cek{" "}
            <Link href="/area/" className="text-accent hover:underline">
              area layanan Jabodetabek
            </Link>
            .
          </p>
        </div>
      </section>

      {/* Tabel Rincian Komponen */}
      <section id="tabel-rincian" className="section-padding pt-0">
        <div className="container-max">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-white mb-2">
                  Daftar harga dan isi komponen paket Hikvision 5MP
                </h2>
                <p className="text-text-secondary text-sm">
                  Komposisi jumlah indoor dan outdoor dapat disesuaikan dengan denah bangunan saat survei.
                  Masa garansi unit perangkat {WARRANTY.hikvision}.
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
                  {HIKVISION_5MP_ITEMIZED.map((item) => (
                    <tr key={item.cameras} id={`paket-${item.cameras}-kamera`} className="hover:bg-bg/40 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-white whitespace-nowrap">{item.cameras} Kamera</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">{item.indoor} Indoor + {item.outdoor} Outdoor</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">{item.dvr}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">{item.hdd}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">{item.psu}</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">{item.connectors} BNC + DC</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">{item.supporting} Device</td>
                      <td className="py-3.5 px-4 whitespace-nowrap">{item.cableMeters} Meter</td>
                      <td className="py-3.5 px-4 font-mono font-bold text-accent text-right whitespace-nowrap">{item.priceFormatted}</td>
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

      {/* Keunggulan Hikvision 5MP */}
      <section id="keunggulan-hikvision-5mp" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Keunggulan kamera Hikvision 5MP untuk pengawasan area luas
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hikvision 5MP menggabungkan reputasi merek nomor satu dunia dengan resolusi
                tinggi yang cocok untuk identifikasi jarak jauh. Berikut keunggulan utamanya:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Resolusi 5MP Ultra HD (3K)</h3>
                  <p className="text-sm">
                    Resolusi 2960 x 1665 piksel menghasilkan sekitar 2,5 kali lebih banyak detail
                    dibanding 2MP Full HD. Identifikasi nomor plat kendaraan, wajah tamu, dan
                    detail aktivitas dapat dilakukan lebih akurat dari rekaman DVR.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Merek Nomor 1 Dunia</h3>
                  <p className="text-sm">
                    Hikvision digunakan secara luas oleh institusi keuangan, bandara internasional,
                    dan pemerintah di lebih dari 180 negara. Reputasi ini menjamin kualitas sensor,
                    keandalan komponen, dan dukungan ekosistem jangka panjang.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Infrared EXIR Malam Hari</h3>
                  <p className="text-sm">
                    Teknologi EXIR pada kamera outdoor bullet Hikvision 5MP menghasilkan penerangan
                    infrared yang merata ke seluruh frame tanpa efek silau di tengah, sehingga
                    rekaman malam hari tetap jernih dan seimbang.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Garansi Unit 2 Tahun Penuh</h3>
                  <p className="text-sm">
                    Seluruh komponen kamera dan DVR Hikvision 5MP pada paket ini dilindungi garansi
                    unit selama {WARRANTY.hikvision}. Tim kami siap membantu penanganan jika terdapat
                    gangguan fungsi selama masa garansi.
                  </p>
                </div>
              </div>

              <p>
                Paket CCTV Hikvision 5MP ini sangat direkomendasikan untuk area parkir luas,
                gerbang komplek perumahan, lorong gudang panjang, area loading dock, serta
                fasilitas komersial dan industri yang membutuhkan rekaman berkualitas tinggi
                untuk keperluan audit keamanan dan investigasi insiden.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Perbandingan Hikvision 5MP vs 2MP */}
      <section id="komparasi-2mp" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan memilih Hikvision 5MP, kapan cukup 2MP?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Berikut panduan praktis untuk memilih antara Hikvision 5MP dan 2MP berdasarkan
                kebutuhan nyata di lapangan:
              </p>

              <div className="border border-border rounded-lg overflow-hidden my-4 bg-surface text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-5 space-y-2">
                    <span className="text-accent font-bold text-base block">Pilih Hikvision 5MP jika...</span>
                    <ul className="space-y-1.5 text-xs text-text-secondary pt-1">
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Area parkir atau gerbang yang perlu terbaca plat nomor</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Gudang atau loading dock dengan jarak pandang jauh</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Fasilitas komersial, industri, atau institusi resmi</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Butuh detail zoom rekaman yang tetap tajam</span></li>
                    </ul>
                  </div>
                  <div className="p-5 space-y-2 bg-bg/40">
                    <span className="text-white font-bold text-base block">Cukup Hikvision 2MP jika...</span>
                    <ul className="space-y-1.5 text-xs text-text-secondary pt-1">
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Pemantauan ruang kerja atau interior kantor</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Teras, pintu masuk rumah, dan garasi</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Kasir toko dan ruang transaksi jarak dekat</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Anggaran lebih terbatas namun tetap butuh merek Hikvision</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-sm">
                Tim teknisi kami akan memberikan rekomendasi yang tepat saat survei lokasi gratis.
                Tidak ada kewajiban memesan setelah survei dilakukan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Panduan Jumlah Kamera */}
      <section id="panduan-titik" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Rekomendasi jumlah kamera Hikvision 5MP untuk berbagai jenis bangunan
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Berdasarkan pengalaman tim lapangan kami mengerjakan instalasi di berbagai jenis
                properti di Jabodetabek, berikut acuan jumlah titik kamera paket CCTV Hikvision 5MP:
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 1 lantai (2 sampai 4 kamera):</strong> Mengawasi
                    akses pintu pagar depan, garasi kendaraan, dan area belakang. Resolusi 5MP memastikan
                    plat nomor kendaraan tamu dapat terbaca jelas dari rekaman.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 2 lantai (4 sampai 8 kamera):</strong> Penambahan
                    titik pada area balkon atas, tangga dalam, ruang keluarga utama, dan jalur perimeter
                    rumah untuk pengawasan menyeluruh 24 jam.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Ruko dan tempat usaha (4 sampai 8 kamera):</strong> Menghadap
                    area parkir pembeli, kasir dan meja transaksi, koridor display barang, dan gudang stok.
                    Resolusi tinggi memudahkan identifikasi saat terjadi insiden.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Kantor, gudang, dan fasilitas industri (8 sampai 16 kamera):</strong> Pemantauan
                    area bongkar muat, pintu loading dock, ruang server, lobi penerimaan tamu, area
                    parkir luas, dan seluruh perimeter bangunan. Paket ini ideal untuk keamanan korporat
                    dan kebutuhan audit.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Garansi & Pembayaran */}
      <section id="garansi-pembayaran" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Ketentuan garansi, kabel tambahan, dan pembayaran
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
              <p>Kami menjalankan prosedur kerja yang transparan tanpa biaya tersembunyi:</p>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">Garansi Unit 2 Tahun Penuh</h3>
                <p>
                  Unit kamera dan mesin DVR Hikvision 5MP pada paket ini dilindungi garansi
                  selama {WARRANTY.hikvision}. Bila ditemukan kerusakan cacat pabrik atau gangguan
                  fungsi selama masa garansi, tim kami siap membantu penanganan servis hingga tuntas.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">Kabel Coaxial Ekstra Transparan</h3>
                <p>
                  Setiap paket telah dilengkapi jatah kabel coaxial RG59 plus power yang cukup
                  panjang sesuai jumlah kamera (contoh: 80 meter untuk paket 4 kamera, 160 meter
                  untuk paket 8 kamera). Apabila denah lokasi Anda berukuran luas dan memerlukan
                  kabel tambahan melebihi batas jatah paket, kelebihannya dihitung secara transparan
                  sebesar {coaxial.priceFormatted} per meter.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">Sistem Pembayaran Bertahap</h3>
                <p>
                  Untuk paket 2 hingga 8 kamera, Anda baru melakukan pembayaran setelah
                  instalasi fisik selesai dan aplikasi live view di smartphone telah berfungsi
                  normal. Untuk proyek 9 hingga 16 kamera, berlaku ketentuan uang muka 50 persen
                  saat pekerjaan dimulai dan pelunasan diselesaikan setelah pengujian sistem serah terima.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Kapan Tidak Perlu */}
      <section id="kapan-tidak-perlu" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan Anda sebaiknya mempertimbangkan paket lain?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4 text-sm">
              Kami selalu mengutamakan rekomendasi yang jujur sesuai kebutuhan nyata:
            </p>
            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Jika kebutuhan Anda adalah pemantauan area dalam ruangan standar seperti ruang
                kerja, kamar, atau meja kasir toko kecil pada jarak dekat, paket Hikvision 2MP
                atau HiLook 2MP sudah sangat memadai dengan biaya yang lebih rendah. Resolusi
                5MP tidak memberikan perbedaan signifikan untuk jarak pandang di bawah 5 meter.
              </p>
              <p>
                Paket CCTV Hikvision 5MP ini paling bernilai ketika Anda membutuhkan kualitas
                gambar tinggi untuk identifikasi akurat di area terbuka luas, rekaman yang tetap
                detail saat di-zoom, serta sistem pengawasan premium bergaransi panjang dari merek
                dengan rekam jejak terpercaya secara global. Ini adalah investasi tepat untuk
                properti komersial dan fasilitas skala menengah hingga besar.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-hikvision-5mp" className="section-padding" aria-labelledby="faq-hikvision5mp-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-hikvision5mp-heading" className="section-title">
              Pertanyaan seputar paket Hikvision 5MP
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={HIKVISION_5MP_FAQ} />
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section id="cta-hikvision5mp" className="section-padding bg-surface border-t border-border">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Pesan paket Hikvision 5MP sekarang</h2>
            <p className="section-subtitle mx-auto mt-3">
              Jadwalkan survei teknisi gratis ke lokasi hunian atau tempat usaha Anda di kawasan Jabodetabek.
              Diskusikan kebutuhan sudut pandang, estimasi titik kamera, dan anggaran bersama kami.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya tertarik dengan paket CCTV Hikvision 5MP Ultra HD. Bisa minta info jadwal survei ke lokasi saya?"
                id="hikvision5mp-bottom-wa-btn"
                className="btn-primary justify-center"
              >
                Pesan &amp; Jadwalkan Survei
              </WhatsAppButton>
              <Link href="/paket-cctv/" id="hikvision5mp-back-paket-link" className="btn-outline justify-center">
                Lihat pilihan paket lain
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
