export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface SellPageFAQ {
  question: string;
  answer: string;
}

export interface RelatedLink {
  label: string;
  href: string;
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
  photoChecklist: string[];
  conditionFactors: string[];
  pricingFactors: string[];
  faqs: SellPageFAQ[];
  relatedLinks: RelatedLink[];
}

export interface GuideSection {
  heading: string;
  content: string[];
  list?: string[];
}

export interface GuideFAQ {
  question: string;
  answer: string;
}

export interface GuideConfig {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  category: 'estate' | 'practical' | 'condition' | 'safety' | 'scenario';
  publishedDate: string;
  summary: string;
  tableOfContents: string[];
  sections: GuideSection[];
  faqs: GuideFAQ[];
  relatedLinks: RelatedLink[];
}
