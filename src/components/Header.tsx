'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-surface border-b border-border">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-semibold text-primary">
              Proof Cellars
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link
              href="/sell"
              className="text-secondary hover:text-primary transition-colors"
            >
              What We Buy
            </Link>
            <Link
              href="/guides"
              className="text-secondary hover:text-primary transition-colors"
            >
              Guides
            </Link>
            <Link
              href="/faq"
              className="text-secondary hover:text-primary transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="/contact"
              className="text-secondary hover:text-primary transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/get-offer"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
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
              className="inline-flex items-center justify-center rounded-md p-2 text-secondary hover:bg-background hover:text-primary"
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
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/sell"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                What We Buy
              </Link>
              <Link
                href="/guides"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guides
              </Link>
              <Link
                href="/faq"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className="text-secondary hover:text-primary transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/get-offer"
                className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:bg-accent-hover transition-colors w-full"
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
