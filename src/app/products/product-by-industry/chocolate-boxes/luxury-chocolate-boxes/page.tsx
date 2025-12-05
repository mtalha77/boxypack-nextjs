import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Luxury Chocolate Boxes | Premium Elegant Packaging',
  description: 'Boxy Pack produces premium luxury chocolate boxes with fast turnaround, free shipping, and elegant design for high-end chocolate presentation. Customize Now.',
};

const LuxuryChocolateBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'chocolate-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'luxury-chocolate-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="luxury-chocolate-boxes"
      pageType="subcategory"
    />
  );
};

export default LuxuryChocolateBoxesPage;