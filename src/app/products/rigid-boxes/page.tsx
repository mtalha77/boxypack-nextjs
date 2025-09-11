import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const RigidBoxesPage = () => {
  return <ProductsDesignPage productData={productData['rigid-boxes']} />;
};

export default RigidBoxesPage;