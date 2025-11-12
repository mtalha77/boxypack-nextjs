import { useState, useEffect } from 'react';

export interface Product {
  _id?: string;
  slug: string;
  name: string;
  description: string;
  heroImage: string;
  modelPath: string;
  features: Array<{
    icon: string;
    title: string;
    description: string;
  }>;
  keyFeatures?: string[];
  overview?: {
    heading?: string;
    title?: string;
    paragraphs?: string[];
    highlights?: string[];
  };
  specifications: Array<{
    label: string;
    value: string;
  }>;
  sizes: Array<{
    name: string;
    dimensions: string;
    price?: string;
  }>;
  galleryImages: string[];
  customizationOptions: string[];
  customization?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    detailsHeading?: string;
    details?: Array<{
      label: string;
      value: string;
    }>;
    footerNote?: string;
    supportTitle?: string;
    supportDescription?: string;
    supportActions?: Array<{
      label: string;
      description: string;
    }>;
  };
  whyChooseUs?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    features: Array<{
      icon: string;
      title: string;
      description: string;
    }>;
  };
  faq?: {
    eyebrow?: string;
    heading?: string;
    items: Array<{
      question: string;
      answer: string;
    }>;
  };
  contactSection?: {
    eyebrow?: string;
    heading?: string;
    description?: string;
    channels: Array<{
      label: string;
      value: string;
      type?: 'phone' | 'email' | 'link';
      href?: string;
    }>;
    cta?: {
      label: string;
      href?: string;
    };
  };
  subcategoryCards?: {
    heading?: string;
    description?: string;
    items: Array<{
      name: string;
      slug: string;
      description: string;
      image: string;
      href?: string;
    }>;
  };
  ctaTitle: string;
  ctaDescription: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ProductsResponse {
  success: boolean;
  data: Product[];
  count: number;
  error?: string;
  details?: string;
}

export interface ProductResponse {
  success: boolean;
  data: Product;
  error?: string;
  details?: string;
}

// Hook to fetch all products
export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/products');
        const data: ProductsResponse = await response.json();
        
        if (data.success) {
          setProducts(data.data);
          setError(null);
        } else {
          setError(data.error || 'Failed to fetch products');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
}

// Hook to fetch a single product by slug
export function useProduct(slug: string) {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!slug) return;

    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/products/${slug}`);
        const data: ProductResponse = await response.json();
        
        if (data.success) {
          setProduct(data.data);
          setError(null);
        } else {
          setError(data.error || 'Failed to fetch product');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [slug]);

  return { product, loading, error };
}
