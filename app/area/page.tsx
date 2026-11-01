import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE } from "@/content/site";
import { AREA_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.area);

const pageUrl = `${SITE.url}${PAGES.area.path}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      url: pageUrl,
      name: PAGES.area.title,
      serviceType: "Jasa Pasang CCTV",
      provider: { "@id": `${SITE.url}/#localbusiness` },
      areaServed: [
        { "@type": "City", name: "Jakarta" },
        { "@type": "City", name: "Tangerang" },
        { "@type": "City", name: "Tangerang Selatan" },
        { "@type": "City", name: "Depok" },
        { "@type": "City", name: "Bogor" },
        { "@type": "City", name: "Bekasi" },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Area Layanan", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: AREA_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

function IconCheck() {
  return (
    <svg className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export default function AreaLayanan() {
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
            <span className="text-white font-semibold">Area Layanan</span>
          </li>
        </ol>
      </nav>

      {/* ── Header ── */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Wilayah operasional</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Area Pasang CCTV Jabodetabek:
            <br className="hidden sm:block" />
            <span className="text-accent"> Jangkauan Survei dan Pemasangan Gratis</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Halaman area pasang CCTV ini memuat peta cakupan wilayah survei dan
            pemasangan teknisi kami di seluruh Jakarta, Bogor, Depok, Tangerang,
            dan Bekasi. Dari workshop pusat kami di Ciledug, teknisi kami berkeliling
            setiap hari untuk memasang sistem kamera pengawas di rumah tinggal, ruko,
            kantor, hingga pergudangan industri.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Kami memberlakukan layanan survei denah lokasi secara gratis tanpa biaya
            transportasi tambahan. Teknisi datang langsung memeriksa jalur kabel,
            menghitung sudut titik buta, dan merekomendasikan jumlah kamera yang pas
            sesuai denah fisik properti Anda.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Rincian perangkat dan biaya lengkap dapat Anda pelajari di halaman{" "}
            <Link href="/paket-cctv/" className="text-accent hover:underline">
              daftar harga paket CCTV terpasang
            </Link>{" "}
            atau langsung membaca alur komunikasi di{" "}
            <Link href="/kontak/" className="text-accent hover:underline">
              halaman kontak kami
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Rincian Wilayah Layanan ── */}
      <section id="wilayah-detail" className="section-padding pt-0">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-6">
              Jangkauan area pasang CCTV per kota dan kabupaten
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal className="card">
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                Wilayah Tangerang Raya
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Kota Tangerang & Tangerang Selatan
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Sebagai lokasi basis operasional kami di Ciledug, teknisi kami memiliki
                waktu respons tercepat untuk area Tangerang Raya. Kami melayani survei
                rutin untuk perumahan cluster, ruko, dan tempat usaha di:
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Kota Tangerang: Ciledug, Cipondoh, Karawaci, Pinang, Larangan, Batuceper.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Tangerang Selatan: BSD City, Bintaro, Serpong, Ciputat, Pamulang, Pondok Aren.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Kabupaten Tangerang: Gading Serpong, Karawaci Baru, Cikupa, Pasar Kemis.</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={80} className="card">
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                Wilayah DKI Jakarta
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Seluruh 5 Wilayah Kota Jakarta
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Teknisi kami melayani pemasangan CCTV untuk rumah tinggal padat penduduk,
                perkantoran bertingkat, ruko niaga, dan tempat usaha di seluruh area ibu kota:
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Jakarta Selatan: Kebayoran Baru, Cilandak, Jagakarsa, Pasar Minggu, Tebet.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Jakarta Barat: Kebon Jeruk, Kembangan, Puri Indah, Cengkareng, Grogol.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Jakarta Pusat & Timur: Menteng, Tanah Abang, Matraman, Duren Sawit, Cakung.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Jakarta Utara: Kelapa Gading, Pluit, Sunter, Tanjung Priok, Penjaringan.</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={120} className="card">
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                Wilayah Depok & Bogor
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Kota Depok hingga Kabupaten Bogor
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Kami menangani banyak hunian perumahan baru, townhouse, dan bangunan komersial
                di koridor selatan Jabodetabek:
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Kota Depok: Margonda, Cinere, Sawangan, Cimanggis, Beji, Sukmajaya.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Kota Bogor: Bogor Barat, Bogor Selatan, Bogor Timur, Tanahsareal.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Kabupaten Bogor: Cibinong, Sentul City, Bojonggede, Cileungsi, Gunung Putri.</span>
                </li>
              </ul>
            </ScrollReveal>

            <ScrollReveal delay={160} className="card">
              <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                Wilayah Bekasi Raya
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                Kota Bekasi hingga Kawasan Industri Cikarang
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-4">
                Layanan kami mencakup hunian pribadi, pusat pertokoan, serta pergudangan
                dan pabrik industri di koridor timur:
              </p>
              <ul className="space-y-1.5 text-sm text-text-secondary">
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Kota Bekasi: Bekasi Barat, Bekasi Timur, Galaxy, Summarecon Bekasi, Jatisampurna.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Bekasi Barat & Selatan: Kranji, Pekayon, Harapan Indah, Pondok Gede.</span>
                </li>
                <li className="flex items-start gap-2">
                  <IconCheck />
                  <span>Kabupaten Bekasi: Tambun, Cibitung, serta kawasan industri Cikarang.</span>
                </li>
              </ul>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Rekomendasi Titik Kamera Berdasarkan Tipe Properti ── */}
      <section id="tipe-bangunan" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Rekomendasi titik kamera sesuai tipe bangunan di Jabodetabek
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Berdasarkan pengalaman lapangan teknisi kami memasang kamera sejak 2020,
              setiap tipe properti memiliki kebutuhan sudut pantau yang berbeda:
            </p>
            <div className="space-y-5 text-text-secondary leading-relaxed text-sm">
              <div className="bg-bg/70 p-5 rounded-lg border border-border">
                <h3 className="font-bold text-white text-base mb-1">
                  Rumah tinggal satu lantai (2 sampai 4 kamera)
                </h3>
                <p>
                  Titik utama difokuskan pada pintu pagar depan, carport mobil, dan pintu
                  akses belakang. Kami menyarankan kamera ColorVu di area depan agar rekaman
                  malam hari tetap berwarna saat ada kendaraan atau orang mendekat.
                </p>
              </div>

              <div className="bg-bg/70 p-5 rounded-lg border border-border">
                <h3 className="font-bold text-white text-base mb-1">
                  Rumah tinggal dua lantai (4 sampai 8 kamera)
                </h3>
                <p>
                  Penambahan kamera diperlukan untuk mengawasi balkon atas, area tangga dalam,
                  halaman samping, dan sudut ruang tamu. Pembagian kamera indoor dome dan
                  outdoor bullet disesuaikan dengan estetika dinding ruangan.
                </p>
              </div>

              <div className="bg-bg/70 p-5 rounded-lg border border-border">
                <h3 className="font-bold text-white text-base mb-1">
                  Ruko dan toko niaga (rata-rata 4 kamera)
                </h3>
                <p>
                  Konfigurasi standar mencakup satu kamera outdoor mengarah ke tempat parkir,
                  satu kamera menghadap meja kasir untuk mengawasi transaksi uang, satu di
                  koridor display produk, dan satu di area gudang stok barang.
                </p>
              </div>

              <div className="bg-bg/70 p-5 rounded-lg border border-border">
                <h3 className="font-bold text-white text-base mb-1">
                  Kantor, gudang, dan industri (6 sampai 16 kamera)
                </h3>
                <p>
                  Kebutuhan mencakup area lobi penerimaan tamu, ruang kerja staf, koridor
                  lorong, gerbang bongkar muat logistik, dan area parkir karyawan. Untuk gudang
                  terbuka luas, kami menyarankan resolusi 5MP dengan jarak pandang 15 sampai 20
                  meter.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Prosedur Survei & Transparansi Biaya ── */}
      <section id="prosedur-survei" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Prosedur survei lokasi gratis dan transparansi biaya
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Menurut pendapat tegas kami, jumlah kamera dan penempatan sudut harus
                ditentukan oleh survei langsung, bukan sekadar tebakan denah di atas
                kertas. Saat survei gratis, teknisi kami memeriksa sudut pantau cahaya,
                jarak pandang, potensi titik buta (blind spot), serta letak stopkontak
                untuk adaptor DVR.
              </p>
              <p>
                Teknisi juga mengukur jarak tarikan kabel coaxial secara akurat. Seluruh
                paket di situs kami sudah menyertakan jatah kabel coaxial RG59 plus power
                yang memadai (misalnya 40 meter untuk 2 kamera, 80 meter untuk 4 kamera,
                dan 160 meter untuk 8 kamera). Jika denah bangunan Anda memanjang dan
                memerlukan tarikan kabel tambahan di luar jatah paket, kelebihannya
                dikenakan tarif transparan Rp6.000 per meter.
              </p>
              <p>
                Ketentuan pembayaran dibuat aman: untuk paket 2 sampai 8 kamera, Anda
                baru membayar setelah seluruh pemasangan selesai dan gambar video berhasil
                dipantau langsung dari layar smartphone Anda. Untuk paket 9 sampai 16
                kamera, diberlakukan uang muka 50 persen saat mulai dan pelunasan setelah
                serah terima tuntas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kapan Tidak Butuh Jasa Kami ── */}
      <section id="kapan-tidak-perlu" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan Anda tidak memerlukan kedatangan teknisi?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Kami menjunjung transparansi kepada setiap calon pelanggan. Anda tidak selalu
              harus memanggil teknisi ke lokasi:
            </p>
            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Jika Anda hanya memerlukan satu kamera pengawas sederhana di dalam kamar
                anak atau ruang kasir kecil yang memiliki colokan listrik dan jangkauan WiFi
                stabil, kamera WiFi mandiri dari marketplace online sudah mencukupi. Anda
                bisa memasangnya sendiri tanpa perlu repot menarik kabel dan tanpa biaya
                jasa pasang.
              </p>
              <p>
                Layanan tim teknisi kami menjadi penting ketika Anda membutuhkan sistem
                pengawasan multi-kamera yang andal di banyak sudut, rekaman fisik tersimpan
                aman di hard disk DVR tanpa bergantung kecepatan internet rumah, dan jalur
                kabel terpasang rapi tersembunyi di plafon bangunan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ Area Layanan ── */}
      <section id="faq-area" className="section-padding" aria-labelledby="faq-area-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-area-heading" className="section-title">
              Pertanyaan seputar area layanan dan survei
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={AREA_FAQ} />
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp Penutup ── */}
      <section id="cta-area" className="section-padding bg-surface border-t border-border">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Cek ketersediaan teknisi di lokasi Anda</h2>
            <p className="section-subtitle mx-auto mt-3">
              Konsultasikan denah bangunan Anda di area pasang CCTV Jabodetabek. Teknisi
              kami siap datang melakukan survei gratis ke rumah, ruko, atau kantor Anda.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya ingin cek jadwal survei pasang CCTV untuk area saya."
                id="area-bottom-wa-btn"
                className="btn-primary justify-center"
              >
                Jadwalkan Survei via WhatsApp
              </WhatsAppButton>
              <Link href="/paket-cctv/" id="area-bottom-paket-link" className="btn-outline justify-center">
                Lihat daftar harga paket
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
