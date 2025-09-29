import React from 'react';
import { Metadata } from 'next';
import CustomDimensionsForm from '../../../../components/CustomDimensionsForm';
import ClientTestimonials from '../../../../components/product-design-page/ClientTestamonials';

export const metadata: Metadata = {
  title: 'Corrugated Brief Case Style Box - Custom Packaging | BoxyPack',
  description: 'Premium corrugated brief case style box packaging solutions with professional appearance. Custom sturdy and durable packaging designed for optimal protection.',
  keywords: 'corrugated brief case style box, custom packaging, brief case boxes, sturdy boxes, durable packaging',
};

const CorrugatedBriefCaseStyleBoxPage: React.FC = () => {
  const productData = {
    name: 'Corrugated Brief Case Style Box'
  };

  return (
    <div>
      <CustomDimensionsForm />
      <ClientTestimonials productData={productData} />
    </div>
  );
};

export default CorrugatedBriefCaseStyleBoxPage;
