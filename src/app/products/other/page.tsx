import React from 'react';
import { navigationData } from '../../data/navigationData';
import ProductPageTemplate from '../../components/product-page/page';

const OtherPage = () => {
  const section = navigationData.find(s => s.slug === 'other');
  
  if (!section) {
    return <div>Section not found</div>;
  }

  return (
    <ProductPageTemplate
      section={section}
      slug="other"
      pageType="section"
    />
  );
};

export default OtherPage;
