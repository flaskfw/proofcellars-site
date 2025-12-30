import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Proof Cellars | We Buy Collectible Wine and Spirits',
    template: '%s | Proof Cellars',
  },
  description:
    'Sell your bourbon, scotch, and fine wine directly. No consignment, no auctions. Get a direct offer from Proof Cellars.',
  metadataBase: new URL('https://proofcellars.com'),
  openGraph: {
    title: 'Proof Cellars | We Buy Collectible Wine and Spirits',
    description:
      'Sell your bourbon, scotch, and fine wine directly. No consignment, no auctions. Get a direct offer from Proof Cellars.',
    url: 'https://proofcellars.com',
    siteName: 'Proof Cellars',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Proof Cellars',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Proof Cellars | We Buy Collectible Wine and Spirits',
    description:
      'Sell your bourbon, scotch, and fine wine directly. No consignment, no auctions. Get a direct offer from Proof Cellars.',
    images: ['/og-image.png'],
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
      <body className={`${inter.variable} antialiased min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
