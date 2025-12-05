import { navigationData } from '../data/navigationData';
import { productByMaterialData } from '../data/productByMaterialData';
import { productByIndustryData } from '../data/productByIndustryData';
import { shoppingBagsData } from '../data/shoppingBagsData';
import { otherData } from '../data/otherData';

export interface EnhancedSearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'main-section' | 'category' | 'subcategory' | 'page' | 'feature' | 'material' | 'industry';
  section?: string;
  category?: string;
  icon?: string;
  priority: number;
  keywords: string[];
  tags: string[];
  priceRange?: string;
  material?: string;
  industry?: string;
  features?: string[];
  isPopular?: boolean;
  isNew?: boolean;
  isCustomizable?: boolean;
  isEcoFriendly?: boolean;
}

export interface SearchSuggestion {
  text: string;
  type: 'popular' | 'recent' | 'category' | 'feature';
  count?: number;
}

export interface SearchFilter {
  type: 'material' | 'industry' | 'price' | 'feature';
  label: string;
  options: { value: string; label: string; count: number }[];
}

// Popular search terms based on packaging industry
export const popularSearches: SearchSuggestion[] = [
  { text: 'Custom Boxes', type: 'popular', count: 1250 },
  { text: 'Mailer Boxes', type: 'popular', count: 890 },
  { text: 'Cosmetic Boxes', type: 'popular', count: 750 },
  { text: 'Rigid Boxes', type: 'popular', count: 680 },
  { text: 'Cardboard Boxes', type: 'popular', count: 620 },
  { text: 'Bakery Boxes', type: 'popular', count: 580 },
  { text: 'Gift Boxes', type: 'popular', count: 520 },
  { text: 'Eco Friendly Packaging', type: 'popular', count: 480 },
  { text: 'Custom Printing', type: 'popular', count: 450 },
  { text: 'Luxury Packaging', type: 'popular', count: 420 }
];

// Search filters for advanced search - simplified
export const searchFilters: SearchFilter[] = [
  {
    type: 'material',
    label: 'Material',
    options: [
      { value: 'cardboard', label: 'Cardboard', count: 45 },
      { value: 'corrugated', label: 'Corrugated', count: 38 },
      { value: 'kraft', label: 'Kraft', count: 32 },
      { value: 'rigid', label: 'Rigid', count: 28 }
    ]
  },
  {
    type: 'industry',
    label: 'Industry',
    options: [
      { value: 'cosmetic', label: 'Cosmetics', count: 42 },
      { value: 'food', label: 'Food & Beverage', count: 38 },
      { value: 'retail', label: 'Retail', count: 35 },
      { value: 'jewelry', label: 'Jewelry', count: 28 }
    ]
  },
  {
    type: 'feature',
    label: 'Features',
    options: [
      { value: 'custom-printing', label: 'Custom Printing', count: 65 },
      { value: 'window', label: 'Window Cutout', count: 42 },
      { value: 'magnetic', label: 'Magnetic Closure', count: 38 },
      { value: 'eco-friendly', label: 'Eco-Friendly', count: 55 }
    ]
  }
];

// Enhanced search data with better categorization
export const getAllEnhancedSearchData = (): EnhancedSearchResult[] => {
  const searchData: EnhancedSearchResult[] = [];

  // Add main navigation sections
  navigationData.forEach((section) => {
    searchData.push({
      id: `section-${section.slug}`,
      title: section.name,
      description: section.description || `Explore ${section.name.toLowerCase()}`,
      url: `/`,
      type: 'main-section',
      section: section.name,
      priority: 10,
      keywords: [section.name.toLowerCase(), section.slug],
      tags: ['main', 'section'],
      isPopular: true
    });

    // Add categories if they exist
    if (section.categories) {
      section.categories.forEach((category) => {
        const materialType = section.slug === 'product-by-material' ? category.slug : undefined;
        const industryType = section.slug === 'product-by-industry' ? category.slug : undefined;
        
        searchData.push({
          id: `category-${section.slug}-${category.slug}`,
          title: category.name,
          description: category.description || `Browse ${category.name.toLowerCase()}`,
          url: `/products/${section.slug}/${category.slug}`,
          type: 'category',
          section: section.name,
          category: category.name,
          priority: 8,
          keywords: [category.name.toLowerCase(), category.slug, ...(category.description?.toLowerCase().split(' ') || [])],
          tags: ['category', section.slug],
          material: materialType,
          industry: industryType,
          isCustomizable: true,
          isEcoFriendly: category.slug.includes('kraft') || category.slug.includes('cardboard')
        });

        // Add subcategories
        category.subcategories.forEach((subcategory) => {
          // For sections where category slug matches section slug (mylar-boxes, shopping-bags, other),
          // skip the category in the URL to match the actual route structure
          const url = section.slug === category.slug
            ? `/products/${section.slug}/${subcategory.slug}`
            : `/products/${section.slug}/${category.slug}/${subcategory.slug}`;
          
          searchData.push({
            id: `subcategory-${section.slug}-${category.slug}-${subcategory.slug}`,
            title: subcategory.name,
            description: subcategory.description || `View ${subcategory.name.toLowerCase()}`,
            url: url,
            type: 'subcategory',
            section: section.name,
            category: category.name,
            priority: 6,
            keywords: [subcategory.name.toLowerCase(), subcategory.slug, category.name.toLowerCase()],
            tags: ['subcategory', section.slug, category.slug],
            material: materialType,
            industry: industryType,
            isCustomizable: true,
            isEcoFriendly: subcategory.slug.includes('kraft') || subcategory.slug.includes('eco'),
            priceRange: getPriceRange(subcategory.name),
            features: getFeatures(subcategory.name)
          });
        });
      });
    }

    // Add direct subcategories if they exist
    if (section.subcategories) {
      section.subcategories.forEach((subcategory) => {
        searchData.push({
          id: `subcategory-${section.slug}-${subcategory.slug}`,
          title: subcategory.name,
          description: subcategory.description || `View ${subcategory.name.toLowerCase()}`,
          url: `/products/${section.slug}/${subcategory.slug}`,
          type: 'subcategory',
          section: section.name,
          priority: 6,
          keywords: [subcategory.name.toLowerCase(), subcategory.slug],
          tags: ['subcategory', section.slug],
          isCustomizable: true,
          isEcoFriendly: subcategory.slug.includes('kraft') || subcategory.slug.includes('eco'),
          priceRange: getPriceRange(subcategory.name),
          features: getFeatures(subcategory.name)
        });
      });
    }
  });

  // Add main pages
  const mainPages = [
    {
      id: 'page-home',
      title: 'Home',
      description: 'Boxypack homepage - Custom packaging solutions',
      url: '/',
      type: 'page' as const,
      priority: 9,
      keywords: ['home', 'homepage', 'main'],
      tags: ['page', 'main']
    },
    {
      id: 'page-how-it-works',
      title: 'How It Works',
      description: 'Learn how our custom packaging process works',
      url: '/how-it-works',
      type: 'page' as const,
      priority: 7,
      keywords: ['how it works', 'process', 'workflow', 'steps'],
      tags: ['page', 'process']
    },
    {
      id: 'page-about-us',
      title: 'About Us',
      description: 'Learn about Boxypack and our mission',
      url: '/about-us',
      type: 'page' as const,
      priority: 7,
      keywords: ['about', 'company', 'mission', 'team'],
      tags: ['page', 'company']
    },
    {
      id: 'page-contact-us',
      title: 'Contact Us',
      description: 'Get in touch with our team for custom quotes',
      url: '/contact-us',
      type: 'page' as const,
      priority: 7,
      keywords: ['contact', 'quote', 'support', 'help'],
      tags: ['page', 'contact']
    }
  ];

  searchData.push(...mainPages);

  // Add feature-based searches
  const features = [
    { name: 'Custom Printing', description: 'Full color custom printing services', keywords: ['printing', 'custom', 'color', 'branding'] },
    { name: 'Eco Friendly Packaging', description: 'Sustainable and environmentally friendly packaging', keywords: ['eco', 'green', 'sustainable', 'environmental'] },
    { name: 'Food Safe Packaging', description: 'FDA approved food-safe packaging materials', keywords: ['food', 'safe', 'fda', 'approved'] },
    { name: 'Luxury Packaging', description: 'Premium high-end packaging solutions', keywords: ['luxury', 'premium', 'high-end', 'elegant'] },
    { name: 'Child Resistant Packaging', description: 'Child-resistant packaging for safety', keywords: ['child', 'resistant', 'safe', 'security'] },
    { name: 'Window Boxes', description: 'Boxes with window cutouts for product visibility', keywords: ['window', 'cutout', 'visible', 'display'] },
    { name: 'Magnetic Closure', description: 'Boxes with magnetic closure systems', keywords: ['magnetic', 'closure', 'magnet', 'secure'] },
    { name: 'Subscription Boxes', description: 'Custom boxes for subscription services', keywords: ['subscription', 'monthly', 'recurring', 'service'] }
  ];

  features.forEach((feature, index) => {
    searchData.push({
      id: `feature-${feature.name.toLowerCase().replace(/\s+/g, '-')}`,
      title: feature.name,
      description: feature.description,
      url: '/products', // Generic products page
      type: 'feature',
      priority: 5,
      keywords: feature.keywords,
      tags: ['feature', 'service'],
      isPopular: index < 4
    });
  });

  return searchData;
};

// Helper functions
function getPriceRange(name: string): string {
  const lowerName = name.toLowerCase();
  if (lowerName.includes('luxury') || lowerName.includes('premium')) return '25-plus';
  if (lowerName.includes('rigid') || lowerName.includes('magnetic')) return '10-25';
  if (lowerName.includes('custom') || lowerName.includes('printed')) return '5-10';
  return '1-5';
}

function getFeatures(name: string): string[] {
  const lowerName = name.toLowerCase();
  const features: string[] = [];
  
  if (lowerName.includes('custom') || lowerName.includes('printed')) features.push('custom-printing');
  if (lowerName.includes('window')) features.push('window');
  if (lowerName.includes('magnetic')) features.push('magnetic');
  if (lowerName.includes('eco') || lowerName.includes('kraft') || lowerName.includes('cardboard')) features.push('eco-friendly');
  if (lowerName.includes('food') || lowerName.includes('bakery') || lowerName.includes('chocolate')) features.push('food-safe');
  if (lowerName.includes('child') || lowerName.includes('resistant')) features.push('child-resistant');
  
  return features;
}

// Enhanced search function with better matching
export const enhancedSearch = (query: string, data: EnhancedSearchResult[], filters?: Record<string, string[]>): EnhancedSearchResult[] => {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase().trim();
  const results: EnhancedSearchResult[] = [];

  data.forEach((item) => {
    let score = 0;
    
    // Apply filters first
    if (filters) {
      let passesFilters = true;
      
      if (filters.material && item.material && !filters.material.includes(item.material)) {
        passesFilters = false;
      }
      if (filters.industry && item.industry && !filters.industry.includes(item.industry)) {
        passesFilters = false;
      }
      if (filters.price && item.priceRange && !filters.price.includes(item.priceRange)) {
        passesFilters = false;
      }
      if (filters.feature && item.features && !filters.feature.some(f => item.features?.includes(f))) {
        passesFilters = false;
      }
      
      if (!passesFilters) return;
    }

    // Exact match in title (highest priority)
    if (item.title.toLowerCase() === searchTerm) {
      score = 100;
    }
    // Title starts with search term
    else if (item.title.toLowerCase().startsWith(searchTerm)) {
      score = 90;
    }
    // Title contains search term
    else if (item.title.toLowerCase().includes(searchTerm)) {
      score = 80;
    }
    // Description contains search term
    else if (item.description.toLowerCase().includes(searchTerm)) {
      score = 60;
    }
    // Keywords match
    else if (item.keywords.some(keyword => keyword.includes(searchTerm))) {
      score = 70;
    }
    // Tags match
    else if (item.tags.some(tag => tag.includes(searchTerm))) {
      score = 50;
    }
    // Fuzzy matching
    else if (fuzzyMatch(searchTerm, item.title.toLowerCase()) || 
             fuzzyMatch(searchTerm, item.description.toLowerCase())) {
      score = 40;
    }

    if (score > 0) {
      // Boost score for popular items
      if (item.isPopular) score += 10;
      if (item.isNew) score += 5;
      
      results.push({
        ...item,
        priority: item.priority + score
      });
    }
  });

  // Sort by priority (highest first), then by title
  return results
    .sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    })
    .slice(0, 15); // Show more results
};

// Simple fuzzy matching function
const fuzzyMatch = (searchTerm: string, text: string): boolean => {
  const searchChars = searchTerm.split('');
  let textIndex = 0;

  for (const char of searchChars) {
    const foundIndex = text.indexOf(char, textIndex);
    if (foundIndex === -1) return false;
    textIndex = foundIndex + 1;
  }

  return true;
};

// Get search suggestions based on query
export const getSearchSuggestions = (query: string, data: EnhancedSearchResult[]): SearchSuggestion[] => {
  if (!query.trim()) return popularSearches.slice(0, 8);

  const searchTerm = query.toLowerCase().trim();
  const suggestions = new Set<SearchSuggestion>();

  // Add exact matches from data
  data.forEach((item) => {
    if (item.title.toLowerCase().includes(searchTerm)) {
      suggestions.add({
        text: item.title,
        type: 'category',
        count: item.priority
      });
    }
  });

  // Add popular searches that match
  popularSearches.forEach((search) => {
    if (search.text.toLowerCase().includes(searchTerm)) {
      suggestions.add(search);
    }
  });

  return Array.from(suggestions).slice(0, 8);
};
