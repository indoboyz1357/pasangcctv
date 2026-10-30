"use client";

import Link from "next/link";
import { useState } from "react";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const WA_MESSAGE = "Halo, saya ingin tanya soal pasang CCTV.";

export function Navbar() {
  const [open, setOpen] = useState(false);

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
        <div className="hidden md:flex items-center gap-8 text-sm font-semibold">
          <Link
            href="/"
            className="text-text-secondary hover:text-white transition-colors"
          >
            Beranda
          </Link>
          <Link
            href="/paket-cctv/"
            className="text-text-secondary hover:text-white transition-colors"
          >
            Paket CCTV
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
        <div className="md:hidden bg-surface border-t border-border px-4 py-4 flex flex-col gap-4 text-sm font-semibold">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className="text-text-secondary hover:text-white transition-colors py-2"
          >
            Beranda
          </Link>
          <Link
            href="/paket-cctv/"
            onClick={() => setOpen(false)}
            className="text-text-secondary hover:text-white transition-colors py-2"
          >
            Paket CCTV
          </Link>
          <WhatsAppButton
            message={WA_MESSAGE}
            iconClassName="w-4 h-4"
            className="btn-primary justify-center"
          >
            WhatsApp
          </WhatsAppButton>
        </div>
      )}
    </header>
  );
}
