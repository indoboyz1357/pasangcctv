"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_MESSAGE = "Halo, saya ingin tanya soal pasang CCTV.";

const PACKAGE_LINKS = [
  {
    href: "/paket-cctv/",
    title: "Semua Paket CCTV",
    desc: "Perbandingan 5 seri kamera & harga lengkap",
    highlight: false,
  },
  {
    href: "/paket-cctv/loewix-2mp/",
    title: "Loewix 2MP ColorVu + Audio",
    desc: "2–16 kamera komplit, malam berwarna",
    highlight: true,
  },
  {
    href: "/paket-cctv/hilook-2mp/",
    title: "HiLook 2MP Full HD",
    desc: "2–16 kamera komplit, garansi 2 tahun",
    highlight: false,
  },
  {
    href: "/paket-cctv/hikvision-2mp/",
    title: "Hikvision 2MP Full HD",
    desc: "2–16 kamera komplit, standar industri global",
    highlight: false,
  },
  {
    href: "/paket-cctv/hilook-5mp/",
    title: "HiLook 5MP Ultra HD",
    desc: "2–16 kamera, resolusi 3K super tajam",
    highlight: false,
  },
  {
    href: "/paket-cctv/hikvision-5mp/",
    title: "Hikvision 5MP Ultra HD",
    desc: "2–16 kamera, kualitas visual maksimal",
    highlight: false,
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobilePaketOpen, setMobilePaketOpen] = useState(true);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-sm border-b border-border">
      <nav
        className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-16"
        aria-label="Navigasi utama"
      >
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-extrabold tracking-tight"
          aria-label="PasangCCTV - kembali ke beranda"
        >
          <span className="text-accent">Pasang</span>
          <span className="text-white">CCTV</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7 text-sm font-semibold">
          <Link
            href="/"
            className="text-text-secondary hover:text-white transition-colors"
          >
            Beranda
          </Link>

          {/* Dropdown Paket CCTV */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <div className="flex items-center gap-1 text-text-secondary hover:text-white transition-colors cursor-pointer py-2">
              <Link
                href="/paket-cctv/"
                className="hover:text-white transition-colors"
              >
                Paket CCTV
              </Link>
              <button
                type="button"
                onClick={() => setDropdownOpen(!dropdownOpen)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                aria-label="Buka daftar pilihan paket CCTV"
                className="p-1 hover:text-white"
              >
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    dropdownOpen ? "rotate-180 text-accent" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>

            {dropdownOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-80 rounded-xl bg-surface/95 backdrop-blur-md border border-border shadow-2xl p-2 z-50 animate-in fade-in slide-in-from-top-1 duration-150"
                role="menu"
                aria-label="Daftar Paket CCTV"
              >
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-accent border-b border-border/60 mb-1">
                  Pilihan Paket CCTV
                </div>
                {PACKAGE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setDropdownOpen(false)}
                    className={`block px-3 py-2 rounded-lg transition-colors group ${
                      item.highlight
                        ? "bg-accent/10 border border-accent/20 hover:bg-accent/20"
                        : "hover:bg-bg/80"
                    }`}
                    role="menuitem"
                  >
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-sm font-semibold transition-colors ${
                          item.highlight ? "text-accent" : "text-white group-hover:text-accent"
                        }`}
                      >
                        {item.title}
                      </span>
                      {item.highlight && (
                        <span className="text-[10px] font-bold uppercase px-1.5 py-0.5 rounded bg-accent text-bg">
                          Populer
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-text-secondary mt-0.5 line-clamp-1">
                      {item.desc}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/area/"
            className="text-text-secondary hover:text-white transition-colors"
          >
            Area Layanan
          </Link>
          <Link
            href="/tentang/"
            className="text-text-secondary hover:text-white transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            href="/kontak/"
            className="text-text-secondary hover:text-white transition-colors"
          >
            Kontak
          </Link>
          <WhatsAppButton
            message={WA_MESSAGE}
            iconClassName="w-4 h-4"
            className="btn-primary text-sm py-2"
          >
            WhatsApp
          </WhatsAppButton>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={open}
          className="md:hidden p-2 text-text-secondary hover:text-white"
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 flex flex-col gap-3 text-sm font-semibold max-h-[calc(100vh-4rem)] overflow-y-auto">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-text-secondary hover:text-white transition-colors py-1.5"
          >
            Beranda
          </Link>

          {/* Accordion Paket CCTV Mobile */}
          <div className="border-y border-border/50 py-2">
            <div className="flex items-center justify-between text-text-secondary">
              <Link
                href="/paket-cctv/"
                onClick={() => setOpen(false)}
                className="hover:text-white transition-colors font-semibold"
              >
                Paket CCTV
              </Link>
              <button
                type="button"
                onClick={() => setMobilePaketOpen(!mobilePaketOpen)}
                className="p-1.5 text-text-secondary hover:text-white"
                aria-label="Toggle submenu paket CCTV"
                aria-expanded={mobilePaketOpen}
              >
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    mobilePaketOpen ? "rotate-180 text-accent" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.5}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
              </button>
            </div>

            {mobilePaketOpen && (
              <div className="mt-2 pl-3 border-l-2 border-border/80 flex flex-col gap-2 pt-1">
                {PACKAGE_LINKS.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`py-1 text-xs transition-colors flex items-center justify-between ${
                      item.highlight
                        ? "text-accent font-semibold"
                        : "text-text-secondary hover:text-white"
                    }`}
                  >
                    <span>{item.title}</span>
                    {item.highlight && (
                      <span className="text-[9px] uppercase px-1 py-0.2 rounded bg-accent text-bg font-bold">
                        Populer
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/area/"
            onClick={() => setOpen(false)}
            className="text-text-secondary hover:text-white transition-colors py-1.5"
          >
            Area Layanan
          </Link>
          <Link
            href="/tentang/"
            onClick={() => setOpen(false)}
            className="text-text-secondary hover:text-white transition-colors py-1.5"
          >
            Tentang Kami
          </Link>
          <Link
            href="/kontak/"
            onClick={() => setOpen(false)}
            className="text-text-secondary hover:text-white transition-colors py-1.5"
          >
            Kontak
          </Link>
          <WhatsAppButton
            message={WA_MESSAGE}
            iconClassName="w-4 h-4"
            className="btn-primary justify-center mt-2"
          >
            WhatsApp
          </WhatsAppButton>
        </div>
      )}
    </header>
  );
}
