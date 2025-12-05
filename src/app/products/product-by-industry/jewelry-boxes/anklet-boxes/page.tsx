import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Anklet Boxes | Premium Jewelry Packaging',
  description: 'Boxy Pack delivers premium anklet boxes with fast turnaround, free shipping, and elegant design for professional jewelry presentation. Order Now.',
};

const AnkletBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'anklet-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="anklet-boxes"
      pageType="subcategory"
    />
  );
};

export default AnkletBoxesPage;