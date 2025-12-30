import type { FAQ } from './types';
import faqData from '@/content/faq.json';

export function getAllFAQs(): FAQ[] {
  return faqData as FAQ[];
}

export function getFAQsByIds(ids: string[]): FAQ[] {
  const allFaqs = getAllFAQs();
  return ids
    .map((id) => allFaqs.find((faq) => faq.id === id))
    .filter((faq): faq is FAQ => faq !== undefined);
}

export function getFirstNFAQs(n: number): FAQ[] {
  return getAllFAQs().slice(0, n);
}

export function generateFAQSchema(faqs: FAQ[]) {
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
