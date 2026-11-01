import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, WARRANTY } from "@/content/site";
import { HILOOK_5MP_ITEMIZED, EXTRA_CABLE } from "@/content/packages";
import { HILOOK_5MP_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.hilook5mp);

const pageUrl = `${SITE.url}${PAGES.hilook5mp.path}`;
const [coaxial] = EXTRA_CABLE;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Paket CCTV", item: `${SITE.url}/paket-cctv/` },
        { "@type": "ListItem", position: 3, name: "HiLook 5MP", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: HILOOK_5MP_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    ...HILOOK_5MP_ITEMIZED.map((item) => ({
      "@type": "Product",
      name: `Paket CCTV HiLook 5MP ${item.cameras} Kamera`,
      description: `Paket ${item.cameras} kamera HiLook 5MP Ultra HD, ${item.dvr}, hard disk ${item.hdd}, ${item.psu}, kabel ${item.cableMeters}m. Sudah termasuk instalasi teknisi dan garansi ${WARRANTY.hilook}.`,
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

export default function Hilook5mpPage() {
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
            <span className="text-white font-semibold">HiLook 5MP</span>
          </li>
        </ol>
      </nav>

      {/* Header */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Garansi 2 Tahun</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Paket CCTV HiLook 5MP Ultra HD:
            <br className="hidden sm:block" />
            <span className="text-accent"> Rincian Harga dan Komponen</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Halaman ini memuat daftar lengkap paket CCTV HiLook 5MP Ultra HD mulai dari 2 hingga
            16 titik kamera untuk rumah tinggal, ruko pertokoan, kantor operasional, maupun area
            pergudangan di seluruh wilayah Jabodetabek. Seluruh harga paket yang tertera sudah
            mencakup unit kamera HiLook 5MP indoor dome dan outdoor bullet, mesin perekam DVR
            HiLook 5MP, hard disk penyimpanan, power supply central, konektor BNC dan DC,
            supporting device, kabel CCTV coaxial, jasa pemasangan oleh teknisi, hingga
            pengaturan pemantauan online ke smartphone Anda.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Seri HiLook 5MP adalah pilihan tepat ketika detail gambar menjadi prioritas utama.
            Resolusi 5MP atau sekitar 3K menghasilkan sekitar{" "}
            <strong className="text-white">2,5 kali jumlah piksel</strong> dibanding kamera 2MP
            Full HD. Perbedaan ini terasa nyata saat memutar ulang rekaman: nomor plat kendaraan
            terbaca lebih jauh, wajah terlihat lebih jelas, dan detail sekitar area parkir atau
            pintu masuk usaha tampil lebih tajam. Komponen DVR dan kamera HiLook 5MP pada paket
            ini dilindungi garansi unit selama {WARRANTY.hilook}.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Ingin membandingkan dengan seri 2MP yang lebih hemat? Kunjungi halaman{" "}
            <Link href="/paket-cctv/hilook-2mp/" className="text-accent hover:underline">
              paket HiLook 2MP Full HD
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
                  Daftar harga dan isi komponen paket HiLook 5MP
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
                  {HILOOK_5MP_ITEMIZED.map((item) => (
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

      {/* Keunggulan HiLook 5MP */}
      <section id="keunggulan-hilook-5mp" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Mengapa memilih kamera HiLook 5MP dibanding 2MP?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Kamera HiLook 5MP atau resolusi 3K (2960 x 1665 piksel) menghadirkan detail
                gambar yang jauh melampaui seri 2MP. Berikut keunggulan utama yang membuat seri
                ini dipilih untuk kebutuhan pengawasan area luas dan tempat usaha:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Resolusi 5MP Ultra HD (3K)</h3>
                  <p className="text-sm">
                    Dengan 2960 x 1665 piksel, kamera HiLook 5MP menghasilkan gambar sekitar
                    2,5 kali lebih detail dibanding 2MP Full HD. Nomor plat kendaraan dapat
                    terbaca pada jarak lebih jauh, dan fitur digital zoom pada rekaman masih
                    mempertahankan ketajaman gambar yang memadai untuk identifikasi.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Infrared EXIR Malam Hari</h3>
                  <p className="text-sm">
                    Teknologi penerangan infra-red EXIR pada kamera outdoor bullet HiLook 5MP
                    menghasilkan sebaran cahaya yang rata dan merata ke seluruh frame, sehingga
                    rekaman malam hari tetap jernih tanpa silau berlebihan di bagian tengah gambar.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Ketahanan Fisik Standar Industri</h3>
                  <p className="text-sm">
                    Kamera outdoor HiLook 5MP memiliki rating proteksi tahan air dan debu,
                    dirancang untuk operasional tanpa henti 24 jam di kondisi cuaca tropis
                    Jabodetabek yang lembap dan panas sepanjang tahun.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">Garansi Unit 2 Tahun Penuh</h3>
                  <p className="text-sm">
                    Seluruh komponen kamera dan DVR HiLook 5MP pada paket ini dilindungi garansi
                    unit selama {WARRANTY.hilook}. Bila terjadi gangguan fungsi dalam masa garansi,
                    tim kami siap membantu penanganan hingga tuntas.
                  </p>
                </div>
              </div>

              <p>
                Resolusi tinggi 5MP sangat direkomendasikan untuk area parkir luar, pintu
                gerbang komplek, lorong gudang panjang, atau area bongkar muat barang di mana
                identifikasi kendaraan dan orang sangat penting. Untuk pemantauan dalam
                ruangan standar seperti ruang kerja, ruang tamu, atau teras rumah, seri 2MP
                sudah lebih dari memadai dengan biaya investasi yang lebih rendah.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Perbandingan 5MP vs 2MP */}
      <section id="komparasi-2mp" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan memilih HiLook 5MP, kapan cukup 2MP?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Banyak pelanggan menanyakan apakah harus memilih 5MP atau 2MP. Berikut panduan
                praktis berdasarkan pengalaman tim instalasi kami di lapangan:
              </p>

              <div className="border border-border rounded-lg overflow-hidden my-4 bg-surface text-sm">
                <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-border">
                  <div className="p-5 space-y-2">
                    <span className="text-accent font-bold text-base block">Pilih HiLook 5MP jika...</span>
                    <ul className="space-y-1.5 text-xs text-text-secondary pt-1">
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Area parkir luas yang perlu terbaca plat nomor</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Pintu gerbang komplek atau toko dengan lalu lintas padat</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Gudang atau area loading dock dengan jarak pandang jauh</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Ingin kemampuan digital zoom rekaman yang tetap tajam</span></li>
                    </ul>
                  </div>
                  <div className="p-5 space-y-2 bg-bg/40">
                    <span className="text-white font-bold text-base block">Cukup HiLook 2MP jika...</span>
                    <ul className="space-y-1.5 text-xs text-text-secondary pt-1">
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Pemantauan ruang kerja atau interior kantor</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Teras dan pintu masuk rumah hingga garasi</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Kasir toko dan ruang transaksi jarak dekat</span></li>
                      <li className="flex items-start gap-1.5"><IconCheck /><span>Anggaran terbatas namun butuh garansi 2 tahun</span></li>
                    </ul>
                  </div>
                </div>
              </div>

              <p className="text-sm">
                Jika masih ragu, teknisi kami akan merekomendasikan pilihan yang sesuai
                saat survei lokasi gratis. Tidak ada kewajiban pesan setelah survei.
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
              Rekomendasi jumlah kamera HiLook 5MP untuk berbagai jenis bangunan
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Berdasarkan pengalaman tim lapangan kami mengerjakan instalasi di berbagai jenis
                properti di Jabodetabek, berikut acuan jumlah titik kamera paket CCTV HiLook 5MP
                yang biasa kami sarankan:
              </p>
              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 1 lantai (2 sampai 4 kamera):</strong> Mengawasi
                    akses pintu pagar depan, garasi kendaraan, dan area belakang. Dengan resolusi 5MP,
                    plat nomor kendaraan tamu dapat terbaca lebih jelas dari rekaman.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 2 lantai (4 sampai 8 kamera):</strong> Penambahan
                    titik pada area balkon atas, tangga dalam, ruang keluarga utama, dan jalur perimeter
                    rumah untuk pengawasan menyeluruh.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Ruko dan tempat usaha (4 sampai 8 kamera):</strong> Menghadap
                    area parkir pembeli, kasir dan meja transaksi, koridor display barang, serta gudang stok.
                    Resolusi 5MP memastikan wajah pelanggan dan aktivitas kasir terekam jernih.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Kantor dan gudang besar (8 sampai 16 kamera):</strong> Pemantauan
                    area bongkar muat, pintu loading dock, ruang server, lobi penerimaan tamu, dan area
                    parkir luas. Paket ini sangat ideal untuk kebutuhan pengawasan korporat.
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
                  Unit kamera dan mesin DVR HiLook 5MP pada paket ini dilindungi garansi
                  selama {WARRANTY.hilook}. Bila ditemukan kerusakan cacat pabrik atau gangguan
                  fungsi selama masa garansi, tim kami siap membantu penanganan servis hingga tuntas.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">Kabel Coaxial Ekstra Transparan</h3>
                <p>
                  Setiap paket telah dilengkapi jatah kabel coaxial RG59 plus power yang cukup
                  panjang sesuai jumlah kamera (contoh: 80 meter untuk paket 4 kamera, 160 meter
                  untuk paket 8 kamera). Apabila denah lokasi Anda berukuran luas dan memerlukan
                  tarikan kabel melebihi batas jatah paket, kelebihannya dihitung secara transparan
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
              Kami selalu mengutamakan rekomendasi yang jujur sesuai kebutuhan nyata setiap pelanggan:
            </p>
            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Jika kebutuhan Anda adalah pemantauan area dalam ruangan standar seperti ruang
                kerja, kamar, atau kasir toko kecil pada jarak dekat, paket HiLook 2MP atau
                Loewix 2MP sudah sangat memadai dengan harga yang lebih terjangkau. Resolusi 5MP
                tidak memberikan manfaat tambahan yang signifikan untuk jarak pandang pendek di
                bawah 5 meter.
              </p>
              <p>
                Paket CCTV HiLook 5MP ini paling bernilai ketika Anda membutuhkan detail gambar
                tinggi untuk identifikasi kendaraan atau orang di area terbuka yang luas, resolusi
                zoom digital yang tetap tajam saat memutar rekaman, serta sistem pengawasan
                permanen bergaransi panjang yang tidak membebani bandwidth internet rumah atau kantor.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq-hilook-5mp" className="section-padding" aria-labelledby="faq-hilook5mp-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-hilook5mp-heading" className="section-title">
              Pertanyaan seputar paket HiLook 5MP
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={HILOOK_5MP_FAQ} />
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section id="cta-hilook5mp" className="section-padding bg-surface border-t border-border">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Pesan paket HiLook 5MP sekarang</h2>
            <p className="section-subtitle mx-auto mt-3">
              Jadwalkan survei teknisi gratis ke lokasi hunian atau tempat usaha Anda di kawasan Jabodetabek.
              Diskusikan kebutuhan sudut pandang, estimasi titik kamera, dan anggaran bersama kami.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya tertarik dengan paket CCTV HiLook 5MP Ultra HD. Bisa minta info jadwal survei ke lokasi saya?"
                id="hilook5mp-bottom-wa-btn"
                className="btn-primary justify-center"
              >
                Pesan &amp; Jadwalkan Survei
              </WhatsAppButton>
              <Link href="/paket-cctv/" id="hilook5mp-back-paket-link" className="btn-outline justify-center">
                Lihat pilihan paket lain
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
