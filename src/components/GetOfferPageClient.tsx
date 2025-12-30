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
      <div className="bg-surface rounded-lg border border-border p-6 sticky top-24">
        <h3 className="text-xl font-medium text-primary mb-4">
          Text Photos Instead
        </h3>
        <p className="text-secondary mb-4">Send your submission to:</p>

        <div className="bg-background rounded-lg p-4 mb-4">
          <p className="text-2xl font-semibold text-primary">213-770-9463</p>
          <p className="text-sm text-secondary">(213-770-WINE)</p>
        </div>

        <div className="flex flex-col gap-3 mb-6">
          <TrackedLink
            href="sms:+12137709463"
            className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
            eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
            eventParams={{ location: 'get_offer_sidebar', phone: '2137709463' }}
          >
            Tap to Text
          </TrackedLink>
          <TrackedLink
            href="tel:+12137709463"
            className="inline-flex items-center justify-center rounded-md border border-accent px-4 py-3 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
            eventName={AnalyticsEvents.CLICK_TAP_TO_CALL}
            eventParams={{ location: 'get_offer_sidebar', phone: '2137709463' }}
          >
            Tap to Call
          </TrackedLink>
        </div>

        <div className="border-t border-border pt-6">
          <h4 className="text-sm font-medium text-primary mb-3">
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
                className="flex items-start gap-2 text-sm text-secondary"
              >
                <svg
                  className="h-4 w-4 text-accent flex-shrink-0 mt-0.5"
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

        <p className="mt-6 text-sm text-secondary">
          We typically respond within one business day.
        </p>
      </div>
    </div>
  );
}

/**
 * Tracked link for opening Jotform in new tab
 */
export function JotformNewTabLink() {
  return (
    <TrackedLink
      href="https://form.jotform.com/230785300811146"
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:text-accent-hover transition-colors"
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
