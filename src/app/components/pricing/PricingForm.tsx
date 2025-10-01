'use client';

import React, { useState, useEffect } from 'react';
import { PricingFormData, PricingResult, Material, Product, Dimensions } from '@/lib/types/pricing';

interface PricingFormProps {
  onPriceCalculated?: (result: PricingResult) => void;
  initialData?: Partial<PricingFormData>;
}

const PricingForm: React.FC<PricingFormProps> = ({ onPriceCalculated, initialData }) => {
  const [formData, setFormData] = useState<PricingFormData>({
    productId: '',
    material: '',
    dimensions: {
      length: 0,
      width: 0,
      height: 0,
      unit: 'in'
    },
    quantity: 1,
    logoPlacement: [],
    printingOptions: {
      type: 'none',
      sides: 1,
      complexity: 'simple'
    },
    finishingOptions: {
      type: 'none'
    },
    deliveryLocation: '',
    rushOrder: false,
    // CSV-based pricing options
    scanningRequired: false,
    platesRequired: false,
    printingType: 'outside',
    laminationType: 'none',
    dieMakingRequired: false,
    dieCuttingRequired: false,
    pastingRequired: false,
    twoPieceBox: false,
    vendorPercentage: 0,
    shippingWeight: 0,
    ...initialData
  });

  const [products, setProducts] = useState<Product[]>([]);
  const [materials, setMaterials] = useState<Material[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pricingResult, setPricingResult] = useState<PricingResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Load initial data
  useEffect(() => {
    loadProducts();
    loadMaterials();
  }, []);

  const loadProducts = async () => {
    try {
      const response = await fetch('/api/pricing/products');
      const data = await response.json();
      if (data.success) {
        setProducts(data.data);
        if (data.data.length > 0 && !formData.productId) {
          setFormData(prev => ({ ...prev, productId: data.data[0]._id }));
        }
      }
    } catch (error) {
      console.error('Error loading products:', error);
    }
  };

  const loadMaterials = async () => {
    try {
      const response = await fetch('/api/pricing/materials');
      const data = await response.json();
      if (data.success) {
        setMaterials(data.data);
        if (data.data.length > 0 && !formData.material) {
          setFormData(prev => ({ ...prev, material: data.data[0].name }));
        }
      }
    } catch (error) {
      console.error('Error loading materials:', error);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleDimensionsChange = (field: keyof Dimensions, value: number | string) => {
    setFormData(prev => ({
      ...prev,
      dimensions: {
        ...prev.dimensions,
        [field]: value
      }
    }));
  };

  const addLogoPlacement = () => {
    setFormData(prev => ({
      ...prev,
      logoPlacement: [
        ...prev.logoPlacement,
        {
          position: 'front',
          size: 'medium',
          complexity: 'simple'
        }
      ]
    }));
  };

  const removeLogoPlacement = (index: number) => {
    setFormData(prev => ({
      ...prev,
      logoPlacement: prev.logoPlacement.filter((_, i) => i !== index)
    }));
  };

  const updateLogoPlacement = (index: number, field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      logoPlacement: prev.logoPlacement.map((placement, i) => 
        i === index ? { ...placement, [field]: value } : placement
      )
    }));
  };

  const calculatePrice = async () => {
    if (!formData.productId || !formData.material || !formData.dimensions.length || !formData.dimensions.width || !formData.dimensions.height) {
      setError('Please fill in all required fields');
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/pricing/calculate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setPricingResult(data.data);
        onPriceCalculated?.(data.data);
      } else {
        setError(data.error || 'Failed to calculate price');
      }
    } catch (error) {
      setError('Network error. Please try again.');
      console.error('Pricing calculation error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Get Instant Pricing</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Product Selection */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Product Details</h3>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Product Type *
            </label>
            <select
              value={formData.productId}
              onChange={(e) => handleInputChange('productId', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="">Select a product</option>
              {products.map((product) => (
                <option key={product._id} value={product._id}>
                  {product.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Material *
            </label>
            <select
              value={formData.material}
              onChange={(e) => handleInputChange('material', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="">Select material</option>
              {materials.map((material) => (
                <option key={material._id} value={material.name}>
                  {material.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quantity *
            </label>
            <input
              type="number"
              min="1"
              value={formData.quantity}
              onChange={(e) => handleInputChange('quantity', parseInt(e.target.value) || 1)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>
        </div>

        {/* Dimensions */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold text-gray-800">Dimensions</h3>
          
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Length *
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={formData.dimensions.length}
                onChange={(e) => handleDimensionsChange('length', parseFloat(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Width *
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={formData.dimensions.width}
                onChange={(e) => handleDimensionsChange('width', parseFloat(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Height *
              </label>
              <input
                type="number"
                step="0.1"
                min="0"
                value={formData.dimensions.height}
                onChange={(e) => handleDimensionsChange('height', parseFloat(e.target.value) || 0)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Unit
            </label>
            <select
              value={formData.dimensions.unit}
              onChange={(e) => handleDimensionsChange('unit', e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="in">Inches</option>
              <option value="cm">Centimeters</option>
              <option value="mm">Millimeters</option>
            </select>
          </div>
        </div>
      </div>

      {/* Customization Options */}
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Customization Options</h3>
        
        {/* Logo Placement */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Logo Placement
            </label>
            <button
              type="button"
              onClick={addLogoPlacement}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add Logo
            </button>
          </div>
          
          {formData.logoPlacement.map((placement, index) => (
            <div key={index} className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 border border-gray-200 rounded-lg">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Position
                </label>
                <select
                  value={placement.position}
                  onChange={(e) => updateLogoPlacement(index, 'position', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="front">Front</option>
                  <option value="back">Back</option>
                  <option value="side">Side</option>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                  <option value="all_sides">All Sides</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Size
                </label>
                <select
                  value={placement.size}
                  onChange={(e) => updateLogoPlacement(index, 'size', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="small">Small</option>
                  <option value="medium">Medium</option>
                  <option value="large">Large</option>
                  <option value="custom">Custom</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Complexity
                </label>
                <select
                  value={placement.complexity}
                  onChange={(e) => updateLogoPlacement(index, 'complexity', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="simple">Simple</option>
                  <option value="medium">Medium</option>
                  <option value="complex">Complex</option>
                </select>
              </div>
              
              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => removeLogoPlacement(index)}
                  className="w-full px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Printing Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Printing Type
            </label>
            <select
              value={formData.printingOptions.type}
              onChange={(e) => handleInputChange('printingOptions', { ...formData.printingOptions, type: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="none">No Printing</option>
              <option value="single_color">Single Color</option>
              <option value="multi_color">Multi Color</option>
              <option value="full_color">Full Color</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of Sides
            </label>
            <input
              type="number"
              min="1"
              max="6"
              value={formData.printingOptions.sides}
              onChange={(e) => handleInputChange('printingOptions', { ...formData.printingOptions, sides: parseInt(e.target.value) || 1 })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Complexity
            </label>
            <select
              value={formData.printingOptions.complexity}
              onChange={(e) => handleInputChange('printingOptions', { ...formData.printingOptions, complexity: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="simple">Simple</option>
              <option value="medium">Medium</option>
              <option value="complex">Complex</option>
            </select>
          </div>
        </div>

        {/* Finishing Options */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Finishing Type
            </label>
            <select
              value={formData.finishingOptions.type}
              onChange={(e) => handleInputChange('finishingOptions', { ...formData.finishingOptions, type: e.target.value })}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            >
              <option value="none">No Finishing</option>
              <option value="matte">Matte</option>
              <option value="glossy">Glossy</option>
              <option value="satin">Satin</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Delivery Location
            </label>
            <input
              type="text"
              value={formData.deliveryLocation}
              onChange={(e) => handleInputChange('deliveryLocation', e.target.value)}
              placeholder="Enter city, state"
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
            />
          </div>
        </div>

        {/* Rush Order */}
        <div className="flex items-center space-x-3">
          <input
            type="checkbox"
            id="rushOrder"
            checked={formData.rushOrder}
            onChange={(e) => handleInputChange('rushOrder', e.target.checked)}
            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
          />
          <label htmlFor="rushOrder" className="text-sm font-medium text-gray-700">
            Rush Order (3-5 business days)
          </label>
        </div>
      </div>

      {/* CSV Production Options */}
      <div className="mt-8 space-y-6">
        <h3 className="text-xl font-semibold text-gray-800">Production Options</h3>
        
        {/* One-time Costs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="scanningRequired"
              checked={formData.scanningRequired}
              onChange={(e) => handleInputChange('scanningRequired', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="scanningRequired" className="text-sm font-medium text-gray-700">
              Scanning Required ($200 one-time)
            </label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="platesRequired"
              checked={formData.platesRequired}
              onChange={(e) => handleInputChange('platesRequired', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="platesRequired" className="text-sm font-medium text-gray-700">
              Plates Required ($1,200 one-time)
            </label>
          </div>
        </div>

        {/* Printing Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Printing Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="printingType"
                value="outside"
                checked={formData.printingType === 'outside'}
                onChange={(e) => handleInputChange('printingType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Outside</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="printingType"
                value="inside"
                checked={formData.printingType === 'inside'}
                onChange={(e) => handleInputChange('printingType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Inside</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="printingType"
                value="bothside"
                checked={formData.printingType === 'bothside'}
                onChange={(e) => handleInputChange('printingType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Both Sides</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="printingType"
                value="blank"
                checked={formData.printingType === 'blank'}
                onChange={(e) => handleInputChange('printingType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Blank</span>
            </label>
          </div>
        </div>

        {/* Lamination Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Lamination Type
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="laminationType"
                value="none"
                checked={formData.laminationType === 'none'}
                onChange={(e) => handleInputChange('laminationType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">None</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="laminationType"
                value="glossy"
                checked={formData.laminationType === 'glossy'}
                onChange={(e) => handleInputChange('laminationType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Glossy</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="laminationType"
                value="matte"
                checked={formData.laminationType === 'matte'}
                onChange={(e) => handleInputChange('laminationType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Matte</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="laminationType"
                value="softtouch"
                checked={formData.laminationType === 'softtouch'}
                onChange={(e) => handleInputChange('laminationType', e.target.value)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="ml-2 text-sm text-gray-700">Soft Touch</span>
            </label>
          </div>
        </div>

        {/* Production Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="dieMakingRequired"
              checked={formData.dieMakingRequired}
              onChange={(e) => handleInputChange('dieMakingRequired', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="dieMakingRequired" className="text-sm font-medium text-gray-700">
              Die Making Required ($3,500 one-time)
            </label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="dieCuttingRequired"
              checked={formData.dieCuttingRequired}
              onChange={(e) => handleInputChange('dieCuttingRequired', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="dieCuttingRequired" className="text-sm font-medium text-gray-700">
              Die Cutting Required ($8,000 per 1k units)
            </label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="pastingRequired"
              checked={formData.pastingRequired}
              onChange={(e) => handleInputChange('pastingRequired', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="pastingRequired" className="text-sm font-medium text-gray-700">
              Pasting Required ($10,000 per 1k units)
            </label>
          </div>
          
          <div className="flex items-center space-x-3">
            <input
              type="checkbox"
              id="twoPieceBox"
              checked={formData.twoPieceBox}
              onChange={(e) => handleInputChange('twoPieceBox', e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor="twoPieceBox" className="text-sm font-medium text-gray-700">
              Two Piece Box (2x multiplier)
            </label>
          </div>
        </div>

        {/* Vendor and Shipping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vendor Percentage (%)
            </label>
            <input
              type="number"
              min="0"
              max="100"
              step="0.1"
              value={formData.vendorPercentage}
              onChange={(e) => handleInputChange('vendorPercentage', parseFloat(e.target.value) || 0)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              placeholder="e.g., 25"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Shipping Weight (kg)
            </label>
            <input
              type="number"
              min="0"
              step="0.1"
              value={formData.shippingWeight}
              onChange={(e) => handleInputChange('shippingWeight', parseFloat(e.target.value) || 0)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
              placeholder="e.g., 0.5"
            />
          </div>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="mt-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {error}
        </div>
      )}

      {/* Calculate Button */}
      <div className="mt-8">
        <button
          onClick={calculatePrice}
          disabled={isLoading}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isLoading ? 'Calculating...' : 'Calculate Price'}
        </button>
      </div>

      {/* Pricing Result */}
      {pricingResult && (
        <div className="mt-8 p-6 bg-gray-50 rounded-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Pricing Breakdown</h3>
          
          <div className="space-y-2 mb-6">
            {pricingResult.breakdown.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-200">
                <span className="text-gray-700">{item.description}</span>
                <span className="font-semibold">${item.cost.toFixed(2)}</span>
              </div>
            ))}
          </div>
          
          <div className="border-t border-gray-300 pt-4">
            <div className="flex justify-between items-center text-lg font-semibold">
              <span>Total Price:</span>
              <span className="text-2xl text-blue-600">${pricingResult.total.toFixed(2)}</span>
            </div>
            <p className="text-sm text-gray-600 mt-2">
              Estimated Delivery: {new Date(pricingResult.estimatedDelivery).toLocaleDateString()}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingForm;
