import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'Packing and Shipping Guide',
  description:
    'Step-by-step packing instructions for wine and spirits. Capsule protection, bottle sleeves, and shipping best practices to prevent damage.',
  openGraph: {
    title: 'Packing and Shipping Guide | Proof Cellars',
    description:
      'Step-by-step packing instructions for wine and spirits. Capsule protection, bottle sleeves, and shipping best practices to prevent damage.',
    url: 'https://proofcellars.com/resources/packing-guide',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Pack Wine and Spirits for Shipping',
  description:
    'Step-by-step guide to safely packing wine and spirits bottles for shipping, including capsule protection and bottle sleeve techniques.',
  totalTime: 'PT20M',
  supply: [
    { '@type': 'HowToSupply', name: 'Bubble wrap' },
    { '@type': 'HowToSupply', name: 'Rubber bands' },
    { '@type': 'HowToSupply', name: 'Bottle sleeves or foam inserts' },
    { '@type': 'HowToSupply', name: 'Sturdy shipping box' },
    { '@type': 'HowToSupply', name: 'Packing tape' },
    { '@type': 'HowToSupply', name: 'Packing paper or additional padding' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Protect the capsule',
      text: 'Wrap a small piece of bubble wrap around the capsule and neck of the bottle. Secure with a rubber band. This protects the most fragile part.',
      image: 'https://proofcellars.com/resources/packing_capsule_bubblewrap_step1.png',
    },
    {
      '@type': 'HowToStep',
      name: 'Secure the bubble wrap',
      text: 'Make sure the bubble wrap covers the entire capsule and extends slightly down the neck. Use a rubber band to hold it in place.',
      image: 'https://proofcellars.com/resources/packing_capsule_bubblewrap_step2.png',
    },
    {
      '@type': 'HowToStep',
      name: 'Double-check capsule protection',
      text: 'Ensure the capsule is fully covered and the wrap is secure. The capsule should not be exposed.',
      image: 'https://proofcellars.com/resources/packing_capsule_bubblewrap_step3.png',
    },
    {
      '@type': 'HowToStep',
      name: 'Insert bottle into sleeve',
      text: 'Slide the bottle into a protective sleeve or foam insert. If using a wine shipper, place the bottle in the styrofoam cutout.',
      image: 'https://proofcellars.com/resources/packing_bottle_sleeve_step1.jpg',
    },
    {
      '@type': 'HowToStep',
      name: 'Secure the sleeve',
      text: 'Make sure the bottle fits snugly in the sleeve. The bottle should not move or shift inside the sleeve.',
      image: 'https://proofcellars.com/resources/packing_bottle_sleeve_step2.jpg',
    },
    {
      '@type': 'HowToStep',
      name: 'Place in shipping box',
      text: 'Place the sleeved bottle in the shipping box. Fill any gaps with packing paper. Bottles should not touch each other or the box walls.',
      image: 'https://proofcellars.com/resources/packing_bottle_sleeve_step3.jpg',
    },
  ],
};

export default function PackingGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <article className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-secondary">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link
                  href="/resources"
                  className="hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary">Packing Guide</li>
            </ol>
          </nav>

          {/* Title */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Packing and Shipping Guide
            </h1>
            <p className="mt-4 text-lg text-secondary">
              Proper packing protects your bottles during transit. Follow these
              steps to prevent damage.
            </p>
          </header>

          {/* Quick Answer */}
          <section className="mb-12 p-6 bg-surface rounded-lg border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
              Quick Answer
            </h2>
            <ul className="space-y-2">
              {[
                'Wrap bubble wrap around the capsule and neck first',
                'Use a rubber band to secure the wrap',
                'Slide bottle into a protective sleeve or foam insert',
                'Place in a sturdy box with bottles separated',
                'Fill gaps with packing paper so nothing shifts',
                'We confirm shipping details after reviewing your submission',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
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
                </li>
              ))}
            </ul>
          </section>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-12">
            {/* Capsule Protection */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Step 1: Protect the Capsule
              </h2>
              <p className="text-secondary leading-relaxed">
                The capsule and neck are the most vulnerable parts of the
                bottle. Start by wrapping a small piece of bubble wrap around
                the capsule and neck, then secure it with a rubber band.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/packing_capsule_bubblewrap_step1.png"
                    alt="Step 1: Wrap bubble wrap around capsule"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Wrap bubble wrap around capsule
                  </p>
                </div>
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/packing_capsule_bubblewrap_step2.png"
                    alt="Step 2: Secure with rubber band"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Secure with rubber band
                  </p>
                </div>
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/packing_capsule_bubblewrap_step3.png"
                    alt="Step 3: Capsule fully protected"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Capsule fully protected
                  </p>
                </div>
              </div>
            </section>

            {/* Bottle Sleeve */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Step 2: Use a Bottle Sleeve
              </h2>
              <p className="text-secondary leading-relaxed">
                Slide the bottle into a protective sleeve or foam insert. If
                using a wine shipper box, place the bottle in the styrofoam
                cutout. The bottle should fit snugly and not move around.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/packing_bottle_sleeve_step1.jpg"
                    alt="Step 1: Insert bottle into sleeve"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Insert bottle into sleeve
                  </p>
                </div>
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/packing_bottle_sleeve_step2.jpg"
                    alt="Step 2: Ensure snug fit"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Ensure snug fit
                  </p>
                </div>
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/packing_bottle_sleeve_step3.jpg"
                    alt="Step 3: Place in shipping box"
                    width={300}
                    height={300}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Place in shipping box
                  </p>
                </div>
              </div>
            </section>

            {/* Box Packing */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Step 3: Pack the Box
              </h2>
              <p className="text-secondary leading-relaxed">
                Place sleeved bottles in the shipping box. Fill all gaps with
                packing paper or additional padding. Bottles should not touch
                each other or the box walls. The box should feel solid with no
                shifting when shaken gently.
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  'Use a sturdy double-walled box',
                  'Keep bottles separated from each other',
                  'Fill all empty space with packing material',
                  'Tape the box securely with packing tape',
                  'Mark the box as fragile if desired',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-accent flex-shrink-0 mt-0.5"
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
                  </li>
                ))}
              </ul>
            </section>

            {/* Mid CTA */}
            <div className="my-12 p-8 bg-surface rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Ready to Submit?
              </h2>
              <p className="text-secondary mb-6">
                Send your photos and inventory. We confirm shipping details
                after reviewing your submission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <CTAButton
                  href="/get-offer"
                  eventName={AnalyticsEvents.CLICK_GET_OFFER}
                  eventParams={{
                    location: 'resource_cta_mid',
                    href: '/get-offer',
                  }}
                >
                  Get an Offer
                </CTAButton>
                <TrackedLink
                  href="sms:+12137709463"
                  className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                  eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                  eventParams={{
                    location: 'resource_cta_mid',
                    phone: '2137709463',
                  }}
                >
                  Text Photos to 213-770-WINE
                </TrackedLink>
              </div>
            </div>

            {/* Do Not List */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                What Not to Do
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                Avoid these common mistakes that can damage bottles or reduce
                value:
              </p>
              <ul className="space-y-3">
                {[
                  'Do not tape labels directly. Tape residue damages labels and reduces value.',
                  'Do not use loose packing peanuts. They shift and provide poor protection.',
                  'Do not ship without protecting the capsule. This is the most common cause of damage.',
                  'Do not ship opened bottles. We cannot purchase bottles that have been opened.',
                  'Do not clean or scrape labels. Leave bottles as they are.',
                  'Do not ship in extreme heat. Avoid summer shipping when possible.',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-error flex-shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-secondary">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Shipping Note */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                About Shipping
              </h2>
              <p className="text-secondary leading-relaxed">
                Shipping arrangements depend on your location and the items
                involved. We confirm next steps after reviewing your submission.
                For smaller shipments, we typically provide prepaid shipping
                labels. For larger collections, we may arrange pickup.
              </p>
              <p className="text-secondary leading-relaxed mt-4">
                Transactions are handled where permitted by applicable
                regulations. We will discuss logistics and confirm details
                before anything ships.
              </p>
            </section>

            {/* Related Resources */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-xl font-medium text-primary mb-6">
                Related Resources
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Photos for Quote', href: '/resources/photos-for-quote' },
                  { label: 'Inventory Template', href: '/resources/inventory-template' },
                  { label: 'How Pricing Works', href: '/resources/how-pricing-works' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-secondary hover:border-accent hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </section>
          </div>

          {/* End CTA */}
          <div className="mt-12 p-8 bg-surface rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-primary mb-4">
              What to Do Next
            </h2>
            <p className="text-secondary mb-6">
              Ready to get an offer for your bottles? Submit photos and details
              through our form, or text photos directly if that is easier.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <CTAButton
                href="/get-offer"
                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                eventParams={{
                  location: 'resource_cta_end',
                  href: '/get-offer',
                }}
              >
                Get an Offer
              </CTAButton>
              <TrackedLink
                href="sms:+12137709463"
                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                eventParams={{
                  location: 'resource_cta_end',
                  phone: '2137709463',
                }}
              >
                Text Photos to 213-770-WINE
              </TrackedLink>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
