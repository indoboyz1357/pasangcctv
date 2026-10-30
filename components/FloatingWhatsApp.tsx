"use client";

import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FloatingWhatsApp() {
  return (
    <WhatsAppButton
      message="Halo, saya ingin tanya soal pasang CCTV."
      id="floating-whatsapp-btn"
      ariaLabel="Hubungi kami via WhatsApp"
      iconClassName="w-6 h-6"
      className="fixed bottom-6 right-4 sm:right-6 z-50 bg-accent hover:bg-accent-hover active:scale-95
                 text-bg rounded-full p-4 shadow-lg shadow-accent/20 transition-all duration-200
                 flex items-center justify-center"
    />
  );
}
