import type { Metadata } from 'next';
import PaymentMethods from '@/components/PaymentMethods';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
    title: 'Sell Bourbon & Wine in Austin | Texas Warehouse Drop-off',
    description:
        'Direct buyers serving Austin, Dallas, Houston, and San Antonio. Secure warehouse intake for your bourbon and wine collection. Immediate payment.',
};

export default function AustinPage() {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Proof Cellars - Austin Buying Office',
        image: 'https://proofcellars.com/og-image.png',
        '@id': 'https://proofcellars.com/locations/austin',
        url: 'https://proofcellars.com/locations/austin',
        telephone: '+1-213-770-9463',
        priceRange: '$$$$',
        address: {
            '@type': 'PostalAddress',
            addressLocality: 'Austin',
            addressRegion: 'TX',
            addressCountry: 'US',
        },
        areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 30.2672,
                longitude: -97.7431,
            },
            geoRadius: '80000',
        },
        serviceArea: [
            { '@type': 'City', name: 'Austin' },
            { '@type': 'City', name: 'Round Rock' },
            { '@type': 'City', name: 'West Lake Hills' },
            { '@type': 'City', name: 'Lakeway' },
        ],
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
                            Sell Your Bourbon & Wine in Austin. Texas Warehouse Drop-off.
                        </h1>
                        <p className="mt-6 text-lg text-secondary">
                            Direct buyers serving Austin, Dallas, Houston, and San Antonio. Secure
                            warehouse intake or we come to you for large collections.
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4">
                            <CTAButton
                                href="/get-offer"
                                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                                eventParams={{ location: 'austin_hero', href: '/get-offer' }}
                            >
                                Get an Offer
                            </CTAButton>
                            <TrackedLink
                                href="sms:+12137709463"
                                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                                eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                                eventParams={{ location: 'austin_hero', phone: '2137709463' }}
                            >
                                Text Photos to 213-770-WINE
                            </TrackedLink>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Texas Advantage */}
            <section className="py-16 md:py-24 border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                                The Texas Operations Hub
                            </h2>
                            <div className="space-y-6 text-secondary">
                                <p>
                                    Our <strong>Austin secure warehouse</strong> serves as the central
                                    intake hub for the Texas market. We specialize in buying Pappy Van
                                    Winkle, Buffalo Trace Antique Collection, and other rare American
                                    Whiskey directly from collectors.
                                </p>
                                <p>
                                    We are a licensed and insured facility. You can schedule a
                                    private drop-off appointment at our warehouse, or for significant
                                    collections in Dallas, Houston, or San Antonio, our team can come
                                    directly to you.
                                </p>
                                <p>
                                    Avoid shipping hassles and risks. Deal with a local Texas whiskey
                                    buyer and get paid immediately upon inspection.
                                </p>
                            </div>
                        </div>
                        <div className="bg-surface-hover rounded-xl p-8 border border-border">
                            <h3 className="text-lg font-medium text-primary mb-4">
                                Serving the Texas Triangle
                            </h3>
                            <p className="text-sm text-secondary mb-6">
                                We actively buy collections across the state:
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {[
                                    'Austin',
                                    'Dallas',
                                    'Houston',
                                    'San Antonio',
                                    'Fort Worth',
                                    'The Woodlands',
                                    'Sugar Land',
                                    'West Lake Hills',
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
                        Secure Warehouse Intake Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Remote Appraisal',
                                desc: 'Text us photos of your bottles. We provide a guaranteed offer before you drive.',
                            },
                            {
                                step: '02',
                                title: 'Appointment',
                                desc: 'Schedule a secure drop-off at our Austin facility or request a home visit.',
                            },
                            {
                                step: '03',
                                title: 'Inspection',
                                desc: 'We verify condition and authenticity on-site. Professional and discreet.',
                            },
                            {
                                step: '04',
                                title: 'Instant Payment',
                                desc: 'Walk away with a Business Check, Wire, or Instant Transfer.',
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110204.74666358487!2d-97.7430608!3d30.267153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1709240000001!5m2!1sen!2sus"
                    title="Proof Cellars Austin Texas Location"
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
