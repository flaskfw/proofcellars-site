import Link from 'next/link';
import TrackedLink from '@/components/TrackedLink';
import MobileNav from '@/components/MobileNav';
import { AnalyticsEvents } from '@/lib/analytics';

export default function Header() {
  return (
    <header className="bg-[var(--color-surface)] border-b border-[var(--color-divider)]">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
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
                Direct buyer<br /> of collectible wine &amp; spirits.
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
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
            <TrackedLink
              href="/get-offer"
              eventName={AnalyticsEvents.CLICK_GET_OFFER}
              eventParams={{ location: 'header', href: '/get-offer' }}
              className="btn-primary inline-flex items-center justify-center px-4 py-2 min-h-[44px] text-sm font-medium no-underline bg-[var(--color-primary)] text-white border border-transparent rounded-sm hover:border-[var(--color-accent)] transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            >
              Get an Offer
            </TrackedLink>
          </div>

          {/* Mobile hamburger - inside flex row for alignment */}
          <MobileNav />
        </div>
      </nav>
    </header>
  );
}
