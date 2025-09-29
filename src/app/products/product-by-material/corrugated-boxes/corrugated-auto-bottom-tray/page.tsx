import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Auto Bottom Tray - Custom Packaging | BoxyPack',
  description: 'Premium corrugated auto bottom tray packaging solutions with automatic bottom assembly. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated auto bottom tray, custom packaging, auto bottom, sturdy trays, durable packaging',
};

const CorrugatedAutoBottomTrayPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Auto Bottom Tray'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedAutoBottomTrayPage;