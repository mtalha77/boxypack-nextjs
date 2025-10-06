'use client';

import React, { useState, useEffect } from 'react';
import { CldImage } from 'next-cloudinary';
import { ChevronDown, Info } from 'lucide-react';
import { navigationData } from '../data/navigationData';
import { useRouter } from 'next/navigation';

interface CustomDimensionsFormProps {
  onDesignNow?: () => void;
  initialProductSlug?: string; // Add prop for initial product selection
}

const CustomDimensionsForm: React.FC<CustomDimensionsFormProps> = ({
  onDesignNow,
  initialProductSlug
}) => {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState('');
  const [productSearchQuery, setProductSearchQuery] = useState('');
  const [customLength, setCustomLength] = useState(9.5);
  const [customWidth, setCustomWidth] = useState(7.75);
  const [customDepth, setCustomDepth] = useState(4);
  const [material, setMaterial] = useState('kraft');
  const [pt, setPT] = useState('14');
  const [printedSides, setPrintedSides] = useState('outside');
  const [lamination, setLamination] = useState('glossy');
  const [quantity, setQuantity] = useState(250);
  const [showDropdowns, setShowDropdowns] = useState<{[key: string]: boolean}>({});
  const [selectedImage, setSelectedImage] = useState('Mailer-Box-3_oct2ws');
  const [zoomLevel, setZoomLevel] = useState(1);

  // Pricing state
  const [calculating, setCalculating] = useState(false);
  const [pricingResult, setPricingResult] = useState<{
    summary?: { pricePerUnit: number; subtotal: number };
    breakdown?: Array<{ 
      sectionNumber: number; 
      sectionName: string; 
      cost: number; 
      description: string; 
      formula: string;
    }>;
  } | null>(null);
  const [pricingError, setPricingError] = useState<string>('');
  const [showBreakdown, setShowBreakdown] = useState(false);

  const unitPrice = pricingResult?.summary?.pricePerUnit || 0;
  const subtotal = pricingResult?.summary?.subtotal || 0;

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

  // Calculate pricing using new API
  const calculatePricing = async () => {
    if (!selectedProduct) {
      setPricingError('Please select a product');
      return;
    }

    setCalculating(true);
    setPricingError('');

    try {
      const response = await fetch('/api/pricing/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          productId: selectedProduct,
          length: customLength,
          width: customWidth,
          height: customDepth,
          pt: pt,
          requiredUnits: quantity,
          printing: printedSides,
          lamination: lamination
        })
      });

      const data = await response.json();

      if (data.success) {
        setPricingResult(data.data);
        setPricingError('');
      } else {
        setPricingError(data.error || 'Failed to calculate pricing');
        setPricingResult(null);
      }
    } catch (error) {
      console.error('Pricing calculation error:', error);
      setPricingError('Error calculating pricing. Please try again.');
      setPricingResult(null);
    } finally {
      setCalculating(false);
    }
  };

  // Auto-calculate when values change
  useEffect(() => {
    if (selectedProduct && customLength > 0 && customWidth > 0 && customDepth > 0 && quantity > 0) {
      const timer = setTimeout(() => {
        calculatePricing();
      }, 500); // Debounce for 500ms

      return () => clearTimeout(timer);
    }
  }, [selectedProduct, customLength, customWidth, customDepth, pt, quantity, printedSides, lamination, calculatePricing]);

  const printedSidesOptions = [
    { label: 'Outside', value: 'outside' },
    { label: 'Inside', value: 'inside' },
    { label: 'Both Sides', value: 'bothSide' },
    { label: 'Blank (No Printing)', value: 'none' }
  ];
  const laminationOptions = [
    { label: 'Glossy', value: 'glossy' },
    { label: 'Matt', value: 'matt' },
    { label: 'Soft Touch', value: 'softTouch' },
    { label: 'None', value: 'none' }
  ];
  const ptOptions = ['14', '16', '18', 'N/A'];
  const materialOptions = [
    { label: 'Kraft', value: 'kraft' },
    { label: 'Cardboard', value: 'cardboard' },
    { label: 'Corrugated', value: 'corrugated' }
  ];

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

  // Helper functions for custom dimensions

  return (
    <div className="custom-dimensions-form min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-6 py-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Product Image */}
          <div className="space-y-4">
            {/* Main Product Image */}
            <div className="bg-white rounded-lg shadow-lg p-8 relative group">
              <div className="w-full aspect-square flex items-center justify-center relative overflow-hidden">
                <CldImage 
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
                  selectedImage === 'Mailer-Box-3_oct2ws' 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleImageChange('Mailer-Box-3_oct2ws')}
              >
                    <CldImage 
                      src="Mailer-Box-3_oct2ws" 
                  alt="Mailer Box 3"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded"
                    />
                  </div>
              <div 
                className={`w-16 h-16 rounded border cursor-pointer transition-all duration-300 ${
                  selectedImage === 'Mailer-Box-2_ysut1i' 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleImageChange('Mailer-Box-2_ysut1i')}
              >
                <CldImage 
                  src="Mailer-Box-2_ysut1i" 
                  alt="Mailer Box 2"
                  width={64}
                  height={64}
                  className="w-full h-full object-cover rounded"
                />
                </div>
              <div 
                className={`w-16 h-16 rounded border cursor-pointer transition-all duration-300 ${
                  selectedImage === 'Mailer-Box_1_ujqhhx' 
                    ? 'border-blue-500 ring-2 ring-blue-200' 
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleImageChange('Mailer-Box_1_ujqhhx')}
              >
                <CldImage 
                  src="Mailer-Box_1_ujqhhx" 
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
              <h1 className="text-h2 text-[#0c6b76] mb-4" id="subcategories-heading">
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

            {/* Material, PT, Printed Sides, Lamination - Row Layout */}
            <div className="grid grid-cols-2 gap-4">
              {/* Material */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-[#0c6b76]">Material Type</label>
                  <Info className="w-3 h-3 text-[#0ca6c2]" />
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('material')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                  >
                    <span className="text-sm text-gray-900">{materialOptions.find(m => m.value === material)?.label || 'Select'}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                  </button>
                  {showDropdowns.material && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {materialOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setMaterial(option.value);
                            toggleDropdown('material');
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* PT (Paper Thickness) */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-[#0c6b76]">PT (Paper Thickness)</label>
                  <Info className="w-3 h-3 text-[#0ca6c2]" />
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('pt')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                  >
                    <span className="text-sm text-gray-900">{pt}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                  </button>
                  {showDropdowns.pt && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {ptOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() => {
                            setPT(option);
                            toggleDropdown('pt');
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
                  <label className="text-sm font-medium text-[#0c6b76]">Printed Sides</label>
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('printedSides')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                  >
                    <span className="text-sm text-gray-900">{printedSidesOptions.find(p => p.value === printedSides)?.label || 'Select'}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                  </button>
                  {showDropdowns.printedSides && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {printedSidesOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setPrintedSides(option.value);
                            toggleDropdown('printedSides');
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Lamination */}
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <label className="text-sm font-medium text-[#0c6b76]">Lamination</label>
                  <Info className="w-3 h-3 text-[#0ca6c2]" />
                </div>
                <div className="relative">
                  <button
                    onClick={() => toggleDropdown('lamination')}
                    className="w-full flex items-center justify-between px-3 py-2 border border-[#0c6b76]/30 rounded-lg bg-white hover:border-[#0ca6c2] transition-colors"
                  >
                    <span className="text-sm text-gray-900">{laminationOptions.find(l => l.value === lamination)?.label || 'Select'}</span>
                    <ChevronDown className="w-4 h-4 text-[#0ca6c2]" />
                  </button>
                  {showDropdowns.lamination && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                      {laminationOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => {
                            setLamination(option.value);
                            toggleDropdown('lamination');
                          }}
                          className="w-full text-left px-3 py-2 hover:bg-gray-50 first:rounded-t-lg last:rounded-b-lg text-sm"
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Custom Dimensions */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#0c6b76]">Dimensions (L × W × H)</label>
                <Info className="w-3 h-3 text-[#0ca6c2]" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {/* Length Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Length (inch)<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    value={customLength}
                    onChange={(e) => setCustomLength(Math.max(0.25, parseFloat(e.target.value) || 0.25))}
                    step="0.25"
                    min="0.25"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none"
                    placeholder="10"
                  />
                </div>

                {/* Width Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Width (inch)<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    value={customWidth}
                    onChange={(e) => setCustomWidth(Math.max(0.25, parseFloat(e.target.value) || 0.25))}
                    step="0.25"
                    min="0.25"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none"
                    placeholder="8"
                  />
                </div>

                {/* Height Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Height (inch)<span className="text-red-500 ml-1">*</span>
                  </label>
                  <input
                    type="number"
                    value={customDepth}
                    onChange={(e) => setCustomDepth(Math.max(0.25, parseFloat(e.target.value) || 0.25))}
                    step="0.25"
                    min="0.25"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2] focus:outline-none"
                    placeholder="3"
                  />
                </div>
              </div>
            </div>


            {/* Quantity */}
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <label className="text-sm font-medium text-[#0c6b76]">Quantity</label>
                <Info className="w-3 h-3 text-[#0ca6c2]" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
                    className="w-full px-4 py-3 border border-[#0c6b76]/30 rounded-lg focus:ring-2 focus:ring-[#0ca6c2] focus:border-[#0ca6c2]"
                    min="1"
                    placeholder="250"
                  />
                </div>
                {unitPrice > 0 && (
                  <div className="text-right">
                    <div className="text-sm font-semibold text-green-600">${unitPrice.toFixed(2)} each</div>
                    <div className="text-xs text-gray-500">
                      Total: ${subtotal.toFixed(2)}
                    </div>
                  </div>
                )}
              </div>
              <p className="text-xs text-gray-500">
                Minimum order: 1 unit • Bulk discounts available
              </p>
            </div>

            {/* Pricing Summary */}
            <div className="bg-gradient-to-br from-[#0ca6c2]/10 to-blue-50 rounded-lg p-6 border-2 border-[#0ca6c2]/30">
              {calculating ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#0ca6c2] mx-auto mb-4"></div>
                  <p className="text-gray-600">Calculating pricing...</p>
                </div>
              ) : pricingError ? (
                <div className="text-center py-8">
                  <div className="text-red-600 mb-2">⚠️ {pricingError}</div>
                  <p className="text-sm text-gray-600">Please check your inputs and try again</p>
                </div>
              ) : pricingResult ? (
                <div className="space-y-4">
                  {/* Main Price Display */}
                  <div className="text-center">
                    <div className="text-sm text-gray-600 mb-1">Price Per Unit</div>
                    <div className="text-4xl font-bold text-[#0c6b76] mb-2">
                      ${unitPrice.toFixed(2)}
                    </div>
                    <div className="text-xl text-gray-700">
                      Total: <span className="font-semibold text-green-600">${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      for {quantity} units
                    </div>
                  </div>

                  {/* View Breakdown Button */}
                  <button
                    onClick={() => setShowBreakdown(!showBreakdown)}
                    className="w-full py-2 px-4 bg-white border-2 border-[#0ca6c2] text-[#0c6b76] rounded-lg hover:bg-[#0ca6c2]/10 transition-colors font-medium"
                  >
                    {showBreakdown ? '− Hide' : '+ View'} Detailed Breakdown
                  </button>

                  {/* Detailed Breakdown */}
                  {showBreakdown && (
                    <div className="mt-4 bg-white rounded-lg p-4 max-h-96 overflow-y-auto">
                      <h4 className="font-semibold text-gray-900 mb-3">Price Breakdown:</h4>
                      <div className="space-y-2">
                        {pricingResult.breakdown?.map((section, index: number) => (
                          <div key={index} className="border-b border-gray-200 pb-2">
                            <div className="flex justify-between items-start">
                              <div className="flex-1">
                                <div className="flex items-center gap-2">
                                  <span className="w-6 h-6 bg-[#0ca6c2] text-white rounded-full flex items-center justify-center text-xs">
                                    {section.sectionNumber}
                                  </span>
                                  <span className="font-medium text-gray-900">{section.sectionName}</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 ml-8">{section.description}</p>
                                {section.formula && (
                                  <code className="text-xs text-gray-600 mt-1 ml-8 block bg-gray-50 p-1 rounded">
                                    {section.formula}
                                  </code>
                                )}
                              </div>
                              <div className="text-right ml-4">
                                <span className={`font-semibold ${section.cost > 0 ? 'text-green-600' : 'text-gray-400'}`}>
                                  ${section.cost.toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t-2 border-gray-300">
                        <div className="flex justify-between items-center text-lg font-bold">
                          <span>Total:</span>
                          <span className="text-green-600">${subtotal.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-600">
                    Select a product and enter dimensions to see pricing
                  </p>
                </div>
              )}
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
