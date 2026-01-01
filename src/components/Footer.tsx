'use client';

import Link from 'next/link';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <Link href="/" className="text-xl font-semibold text-primary">
              Proof Cellars
            </Link>
            <p className="mt-4 text-sm text-secondary max-w-md">
              We buy collectible wine and spirits directly. No consignment, no auctions - just a direct offer.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-medium text-primary">Navigation</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/" className="text-sm text-secondary hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/get-offer"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.CLICK_GET_OFFER, {
                      location: 'footer',
                      href: '/get-offer',
                    })
                  }
                >
                  Get an Offer
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-sm text-secondary hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-sm text-secondary hover:text-primary transition-colors">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/partners" className="text-sm text-secondary hover:text-primary transition-colors">
                  Partners
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-medium text-primary">Contact</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="tel:+12137709463"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                  onClick={() =>
                    trackEvent(AnalyticsEvents.CLICK_TAP_TO_CALL, {
                      location: 'footer',
                      phone: '2137709463',
                    })
                  }
                >
                  213-770-9463
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@proofcellars.com"
                  className="text-sm text-secondary hover:text-primary transition-colors"
                >
                  info@proofcellars.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-secondary">
            &copy; 2025 Proof Cellars
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-secondary hover:text-primary transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
