'use client';

import { trackEvent, AnalyticsEvents } from '@/lib/analytics';

export default function StickyMobileOffer() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden pb-safe">
            <a
                href="sms:+12137709463"
                className="block w-full bg-zinc-900 border-t border-zinc-800 p-4 text-center active:bg-black transition-colors"
                onClick={() => {
                    trackEvent(AnalyticsEvents.CLICK_TEXT_PHOTOS, {
                        location: 'sticky_mobile_bar',
                        phone: '2137709463',
                    });
                }}
            >
                <span className="text-white font-bold text-lg flex items-center justify-center gap-2">
                    <span>📸</span>
                    Text photos for instant offer
                </span>
            </a>
        </div>
    );
}
