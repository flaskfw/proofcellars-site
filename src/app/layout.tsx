import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import Script from "next/script";
import dynamic from "next/dynamic";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Lazy load StickyMobileOffer - not needed for initial render, only mobile
const StickyMobileOffer = dynamic(() => import("@/components/StickyMobileOffer"), {
  ssr: false, // Don't render on server, only client-side
});

// Heritage serif for H1-H3 (editorial elegance)
// Using display: "optional" for fastest LCP - shows fallback immediately,
// only swaps if font loads within 100ms (mobile-first performance)
const baskerville = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "optional", // Changed from "swap" to "optional" for faster LCP
  preload: true,
  variable: "--font-baskerville",
  fallback: ["Georgia", "Times New Roman", "serif"],
  adjustFontFallback: true,
});

// Sans-serif for UI and body (modern clarity)
// Using display: "optional" for UI text to prioritize speed over perfect font rendering
const inter = Inter({
  subsets: ["latin"],
  display: "optional", // Changed from "swap" to "optional" for faster FCP
  preload: true,
  variable: "--font-inter",
  fallback: ["-apple-system", "BlinkMacSystemFont", "Segoe UI", "sans-serif"],
  adjustFontFallback: true,
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
    <html lang="en" className={`${baskerville.variable} ${inter.variable}`}>
      <head>
        {/* DNS prefetch and preconnect for critical origins (performance optimization) */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
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
      <body className="antialiased min-h-screen flex flex-col pb-20 md:pb-0">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <StickyMobileOffer />
      </body>
    </html>
  );
}