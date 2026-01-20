import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import ProcessSteps from '@/components/ProcessSteps';
import PaymentMethods from '@/components/PaymentMethods';
import SellerTestimonials from '@/components/SellerTestimonials';
import PhotoChecklist from '@/components/PhotoChecklist';
import FAQItem from '@/components/FAQItem';
import { Reveal } from '@/components/motion/Reveal';
import { getFirstNFAQs } from '@/lib/getFAQData';
import { AnalyticsEvents } from '@/lib/analytics';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  description:
    'Direct buyer of collectible wine and spirits. Sell Bourbon, Scotch, and Fine Wine. No fees. Just text us photos and get an offer.',
};

export default function Home() {
  const previewFaqs = getFirstNFAQs(6);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Proof Cellars',
    url: 'https://proofcellars.com',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-213-770-9463',
      contactType: 'sales',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      {/* Hero Section - Editorial restraint with whitespace
          Inline styles used for critical above-the-fold content to enable instant rendering
          without waiting for CSS chunks or JavaScript hydration */}
      <section style={{
        backgroundColor: '#FFFFFF',
        padding: '64px 16px',
      }}>
        <div style={{
          margin: '0 auto',
          maxWidth: '1280px',
          padding: '0 16px',
        }}>
          <div style={{ maxWidth: '768px' }}>
            <h1>
              Direct buyer of collectible wine and spirits.
            </h1>
            <p style={{
              marginTop: '24px',
              fontSize: '18px',
              lineHeight: '1.6',
              color: '#6B6258',
            }}>
              Sell Bourbon, Scotch, and Fine Wine. No consignment. No auctions. Just a direct offer.
            </p>
            <div style={{
              marginTop: '32px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}>
              <Link
                href="/get-offer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  minHeight: '44px',
                  fontSize: '16px',
                  fontWeight: '500',
                  backgroundColor: '#1B2A41',
                  color: '#FFFFFF',
                  border: '1px solid transparent',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  transition: 'border-color 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Get an Offer
              </Link>
              <a
                href="sms:+12137709463"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 24px',
                  minHeight: '44px',
                  fontSize: '16px',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  color: '#1A1A1A',
                  border: '1px solid #E6E1D8',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  transition: 'border-color 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                Text Photos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-12">
              How It Works
            </h2>
          </Reveal>
          <ProcessSteps />
          <Reveal delay={0.48}>
            <PaymentMethods />
          </Reveal>
        </div>
      </section>

      {/* What We Buy Section */}
      <section id="what-we-buy" className="bg-[var(--color-surface)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-12">
              What We Buy
            </h2>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="mb-4">We buy:</h3>
              <ul className="space-y-3">
                {[
                  'Bourbon and American whiskey (Pappy Van Winkle, BTAC, allocated releases)',
                  'Scotch whisky (Macallan, rare single malts, limited editions)',
                  'Fine wine (Bordeaux, Burgundy, Napa cult wines)',
                  'Champagne (Dom Perignon, Krug, Cristal, Salon)',
                  'Cognac and other collectible spirits',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-[var(--color-success)] flex-shrink-0 mt-0.5"
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
                    <span className="text-[var(--color-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="mb-4">
                We typically do not buy:
              </h3>
              <ul className="space-y-3">
                {[
                  'Opened bottles',
                  'Heavily damaged or leaking bottles',
                  'Low-value or common items',
                  'Items we cannot legally purchase in your state',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-[var(--color-danger)] flex-shrink-0 mt-0.5"
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
                    <span className="text-[var(--color-text)]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Send Section */}
      <section className="py-16 md:py-24 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="mb-8">
              What to Send for a Quote
            </h2>
            <PhotoChecklist />
          </div>
        </div>
      </section>

      {/* Condition Section */}
      <section className="bg-[var(--color-surface)] py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-8">
            Condition Factors That Affect Value
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
            {[
              {
                title: 'Fill level',
                description: 'Higher is better. Low fills reduce value significantly.',
              },
              {
                title: 'Seal and capsule',
                description:
                  'Intact seals matter. Signs of tampering or leakage are disqualifying.',
              },
              {
                title: 'Label condition',
                description:
                  'Tears, stains, or fading reduce value but do not always disqualify.',
              },
              {
                title: 'Original packaging',
                description: 'Boxes, papers, and tubes add value when present.',
              },
              {
                title: 'Storage history',
                description: 'Proper storage matters for wine especially.',
              },
              {
                title: 'Authenticity',
                description: 'We verify during inspection and will flag concerns.',
              },
            ].map((item) => (
              <li key={item.title} className="flex items-start gap-3">
                <span className="text-[var(--color-text-muted)] font-medium flex-shrink-0">—</span>
                <div>
                  <span className="font-medium text-[var(--color-heading)]">{item.title}:</span>{' '}
                  <span className="text-[var(--color-text)]">{item.description}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Proof Cellars Section */}
      <section className="py-16 md:py-24 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8">
              Why Proof Cellars
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
              {[
                'Direct offers with no consignment and no seller fees.',
                'Clear process from submission to payment.',
                'Responsive communication. We reply to every inquiry.',
                'Your information stays private. We do not publish seller details.',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg
                    className="h-5 w-5 text-[var(--color-success)] flex-shrink-0 mt-0.5"
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
                  <span className="text-[var(--color-text)]">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Testimonials Section */}
      <SellerTestimonials />

      {/* FAQ Preview Section */}
      <section className="bg-[var(--color-surface)] py-16 md:py-24 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal>
            <h2 className="mb-8">
              Common Questions
            </h2>
          </Reveal>
          <div className="max-w-3xl">
            {previewFaqs.map((faq) => (
              <FAQItem key={faq.id} faq={faq} />
            ))}
            <div className="mt-8">
              <Link
                href="/faq"
                className="font-medium"
              >
                See all questions
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 md:py-24 section-divider">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2>
            Ready to sell?
          </h2>
          <p className="mt-4 text-lg text-[var(--color-text-muted)]">
            Get a direct offer for your bottles.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              href="/get-offer"
              eventName={AnalyticsEvents.CLICK_GET_OFFER}
              eventParams={{ location: 'cta_band', href: '/get-offer' }}
            >
              Get an Offer
            </CTAButton>
            <TrackedLink
              href="sms:+12137709463"
              className=""
              eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
              eventParams={{ location: 'cta_band', phone: '2137709463' }}
            >
              Or text photos to 213-770-9463
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
