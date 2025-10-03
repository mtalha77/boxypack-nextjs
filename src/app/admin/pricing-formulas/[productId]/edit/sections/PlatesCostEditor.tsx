'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, PlatesCostFormula, PlatesCostRange } from '@/lib/types/pricing-formulas';
import { Trash2, Plus } from 'lucide-react';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: PlatesCostFormula) => void;
}

export default function PlatesCostEditor({ formula, onUpdate }: Props) {
  const [ranges, setRanges] = useState<PlatesCostRange[]>(formula.platesCost.ranges);

  const handleUpdate = (newRanges: PlatesCostRange[]) => {
    setRanges(newRanges);
    onUpdate({ ranges: newRanges });
  };

  const addRange = () => {
    handleUpdate([...ranges, {
      name: `Range ${ranges.length + 1}`,
      lengthMin: 0,
      lengthMax: 10,
      widthMin: 0,
      widthMax: 10,
      costs: { outside: 1000, inside: 1000, bothSide: 2000, none: 0 }
    }]);
  };

  const deleteRange = (index: number) => {
    if (ranges.length <= 1) {
      alert('Must have at least one range');
      return;
    }
    handleUpdate(ranges.filter((_, i) => i !== index));
  };

  const updateRange = (index: number, field: string, value: any) => {
    const newRanges = [...ranges];
    if (field.startsWith('cost_')) {
      const costType = field.split('_')[1];
      newRanges[index] = {
        ...newRanges[index],
        costs: { ...newRanges[index].costs, [costType]: value }
      };
    } else {
      newRanges[index] = { ...newRanges[index], [field]: value };
    }
    handleUpdate(newRanges);
  };

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          Plates cost is determined by checking which range the calculated dimensions fall into.
          Each range has different costs for different printing types (Outside, Inside, Both Side, None).
          The system checks if BOTH the length AND width fall within the range.
        </p>
      </div>

      {/* Add Range Button */}
      <div className="flex justify-end">
        <button
          onClick={addRange}
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          <Plus className="w-4 h-4" />
          Add Range
        </button>
      </div>

      {/* Ranges */}
      <div className="space-y-4">
        {ranges.map((range, index) => (
          <div key={index} className="bg-white border-2 border-gray-300 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <input
                type="text"
                value={range.name}
                onChange={(e) => updateRange(index, 'name', e.target.value)}
                className="text-lg font-semibold px-2 py-1 border-b-2 border-transparent hover:border-gray-300 focus:border-blue-500 focus:outline-none"
              />
              <button
                onClick={() => deleteRange(index)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>

            {/* Dimension Ranges */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div className="bg-gray-50 rounded p-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Length Range</p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={range.lengthMin}
                    onChange={(e) => updateRange(index, 'lengthMin', Number(e.target.value))}
                    step="0.1"
                    className="flex-1 px-3 py-2 border rounded text-sm"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    value={range.lengthMax}
                    onChange={(e) => updateRange(index, 'lengthMax', Number(e.target.value))}
                    step="0.1"
                    className="flex-1 px-3 py-2 border rounded text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>

              <div className="bg-gray-50 rounded p-3">
                <p className="text-sm font-medium text-gray-700 mb-2">Width Range</p>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    value={range.widthMin}
                    onChange={(e) => updateRange(index, 'widthMin', Number(e.target.value))}
                    step="0.1"
                    className="flex-1 px-3 py-2 border rounded text-sm"
                    placeholder="Min"
                  />
                  <span className="text-gray-500">to</span>
                  <input
                    type="number"
                    value={range.widthMax}
                    onChange={(e) => updateRange(index, 'widthMax', Number(e.target.value))}
                    step="0.1"
                    className="flex-1 px-3 py-2 border rounded text-sm"
                    placeholder="Max"
                  />
                </div>
              </div>
            </div>

            {/* Costs by Printing Type */}
            <div className="grid grid-cols-4 gap-3">
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Outside ($)</label>
                <input
                  type="number"
                  value={range.costs.outside}
                  onChange={(e) => updateRange(index, 'cost_outside', Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Inside ($)</label>
                <input
                  type="number"
                  value={range.costs.inside}
                  onChange={(e) => updateRange(index, 'cost_inside', Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Both Side ($)</label>
                <input
                  type="number"
                  value={range.costs.bothSide}
                  onChange={(e) => updateRange(index, 'cost_bothSide', Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">None ($)</label>
                <input
                  type="number"
                  value={range.costs.none}
                  onChange={(e) => updateRange(index, 'cost_none', Number(e.target.value))}
                  className="w-full px-3 py-2 border rounded text-sm"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Box */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-sm text-yellow-800">
          <strong>Important:</strong> Make sure your ranges don't overlap and cover all possible dimension combinations.
          The system will use the first matching range it finds.
        </p>
      </div>
    </div>
  );
}

