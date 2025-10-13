'use client';

import React, { useState } from 'react';
import { RigidProductPricingFormula, RigidLaminationCostFormula } from '@/lib/types/pricing-formulas-rigid';

interface Props {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidLaminationCostFormula) => void;
}

export default function RigidLaminationCostEditor({ formula, onUpdate }: Props) {
  const [config, setConfig] = useState(formula.laminationCost);
  
  // Test values
  const [testLength, setTestLength] = useState(12);
  const [testWidth, setTestWidth] = useState(10);
  const [testUnits, setTestUnits] = useState(500);
  const [testType, setTestType] = useState<'glossy' | 'softTouch'>('glossy');

  const handleUpdate = (newConfig: RigidLaminationCostFormula) => {
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const calculateTest = () => {
    const rate = testType === 'glossy' ? config.glossy.rate : config.softTouch.rate;
    const costPerUnit = (testLength * testWidth / config.divisor) * rate * config.sheetsMultiplier;
    const finalCost = costPerUnit * testUnits;
    return { costPerUnit, finalCost };
  };

  const testResult = calculateTest();

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Rigid Lamination Cost:</h4>
        <p className="text-blue-800 text-sm">
          Based on largest dimensions from Paper 1 or Paper 2, multiplied by {config.sheetsMultiplier} sheets.
        </p>
        <p className="text-blue-800 text-sm mt-1">
          Formula: (Length × Width / {config.divisor}) × Rate × Units × {config.sheetsMultiplier}
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">Enable Lamination</h4>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={config.enabled}
              onChange={(e) => handleUpdate({ ...config, enabled: e.target.checked })}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
          </label>
        </div>
      </div>

      {config.enabled && (
        <>
          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Configuration</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Divisor
                </label>
                <input
                  type="number"
                  value={config.divisor}
                  onChange={(e) => handleUpdate({ ...config, divisor: Number(e.target.value) })}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Default: 144</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Sheets Multiplier
                </label>
                <input
                  type="number"
                  value={config.sheetsMultiplier}
                  onChange={(e) => handleUpdate({ ...config, sheetsMultiplier: Number(e.target.value) })}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Default: 4</p>
              </div>
            </div>
          </div>

          <div className="bg-white border border-gray-300 rounded-lg p-4">
            <h4 className="font-semibold text-gray-900 mb-3">Lamination Rates (PKR per sq ft)</h4>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Glossy Rate
                </label>
                <input
                  type="number"
                  value={config.glossy.rate}
                  onChange={(e) => handleUpdate({ 
                    ...config, 
                    glossy: { rate: Number(e.target.value) }
                  })}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Default: 3.5 PKR/sq ft</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Soft Touch Rate
                </label>
                <input
                  type="number"
                  value={config.softTouch.rate}
                  onChange={(e) => handleUpdate({ 
                    ...config, 
                    softTouch: { rate: Number(e.target.value) }
                  })}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
                <p className="text-xs text-gray-500 mt-1">Default: 20 PKR/sq ft</p>
              </div>
            </div>
          </div>

          {/* Test Calculator */}
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
            <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
            <div className="grid grid-cols-4 gap-3 mb-3">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Length (from Paper)</label>
                <input
                  type="number"
                  value={testLength}
                  onChange={(e) => setTestLength(Number(e.target.value))}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Width (from Paper)</label>
                <input
                  type="number"
                  value={testWidth}
                  onChange={(e) => setTestWidth(Number(e.target.value))}
                  step="0.1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
                <input
                  type="number"
                  value={testUnits}
                  onChange={(e) => setTestUnits(Number(e.target.value))}
                  min="1"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                <select
                  value={testType}
                  onChange={(e) => setTestType(e.target.value as 'glossy' | 'softTouch')}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                >
                  <option value="glossy">Glossy</option>
                  <option value="softTouch">Soft Touch</option>
                </select>
              </div>
            </div>
            <div className="bg-white rounded p-3 text-sm">
              <p><strong>Cost Per Unit:</strong> {testResult.costPerUnit.toFixed(4)} PKR</p>
              <p className="text-xl font-bold text-purple-700 mt-2">
                Total Lamination Cost: {testResult.finalCost.toFixed(2)} PKR
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

