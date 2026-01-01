import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
    title: 'Partners',
    description:
        'A discreet service for estate attorneys, executors, and family offices to liquidate wine and spirits collections.',
    openGraph: {
        title: 'Partners | Proof Cellars',
        description:
            'A discreet service for estate attorneys, executors, and family offices to liquidate wine and spirits collections.',
        url: 'https://proofcellars.com/partners',
    },
};

export default function PartnersPage() {
    const faqSchema = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: [
            {
                '@type': 'Question',
                name: 'What types of bottles do you buy?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We buy collectible wine (Bordeaux, Burgundy, Napa, Champagne) and rare spirits (Scotch, Bourbon, Japanese Whisky). We focus on premium, well-stored bottles.',
                },
            },
            {
                '@type': 'Question',
                name: 'Do you work with partial collections?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. We are happy to evaluate partial collections or specific high-value items within a larger estate.',
                },
            },
            {
                '@type': 'Question',
                name: 'What information do you need for a quote?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'An inventory list (Excel or PDF) is best. If no list exists, clear photos of the bottles (spines or labels) are sufficient for an initial review.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do you handle confidentiality?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We understand the sensitive nature of estate work. We do not publish seller names and can work under NDA if required by the estate.',
                },
            },
            {
                '@type': 'Question',
                name: 'How do logistics work?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We coordinate all packing and shipping. For large collections, we can arrange white-glove pickup services.',
                },
            },
            {
                '@type': 'Question',
                name: 'What is the expected timeline?',
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We typically provide an offer within 48 hours of receiving the details. Payment is immediate upon inspection and authentication.',
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            {/* Breadcrumb */}
            <section className="bg-surface pt-8 pb-0">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <nav>
                        <ol className="flex items-center gap-2 text-sm text-secondary">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Home
                                </Link>
                            </li>
                            <li>/</li>
                            <li className="text-primary">Partners</li>
                        </ol>
                    </nav>
                </div>
            </section>

            {/* Hero Section */}
            <section className="bg-surface py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
                            Partners
                        </h1>
                        <p className="mt-6 text-xl text-secondary">
                            A discreet way to connect clients with a direct buyer of collectible
                            wine and spirits.
                        </p>
                    </div>
                </div>
            </section>

            {/* Who this is for */}
            <section className="py-16 md:py-24 border-b border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-primary mb-8">
                        Who We Work With
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            'Estate attorneys and executors',
                            'Wine storage facilities',
                            'House managers and family offices',
                            'Moving and relocation firms',
                            'Professional organizers',
                            'Hospitality groups processing closeouts',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <svg
                                    className="h-5 w-5 text-accent flex-shrink-0"
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
                                <span className="text-secondary">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* What we do */}
            <section className="bg-surface py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h2 className="text-2xl font-semibold text-primary mb-6">
                                Direct Purchase Solution
                            </h2>
                            <div className="space-y-4 text-secondary">
                                <p>
                                    We buy collectible wine and spirits directly. This is not an
                                    auction process with uncertain results and long lead times, nor
                                    is it a consignment arrangement where you wait months for
                                    payment.
                                </p>
                                <p>
                                    We can handle anything from single investment grade bottles to
                                    entire cellars containing thousands of bottles.
                                </p>
                                <p>
                                    We work with your existing inventory lists or photos, keeping
                                    the workload light for you and your team.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-semibold text-primary mb-6">
                                What to Send Us
                            </h2>
                            <ul className="space-y-4 text-secondary">
                                <li className="flex items-start gap-3">
                                    <span className="font-medium text-primary flex-shrink-0">
                                        1.
                                    </span>
                                    <span>Your name, role, and contact details.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-medium text-primary flex-shrink-0">
                                        2.
                                    </span>
                                    <span>Location of the collection (City/State).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-medium text-primary flex-shrink-0">
                                        3.
                                    </span>
                                    <span>
                                        Inventory list (Excel/PDF) or general photos of the bottles.
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-medium text-primary flex-shrink-0">
                                        4.
                                    </span>
                                    <span>Any specific timeline constraints.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-primary mb-12 text-center">
                        The Process
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                step: '01',
                                title: 'Introduction',
                                text: 'Reach out via our form or email. Provide a brief overview of the collection.',
                            },
                            {
                                step: '02',
                                title: 'Review',
                                text: 'We analyze the list or photos and determine market value.',
                            },
                            {
                                step: '03',
                                title: 'Offer',
                                text: 'We present a direct purchase offer for the collection.',
                            },
                            {
                                step: '04',
                                title: 'Completion',
                                text: 'Once accepted, we arrange logistics and release payment.',
                            },
                        ].map((p) => (
                            <div key={p.step} className="bg-surface p-6 rounded-lg border border-border">
                                <div className="text-3xl font-bold text-accent mb-4">
                                    {p.step}
                                </div>
                                <h3 className="text-lg font-medium text-primary mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-sm text-secondary">{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Confidentiality */}
            <section className="bg-surface py-16 md:py-24 border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-2xl font-semibold text-primary mb-6">
                            Confidentiality and Professionalism
                        </h2>
                        <p className="text-secondary mb-8">
                            We handle every transaction with discretion. We do not publish
                            seller names and are accustomed to working with high profile
                            estates. We can accommodate reasonable confidentiality requests and
                            NDAs where permitted by law.
                        </p>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 md:py-24">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <h2 className="text-2xl font-semibold text-primary mb-12">
                        Common Questions
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                        {[
                            {
                                q: 'What types of bottles do you buy?',
                                a: 'We buy collectible wine (Bordeaux, Burgundy, Napa, Champagne) and rare spirits (Scotch, Bourbon, Japanese Whisky). We focus on premium, well stored bottles.',
                            },
                            {
                                q: 'Do you work with partial collections?',
                                a: 'Yes. We are happy to evaluate partial collections or specific high value items within a larger estate.',
                            },
                            {
                                q: 'What information do you need for a quote?',
                                a: 'An inventory list (Excel or PDF) is best. If no list exists, clear photos of the bottles (spines or labels) are sufficient for an initial review.',
                            },
                            {
                                q: 'How do you handle confidentiality?',
                                a: 'We understand the sensitive nature of estate work. We do not publish seller names and can work under NDA if required by the estate.',
                            },
                            {
                                q: 'How do logistics work?',
                                a: 'We coordinate all packing and shipping. For large collections, we can arrange white glove pickup services.',
                            },
                            {
                                q: 'What is the expected timeline?',
                                a: 'We typically provide an offer within 48 hours of receiving the details. Payment is released after inspection and final review.',
                            },
                        ].map((faq) => (
                            <div key={faq.q}>
                                <h3 className="text-base font-medium text-primary mb-2">
                                    {faq.q}
                                </h3>
                                <p className="text-secondary text-sm">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-surface py-16 md:py-24 border-t border-border">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary">
                        Partner with Proof Cellars
                    </h2>
                    <p className="mt-4 text-lg text-secondary">
                        A simple, direct solution for your clients.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <CTAButton
                            href="/get-offer"
                            eventName={AnalyticsEvents.CLICK_GET_OFFER}
                            eventParams={{ location: 'partner_cta', href: '/get-offer' }}
                        >
                            Introduce a Client
                        </CTAButton>
                        <TrackedLink
                            href="sms:+12137709463"
                            className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                            eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                            eventParams={{ location: 'partner_cta', phone: '2137709463' }}
                        >
                            Text Photos
                        </TrackedLink>
                    </div>
                    <div className="mt-8 text-secondary">
                        <p>213-770-9463 (213-770-WINE)</p>
                        <p className="mt-1">info@proofcellars.com</p>
                    </div>
                </div>
            </section>
        </>
    );
}
