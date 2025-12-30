import type { Metadata } from 'next';
import GetOfferPageClient, {
  GetOfferSidebar,
  JotformNewTabLink,
} from '@/components/GetOfferPageClient';

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
      {/* Client component for view tracking */}
      <GetOfferPageClient />

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
              Having trouble? <JotformNewTabLink />
            </p>
          </div>

          {/* Right Column: Text Option Card */}
          <GetOfferSidebar />
        </div>
      </div>
    </section>
  );
}
