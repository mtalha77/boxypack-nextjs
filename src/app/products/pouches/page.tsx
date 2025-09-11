import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const PouchesPage = () => {
  return <ProductsDesignPage productData={productData['pouches']} />;
};

export default PouchesPage;