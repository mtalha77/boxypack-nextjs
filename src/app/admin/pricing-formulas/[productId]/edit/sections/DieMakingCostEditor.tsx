'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, DieMakingCostFormula } from '@/lib/types/pricing-formulas';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: DieMakingCostFormula) => void;
}

export default function DieMakingCostEditor({ formula, onUpdate }: Props) {
  const [calculationType, setCalculationType] = useState(formula.dieMakingCost.calculationType || 'calculated');
  const [multiplier, setMultiplier] = useState(formula.dieMakingCost.multiplier || 9);
  const [fixedCost, setFixedCost] = useState(formula.dieMakingCost.fixedCost || 1000);
  
  // Test values (same as material cost section)
  const [testL, setTestL] = useState(10);
  const [testW, setTestW] = useState(8);
  const [testH, setTestH] = useState(3);
  const [testPT, setTestPT] = useState('14');

  const handleUpdate = (updates: Partial<DieMakingCostFormula>) => {
    const newData = { calculationType, multiplier, fixedCost, ...updates };
    setCalculationType(newData.calculationType);
    setMultiplier(newData.multiplier);
    setFixedCost(newData.fixedCost);
    onUpdate(newData);
  };

  // Calculate dimensions using the same logic as material cost section
  const calculateDimensions = () => {
    const { lengthFormula, widthFormula } = formula.materialCost;
    
    const calcLength = (testL * lengthFormula.lengthMultiplier) + 
                      (testW * lengthFormula.widthMultiplier) + 
                      (testH * lengthFormula.heightMultiplier) + 
                      lengthFormula.additionalInches;
    
    const calcWidth = (testL * widthFormula.lengthMultiplier) + 
                     (testW * widthFormula.widthMultiplier) + 
                     (testH * widthFormula.heightMultiplier) + 
                     widthFormula.additionalInches;
    
    return { calcLength, calcWidth };
  };

  const calculateTestResult = () => {
    if (calculationType === 'fixed') {
      return fixedCost || 0;
    }
    const { calcLength, calcWidth } = calculateDimensions();
    return calcLength * calcWidth * (multiplier || 0);
  };

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          Die making is a one-time cost. You can choose between two calculation methods:
        </p>
        <ul className="text-blue-800 text-sm mt-2 ml-4 list-disc space-y-1">
          <li><strong>Calculated:</strong> Based on dimensions (Length × Width × Multiplier)</li>
          <li><strong>Fixed:</strong> A fixed cost regardless of dimensions</li>
        </ul>
      </div>

      {/* Calculation Type Selection */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Calculation Method</h4>
        <div className="space-y-3">
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="calculationType"
              value="calculated"
              checked={calculationType === 'calculated'}
              onChange={(e) => handleUpdate({ calculationType: e.target.value as 'calculated' | 'fixed' })}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm font-medium text-gray-700">Calculated (Length × Width × Multiplier)</span>
          </label>
          <label className="flex items-center gap-3">
            <input
              type="radio"
              name="calculationType"
              value="fixed"
              checked={calculationType === 'fixed'}
              onChange={(e) => handleUpdate({ calculationType: e.target.value as 'calculated' | 'fixed' })}
              className="w-4 h-4 text-blue-600"
            />
            <span className="text-sm font-medium text-gray-700">Fixed Cost</span>
          </label>
        </div>
      </div>

      {/* Formula Display */}
      <div className="bg-gray-100 rounded-lg p-4">
        <h4 className="font-semibold text-gray-700 mb-2">Formula:</h4>
        <code className="text-sm text-gray-900 block">
          {calculationType === 'fixed' 
            ? `Die Making Cost = $${fixedCost || 0} (Fixed)`
            : `Die Making Cost = Calculated Length × Calculated Width × ${multiplier || 0}`
          }
        </code>
      </div>

      {/* Input Fields */}
      <div className="space-y-4">
        {calculationType === 'calculated' ? (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Multiplier
            </label>
            <input
              type="number"
              value={multiplier}
              onChange={(e) => handleUpdate({ multiplier: Number(e.target.value) })}
              min="0"
              step="0.1"
              className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-500">
              Default: 9
            </p>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Fixed Cost ($)
            </label>
            <input
              type="number"
              value={fixedCost}
              onChange={(e) => handleUpdate({ fixedCost: Number(e.target.value) })}
              min="0"
              step="0.01"
              className="w-full max-w-xs px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <p className="mt-1 text-sm text-gray-500">
              Default: $1000
            </p>
          </div>
        )}
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-4 gap-3 mb-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">L</label>
            <input type="number" value={testL} onChange={(e) => setTestL(Number(e.target.value))} step="0.1" className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">W</label>
            <input type="number" value={testW} onChange={(e) => setTestW(Number(e.target.value))} step="0.1" className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">H</label>
            <input type="number" value={testH} onChange={(e) => setTestH(Number(e.target.value))} step="0.1" className="w-full px-2 py-1 border rounded text-sm" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">PT</label>
            <select value={testPT} onChange={(e) => setTestPT(e.target.value)} className="w-full px-2 py-1 border rounded text-sm">
              <option value="14">14</option>
              <option value="16">16</option>
              <option value="18">18</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
        </div>
        <div className="bg-white rounded p-3 space-y-1 text-sm">
          {(() => {
            const { calcLength, calcWidth } = calculateDimensions();
            return (
              <>
                <p><strong>Calculated Length:</strong> {calcLength.toFixed(2)}"</p>
                <p><strong>Calculated Width:</strong> {calcWidth.toFixed(2)}"</p>
                {calculationType === 'calculated' && (
                  <p><strong>Calculation:</strong> {calcLength.toFixed(2)} × {calcWidth.toFixed(2)} × {multiplier || 0} = ${calculateTestResult().toFixed(2)}</p>
                )}
                {calculationType === 'fixed' && (
                  <p><strong>Fixed Cost:</strong> ${fixedCost || 0}</p>
                )}
                <p className="text-xl font-bold text-purple-700 mt-2">Result: ${calculateTestResult().toFixed(2)}</p>
              </>
            );
          })()}
        </div>
      </div>
    </div>
  );
}

