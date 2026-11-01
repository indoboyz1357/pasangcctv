import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, WARRANTY } from "@/content/site";
import { HIKVISION_2MP_ITEMIZED, EXTRA_CABLE } from "@/content/packages";
import { HIKVISION_2MP_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.hikvision2mp);

const pageUrl = `${SITE.url}${PAGES.hikvision2mp.path}`;
const [coaxial] = EXTRA_CABLE;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Paket CCTV", item: `${SITE.url}/paket-cctv/` },
        { "@type": "ListItem", position: 3, name: "Hikvision 2MP", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: HIKVISION_2MP_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
    ...HIKVISION_2MP_ITEMIZED.map((item) => ({
      "@type": "Product",
      name: `Paket CCTV Hikvision 2MP ${item.cameras} Kamera`,
      description: `Paket ${item.cameras} kamera Hikvision 2MP Full HD, ${item.dvr}, hard disk ${item.hdd}, ${item.psu}, kabel ${item.cableMeters}m. Sudah termasuk instalasi teknisi dan garansi ${WARRANTY.hikvision}.`,
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

export default function Hikvision2mpPage() {
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
            <span className="text-white font-semibold">Hikvision 2MP</span>
          </li>
        </ol>
      </nav>

      {/* ── Header ── */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Standar Industri Global</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Paket CCTV Hikvision 2MP Full HD:
            <br className="hidden sm:block" />
            <span className="text-accent"> Rincian Harga dan Komponen</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Halaman ini memuat daftar lengkap paket CCTV Hikvision 2MP Full HD mulai dari
            2 hingga 16 titik kamera untuk kebutuhan rumah tinggal eksklusif, ruko komersial, gedung perkantoran,
            hingga fasilitas pergudangan di seluruh area Jabodetabek. Seluruh rincian biaya yang tercantum
            di bawah sudah mencakup unit kamera indoor dan outdoor Hikvision, mesin DVR Turbo HD, hard disk pengawasan,
            power supply sentral, konektor BNC dan DC, supporting device, kabel CCTV, jasa instalasi rapi oleh teknisi,
            serta konfigurasi pemantauan ke smartphone Anda.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Hikvision adalah produsen perangkat sistem keamanan terbesar dan paling diakui di dunia. Seri 2MP Full HD
            menjadi tolok ukur industri untuk kestabilan sinyal video, ketahanan fisik kamera di berbagai kondisi cuaca,
            serta masa pakai perangkat yang panjang dengan dukungan garansi unit selama {WARRANTY.hikvision}.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Mencari opsi yang lebih ekonomis atau fitur warna malam hari? Bandingkan dengan{" "}
            <Link href="/paket-cctv/hilook-2mp/" className="text-accent hover:underline">
              paket HiLook 2MP
            </Link>{" "}
            atau{" "}
            <Link href="/paket-cctv/loewix-2mp/" className="text-accent hover:underline">
              paket Loewix 2MP ColorVu Audio
            </Link>
            . Anda juga dapat melihat tabel perbandingan di{" "}
            <Link href="/paket-cctv/" className="text-accent hover:underline">
              semua paket CCTV
            </Link>{" "}
            serta mengajukan penjadwalan survei teknisi di{" "}
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
                  Daftar harga dan isi komponen paket Hikvision 2MP
                </h2>
                <p className="text-text-secondary text-sm">
                  Kombinasi kamera indoor dome dan outdoor bullet dapat disesuaikan saat survei denah lokasi.
                  Perlindungan garansi unit perangkat {WARRANTY.hikvision}.
                </p>
              </div>
              <div className="text-sm text-text-secondary">
                Cakupan survei: Jabodetabek (Gratis)
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
                  {HIKVISION_2MP_ITEMIZED.map((item) => (
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
              * Seluruh harga di atas sudah mencakup biaya jasa penarikan kabel, instalasi mounting, dan setting aplikasi pemantau di HP.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Keunggulan Kamera Hikvision 2MP ── */}
      <section id="keunggulan-hikvision" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kualitas perangkat dan reputasi global Hikvision
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Hikvision dipercaya oleh jutaan institusi perbankan, fasilitas militer, bandara internasional,
                serta kompleks pergudangan di seluruh dunia. Memilih seri kamera pengawas Hikvision 2MP memberikan
                sejumlah keunggulan teknis jangka panjang:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">
                    Sensor Gambar Berpresisi Tinggi
                  </h3>
                  <p className="text-sm">
                    Sensor CMOS bawaan Hikvision menghasilkan reproduksi warna yang sangat natural di siang hari
                    dan kontras tajam saat malam. Detail plat nomor kendaraan dan garis wajah terlihat tegas
                    tanpa distorsi berlebih pada jarak pengawasan efektif hingga 10 meter.
                  </p>
                </div>

                <div className="bg-bg/70 p-5 rounded-lg border border-border space-y-2">
                  <h3 className="font-bold text-white text-base">
                    Kompresi Cerdas H.265+
                  </h3>
                  <p className="text-sm">
                    Mesin perekam DVR Turbo HD Hikvision didukung algoritma kompresi H.265+ yang menghemat
                    kapasitas hard disk hingga 70 persen dibanding format rekaman standar. Hal ini membuat
                    riwayat rekaman tersimpan lebih lama sebelum tertimpa data baru.
                  </p>
                </div>
              </div>

              <p>
                Casing kamera outdoor Hikvision dirancang dengan material tahan cuaca ekstrem berstandar IP67,
                sehingga mampu menahan semburan hujan deras, kelembapan tinggi, dan panas matahari terik tanpa
                penurunan kualitas lensa atau kebocoran uap air.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Panduan Komparasi Seri ── */}
      <section id="panduan-pilihan" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Panduan memilih: Hikvision, HiLook, atau Loewix?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Agar investasi keamanan Anda tepat sasaran, berikut perbandingan objektif antara tiga seri 2MP
                yang kami sediakan:
              </p>

              <div className="space-y-3 my-4">
                <div className="p-4 rounded-lg bg-surface border border-border">
                  <h3 className="font-bold text-white text-base mb-1">
                    Hikvision 2MP (Pilihan Standar Utama & Bisnis)
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Ditujukan untuk pemilik rumah tinggal prestisius, ruko niaga ramai, perkantoran, dan tempat
                    usaha yang memprioritaskan ketahanan perangkat teruji, sensor minim noise, dan nilai investasi
                    jangka panjang dengan garansi 2 tahun.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface border border-border">
                  <h3 className="font-bold text-white text-base mb-1">
                    HiLook 2MP (Pilihan Efisien dari Hikvision)
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Lini produk di bawah Hikvision yang menawarkan keandalan sensor serupa dan garansi 2 tahun,
                    namun dengan harga paket yang lebih terjangkau untuk anggaran proyek yang terukur.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-surface border border-border">
                  <h3 className="font-bold text-white text-base mb-1">
                    Loewix 2MP ColorVu (Pilihan Rekam Suara & Gambar Malam Berwarna)
                  </h3>
                  <p className="text-sm text-text-secondary">
                    Pilihan terbaik jika kebutuhan utama Anda adalah rekaman video yang tetap berwarna terang
                    sepanjang malam serta mikrofon bawaan untuk mendengar suara percakapan satu arah di area kasir
                    atau gerbang masuk rumah.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Rekomendasi Titik Kamera ── */}
      <section id="rekomendasi-titik" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Panduan menentukan jumlah titik kamera di lokasi Anda
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Berdasarkan survei teknisi kami di lapangan, berikut acuan komposisi jumlah kamera yang paling efektif:
              </p>

              <ul className="space-y-3 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 1 lantai (2 sampai 4 titik):</strong> Melindungi
                    pintu pagar masuk, garasi carport luar, serta lorong samping atau pintu akses dapur.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Rumah 2 lantai (4 sampai 8 titik):</strong> Menjangkau
                    seluruh perimeter lantai bawah ditambah balkon lantai atas, bordes tangga, dan teras utama.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Ruko komersial 2 sampai 3 lantai (4 sampai 8 titik):</strong> Pengawasan
                    ketat di area kasir kasir pembayaran, display rak produk, pintu loading barang, dan parkir luar.
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>
                    <strong className="text-white">Kantor dan gudang besar (8 sampai 16 titik):</strong> Mencakup
                    lobi resepsionis, ruang administrasi kerja, koridor akses, ruang server utama, dan area bongkar muat.
                  </span>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Garansi, Kabel, & Pembayaran ── */}
      <section id="garansi-pembayaran" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Ketentuan garansi unit, kabel ekstra, dan alur pembayaran
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
              <p>
                Prinsip kerja tim PasangCCTV bertumpu pada kejelasan kesepakatan dan rasa aman pelanggan:
              </p>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Garansi Unit 2 Tahun Penuh
                </h3>
                <p>
                  Seluruh kamera dan DVR Hikvision pada paket ini dijamin garansi selama 2 tahun.
                  Bila ada kendala operasional pada perangkat selama periode garansi, teknisi kami siap
                  melakukan pengecekan sistem dan penanganan perbaikan unit.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Kabel Coaxial Ekstra Transparan
                </h3>
                <p>
                  Setiap paket telah menyertakan jatah tarikan kabel coaxial RG59 plus power yang memadai.
                  Jika denah bangunan Anda memiliki jarak bentang yang panjang dan memerlukan kabel tambahan
                  di atas kuota paket, biayanya dikenakan secara terbuka sebesar {coaxial.priceFormatted} per meter.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="font-bold text-white text-base">
                  Alur Pembayaran Aman & Nyaman
                </h3>
                <p>
                  Untuk paket 2 sampai 8 kamera, Anda baru melakukan pelunasan setelah semua kamera terpasang
                  rapi dan aplikasi live view di smartphone Anda telah aktif serta diverifikasi bersama teknisi.
                  Untuk paket 9 sampai 16 kamera, berlaku uang muka 50 persen saat pekerjaan dimulai dan pelunasan
                  diselesaikan setelah serah terima tuntas.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kapan Tidak Butuh Paket Ini ── */}
      <section id="kapan-tidak-perlu" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan Anda sebaiknya tidak memilih paket CCTV kabel ini?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4 text-sm">
              Kami selalu memberi saran objektif agar pengeluaran Anda sebanding dengan kebutuhan nyata:
            </p>
            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Jika Anda hanya membutuhkan satu titik kamera pemantau sementara di ruang kerja pribadi atau
                kamar tidur anak dengan colokan listrik tepat di sampingnya, kamera WiFi wireless lepas dari toko
                online sudah sangat mencukupi tanpa perlu mengeluarkan biaya instalasi teknisi dan unit DVR.
              </p>
              <p>
                Namun, apabila prioritas Anda adalah sistem keamanan terpusat yang bekerja tanpa henti, tidak
                menggantungkan rekaman pada koneksi WiFi ruangan, dan memiliki kabel terlindung rapi di dalam plafon,
                paket instalasi kabel Hikvision 2MP ini adalah pilihan yang paling teruji dan tahan lama.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ Hikvision 2MP ── */}
      <section id="faq-hikvision" className="section-padding" aria-labelledby="faq-hikvision-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-hikvision-heading" className="section-title">
              Pertanyaan seputar paket Hikvision 2MP
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={HIKVISION_2MP_FAQ} />
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp Penutup ── */}
      <section id="cta-hikvision" className="section-padding bg-surface border-t border-border">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Pesan paket Hikvision 2MP sekarang</h2>
            <p className="section-subtitle mx-auto mt-3">
              Konsultasikan kebutuhan denah keamanan bangunan Anda bersama teknisi berpengalaman kami.
              Dapatkan jadwal survei lokasi gratis untuk seluruh kawasan Jabodetabek.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya tertarik dengan paket CCTV Hikvision 2MP Full HD. Bisa minta info jadwal survei ke alamat saya?"
                id="hikvision-bottom-wa-btn"
                className="btn-primary justify-center"
              >
                Pesan & Jadwalkan Survei
              </WhatsAppButton>
              <Link href="/paket-cctv/" id="hikvision-back-paket-link" className="btn-outline justify-center">
                Lihat pilihan paket lain
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
