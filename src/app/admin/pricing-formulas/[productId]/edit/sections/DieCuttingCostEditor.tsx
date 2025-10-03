'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, DieCuttingCostFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: DieCuttingCostFormula) => void;
}

export default function DieCuttingCostEditor({ formula, onUpdate }: Props) {
  const [costPer1000, setCostPer1000] = useState(formula.dieCuttingCost.costPer1000);
  const [testUnits, setTestUnits] = useState(2500);

  const handleUpdate = (newCost: number) => {
    setCostPer1000(newCost);
    onUpdate({ costPer1000: newCost });
  };

  const calculateTestResult = () => {
    const multiplier = Math.ceil(testUnits / 1000);
    return costPer1000 * multiplier;
  };

  const getMultiplier = () => Math.ceil(testUnits / 1000);

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm mb-2">
          Die cutting cost is calculated per 1000 units. The multiplier increases with quantity:
        </p>
        <ul className="text-blue-800 text-sm space-y-1 ml-4 list-disc">
          <li>1-1000 units = 1x multiplier</li>
          <li>1001-2000 units = 2x multiplier</li>
          <li>2001-3000 units = 3x multiplier</li>
          <li>And so on...</li>
        </ul>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          Die Cutting Cost = ${costPer1000} × ceil(Required Units / 1000)
        </code>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Cost Per 1000 Units ($)
        </label>
        <input
          type="number"
          value={costPer1000}
          onChange={(e) => handleUpdate(Number(e.target.value))}
          min="0"
          step="100"
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="mt-1 text-sm text-gray-500">
          Default: 1000
        </p>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Required Units
          </label>
          <input
            type="number"
            value={testUnits}
            onChange={(e) => setTestUnits(Number(e.target.value))}
            min="1"
            className="w-full max-w-xs px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
        <div className="bg-white rounded p-3">
          <p className="text-sm text-gray-600">Calculation:</p>
          <p className="text-sm text-gray-900 font-mono">
            Multiplier = ceil({testUnits} / 1000) = {getMultiplier()}x
          </p>
          <p className="text-sm text-gray-900 font-mono">
            ${costPer1000} × {getMultiplier()} = ${calculateTestResult().toFixed(2)}
          </p>
          <p className="text-xl font-bold text-purple-700 mt-2">
            Result: ${calculateTestResult().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

