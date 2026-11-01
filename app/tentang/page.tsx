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
            PasangCCTV adalah tim pemasang CCTV yang melayani seluruh
            Jabodetabek. Kami bekerja sejak 2020. Survei, pemasangan, dan
            setting ke HP dikerjakan oleh teknisi.
          </p>
          <p className="mt-3 text-sm text-text-secondary">
            Detail layanannya ada di halaman{" "}
            <Link href="/" className="text-accent hover:underline">
              layanan pasang CCTV untuk rumah dan ruko
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
              Pengalaman sejak 2020
            </h2>
            <p className="text-text-secondary leading-relaxed mb-4">
              Sejak 2020, kami mengerjakan pemasangan dari rumah dan ruko sampai
              proyek yang lebih besar. Jenis pekerjaan yang pernah kami tangani:
            </p>
            <ul className="space-y-2 text-text-secondary text-sm">
              {PENGALAMAN.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <IconCheck />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-sm text-text-secondary">
              Nama klien tidak kami cantumkan di situs ini.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Cara kerja ── */}
      <section id="cara-kerja" className="section-padding bg-surface border-y border-border">
        <div className="container-max">
          <ScrollReveal>
            <h2 className="text-2xl font-extrabold text-white mb-6">
              Cara kami bekerja
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
          <ScrollReveal className="mt-8 max-w-3xl">
            <p className="text-text-secondary leading-relaxed">
              Menurut kami, jumlah kamera ditentukan oleh survei, bukan
              tebakan. Tim survei kami memberi masukan tentang apa yang
              dibutuhkan, lalu menyesuaikannya dengan budget Anda.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Merek dan garansi ── */}
      <section id="merek" className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-white mb-4">
                Merek dan garansi
              </h2>
              <p className="text-text-secondary leading-relaxed">
                Kami memasang tiga merek: Loewix dengan garansi {WARRANTY.loewix},
                serta HiLook dan Hikvision dengan garansi {WARRANTY.hilook}.
                HiLook adalah merek di bawah Hikvision. Harga lengkapnya ada di
                halaman{" "}
                <Link href="/paket-cctv/" className="text-accent hover:underline">
                  paket CCTV Loewix, HiLook, dan Hikvision
                </Link>
                .
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
              Alamat dan kontak
            </h2>
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
