import ProductsDesignPage from '../Products-design-page';
import { getProductDataBySlug } from '../../data/productData';

const OtherPage = () => {
  const productData = getProductDataBySlug('other');
  return <ProductsDesignPage productData={productData} />;
};

export default OtherPage;
