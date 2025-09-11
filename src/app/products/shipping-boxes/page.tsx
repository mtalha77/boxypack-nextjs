import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const ShippingBoxesPage = () => {
  return <ProductsDesignPage productData={productData['shipping-boxes']} />;
};

export default ShippingBoxesPage;