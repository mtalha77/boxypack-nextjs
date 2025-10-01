import { navigationData } from '../data/navigationData';
import { productByMaterialData } from '../data/productByMaterialData';
import { productByIndustryData } from '../data/productByIndustryData';
import { mylarBoxesData } from '../data/mylarBoxesData';
import { shoppingBagsData } from '../data/shoppingBagsData';
import { otherData } from '../data/otherData';

export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  type: 'main-section' | 'category' | 'subcategory' | 'page';
  section?: string;
  category?: string;
  icon?: string;
  priority: number; // Higher number = higher priority
}

// Aggregate all searchable data
export const getAllSearchData = (): SearchResult[] => {
  const searchData: SearchResult[] = [];

  // Add main navigation sections
  navigationData.forEach((section) => {
    searchData.push({
      id: `section-${section.slug}`,
      title: section.name,
      description: section.description || `Explore ${section.name.toLowerCase()}`,
      url: `/`, // Navigate to homepage for main sections
      type: 'main-section',
      section: section.name,
      priority: 10,
    });

    // Add categories if they exist
    if (section.categories) {
      section.categories.forEach((category) => {
        searchData.push({
          id: `category-${section.slug}-${category.slug}`,
          title: category.name,
          description: category.description || `Browse ${category.name.toLowerCase()}`,
          url: `/products/${section.slug}/${category.slug}`,
          type: 'category',
          section: section.name,
          category: category.name,
          priority: 8,
        });

        // Add subcategories
        category.subcategories.forEach((subcategory) => {
          searchData.push({
            id: `subcategory-${section.slug}-${category.slug}-${subcategory.slug}`,
            title: subcategory.name,
            description: subcategory.description || `View ${subcategory.name.toLowerCase()}`,
            url: `/products/${section.slug}/${category.slug}/${subcategory.slug}`,
            type: 'subcategory',
            section: section.name,
            category: category.name,
            priority: 6,
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
    },
    {
      id: 'page-how-it-works',
      title: 'How It Works',
      description: 'Learn how our custom packaging process works',
      url: '/how-it-works',
      type: 'page' as const,
      priority: 7,
    },
    {
      id: 'page-about-us',
      title: 'About Us',
      description: 'Learn about Boxypack and our mission',
      url: '/about-us',
      type: 'page' as const,
      priority: 7,
    },
    {
      id: 'page-contact-us',
      title: 'Contact Us',
      description: 'Get in touch with our team for custom quotes',
      url: '/contact-us',
      type: 'page' as const,
      priority: 7,
    },
  ];

  searchData.push(...mainPages);

  // Add product data from material categories
  productByMaterialData.forEach((category) => {
    searchData.push({
      id: `material-category-${category.slug}`,
      title: category.name,
      description: category.description,
      url: `/products/product-by-material/${category.slug}`,
      type: 'category',
      section: 'Product By Material',
      category: category.name,
      priority: 8,
    });

    category.subcategories.forEach((subcategory) => {
      searchData.push({
        id: `material-subcategory-${category.slug}-${subcategory.slug}`,
        title: subcategory.name,
        description: subcategory.description || `Custom ${subcategory.name.toLowerCase()}`,
        url: `/products/product-by-material/${category.slug}/${subcategory.slug}`,
        type: 'subcategory',
        section: 'Product By Material',
        category: category.name,
        priority: 6,
      });
    });
  });

  // Add product data from industry categories
  productByIndustryData.forEach((category) => {
    searchData.push({
      id: `industry-category-${category.slug}`,
      title: category.name,
      description: category.description,
      url: `/products/product-by-industry/${category.slug}`,
      type: 'category',
      section: 'Product By Industry',
      category: category.name,
      priority: 8,
    });

    category.subcategories.forEach((subcategory) => {
      searchData.push({
        id: `industry-subcategory-${category.slug}-${subcategory.slug}`,
        title: subcategory.name,
        description: subcategory.description || `Custom ${subcategory.name.toLowerCase()}`,
        url: `/products/product-by-industry/${category.slug}/${subcategory.slug}`,
        type: 'subcategory',
        section: 'Product By Industry',
        category: category.name,
        priority: 6,
      });
    });
  });

  // Add mylar boxes data
  searchData.push({
    id: 'mylar-boxes-main',
    title: mylarBoxesData.name,
    description: mylarBoxesData.description,
    url: '/products/mylar-boxes',
    type: 'main-section',
    section: mylarBoxesData.name,
    priority: 8,
  });

  mylarBoxesData.subcategories.forEach((subcategory) => {
    searchData.push({
      id: `mylar-boxes-subcategory-${subcategory.slug}`,
      title: subcategory.name,
      description: subcategory.description || `Custom ${subcategory.name.toLowerCase()}`,
      url: `/products/mylar-boxes/${subcategory.slug}`,
      type: 'subcategory',
      section: mylarBoxesData.name,
      priority: 6,
    });
  });

  // Add shopping bags data
  searchData.push({
    id: 'shopping-bags-main',
    title: shoppingBagsData.name,
    description: shoppingBagsData.description,
    url: '/products/shopping-bags',
    type: 'main-section',
    section: shoppingBagsData.name,
    priority: 8,
  });

  shoppingBagsData.subcategories.forEach((subcategory) => {
    searchData.push({
      id: `shopping-bags-subcategory-${subcategory.slug}`,
      title: subcategory.name,
      description: subcategory.description || `Custom ${subcategory.name.toLowerCase()}`,
      url: `/products/shopping-bags/${subcategory.slug}`,
      type: 'subcategory',
      section: shoppingBagsData.name,
      priority: 6,
    });
  });

  // Add other data
  searchData.push({
    id: 'other-main',
    title: otherData.name,
    description: otherData.description,
    url: '/products/other',
    type: 'main-section',
    section: otherData.name,
    priority: 8,
  });

  otherData.subcategories.forEach((subcategory) => {
    searchData.push({
      id: `other-subcategory-${subcategory.slug}`,
      title: subcategory.name,
      description: subcategory.description || `Custom ${subcategory.name.toLowerCase()}`,
      url: `/products/other/${subcategory.slug}`,
      type: 'subcategory',
      section: otherData.name,
      priority: 6,
    });
  });

  return searchData;
};

// Search function with fuzzy matching
export const searchData = (query: string, data: SearchResult[]): SearchResult[] => {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase().trim();
  const results: SearchResult[] = [];

  data.forEach((item) => {
    let score = 0;
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();

    // Exact match in title (highest priority)
    if (title === searchTerm) {
      score = 100;
    }
    // Title starts with search term
    else if (title.startsWith(searchTerm)) {
      score = 90;
    }
    // Title contains search term
    else if (title.includes(searchTerm)) {
      score = 80;
    }
    // Description contains search term
    else if (description.includes(searchTerm)) {
      score = 60;
    }
    // Fuzzy matching for partial matches
    else if (fuzzyMatch(searchTerm, title)) {
      score = 50;
    }
    // Fuzzy matching in description
    else if (fuzzyMatch(searchTerm, description)) {
      score = 30;
    }

    if (score > 0) {
      results.push({
        ...item,
        priority: item.priority + score, // Combine base priority with match score
      });
    }
  });

  // Sort by priority (highest first), then by title
  const sortedResults = results
    .sort((a, b) => {
      if (b.priority !== a.priority) {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    })
    .slice(0, 10); // Limit to top 10 results


  return sortedResults;
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
export const getSearchSuggestions = (query: string, data: SearchResult[]): string[] => {
  if (!query.trim()) return [];

  const searchTerm = query.toLowerCase().trim();
  const suggestions = new Set<string>();

  data.forEach((item) => {
    const title = item.title.toLowerCase();
    const description = item.description.toLowerCase();

    // Add title if it contains the search term
    if (title.includes(searchTerm)) {
      suggestions.add(item.title);
    }

    // Add words from description that contain the search term
    const words = description.split(/\s+/);
    words.forEach((word) => {
      if (word.includes(searchTerm) && word.length > 2) {
        suggestions.add(word.charAt(0).toUpperCase() + word.slice(1));
      }
    });
  });

  return Array.from(suggestions).slice(0, 5);
};
