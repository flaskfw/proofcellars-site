import type { Metadata } from 'next';
import CTAButton from '@/components/CTAButton';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Proof Cellars. Call or text 213-770-9463 (213-770-WINE) or email info@proofcellars.com.',
  openGraph: {
    title: 'Contact | Proof Cellars',
    description:
      'Contact Proof Cellars. Call or text 213-770-9463 (213-770-WINE) or email info@proofcellars.com.',
    url: 'https://proofcellars.com/contact',
  },
};

export default function ContactPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary mb-12">
            Contact Us
          </h1>

          <div className="space-y-8">
            {/* Phone */}
            <div>
              <h2 className="text-sm font-medium text-secondary uppercase tracking-wide mb-2">
                Phone
              </h2>
              <p className="text-2xl font-semibold text-primary mb-2">
                <a
                  href="tel:+12137709463"
                  className="hover:text-accent transition-colors"
                >
                  213-770-9463
                </a>
              </p>
              <p className="text-secondary mb-4">(213-770-WINE)</p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+12137709463"
                  className="inline-flex items-center justify-center rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  Tap to Call
                </a>
                <a
                  href="sms:+12137709463"
                  className="inline-flex items-center justify-center rounded-md border border-accent px-4 py-2 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  Tap to Text
                </a>
              </div>
            </div>

            {/* Email */}
            <div>
              <h2 className="text-sm font-medium text-secondary uppercase tracking-wide mb-2">
                Email
              </h2>
              <p className="text-xl">
                <a
                  href="mailto:info@proofcellars.com"
                  className="text-accent hover:text-accent-hover transition-colors"
                >
                  info@proofcellars.com
                </a>
              </p>
            </div>

            {/* Best Way to Reach */}
            <div className="pt-8 border-t border-border">
              <p className="text-secondary">
                The fastest way to reach us is by text or through the Get an Offer form.
              </p>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <CTAButton href="/get-offer">Get an Offer</CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
