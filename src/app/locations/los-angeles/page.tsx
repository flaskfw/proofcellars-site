import type { Metadata } from 'next';
import PaymentMethods from '@/components/PaymentMethods';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
    title: 'Sell Wine & Spirits in Los Angeles | WeHo Buying Office',
    description:
        'Direct buyers serving Beverly Hills, West Hollywood, and Greater LA. Instant payment, local drop-off, or house calls. Sell your collection today.',
};

export default function LosAngelesPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Proof Cellars - Los Angeles Buying Office',
        image: 'https://proofcellars.com/og-image.png',
        '@id': 'https://proofcellars.com/locations/los-angeles',
        url: 'https://proofcellars.com/locations/los-angeles',
        telephone: '+12137709463',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'West Hollywood',
            addressRegion: 'CA',
            postalCode: '90069',
            addressCountry: 'US',
        },
        areaServed: [
            {
                '@type': 'City',
                name: 'West Hollywood',
            },
            {
                '@type': 'City',
                name: 'Beverly Hills',
            },
            {
                '@type': 'City',
                name: 'Los Angeles',
            },
            {
                '@type': 'City',
                name: 'Santa Monica',
            },
            {
                '@type': 'PostalCode',
                postalCode: '90069',
            },
            {
                '@type': 'PostalCode',
                postalCode: '90210',
            },
        ],
        priceRange: '$$$$',
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
                            Sell Your Wine & Spirits in Los Angeles. West Hollywood Office.
                        </h1>
                        <p className="mt-6 text-lg text-secondary">
                            Direct buyers serving Beverly Hills, Bel Air, Hollywood Hills, and the
                            Greater LA area. Skip the shipping—drop off locally or request a house
                            call.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <CTAButton
                                href="/get-offer"
                                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                                eventParams={{ location: 'la_hero', href: '/get-offer' }}
                            >
                                Get an Offer
                            </CTAButton>
                            <TrackedLink
                                href="sms:+12137709463"
                                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                                eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                                eventParams={{ location: 'la_hero', phone: '2137709463' }}
                            >
                                Text Photos to 213-770-WINE
                            </TrackedLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* The WeHo Advantage */}
            <section className="py-16 md:py-24 border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                                Luxury, Convenience, and Instant Liquidity
                            </h2>
                            <div className="space-y-6 text-secondary">
                                <p>
                                    Located in the heart of <strong>West Hollywood (Beverly Hills adjacent)</strong>,
                                    our buying office offers a private, secure environment to sell your collection.
                                </p>
                                <p>
                                    We understand that shipping valuable bottles can be stressful.
                                    That is why we offer local drop-off appointments and white-glove
                                    pickup services for large collections throughout Los Angeles.
                                </p>
                                <p>
                                    Sell your bourbon, scotch, or wine in the morning and leave with payment
                                    verifyable in your account.
                                </p>
                            </div>
                        </div>
                        <div className="bg-surface-hover rounded-xl p-8 border border-border">
                            <h3 className="text-lg font-medium text-primary mb-4">
                                Service Radius
                            </h3>
                            <p className="text-sm text-secondary mb-6">
                                We frequently service clients in these neighborhoods:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Beverly Hills',
                                    'West Hollywood',
                                    'Bel Air',
                                    'Hollywood Hills',
                                    'Santa Monica',
                                    'Brentwood',
                                    'Pacific Palisades',
                                    'Malibu',
                                ].map((area) => (
                                    <span
                                        key={area}
                                        className="inline-flex items-center rounded-full bg-surface px-3 py-1 text-xs font-medium text-primary border border-border"
                                    >
                                        {area}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Process */}
            <section className="bg-surface py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-12">
                        Local Selling Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Text Photos',
                                desc: 'Start by texting photos of your bottles to 213-770-9463. No need to bring them in yet.',
                            },
                            {
                                step: '02',
                                title: 'Get Appraised',
                                desc: 'We will review your collection remotely and provide a firm purchase offer.',
                            },
                            {
                                step: '03',
                                title: 'Appointment',
                                desc: 'Schedule a private drop-off at our WeHo office or request a pickup.',
                            },
                            {
                                step: '04',
                                title: 'Payment',
                                desc: 'We inspect the bottles and issue payment on the spot via Wire, Check, or Instant Transfer.',
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

            {/* Map Section */}
            <section className="h-96 w-full relative bg-gray-100">
                <iframe
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26456.98567156942!2d-118.39646654999999!3d34.0900091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2beb6247dbc6f%3A0xe6bf44265da41830!2sWest%20Hollywood%2C%20CA!5e0!3m2!1sen!2sus!4v1709240000000!5m2!1sen!2sus"
                    title="Proof Cellars West Hollywood Location"
                ></iframe>
            </section>

            {/* Payment Methods */}
            <section className="bg-surface py-12 border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <PaymentMethods />
                </div>
            </section>
        </>
    );
}
