import { MetadataRoute } from 'next';
import { getSellPageSlugs } from '@/lib/getSellPageData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://proofcellars.com';

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/get-offer`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sell`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];

  // Dynamic sell pages
  const sellPageSlugs = getSellPageSlugs();
  const sellPages: MetadataRoute.Sitemap = sellPageSlugs.map((slug) => ({
    url: `${baseUrl}/sell/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...staticPages, ...sellPages];
}
