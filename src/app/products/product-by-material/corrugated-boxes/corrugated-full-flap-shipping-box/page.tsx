import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Full Flap Shipping Box - Custom Packaging | BoxyPack',
  description: 'Premium corrugated full flap shipping box packaging solutions with complete flap coverage. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated full flap shipping box, custom packaging, shipping boxes, sturdy boxes, durable packaging',
};

const CorrugatedFullFlapShippingBoxPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Full Flap Shipping Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedFullFlapShippingBoxPage;
