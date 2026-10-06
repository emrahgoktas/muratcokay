import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";

import { contact, doctor, sites } from "@muratcokay/content";
import { Footer, Header } from "@muratcokay/ui";

import { StickyCta } from "@/components/sticky-cta";
import { siteContent } from "@/lib/page-content";

import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-sans",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600"],
  display: "swap",
  variable: "--font-serif",
});

const navigation = [
  { label: "Durumlar", href: "/#durumlar" },
  { label: "Yaklaşımlar", href: "/#yaklasimlar" },
  { label: "Ulaşım", href: "/#ulasim" },
  { label: "Konum", href: "/#konum" },
  { label: "İletişim", href: "/#iletisim" },
] as const;

export const metadata: Metadata = {
  metadataBase: new URL(sites.nis),
  title: siteContent.site.title,
  description: siteContent.site.description,
  alternates: { canonical: sites.nis },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f4c81",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} ${cormorant.variable}`}>
      <body className="pb-16 md:pb-0">
        <a
          href="#icerik"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2"
        >
          İçeriğe atla
        </a>
        <Header
          name={doctor.name}
          tagline="Yalova Bütüncül Sağlık"
          navigation={navigation}
          appointmentHref={contact.phone.href}
          appointmentLabel={siteContent.hero.appointment}
        />
        {children}
        <Footer
          description={siteContent.site.description}
          extraLinks={navigation}
        />
        <StickyCta />
      </body>
    </html>
  );
}
