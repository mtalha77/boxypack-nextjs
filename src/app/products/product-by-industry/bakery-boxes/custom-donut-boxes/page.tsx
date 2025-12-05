import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Deluxe Donut Boxes | Premium Custom Packaging',
  description: 'Boxy Pack creates premium donut boxes with fast turnaround, free shipping, and eye-catching designs for irresistible bakery packaging. Customize Now.',
};

const CustomDonutBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-donut-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-donut-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomDonutBoxesPage;
