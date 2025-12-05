import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Corn Flakes Boxes | Premium Breakfast Packaging',
  description: 'Boxy Pack delivers premium corn flakes boxes with fast turnaround, free shipping, and stylish design for attractive cereal presentation. Order Now.',
};

const CornFlakesBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cereal-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'corn-flakes-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="corn-flakes-boxes"
      pageType="subcategory"
    />
  );
};

export default CornFlakesBoxesPage;