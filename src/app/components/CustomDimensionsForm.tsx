'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronDown, Info, Share2, Check } from 'lucide-react';
import { navigationData, NavigationSection, MainCategory, SubCategory } from '../data/navigationData';
import LightBlueBackground from '../UI/LightBlueBackground';
import { useRouter } from 'next/navigation';

interface CustomDimensionsFormProps {
  onDesignNow?: () => void;
  onGetCustomQuote?: () => void;
  initialProductSlug?: string; // Add prop for initial product selection
}

const CustomDimensionsForm: React.FC<CustomDimensionsFormProps> = ({
  onDesignNow,
  onGetCustomQuote,
  initialProductSlug
}) => {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const [printColor, setPrintColor] = useState('Full Color');
  const [sizeType, setSizeType] = useState('STANDARD SIZES');
  const [selectedSize, setSelectedSize] = useState('9.5" x 7.75" x 4"');
  const [customLength, setCustomLength] = useState(9.5);
  const [customWidth, setCustomWidth] = useState(7.75);
  const [customDepth, setCustomDepth] = useState(4);
  const [material, setMaterial] = useState('White');
  const [printFinish, setPrintFinish] = useState('HDPrint Stain');
  const [printedSides, setPrintedSides] = useState('Outside');
  const [quantity, setQuantity] = useState(250);
  const [productionSpeed, setProductionSpeed] = useState('Standard (8 Business Days)');
  const [showDropdowns, setShowDropdowns] = useState<{[key: string]: boolean}>({});
  const [selectedImage, setSelectedImage] = useState('/img/Mailer-Box-3.jpg');
  const [zoomLevel, setZoomLevel] = useState(1);

  const unitPrice = 3.92;
  const subtotal = unitPrice * quantity;

  // Zoom functions
  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 3)); // Max zoom 3x
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.7)); // Min zoom 0.7x (70%)
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
  };

  // Reset zoom when switching images
  const handleImageChange = (imageSrc: string) => {
    setSelectedImage(imageSrc);
    setZoomLevel(1); // Reset zoom when switching images
  };


  // Handle pre-selection from sessionStorage or initialProductSlug
  useEffect(() => {
    const storedProduct = sessionStorage.getItem('selectedProduct');
    if (storedProduct) {
      setSelectedProduct(storedProduct);
      // Clear the stored product after using it
      sessionStorage.removeItem('selectedProduct');
    } else if (initialProductSlug) {
      setSelectedProduct(initialProductSlug);
    }
  }, [initialProductSlug]);

  const toggleDropdown = (field: string) => {
    setShowDropdowns(prev => ({
      ...prev,
      [field]: !prev[field]
    }));
  };

  const printColorOptions = ['Full Color', 'Black'];
  const printFinishOptions = ['HDPrint Stain'];
  const printedSidesOptions = ['Outside', 'Inside', 'Both Sides', 'Blank'];

  // Get all products from navigation data
  const getAllProducts = () => {
    const allProducts: Array<{name: string, slug: string, category: string}> = [];
    navigationData.forEach(section => {
      if (section.categories) {
        section.categories.forEach(category => {
          if (category.subcategories) {
            category.subcategories.forEach(subcategory => {
              allProducts.push({
                name: subcategory.name,
                slug: subcategory.slug,
                category: category.name
              });
            });
          }
        });
      }
    });
    return allProducts;
  };

  // Get filtered products based on search query
  const getFilteredProducts = () => {
    const allProducts = getAllProducts();
    if (!productSearchQuery.trim()) {
      return allProducts;
    }
    
    return allProducts.filter(product => 
      product.name.toLowerCase().includes(productSearchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(productSearchQuery.toLowerCase())
    );
  };
  
  // Material options based on print color
  const fullColorMaterials = ['White', 'Dreamcoat', 'Kraft'];
  const blackColorMaterials = ['White', 'Kraft'];
  
  // Size options based on print color
  const fullColorSizes = [
    '5" x 3" x 1.5"',
    '6" x 4" x 3"',
    '6" x 5" x 2.25"',
    '7" x 5" x 3"',
    '8" x 6" x 3"',
    '9" x 6" x 4"',
    '9" x 7" x 2.25"',
    '9.5" x 7.75" x 4"',
    '10" x 8" x 4"',
    '11.25" x 9" x 3"',
    '12" x 9" x 2"',
    '12" x 10" x 4"',
    '14" x 10" x 4"',
    '13" x 10" x 5"'
  ];

  const blackColorSizes = [
    '3" x 3" x 1"',
    '4" x 4" x 2"',
    '5" x 3" x 1.5"',
    '6" x 4" x 3"',
    '6" x 6" x 2"',
    '7" x 5" x 3"',
    '8" x 6" x 3"',
    '8" x 8" x 3"',
    '9" x 6" x 2"',
    '9.5" x 7.75" x 4"',
    '10" x 8" x 4"',
    '12" x 9" x 2"'
  ];

  // Get current size options based on print color
  const getCurrentSizeOptions = () => {
    return printColor === 'Full Color' ? fullColorSizes : blackColorSizes;
  };

  // Get current material options based on print color
  const getCurrentMaterialOptions = () => {
    return printColor === 'Full Color' ? fullColorMaterials : blackColorMaterials;
  };

  // Update selected size and material when print color changes
  const handlePrintColorChange = (color: string) => {
    setPrintColor(color);
    const newSizes = color === 'Full Color' ? fullColorSizes : blackColorSizes;
    const newMaterials = color === 'Full Color' ? fullColorMaterials : blackColorMaterials;
    
    // Set to first available size if current size is not available in new options
    if (!newSizes.includes(selectedSize)) {
      setSelectedSize(newSizes[0]);
    }
    
    // Set to first available material if current material is not available in new options
    if (!newMaterials.includes(material)) {
      setMaterial(newMaterials[0]);
    }
  };

  // Helper functions for custom dimensions
  const incrementDimension = (dimension: 'length' | 'width' | 'depth') => {
    const step = 0.25;
    switch (dimension) {
      case 'length':
        setCustomLength(prev => Math.round((prev + step) * 100) / 100);
        break;
      case 'width':
        setCustomWidth(prev => Math.round((prev + step) * 100) / 100);
        break;
      case 'depth':
        setCustomDepth(prev => Math.round((prev + step) * 100) / 100);
        break;
    }
  };

  const decrementDimension = (dimension: 'length' | 'width' | 'depth') => {
    const step = 0.25;
    switch (dimension) {
      case 'length':
        setCustomLength(prev => Math.max(0.25, Math.round((prev - step) * 100) / 100));
        break;
      case 'width':
        setCustomWidth(prev => Math.max(0.25, Math.round((prev - step) * 100) / 100));
        break;
      case 'depth':
        setCustomDepth(prev => Math.max(0.25, Math.round((prev - step) * 100) / 100));
        break;
    }
  };

  return (
    <div className="custom-dimensions-form min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative group">
              <div className="w-full aspect-square flex items-center justify-center relative overflow-hidden">
                <Image 
                  src={selectedImage}
                  alt="Custom Mailer Box"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{ transform: `scale(${zoomLevel})` }}
                />
                
                {/* Zoom Controls - positioned inside image */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {/* Zoom In Button */}
                  <button 
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-lg shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Zoom In"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </button>
                  
                  {/* Reset Zoom Button */}
                  <button 
                    onClick={handleResetZoom}
                    className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-lg shadow-lg transition-colors"
                    title="Reset Zoom"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                  
                  {/* Zoom Out Button */}
                  <button 
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.7}
                    className="bg-white/90 hover:bg-white text-gray-700 p-2 rounded-lg shadow-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Zoom Out"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 12H6" />
                    </svg>
                  </button>
                </div>
                
                {/* Zoom Level Indicator */}
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                  {Math.round(zoomLevel * 100)}%
                </div>
              </div>
      </div>

            {/* Thumbnail Gallery */}
            <div className="flex gap-4 justify-center">
              <div 
                className={`w-16 h-16 rounded border cursor-pointer transition-all duration-300 ${
                  selectedImage === '/img/Mailer-Box-3.jpg' 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleImageChange('/img/Mailer-Box-3.jpg')}
              >
                    <Image 
                      src="/img/Mailer-Box-3.jpg" 
                  alt="Mailer Box 3"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded"
                    />
                  </div>
              <div 
                className={`w-16 h-16 rounded border cursor-pointer transition-all duration-300 ${
                  selectedImage === '/img/Mailer-Box-2.jpg' 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleImageChange('/img/Mailer-Box-2.jpg')}
              >
                <Image 
                  src="/img/Mailer-Box-2.jpg" 
                  alt="Mailer Box 2"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded"
                />
                </div>
              <div 
                className={`w-16 h-16 rounded border cursor-pointer transition-all duration-300 ${
                  selectedImage === '/img/Mailer-Box (1).jpg' 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleImageChange('/img/Mailer-Box (1).jpg')}
              >
                <Image 
                  src="/img/Mailer-Box (1).jpg" 
                  alt="Mailer Box 1"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* Right Column - Product Details and Form */}
          <div className="space-y-4">
            {/* Header Section */}
            <div className="text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-[#0c6b76] mb-4">
                Customize Your Packaging
              </h1>
              <p className="text-lg text-gray-600">
                Design and order custom packaging boxes tailored to your exact specifications. 
                Choose from our wide range of materials, sizes, and finishes.
              </p>
            </div>
            
            {/* Product Selection */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#0c6b76]">Product</label>
                <Info className="w-3 h-3 text-[#0ca6c2]" />
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('product')}
                  className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                >
                  <span className="text-sm text-gray-900">
                    {selectedProduct ? getAllProducts().find(product => product.slug === selectedProduct)?.name || 'Select Product' : 'Select Product'}
                  </span>
                  <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                </button>
                {showDropdowns.product && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-hidden">
                    {/* Search Input */}
                    <div className="p-3 border-b border-gray-200">
                      <input
                        type="text"
                        placeholder="Search products..."
                        value={productSearchQuery}
                        onChange={(e) => setProductSearchQuery(e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-transparent text-sm"
                        onClick={(e) => e.stopPropagation()}
                      />
                    </div>
                    {/* Product List */}
                    <div className="max-h-48 overflow-y-auto">
                      {getFilteredProducts().length > 0 ? (
                        getFilteredProducts().map((product) => (
                          <button
                            key={product.slug}
                            onClick={() => {
                              setSelectedProduct(product.slug);
                              setProductSearchQuery('');
                              toggleDropdown('product');
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            <div className="flex flex-col">
                              <span className="font-medium text-gray-900">{product.name}</span>
                              <span className="text-sm text-gray-500">{product.category}</span>
                            </div>
                          </button>
                        ))
                      ) : (
                        <div className="px-4 py-3 text-gray-500 text-sm text-center">
                          No products found matching &quot;{productSearchQuery}&quot;
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Print Color, Material, Print Finish, Printed Sides - Row Layout */}
            <div className="grid grid-cols-2 gap-4">
            {/* Print Color */}
              <div className="space-y-1">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#0c6b76]">Print Color</label>
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleDropdown('printColor')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                >
                    <span className="text-sm text-gray-900">{printColor}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                </button>
                {showDropdowns.printColor && (
                  <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {printColorOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          handlePrintColorChange(option);
                          toggleDropdown('printColor');
                        }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Material */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-[#0c6b76]">Material</label>
                  <Info className="w-3 h-3 text-[#0ca6c2]" />
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('material')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                  >
                    <span className="text-sm text-gray-900">{material}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                  </button>
                  {showDropdowns.material && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {getCurrentMaterialOptions().map((option: string) => (
                        <button
                          key={option}
                          onClick={() => {
                            setMaterial(option);
                            toggleDropdown('material');
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Print Finish */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-[#0c6b76]">Print finish</label>
                  <Info className="w-3 h-3 text-[#0ca6c2]" />
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('printFinish')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                  >
                    <span className="text-sm text-gray-900">{printFinish}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                  </button>
                  {showDropdowns.printFinish && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {printFinishOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setPrintFinish(option);
                            toggleDropdown('printFinish');
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
                </div>
              </div>

              {/* Printed Sides */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-[#0c6b76]">Printed sides</label>
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('printedSides')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                  >
                    <span className="text-sm text-gray-900">{printedSides}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                  </button>
                  {showDropdowns.printedSides && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {printedSidesOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setPrintedSides(option);
                            toggleDropdown('printedSides');
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Size */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#0c6b76]">Size (L x W x D)</label>
                <Info className="w-3 h-3 text-[#0ca6c2]" />
              </div>
              <div className="space-y-3">
                <div className="flex gap-2">
                  <button
                    onClick={() => setSizeType('STANDARD SIZES')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border-2 text-xs font-medium transition-colors ${
                      sizeType === 'STANDARD SIZES'
                        ? 'border-[#0ca6c2] bg-[#0ca6c2]/10 text-[#0c6b76]'
                        : 'border-[#0c6b76]/30 bg-white text-[#0c6b76] hover:border-[#0ca6c2]'
                    }`}
                  >
                    {sizeType === 'STANDARD SIZES' && <Check className="w-3 h-3" />}
                    STANDARD SIZES
                  </button>
                  <button
                    onClick={() => setSizeType('CUSTOM SIZES')}
                    className={`flex-1 flex items-center justify-center gap-2 px-3 py-2 rounded-lg border-2 text-xs font-medium transition-colors ${
                      sizeType === 'CUSTOM SIZES'
                        ? 'border-[#0ca6c2] bg-[#0ca6c2]/10 text-[#0c6b76]'
                        : 'border-[#0c6b76]/30 bg-white text-[#0c6b76] hover:border-[#0ca6c2]'
                    }`}
                  >
                    {sizeType === 'CUSTOM SIZES' && <Check className="w-3 h-3" />}
                    CUSTOM SIZES
                  </button>
                </div>
                {sizeType === 'STANDARD SIZES' && (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown('size')}
                      className="w-full flex items-center justify-between px-4 py-3 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                    >
                      <span className="text-gray-900">{selectedSize}</span>
                      <ChevronDown className="w-5 h-5 text-[#0ca6c2]" />
                    </button>
                    {showDropdowns.size && (
                      <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                        {getCurrentSizeOptions().map((size: string) => (
                          <button
                            key={size}
                            onClick={() => {
                              setSelectedSize(size);
                              toggleDropdown('size');
                            }}
                            className="w-full text-left px-4 py-3 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg"
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
                
                {sizeType === 'CUSTOM SIZES' && (
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-3 justify-items-between">
                      {/* Length Input */}
                      <div className="space-y-2 w-32">
                        <label className="text-sm font-medium text-gray-700">
                          Length (inch)<span className="text-red-500 ml-1">*</span>
                        </label>
                          <input
                            type="number"
                            value={customLength}
                            onChange={(e) => setCustomLength(Math.max(0.25, parseFloat(e.target.value) || 0.25))}
                            step="0.25"
                            min="0.25"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder=""
                        />
                      </div>

                      {/* Width Input */}
                      <div className="space-y-2 w-32">
                        <label className="text-sm font-medium text-gray-700">
                          Width (inch)<span className="text-red-500 ml-1">*</span>
                        </label>
                          <input
                            type="number"
                            value={customWidth}
                            onChange={(e) => setCustomWidth(Math.max(0.25, parseFloat(e.target.value) || 0.25))}
                            step="0.25"
                            min="0.25"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder=""
                        />
                      </div>

                      {/* Depth Input */}
                      <div className="space-y-2 w-32">
                        <label className="text-sm font-medium text-gray-700">
                          Depth (inch)<span className="text-red-500 ml-1">*</span>
                        </label>
                          <input
                            type="number"
                            value={customDepth}
                            onChange={(e) => setCustomDepth(Math.max(0.25, parseFloat(e.target.value) || 0.25))}
                            step="0.25"
                            min="0.25"
                          className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                          placeholder=""
                        />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>


            {/* Quantity */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#0c6b76]">Quantity</label>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-[#0c6b76]/30 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2]"
                    min="1"
                  />
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">${unitPrice.toFixed(2)} each</div>
                  <div className="flex items-center gap-1 text-xs text-green-600">
                    <span>Save 84%</span>
                    <ChevronDown className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </div>

            {/* Production Speed and Pricing Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Production Speed */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-[#0c6b76]">Production speed</label>
                </div>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 border border-[#0c6b76]/30 rounded-lg cursor-pointer hover:bg-[#0ca6c2]/5">
                    <input
                      type="radio"
                      name="productionSpeed"
                      value="Standard (8 Business Days)"
                      checked={productionSpeed === 'Standard (8 Business Days)'}
                      onChange={(e) => setProductionSpeed(e.target.value)}
                      className="w-4 h-4 text-[#0ca6c2]"
                    />
                    <span className="text-gray-900">Standard (8 Business Days)</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-[#0c6b76]/30 rounded-lg cursor-pointer hover:bg-[#0ca6c2]/5">
                    <input
                      type="radio"
                      name="productionSpeed"
                      value="Rush (5 Business Days)"
                      checked={productionSpeed === 'Rush (5 Business Days)'}
                      onChange={(e) => setProductionSpeed(e.target.value)}
                      className="w-4 h-4 text-[#0ca6c2]"
                    />
                    <span className="text-gray-900">Rush (5 Business Days)</span>
                  </label>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="bg-[#0ca6c2]/5 rounded-lg p-6 space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">${unitPrice.toFixed(2)} each</div>
                  <div className="text-lg text-gray-700">Subtotal: ${subtotal.toFixed(2)}</div>
                </div>
              </div>
            </div>

            {/* Design Options */}
            <div className="space-y-6">
              {/* Design Now */}
              <div className="text-center">
                <button
                  onClick={onDesignNow}
                  className="w-full bg-[#0c6b76] cursor-pointer hover:bg-[#0ca6c2] text-white font-semibold py-4 px-6 rounded-lg transition-colors"
                >
                  ORDER NOW
                </button>
              </div>

          </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-right">
          <p className="text-[#0c6b76]">
            Can&apos;t find what you&apos;re looking for?{' '}
            <button
              onClick={() => {
                // Redirect to home page and scroll to request quote section
                router.push('/#request-quote-section');
              }}
              className="text-[#0ca6c2] hover:text-[#0c6b76] underline font-medium cursor-pointer"
            >
              Get a Custom Quote
            </button>
          </p>
        </div>

      </div>
    </div>
  );
};

export default CustomDimensionsForm;
