import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import {
  getGuideData,
  getGuideSlugs,
  generateGuideFAQSchema,
  generateArticleSchema,
} from '@/lib/getGuideData';
import { AnalyticsEvents } from '@/lib/analytics';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getGuideSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuideData(slug);

  if (!guide) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: guide.metaTitle.replace(' | Proof Cellars', ''),
    description: guide.metaDescription,
    openGraph: {
      title: guide.metaTitle,
      description: guide.metaDescription,
      url: `https://proofcellars.com/guides/${slug}`,
      type: 'article',
    },
  };
}

export default async function GuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideData(slug);

  if (!guide) {
    notFound();
  }

  const faqSchema = generateGuideFAQSchema(guide.faqs);
  const articleSchema = generateArticleSchema(guide);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
                <Link href="/guides" className="hover:text-primary transition-colors">
                  Guides
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary">{guide.title}</li>
            </ol>
          </nav>

          {/* Title */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              {guide.title}
            </h1>
            <p className="mt-4 text-lg text-secondary">{guide.summary}</p>
          </header>

          {/* Table of Contents */}
          <nav className="mb-12 p-6 bg-surface rounded-lg border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
              In This Guide
            </h2>
            <ul className="space-y-2">
              {guide.tableOfContents.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#section-${index}`}
                    className="text-secondary hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#faq"
                  className="text-secondary hover:text-accent transition-colors"
                >
                  Frequently Asked Questions
                </a>
              </li>
            </ul>
          </nav>

          {/* Content Sections */}
          <div className="prose prose-lg max-w-none">
            {guide.sections.map((section, index) => (
              <section key={index} id={`section-${index}`} className="mb-12">
                <h2 className="text-2xl font-semibold text-primary mb-4">
                  {section.heading}
                </h2>
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-secondary mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
                {section.list && section.list.length > 0 && (
                  <ul className="space-y-2 mt-4">
                    {section.list.map((item, lIndex) => (
                      <li key={lIndex} className="flex items-start gap-3">
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
                )}
              </section>
            ))}
          </div>

          {/* CTA Block */}
          <div className="my-12 p-8 bg-surface rounded-lg border border-border">
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
                eventParams={{ location: 'guide_cta_block', href: '/get-offer' }}
              >
                Get an Offer
              </CTAButton>
              <TrackedLink
                href="sms:+12137709463"
                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                eventParams={{ location: 'guide_cta_block', phone: '2137709463' }}
              >
                Text Photos to 213-770-WINE
              </TrackedLink>
            </div>
          </div>

          {/* FAQ Section */}
          <section id="faq" className="my-12">
            <h2 className="text-2xl font-semibold text-primary mb-8">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {guide.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-border pb-6 last:border-0"
                >
                  <h3 className="text-base font-medium text-primary mb-2">
                    {faq.question}
                  </h3>
                  <p className="text-secondary">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Related Pages */}
          {guide.relatedLinks && guide.relatedLinks.length > 0 && (
            <section className="my-12 pt-8 border-t border-border">
              <h2 className="text-xl font-medium text-primary mb-6">
                Related Pages
              </h2>
              <div className="flex flex-wrap gap-3">
                {guide.relatedLinks.map((link) => (
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
          )}
        </div>
      </article>
    </>
  );
}
