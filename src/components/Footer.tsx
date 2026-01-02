'use client';

import Link from 'next/link';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <Link href="/" className="text-xl font-semibold text-primary">
              Proof Cellars
            </Link>
            <p className="mt-4 text-sm text-secondary max-w-md">
              Direct buyer of collectible wine and spirits. No fees.
            </p>
          </div>

          {/* Locations */}
          <div>
            <h3 className="text-sm font-medium text-primary">Buying Locations</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/locations/los-angeles" className="text-sm text-secondary hover:text-primary transition-colors">
                  Los Angeles / Sherman Oaks
                </Link>
              </li>
              <li>
                <Link href="/locations/austin" className="text-sm text-secondary hover:text-primary transition-colors">
                  Austin / Texas Triangle
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-sm text-secondary hover:text-primary transition-colors">
                  Nationwide Service
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-medium text-primary">Our Services</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/services/estates" className="text-sm text-secondary hover:text-primary transition-colors">
                  Estate Liquidation
                </Link>
              </li>
              <li>
                {/* Changed to /services/estates to avoid 404 per user request */}
                <Link href="/services/estates" className="text-sm text-secondary hover:text-primary transition-colors">
                  Cellar Appraisals
                </Link>
              </li>
              <li>
                <Link href="/sell" className="text-sm text-secondary hover:text-primary transition-colors">
                  Submit a Collection
                </Link>
              </li>
            </ul>
          </div>

          {/* Top Brands */}
          <div>
            <h3 className="text-sm font-medium text-primary">We Buy</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/sell/van-winkle" className="text-sm text-secondary hover:text-primary transition-colors">
                  Pappy Van Winkle
                </Link>
              </li>
              <li>
                <Link href="/sell/macallan" className="text-sm text-secondary hover:text-primary transition-colors">
                  Macallan
                </Link>
              </li>
              <li>
                <Link href="/sell/japanese-whisky" className="text-sm text-secondary hover:text-primary transition-colors">
                  Japanese Whisky
                </Link>
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
