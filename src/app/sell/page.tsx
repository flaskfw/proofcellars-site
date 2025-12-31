import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { getAllSellPages } from '@/lib/getSellPageData';
import type { SellPageConfig } from '@/lib/types';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'What We Buy',
  description:
    'Proof Cellars buys bourbon, scotch, wine, and champagne. Browse our categories to learn what we purchase and get a direct offer.',
  openGraph: {
    title: 'What We Buy | Proof Cellars',
    description:
      'Proof Cellars buys bourbon, scotch, wine, and champagne. Browse our categories to learn what we purchase and get a direct offer.',
    url: 'https://proofcellars.com/sell',
  },
};

function groupPagesByCategory(pages: SellPageConfig[]) {
  const bourbonPages = pages.filter((p) => p.categoryType === 'bourbon');
  const scotchPages = pages.filter((p) => p.categoryType === 'scotch');
  const winePages = pages.filter((p) => p.categoryType === 'wine' || p.categoryType === 'champagne');

  return { bourbonPages, scotchPages, winePages };
}

function PageCard({ page }: { page: SellPageConfig }) {
  return (
    <Link
      href={`/sell/${page.slug}`}
      className="block p-4 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
    >
      <h3 className="font-medium text-primary">{page.title}</h3>
      <p className="mt-1 text-sm text-secondary line-clamp-2">
        {page.heroSubhead}
      </p>
    </Link>
  );
}

export default function SellIndexPage() {
  const allPages = getAllSellPages();
  const { bourbonPages, scotchPages, winePages } = groupPagesByCategory(allPages);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-primary">
              What We Buy
            </h1>
            <p className="mt-6 text-lg text-secondary">
              We buy collectible wine and spirits directly. Browse the categories below to see what we purchase, or submit your bottles for a direct offer.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <CTAButton
                href="/get-offer"
                eventName={AnalyticsEvents.CLICK_GET_OFFER}
                eventParams={{ location: 'sell_index_hero', href: '/get-offer' }}
              >
                Get an Offer
              </CTAButton>
              <TrackedLink
                href="sms:+12137709463"
                className="inline-flex items-center justify-center rounded-md border border-accent px-6 py-3 text-base font-medium text-accent hover:bg-accent hover:text-white transition-colors"
                eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
                eventParams={{ location: 'sell_index_hero', phone: '2137709463' }}
              >
                Text Photos to 213-770-WINE
              </TrackedLink>
            </div>
          </div>
        </div>
      </section>

      {/* Bourbon Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Bourbon and American Whiskey
          </h2>
          <p className="text-secondary mb-8 max-w-3xl">
            We buy allocated and collectible bourbon including Van Winkle, Buffalo Trace Antique Collection, Blanton's, Weller, and other limited releases. Single bottles and collections are both welcome.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bourbonPages.map((page) => (
              <PageCard key={page.slug} page={page} />
            ))}
          </div>
        </div>
      </section>

      {/* Scotch Section */}
      <section className="bg-surface py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Scotch and Japanese Whisky
          </h2>
          <p className="text-secondary mb-8 max-w-3xl">
            We buy rare single malts, limited editions, and aged expressions from distilleries including Macallan, Springbank, Ardbeg, and Lagavulin. We also purchase collectible Japanese whisky from Yamazaki, Hibiki, and other producers.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {scotchPages.map((page) => (
              <PageCard key={page.slug} page={page} />
            ))}
          </div>
        </div>
      </section>

      {/* Wine Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Wine and Champagne
          </h2>
          <p className="text-secondary mb-8 max-w-3xl">
            We buy fine wine from Bordeaux, Burgundy, Napa Valley, and other collectible regions. We also purchase prestige champagne including Dom Perignon, Krug, and Cristal. Full cellar buyouts and estate liquidations are welcome.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {winePages.map((page) => (
              <PageCard key={page.slug} page={page} />
            ))}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4">
            Seller Resources
          </h2>
          <p className="text-secondary mb-8 max-w-3xl">
            Guides and templates to help you submit faster and get an accurate offer.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link
              href="/resources/photos-for-quote"
              className="block p-4 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
            >
              <h3 className="font-medium text-primary">Photos for Quote</h3>
              <p className="mt-1 text-sm text-secondary">What photos to send for a fast, accurate offer.</p>
            </Link>
            <Link
              href="/resources/inventory-template"
              className="block p-4 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
            >
              <h3 className="font-medium text-primary">Inventory Template</h3>
              <p className="mt-1 text-sm text-secondary">A simple format to list your bottles.</p>
            </Link>
            <Link
              href="/resources/packing-guide"
              className="block p-4 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
            >
              <h3 className="font-medium text-primary">Packing Guide</h3>
              <p className="mt-1 text-sm text-secondary">How to pack bottles safely for shipping.</p>
            </Link>
            <Link
              href="/resources/how-pricing-works"
              className="block p-4 rounded-lg border border-border bg-surface hover:border-accent transition-colors"
            >
              <h3 className="font-medium text-primary">How Pricing Works</h3>
              <p className="mt-1 text-sm text-secondary">What factors affect value and offers.</p>
            </Link>
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
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              href="/get-offer"
              eventName={AnalyticsEvents.CLICK_GET_OFFER}
              eventParams={{ location: 'sell_index_cta_band', href: '/get-offer' }}
            >
              Get an Offer
            </CTAButton>
            <TrackedLink
              href="sms:+12137709463"
              className="text-secondary hover:text-primary transition-colors"
              eventName={AnalyticsEvents.CLICK_TEXT_PHOTOS}
              eventParams={{ location: 'sell_index_cta_band', phone: '2137709463' }}
            >
              Or text photos to 213-770-9463 (213-770-WINE)
            </TrackedLink>
          </div>
        </div>
      </section>
    </>
  );
}
