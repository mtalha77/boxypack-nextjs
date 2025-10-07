'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, CostMarginFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: CostMarginFormula) => void;
}

export default function CostMarginEditor({ formula, onUpdate }: Props) {
  const [percentage, setPercentage] = useState(formula.costMargin?.percentage ?? 50);
  const [testSum, setTestSum] = useState(20000);

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
          Cost Margin Percentage is the final profit margin added on top of all previous costs (Sections 1-12).
          This is your ultimate profit percentage that accounts for overhead, business expenses, and desired profitability.
          The margin is calculated as a percentage of the total cost from all previous sections.
        </p>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          Cost Margin = Sum(Sections 1-12) × ({percentage}%)
        </code>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cost Margin Percentage (%)
        </label>
        <div className="flex items-center gap-2 max-w-xs">
          <input
            type="number"
            value={percentage}
            onChange={(e) => handleUpdate(Number(e.target.value))}
            min="0"
            max="200"
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
            {[30, 40, 50, 60, 75, 100].map(val => (
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
            Sum of Sections 1-12 ($)
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
            Cost Margin = ${testSum} × {percentage}%
          </p>
          <p className="text-sm text-gray-900 font-mono">
            = ${testSum} × {(percentage / 100).toFixed(2)} = ${calculateTestResult().toFixed(2)}
          </p>
          <p className="text-xl font-bold text-purple-700 mt-2">
            Result: ${calculateTestResult().toFixed(2)}
          </p>
          <p className="text-sm text-purple-600 mt-2">
            Final Total Price: ${(testSum + calculateTestResult()).toFixed(2)}
          </p>
        </div>
      </div>

      {/* Recommendation Box */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-semibold text-green-900 mb-2">Recommendations:</h4>
        <ul className="text-sm text-green-800 space-y-1">
          <li>• <strong>Standard products:</strong> 30-50% (typical business margin)</li>
          <li>• <strong>Premium products:</strong> 50-75% (higher value positioning)</li>
          <li>• <strong>Custom/Specialty products:</strong> 75-100%+ (premium pricing)</li>
          <li>• <strong>High-volume orders:</strong> 30-40% (competitive pricing)</li>
        </ul>
        <p className="text-sm text-green-800 mt-3">
          <strong>Default:</strong> 50% provides a healthy margin while remaining competitive.
        </p>
      </div>

      {/* Info Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-900 mb-2">Important Notes:</h4>
        <ul className="text-sm text-yellow-800 space-y-1">
          <li>• This margin is applied AFTER all costs including vendor percentage and shipping</li>
          <li>• Higher margins may affect competitiveness - balance profit with market rates</li>
          <li>• Consider adjusting based on product complexity and customer base</li>
          <li>• Review regularly to ensure profitability vs. market positioning</li>
        </ul>
      </div>
    </div>
  );
}

