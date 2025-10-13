'use client';

import React, { useState } from 'react';
import { RigidProductPricingFormula, RigidMaterialCostFormula } from '@/lib/types/pricing-formulas-rigid';

interface Props {
  formula: RigidProductPricingFormula;
  onUpdate: (data: RigidMaterialCostFormula) => void;
}

export default function RigidMaterialCostEditor({ formula, onUpdate }: Props) {
  const [config, setConfig] = useState(formula.materialCost);
  
  // Test values
  const [testLength, setTestLength] = useState(10);
  const [testWidth, setTestWidth] = useState(8);
  const [testHeight, setTestHeight] = useState(3);
  const [testUnits, setTestUnits] = useState(500);

  const handleUpdate = (newConfig: RigidMaterialCostFormula) => {
    setConfig(newConfig);
    onUpdate(newConfig);
  };

  const updateGSM = (type: 'cardboard' | 'paper', field: 'gsm' | 'rate', value: number) => {
    const updated = {
      ...config,
      gsmTable: {
        ...config.gsmTable,
        [type]: { ...config.gsmTable[type], [field]: value }
      }
    };
    handleUpdate(updated);
  };

  const updateCardboard1 = (field: string, value: number) => {
    const updated = {
      ...config,
      cardboard1: { ...config.cardboard1, [field]: value }
    };
    handleUpdate(updated);
  };

  const updateCardboard1Multipliers = (field: string, value: number) => {
    const updated = {
      ...config,
      cardboard1: {
        ...config.cardboard1,
        widthMultipliers: { ...config.cardboard1.widthMultipliers, [field]: value }
      }
    };
    handleUpdate(updated);
  };

  const updateCardboard2 = (field: string, value: number) => {
    const updated = {
      ...config,
      cardboard2: { ...config.cardboard2, [field]: value }
    };
    handleUpdate(updated);
  };

  const updateCardboard2Multipliers = (field: string, value: number) => {
    const updated = {
      ...config,
      cardboard2: {
        ...config.cardboard2,
        widthMultipliers: { ...config.cardboard2.widthMultipliers, [field]: value }
      }
    };
    handleUpdate(updated);
  };

  const updatePaper1 = (field: string, value: number) => {
    const updated = {
      ...config,
      paper1: { ...config.paper1, [field]: value }
    };
    handleUpdate(updated);
  };

  const updatePaper1Multipliers = (field: string, value: number) => {
    const updated = {
      ...config,
      paper1: {
        ...config.paper1,
        widthMultipliers: { ...config.paper1.widthMultipliers, [field]: value }
      }
    };
    handleUpdate(updated);
  };

  const updatePaper2 = (field: string, value: number) => {
    const updated = {
      ...config,
      paper2: { ...config.paper2, [field]: value }
    };
    handleUpdate(updated);
  };

  // Test calculation
  const calculateTest = () => {
    const { gsmTable, divisor, cardboard1, cardboard2, paper1, paper2 } = config;

    // Cardboard 1
    const c1Length = testLength + cardboard1.lengthAddition;
    const c1Width = (testWidth * cardboard1.widthMultipliers.width) + 
                    (testHeight * cardboard1.widthMultipliers.height) + 
                    cardboard1.widthMultipliers.addition;
    const c1Cost = (c1Length * c1Width * gsmTable.cardboard.gsm) / divisor * gsmTable.cardboard.rate;

    // Cardboard 2
    const c2Length = (testLength + cardboard2.lengthAddition1) + 
                     (testHeight * cardboard2.lengthHeightMultiplier) + 
                     cardboard2.lengthAddition2;
    const c2Width = (testWidth * cardboard2.widthMultipliers.width) + 
                    (testHeight * cardboard2.widthMultipliers.height) + 
                    cardboard2.widthMultipliers.addition;
    const c2Cost = (c2Length * c2Width * gsmTable.cardboard.gsm) / divisor * gsmTable.cardboard.rate;

    // Paper 1 (×2 sheets)
    const p1Length = testLength + paper1.lengthAddition;
    const p1Width = (testHeight * paper1.widthMultipliers.height) + 
                    (testWidth * paper1.widthMultipliers.width) + 
                    paper1.widthMultipliers.addition;
    const p1CostBeforeSheets = (p1Length * p1Width * gsmTable.paper.gsm) / divisor * gsmTable.paper.rate;
    const p1Cost = p1CostBeforeSheets * paper1.sheetsMultiplier;

    // Paper 2 (×2 sheets)
    const p2Length = testLength + (testHeight * paper2.lengthHeightMultiplier);
    const p2Width = testWidth + (testHeight * paper2.widthHeightMultiplier) + paper2.widthAddition;
    const p2CostBeforeSheets = (p2Length * p2Width * gsmTable.paper.gsm) / divisor * gsmTable.paper.rate;
    const p2Cost = p2CostBeforeSheets * paper2.sheetsMultiplier;

    // Sum all 4 costs (NEW FORMULA)
    const totalCost = c1Cost + c2Cost + p1Cost + p2Cost;
    const costRatio = totalCost / 100;
    const finalCost = costRatio * testUnits;

    return {
      cardboard1: { length: c1Length, width: c1Width, cost: c1Cost },
      cardboard2: { length: c2Length, width: c2Width, cost: c2Cost },
      paper1: { length: p1Length, width: p1Width, costBeforeSheets: p1CostBeforeSheets, cost: p1Cost },
      paper2: { length: p2Length, width: p2Width, costBeforeSheets: p2CostBeforeSheets, cost: p2Cost },
      totalCost,
      costRatio,
      finalCost
    };
  };

  const testResult = calculateTest();

  return (
    <div className="space-y-6 text-gray-900">
      {/* Description */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h4 className="font-semibold text-blue-900 mb-2">Rigid Material Cost Structure:</h4>
        <p className="text-blue-800 text-sm">
          Calculates material costs for Rigid boxes using:
        </p>
        <ul className="text-blue-800 text-sm mt-2 ml-4 list-disc space-y-1">
          <li><strong>2 Cardboard calculations</strong> (Cardboard 1 + Cardboard 2)</li>
          <li><strong>2 Paper calculations</strong> with ×2 sheets multiplier (Paper 1 + Paper 2)</li>
          <li><strong>Final cost</strong> = (C1 + C2 + P1 + P2) / 100 × Units</li>
        </ul>
      </div>

      {/* GSM Table */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">GSM Table</h4>
        <div className="grid grid-cols-2 gap-4">
          <div className="border rounded p-3">
            <h5 className="font-medium text-gray-800 mb-2">Cardboard</h5>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GSM</label>
                <input
                  type="number"
                  value={config.gsmTable.cardboard.gsm}
                  onChange={(e) => updateGSM('cardboard', 'gsm', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rate (PKR)</label>
                <input
                  type="number"
                  value={config.gsmTable.cardboard.rate}
                  onChange={(e) => updateGSM('cardboard', 'rate', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
          <div className="border rounded p-3">
            <h5 className="font-medium text-gray-800 mb-2">Paper</h5>
            <div className="space-y-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">GSM</label>
                <input
                  type="number"
                  value={config.gsmTable.paper.gsm}
                  onChange={(e) => updateGSM('paper', 'gsm', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Rate (PKR)</label>
                <input
                  type="number"
                  value={config.gsmTable.paper.rate}
                  onChange={(e) => updateGSM('paper', 'rate', Number(e.target.value))}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">Divisor</label>
          <input
            type="number"
            value={config.divisor}
            onChange={(e) => handleUpdate({ ...config, divisor: Number(e.target.value) })}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">Default: 15500</p>
        </div>
      </div>

      {/* Cardboard 1 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Cardboard 1 Formula</h4>
        <div className="bg-gray-100 rounded p-3 mb-3">
          <code className="text-sm">
            Length = User Length + {config.cardboard1.lengthAddition}<br/>
            Width = (User Width × {config.cardboard1.widthMultipliers.width}) + (User Height × {config.cardboard1.widthMultipliers.height}) + {config.cardboard1.widthMultipliers.addition}<br/>
            Cost = (Length × Width × {config.gsmTable.cardboard.gsm}) / {config.divisor} × {config.gsmTable.cardboard.rate}
          </code>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Length Addition
            </label>
            <input
              type="number"
              value={config.cardboard1.lengthAddition}
              onChange={(e) => updateCardboard1('lengthAddition', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Width Multipliers</label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Width ×</label>
              <input
                type="number"
                value={config.cardboard1.widthMultipliers.width}
                onChange={(e) => updateCardboard1Multipliers('width', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Height ×</label>
              <input
                type="number"
                value={config.cardboard1.widthMultipliers.height}
                onChange={(e) => updateCardboard1Multipliers('height', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Addition</label>
              <input
                type="number"
                value={config.cardboard1.widthMultipliers.addition}
                onChange={(e) => updateCardboard1Multipliers('addition', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Cardboard 2 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Cardboard 2 Formula</h4>
        <div className="bg-gray-100 rounded p-3 mb-3">
          <code className="text-sm">
            Length = (User Length + {config.cardboard2.lengthAddition1}) + (User Height × {config.cardboard2.lengthHeightMultiplier}) + {config.cardboard2.lengthAddition2}<br/>
            Width = (User Width × {config.cardboard2.widthMultipliers.width}) + (User Height × {config.cardboard2.widthMultipliers.height}) + {config.cardboard2.widthMultipliers.addition}<br/>
            Cost = (Length × Width × {config.gsmTable.cardboard.gsm}) / {config.divisor} × {config.gsmTable.cardboard.rate}
          </code>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Length Addition 1
            </label>
            <input
              type="number"
              value={config.cardboard2.lengthAddition1}
              onChange={(e) => updateCardboard2('lengthAddition1', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Height Multiplier
            </label>
            <input
              type="number"
              value={config.cardboard2.lengthHeightMultiplier}
              onChange={(e) => updateCardboard2('lengthHeightMultiplier', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Length Addition 2
            </label>
            <input
              type="number"
              value={config.cardboard2.lengthAddition2}
              onChange={(e) => updateCardboard2('lengthAddition2', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Width Multipliers</label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Width ×</label>
              <input
                type="number"
                value={config.cardboard2.widthMultipliers.width}
                onChange={(e) => updateCardboard2Multipliers('width', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Height ×</label>
              <input
                type="number"
                value={config.cardboard2.widthMultipliers.height}
                onChange={(e) => updateCardboard2Multipliers('height', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Addition</label>
              <input
                type="number"
                value={config.cardboard2.widthMultipliers.addition}
                onChange={(e) => updateCardboard2Multipliers('addition', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Paper 1 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Paper 1 Formula (×{config.paper1.sheetsMultiplier} sheets)</h4>
        <div className="bg-gray-100 rounded p-3 mb-3">
          <code className="text-sm">
            Length = User Length + {config.paper1.lengthAddition}<br/>
            Width = (User Height × {config.paper1.widthMultipliers.height}) + (User Width × {config.paper1.widthMultipliers.width}) + {config.paper1.widthMultipliers.addition}<br/>
            Cost = (Length × Width × {config.gsmTable.paper.gsm}) / {config.divisor} × {config.gsmTable.paper.rate} × {config.paper1.sheetsMultiplier}
          </code>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Length Addition
            </label>
            <input
              type="number"
              value={config.paper1.lengthAddition}
              onChange={(e) => updatePaper1('lengthAddition', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sheets Multiplier
            </label>
            <input
              type="number"
              value={config.paper1.sheetsMultiplier}
              onChange={(e) => updatePaper1('sheetsMultiplier', Number(e.target.value))}
              min="1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-2">Width Multipliers</label>
          <div className="grid grid-cols-3 gap-3">
            <div>
              <label className="block text-xs text-gray-600 mb-1">Height ×</label>
              <input
                type="number"
                value={config.paper1.widthMultipliers.height}
                onChange={(e) => updatePaper1Multipliers('height', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Width ×</label>
              <input
                type="number"
                value={config.paper1.widthMultipliers.width}
                onChange={(e) => updatePaper1Multipliers('width', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
            <div>
              <label className="block text-xs text-gray-600 mb-1">Addition</label>
              <input
                type="number"
                value={config.paper1.widthMultipliers.addition}
                onChange={(e) => updatePaper1Multipliers('addition', Number(e.target.value))}
                step="0.1"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Paper 2 Formula */}
      <div className="bg-white border border-gray-300 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-3">Paper 2 Formula (×{config.paper2.sheetsMultiplier} sheets)</h4>
        <div className="bg-gray-100 rounded p-3 mb-3">
          <code className="text-sm">
            Length = User Length + (User Height × {config.paper2.lengthHeightMultiplier})<br/>
            Width = User Width + (User Height × {config.paper2.widthHeightMultiplier}) + {config.paper2.widthAddition}<br/>
            Cost = (Length × Width × {config.gsmTable.paper.gsm}) / {config.divisor} × {config.gsmTable.paper.rate} × {config.paper2.sheetsMultiplier}
          </code>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Length Height Multiplier
            </label>
            <input
              type="number"
              value={config.paper2.lengthHeightMultiplier}
              onChange={(e) => updatePaper2('lengthHeightMultiplier', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Width Height Multiplier
            </label>
            <input
              type="number"
              value={config.paper2.widthHeightMultiplier}
              onChange={(e) => updatePaper2('widthHeightMultiplier', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Width Addition
            </label>
            <input
              type="number"
              value={config.paper2.widthAddition}
              onChange={(e) => updatePaper2('widthAddition', Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
        </div>
        <div className="mt-3">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Sheets Multiplier
          </label>
          <input
            type="number"
            value={config.paper2.sheetsMultiplier}
            onChange={(e) => updatePaper2('sheetsMultiplier', Number(e.target.value))}
            min="1"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
          />
        </div>
      </div>

      {/* Test Calculator */}
      <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
        <h4 className="font-semibold text-purple-900 mb-3">Test Calculator:</h4>
        <div className="grid grid-cols-4 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Length</label>
            <input
              type="number"
              value={testLength}
              onChange={(e) => setTestLength(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Width</label>
            <input
              type="number"
              value={testWidth}
              onChange={(e) => setTestWidth(Number(e.target.value))}
              step="0.1"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Height</label>
            <input
              type="number"
              value={testHeight}
              onChange={(e) => setTestHeight(Number(e.target.value))}
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
        </div>

        <div className="bg-white rounded p-4 space-y-3">
          <div className="grid grid-cols-2 gap-4">
            <div className="border-l-4 border-blue-500 pl-3">
              <h5 className="font-semibold text-blue-900 mb-2">Cardboard 1</h5>
              <p className="text-sm">Length: {testResult.cardboard1.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.cardboard1.width.toFixed(2)}"</p>
              <p className="text-sm font-bold text-blue-700">Cost: {testResult.cardboard1.cost.toFixed(2)} PKR</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-3">
              <h5 className="font-semibold text-blue-900 mb-2">Cardboard 2</h5>
              <p className="text-sm">Length: {testResult.cardboard2.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.cardboard2.width.toFixed(2)}"</p>
              <p className="text-sm font-bold text-blue-700">Cost: {testResult.cardboard2.cost.toFixed(2)} PKR</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-3">
            <div className="border-l-4 border-green-500 pl-3">
              <h5 className="font-semibold text-green-900 mb-2">Paper 1 (×{config.paper1.sheetsMultiplier})</h5>
              <p className="text-sm">Length: {testResult.paper1.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.paper1.width.toFixed(2)}"</p>
              <p className="text-sm">Before sheets: {testResult.paper1.costBeforeSheets.toFixed(2)} PKR</p>
              <p className="text-sm font-bold text-green-700">Cost: {testResult.paper1.cost.toFixed(2)} PKR</p>
            </div>
            <div className="border-l-4 border-green-600 pl-3">
              <h5 className="font-semibold text-green-900 mb-2">Paper 2 (×{config.paper2.sheetsMultiplier})</h5>
              <p className="text-sm">Length: {testResult.paper2.length.toFixed(2)}"</p>
              <p className="text-sm">Width: {testResult.paper2.width.toFixed(2)}"</p>
              <p className="text-sm">Before sheets: {testResult.paper2.costBeforeSheets.toFixed(2)} PKR</p>
              <p className="text-sm font-bold text-green-700">Cost: {testResult.paper2.cost.toFixed(2)} PKR</p>
            </div>
          </div>

          <div className="border-t-2 border-purple-200 pt-3 mt-3">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm"><strong>C1 + C2:</strong> {(testResult.cardboard1.cost + testResult.cardboard2.cost).toFixed(2)} PKR</p>
                <p className="text-sm"><strong>P1 + P2:</strong> {(testResult.paper1.cost + testResult.paper2.cost).toFixed(2)} PKR</p>
                <p className="text-sm"><strong>Total Cost:</strong> {testResult.totalCost.toFixed(2)} PKR</p>
              </div>
              <div>
                <p className="text-sm"><strong>Cost Ratio:</strong> {testResult.costRatio.toFixed(2)}</p>
                <p className="text-xl font-bold text-purple-700 mt-1">
                  Final Cost: {testResult.finalCost.toFixed(2)} PKR
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

