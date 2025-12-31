import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'How We Price Wine and Spirits',
  description:
    'Understand what factors affect the value of your wine and spirits. Market demand, condition, provenance, storage history, and why photos matter for accurate quotes.',
  openGraph: {
    title: 'How We Price Wine and Spirits | Proof Cellars',
    description:
      'Understand what factors affect the value of your wine and spirits. Market demand, condition, provenance, storage history, and why photos matter for accurate quotes.',
    url: 'https://proofcellars.com/resources/how-pricing-works',
  },
};

export default function HowPricingWorksPage() {
  return (
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
            <li className="text-primary">How Pricing Works</li>
          </ol>
        </nav>

        {/* Title */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
            How We Price Wine and Spirits
          </h1>
          <p className="mt-4 text-lg text-secondary">
            Several factors determine what we can offer for your bottles. Here
            is what we look at and why.
          </p>
        </header>

        {/* Quick Answer */}
        <section className="mb-12 p-6 bg-surface rounded-lg border border-border">
          <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
            Quick Answer
          </h2>
          <ul className="space-y-2">
            {[
              'Market demand: What buyers are currently paying',
              'Condition: Label, capsule, fill level, and packaging',
              'Provenance: Where the bottle has been stored and by whom',
              'Completeness: Original packaging adds value',
              'Photos help us provide accurate quotes faster',
              'Final offers are confirmed after review and inspection',
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
          {/* Market Demand */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Market Demand
            </h2>
            <p className="text-secondary leading-relaxed">
              The primary driver of value is what the market is currently paying
              for a bottle. We track recent transaction data across auction
              houses, retail channels, and private sales to understand current
              price ranges.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Prices fluctuate based on availability, collector interest, and
              broader market trends. A bottle that sold for a certain price last
              year may be worth more or less today depending on these factors.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              For wines, vintage quality and critic scores can significantly
              affect demand. For spirits, limited releases, discontinued
              bottlings, and allocated products tend to command higher prices.
            </p>
          </section>

          {/* Condition */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Condition
            </h2>
            <p className="text-secondary leading-relaxed">
              Condition is critical for valuation. We assess multiple aspects of
              each bottle:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                {
                  name: 'Label condition',
                  desc: 'Tears, stains, scuffs, or fading reduce value. Pristine labels are preferred.',
                },
                {
                  name: 'Capsule or seal',
                  desc: 'Intact capsules with no signs of seepage or damage. Tax stamps should be present and legible for spirits.',
                },
                {
                  name: 'Fill level',
                  desc: 'For wine, fill is measured from the bottom of the cork. Low fills indicate potential oxidation or evaporation.',
                },
                {
                  name: 'Cork condition',
                  desc: 'For older wines, cork integrity matters. Signs of leakage or push-up affect value.',
                },
                {
                  name: 'Bottle clarity',
                  desc: 'Excessive sediment or cloudiness in wine can be a concern, though some sediment is normal in aged wines.',
                },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-3">
                  <span className="text-accent font-medium flex-shrink-0">-</span>
                  <span className="text-secondary">
                    <span className="font-medium text-primary">{item.name}:</span>{' '}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Provenance */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Provenance and Storage History
            </h2>
            <p className="text-secondary leading-relaxed">
              Where a bottle has been and how it has been stored affects both
              its condition and its perceived value. Provenance is especially
              important for wine, where improper storage can ruin even the
              finest bottles.
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Professional storage (temperature-controlled warehouse, wine storage facility)',
                'Home wine cellar with consistent temperature and humidity',
                'Purchased directly from the winery or distillery',
                'Acquired from a reputable retailer or auction house',
                'Part of a known collection with documented history',
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
            <p className="text-secondary leading-relaxed mt-4">
              Bottles stored in poor conditions (hot garages, fluctuating
              temperatures, bright light) are worth less regardless of their
              label condition. For spirits, storage is less critical but still
              relevant for older or rare bottles.
            </p>
          </section>

          {/* Completeness */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Original Packaging
            </h2>
            <p className="text-secondary leading-relaxed">
              Original packaging can add meaningful value, especially for
              collectible bottles:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                {
                  name: 'Original wood cases (OWC)',
                  desc: 'For wines sold in cases of 6 or 12, having the original wood case adds value.',
                },
                {
                  name: 'Presentation boxes',
                  desc: 'Many premium spirits come in decorative boxes or cases that collectors want.',
                },
                {
                  name: 'Tubes and sleeves',
                  desc: 'Cardboard tubes for Scotch, velvet bags for certain bourbons.',
                },
                {
                  name: 'Documentation',
                  desc: 'Certificates of authenticity, winery release notes, or purchase receipts.',
                },
              ].map((item) => (
                <li key={item.name} className="flex items-start gap-3">
                  <span className="text-accent font-medium flex-shrink-0">-</span>
                  <span className="text-secondary">
                    <span className="font-medium text-primary">{item.name}:</span>{' '}
                    {item.desc}
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-secondary leading-relaxed mt-4">
              Even damaged packaging is worth mentioning. A worn box is better
              than no box for many items.
            </p>
          </section>

          {/* Mid CTA */}
          <div className="my-12 p-8 bg-surface rounded-lg border border-border">
            <h2 className="text-xl font-semibold text-primary mb-4">
              Ready for a Quote?
            </h2>
            <p className="text-secondary mb-6">
              Send photos and details. We respond with an offer based on current
              market data.
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

          {/* Why Photos Matter */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Why Photos Matter
            </h2>
            <p className="text-secondary leading-relaxed">
              Photos allow us to assess condition without seeing the bottles in
              person. The more detail you provide upfront, the more accurate our
              initial quote can be.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              We look for:
            </p>
            <ul className="mt-4 space-y-3">
              {[
                'Label legibility and condition',
                'Capsule integrity and any signs of seepage',
                'Fill level relative to the cork or cap',
                'Any damage, staining, or cosmetic issues',
                'Original packaging condition',
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
            <p className="text-secondary leading-relaxed mt-4">
              Good photos reduce back-and-forth and help us respond faster. See
              our{' '}
              <Link
                href="/resources/photos-for-quote"
                className="text-accent hover:underline"
              >
                photo guide
              </Link>{' '}
              for specific examples of what to send.
            </p>
          </section>

          {/* Quotes vs Final Offers */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              Quotes vs Final Offers
            </h2>
            <p className="text-secondary leading-relaxed">
              Initial quotes are based on the information and photos you
              provide. They represent what we expect to offer assuming the
              bottles match your description.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              Final offers are confirmed after we review the items. If bottles
              arrive in better condition than expected, we may increase our
              offer. If there are issues not visible in photos, we may need to
              adjust.
            </p>
            <p className="text-secondary leading-relaxed mt-4">
              We always discuss any adjustments with you before finalizing. You
              are never obligated to accept a revised offer, and we will return
              items at our expense if we cannot reach agreement.
            </p>
          </section>

          {/* What We Do Not Buy */}
          <section>
            <h2 className="text-2xl font-semibold text-primary mb-4">
              What We Do Not Buy
            </h2>
            <p className="text-secondary leading-relaxed mb-4">
              Some items are outside the scope of what we purchase:
            </p>
            <ul className="space-y-3">
              {[
                'Opened bottles or bottles with broken seals',
                'Items we cannot verify as authentic',
                'Bottles with severe condition issues that affect drinkability',
                'Items that cannot be legally sold or shipped',
                'Extremely common bottles with minimal secondary market value',
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
            <p className="text-secondary leading-relaxed mt-4">
              If you are unsure whether your bottles are of interest, submit
              them anyway. We will let you know what we can work with.
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
                { label: 'Packing Guide', href: '/resources/packing-guide' },
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
  );
}
