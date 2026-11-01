import Link from "next/link";
import Image from "next/image";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { JsonLd } from "@/components/JsonLd";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { SITE, CONTACT, LOCATION, WARRANTY } from "@/content/site";
import { ABOUT_FAQ } from "@/content/faq";
import { PAGES, buildMetadata } from "@/content/seo";

export const metadata = buildMetadata(PAGES.tentang);

const pageUrl = `${SITE.url}${PAGES.tentang.path}`;

// Foto diambil dengan: node scripts/ambil-gambar.mjs (sumber: references/images.md bagian A).
// Foto yang belum ada di public/images/ otomatis tidak ditampilkan.
const FOTO = [
  {
    src: "/images/isi-paket-cctv-hikvision-turbo-hd.webp",
    alt: "Isi paket CCTV Hikvision Turbo HD: kamera, DVR, hard disk, power supply, dan kabel",
  },
  {
    src: "/images/tumpukan-kotak-kamera-hikvision.webp",
    alt: "Tumpukan kotak kamera CCTV Hikvision",
  },
  {
    src: "/images/dua-kamera-dome-hilook.webp",
    alt: "Dua kamera dome CCTV HiLook",
  },
].filter((f) => existsSync(join(process.cwd(), "public", f.src)));

const PENGALAMAN = [
  "Rumah tinggal dan ruko",
  "Proyek skala lingkungan RW",
  "Hotel dan instansi pemerintah",
  "Pemasangan dengan kabel fiber optik point to point",
  "Kamera thermal PTZ",
  "DarkFighter, heat detector, dan alarm di pabrik minyak goreng di Bekasi",
];

const LANGKAH = [
  { title: "Survei gratis", desc: "Teknisi datang memeriksa denah dan jalur kabel, tanpa biaya." },
  { title: "Jumlah kamera ditentukan", desc: "Titik kamera dan jumlahnya diputuskan setelah melihat lokasi, disesuaikan dengan budget Anda." },
  { title: "Pemasangan", desc: "Teknisi memasang kamera, menarik kabel, dan mengonfigurasi DVR." },
  { title: "Setting ke HP dan serah terima", desc: "Pemantauan dari HP diaktifkan, dan teknisi mengajarkan cara melihat playback atau rekaman." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}#aboutpage`,
      url: pageUrl,
      name: PAGES.tentang.title,
      inLanguage: "id",
      about: { "@id": `${SITE.url}/#localbusiness` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Beranda", item: `${SITE.url}/` },
        { "@type": "ListItem", position: 2, name: "Tentang Kami", item: pageUrl },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: ABOUT_FAQ.map((item) => ({
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

export default function Tentang() {
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
            <span className="text-white font-semibold">Tentang Kami</span>
          </li>
        </ol>
      </nav>

      {/* ── Header ── */}
      <section className="section-padding pt-8">
        <div className="container-max max-w-3xl">
          <div className="label-tag">Tentang kami</div>
          <h1 className="section-title text-4xl sm:text-5xl">
            Tentang PasangCCTV,
            <br className="hidden sm:block" />
            <span className="text-accent"> Tim Pasang CCTV untuk Wilayah Jabodetabek</span>
          </h1>
          <p className="mt-4 text-text-secondary leading-relaxed">
            PasangCCTV adalah tim pasang CCTV yang melayani kebutuhan pengawasan
            keamanan untuk rumah tinggal, ruko, kantor, dan gudang di seluruh
            wilayah Jabodetabek. Kami bekerja sejak 2020 dengan fokus pada
            pemasangan sistem kamera analog yang andal, penarikan kabel yang rapi,
            serta konfigurasi perangkat yang tuntas sampai bisa dipantau langsung
            dari layar smartphone Anda.
          </p>
          <p className="mt-3 text-text-secondary leading-relaxed">
            Seluruh pekerjaan survei, pemasangan unit, dan setting aplikasi ke HP
            dikerjakan langsung oleh teknisi kami. Kami menyediakan paket lengkap
            yang sudah mencakup unit kamera, perekam DVR, hard disk penyimpanan,
            kabel coaxial, konektor, adaptor, jasa pemasangan, hingga pelatihan cara
            memeriksa rekaman.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Rincian paket dan biaya lengkap bisa Anda pelajari di halaman{" "}
            <Link href="/paket-cctv/" className="text-accent hover:underline">
              daftar harga paket CCTV terpasang
            </Link>{" "}
            atau langsung melihat ringkasan di{" "}
            <Link href="/" className="text-accent hover:underline">
              layanan pasang CCTV rumah dan ruko
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ── Pengalaman ── */}
      <section id="pengalaman" className="section-padding pt-0">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Pengalaman tim pasang CCTV sejak 2020
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Sejak mulai beroperasi pada tahun 2020, tim pasang CCTV kami telah
              menangani beragam jenis instalasi kamera keamanan di Jakarta, Bogor,
              Depok, Tangerang, dan Bekasi. Kami terbiasa memasang perangkat dari
              skala hunian pribadi hingga sistem keamanan terintegrasi untuk
              kawasan industri:
            </p>
            <ul className="space-y-2 text-text-secondary text-sm mb-6">
              {PENGALAMAN.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-text-secondary leading-relaxed mb-4">
              Untuk rumah tinggal dan ruko, tantangan umum adalah menjaga kerapian
              jalur kabel agar tidak merusak estetika ruangan. Pada hunian satu
              lantai, kami biasanya memasang 2 sampai 4 titik kamera untuk menutup
              pintu masuk utama dan carport. Pada rumah dua lantai atau ruko,
              kebutuhan umumnya berkisar 4 sampai 8 kamera agar area tangga, akses
              belakang, dan gudang tetap berada dalam jangkauan pantauan.
            </p>
            <p className="text-text-secondary leading-relaxed">
              Pada proyek skala besar, kami berpengalaman menarik kabel fiber optik
              point to point untuk menghubungkan pos keamanan dengan bangunan yang
              terpisah ratusan meter. Kami juga memasang kamera thermal PTZ serta
              seri DarkFighter yang terhubung ke detektor panas dan sirine alarm,
              seperti yang kami selesaikan di fasilitas pabrik minyak goreng di
              Bekasi. Nama klien instansi, hotel, maupun perusahaan tidak kami
              cantumkan di situs ini untuk menjaga privasi keamanan mereka.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cara kerja ── */}
      <section id="cara-kerja" className="section-padding bg-surface border-y border-border">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-6">
              Cara kerja tim pasang CCTV kami di lapangan
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {LANGKAH.map((step, i) => (
              <ScrollReveal key={step.title} delay={i * 60}>
                <div className="card h-full">
                  <div className="text-accent font-extrabold text-2xl mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-white mb-1">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 max-w-3xl space-y-4 text-text-secondary leading-relaxed">
            <p>
              Menurut pendapat tegas kami, jumlah kamera dan posisi titik pasang
              harus ditentukan oleh survei lokasi, bukan sekadar tebakan denah di
              kertas. Saat survei gratis, teknisi kami datang memeriksa sudut
              cahaya, potensi titik buta (blind spot), jalur tarikan kabel, serta
              lokasi penempatan DVR agar sirkulasi udara perangkat tetap aman.
            </p>
            <p>
              Setelah denah diperiksa, kami memberikan masukan teknis mengenai
              jumlah titik yang benar-benar dibutuhkan, lalu menyesuaikannya
              dengan anggaran yang Anda siapkan. Sering kali paket 2 kamera
              dinaikkan menjadi 4 kamera setelah survei karena pemilik bangunan
              menyadari ada jalan samping atau pintu belakang yang belum
              terpantau.
            </p>
            <p>
              Kami juga menyarankan untuk mengukur perkiraan jarak tarikan kabel
              sebelum menentukan paket. Seluruh paket di situs ini menggunakan
              kamera analog dengan kabel coaxial RG59 plus power. Jatah kabel per
              kamera sudah kami sertakan dalam paket, dan jika ada tarikan yang
              melebihi kuota karena denah memanjang, kelebihan kabel dihitung
              Rp6.000 per meter.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Rekomendasi teknisi ── */}
      <section id="rekomendasi" className="section-padding">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Rekomendasi teknisi dalam memilih kamera
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Berdasarkan pengalaman pemasangan ratusan titik kamera di
                Jabodetabek, berikut beberapa pertimbangan teknis yang sering kami
                bagikan kepada pelanggan:
              </p>
              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Pintu depan dan carport: utamakan kamera ColorVu
                </h3>
                <p className="text-sm">
                  Untuk area pintu depan, pagar, dan tempat parkir kendaraan, kami
                  menyarankan kamera dengan teknologi ColorVu. Kamera biasa akan
                  beralih ke mode inframerah hitam putih saat malam tiba. Dengan
                  ColorVu, rekaman video tetap berwarna selama ada sedikit cahaya
                  lingkungan, sehingga warna pakaian, warna helm, atau warna bodi
                  kendaraan tetap terlihat jelas pada rekaman.
                </p>
              </div>
              <div className="bg-surface p-5 rounded-lg border border-border space-y-3">
                <h3 className="text-lg font-bold text-white">
                  Resolusi 2MP cukup untuk kebutuhan rumah
                </h3>
                <p className="text-sm">
                  Kamera resolusi 2MP Full HD sudah memadai untuk mengenali wajah
                  dan aktivitas harian pada jarak pandang sekitar 10 meter ke
                  depan. Keunggulannya, ukuran rekaman 2MP lebih hemat ruang hard
                  disk, sehingga rekaman tersimpan lebih lama sebelum tertimpa
                  otomatis. Resolusi 5MP memiliki sekitar 2,5 kali jumlah piksel
                  dibanding 2MP dengan jangkauan jernih sekitar 15 sampai 20 meter,
                  sangat kami sarankan untuk area terbuka luas seperti gudang,
                  halaman toko, atau jalan lingkungan perumahan.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kapan tidak butuh jasa kami ── */}
      <section id="kapan-tidak-perlu" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Kapan Anda tidak memerlukan jasa kami
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Kami percaya pada transparansi sejak awal. Tidak semua kebutuhan
              pengawasan membutuhkan jasa pasang CCTV lengkap dengan kabel dan
              DVR:
            </p>
            <div className="space-y-3 text-text-secondary leading-relaxed text-sm">
              <p>
                Jika Anda hanya membutuhkan satu titik pemantau di dalam ruangan
                anak atau ruang kerja kecil, dan di dekatnya terdapat colokan
                listrik serta sinyal WiFi yang stabil, kamera WiFi mandiri dari
                marketplace online sudah mencukupi kebutuhan Anda. Anda dapat
                membeli perangkat tersebut dan menghubungkannya sendiri tanpa
                perlu mengeluarkan biaya jasa instalasi teknisi.
              </p>
              <p>
                Jasa tim pasang CCTV kami menjadi relevan ketika Anda memerlukan
                sistem pengawasan yang andal untuk banyak titik sudut, memerlukan
                penyimpanan rekaman mandiri di hard disk fisik DVR yang tidak
                bergantung pada internet rumah, serta membutuhkan jalur kabel yang
                ditarik tertata rapi di plafon dan dinding bangunan.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Merek dan garansi ── */}
      <section id="merek" className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-white mb-4">
                Merek perangkat dan ketentuan garansi
              </h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                Kami memasang tiga merek kamera CCTV terkemuka: Loewix dengan
                garansi unit {WARRANTY.loewix}, serta HiLook dan Hikvision dengan
                garansi unit {WARRANTY.hilook}. HiLook merupakan lini produk di
                bawah naungan Hikvision.
              </p>
              <p className="text-text-secondary leading-relaxed mb-4">
                Semua unit yang kami pasang adalah unit baru yang teruji. Paket
                Loewix merupakan paket favorit untuk rumah dan ruko karena sudah
                dilengkapi mikrofon untuk merekam suara 1 arah, teknologi ColorVu
                malam hari, serta adaptor power supply dan konektor BNC dalam satu
                paket. Rincian tabel biaya lengkap per paket dapat Anda temukan di
                halaman{" "}
                <Link href="/paket-cctv/" className="text-accent hover:underline">
                  paket CCTV Loewix, HiLook, dan Hikvision
                </Link>
                .
              </p>
              <p className="text-text-secondary leading-relaxed">
                Ketentuan pembayaran dibuat aman bagi pelanggan: untuk paket 2
                sampai 8 kamera, pembayaran dilakukan setelah seluruh kamera
                terpasang dan sistem dapat dipantau dari HP. Untuk paket 9 sampai
                16 kamera, diberlakukan uang muka 50 persen saat mulai pekerjaan
                dan pelunasan dilakukan setelah pemasangan selesai.
              </p>
            </div>
          </ScrollReveal>

          {FOTO.length > 0 && (
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {FOTO.map((foto) => (
                <ScrollReveal key={foto.src}>
                  <Image
                    src={foto.src}
                    alt={foto.alt}
                    width={800}
                    height={600}
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="w-full h-auto aspect-[4/3] object-cover rounded-lg border border-border"
                  />
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Alamat dan kontak ── */}
      <section id="kontak" className="section-padding bg-surface border-y border-border">
        <div className="container-max max-w-3xl">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-4">
              Alamat kantor dan kontak tim pasang CCTV
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4 text-sm">
              Kami melayani survei dan pemasangan untuk seluruh area Jakarta,
              Bogor, Depok, Tangerang, dan Bekasi. Jika Anda ingin berkonsultasi
              mengenai denah lokasi, kebutuhan titik kamera, atau menjadwalkan
              survei gratis, silakan hubungi tim kami lewat WhatsApp.
            </p>
            <address className="not-italic text-text-secondary leading-relaxed space-y-2">
              <p className="font-semibold text-white">{LOCATION.name}</p>
              <p>{LOCATION.fullAddress}</p>
              <p>{LOCATION.openingHours}</p>
              <p>
                Telepon:{" "}
                <a
                  href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                  className="text-accent hover:underline"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                <a
                  href={LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent hover:underline"
                >
                  Buka lokasi di Google Maps
                </a>
              </p>
            </address>
            <div className="mt-6">
              <WhatsAppButton
                message="Halo, saya ingin tanya soal pasang CCTV."
                id="tentang-whatsapp-btn"
                className="btn-primary"
              >
                Hubungi via WhatsApp
              </WhatsAppButton>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq-tentang" className="section-padding" aria-labelledby="faq-tentang-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-tentang-heading" className="section-title">
              Pertanyaan seputar PasangCCTV
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={ABOUT_FAQ} />
          </div>
        </div>
      </section>
    </>
  );
}
