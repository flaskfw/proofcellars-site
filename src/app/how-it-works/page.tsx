import React from 'react';
import ProcessSteps from '@/components/ProcessSteps';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'How It Works | Proof Cellars',
    description: 'Sell your wine from anywhere with our insurer-approved shipping kits. We pay for the shipping and insurance.',
};

export default function HowItWorksPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-24 sm:py-32 lg:py-40">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
                            Sell Your Wine From Anywhere. We Pay for the Shipping.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-secondary">
                            Our insurers-approved shipping kits make selling from New York, Chicago, or Florida as easy as selling locally.
                        </p>
                    </div>
                </div>
            </div>

            {/* Process Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 pb-24">
                <ProcessSteps />
            </div>

            {/* FAQ Section */}
            <div className="mx-auto max-w-2xl px-6 pb-24 lg:px-8">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-primary mb-8">Frequently Asked Questions</h2>
                <dl className="space-y-8">
                    <div>
                        <dt className="text-base font-semibold leading-7 text-primary">Is it legal?</dt>
                        <dd className="mt-2 text-base leading-7 text-secondary">Yes, with some exceptions. We provide the necessary regulatory paperwork and shipping labels to ensure compliance with all federal and state regulations.</dd>
                    </div>
                    <div>
                        <dt className="text-base font-semibold leading-7 text-primary">What about insurance?</dt>
                        <dd className="mt-2 text-base leading-7 text-secondary">Your shipment is fully insured provided it is packed in the shipper-approved packaging we send you and handed directly to UPS/FedEx. Additional terms may apply for high-value shipments; our offer confirmation email and purchase agreement will include any details where applicable.</dd>
                    </div>
                    <div>
                        <dt className="text-base font-semibold leading-7 text-primary">I have a large collection. Can you come to me?</dt>
                        <dd className="mt-2 text-base leading-7 text-secondary">Yes. For significant collections, our team offers a white-glove service. We will travel to your location, professionally pack the bottles ourselves, and issue payment on the spot.</dd>
                    </div>
                    <div>
                        <dt className="text-base font-semibold leading-7 text-primary">When do I get paid?</dt>
                        <dd className="mt-2 text-base leading-7 text-secondary">We issue payment immediately upon inspection at our facility (typically the same day as delivery). For in-person pickups & dropoffs, we pay on the spot.</dd>
                    </div>
                    <div>
                        <dt className="text-base font-semibold leading-7 text-primary">Do I have to pay for shipping and packaging up-front?</dt>
                        <dd className="mt-2 text-base leading-7 text-secondary">No. We cover the cost of the shipping kit, the protective inserts, and the pre-paid return label.</dd>
                    </div>
                </dl>
            </div>

            {/* CTA Section */}
            <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
                <div className="relative isolate overflow-hidden bg-surface px-6 py-24 text-center shadow-sm sm:rounded-3xl sm:px-16 border border-border">
                    <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                        Ready to get a quote?
                    </h2>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="/get-offer"
                            className="rounded-md bg-accent px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
                        >
                            Get an offer
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
