import Link from "next/link";
import { CONTACT, LOCATION } from "@/content/site";

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
            <a
              href={`https://wa.me/6281919037533?text=Halo%2C%20saya%20ingin%20tanya%20soal%20pasang%20CCTV.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-5 inline-flex"
              id="footer-whatsapp-btn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.856L.057 23.492a.75.75 0 0 0 .93.93l5.7-1.493A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.75 9.75 0 0 1-4.964-1.356l-.356-.212-3.685.966.983-3.596-.232-.371A9.75 9.75 0 1 1 12 21.75z" />
              </svg>
              Hubungi via WhatsApp
            </a>
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
                  href="https://wa.me/6281919037533"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  {CONTACT.whatsapp}
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
