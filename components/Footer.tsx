import Link from "next/link";
import { CONTACT, LOCATION } from "@/content/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-extrabold mb-3">
              <span className="text-accent">Pasang</span>
              <span className="text-white">CCTV</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              Jasa pasang CCTV di Jabodetabek. Survei, pemasangan, dan setting
              ke HP dikerjakan oleh teknisi.
            </p>
            <WhatsAppButton
              message="Halo, saya ingin tanya soal pasang CCTV."
              id="footer-whatsapp-btn"
              iconClassName="w-4 h-4"
              className="btn-primary mt-5 inline-flex"
            >
              Hubungi via WhatsApp
            </WhatsAppButton>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              Halaman
            </h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/paket-cctv/"
                  className="hover:text-white transition-colors"
                >
                  Paket CCTV
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak & Lokasi */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">
              Lokasi
            </h3>
            <address className="not-italic text-sm text-text-secondary space-y-2 leading-relaxed">
              <p className="font-semibold text-white">{LOCATION.name}</p>
              <p>{LOCATION.fullAddress}</p>
              <p>{LOCATION.openingHours}</p>
              <p>
                Telepon:{" "}
                <a
                  href={`tel:${CONTACT.phone.replace(/-/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.phone}
                </a>
              </p>
              <p>
                WhatsApp:{" "}
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.whatsapp}
                </a>
              </p>
              <p>
                <a
                  href={LOCATION.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Buka lokasi di Google Maps
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-text-secondary text-xs">
          <p>
            &copy; {new Date().getFullYear()} PasangCCTV. Seluruh harga sudah
            termasuk pemasangan.
          </p>
        </div>
      </div>
    </footer>
  );
}
