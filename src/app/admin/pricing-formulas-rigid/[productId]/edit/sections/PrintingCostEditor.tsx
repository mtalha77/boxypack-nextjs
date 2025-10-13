'use client';

import React, { useState } from 'react';
import { RigidProductPricingFormula, RigidPrintingCostFormula, RigidPrintingCostRange } from '@/lib/types/pricing-formulas-rigid';
import { Trash2, Plus } from 'lucide-react';

interface Props {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidPrintingCostFormula) => void;
}

export default function RigidPrintingCostEditor({ formula, onUpdate }: Props) {
  const [config, setConfig] = useState(formula.printingCost);

  const handleUpdate = (newConfig: RigidPrintingCostFormula) => {
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const addRange = () => {
    const lastRange = config.ranges[config.ranges.length - 1];
    const newRange: RigidPrintingCostRange = {
      id: `range-${Date.now()}`,
      name: `${lastRange.dimensionMax}-${lastRange.dimensionMax + 10}`,
      dimensionMin: lastRange.dimensionMax,
      dimensionMax: lastRange.dimensionMax + 10,
      cost: lastRange.cost + 2000
    };
    handleUpdate({ ...config, ranges: [...config.ranges, newRange] });
  };

  const deleteRange = (index: number) => {
    if (config.ranges.length <= 1) {
      alert('Must have at least one range');
      return;
    }
    handleUpdate({ ...config, ranges: config.ranges.filter((_, i) => i !== index) });
  };

  const updateRange = (index: number, field: keyof RigidPrintingCostRange, value: string | number) => {
    const newRanges = [...config.ranges];
    newRanges[index] = { ...newRanges[index], [field]: value };
    handleUpdate({ ...config, ranges: newRanges });
  };

  return (
    <div className="space-y-6 text-gray-900">
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Rigid Printing Cost:</h4>
        <p className="text-blue-800 text-sm">
          Based on the largest dimension from Paper 1 or Paper 2, then multiplied by {config.sheetsMultiplier} sheets.
        </p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">Sheets Multiplier</h4>
        </div>
        <input
          type="number"
          value={config.sheetsMultiplier}
          onChange={(e) => handleUpdate({ ...config, sheetsMultiplier: Number(e.target.value) })}
          min="1"
          className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
        />
        <p className="text-xs text-gray-500 mt-1">Default: 4 (cost ×4)</p>
      </div>

      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">Dimension Ranges</h4>
          <button
            onClick={addRange}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Range
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Name</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Min (inches)</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Max (inches)</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Base Cost (PKR)</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {config.ranges.map((range, index) => (
                <tr key={range.id || index} className="border-t hover:bg-gray-50">
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      value={range.name}
                      onChange={(e) => updateRange(index, 'name', e.target.value)}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={range.dimensionMin}
                      onChange={(e) => updateRange(index, 'dimensionMin', Number(e.target.value))}
                      step="0.1"
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={range.dimensionMax}
                      onChange={(e) => updateRange(index, 'dimensionMax', Number(e.target.value))}
                      step="0.1"
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={range.cost}
                      onChange={(e) => updateRange(index, 'cost', Number(e.target.value))}
                      className="w-full px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => deleteRange(index)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {config.ranges.length} ranges configured. Final cost = Base Cost × {config.sheetsMultiplier}
        </p>
      </div>
    </div>
  );
}

