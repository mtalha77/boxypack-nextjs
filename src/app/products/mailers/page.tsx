import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productPagesData';

const MailersPage = () => {
  return <ProductsDesignPage productData={productData['mailers']} />;
};

export default MailersPage;