'use client';

import React, { useState } from 'react';
import { RigidProductPricingFormula, RigidPlatesCostFormula, RigidPlatesCostRange } from '@/lib/types/pricing-formulas-rigid';

interface Props {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidPlatesCostFormula) => void;
}

// Default plates cost in case it's missing
const DEFAULT_PLATES_COST = {
  ranges: [
    { name: "0-18", dimensionMin: 0, dimensionMax: 18, cost: 2400 },
    { name: "18.1-25", dimensionMin: 18.1, dimensionMax: 25, cost: 4800 },
    { name: "25.1-30", dimensionMin: 25.1, dimensionMax: 30, cost: 10000 },
    { name: "30.1-40", dimensionMin: 30.1, dimensionMax: 40, cost: 16000 }
  ],
  multiplier: 2
};

export default function RigidPlatesCostEditor({ formula, onUpdate }: Props) {
  const [config, setConfig] = useState(formula.platesCost || DEFAULT_PLATES_COST);
  const [testLength, setTestLength] = useState(10);
  const [testWidth, setTestWidth] = useState(8);
  const [testHeight, setTestHeight] = useState(3);

  // Calculate Paper 1 and Paper 2 dimensions for testing
  const calculatePaperDimensions = () => {
    const { paper1, paper2 } = formula.materialCost;
    
    // Paper 1 dimensions
    const p1Length = testLength * paper1.lengthFormula.lengthMultiplier +
                     testWidth * paper1.lengthFormula.widthMultiplier +
                     testHeight * paper1.lengthFormula.heightMultiplier +
                     paper1.lengthFormula.additionalInches;
    
    const p1Width = testLength * paper1.widthFormula.lengthMultiplier +
                    testWidth * paper1.widthFormula.widthMultiplier +
                    testHeight * paper1.widthFormula.heightMultiplier +
                    paper1.widthFormula.additionalInches;
    
    // Paper 2 dimensions
    const p2Length = testLength * paper2.lengthFormula.lengthMultiplier +
                     testWidth * paper2.lengthFormula.widthMultiplier +
                     testHeight * paper2.lengthFormula.heightMultiplier +
                     paper2.lengthFormula.additionalInches;
    
    const p2Width = testLength * paper2.widthFormula.lengthMultiplier +
                    testWidth * paper2.widthFormula.widthMultiplier +
                    testHeight * paper2.widthFormula.heightMultiplier +
                    paper2.widthFormula.additionalInches;
    
    return {
      paper1: { length: p1Length, width: p1Width },
      paper2: { length: p2Length, width: p2Width }
    };
  };

  const handleUpdate = (newConfig: RigidPlatesCostFormula) => {
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const updateRange = (index: number, field: keyof RigidPlatesCostRange, value: number | string) => {
    const updatedRanges = [...config.ranges];
    updatedRanges[index] = { ...updatedRanges[index], [field]: value };
    handleUpdate({ ...config, ranges: updatedRanges });
  };

  const addRange = () => {
    const lastRange = config.ranges[config.ranges.length - 1];
    const newRange: RigidPlatesCostRange = {
      name: `${lastRange.dimensionMax + 0.1}-${lastRange.dimensionMax + 10}`,
      dimensionMin: lastRange.dimensionMax + 0.1,
      dimensionMax: lastRange.dimensionMax + 10,
      cost: 0
    };
    handleUpdate({ ...config, ranges: [...config.ranges, newRange] });
  };

  const removeRange = (index: number) => {
    if (config.ranges.length <= 1) {
      alert('Must have at least one range');
      return;
    }
    const updatedRanges = config.ranges.filter((_, i) => i !== index);
    handleUpdate({ ...config, ranges: updatedRanges });
  };

  const updateMultiplier = (value: number) => {
    handleUpdate({ ...config, multiplier: value });
  };

  // Test calculation
  const testCalculation = () => {
    const paperDims = calculatePaperDimensions();
    const largestDimension = Math.max(
      paperDims.paper1.length,
      paperDims.paper1.width,
      paperDims.paper2.length,
      paperDims.paper2.width
    );
    
    const matchedRange = (config?.ranges || []).find(range =>
      largestDimension >= range.dimensionMin && largestDimension <= range.dimensionMax
    );
    
    const baseCost = matchedRange ? matchedRange.cost : 0;
    const finalCost = baseCost * (config?.multiplier || 2);
    
    return {
      paper1: paperDims.paper1,
      paper2: paperDims.paper2,
      largestDimension,
      matchedRange,
      baseCost,
      finalCost
    };
  };

  const testResult = testCalculation();

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Plates Cost (Section 3):</h4>
        <p className="text-blue-800 text-sm">
          Plates cost is based on the largest dimension of Paper 1 or Paper 2.
          The selected range&apos;s cost is multiplied by {config?.multiplier || 2}.
        </p>
      </div>

      {/* Multiplier Configuration */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Multiplier</h4>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Cost Multiplier
          </label>
          <input
            type="number"
            value={config?.multiplier || 2}
            onChange={(e) => updateMultiplier(Number(e.target.value))}
            min="1"
            step="0.1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 2 (multiply base cost by 2)</p>
        </div>
      </div>

      {/* Dimensional Ranges */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex justify-between items-center mb-3">
          <h4 className="font-semibold text-gray-900">Dimension Ranges</h4>
          <button
            onClick={addRange}
            className="px-3 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-700"
          >
            + Add Range
          </button>
        </div>
        <div className="space-y-3">
          {(config?.ranges || []).map((range, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-3">
              <div className="grid grid-cols-4 gap-3 mb-2">
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Min (inches)</label>
                  <input
                    type="number"
                    value={range.dimensionMin}
                    onChange={(e) => updateRange(index, 'dimensionMin', Number(e.target.value))}
                    step="0.1"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Max (inches)</label>
                  <input
                    type="number"
                    value={range.dimensionMax}
                    onChange={(e) => updateRange(index, 'dimensionMax', Number(e.target.value))}
                    step="0.1"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div>
                  <label className="block text-xs text-gray-600 mb-1">Base Cost (PKR)</label>
                  <input
                    type="number"
                    value={range.cost}
                    onChange={(e) => updateRange(index, 'cost', Number(e.target.value))}
                    step="100"
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  />
                </div>
                <div className="flex items-end">
                  <button
                    onClick={() => removeRange(index)}
                    className="w-full px-2 py-1 bg-red-600 text-white text-sm rounded hover:bg-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-xs text-gray-600">
                Range: {range.dimensionMin}&quot; - {range.dimensionMax}&quot; → {range.cost} PKR (×{config?.multiplier || 2} = {range.cost * (config?.multiplier || 2)} PKR)
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-3 gap-3 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length (inches)</label>
            <input
              type="number"
              value={testLength}
              onChange={(e) => setTestLength(Number(e.target.value))}
              step="0.5"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Width (inches)</label>
            <input
              type="number"
              value={testWidth}
              onChange={(e) => setTestWidth(Number(e.target.value))}
              step="0.5"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height (inches)</label>
            <input
              type="number"
              value={testHeight}
              onChange={(e) => setTestHeight(Number(e.target.value))}
              step="0.5"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="bg-white rounded p-4">
          <div className="grid grid-cols-2 gap-4 mb-3">
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Paper 1</h5>
              <p className="text-sm">Length: {testResult.paper1.length.toFixed(2)}&quot;</p>
              <p className="text-sm">Width: {testResult.paper1.width.toFixed(2)}&quot;</p>
            </div>
            <div>
              <h5 className="font-semibold text-gray-900 mb-2">Paper 2</h5>
              <p className="text-sm">Length: {testResult.paper2.length.toFixed(2)}&quot;</p>
              <p className="text-sm">Width: {testResult.paper2.width.toFixed(2)}&quot;</p>
            </div>
          </div>
          <div className="border-t pt-3">
            <p className="text-sm"><strong>Largest Dimension:</strong> {testResult.largestDimension.toFixed(2)}&quot;</p>
            <p className="text-sm"><strong>Matched Range:</strong> {testResult.matchedRange?.name || 'None'}</p>
            <p className="text-sm"><strong>Base Cost:</strong> {testResult.baseCost} PKR</p>
            <p className="text-sm"><strong>Multiplier:</strong> ×{config.multiplier}</p>
            <p className="text-xl font-bold text-purple-700 mt-2 pt-2 border-t">
              Final Plates Cost: {testResult.finalCost.toFixed(2)} PKR
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

