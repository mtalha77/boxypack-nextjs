import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Custom Lip Gloss Boxes | Premium Makeup Packaging',
  description: 'Boxy Pack delivers high-quality custom lip gloss boxes with fast turnaround, free shipping, and stylish designs for professional cosmetic presentation. Shop Today.',
};

const CustomLipGlossBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'cosmetic-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'custom-lip-gloss-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="custom-lip-gloss-boxes"
      pageType="subcategory"
    />
  );
};

export default CustomLipGlossBoxesPage;