import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const PackagingAccessoriesPage = () => {
  return <ProductsDesignPage productData={productData['packaging-accessories']} />;
};

export default PackagingAccessoriesPage;