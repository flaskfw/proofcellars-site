import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'Photos to Send for a Fast Quote',
  description:
    'Learn exactly what photos to send when selling wine or spirits. Good vs bad examples, common mistakes to avoid, and a copy-paste text message template.',
  openGraph: {
    title: 'Photos to Send for a Fast Quote | Proof Cellars',
    description:
      'Learn exactly what photos to send when selling wine or spirits. Good vs bad examples, common mistakes to avoid, and a copy-paste text message template.',
    url: 'https://proofcellars.com/resources/photos-for-quote',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Take Photos for a Wine or Spirits Quote',
  description:
    'Step-by-step guide to photographing bottles for an accurate valuation and fast quote.',
  totalTime: 'PT10M',
  supply: [
    { '@type': 'HowToSupply', name: 'Smartphone or camera' },
    { '@type': 'HowToSupply', name: 'Good lighting (natural light preferred)' },
    { '@type': 'HowToSupply', name: 'Clean background' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Photograph the front label',
      text: 'Take a clear, well-lit photo of the front label showing the producer name, product name, and vintage or age statement.',
      image: 'https://proofcellars.com/resources/good_bottle_front.jpg',
    },
    {
      '@type': 'HowToStep',
      name: 'Photograph the back label',
      text: 'Capture the back label if present. This may include batch numbers, bottling dates, or import information.',
      image: 'https://proofcellars.com/resources/good_bottle_back.jpg',
    },
    {
      '@type': 'HowToStep',
      name: 'Photograph the capsule or seal',
      text: 'Show the top of the bottle including the capsule, cork, or seal. This helps verify the bottle has not been opened or tampered with.',
      image: 'https://proofcellars.com/resources/good_capsule_seal.jpg',
    },
    {
      '@type': 'HowToStep',
      name: 'Photograph the fill level',
      text: 'Hold the bottle upright and photograph it so the fill level (liquid line) is clearly visible. For wine, this is measured from the bottom of the cork.',
      image: 'https://proofcellars.com/resources/good_fill_level_example.jpg',
    },
    {
      '@type': 'HowToStep',
      name: 'Photograph the box or packaging',
      text: 'If you have the original box, tube, or wood case, photograph it as well. Original packaging can add value.',
      image: 'https://proofcellars.com/resources/good_box_example.jpg',
    },
    {
      '@type': 'HowToStep',
      name: 'Photograph any flaws',
      text: 'Document any damage, staining, tears, or condition issues. Being upfront helps us provide an accurate quote.',
    },
  ],
};

export default function PhotosForQuotePage() {
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
              <li className="text-primary">Photos for Quote</li>
            </ol>
          </nav>

          {/* Title */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Photos to Send for a Fast Quote
            </h1>
            <p className="mt-4 text-lg text-secondary">
              Good photos help us evaluate your bottles accurately and respond
              quickly. Here is exactly what to send.
            </p>
          </header>

          {/* Quick Answer */}
          <section className="mb-12 p-6 bg-surface rounded-lg border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
              Quick Answer
            </h2>
            <ul className="space-y-2">
              {[
                'Front label: Clear shot showing producer, name, vintage or age',
                'Back label: If present, helps verify batch and origin',
                'Capsule or seal: Top of bottle showing closure is intact',
                'Fill level: Liquid line visible, bottle held upright',
                'Box or packaging: Original packaging adds value',
                'Any flaws: Document damage, stains, or tears upfront',
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
            {/* Front Label */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Front Label
              </h2>
              <p className="text-secondary leading-relaxed">
                The front label is the most important photo. Make sure the
                producer name, product name, and vintage year or age statement
                are clearly readable. Use good lighting and avoid glare.
              </p>
              <div className="mt-6 rounded-lg border border-border overflow-hidden bg-surface">
                <Image
                  src="/resources/good_bottle_front.jpg"
                  alt="Example of a good front label photo"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="p-3 text-sm text-secondary">
                  Good: Label is in focus, well-lit, and fully visible
                </p>
              </div>
            </section>

            {/* Back Label */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Back Label
              </h2>
              <p className="text-secondary leading-relaxed">
                If the bottle has a back label, photograph it. Back labels often
                include batch numbers, bottling dates, importer information, or
                other details that help with identification and valuation.
              </p>
              <div className="mt-6 rounded-lg border border-border overflow-hidden bg-surface">
                <Image
                  src="/resources/good_bottle_back.jpg"
                  alt="Example of a good back label photo"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="p-3 text-sm text-secondary">
                  Good: Back label legible with batch or import info visible
                </p>
              </div>
            </section>

            {/* Capsule or Seal */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Capsule or Seal
              </h2>
              <p className="text-secondary leading-relaxed">
                Show the top of the bottle so we can see the capsule, cork, or
                seal is intact. This confirms the bottle has not been opened or
                tampered with. For spirits, include any tax stamps if present.
              </p>
              <div className="mt-6 rounded-lg border border-border overflow-hidden bg-surface">
                <Image
                  src="/resources/good_capsule_seal.jpg"
                  alt="Example of a good capsule photo"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="p-3 text-sm text-secondary">
                  Good: Capsule intact, no signs of damage or seepage
                </p>
              </div>
            </section>

            {/* Fill Level */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Fill Level
              </h2>
              <p className="text-secondary leading-relaxed">
                Fill level is critical for wine and important for spirits. Hold
                the bottle upright and photograph it so the liquid line is
                visible against the glass. For wine, low fills can significantly
                reduce value.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/good_fill_level_example.jpg"
                    alt="Example of a good fill level"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Good: High fill, liquid line clearly visible
                  </p>
                </div>
                <div className="rounded-lg border border-border overflow-hidden bg-surface">
                  <Image
                    src="/resources/bad_fill_level_example.jpg"
                    alt="Example of a low fill level"
                    width={300}
                    height={400}
                    className="w-full h-auto"
                  />
                  <p className="p-3 text-sm text-secondary">
                    Low fill: Still document it. We can often provide an offer.
                  </p>
                </div>
              </div>
            </section>

            {/* Box or Packaging */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Box or Packaging
              </h2>
              <p className="text-secondary leading-relaxed">
                Original packaging adds value for many bottles. If you have the
                wood case, cardboard box, tube, or presentation case, include a
                photo. Even damaged packaging is worth mentioning.
              </p>
              <div className="mt-6 rounded-lg border border-border overflow-hidden bg-surface">
                <Image
                  src="/resources/good_box_example.jpg"
                  alt="Example of original packaging"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="p-3 text-sm text-secondary">
                  Good: Original wood case with labels visible
                </p>
              </div>
            </section>

            {/* Mid CTA */}
            <div className="my-12 p-8 bg-surface rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Ready to Submit?
              </h2>
              <p className="text-secondary mb-6">
                Send your photos via our form or text them directly.
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

            {/* Text Message Template */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Text Message Template
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                Copy and paste this template when texting your photos to
                213-770-9463:
              </p>
              <pre className="p-4 bg-surface rounded-lg border border-border text-sm text-secondary overflow-x-auto">
{`Name:
City, State:
Bottles:
Photos: front, back, capsule, fill level, box, flaws`}
              </pre>
            </section>

            {/* Common Mistakes */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Common Mistakes to Avoid
              </h2>
              <div className="mt-6 rounded-lg border border-border overflow-hidden bg-surface">
                <Image
                  src="/resources/bad_photos_example.jpg"
                  alt="Example of common photo mistakes"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <p className="p-3 text-sm text-secondary">
                  Problems: Glare, cropped labels, blurry, missing fill level
                </p>
              </div>
              <ul className="mt-6 space-y-3">
                {[
                  'Glare on labels from flash or direct light',
                  'Low resolution or blurry images',
                  'Missing fill level photo',
                  'Cropped or partially visible labels',
                  'Photos taken at extreme angles',
                  'Dark or poorly lit images',
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

            {/* Related Resources */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-xl font-medium text-primary mb-6">
                Related Resources
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Inventory Template', href: '/resources/inventory-template' },
                  { label: 'Packing Guide', href: '/resources/packing-guide' },
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
