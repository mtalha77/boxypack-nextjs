import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Lip Balm Display Boxes | Premium Custom Packaging',
  description: 'Boxy Pack creates premium lip balm display boxes with fast turnaround, free shipping, and stylish design for professional cosmetic presentation. Shop Today.',
};

const LipBalmDisplayBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'lip-balm-display-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="lip-balm-display-boxes"
      pageType="subcategory"
    />
  );
};

export default LipBalmDisplayBoxesPage;