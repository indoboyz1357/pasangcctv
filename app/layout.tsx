import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SITE } from "@/content/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: `Jasa Pasang CCTV Jabodetabek Mulai Rp2,35 Juta | ${SITE.name}`,
  description:
    "Jasa pasang CCTV Jabodetabek mulai Rp2.350.000, sudah termasuk pemasangan, kabel, dan setting ke HP. Tersedia Loewix, HiLook, dan Hikvision. Gratis survei dan bergaransi.",
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: SITE.locale,
    siteName: SITE.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang={SITE.lang} className={inter.variable}>
      <body className="bg-bg text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
