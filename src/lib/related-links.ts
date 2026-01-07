import type { SellPageConfig } from './types';

/**
 * Category group for contextual clustering
 */
type CategoryGroup = 'wine' | 'spirits';

/**
 * Related link configuration
 */
export interface RelatedLinkConfig {
  label: string;
  href: string;
}

/**
 * Map a categoryType to its parent group for clustering
 */
function getCategoryGroup(categoryType: SellPageConfig['categoryType']): CategoryGroup {
  switch (categoryType) {
    case 'wine':
    case 'champagne':
      return 'wine';
    case 'bourbon':
    case 'scotch':
    case 'spirits':
    case 'japanese-whisky':
    case 'cognac':
      return 'spirits';
    default:
      return 'spirits';
  }
}

/**
 * Get the parent category link based on categoryType
 */
function getParentCategoryLink(categoryType: SellPageConfig['categoryType']): RelatedLinkConfig {
  switch (categoryType) {
    case 'wine':
    case 'champagne':
      return { label: 'Sell Wine', href: '/sell/wine' };
    case 'bourbon':
      return { label: 'Sell Bourbon', href: '/sell/bourbon' };
    case 'scotch':
      return { label: 'Sell Scotch', href: '/sell/scotch' };
    case 'japanese-whisky':
      return { label: 'Sell Japanese Whisky', href: '/sell/japanese-whisky' };
    case 'cognac':
      return { label: 'Sell Cognac', href: '/sell/louis-xiii' };
    case 'spirits':
    default:
      return { label: 'Sell Scotch', href: '/sell/scotch' };
  }
}

// High authority peers for each category group
const WINE_PEERS: RelatedLinkConfig[] = [
  { label: 'Screaming Eagle', href: '/sell/screaming-eagle' },
  { label: 'Petrus', href: '/sell/petrus' },
  { label: 'Harlan Estate', href: '/sell/harlan-estate' },
  { label: 'Opus One', href: '/sell/opus-one' },
  { label: 'DRC', href: '/sell/domaine-de-la-romanee-conti' },
];

const SPIRITS_PEERS: RelatedLinkConfig[] = [
  { label: 'Macallan', href: '/sell/macallan' },
  { label: 'Pappy Van Winkle', href: '/sell/van-winkle' },
  { label: 'Yamazaki', href: '/sell/yamazaki' },
  { label: 'Hibiki', href: '/sell/hibiki' },
  { label: 'Buffalo Trace Antique Collection', href: '/sell/btac' },
];

/**
 * Get related links for a sell page based on category and current slug.
 * Implements contextual clustering for SEO by returning:
 * - 1 parent category link
 * - 2 high-authority peer links (excluding current page)
 * 
 * @param categoryType - The categoryType from the page data
 * @param currentSlug - The current page slug (used to prevent self-linking)
 * @returns Array of 3 RelatedLinkConfig objects
 */
export function getRelatedLinks(
  categoryType: SellPageConfig['categoryType'],
  currentSlug: string
): RelatedLinkConfig[] {
  const group = getCategoryGroup(categoryType);
  const parentLink = getParentCategoryLink(categoryType);
  const peers = group === 'wine' ? WINE_PEERS : SPIRITS_PEERS;

  // Filter out current slug from peers and parent
  const filteredPeers = peers.filter(
    (peer) => !peer.href.endsWith(`/${currentSlug}`)
  );

  // If parent link matches current slug, swap for first peer
  const isOnParentPage = parentLink.href.endsWith(`/${currentSlug}`);
  
  const relatedLinks: RelatedLinkConfig[] = [];

  if (!isOnParentPage) {
    relatedLinks.push(parentLink);
    relatedLinks.push(...filteredPeers.slice(0, 2));
  } else {
    // On a parent category page, show 3 peers instead
    relatedLinks.push(...filteredPeers.slice(0, 3));
  }

  return relatedLinks;
}
