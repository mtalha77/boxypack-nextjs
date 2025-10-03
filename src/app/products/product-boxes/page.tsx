import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productPagesData';

const ProductBoxesPage = () => {
  return <ProductsDesignPage productData={productData['product-boxes']} />;
};

export default ProductBoxesPage;
