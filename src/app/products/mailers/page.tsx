import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const MailersPage = () => {
  return <ProductsDesignPage productData={productData['mailers']} />;
};

export default MailersPage;