'use client';

import React, { useState } from 'react';
import { ProductPricingFormula, MaterialCostFormula, GSMTableEntry } from '@/lib/types/pricing-formulas';
import { Trash2, Plus } from 'lucide-react';

interface Props {
  formula: ProductPricingFormula;
  onUpdate: (data: MaterialCostFormula) => void;
}

export default function MaterialCostEditor({ formula, onUpdate }: Props) {
  const [data, setData] = useState<MaterialCostFormula>(formula.materialCost);
  
  // Test values
  const [testL, setTestL] = useState(10);
  const [testW, setTestW] = useState(8);
  const [testH, setTestH] = useState(3);
  const [testPT, setTestPT] = useState('14');
  const [testUnits, setTestUnits] = useState(250);

  const handleUpdate = (newData: MaterialCostFormula) => {
    setData(newData);
    onUpdate(newData);
  };

  const updateLengthFormula = (field: string, value: number) => {
    handleUpdate({
      ...data,
      lengthFormula: { ...data.lengthFormula, [field]: value }
    });
  };

  const updateWidthFormula = (field: string, value: any) => {
    handleUpdate({
      ...data,
      widthFormula: { ...data.widthFormula, [field]: value }
    });
  };

  const updateGSMEntry = (index: number, field: string, value: any) => {
    const newTable = [...data.gsmTable];
    newTable[index] = { ...newTable[index], [field]: value };
    handleUpdate({ ...data, gsmTable: newTable });
  };

  const addGSMEntry = () => {
    handleUpdate({
      ...data,
      gsmTable: [...data.gsmTable, { pt: 'Custom', gsm: 300, kraft: 400, cardboard: 300, corrugated: null }]
    });
  };

  const deleteGSMEntry = (index: number) => {
    if (data.gsmTable.length <= 1) {
      alert('Cannot delete the last GSM entry');
      return;
    }
    const newTable = data.gsmTable.filter((_, i) => i !== index);
    handleUpdate({ ...data, gsmTable: newTable });
  };

  const calculateTest = () => {
    const calcLength = (testH * data.lengthFormula.lengthMultiplier) + 
                      (testW * data.lengthFormula.widthMultiplier) + 
                      data.lengthFormula.additionalInches;
    
    const calcWidth = (testH * data.widthFormula.heightMultiplier) + 
                     (data.widthFormula.lengthAdded ? testL : 0) + 
                     data.widthFormula.additionalInches;
    
    const gsmEntry = data.gsmTable.find(e => e.pt === testPT);
    const gsm = gsmEntry ? gsmEntry[formula.category] || 0 : 0;
    
    const weight100 = (calcLength * calcWidth * gsm) / data.weightOf100Units.divisor;
    const cost100 = weight100 * data.costOf100Units.rate;
    const finalCost = (cost100 / 100) * testUnits;
    
    return { calcLength, calcWidth, gsm, weight100, cost100, finalCost };
  };

  const testResult = calculateTest();

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">How it works:</h4>
        <p className="text-blue-800 text-sm">
          Material cost is calculated through multiple steps:
        </p>
        <ol className="text-blue-800 text-sm mt-2 ml-4 list-decimal space-y-1">
          <li>Calculate adjusted dimensions using user inputs</li>
          <li>Look up GSM value from table based on PT and material</li>
          <li>Calculate weight of 100 units</li>
          <li>Calculate cost of 100 units</li>
          <li>Scale to required quantity</li>
        </ol>
      </div>

      {/* Length Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Step 1: Calculated Length Formula</h4>
        <div className="bg-gray-100 rounded p-3 mb-3">
          <code className="text-sm">
            Calculated Length = (H × {data.lengthFormula.lengthMultiplier}) + (W × {data.lengthFormula.widthMultiplier}) + {data.lengthFormula.additionalInches}
          </code>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Length Multiplier
            </label>
            <input
              type="number"
              value={data.lengthFormula.lengthMultiplier}
              onChange={(e) => updateLengthFormula('lengthMultiplier', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Width Multiplier
            </label>
            <input
              type="number"
              value={data.lengthFormula.widthMultiplier}
              onChange={(e) => updateLengthFormula('widthMultiplier', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Inches
            </label>
            <input
              type="number"
              value={data.lengthFormula.additionalInches}
              onChange={(e) => updateLengthFormula('additionalInches', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      {/* Width Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Step 2: Calculated Width Formula</h4>
        <div className="bg-gray-100 rounded p-3 mb-3">
          <code className="text-sm">
            Calculated Width = (H × {data.widthFormula.heightMultiplier}) {data.widthFormula.lengthAdded ? '+ L' : ''} + {data.widthFormula.additionalInches}
          </code>
        </div>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height Multiplier
            </label>
            <input
              type="number"
              value={data.widthFormula.heightMultiplier}
              onChange={(e) => updateWidthFormula('heightMultiplier', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Add Length?
            </label>
            <label className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                checked={data.widthFormula.lengthAdded}
                onChange={(e) => updateWidthFormula('lengthAdded', e.target.checked)}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-700">Include Length</span>
            </label>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Additional Inches
            </label>
            <input
              type="number"
              value={data.widthFormula.additionalInches}
              onChange={(e) => updateWidthFormula('additionalInches', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      {/* GSM Table */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold text-gray-900">Step 3: GSM Table</h4>
          <button
            onClick={addGSMEntry}
            className="flex items-center gap-1 px-3 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            <Plus className="w-4 h-4" />
            Add Row
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">PT</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">GSM</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Kraft</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Cardboard</th>
                <th className="px-3 py-2 text-left text-xs font-medium text-gray-700">Corrugated</th>
                <th className="px-3 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {data.gsmTable.map((entry, index) => (
                <tr key={index} className="border-t">
                  <td className="px-3 py-2">
                    <input
                      type="text"
                      value={entry.pt}
                      onChange={(e) => updateGSMEntry(index, 'pt', e.target.value)}
                      className="w-20 px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={entry.gsm}
                      onChange={(e) => updateGSMEntry(index, 'gsm', Number(e.target.value))}
                      className="w-24 px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={entry.kraft || ''}
                      onChange={(e) => updateGSMEntry(index, 'kraft', e.target.value ? Number(e.target.value) : null)}
                      placeholder="-"
                      className="w-24 px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={entry.cardboard || ''}
                      onChange={(e) => updateGSMEntry(index, 'cardboard', e.target.value ? Number(e.target.value) : null)}
                      placeholder="-"
                      className="w-24 px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <input
                      type="number"
                      value={entry.corrugated || ''}
                      onChange={(e) => updateGSMEntry(index, 'corrugated', e.target.value ? Number(e.target.value) : null)}
                      placeholder="-"
                      className="w-24 px-2 py-1 border rounded text-sm"
                    />
                  </td>
                  <td className="px-3 py-2">
                    <button
                      onClick={() => deleteGSMEntry(index)}
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
      </div>

      {/* Weight & Cost Calculation */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Step 4: Weight of 100 Units</h4>
          <div className="bg-gray-100 rounded p-3 mb-3">
            <code className="text-xs">
              Weight = (CalcL × CalcW × GSM) / Divisor
            </code>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Divisor
            </label>
            <input
              type="number"
              value={data.weightOf100Units.divisor}
              onChange={(e) => handleUpdate({ ...data, weightOf100Units: { divisor: Number(e.target.value) }})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>

        <div className="bg-white border border-gray-300 rounded-lg p-4">
          <h4 className="font-semibold text-gray-900 mb-3">Step 5: Cost of 100 Units</h4>
          <div className="bg-gray-100 rounded p-3 mb-3">
            <code className="text-xs">
              Cost = Weight × Rate
            </code>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Rate
            </label>
            <input
              type="number"
              value={data.costOf100Units.rate}
              onChange={(e) => handleUpdate({ ...data, costOf100Units: { rate: Number(e.target.value) }})}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-3 gap-3 mb-3">
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
              {data.gsmTable.map(e => <option key={e.pt} value={e.pt}>{e.pt}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Units</label>
            <input type="number" value={testUnits} onChange={(e) => setTestUnits(Number(e.target.value))} className="w-full px-2 py-1 border rounded text-sm" />
          </div>
        </div>
        <div className="bg-white rounded p-3 space-y-1 text-sm">
          <p><strong>Calculated Length:</strong> {testResult.calcLength.toFixed(2)}"</p>
          <p><strong>Calculated Width:</strong> {testResult.calcWidth.toFixed(2)}"</p>
          <p><strong>GSM Used:</strong> {testResult.gsm}</p>
          <p><strong>Weight of 100 Units:</strong> {testResult.weight100.toFixed(2)}</p>
          <p><strong>Cost of 100 Units:</strong> ${testResult.cost100.toFixed(2)}</p>
          <p className="text-xl font-bold text-purple-700 mt-2">Final Cost: ${testResult.finalCost.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
}

