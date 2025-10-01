'use client';

import { usePathname } from 'next/navigation';
import Header from './header';
import Footer from './footer';

interface ConditionalLayoutProps {
  children: React.ReactNode;
}

const ConditionalLayout: React.FC<ConditionalLayoutProps> = ({ children }) => {
  const pathname = usePathname();
  
  // Don't show header and footer for admin routes
  const isAdminRoute = pathname.startsWith('/admin');
  
  if (isAdminRoute) {
    return <>{children}</>;
  }
  
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default ConditionalLayout;
