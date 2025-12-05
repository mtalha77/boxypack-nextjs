import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Beard Oil Boxes | Premium Cosmetic Packaging',
  description: 'Boxy Pack delivers premium beard oil boxes with fast turnaround, free shipping, and stylish design to enhance your grooming product presentation. Order Now.',
};

const BeardOilBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'beard-oil-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="beard-oil-boxes"
      pageType="subcategory"
    />
  );
};

export default BeardOilBoxesPage;