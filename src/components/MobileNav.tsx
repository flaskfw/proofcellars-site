'use client';

import Link from 'next/link';
import { useState } from 'react';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

/**
 * MobileNav - Client island for mobile menu interactivity
 *
 * Extracted from Header to keep the Header shell as a Server Component.
 * Contains: hamburger toggle, mobile menu panel, close-on-click nav links,
 * and CTA tracking.
 *
 * The hamburger button renders inline (inside the Header flex row).
 * The dropdown panel uses absolute positioning to render full-width
 * below the header bar, matching the original layout.
 */
export default function MobileNav() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <>
            {/* Hamburger button - renders inside the Header flex row */}
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

            {/* Mobile menu dropdown panel
          Uses absolute positioning to break out of the flex row and render
          full-width below the header bar, matching original layout. */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute left-0 right-0 top-full bg-[var(--color-surface)] border-t border-[var(--color-divider)] py-4 px-4 sm:px-6 lg:px-8 z-50">
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
                            className="btn-primary inline-flex items-center justify-center px-4 py-2 min-h-[44px] text-sm font-medium no-underline bg-[var(--color-primary)] text-white border border-transparent rounded-sm hover:border-[var(--color-accent)] transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)] w-full"
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
        </>
    );
}
