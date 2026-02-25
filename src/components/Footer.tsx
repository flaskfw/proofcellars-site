import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-surface)] border-t border-[var(--color-divider)]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-semibold text-[var(--color-heading)] no-underline hover:text-[var(--color-heading)]">
              Proof Cellars
            </Link>
            <p className="mt-4 text-sm text-[var(--color-text-muted)] max-w-md">
              Direct buyer of collectible wine and spirits. No fees.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-medium text-[var(--color-heading)] mb-4">Buying Locations</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/locations/los-angeles" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Los Angeles / Sherman Oaks
                </Link>
              </li>
              <li>
                <Link href="/locations/austin" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Austin / Texas Triangle
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Nationwide Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-[var(--color-heading)] mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/estates" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Estate Liquidation
                </Link>
              </li>
              <li>
                {/* Changed to /services/estates to avoid 404 per user request */}
                <Link href="/services/estates" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Cellar Appraisals
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Submit a Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Brands */}
          <div>
            <h3 className="text-sm font-medium text-[var(--color-heading)] mb-4">We Buy</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/sell/van-winkle" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Pappy Van Winkle
                </Link>
              </li>
              <li>
                <Link href="/sell/macallan" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Macallan
                </Link>
              </li>
              <li>
                <Link href="/sell/japanese-whisky" className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]">
                  Japanese Whisky
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[var(--color-divider)] pt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-sm text-[var(--color-text-muted)]">
            &copy; 2025 Proof Cellars
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-[var(--color-text-muted)] no-underline hover:text-[var(--color-heading)] transition-colors duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
