import type { SellPageConfig, SellPageFAQ } from './types';
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'src/content/sell');

export function getSellPageSlugs(): string[] {
  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace('.json', ''));
}

export function getAllSellPageSlugs(): string[] {
  return getSellPageSlugs();
}

export function getSellPageData(slug: string): SellPageConfig | null {
  const filePath = path.join(contentDirectory, `${slug}.json`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as SellPageConfig;
  } catch {
    return null;
  }
}

export function getAllSellPageData(): SellPageConfig[] {
  const slugs = getSellPageSlugs();
  return slugs
    .map((slug) => getSellPageData(slug))
    .filter((data): data is SellPageConfig => data !== null);
}

export function getAllSellPages(): SellPageConfig[] {
  return getAllSellPageData();
}

export function getSellPagesByCategory(categoryType: SellPageConfig['categoryType']): SellPageConfig[] {
  return getAllSellPageData().filter((page) => page.categoryType === categoryType);
}

export function generateBreadcrumbSchema(
  title: string,
  slug: string,
  baseUrl: string = 'https://proofcellars.com'
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: baseUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'What We Buy',
        item: `${baseUrl}/sell`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: title,
        item: `${baseUrl}/sell/${slug}`,
      },
    ],
  };
}

export function generateFAQSchemaFromPage(faqs: SellPageFAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
