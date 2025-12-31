import type { Metadata } from 'next';
import Link from 'next/link';
import CTAButton from '@/components/CTAButton';
import TrackedLink from '@/components/TrackedLink';
import { AnalyticsEvents } from '@/lib/analytics';

export const metadata: Metadata = {
  title: 'Inventory Template for Wine and Spirits',
  description:
    'A simple spreadsheet template to list your wine and spirits for sale. Columns for category, producer, vintage, quantity, and more. Copy-paste or screenshot works too.',
  openGraph: {
    title: 'Inventory Template for Wine and Spirits | Proof Cellars',
    description:
      'A simple spreadsheet template to list your wine and spirits for sale. Columns for category, producer, vintage, quantity, and more. Copy-paste or screenshot works too.',
    url: 'https://proofcellars.com/resources/inventory-template',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Create a Wine and Spirits Inventory',
  description:
    'Step-by-step guide to creating an inventory list for selling wine and spirits.',
  totalTime: 'PT30M',
  supply: [
    { '@type': 'HowToSupply', name: 'Spreadsheet software or paper' },
    { '@type': 'HowToSupply', name: 'Access to your bottles' },
  ],
  step: [
    {
      '@type': 'HowToStep',
      name: 'Set up your columns',
      text: 'Create columns for category, producer or brand, product name, vintage or age, size, quantity, notes, packaging, location, and photos available.',
    },
    {
      '@type': 'HowToStep',
      name: 'List each bottle or case',
      text: 'Go through your collection and add one row per unique item. Group identical bottles together and note the quantity.',
    },
    {
      '@type': 'HowToStep',
      name: 'Note condition and packaging',
      text: 'For each item, note any condition issues and whether you have original packaging like wood cases, boxes, or tubes.',
    },
    {
      '@type': 'HowToStep',
      name: 'Indicate photo availability',
      text: 'Mark which items you have photographed or can photograph. Photos help us provide accurate quotes.',
    },
    {
      '@type': 'HowToStep',
      name: 'Submit your inventory',
      text: 'Send your inventory via our form or as a text message. A screenshot or copy-paste works fine.',
    },
  ],
};

const csvTemplate = `category,producer_or_brand,product_name,vintage_or_age,size_ml,quantity,notes,packaging,location,photos_available
Bourbon,Buffalo Trace,Pappy Van Winkle 15 Year,NV,750,1,Excellent condition,Original tube,Wine cellar,Yes
Scotch,Macallan,18 Year Sherry Oak,NV,750,2,One with minor label scuff,Original boxes,Storage unit,Yes
Wine,Chateau Margaux,Premier Grand Cru Classe,2010,750,6,OWC,Original wood case,Wine cellar,Yes
Wine,Domaine de la Romanee-Conti,Romanee-Conti,2015,750,1,Perfect condition,None,Wine fridge,Yes
Bourbon,Blanton's,Single Barrel,NV,750,3,All sealed,None,Home bar,No`;

export default function InventoryTemplatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
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
                <Link
                  href="/resources"
                  className="hover:text-primary transition-colors"
                >
                  Resources
                </Link>
              </li>
              <li>/</li>
              <li className="text-primary">Inventory Template</li>
            </ol>
          </nav>

          {/* Title */}
          <header className="mb-12">
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-primary">
              Inventory Template for Wine and Spirits
            </h1>
            <p className="mt-4 text-lg text-secondary">
              A simple format to list your bottles. Use a spreadsheet, or just
              send a screenshot or pasted list.
            </p>
          </header>

          {/* Quick Answer */}
          <section className="mb-12 p-6 bg-surface rounded-lg border border-border">
            <h2 className="text-sm font-medium text-primary uppercase tracking-wide mb-4">
              Quick Answer
            </h2>
            <ul className="space-y-2">
              {[
                'Use any format: spreadsheet, text list, or handwritten notes',
                'Include producer, name, vintage or age, and quantity',
                'Note condition issues and original packaging',
                'A screenshot or photo of your list works fine',
                'Do not worry about exact formatting. We can work with any list.',
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
            {/* Columns */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Recommended Columns
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                If you want to use a structured format, here are the columns we
                find most helpful:
              </p>
              <ul className="space-y-3">
                {[
                  { name: 'Category', desc: 'Bourbon, Scotch, Wine, Champagne, etc.' },
                  { name: 'Producer or Brand', desc: 'Winery name or distillery' },
                  { name: 'Product Name', desc: 'Specific bottling or expression' },
                  { name: 'Vintage or Age', desc: 'Year for wine, age statement for spirits, or NV' },
                  { name: 'Size (ml)', desc: '750ml, 1000ml, 1750ml, etc.' },
                  { name: 'Quantity', desc: 'Number of bottles' },
                  { name: 'Notes', desc: 'Condition issues, fill level concerns, etc.' },
                  { name: 'Packaging', desc: 'Original wood case, box, tube, or none' },
                  { name: 'Location', desc: 'Where bottles are stored' },
                  { name: 'Photos Available', desc: 'Yes or No' },
                ].map((col) => (
                  <li key={col.name} className="flex items-start gap-3">
                    <span className="text-accent font-medium flex-shrink-0">-</span>
                    <span className="text-secondary">
                      <span className="font-medium text-primary">{col.name}:</span>{' '}
                      {col.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </section>

            {/* CSV Template */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                CSV Template
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                Copy this template into a spreadsheet or text file. Modify as
                needed for your collection.
              </p>
              <pre className="p-4 bg-surface rounded-lg border border-border text-xs text-secondary overflow-x-auto whitespace-pre">
{csvTemplate}
              </pre>
              <p className="mt-4 text-sm text-secondary">
                You can also export from cellar management software like
                CellarTracker, Vivino, or InVintory.
              </p>
            </section>

            {/* Mid CTA */}
            <div className="my-12 p-8 bg-surface rounded-lg border border-border">
              <h2 className="text-xl font-semibold text-primary mb-4">
                Ready to Submit?
              </h2>
              <p className="text-secondary mb-6">
                Send your inventory via our form or text it directly. A
                screenshot works too.
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

            {/* Simple List Option */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Simple List Works Too
              </h2>
              <p className="text-secondary leading-relaxed mb-4">
                You do not need a formatted spreadsheet. A simple text list
                works fine:
              </p>
              <pre className="p-4 bg-surface rounded-lg border border-border text-sm text-secondary overflow-x-auto">
{`Pappy Van Winkle 15 Year - 1 bottle, tube
Macallan 18 - 2 bottles, boxes
2010 Chateau Margaux - 6 bottles, OWC
2015 DRC Romanee-Conti - 1 bottle
Blanton's - 3 bottles`}
              </pre>
            </section>

            {/* Tips */}
            <section>
              <h2 className="text-2xl font-semibold text-primary mb-4">
                Tips for Large Collections
              </h2>
              <ul className="space-y-3">
                {[
                  'Group similar bottles together to save time',
                  'Note approximate counts if exact numbers are difficult',
                  'Export from cellar management software if available',
                  'For estate or inherited cellars, photos of sections are helpful',
                  'Do not stress about perfect formatting. We can work with anything.',
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

            {/* Related Resources */}
            <section className="pt-8 border-t border-border">
              <h2 className="text-xl font-medium text-primary mb-6">
                Related Resources
              </h2>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Photos for Quote', href: '/resources/photos-for-quote' },
                  { label: 'Packing Guide', href: '/resources/packing-guide' },
                  { label: 'How Pricing Works', href: '/resources/how-pricing-works' },
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
              Ready to get an offer for your bottles? Submit your inventory and
              photos through our form, or text them directly if that is easier.
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
    </>
  );
}
