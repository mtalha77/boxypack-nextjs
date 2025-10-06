'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, BothSidePrintingSurchargeFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: BothSidePrintingSurchargeFormula) => void;
}

export default function BothSideSurchargeEditor({ formula, onUpdate }: Props) {
  const [percentage, setPercentage] = useState(formula.bothSidePrintingSurcharge.percentage);
  const [testSum, setTestSum] = useState(15000);

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
          This surcharge applies ONLY when the user selects &quot;Both Side&quot; printing.
          It adds a percentage of the sum of all previous sections (1-9) to account for
          the additional complexity and materials required for both-side printing.
        </p>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          Surcharge = Sum(Sections 1-9) × ({percentage}%)
        </code>
        <p className="text-xs text-gray-600 mt-2">
          Note: This only applies when user selects &quot;Both Side&quot; printing option
        </p>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Surcharge Percentage (%)
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
        <p className="mt-1 text-sm text-gray-500">
          Default: 10% - Recommended range: 5-15%
        </p>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <p className="text-sm text-purple-700 mb-3">
          Scenario: User selects &quot;Both Side&quot; printing
        </p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sum of Sections 1-9 ($)
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
            Surcharge = ${testSum} × {percentage}%
          </p>
          <p className="text-sm text-gray-900 font-mono">
            = ${testSum} × {(percentage / 100).toFixed(2)} = ${calculateTestResult().toFixed(2)}
          </p>
          <p className="text-xl font-bold text-purple-700 mt-2">
            Result: ${calculateTestResult().toFixed(2)}
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> If user selects &quot;Outside&quot;, &quot;Inside&quot;, or &quot;None&quot; printing,
          this surcharge will NOT be applied and the cost will be $0.
        </p>
      </div>
    </div>
  );
}

