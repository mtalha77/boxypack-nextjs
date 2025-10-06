'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, LaminationCostFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: LaminationCostFormula) => void;
}

export default function LaminationCostEditor({ formula, onUpdate }: Props) {
  const [enabled, setEnabled] = useState(formula.laminationCost.enabled);
  const [glossy, setGlossy] = useState(formula.laminationCost.glossy);
  const [matt, setMatt] = useState(formula.laminationCost.matt);
  const [softTouch, setSoftTouch] = useState(formula.laminationCost.softTouch);
  
  // Test values
  const [testLength, setTestLength] = useState(20.5);
  const [testWidth, setTestWidth] = useState(15);
  const [testUnits, setTestUnits] = useState(250);
  const [testType, setTestType] = useState<'glossy' | 'matt' | 'softTouch'>('glossy');

  const handleUpdate = (type: 'glossy' | 'matt' | 'softTouch', divisor: number, rate: number) => {
    const updated = {enabled, glossy, matt, softTouch};
    updated[type] = { divisor, rate };
    
    setGlossy(updated.glossy);
    setMatt(updated.matt);
    setSoftTouch(updated.softTouch);
    
    onUpdate(updated);
  };

  const handleEnabledChange = (newEnabled: boolean) => {
    setEnabled(newEnabled);
    onUpdate({enabled: newEnabled, glossy, matt, softTouch});
  };

  const calculateTestResult = () => {
    if (!enabled) return 0;
    const config = testType === 'glossy' ? glossy : testType === 'matt' ? matt : softTouch;
    const singleUnitCost = (testLength * testWidth / config.divisor) * config.rate;
    return singleUnitCost * testUnits;
  };

  const getSingleUnitCost = () => {
    if (!enabled) return 0;
    const config = testType === 'glossy' ? glossy : testType === 'matt' ? matt : softTouch;
    return (testLength * testWidth / config.divisor) * config.rate;
  };

  return (
    <div className="space-y-6 text-gray-900">
      {/* Enable/Disable Toggle */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="font-semibold text-gray-900 mb-1">Enable Lamination Cost</h4>
            <p className="text-sm text-gray-600">
              Toggle to enable or disable lamination cost calculation for this product
            </p>
          </div>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={enabled}
              onChange={(e) => handleEnabledChange(e.target.checked)}
              className="w-5 h-5 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500"
            />
            <span className="text-sm font-medium text-gray-700">
              {enabled ? 'Enabled' : 'Disabled'}
            </span>
          </label>
        </div>
      </div>

      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          Lamination cost varies based on the finish type selected by the user.
          Each type has its own divisor and rate for calculating the per-unit cost.
          Formula: (Calculated Length × Calculated Width / Divisor) × Rate × Quantity
        </p>
      </div>

      {/* Glossy Lamination */}
      {enabled && (
        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Glossy Finish</h4>
          <div className="bg-gray-100 rounded p-3 mb-3">
            <code className="text-sm">
              Cost = (Length × Width / {glossy.divisor}) × {glossy.rate} × Units
            </code>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Divisor
              </label>
              <input
                type="number"
                value={glossy.divisor}
                onChange={(e) => handleUpdate('glossy', Number(e.target.value), glossy.rate)}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rate
              </label>
              <input
                type="number"
                value={glossy.rate}
                onChange={(e) => handleUpdate('glossy', glossy.divisor, Number(e.target.value))}
                min="0"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Matt Lamination */}
      {enabled && (
        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Matt Finish</h4>
          <div className="bg-gray-100 rounded p-3 mb-3">
            <code className="text-sm">
              Cost = (Length × Width / {matt.divisor}) × {matt.rate} × Units
            </code>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Divisor
              </label>
              <input
                type="number"
                value={matt.divisor}
                onChange={(e) => handleUpdate('matt', Number(e.target.value), matt.rate)}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rate
              </label>
              <input
                type="number"
                value={matt.rate}
                onChange={(e) => handleUpdate('matt', matt.divisor, Number(e.target.value))}
                min="0"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Soft Touch Lamination */}
      {enabled && (
        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Soft Touch Finish (Premium)</h4>
          <div className="bg-gray-100 rounded p-3 mb-3">
            <code className="text-sm">
              Cost = (Length × Width / {softTouch.divisor}) × {softTouch.rate} × Units
            </code>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Divisor
              </label>
              <input
                type="number"
                value={softTouch.divisor}
                onChange={(e) => handleUpdate('softTouch', Number(e.target.value), softTouch.rate)}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Rate (Higher for premium)
              </label>
              <input
                type="number"
                value={softTouch.rate}
                onChange={(e) => handleUpdate('softTouch', softTouch.divisor, Number(e.target.value))}
                min="0"
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      )}

      {/* Test Calculator */}
      {enabled && (
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
          <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
          <div className="grid grid-cols-2 gap-4 mb-3">
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
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Required Units
              </label>
              <input
                type="number"
                value={testUnits}
                onChange={(e) => setTestUnits(Number(e.target.value))}
                min="1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Lamination Type
              </label>
              <select
                value={testType}
                onChange={(e) => setTestType(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              >
                <option value="glossy">Glossy</option>
                <option value="matt">Matt</option>
                <option value="softTouch">Soft Touch</option>
              </select>
            </div>
          </div>
          <div className="bg-white rounded p-3">
            <p className="text-sm text-gray-600">Calculation:</p>
            <p className="text-sm text-gray-900 font-mono">
              Single Unit Cost = ({testLength} × {testWidth} / {
                testType === 'glossy' ? glossy.divisor : 
                testType === 'matt' ? matt.divisor : 
                softTouch.divisor
              }) × {
                testType === 'glossy' ? glossy.rate : 
                testType === 'matt' ? matt.rate : 
                softTouch.rate
              }
            </p>
            <p className="text-sm text-gray-900 font-mono">
              = ${getSingleUnitCost().toFixed(4)} per unit
            </p>
            <p className="text-sm text-gray-900 font-mono">
              Total = ${getSingleUnitCost().toFixed(4)} × {testUnits} = ${calculateTestResult().toFixed(2)}
            </p>
            <p className="text-xl font-bold text-purple-700 mt-2">
              Result: ${calculateTestResult().toFixed(2)}
            </p>
          </div>
        </div>
      )}

      {/* Info Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Note:</strong> When lamination is disabled, the entire lamination section is hidden and no cost will be charged.
          If enabled and user selects "None" for lamination, the cost will be $0.
          Soft touch typically costs 5-6x more than glossy/matt finishes.
        </p>
      </div>
    </div>
  );
}

