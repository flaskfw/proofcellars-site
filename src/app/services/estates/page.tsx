import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';
import PaymentMethods from '@/components/PaymentMethods';

export const metadata: Metadata = {
    title: 'Estate Wine & Spirits Liquidation Services | Proof Cellars',
    description:
        'Nationwide white-glove buying service for large cellars, estate executors, and private collectors. We appraise, pack, and buy outright. No auctions.',
};

export default function EstateServicesPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        serviceType: 'Estate Liquidation Service',
        provider: {
            '@type': 'Organization',
            name: 'Proof Cellars',
        },
        areaServed: 'US',
        name: 'Estate Wine & Spirits Liquidation',
        description:
            'Nationwide white-glove buying service for large cellars, estate executors, and private collectors.',
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
            />

            {/* Hero Section */}
            <section className="bg-surface py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
                            Estate Wine & Spirits Liquidation Services
                        </h1>
                        <p className="mt-6 text-xl text-secondary leading-relaxed">
                            Nationwide white-glove buying service for large cellars, estate
                            executors, and private collectors. We handle everything from
                            appraisal to transport.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <CTAButton
                                href="/get-offer"
                                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                                eventParams={{ location: 'estate_hero', href: '/get-offer' }}
                            >
                                Request an Estate Appraisal
                            </CTAButton>
                            <TrackedLink
                                href="tel:+12137709463"
                                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                                eventName={AnalyticsEvents.CLICK_TAP_TO_CALL}
                                eventParams={{ location: 'estate_hero', phone: '2137709463' }}
                            >
                                Call for Consultation
                            </TrackedLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* Value Proposition */}
            <section className="py-16 md:py-24 border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                                A Complete Solution for Executors & Collectors
                            </h2>
                            <div className="space-y-6 text-secondary text-lg">
                                <p>
                                    Managing the liquidation of a large wine or spirits collection
                                    can be overwhelming. Whether you are an <strong>executor managing an estate</strong>,
                                    an attorney representing a client, or a collector planning for
                                    retirement, we offer a seamless, immediate solution.
                                </p>
                                <p>
                                    Unlike auctions that require months of lead time, uncertain
                                    results, and high seller premiums, Proof Cellars buys outright.
                                    You get immediate liquidity and we handle all the logistics.
                                </p>
                            </div>
                        </div>
                        <div className="bg-surface-hover rounded-xl p-8 border border-border">
                            <h3 className="text-xl font-medium text-primary mb-6">
                                The White-Glove Difference
                            </h3>
                            <ul className="space-y-4">
                                {[
                                    {
                                        title: 'We Come to You',
                                        desc: 'For collections valued over $25k, our team travels to appraise and verify on-site.',
                                    },
                                    {
                                        title: 'Full Logistics',
                                        desc: 'We provide all packing materials and labor. We handle the transport. You do nothing.',
                                    },
                                    {
                                        title: 'Immediate Liquidity',
                                        desc: 'Payment issues via Wire Transfer or Cashier’s Check before bottles leave the premises.',
                                    },
                                    {
                                        title: 'Discreet Service',
                                        desc: 'We respect your privacy. No public listings of your inventory.',
                                    },
                                ].map((item) => (
                                    <li key={item.title} className="flex gap-3">
                                        <svg
                                            className="h-6 w-6 text-accent flex-shrink-0"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0Z"
                                            />
                                        </svg>
                                        <div>
                                            <span className="font-medium text-primary block">
                                                {item.title}
                                            </span>
                                            <span className="text-sm text-secondary">{item.desc}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* How It Works */}
            <section className="bg-surface py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12">
                        The Estate Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Consultation',
                                desc: 'Call us or submit an inventory list. We discuss the scope and timeline.',
                            },
                            {
                                step: '02',
                                title: 'Appraisal',
                                desc: 'We provide a preliminary valuation. For qualified collections, we schedule an on-site visit.',
                            },
                            {
                                step: '03',
                                title: 'Verification',
                                desc: 'Our team inspects condition and provenance on-site.',
                            },
                            {
                                step: '04',
                                title: 'Payout & Transport',
                                desc: 'We issue payment immediately and our logistics team packs and removes the collection.',
                            },
                        ].map((item) => (
                            <div key={item.step} className="relative">
                                <span className="text-6xl font-bold text-border/40 absolute -top-8 -left-4 z-0">
                                    {item.step}
                                </span>
                                <div className="relative z-10">
                                    <h3 className="text-lg font-medium text-primary mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-secondary">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Trust & Payment */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <PaymentMethods />
                    <div className="mt-12">
                        <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                            Ready to Discuss a Collection?
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <CTAButton
                                href="/get-offer"
                                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                                eventParams={{ location: 'estate_footer', href: '/get-offer' }}
                            >
                                Request Appraisal
                            </CTAButton>
                            <TrackedLink
                                href="tel:+12137709463"
                                className="text-secondary hover:text-primary transition-colors"
                                eventName={AnalyticsEvents.CLICK_TAP_TO_CALL}
                                eventParams={{ location: 'estate_footer', phone: '2137709463' }}
                            >
                                Or call us directly at 213-770-9463
                            </TrackedLink>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
