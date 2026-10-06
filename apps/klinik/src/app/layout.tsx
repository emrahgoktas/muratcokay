import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { siteMetadata } from "@/lib/seo/metadata";

import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export function generateMetadata(): Metadata {
  return siteMetadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${montserrat.variable} ${cormorant.variable}`}>
      <body className="font-sans pb-16 antialiased md:pb-0">
        <a
          href="#main-content"
          className="sr-only z-[100] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
        >
          İçeriğe atla
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
