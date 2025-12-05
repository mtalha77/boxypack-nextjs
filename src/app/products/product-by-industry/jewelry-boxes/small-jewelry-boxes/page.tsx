import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Small Jewelry Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium small jewelry boxes with fast turnaround, free shipping, and stylish designs to make jewelry gifts look luxurious. Order Now.',
};

const SmallJewelryBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'jewelry-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'small-jewelry-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="small-jewelry-boxes"
      pageType="subcategory"
    />
  );
};

export default SmallJewelryBoxesPage;