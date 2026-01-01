import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import {
  getSellPageData,
  getSellPageSlugs,
  generateBreadcrumbSchema,
  generateFAQSchemaFromPage,
} from '@/lib/getSellPageData';
import { AnalyticsEvents } from '@/lib/analytics';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getSellPageSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = getSellPageData(slug);

  if (!data) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: data.metaTitle.replace(' | Proof Cellars', ''),
    description: data.metaDescription,
    openGraph: {
      title: data.metaTitle,
      description: data.metaDescription,
      url: `https://proofcellars.com/sell/${slug}`,
    },
  };
}

export default async function SellPage({ params }: PageProps) {
  const { slug } = await params;
  const data = getSellPageData(slug);

  if (!data) {
    notFound();
  }

  const breadcrumbSchema = generateBreadcrumbSchema(data.title, slug);
  const faqSchema = generateFAQSchemaFromPage(data.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
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
              <li>
                <Link href="/sell" className="hover:text-primary transition-colors">
                  What We Buy
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary">{data.title}</li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
              {data.heroHeadline}
            </h1>
            <p className="mt-6 text-lg text-secondary">{data.heroSubhead}</p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton
                href="/get-offer"
                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                eventParams={{ location: 'sell_page_hero', href: '/get-offer' }}
              >
                Get an Offer
              </CTAButton>
              <TrackedLink
                href="sms:+12137709463"
                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                eventParams={{ location: 'sell_page_hero', phone: '2137709463' }}
              >
                Text Photos to 213-770-WINE
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-lg text-secondary leading-relaxed">
              {data.introParagraph}
            </p>
          </div>
        </div>
      </section>

      {/* What We Buy / Do Not Buy */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                What We Buy (Examples)
              </h2>
              <p className="text-base text-secondary mb-4">
                These are examples, not a full list. If you have anything else from this producer, including older bottles and odd releases, submit it and we will review it.
              </p>
              <ul className="space-y-3">
                {data.whatWeBuy.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      className="h-5 w-5 text-success flex-shrink-0 mt-0.5"
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
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
                What We Do Not Buy
              </h2>
              <ul className="space-y-3">
                {data.whatWeDoNotBuy.map((item) => (
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
            </div>
          </div>
        </div>
      </section>

      {/* Photo Checklist */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              What to Send for a Quote
            </h2>
            <ul className="space-y-3">
              {data.photoChecklist.map((item) => (
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

      {/* Condition Factors */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Condition Factors
            </h2>
            <ul className="space-y-3">
              {data.conditionFactors.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent font-medium flex-shrink-0">-</span>
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing Factors */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6">
              Pricing Factors
            </h2>
            <ul className="space-y-3">
              {data.pricingFactors.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-accent font-medium flex-shrink-0">-</span>
                  <span className="text-secondary">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
              Common Questions
            </h2>
            <div className="space-y-6">
              {data.faqs.map((faq, index) => (
                <div key={index} className="border-b border-border pb-6 last:border-0">
                  <h3 className="text-base font-medium text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-xl font-medium text-primary mb-6">
              Related
            </h2>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/sell"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                What We Buy
              </Link>
              <Link
                href="/get-offer"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                Get an Offer
              </Link>
              <Link
                href="/resources/photos-for-quote"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                Photos for Quote
              </Link>
              <Link
                href="/resources/how-pricing-works"
                className="inline-flex items-center rounded-md border border-border px-4 py-2 text-sm text-secondary hover:border-accent hover:text-accent transition-colors"
              >
                How Pricing Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary">
            Ready to sell?
          </h2>
          <p className="mt-4 text-lg text-secondary">
            Get a direct offer with no consignment fees.
          </p>
          <p className="mt-2 text-base text-secondary">
            Not sure what you have or do not see it listed? Submit it through the form, or text photos to 213-770-9463.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              href="/get-offer"
              eventName={AnalyticsEvents.CLICK_GET_OFFER}
              eventParams={{ location: 'sell_page_cta_band', href: '/get-offer' }}
            >
              Get an Offer
            </CTAButton>
            <TrackedLink
              href="sms:+12137709463"
              className="text-secondary hover:text-primary transition-colors"
              eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
              eventParams={{ location: 'sell_page_cta_band', phone: '2137709463' }}
            >
              Or text photos to 213-770-9463 (213-770-WINE)
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
