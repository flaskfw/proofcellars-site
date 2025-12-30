import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get an Offer',
  description:
    'Submit photos and details to get a direct offer for your collectible bottles. Use our form or text photos to 213-770-9463.',
  openGraph: {
    title: 'Get an Offer | Proof Cellars',
    description:
      'Submit photos and details to get a direct offer for your collectible bottles. Use our form or text photos to 213-770-9463.',
    url: 'https://proofcellars.com/get-offer',
  },
};

export default function GetOfferPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
            Get an Offer
          </h1>
          <p className="mt-6 text-lg text-secondary">
            Use the form below, or text photos if that is easier.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column: Jotform Embed */}
          <div className="lg:col-span-2">
            <div className="bg-surface rounded-lg border border-border overflow-hidden">
              <iframe
                src="https://form.jotform.com/230785300811146"
                title="Proof Cellars Offer Form"
                className="w-full min-h-[800px] border-0"
                allow="geolocation; microphone; camera"
              />
            </div>
            <p className="mt-4 text-sm text-secondary">
              Having trouble?{' '}
              <a
                href="https://form.jotform.com/230785300811146"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:text-accent-hover transition-colors"
              >
                Open the form in a new tab
              </a>
            </p>
          </div>

          {/* Right Column: Text Option Card */}
          <div className="lg:col-span-1">
            <div className="bg-surface rounded-lg border border-border p-6 sticky top-24">
              <h3 className="text-xl font-medium text-primary mb-4">
                Text Photos Instead
              </h3>
              <p className="text-secondary mb-4">Send your submission to:</p>

              <div className="bg-background rounded-lg p-4 mb-4">
                <p className="text-2xl font-semibold text-primary">
                  213-770-9463
                </p>
                <p className="text-sm text-secondary">(213-770-WINE)</p>
              </div>

              <div className="flex flex-col gap-3 mb-6">
                <a
                  href="sms:+12137709463"
                  className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-3 text-sm font-medium text-white hover:bg-accent-hover transition-colors"
                >
                  Tap to Text
                </a>
                <a
                  href="tel:+12137709463"
                  className="inline-flex items-center justify-center rounded-md border border-accent px-4 py-3 text-sm font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                >
                  Tap to Call
                </a>
              </div>

              <div className="border-t border-border pt-6">
                <h4 className="text-sm font-medium text-primary mb-3">
                  What to include:
                </h4>
                <ul className="space-y-2">
                  {[
                    'Your name',
                    'City and state',
                    'Bottle list (names, sizes, vintages)',
                    'Photos: front label, back label, capsule/seal, fill level, box if available, any flaws',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-secondary">
                      <svg
                        className="h-4 w-4 text-accent flex-shrink-0 mt-0.5"
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
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mt-6 text-sm text-secondary">
                We typically respond within one business day.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
