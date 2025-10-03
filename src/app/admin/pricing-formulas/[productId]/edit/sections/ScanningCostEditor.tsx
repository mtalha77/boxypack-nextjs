'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, ScanningCostFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: ScanningCostFormula) => void;
}

export default function ScanningCostEditor({ formula, onUpdate }: Props) {
  const [cost, setCost] = useState(formula.scanningCost.cost);

  const handleUpdate = (newCost: number) => {
    setCost(newCost);
    onUpdate({ cost: newCost });
  };

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          This is a fixed, one-time scanning setup cost that applies to all orders. 
          It covers the initial design scanning and setup process.
        </p>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          Scanning Cost = ${cost} (Fixed Cost)
        </code>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Scanning Cost ($)
        </label>
        <input
          type="number"
          value={cost}
          onChange={(e) => handleUpdate(Number(e.target.value))}
          min="0"
          step="10"
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="mt-1 text-sm text-gray-500">
          One-time cost added to all orders
        </p>
      </div>

      {/* Preview */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4">
        <h4 className="font-semibold text-green-900 mb-2">Result:</h4>
        <p className="text-2xl font-bold text-green-700">
          ${cost.toFixed(2)}
        </p>
        <p className="text-sm text-green-600 mt-1">
          This cost will be added to every quote
        </p>
      </div>
    </div>
  );
}

