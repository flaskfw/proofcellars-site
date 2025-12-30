import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import { getAllGuides } from '@/lib/getGuideData';
import type { GuideConfig } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Guides',
  description:
    'Guides for selling wine and spirits. Learn about estate liquidations, condition factors, shipping, and more.',
  openGraph: {
    title: 'Guides | Proof Cellars',
    description:
      'Guides for selling wine and spirits. Learn about estate liquidations, condition factors, shipping, and more.',
    url: 'https://proofcellars.com/guides',
  },
};

function groupGuidesByCategory(guides: GuideConfig[]) {
  const estateGuides = guides.filter((g) => g.category === 'estate');
  const practicalGuides = guides.filter((g) => g.category === 'practical');
  const conditionGuides = guides.filter((g) => g.category === 'condition');
  const safetyGuides = guides.filter((g) => g.category === 'safety');

  return { estateGuides, practicalGuides, conditionGuides, safetyGuides };
}

function GuideCard({ guide }: { guide: GuideConfig }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="block p-6 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
    >
      <h3 className="font-medium text-primary text-lg">{guide.title}</h3>
      <p className="mt-2 text-sm text-secondary line-clamp-3">{guide.summary}</p>
    </Link>
  );
}

export default function GuidesIndexPage() {
  const allGuides = getAllGuides();
  const { estateGuides, practicalGuides, conditionGuides, safetyGuides } =
    groupGuidesByCategory(allGuides);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
              Guides
            </h1>
            <p className="mt-6 text-lg text-secondary">
              Practical information for selling wine and spirits. Whether you
              are handling an estate, downsizing, or simply ready to sell, these
              guides cover what you need to know.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton href="/get-offer">Get an Offer</CTAButton>
              <a
                href="sms:+12137709463"
                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
              >
                Text Photos to 213-770-WINE
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estate and Inheritance Section */}
      {estateGuides.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Estate and Inheritance
            </h2>
            <p className="text-secondary mb-8 max-w-3xl">
              Guides for executors, family members, and anyone handling a wine
              or spirits collection from an estate.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {estateGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Practical Guides Section */}
      {practicalGuides.length > 0 && (
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Selling Basics
            </h2>
            <p className="text-secondary mb-8 max-w-3xl">
              What to know about selling your bottles, from submitting photos to
              understanding your options.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Condition Guides Section */}
      {conditionGuides.length > 0 && (
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Condition and Value
            </h2>
            <p className="text-secondary mb-8 max-w-3xl">
              How condition affects value, and what to look for when evaluating
              your collection.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {conditionGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Safety Guides Section */}
      {safetyGuides.length > 0 && (
        <section className="bg-surface py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
              Safety and Logistics
            </h2>
            <p className="text-secondary mb-8 max-w-3xl">
              Packing, shipping, privacy, and protecting yourself when selling
              valuable bottles.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {safetyGuides.map((guide) => (
                <GuideCard key={guide.slug} guide={guide} />
              ))}
            </div>
          </div>
        </section>
      )}

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
            <CTAButton href="/get-offer">Get an Offer</CTAButton>
            <a
              href="sms:+12137709463"
              className="text-secondary hover:text-primary transition-colors"
            >
              Or text photos to 213-770-9463 (213-770-WINE)
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
