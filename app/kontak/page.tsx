import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, CONTACT, LOCATION } from "@/content/site";
import { CONTACT_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.kontak);

const pageUrl = `${SITE.url}${PAGES.kontak.path}`;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": `${pageUrl}#contactpage`,
      url: pageUrl,
      name: PAGES.kontak.title,
      inLanguage: "id",
      about: { "@id": `${SITE.url}/#localbusiness` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Kontak", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: CONTACT_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ],
};

export default function Kontak() {
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
            <span className="text-white font-semibold">Kontak</span>
          </li>
        </ol>
      </nav>

      {/* ── Header ── */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Hubungi kami</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Kontak Pasang CCTV:
            <br className="hidden sm:block" />
            <span className="text-accent"> Alamat Kantor dan Layanan Survei Gratis</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            Halaman kontak pasang CCTV ini disediakan bagi Anda yang ingin berkonsultasi
            langsung mengenai kebutuhan kamera pengawas untuk rumah tinggal, ruko, kantor,
            maupun gudang di wilayah Jabodetabek. Anda dapat menghubungi teknisi kami untuk
            menanyakan estimasi paket, denah penempatan titik kamera, serta menjadwalkan
            survei lokasi tanpa dipungut biaya apa pun.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Kami melayani seluruh wilayah Jakarta, Bogor, Depok, Tangerang, dan Bekasi.
            Seluruh pertanyaan teknis dijawab langsung oleh tim teknisi berpengalaman yang
            memahami jalur tarikan kabel, sudut pandang kamera, dan setting pemantauan ke HP.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Ingin melihat spesifikasi dan biaya paket terlebih dahulu? Silakan periksa{" "}
            <Link href="/paket-cctv/" className="text-accent hover:underline">
              daftar harga paket CCTV terpasang
            </Link>{" "}
            atau kenali profil tim kami di{" "}
            <Link href="/tentang/" className="text-accent hover:underline">
              halaman tentang kami
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Saluran Komunikasi ── */}
      <section id="saluran-kontak" className="section-padding pt-0">
        <div className="container-max">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ScrollReveal className="card flex flex-col justify-between">
              <div>
                <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                  WhatsApp Resmi
                </div>
                <h2 className="text-xl font-extrabold text-white mb-2">
                  Chat WhatsApp
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Saluran tercepat untuk konsultasi denah, kirim foto lokasi, dan booking
                  jadwal survei gratis bersama teknisi kami.
                </p>
                <p className="text-white font-mono font-bold mb-4">
                  {CONTACT.phone}
                </p>
              </div>
              <WhatsAppButton
                message="Halo, saya ingin tanya soal pasang CCTV dan survei lokasi."
                id="kontak-card-wa-btn"
                className="btn-primary justify-center text-sm"
              >
                Kirim Pesan WhatsApp
              </WhatsAppButton>
            </ScrollReveal>

            <ScrollReveal delay={80} className="card flex flex-col justify-between">
              <div>
                <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                  Panggilan Langsung
                </div>
                <h2 className="text-xl font-extrabold text-white mb-2">
                  Telepon Seluler
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Hubungi nomor telepon seluler kami jika Anda membutuhkan jawaban cepat
                  mengenai ketersediaan jadwal pemasangan hari ini.
                </p>
                <p className="text-white font-mono font-bold mb-4">
                  {CONTACT.phone}
                </p>
              </div>
              <a
                href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                id="kontak-card-tel-btn"
                className="btn-outline justify-center text-sm"
              >
                Panggil Sekarang
              </a>
            </ScrollReveal>

            <ScrollReveal delay={160} className="card flex flex-col justify-between">
              <div>
                <div className="text-accent text-sm font-bold uppercase tracking-wider mb-2">
                  Operasional 24 Jam
                </div>
                <h2 className="text-xl font-extrabold text-white mb-2">
                  Kantor & Workshop
                </h2>
                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                  Pusat koordinasi teknisi dan perlengkapan kami berada di Ciledug, Kota
                  Tangerang, dan beroperasi selama 24 jam penuh setiap hari.
                </p>
                <p className="text-white text-sm font-medium mb-4">
                  Buka setiap hari, Senin sampai Minggu
                </p>
              </div>
              <a
                href={LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="kontak-card-maps-btn"
                className="btn-outline justify-center text-sm"
              >
                Lihat di Google Maps
              </a>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Alamat Lengkap & Petunjuk Arah ── */}
      <section id="alamat-lengkap" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Alamat fisik kantor dan jangkauan operasional
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Kantor operasional kami berlokasi di area strategis perbatasan Tangerang
              dan Jakarta Selatan, memudahkan mobilisasi tim teknisi ke seluruh penjuru
              Jabodetabek:
            </p>
            <address className="not-italic bg-bg/70 p-6 rounded-lg border border-border space-y-3 leading-relaxed text-sm">
              <p className="text-base font-bold text-white">{LOCATION.name}</p>
              <p className="text-text-secondary">{LOCATION.fullAddress}</p>
              <p className="text-text-secondary">
                <span className="font-semibold text-white">Jam Operasional:</span>{" "}
                {LOCATION.openingHours}
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold text-white">Nomor Telepon:</span>{" "}
                <a
                  href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                  className="text-accent hover:underline font-mono"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p className="text-text-secondary">
                <span className="font-semibold text-white">WhatsApp:</span>{" "}
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-mono"
                >
                  {CONTACT.whatsapp}
                </a>
              </p>
              <div className="pt-2">
                <a
                  href={LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline font-medium inline-flex items-center gap-1.5"
                >
                  Buka rute navigasi di Google Maps &rarr;
                </a>
              </div>
            </address>
            <p className="mt-6 text-text-secondary leading-relaxed text-sm">
              Wilayah jangkauan survei dan pemasangan teknisi kami mencakup Jakarta Barat,
              Jakarta Selatan, Jakarta Pusat, Jakarta Timur, Jakarta Utara, Kota dan Kabupaten
              Tangerang, Tangerang Selatan, Depok, Kota dan Kabupaten Bogor, serta Kota dan
              Kabupaten Bekasi.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Alur Konsultasi & Jadwal Survei ── */}
      <section id="alur-survei" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Alur konsultasi pemasangan CCTV dan survei
            </h2>
            <p className="text-text-secondary leading-relaxed mb-6">
              Kami menyederhanakan proses pemesanan agar Anda tidak perlu repot dengan istilah
              teknis yang rumit. Berikut empat langkah praktis mulai dari kontak pertama hingga
              kamera menyala di tempat Anda:
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 text-accent font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    Kirimkan gambaran denah atau kebutuhan via WhatsApp
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Hubungi kami lewat nomor WhatsApp resmi. Anda cukup menyebutkan jenis
                    bangunan (misalnya rumah 1 lantai, ruko 2 lantai, kantor, atau gudang),
                    perkiraan titik yang ingin dipantau, serta alamat lokasi Anda.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 text-accent font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    Estimasi awal paket dan pilihan kamera
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Teknisi kami akan memberikan gambaran paket yang paling sesuai. Kami
                    menjelaskan pilihan resolusi kamera 2MP atau 5MP, keunggulan ColorVu untuk
                    titik carport malam hari, serta batas kabel yang termasuk dalam paket.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 text-accent font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    Teknisi datang melakukan survei lokasi gratis
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Kami menjadwalkan kunjungan teknisi langsung ke bangunan Anda tanpa biaya.
                    Teknisi memeriksa sudut titik buta, posisi sumber listrik, jalur tarikan
                    kabel coaxial, serta lokasi paling aman untuk meletakkan mesin perekam DVR.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 text-accent font-extrabold flex items-center justify-center flex-shrink-0 text-sm">
                  4
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">
                    Pemasangan rapi, setting HP, dan pembayaran aman
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    Setelah kesepakatan titik kamera disetujui, teknisi memasang unit, menarik
                    kabel secara rapi, menghubungkan DVR, dan mengatur aplikasi di smartphone
                    Anda. Untuk paket 2 sampai 8 kamera, Anda baru membayar setelah seluruh
                    pemasangan selesai dan gambar tampil jelas di layar HP Anda.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pendapat Tegas: Survei Bukan Tebakan ── */}
      <section id="kenapa-survei" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kenapa survei denah lokasi itu penting?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Menurut pendapat tegas tim kami, jumlah kamera dan penempatan sudut pandang
                harus ditentukan oleh survei langsung, bukan sekadar tebakan denah di atas
                kertas. Sering kali pelanggan mengira 2 kamera sudah cukup, namun saat teknisi
                memeriksa lokasi, ditemukan area lorong samping atau pintu belakang rawan yang
                belum terjangkau.
              </p>
              <p>
                Selain itu, survei fisik berguna untuk menghitung kebutuhan jarak kabel coaxial
                secara presisi. Seluruh paket kami sudah menyertakan kuota kabel yang memadai,
                dan jika ada jarak memanjang di luar paket, kelebihannya dihitung secara jelas
                Rp6.000 per meter tanpa ada tarif yang disembunyikan.
              </p>
              <p>
                Melalui survei gratis ini, Anda mendapatkan rekomendasi teknis yang objektif
                sesuai karakteristik denah properti Anda sebelum memutuskan untuk membeli unit.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kapan Perlu Hubungi Kami vs Pasang Sendiri ── */}
      <section id="kapan-hubungi" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan Anda perlu menghubungi kami?
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Kami selalu mengutamakan kejujuran kepada calon pelanggan. Ada situasi di mana
              Anda membutuhkan jasa teknisi kami, dan ada pula kondisi di mana Anda tidak
              memerlukannya:
            </p>
            <div className="space-y-4 text-text-secondary leading-relaxed text-sm">
              <div className="bg-surface p-5 rounded-lg border border-border space-y-2">
                <h3 className="font-bold text-white text-base">
                  Cukup pasang sendiri jika:
                </h3>
                <p>
                  Anda hanya memerlukan satu kamera pengawas di dalam kamar tidur anak atau
                  ruang kerja meja kasir kecil, di mana sudah tersedia colokan stopkontak
                  dan sinyal WiFi rumah yang kuat. Anda cukup membeli kamera WiFi mandiri di
                  toko online dan mengaturnya sendiri tanpa perlu jasa teknisi.
                </p>
              </div>

              <div className="bg-surface p-5 rounded-lg border border-border space-y-2">
                <h3 className="font-bold text-white text-base">
                  Hubungi tim teknisi kami jika:
                </h3>
                <p>
                  Anda memerlukan pengawasan menyeluruh untuk banyak sudut rumah atau tempat
                  usaha, membutuhkan sistem rekam mandiri di hard disk fisik DVR yang tetap
                  merekam tanpa bergantung koneksi internet, serta menginginkan instalasi
                  kabel yang ditarik secara rapi melintasi plafon dan dinding bangunan oleh
                  teknisi berpengalaman.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ Kontak ── */}
      <section id="faq-kontak" className="section-padding bg-surface border-y border-border" aria-labelledby="faq-kontak-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-kontak-heading" className="section-title">
              Pertanyaan seputar kontak dan survei
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={CONTACT_FAQ} />
          </div>
        </div>
      </section>

      {/* ── CTA WhatsApp Penutup ── */}
      <section id="cta-kontak" className="section-padding">
        <div className="container-max text-center max-w-2xl">
          <ScrollReveal>
            <h2 className="section-title">Konsultasikan kebutuhan Anda sekarang</h2>
            <p className="section-subtitle mx-auto mt-3">
              Kirimkan pertanyaan atau jadwal survei Anda melalui kontak pasang CCTV kami.
              Teknisi kami siap membantu Anda mendapatkan sistem keamanan terbaik untuk
              rumah dan tempat usaha.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-8">
              <WhatsAppButton
                message="Halo, saya ingin menjadwalkan survei pasang CCTV gratis."
                id="kontak-bottom-wa-btn"
                className="btn-primary justify-center"
              >
                Jadwalkan Survei via WhatsApp
              </WhatsAppButton>
              <Link href="/paket-cctv/" id="kontak-bottom-paket-link" className="btn-outline justify-center">
                Lihat pilihan paket CCTV
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
