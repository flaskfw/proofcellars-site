import type { Metadata } from 'next';
import FAQItem from '@/components/FAQItem';
import CTAButton from '@/components/CTAButton';
import { getAllFAQs, generateFAQSchema } from '@/lib/getFAQData';

export const metadata: Metadata = {
  title: 'FAQ',
  description:
    'Common questions about selling wine and spirits to Proof Cellars. Learn about our process, pricing, shipping, and payment.',
  openGraph: {
    title: 'FAQ | Proof Cellars',
    description:
      'Common questions about selling wine and spirits to Proof Cellars. Learn about our process, pricing, shipping, and payment.',
    url: 'https://proofcellars.com/faq',
  },
};

export default function FAQPage() {
  const faqs = getAllFAQs();
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-12">
              Frequently Asked Questions
            </h1>

            <div className="space-y-0">
              {faqs.map((faq) => (
                <FAQItem key={faq.id} faq={faq} />
              ))}
            </div>

            <div className="mt-16 p-8 bg-surface rounded-lg border border-border text-center">
              <h2 className="text-xl font-medium text-primary mb-4">
                Have another question?
              </h2>
              <p className="text-secondary mb-6">
                Get in touch and we will respond as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CTAButton href="/get-offer">Get an Offer</CTAButton>
                <CTAButton href="/contact" variant="secondary">
                  Contact Us
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
