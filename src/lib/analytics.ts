/**
 * GA4 Analytics Helper
 *
 * Provides safe event tracking that:
 * - Works with SSR (checks for window)
 * - Fails silently if gtag is blocked or not loaded
 * - Optionally pushes to dataLayer for GTM compatibility
 *
 * To verify events:
 * 1. Use GA4 DebugView: Admin > DebugView in Google Analytics
 * 2. Install GA Debugger browser extension
 * 3. Check browser console for dataLayer pushes
 * 4. In development, uncomment console.log below to see events
 */

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (
      command: 'event' | 'config' | 'js',
      eventNameOrDate: string | Date,
      params?: Record<string, unknown>
    ) => void;
    dataLayer?: unknown[];
  }
}

/**
 * Track a GA4 event safely
 * @param name - GA4 event name (e.g., 'click_get_offer')
 * @param params - Event parameters
 */
export function trackEvent(
  name: string,
  params?: Record<string, unknown>
): void {
  // Skip if running on server
  if (typeof window === 'undefined') {
    return;
  }

  try {
    // Uncomment for development debugging:
    // console.log('[Analytics]', name, params);

    // Send to GA4 via gtag if available
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params);
    }

    // Also push to dataLayer for GTM compatibility
    if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: name,
        ...params,
      });
    }
  } catch {
    // Fail silently - analytics should never break the site
  }
}

/**
 * Event name constants for type safety
 */
export const AnalyticsEvents = {
  CLICK_GET_OFFER: 'click_get_offer',
  CLICK_TEXT_PHOTOS: 'click_text_photos',
  CLICK_TAP_TO_CALL: 'click_tap_to_call',
  CLICK_OPEN_JOTFORM_NEW_TAB: 'click_open_jotform_new_tab',
  VIEW_GET_OFFER: 'view_get_offer',
} as const;

export type AnalyticsEventName =
  (typeof AnalyticsEvents)[keyof typeof AnalyticsEvents];
