import type { GuideConfig, GuideFAQ } from './types';
import fs from 'fs';
import path from 'path';

const contentDirectory = path.join(process.cwd(), 'src/content/guides');

export function getGuideSlugs(): string[] {
  const files = fs.readdirSync(contentDirectory);
  return files
    .filter((file) => file.endsWith('.json'))
    .map((file) => file.replace('.json', ''));
}

export function getGuideData(slug: string): GuideConfig | null {
  const filePath = path.join(contentDirectory, `${slug}.json`);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(fileContents) as GuideConfig;
  } catch {
    return null;
  }
}

export function getAllGuides(): GuideConfig[] {
  const slugs = getGuideSlugs();
  return slugs
    .map((slug) => getGuideData(slug))
    .filter((data): data is GuideConfig => data !== null);
}

export function getGuidesByCategory(category: GuideConfig['category']): GuideConfig[] {
  return getAllGuides().filter((guide) => guide.category === category);
}

export function generateGuideFAQSchema(faqs: GuideFAQ[]) {
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

export function generateArticleSchema(guide: GuideConfig, baseUrl: string = 'https://proofcellars.com') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.metaDescription,
    datePublished: guide.publishedDate,
    author: {
      '@type': 'Organization',
      name: 'Proof Cellars',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Proof Cellars',
      url: baseUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${baseUrl}/guides/${guide.slug}`,
    },
  };
}
