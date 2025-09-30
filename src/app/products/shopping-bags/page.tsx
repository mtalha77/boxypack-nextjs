import ProductsDesignPage from '../Products-design-page';
import { getProductDataBySlug } from '../../data/productData';

const ShoppingBagsPage = () => {
  const productData = getProductDataBySlug('shopping-bags');
  return <ProductsDesignPage productData={productData} />;
};

export default ShoppingBagsPage;