'use client';

import React, { useState } from 'react';
import { 
  ChevronDown, 
  Search, 
  HelpCircle, 
  ShoppingCart, 
  Menu, 
  X, 
  ChevronRight,
  Package,
  Box,
  Archive,
  Layers,
  ShoppingBag,
  Gift,
  Heart,
  Star,
  Coffee,
  Shirt,
  Gem,
  Zap,
  Cigarette,
  Leaf,
  Droplets,
  Flame,
  BookOpen,
  Calendar,
  Tag,
  FileText,
  Printer,
  Briefcase,
  Car,
  Home,
  Utensils,
  Gamepad2,
  Crown,
  Sparkles,
  Truck,
  Mail,
  Lock,
  Eye,
  Square,
  Circle,
  Triangle,
  Hexagon,
  Pill,
  Pen,
  Cookie,
  Pizza,
  Wheat,
  Watch,
  Book,
  Presentation,
  Candy,
  Milk,
  Slice,
  Tags,
  Table,
  Tent
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { navigationData, NavigationSection, MainCategory } from '../data/navigationData';

// Icon mapping functions
const getCategoryIcon = (categoryName: string) => {
  const name = categoryName.toLowerCase();
  
  // Material categories
  if (name.includes('rigid')) return Package;
  if (name.includes('kraft')) return Leaf;
  if (name.includes('cardboard')) return Box;
  if (name.includes('corrugated')) return Layers;
  
  // Industry categories
  if (name.includes('bakery')) return Cookie;
  if (name.includes('cosmetic')) return Sparkles;
  if (name.includes('retail')) return ShoppingBag;
  if (name.includes('candle')) return Flame;
  if (name.includes('gift')) return Gift;
  if (name.includes('shipping')) return Truck;
  if (name.includes('soap')) return Droplets;
  if (name.includes('food')) return Utensils;
  if (name.includes('apparel')) return Shirt;
  if (name.includes('jewelry')) return Gem;
  if (name.includes('sports')) return Gamepad2;
  if (name.includes('cigarette')) return Cigarette;
  if (name.includes('cbd')) return Leaf;
  if (name.includes('stationery')) return Pen;
  if (name.includes('christmas')) return Gift;
  if (name.includes('chocolate')) return Heart;
  if (name.includes('cereal')) return Wheat;
  if (name.includes('pre roll')) return Leaf;
  if (name.includes('pizza')) return Pizza;
  
  // Simple categories
  if (name.includes('pouches')) return Archive;
  if (name.includes('shopping bags')) return ShoppingBag;
  if (name.includes('other')) return Tag;
  
  return Package; // Default icon
};

const getSubcategoryIcon = (subcategoryName: string) => {
  const name = subcategoryName.toLowerCase();
  
  // Box types
  if (name.includes('magnetic')) return Lock;
  if (name.includes('two piece')) return Square;
  if (name.includes('collapsible') || name.includes('foldable')) return Archive;
  if (name.includes('sliding') || name.includes('sleeve')) return Layers;
  if (name.includes('child resistant')) return Lock;
  if (name.includes('brief case')) return Briefcase;
  if (name.includes('book style')) return Book;
  if (name.includes('hexagon')) return Hexagon;
  if (name.includes('round')) return Circle;
  if (name.includes('shoulder')) return Package;
  
  // Specific products
  if (name.includes('mailer')) return Mail;
  if (name.includes('gable')) return Triangle;
  if (name.includes('tuck')) return Square;
  if (name.includes('window')) return Eye;
  if (name.includes('display')) return Eye;
  if (name.includes('dispenser')) return Package;
  if (name.includes('hanger')) return Package;
  if (name.includes('inserts')) return Layers;
  if (name.includes('auto bottom')) return Package;
  if (name.includes('seal end')) return Lock;
  if (name.includes('blister')) return Package;
  if (name.includes('shipping')) return Truck;
  if (name.includes('full flap')) return Package;
  
  // Industry specific
  if (name.includes('donut') || name.includes('pastry') || name.includes('cake') || name.includes('cookie') || name.includes('candy') || name.includes('cupcake') || name.includes('truffle')) return Cookie;
  if (name.includes('perfume') || name.includes('makeup') || name.includes('lipstick') || name.includes('mascara') || name.includes('nail polish') || name.includes('lip balm') || name.includes('foundation') || name.includes('lotion') || name.includes('eyelash')) return Sparkles;
  if (name.includes('toy') || name.includes('dispenser') || name.includes('mailer')) return Gamepad2;
  if (name.includes('candle')) return Flame;
  if (name.includes('gift') || name.includes('pillow') || name.includes('birthday') || name.includes('party') || name.includes('favor')) return Gift;
  if (name.includes('shipping')) return Truck;
  if (name.includes('soap')) return Droplets;
  if (name.includes('french fry') || name.includes('coffee') || name.includes('noodle') || name.includes('popcorn') || name.includes('snack') || name.includes('tea') || name.includes('burger') || name.includes('sandwich')) return Utensils;
  if (name.includes('cufflink') || name.includes('tie') || name.includes('belt') || name.includes('clothing') || name.includes('lingerie') || name.includes('underwear') || name.includes('tshirt') || name.includes('socks')) return Shirt;
  if (name.includes('anklet') || name.includes('velvet') || name.includes('jewelry') || name.includes('pendant') || name.includes('bracelet') || name.includes('ring') || name.includes('earring') || name.includes('necklace')) return Gem;
  if (name.includes('shoe') || name.includes('golf') || name.includes('football')) return Package;
  if (name.includes('cigarette')) return Cigarette;
  if (name.includes('cbd') || name.includes('cannabis') || name.includes('gummies') || name.includes('oil') || name.includes('hemp') || name.includes('pre roll') || name.includes('tincture')) return Leaf;
  if (name.includes('vape') || name.includes('cartridge') || name.includes('disposable') || name.includes('e liquid')) return Package;
  if (name.includes('pencil') || name.includes('pen') || name.includes('book') || name.includes('presentation')) return Pen;
  if (name.includes('christmas')) return Gift;
  if (name.includes('chocolate')) return Heart;
  if (name.includes('cereal')) return Wheat;
  if (name.includes('pizza')) return Pizza;
  
  // Simple categories
  if (name.includes('stand up') || name.includes('ziplock') || name.includes('mylar')) return Archive;
  if (name.includes('kraft') || name.includes('paper') || name.includes('pvc')) return Leaf;
  if (name.includes('booklet') || name.includes('brochure') || name.includes('tags') || name.includes('business') || name.includes('tissue') || name.includes('butter') || name.includes('labels') || name.includes('table') || name.includes('tent') || name.includes('packing')) return FileText;
  
  return Package; // Default icon
};

const Header: React.FC = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredMainSection, setHoveredMainSection] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null);
  const [hoveredSubcategory, setHoveredSubcategory] = useState<string | null>(null);

  // Close dropdown on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      if (hoveredMainSection || hoveredCategory) {
        setHoveredMainSection(null);
        setHoveredCategory(null);
        setHoveredSubcategory(null);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll, { passive: true });
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [hoveredMainSection, hoveredCategory]);

  // Helper function to get navigation section by slug
  const getNavSection = (slug: string): NavigationSection | undefined => {
    return navigationData.find(section => section.slug === slug);
  };

  return (
    <header className="bg-white">
      {/* Main Header Bar */}
      <div className="md:px-12 lg:px-16 px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Side - Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/img/logo-vertical.png" alt="Boxypack" width={200} height={100} />
          </ Link>

          {/* Center - Search Bar - Hidden on mobile */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for products |"
                className="w-full px-4 py-3 bg-gray-100 rounded-full text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0c6b76] focus:bg-white"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#0c6b76]" />
            </div>
          </div>

          {/* Right Side - Navigation - Hidden on mobile */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => {
                  setIsProductsOpen(true);
                }}
                className="flex items-center space-x-1 text-[#0c6b76] hover:text-[#0ca6c2] transition-colors"
              >
                <span className="font-medium">Products</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {isProductsOpen && (
                <div 
                  className="absolute top-full right-0 mt-2 w-72 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-60"
                  onMouseEnter={() => setIsProductsOpen(true)}
                  onMouseLeave={() => setIsProductsOpen(false)}
                >
                  {navigationData.map((section) => (
                    <div key={section.slug} className="relative">
                      <div className="flex items-center justify-between px-4 py-2 text-gray-700 hover:bg-gray-50 cursor-pointer">
                        <Link href={`/products/${section.slug}`} className="flex-1">
                          {section.name}
                        </Link>
                        {section.hasSubcategories && (
                          <ChevronRight className="w-4 h-4 text-gray-400" />
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* About Us - No Dropdown */}
            <Link href="/about-us" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              About Us
            </Link>

            {/* Contact Us - No Dropdown */}
            <Link href="/contact-us" className="text-gray-700 hover:text-[#0c6b76] transition-colors font-medium">
              Contact Us
            </Link>

            {/* Shopping Cart */}
            <div className="relative">
                <Link href="/cart" className="flex items-center text-gray-700 hover:text-[#0c6b76] transition-colors">
                <ShoppingCart className="w-6 h-6" />
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  0
                </span>
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Mobile Cart */}
            <Link href="/cart" className="relative text-gray-700 hover:text-[#0c6b76] transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                0
              </span>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-[#0c6b76] transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

             {/* Mobile Menu Overlay */}
       {isMobileMenuOpen && (
         <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-50" onClick={() => setIsMobileMenuOpen(false)}>
           <div className="absolute top-0 right-0 w-80 h-full bg-white shadow-lg" onClick={(e) => e.stopPropagation()}>
             <div className="p-6">
               <div className="flex items-center justify-between mb-6">
                 {/* Logo instead of "Menu" text */}
                 <div className="flex items-center space-x-3">
                   <div className="relative">
                     <div className="w-8 h-8 bg-transparent border-2 border-[#0ca6c2] transform rotate-45"></div>
                     <div className="absolute inset-1 bg-transparent border-2 border-[#0ca6c2] rounded-md flex items-center justify-center">
                       <span className="text-[#0ca6c2] font-bold text-sm transform -rotate-45">P</span>
                     </div>
                   </div>
                   <span className="text-[#0c6b76] font-bold text-lg uppercase">Boxypack</span>
                 </div>
                 <button
                   onClick={() => setIsMobileMenuOpen(false)}
                   className="text-gray-500 hover:text-gray-700"
                 >
                   <X className="w-6 h-6" />
                 </button>
               </div>
               
               {/* Mobile Navigation Items */}
               <div className="space-y-4">
                 {/* Products Section */}
                 <div className="relative">
                   <button
                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                     className="flex items-center justify-between w-full text-left py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                   >
                     <span className="font-semibold text-gray-900">Products</span>
                    <ChevronDown className={`w-4 h-4 text-gray-500 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} />
                   </button>
                  {isProductsOpen && (
                     <div className="mt-2 ml-4 space-y-2">
                      {navigationData.map((section) => (
                        <Link 
                          key={section.slug}
                          href={`/products/${section.slug}`} 
                          className="block py-2 px-4 text-gray-700 hover:text-[#0c6b76] hover:bg-[#0ca6c2]/10 rounded"
                        >
                          {section.name}
                        </Link>
                      ))}
                     </div>
                   )}
                 </div>

                 {/* About Us - No Dropdown */}
                 <Link href="/about-us" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">About Us</span>
                 </Link>

                 {/* Contact Us - No Dropdown */}
                 <Link href="/contact" className="block py-3 px-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                   <span className="font-semibold text-gray-900">Contact Us</span>
                 </Link>
               </div>
             </div>
           </div>
         </div>
       )}

      {/* Category Navigation Bar - Hidden on mobile */}
      <div className="hidden md:block white border-t border-gray-200 relative">
        <div className="md:px-20 lg:px-24 px-6 py-4">
          <nav className="flex items-center justify-between py-3">
            <div className="flex items-center space-x-12 md:space-x-16 lg:space-x-20">
              {navigationData.map((section) => (
                <div key={section.slug} className="relative">
                    <Link
                    href={`/products/${section.slug}`}
                     className="text-black hover:text-black font-medium transition-colors pb-2 relative group"
                    onMouseEnter={() => setHoveredMainSection(section.slug)}
                     onMouseLeave={() => {
                      // Don't close immediately when leaving the section text
                       // Let the dropdown handle its own hover state
                     }}
                   >
                    {section.name}
                    {/* Animated border bottom that grows from left to right */}
                    <div 
                      className={`absolute bottom-0 left-0 h-1 bg-[#0c6b76] transition-all duration-500 ease-out ${
                        hoveredMainSection === section.slug ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </Link>
                  
                                     {/* Hover Dropdown Menu */}
                  {hoveredMainSection === section.slug && (
                                           <div 
                      className="fixed left-0 top-40 w-screen h-[60vh] z-50 bg-white shadow-lg border-t border-gray-200"
                      onMouseEnter={() => setHoveredMainSection(section.slug)}
                        onMouseLeave={() => {
                          // Only close when user actually leaves the dropdown area
                        setHoveredMainSection(null);
                          setHoveredCategory(null);
                        setHoveredSubcategory(null);
                      }}
                    >
                      <div className="w-full h-full flex">
                        <div className="max-w-7xl w-full mx-auto px-6 py-6 h-full">
                          {section.hasSubcategories && section.categories ? (
                            <div className="flex h-full">
                              {/* Left Side - Main Categories */}
                              <div className="w-1/4 pr-6 border-r border-gray-200 relative">
                                {/* Top gradient fade indicator */}
                                <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none z-10"></div>
                                <div className="space-y-1 max-h-96 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 hover:scrollbar-thumb-gray-400 pt-4 pb-4">
                                  {section.categories.map((category) => (
                                    <div
                                      key={category.slug}
                                      className="relative"
                                      onMouseEnter={() => setHoveredCategory(category.slug)}
                                    >
                                      <Link
                                        href={`/products/${section.slug}/${category.slug}`}
                                        className={`flex items-center justify-between px-2 py-2 rounded-lg transition-colors ${
                                          hoveredCategory === category.slug 
                                            ? 'bg-[#0c6b76]/10 text-[#0c6b76]' 
                                            : 'text-gray-700 hover:bg-gray-50'
                                        }`}
                                      >
                                        <div className="flex items-center flex-1">
                                          {React.createElement(getCategoryIcon(category.name), { 
                                            className: "w-4 h-4 mr-2 flex-shrink-0" 
                                          })}
                                          <span className="font-medium text-sm">{category.name}</span>
                                        </div>
                                        <ChevronRight className="w-3 h-3 ml-2 flex-shrink-0" />
                                      </Link>
                                    </div>
                                  ))}
                               </div>
                                {/* Gradient fade indicator */}
                                <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
                             </div>
                             
                              {/* Right Side - Subcategories */}
                              <div className="w-3/4 pl-6">
                                {hoveredCategory && (
                                  <div>
                                    {(() => {
                                      const activeCategory = section.categories?.find(cat => cat.slug === hoveredCategory);
                                      return activeCategory ? (
                                        <div>
                                          <div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                                            {activeCategory.subcategories.map((subcategory) => (
                                              <Link
                                                key={subcategory.slug}
                                                href={`/products/${section.slug}/${activeCategory.slug}/${subcategory.slug}`}
                                                className="flex items-center px-2 py-1.5 text-sm text-gray-600 hover:text-[#0c6b76] hover:bg-[#0c6b76]/5 rounded-md transition-colors"
                                              >
                                                {React.createElement(getSubcategoryIcon(subcategory.name), { 
                                                  className: "w-4 h-4 mr-2 flex-shrink-0" 
                                                })}
                                                <span className="truncate">{subcategory.name}</span>
                                              </Link>
                                            ))}
                                          </div>
                                        </div>
                                      ) : null;
                                    })()}
                                  </div>
                                )}
                                {!hoveredCategory && (
                                  <div className="flex items-center justify-center h-full text-gray-400">
                                    <p>Hover over a category to see subcategories</p>
                                  </div>
                                )}
                              </div>
                            </div>
                          ) : (
                            // Simple dropdown for sections without subcategories - using same layout as complex dropdowns
                            <div className="flex h-full">
                              {/* Left Side - Section Info */}
                              <div className="w-1/4 pr-6 border-r border-gray-200">
                                <div className="flex items-center h-full">
                                  <div className="text-center w-full">
                                    <div className="flex items-center justify-center mb-4">
                                      {React.createElement(getCategoryIcon(section.name), { 
                                        className: "w-8 h-8 text-[#0c6b76] mr-3" 
                                      })}
                                      <h2 className="text-xl font-bold text-[#0c6b76]">
                                        {section.name}
                                      </h2>
                                    </div>
                                    <p className="text-gray-600 text-sm">
                                      {section.description}
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                              {/* Right Side - Subcategories */}
                              <div className="w-3/4 pl-6">
                                <div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                                  {section.subcategories?.map((subcategory) => (
                                    <Link
                                      key={subcategory.slug}
                                      href={`/products/${section.slug}/${subcategory.slug}`}
                                      className="flex items-center px-3 py-2 text-sm text-gray-600 hover:text-[#0c6b76] hover:bg-[#0c6b76]/5 rounded-md transition-colors"
                                    >
                                      {React.createElement(getSubcategoryIcon(subcategory.name), { 
                                        className: "w-4 h-4 mr-2 flex-shrink-0" 
                                      })}
                                      <span className="truncate">{subcategory.name}</span>
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}
                         </div>
                       </div>
                     </div>
                   )}
                </div>
              ))}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
