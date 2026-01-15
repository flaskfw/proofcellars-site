'use client';

import { useEffect, useRef } from 'react';
import { trackEvent, AnalyticsEvents } from '@/lib/analytics';
import TrackedLink from './TrackedLink';

/**
 * Client component for the get-offer page that handles:
 * - Firing view_get_offer event once on mount
 * - Tracked sidebar buttons
 * - Tracked Jotform new tab link
 */
export default function GetOfferPageClient() {
  const hasTrackedView = useRef(false);

  useEffect(() => {
    // Only track once per component mount
    if (!hasTrackedView.current) {
      trackEvent(AnalyticsEvents.VIEW_GET_OFFER, {
        location: 'get_offer_page',
      });
      hasTrackedView.current = true;
    }
  }, []);

  return null; // This component only handles the view event
}

/**
 * Sidebar component with tracked buttons
 */
export function GetOfferSidebar() {
  return (
    <div className="lg:col-span-1">
      <div className="card p-6 sticky top-24">
        <h3 className="mb-4">
          Text Photos Instead
        </h3>
        <p className="text-[var(--color-text-muted)] mb-4">Send your submission to:</p>

        <div className="bg-[var(--color-bg)] rounded-md p-4 mb-4">
          <p className="text-2xl font-semibold text-[var(--color-heading)]">213-770-9463</p>
          <p className="text-sm text-[var(--color-text-muted)]">(213-770-WINE)</p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <TrackedLink
            href="sms:+12137709463"
            className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] text-base font-medium no-underline bg-[var(--color-primary)] text-white border border-transparent rounded-sm hover:border-[var(--color-accent)] transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
            eventParams={{ location: 'get_offer_sidebar', phone: '2137709463' }}
          >
            Tap to Text
          </TrackedLink>
          <TrackedLink
            href="tel:+12137709463"
            className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] text-base font-medium no-underline bg-transparent text-[var(--color-heading)] border border-[var(--color-border)] rounded-sm hover:border-[var(--color-accent)] transition-[color,border-color,background-color] duration-[var(--dur-base)] [transition-timing-function:var(--ease-luxe)]"
            eventName={AnalyticsEvents.CLICK_TAP_TO_CALL}
            eventParams={{ location: 'get_offer_sidebar', phone: '2137709463' }}
          >
            Tap to Call
          </TrackedLink>
        </div>

        <div className="border-t border-[var(--color-divider)] pt-6">
          <h4 className="text-sm font-medium text-[var(--color-heading)] mb-3">
            What to include:
          </h4>
          <ul className="space-y-2">
            {[
              'Your name',
              'City and state',
              'Bottle list (names, sizes, vintages)',
              'Photos: front label, back label, capsule/seal, fill level, box if available, any flaws',
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm text-[var(--color-text-muted)]"
              >
                <svg
                  className="h-4 w-4 text-[var(--color-success)] flex-shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-6 text-sm text-[var(--color-text-muted)]">
          We typically respond within one business day.
        </p>
      </div>
    </div>
  );
}

/**
 * Tracked link for opening Jotform in new tab
 * Heritage design: Uses global link styles defined in globals.css
 */
export function JotformNewTabLink() {
  return (
    <TrackedLink
      href="https://form.jotform.com/230785300811146"
      target="_blank"
      rel="noopener noreferrer"
      className=""
      eventName={AnalyticsEvents.CLICK_OPEN_JOTFORM_NEW_TAB}
      eventParams={{
        location: 'get_offer_page',
        href: 'https://form.jotform.com/230785300811146',
      }}
    >
      Open the form in a new tab
    </TrackedLink>
  );
}
