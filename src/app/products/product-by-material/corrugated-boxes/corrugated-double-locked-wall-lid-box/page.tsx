import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Double Locked Wall Lid Box - Custom Packaging | BoxyPack',
  description: 'Premium corrugated double locked wall lid box packaging solutions with secure closure. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated double locked wall lid box, custom packaging, secure closure, sturdy boxes, durable packaging',
};

const CorrugatedDoubleLockedWallLidBoxPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Double Locked Wall Lid Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedDoubleLockedWallLidBoxPage;
