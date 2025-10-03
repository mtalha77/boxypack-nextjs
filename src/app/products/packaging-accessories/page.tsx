import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productPagesData';

const PackagingAccessoriesPage = () => {
  return <ProductsDesignPage productData={productData['packaging-accessories']} />;
};

export default PackagingAccessoriesPage;