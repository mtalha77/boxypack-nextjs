import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Kraft Jewelry Boxes | Eco-Friendly Premium Packaging',
  description: 'Boxy Pack delivers premium kraft jewelry boxes with fast turnaround, free shipping, and eco-friendly design for sustainable jewelry presentation. Order Now.',
};

const KraftJewelryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'kraft-jewelry-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="kraft-jewelry-boxes"
      pageType="subcategory"
    />
  );
};

export default KraftJewelryBoxesPage;