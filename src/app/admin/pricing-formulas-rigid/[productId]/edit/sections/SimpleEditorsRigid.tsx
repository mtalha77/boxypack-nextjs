'use client';

import React, { useState } from 'react';
import { 
  RigidProductPricingFormula, 
  RigidScanningCostFormula,
  RigidVendorPercentageFormula,
  RigidMarginCostFormula
} from '@/lib/types/pricing-formulas-rigid';

// SCANNING COST EDITOR
interface ScanningProps {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidScanningCostFormula) => void;
}

export function RigidScanningCostEditor({ formula, onUpdate }: ScanningProps) {
  const [cost, setCost] = useState(formula.scanningCost.cost);

  const handleUpdate = (value: number) => {
    setCost(value);
    onUpdate({ cost: value });
  };

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Scanning Cost:</h4>
        <p className="text-blue-800 text-sm">
          One-time scanning/digitization setup cost (fixed).
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Fixed Cost</h4>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cost (PKR)
          </label>
          <input
            type="number"
            value={cost}
            onChange={(e) => handleUpdate(Number(e.target.value))}
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 200 PKR</p>
        </div>
      </div>
    </div>
  );
}

// VENDOR PERCENTAGE EDITOR
interface VendorProps {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidVendorPercentageFormula) => void;
}

export function RigidVendorPercentageEditor({ formula, onUpdate }: VendorProps) {
  const [percentage, setPercentage] = useState(formula.vendorPercentage.percentage);
  const [testCost, setTestCost] = useState(100000);

  const handleUpdate = (value: number) => {
    setPercentage(value);
    onUpdate({ percentage: value });
  };

  const calculateTest = () => {
    return testCost * (percentage / 100);
  };

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Vendor Percentage:</h4>
        <p className="text-blue-800 text-sm">
          Vendor markup applied to the sum of Sections 1-5 (Material, Scanning, Printing, Lamination, Making).
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Percentage</h4>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Vendor Percentage (%)
          </label>
          <input
            type="number"
            value={percentage}
            onChange={(e) => handleUpdate(Number(e.target.value))}
            min="0"
            max="100"
            step="0.1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 25%</p>
        </div>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sum of Sections 1-5 (PKR)
          </label>
          <input
            type="number"
            value={testCost}
            onChange={(e) => setTestCost(Number(e.target.value))}
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="bg-white rounded p-3 text-sm">
          <p className="text-xl font-bold text-purple-700">
            Vendor Markup: {calculateTest().toFixed(2)} PKR ({percentage}%)
          </p>
        </div>
      </div>
    </div>
  );
}

// MARGIN COST EDITOR
interface MarginProps {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidMarginCostFormula) => void;
}

export function RigidMarginCostEditor({ formula, onUpdate }: MarginProps) {
  const [percentage, setPercentage] = useState(formula.marginCost.percentage);
  const [testCost, setTestCost] = useState(150000);

  const handleUpdate = (value: number) => {
    setPercentage(value);
    onUpdate({ percentage: value });
  };

  const calculateTest = () => {
    return testCost * (percentage / 100);
  };

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Margin Cost:</h4>
        <p className="text-blue-800 text-sm">
          Your company&apos;s profit margin applied to the sum of Sections 1-7 (all costs including vendor percentage and shipping).
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Percentage</h4>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Margin Percentage (%)
          </label>
          <input
            type="number"
            value={percentage}
            onChange={(e) => handleUpdate(Number(e.target.value))}
            min="0"
            max="200"
            step="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 100% (doubles the cost)</p>
        </div>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sum of Sections 1-7 (PKR)
          </label>
          <input
            type="number"
            value={testCost}
            onChange={(e) => setTestCost(Number(e.target.value))}
            min="0"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="bg-white rounded p-3 text-sm">
          <p><strong>Margin Added:</strong> {calculateTest().toFixed(2)} PKR ({percentage}%)</p>
          <p className="text-xl font-bold text-purple-700 mt-2 pt-2 border-t">
            Final Total: {(testCost + calculateTest()).toFixed(2)} PKR
          </p>
        </div>
      </div>
    </div>
  );
}

