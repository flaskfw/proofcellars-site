import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'Resources',
  description:
    'Guides and templates to help you submit your wine and spirits for a fast, accurate offer. Photo tips, inventory templates, packing instructions, and pricing info.',
  openGraph: {
    title: 'Resources | Proof Cellars',
    description:
      'Guides and templates to help you submit your wine and spirits for a fast, accurate offer. Photo tips, inventory templates, packing instructions, and pricing info.',
    url: 'https://proofcellars.com/resources',
  },
};

const resources = [
  {
    title: 'Photos to Send for a Fast Quote',
    description:
      'What photos to take, common mistakes to avoid, and a copy-paste text message template.',
    href: '/resources/photos-for-quote',
  },
  {
    title: 'Inventory Template',
    description:
      'A simple spreadsheet format to list your bottles. Copy-paste or screenshot works too.',
    href: '/resources/inventory-template',
  },
  {
    title: 'Packing and Shipping Guide',
    description:
      'Step-by-step instructions for protecting bottles during transit. Capsule wrapping and sleeve techniques.',
    href: '/resources/packing-guide',
  },
  {
    title: 'How Pricing Works',
    description:
      'What factors affect value and how we arrive at an offer. Demand, condition, provenance, and more.',
    href: '/resources/how-pricing-works',
  },
];

export default function ResourcesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
              Resources
            </h1>
            <p className="mt-6 text-lg text-secondary">
              These guides help you submit faster and get an accurate offer.
              Clear photos and organized information mean we can evaluate your
              bottles quickly and provide a fair quote.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton
                href="/get-offer"
                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                eventParams={{ location: 'resources_hero', href: '/get-offer' }}
              >
                Get an Offer
              </CTAButton>
              <TrackedLink
                href="sms:+12137709463"
                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                eventParams={{ location: 'resources_hero', phone: '2137709463' }}
              >
                Text Photos to 213-770-WINE
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Checklist */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Quick Checklist
            </h2>
            <p className="text-secondary mb-6">
              Include these items when you submit for a quote:
            </p>
            <ul className="space-y-3">
              {[
                'Name',
                'City and State',
                'Bottle list (producer, name, vintage or age, quantity)',
                'Photos: front label, back label, capsule or seal, fill level, box if available, any flaws',
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
          </div>
        </div>
      </section>

      {/* Resource Cards */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
            Guides and Templates
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {resources.map((resource) => (
              <Link
                key={resource.href}
                href={resource.href}
                className="block p-6 rounded-lg border border-border bg-background hover:border-accent transition-colors"
              >
                <h3 className="font-medium text-primary text-lg">
                  {resource.title}
                </h3>
                <p className="mt-2 text-sm text-secondary">
                  {resource.description}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-12 text-center border-t border-border pt-8">
            <p className="text-secondary text-sm">
              Working with clients or estates? See our <Link href="/partners" className="text-accent hover:underline">Partners</Link> page.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Ready to sell?
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Get a direct offer with no consignment fees.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              href="/get-offer"
              eventName={AnalyticsEvents.CLICK_GET_OFFER}
              eventParams={{ location: 'resources_cta_band', href: '/get-offer' }}
            >
              Get an Offer
            </CTAButton>
            <TrackedLink
              href="sms:+12137709463"
              className="text-secondary hover:text-primary transition-colors"
              eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
              eventParams={{ location: 'resources_cta_band', phone: '2137709463' }}
            >
              Or text photos to 213-770-9463 (213-770-WINE)
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
