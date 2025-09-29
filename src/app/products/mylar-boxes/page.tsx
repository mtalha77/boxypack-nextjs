import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const MylarBoxesPage = () => {
  return <ProductsDesignPage productData={productData['mylar-boxes']} />;
};

export default MylarBoxesPage;