import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const ShoppingBagsPage = () => {
  return <ProductsDesignPage productData={productData['shopping-bags']} />;
};

export default ShoppingBagsPage;