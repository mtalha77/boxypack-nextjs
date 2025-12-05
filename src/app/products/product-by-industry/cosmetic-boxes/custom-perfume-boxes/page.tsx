import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Luxury Perfume Boxes | Premium Custom Packaging',
  description: 'Boxy Pack delivers premium custom perfume boxes with fast turnaround, free shipping, and elegant finishes for high-end beauty product presentation. Order Now.',
};

const CustomPerfumeBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-perfume-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-perfume-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomPerfumeBoxesPage;