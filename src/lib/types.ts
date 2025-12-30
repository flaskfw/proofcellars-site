export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SellPageConfig {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubhead: string;
  introParagraph: string;
  categoryType: 'bourbon' | 'scotch' | 'wine' | 'champagne' | 'cognac' | 'spirits';
  whatWeBuy: string[];
  whatWeDoNotBuy: string[];
  conditionNotes: string;
  pricingFactors: string[];
  faqSubset?: string[];
}
