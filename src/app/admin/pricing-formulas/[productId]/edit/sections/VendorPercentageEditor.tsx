'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, VendorPercentageFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: VendorPercentageFormula) => void;
}

export default function VendorPercentageEditor({ formula, onUpdate }: Props) {
  const [percentage, setPercentage] = useState(formula.vendorPercentage.percentage);
  const [testSum, setTestSum] = useState(18000);

  const handleUpdate = (newPercentage: number) => {
    setPercentage(newPercentage);
    onUpdate({ percentage: newPercentage });
  };

  const calculateTestResult = () => {
    return testSum * (percentage / 100);
  };

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          Vendor percentage is your profit markup applied to the sum of all previous costs (Sections 1-10).
          This is your margin on top of all production and material costs.
          Different products can have different vendor percentages based on complexity and market positioning.
        </p>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          Vendor Cost = Sum(Sections 1-10) × ({percentage}%)
        </code>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Vendor Percentage (%)
        </label>
        <div className="flex items-center gap-2 max-w-xs">
          <input
            type="number"
            value={percentage}
            onChange={(e) => handleUpdate(Number(e.target.value))}
            min="0"
            max="100"
            step="1"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <span className="text-gray-700 font-medium">%</span>
        </div>
        <div className="mt-2 space-y-1">
          <p className="text-sm text-gray-500">
            Common values:
          </p>
          <div className="flex gap-2">
            {[15, 20, 25, 30, 40, 50].map(val => (
              <button
                key={val}
                onClick={() => handleUpdate(val)}
                className={`px-3 py-1 text-xs rounded ${
                  percentage === val
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {val}%
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sum of Sections 1-10 ($)
          </label>
          <input
            type="number"
            value={testSum}
            onChange={(e) => setTestSum(Number(e.target.value))}
            min="0"
            className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="bg-white rounded p-3">
          <p className="text-sm text-gray-600">Calculation:</p>
          <p className="text-sm text-gray-900 font-mono">
            Vendor Cost = ${testSum} × {percentage}%
          </p>
          <p className="text-sm text-gray-900 font-mono">
            = ${testSum} × {(percentage / 100).toFixed(2)} = ${calculateTestResult().toFixed(2)}
          </p>
          <p className="text-xl font-bold text-purple-700 mt-2">
            Result: ${calculateTestResult().toFixed(2)}
          </p>
          <p className="text-sm text-purple-600 mt-2">
            Total with vendor markup: ${(testSum + calculateTestResult()).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Recommendation Box */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-semibold text-green-900 mb-2">Recommendations:</h4>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• <strong>Kraft products:</strong> 20-30% (standard market rate)</li>
          <li>• <strong>Cardboard products:</strong> 30-50% (premium positioning)</li>
          <li>• <strong>Corrugated products:</strong> 40-60% (specialty items)</li>
          <li>• <strong>Custom/Complex designs:</strong> 50%+ (high value added)</li>
        </ul>
      </div>
    </div>
  );
}

