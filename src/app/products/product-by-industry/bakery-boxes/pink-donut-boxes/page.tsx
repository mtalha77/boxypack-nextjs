import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Pink Donut Boxes | Stylish Custom Bakery Packaging',
  description: 'Boxy Pack delivers high-quality pink donut boxes with fast turnaround, free shipping, and premium printing to make your bakery treats irresistible. Order Now.',
};

const PinkDonutBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'bakery-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'pink-donut-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="pink-donut-boxes"
      pageType="subcategory"
    />
  );
};

export default PinkDonutBoxesPage;