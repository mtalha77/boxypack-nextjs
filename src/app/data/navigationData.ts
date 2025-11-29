import { productByMaterialData } from './productByMaterialData';
import { productByIndustryData } from './productByIndustryData';
import { mylarBoxesData } from './mylarBoxesData';
import { shoppingBagsData } from './shoppingBagsData';
import { otherData } from './otherData';

export interface SubCategory {
  name: string;
  slug: string;
  description?: string;
  images?: string[]; // Array of Cloudinary public IDs for product images
  heroImage?: string; // Separate hero image for hero section and subcategory cards
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
    name: 'Materials',
    slug: 'product-by-material',
    hasSubcategories: true,
    description: 'Explore our products organized by material type',
    categories: productByMaterialData.map(category => ({
      name: category.name,
      slug: category.slug,
      description: category.description,
      subcategories: category.subcategories.map(sub => ({
        name: sub.name,
        slug: sub.slug,
        description: sub.description,
        images: sub.images,
        heroImage: sub.heroImage
      }))
    }))
  },
  {
    name: 'Mylar Pouches',
    slug: 'mylar-boxes',
    hasSubcategories: true,
    description: 'Premium mylar packaging solutions with excellent barrier properties',
    categories: [{
      name: mylarBoxesData.name,
      slug: mylarBoxesData.slug,
      description: mylarBoxesData.description,
      subcategories: mylarBoxesData.subcategories
    }]
  },
  {
    name: 'Shopping Bags',
    slug: 'shopping-bags',
    hasSubcategories: true,
    description: 'Eco-friendly and branded shopping bag solutions',
    categories: [{
      name: shoppingBagsData.name,
      slug: shoppingBagsData.slug,
      description: shoppingBagsData.description,
      subcategories: shoppingBagsData.subcategories
    }]
  },
  {
    name: 'Industries',
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
    name: 'Others',
    slug: 'other',
    hasSubcategories: true,
    description: 'Additional packaging accessories and printing services',
    categories: [{
      name: otherData.name,
      slug: otherData.slug,
      description: otherData.description,
      subcategories: otherData.subcategories
    }]
  },
];

export default navigationData;
