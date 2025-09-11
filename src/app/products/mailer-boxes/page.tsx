import ProductsDesignPage from '../Products-design-page';
import { productData } from '../../data/productData';

const MailerBoxesPage = () => {
  return <ProductsDesignPage productData={productData['mailer-boxes']} />;
};

export default MailerBoxesPage;
