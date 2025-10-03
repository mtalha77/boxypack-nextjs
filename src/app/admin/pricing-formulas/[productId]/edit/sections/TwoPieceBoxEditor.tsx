'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, TwoPieceBoxFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: TwoPieceBoxFormula) => void;
}

export default function TwoPieceBoxEditor({ formula, onUpdate }: Props) {
  const [enabled, setEnabled] = useState(formula.twoPieceBox.enabled);
  const [multiplier, setMultiplier] = useState(formula.twoPieceBox.multiplier);
  const [testSum, setTestSum] = useState(10000);

  const handleUpdate = (newEnabled: boolean, newMultiplier: number) => {
    setEnabled(newEnabled);
    setMultiplier(newMultiplier);
    onUpdate({ enabled: newEnabled, multiplier: newMultiplier });
  };

  const calculateTestResult = () => {
    return enabled ? testSum * (multiplier - 1) : 0;
  };

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          When enabled, this multiplies the sum of all previous sections (1-8) by the multiplier.
          This is used for two-piece box products that require double the materials and labor.
          The additional cost is calculated as: Sum × (Multiplier - 1)
        </p>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          {enabled 
            ? `Additional Cost = Sum(Sections 1-8) × (${multiplier} - 1)`
            : 'Additional Cost = $0 (Disabled)'}
        </code>
      </div>

      {/* Inputs */}
      <div className="space-y-4">
        {/* Enable/Disable */}
        <div className="flex items-center gap-4 p-4 bg-white border border-gray-300 rounded-lg">
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => handleUpdate(e.target.checked, multiplier)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
          <div>
            <p className="font-medium text-gray-900">
              {enabled ? 'Enabled' : 'Disabled'}
            </p>
            <p className="text-sm text-gray-500">
              Turn on for two-piece box products
            </p>
          </div>
        </div>

        {/* Multiplier */}
        {enabled && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Multiplier
            </label>
            <input
              type="number"
              value={multiplier}
              onChange={(e) => handleUpdate(enabled, Number(e.target.value))}
              min="1"
              step="0.1"
              className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-500">
              Default: 2 (doubles the cost)
            </p>
          </div>
        )}
      </div>

      {/* Test Calculator */}
      {enabled && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sum of Sections 1-8 ($)
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
              Additional Cost = ${testSum} × ({multiplier} - 1)
            </p>
            <p className="text-sm text-gray-900 font-mono">
              = ${testSum} × {multiplier - 1} = ${calculateTestResult().toFixed(2)}
            </p>
            <p className="text-xl font-bold text-purple-700 mt-2">
              Result: ${calculateTestResult().toFixed(2)}
            </p>
            <p className="text-sm text-purple-600 mt-1">
              Total with multiplier: ${(testSum * multiplier).toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {!enabled && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-center">
          <p className="text-gray-500">
            No additional cost when disabled
          </p>
        </div>
      )}
    </div>
  );
}

