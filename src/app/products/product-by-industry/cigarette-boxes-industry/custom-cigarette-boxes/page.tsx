import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Cigarette Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack delivers premium custom cigarette boxes with fast turnaround, free shipping, and durable design for attractive and secure tobacco packaging. Order Now.',
};

const CustomCigaretteBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cigarette-boxes-industry');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-cigarette-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-cigarette-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomCigaretteBoxesPage;