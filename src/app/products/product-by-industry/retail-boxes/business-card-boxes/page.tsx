import React from 'react';
import { Metadata } from 'next';
import { navigationData } from '../../../../data/navigationData';
import ProductPageTemplate from '../../../../components/product-page/page';

export const metadata: Metadata = {
  title: 'Business Card Boxes | Premium Professional Packaging',
  description: 'Boxy Pack delivers premium business card boxes with fast turnaround, free shipping, and stylish design to showcase your brand professionally. Order Now.',
};

const BusinessCardBoxesPage = () => {
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'retail-boxes');
  const subcategory = category?.subcategories.find(sc => sc.slug === 'business-card-boxes');
  
  if (!section || !category || !subcategory) {
    return <div>Subcategory not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      subcategory={subcategory}
      slug="business-card-boxes"
      pageType="subcategory"
    />
  );
};

export default BusinessCardBoxesPage;