'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, DieMakingCostFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: DieMakingCostFormula) => void;
}

export default function DieMakingCostEditor({ formula, onUpdate }: Props) {
  const [multiplier, setMultiplier] = useState(formula.dieMakingCost.multiplier);
  
  // Test values
  const [testLength, setTestLength] = useState(20.5);
  const [testWidth, setTestWidth] = useState(15);

  const handleUpdate = (newMultiplier: number) => {
    setMultiplier(newMultiplier);
    onUpdate({ multiplier: newMultiplier });
  };

  const calculateTestResult = () => {
    return testLength * testWidth * multiplier;
  };

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          Die making is a one-time cost based on the calculated dimensions (from Section 1).
          The cost is calculated as: Calculated Length × Calculated Width × Multiplier
        </p>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          Die Making Cost = Calculated Length × Calculated Width × {multiplier}
        </code>
      </div>

      {/* Input */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Multiplier
        </label>
        <input
          type="number"
          value={multiplier}
          onChange={(e) => handleUpdate(Number(e.target.value))}
          min="0"
          step="0.1"
          className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <p className="mt-1 text-sm text-gray-500">
          Default: 9
        </p>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calculated Length (inches)
            </label>
            <input
              type="number"
              value={testLength}
              onChange={(e) => setTestLength(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Calculated Width (inches)
            </label>
            <input
              type="number"
              value={testWidth}
              onChange={(e) => setTestWidth(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="bg-white rounded p-3">
          <p className="text-sm text-gray-600">Calculation:</p>
          <p className="text-sm text-gray-900 font-mono">
            {testLength} × {testWidth} × {multiplier} = ${calculateTestResult().toFixed(2)}
          </p>
          <p className="text-xl font-bold text-purple-700 mt-2">
            Result: ${calculateTestResult().toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
}

