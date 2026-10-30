import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { SITE } from "@/content/site";
import { PAGES } from "@/content/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0A0A0A",
};

// Nilai bawaan. Setiap halaman menimpa title, description, canonical, dan Open Graph
// lewat buildMetadata() di content/seo.ts.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: PAGES.home.title,
  description: PAGES.home.description,
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
