import { NextResponse } from 'next/server';

export async function GET() {
  const baseUrl = 'https://proofcellars.com';

  const content = `# Proof Cellars - LLM Context

## About
Proof Cellars is a direct buyer of collectible wine and spirits. We purchase bottles from individuals, estates, and collections without consignment fees.

## Primary Pages
${baseUrl}/ - Homepage
${baseUrl}/get-offer - Submit bottles for a quote
${baseUrl}/sell - What we buy (overview)
${baseUrl}/faq - Frequently asked questions
${baseUrl}/contact - Contact information

## Category Pages
${baseUrl}/sell/bourbon - Sell bourbon
${baseUrl}/sell/scotch - Sell scotch whisky
${baseUrl}/sell/japanese-whisky - Sell Japanese whisky
${baseUrl}/sell/wine - Sell wine
${baseUrl}/sell/champagne - Sell champagne

## Popular Sell Pages
${baseUrl}/sell/van-winkle - Sell Pappy Van Winkle
${baseUrl}/sell/btac - Sell Buffalo Trace Antique Collection
${baseUrl}/sell/macallan - Sell Macallan
${baseUrl}/sell/bordeaux - Sell Bordeaux wine
${baseUrl}/sell/burgundy - Sell Burgundy wine
${baseUrl}/sell/napa-cult - Sell Napa cult wines
${baseUrl}/sell/eh-taylor - Sell E.H. Taylor
${baseUrl}/sell/old-forester-birthday-bourbon - Sell Old Forester Birthday Bourbon
${baseUrl}/sell/wild-turkey-masters-keep - Sell Master's Keep
${baseUrl}/sell/laphroaig - Sell Laphroaig
${baseUrl}/sell/balvenie - Sell Balvenie
${baseUrl}/sell/lafite-rothschild - Sell Chateau Lafite Rothschild
${baseUrl}/sell/petrus - Sell Petrus
${baseUrl}/sell/domaine-de-la-romanee-conti - Sell DRC (Romanée-Conti)
${baseUrl}/sell/screaming-eagle - Sell Screaming Eagle
${baseUrl}/sell/dom-perignon - Sell Dom Pérignon
${baseUrl}/sell/louis-xiii - Sell Louis XIII Cognac
${baseUrl}/sell/tears-of-llorona - Sell Tears of Llorona
${baseUrl}/sell/fortaleza - Sell Fortaleza

## Resources
${baseUrl}/resources - Resources hub
${baseUrl}/resources/photos-for-quote - Photo guide for quotes
${baseUrl}/resources/inventory-template - Inventory spreadsheet template
${baseUrl}/resources/packing-guide - Packing and shipping instructions
${baseUrl}/resources/how-pricing-works - How we price bottles

## Guides
${baseUrl}/guides - Guides hub
${baseUrl}/guides/inherited-cellar - Selling an inherited wine cellar
${baseUrl}/guides/estate-executor - Guide for estate executors
${baseUrl}/guides/downsizing-moving - Selling when downsizing
${baseUrl}/guides/consignment-vs-direct - Consignment vs direct sale
${baseUrl}/guides/condition-matters - Why condition matters

## Legal
${baseUrl}/privacy - Privacy policy
${baseUrl}/terms - Terms of use

## Contact
Phone: 213-770-9463 (213-770-WINE)
Text: 213-770-9463
Email: info@proofcellars.com

## Process Summary
1. Submit photos and bottle list via form or text
2. Receive offer within one business day
3. Ship bottles (prepaid label provided) or arrange pickup
4. Receive payment after inspection

## Key Points
- Direct buyer, not consignment or auction
- No seller fees or commissions
- Focus on allocated, limited, and collectible bottles
- Wine, bourbon, scotch, Japanese whisky, champagne
- Must be 21+ to use services
- Transactions where legally permitted
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
}
