import React from 'react';
import { navigationData } from '../../../data/navigationData';
import ProductPageTemplate from '../../../components/product-page/page';

const RetailBoxesPage = () => {
  // Page commented out - Retail Boxes category page
  // Subcategories: Custom Die Cut Boxes, Custom Toy Boxes, Business Card Boxes, Custom Dispenser Boxes, Custom Mailer Boxes
  return null;
  
  /* Commented out for now
  const section = navigationData.find(s => s.slug === 'product-by-industry');
  const category = section?.categories?.find(c => c.slug === 'retail-boxes');
  
  if (!section || !category) {
    return <div>Category not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      category={category}
      slug="retail-boxes"
      pageType="category"
    />
  );
  */
};

export default RetailBoxesPage;