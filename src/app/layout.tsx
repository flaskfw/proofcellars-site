import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StickyMobileOffer from "@/components/StickyMobileOffer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const GA_ID = "G-36L308Q68S";

export const metadata: Metadata = {
  title: {
    default: "Proof Cellars | We Buy Collectible Wine and Spirits",
    template: "%s | Proof Cellars",
  },
  description:
    "Direct buyer of collectible wine and spirits. Sell your bourbon, scotch, and fine wine directly. No consignment, no auctions. Get a direct offer from Proof Cellars.",
  metadataBase: new URL("https://proofcellars.com"),
  openGraph: {
    title: "Proof Cellars | We Buy Collectible Wine and Spirits",
    description:
      "Direct buyer of collectible wine and spirits. Sell your bourbon, scotch, and fine wine directly. No consignment, no auctions. Get a direct offer from Proof Cellars.",
    url: "https://proofcellars.com",
    siteName: "Proof Cellars",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Proof Cellars",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Proof Cellars | We Buy Collectible Wine and Spirits",
    description:
      "Direct buyer of collectible wine and spirits. Sell your bourbon, scotch, and fine wine directly. No consignment, no auctions. Get a direct offer from Proof Cellars.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect hints for faster resource loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>
      </head>
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col pb-20 md:pb-0`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileOffer />
      </body>
    </html>
  );
}