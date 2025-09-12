import { productByMaterialData } from './productByMaterialData';
import { productByIndustryData } from './productByIndustryData';
import { pouchesData } from './pouchesData';
import { shoppingBagsData } from './shoppingBagsData';
import { otherData } from './otherData';

export interface SubCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface MainCategory {
  name: string;
  slug: string;
  subcategories: SubCategory[];
  description?: string;
}

export interface NavigationSection {
  name: string;
  slug: string;
  hasSubcategories: boolean;
  categories?: MainCategory[];
  subcategories?: SubCategory[];
  description?: string;
}

// Helper function to create slug from name
export const createSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim();
};

export const navigationData: NavigationSection[] = [
  {
    name: 'Product By Material',
    slug: 'product-by-material',
    hasSubcategories: true,
    description: 'Explore our products organized by material type',
    categories: productByMaterialData.map(category => ({
      name: category.name,
      slug: category.slug,
      description: category.description,
      subcategories: category.subcategories
    }))
  },
  {
    name: 'Product By Industry',
    slug: 'product-by-industry',
    hasSubcategories: true,
    description: 'Browse products by industry and application',
    categories: productByIndustryData.map(category => ({
      name: category.name,
      slug: category.slug,
      description: category.description,
      subcategories: category.subcategories
    }))
  },
  {
    name: 'Pouches',
    slug: 'pouches',
    hasSubcategories: true,
    description: 'Flexible packaging solutions for various products',
    subcategories: pouchesData.subcategories
  },
  {
    name: 'Shopping Bags',
    slug: 'shopping-bags',
    hasSubcategories: true,
    description: 'Eco-friendly and branded shopping bag solutions',
    subcategories: shoppingBagsData.subcategories
  },
  {
    name: 'Other',
    slug: 'other',
    hasSubcategories: true,
    description: 'Additional packaging accessories and printing services',
    subcategories: otherData.subcategories
  }
];

export default navigationData;
