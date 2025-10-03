import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productPagesData';

const ShippingBoxesPage = () => {
  return <ProductsDesignPage productData={productData['shipping-boxes']} />;
};

export default ShippingBoxesPage;