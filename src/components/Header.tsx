'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--color-surface)] border-b border-[var(--color-divider)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3">
            <Link href="/" className="text-xl font-semibold text-[var(--color-heading)] no-underline hover:text-[var(--color-heading)]">
              Proof Cellars
            </Link>
            <div className="hidden border-l border-[var(--color-border)] pl-3 md:block">
              <span className="text-xs text-[var(--color-text-muted)] block max-w-[200px] leading-tight">
                Direct buyer of collectible wine and spirits.
              </span>
            </div>
            {/* Mobile Tagline */}
            <div className="md:hidden">
              <span className="text-[10px] text-[var(--color-text-muted)] block leading-snug">
                Direct buyer<br /> of collectible wine & spirits.
              </span>
            </div>
          </div>

          {/* Desktop Navigation - Heritage link styling with muted text */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/sell"
              className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            >
              What We Buy
            </Link>
            <Link
              href="/guides"
              className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            >
              Guides
            </Link>
            <Link
              href="/faq"
              className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            >
              Contact
            </Link>
            <Link
              href="/get-offer"
              className="inline-flex items-center justify-center px-4 py-2 min-h-[44px] text-sm font-medium no-underline bg-[var(--color-primary)] text-white border border-transparent rounded-sm hover:border-[var(--color-accent)] transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
              onClick={() =>
                trackEvent(AnalyticsEvents.CLICK_GET_OFFER, {
                  location: 'header',
                  href: '/get-offer',
                })
              }
            >
              Get an Offer
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 min-h-[44px] min-w-[44px] text-[var(--color-text-muted)] hover:bg-[var(--color-surface-2)] hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--color-divider)] py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/sell"
                className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)] min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                What We Buy
              </Link>
              <Link
                href="/guides"
                className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)] min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/faq"
                className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)] min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)] min-h-[44px] flex items-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-offer"
                className="inline-flex items-center justify-center px-4 py-2 min-h-[44px] text-sm font-medium no-underline bg-[var(--color-primary)] text-white border border-transparent rounded-sm hover:border-[var(--color-accent)] transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)] w-full"
                onClick={() => {
                  trackEvent(AnalyticsEvents.CLICK_GET_OFFER, {
                    location: 'header',
                    href: '/get-offer',
                  });
                  setMobileMenuOpen(false);
                }}
              >
                Get an Offer
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
