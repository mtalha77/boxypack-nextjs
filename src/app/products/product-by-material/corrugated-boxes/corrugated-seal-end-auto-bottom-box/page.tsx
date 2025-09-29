import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Seal End Auto Bottom Box - Custom Packaging | BoxyPack',
  description: 'Premium corrugated seal end auto bottom box packaging solutions with automatic bottom sealing. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated seal end auto bottom box, custom packaging, auto bottom, sturdy boxes, durable packaging',
};

const CorrugatedSealEndAutoBottomBoxPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Seal End Auto Bottom Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedSealEndAutoBottomBoxPage;
