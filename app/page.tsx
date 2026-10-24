import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal } from "@/components/ScrollReveal";
import { FaqAccordion } from "@/components/FaqAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { SITE, CONTACT, LOCATION } from "@/content/site";
import { LOEWIX_PREVIEW } from "@/content/packages";
import { HOME_FAQ } from "@/content/faq";

export const metadata: Metadata = {
  title: `Jasa Pasang CCTV di JABODETABEK | ${SITE.name}`,
  description:
    "Jasa pasang CCTV di JABODETABEK mulai Rp2.350.000, sudah termasuk pemasangan dan setting ke HP. Tersedia Loewix, HiLook, dan Hikvision. Tanya via WhatsApp.",
  alternates: {
    canonical: `${SITE.url}/`,
  },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
    title: `Jasa Pasang CCTV di JABODETABEK | ${SITE.name}`,
    description:
      "Jasa pasang CCTV di JABODETABEK mulai Rp2.350.000, sudah termasuk pemasangan dan setting ke HP. Tersedia Loewix, HiLook, dan Hikvision.",
    url: `${SITE.url}/`,
    images: [
      {
        url: `${SITE.url}/og/home.svg`,
        width: 1200,
        height: 630,
        alt: "PasangCCTV - Jasa Pasang CCTV JABODETABEK",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Jasa Pasang CCTV di JABODETABEK | ${SITE.name}`,
    description:
      "Jasa pasang CCTV di JABODETABEK mulai Rp2.350.000. Harga sudah termasuk pemasangan dan setting ke HP.",
    images: [`${SITE.url}/og/home.svg`],
  },
};

// Schema JSON-LD beranda
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE.url}/#organization`,
      name: "PasangCCTV",
      url: SITE.url,
      contactPoint: {
        "@type": "ContactPoint",
        telephone: CONTACT.whatsapp,
        contactType: "customer service",
        availableLanguage: "Indonesian",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE.url}/#website`,
      url: SITE.url,
      name: "PasangCCTV",
      publisher: { "@id": `${SITE.url}/#organization` },
      potentialAction: {
        "@type": "SearchAction",
        target: `${SITE.url}/?s={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "LocalBusiness",
      "@id": `${SITE.url}/#localbusiness`,
      name: LOCATION.name,
      url: SITE.url,
      telephone: CONTACT.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: LOCATION.street,
        addressLocality: "Jakarta Selatan",
        addressRegion: "DKI Jakarta",
        postalCode: LOCATION.postalCode,
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: LOCATION.coordinates.lat,
        longitude: LOCATION.coordinates.lng,
      },
      openingHours: "Mo-Su 00:00-23:59",
      areaServed: [
        "Jakarta",
        "Bogor",
        "Depok",
        "Tangerang",
        "Bekasi",
      ],
      hasMap: LOCATION.googleMapsUrl,
    },
    {
      "@type": "FAQPage",
      mainEntity: HOME_FAQ.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Beranda",
          item: `${SITE.url}/`,
        },
      ],
    },
  ],
};

// Icon components
function IconCheck() {
  return (
    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function IconPhone() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );
}


function IconSurvey() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  );
}

function IconWrench() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
    </svg>
  );
}

function IconHandshake() {
  return (
    <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.16 12m0 0v-2.25a1.575 1.575 0 0 1 3.15 0v2.25m0 0h-3.15" />
    </svg>
  );
}

function IconHome() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
    </svg>
  );
}

function IconBuilding() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016 2.993 2.993 0 0 0 2.25-1.016 3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
    </svg>
  );
}

function IconOffice() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
    </svg>
  );
}

function IconWarehouse() {
  return (
    <svg className="w-7 h-7 text-accent" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z" />
    </svg>
  );
}

function IconMapPin() {
  return (
    <svg className="w-5 h-5 text-accent flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
  );
}

const REASONS = [
  {
    title: "Harga sudah termasuk semua",
    desc: "Pemasangan, power supply, konektor, dan setting pemantauan dari HP sudah masuk dalam satu harga. Tidak ada tagihan tambahan setelah pekerjaan selesai.",
  },
  {
    title: "Pilih kamera indoor atau outdoor",
    desc: "Dalam satu paket, Anda bebas menentukan berapa kamera yang dipasang di dalam dan berapa yang di luar. Kombinasi disesuaikan saat survei.",
  },
  {
    title: "Toko fisik di Cilandak, buka 24 jam",
    desc: "Kami punya toko di Cilandak, Jakarta Selatan, yang buka 24 jam. Kamera bisa dilihat langsung sebelum dipasang.",
  },
];

const SERVICES = [
  { icon: <IconHome />, label: "Rumah Tinggal", desc: "Pantau pintu masuk, garasi, dan area dalam dari satu aplikasi di HP." },
  { icon: <IconBuilding />, label: "Ruko", desc: "Kasir, pintu, dan gudang terpantau dalam satu sistem rekaman." },
  { icon: <IconOffice />, label: "Kantor", desc: "Area kerja, lobi, dan parkir bisa diakses dari jarak jauh oleh manajemen." },
  { icon: <IconWarehouse />, label: "Gudang", desc: "Gudang besar dengan titik buta bisa dicakup dengan paket kamera yang lebih banyak." },
];

const HOW_IT_WORKS = [
  { step: "01", icon: <IconPhone />, title: "Hubungi dan ceritakan kebutuhan", desc: "Kirim pesan WhatsApp. Ceritakan jenis tempat, ukuran, dan jumlah titik yang ingin dipantau." },
  { step: "02", icon: <IconSurvey />, title: "Survei lokasi", desc: "Teknisi datang untuk memeriksa denah, jalur kabel, dan titik terbaik untuk memasang kamera." },
  { step: "03", icon: <IconWrench />, title: "Pemasangan kamera dan DVR", desc: "Kamera dipasang, kabel ditarik rapi, DVR dikonfigurasi, dan rekaman diuji coba." },
  { step: "04", icon: <IconHandshake />, title: "Setting ke HP dan serah terima", desc: "Pemantauan dari HP diaktifkan dan diajarkan. Pekerjaan dinyatakan selesai setelah Anda coba sendiri." },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Hero ── */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center pt-16"
        aria-labelledby="hero-heading"
      >
        {/* Background graphic */}
        <div
          className="absolute inset-0 overflow-hidden pointer-events-none"
          aria-hidden="true"
        >
          <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-accent/5 blur-3xl" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-accent/3 blur-3xl" />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: "linear-gradient(#F5C518 1px, transparent 1px), linear-gradient(90deg, #F5C518 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="container-max section-padding relative w-full">
          <div className="max-w-3xl">
            <div className="label-tag">JABODETABEK</div>
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight text-white"
            >
              Pasang CCTV
              <br />
              <span className="text-accent">untuk Rumah, Ruko,</span>
              <br />
              dan Kantor
            </h1>
            <p className="mt-6 text-text-secondary text-lg sm:text-xl max-w-xl leading-relaxed">
              Harga sudah termasuk pemasangan dan setting ke HP. Mulai
              Rp2.350.000 untuk 2 kamera.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <a
                href={`${CONTACT.whatsappUrl}?text=Halo%2C%20saya%20ingin%20tanya%20soal%20pasang%20CCTV.`}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-whatsapp-btn"
                className="btn-primary"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.856L.057 23.492a.75.75 0 0 0 .93.93l5.7-1.493A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.964-1.356l-.356-.212-3.685.966.983-3.596-.232-.371A9.75 9.75 0 1 1 12 21.75z" />
                </svg>
                Tanya via WhatsApp
              </a>
              <Link
                href="/paket-cctv/"
                id="hero-packages-btn"
                className="btn-outline"
              >
                Lihat daftar paket CCTV lengkap
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-8 text-sm text-text-secondary">
              <span className="flex items-center gap-2"><IconCheck /> Harga termasuk pasang</span>
              <span className="flex items-center gap-2"><IconCheck /> Setting ke HP</span>
              <span className="flex items-center gap-2"><IconCheck /> Buka 24 jam</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pengantar ── */}
      <section id="pengantar" className="section-padding bg-surface border-y border-border">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="label-tag">Tentang layanan</div>
              <h2 className="section-title">
                Jasa pemasangan CCTV dari survei sampai serah terima
              </h2>
              <p className="mt-4 text-text-secondary leading-relaxed">
                Kami mengerjakan pemasangan CCTV di JABODETABEK untuk rumah
                tinggal, ruko, kantor, dan gudang. Teknisi datang ke lokasi Anda,
                memasang kamera di titik yang disepakati, menarik kabel, dan
                mengonfigurasi DVR hingga pemantauan dari HP aktif.
              </p>
              <p className="mt-3 text-text-secondary leading-relaxed">
                Semua harga paket sudah termasuk biaya jasa pasang CCTV,
                perangkat keras, dan setting awal. Tidak ada biaya survei.
                Kamera yang tersedia: Loewix 2MP ColorVu, HiLook, dan Hikvision.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Alasan memilih ── */}
      <section id="alasan" className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">Mengapa kami</div>
            <h2 className="section-title">Yang membedakan kami</h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {REASONS.map((r, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="card h-full hover:border-accent/50 transition-colors">
                  <div className="text-3xl font-extrabold text-accent/30 mb-4 select-none">
                    0{i + 1}
                  </div>
                  <h3 className="font-bold text-white text-lg mb-2">{r.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{r.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Jenis pemasangan ── */}
      <section id="layanan" className="section-padding bg-surface border-y border-border">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">Jenis pemasangan</div>
            <h2 className="section-title">Kami pasang CCTV di berbagai tempat</h2>
            <p className="section-subtitle">
              Denah dan kebutuhan setiap tempat berbeda. Survei gratis untuk
              menentukan jumlah kamera dan posisi yang tepat.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-10">
            {SERVICES.map((s, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="card text-center h-full hover:border-accent/40 hover:-translate-y-1 transition-all duration-200">
                  <div className="flex justify-center mb-4">{s.icon}</div>
                  <h3 className="font-bold text-white mb-2">{s.label}</h3>
                  <p className="text-text-secondary text-xs leading-relaxed">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cara kerja ── */}
      <section id="cara-kerja" className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">Cara kerja</div>
            <h2 className="section-title">Dari hubungi hingga kamera aktif</h2>
            <p className="section-subtitle">
              Empat langkah yang kami kerjakan untuk setiap pemasangan CCTV.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
            {HOW_IT_WORKS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="relative card h-full">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">{step.icon}</div>
                    <span className="text-4xl font-extrabold text-border select-none self-center">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-bold text-white mb-2 leading-snug">{step.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cuplikan paket ── */}
      <section id="paket" className="section-padding bg-surface border-y border-border">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">Paket tersedia</div>
            <h2 className="section-title">Cuplikan paket CCTV Loewix</h2>
            <p className="section-subtitle">
              Harga sudah termasuk kamera, DVR, hard disk, kabel, pemasangan, dan
              setting ke HP.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {LOEWIX_PREVIEW.map((pkg, i) => (
              <ScrollReveal key={pkg.cameras} delay={i * 80}>
                <div className="card flex flex-col h-full hover:border-accent/50 hover:-translate-y-1 transition-all duration-200">
                  <div className="text-accent font-extrabold text-4xl mb-1">
                    {pkg.cameras}
                  </div>
                  <div className="text-text-secondary text-sm mb-4">kamera</div>
                  <div className="text-2xl font-extrabold text-white mb-4">
                    {pkg.priceFormatted}
                  </div>
                  <ul className="space-y-1.5 text-sm text-text-secondary flex-1">
                    <li className="flex items-center gap-2"><IconCheck />{pkg.dvr} DVR</li>
                    <li className="flex items-center gap-2"><IconCheck />Hard disk {pkg.hdd}</li>
                    <li className="flex items-center gap-2"><IconCheck />Kabel {pkg.cable}</li>
                    <li className="flex items-center gap-2"><IconCheck />Pasang + setting HP</li>
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-8 text-center">
            <Link href="/paket-cctv/" id="packages-cta-link" className="btn-outline">
              Lihat harga paket CCTV 4 kamera dan lainnya
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Kapan tidak perlu jasa kami ── */}
      <section id="tidak-perlu" className="section-padding">
        <div className="container-max">
          <ScrollReveal>
            <div className="max-w-3xl">
              <div className="label-tag">Jujur</div>
              <h2 className="section-title">Kapan Anda tidak perlu jasa kami</h2>
              <div className="mt-6 p-6 card border-l-2 border-l-accent">
                <p className="text-text-secondary leading-relaxed">
                  Kalau Anda hanya butuh satu kamera di dalam ruangan dan tidak
                  keberatan mengatur sendiri, kamera WiFi yang dijual di
                  marketplace sudah cukup. Tidak perlu teknisi, tidak perlu
                  kabel. Jasa kami lebih masuk akal jika Anda memasang beberapa
                  titik kamera, membutuhkan rekaman tersimpan di DVR, atau tidak
                  ingin berurusan dengan konfigurasi sendiri.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" className="section-padding bg-surface border-y border-border" aria-labelledby="faq-heading">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">FAQ</div>
            <h2 id="faq-heading" className="section-title">
              Pertanyaan yang sering muncul
            </h2>
          </ScrollReveal>
          <div className="mt-10 max-w-3xl">
            <FaqAccordion items={HOME_FAQ} />
          </div>
        </div>
      </section>

      {/* ── Form penawaran ── */}
      <section id="penawaran" className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <ScrollReveal>
              <div className="label-tag">Minta penawaran</div>
              <h2 className="section-title">Ceritakan kebutuhan Anda</h2>
              <p className="section-subtitle mt-3">
                Isi form di samping. Tombol kirim akan membuka WhatsApp dengan
                pesan yang sudah terisi. Kami akan membalas untuk menjadwalkan
                survei.
              </p>
              <div className="mt-8 space-y-3 text-sm text-text-secondary">
                <p className="flex items-center gap-3">
                  <IconCheck />
                  Tidak ada biaya survei
                </p>
                <p className="flex items-center gap-3">
                  <IconCheck />
                  Estimasi harga diberikan setelah melihat lokasi
                </p>
                <p className="flex items-center gap-3">
                  <IconCheck />
                  Melayani JABODETABEK
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="card">
                <QuoteForm />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Lokasi ── */}
      <section id="lokasi" className="section-padding bg-surface border-t border-border">
        <div className="container-max">
          <ScrollReveal>
            <div className="label-tag">Lokasi</div>
            <h2 className="section-title">Toko kami</h2>
          </ScrollReveal>
          <ScrollReveal delay={100} className="mt-8">
            <div className="card max-w-md hover:border-accent/40 transition-colors">
              <h3 className="font-bold text-white text-lg mb-1">{LOCATION.name}</h3>
              <div className="flex items-start gap-2 mt-3 text-text-secondary text-sm">
                <IconMapPin />
                <address className="not-italic leading-relaxed">
                  {LOCATION.fullAddress}
                </address>
              </div>
              <p className="mt-3 text-sm text-text-secondary">
                <span className="text-accent font-semibold">{LOCATION.openingHours}</span>
                {" "}· Tel: {CONTACT.phone}
              </p>
              <a
                href={LOCATION.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="maps-link-cilandak"
                className="btn-outline mt-5 inline-flex"
              >
                <IconMapPin />
                Buka di Google Maps
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
