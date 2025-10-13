'use client';

import React, { useState, useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { RigidProductPricingFormula } from '@/lib/types/pricing-formulas-rigid';
import RigidMaterialCostEditor from './sections/MaterialCostEditor';
import { RigidScanningCostEditor, RigidVendorPercentageEditor, RigidMarginCostEditor } from './sections/SimpleEditorsRigid';
import RigidPrintingCostEditor from './sections/PrintingCostEditor';
import RigidLaminationCostEditor from './sections/LaminationCostEditor';
import RigidMakingCostEditor from './sections/MakingCostEditor';
import RigidShippingCostEditor from './sections/ShippingCostEditor';

export default function RigidPricingFormulaEditPage() {
  const router = useRouter();
  const params = useParams();
  const productId = params.productId as string;

  const [formula, setFormula] = useState<RigidProductPricingFormula | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeSection, setActiveSection] = useState<number>(1);

  // Fetch formula data
  useEffect(() => {
    const fetchFormula = async () => {
      try {
        setLoading(true);
        const response = await fetch(`/api/admin/pricing-formulas/${productId}`);
        const data = await response.json();

        if (data.success && data.data.formulaType === 'rigid') {
          setFormula(data.data as RigidProductPricingFormula);
        } else {
          alert('This product is not a Rigid product or formula not found');
          router.push('/admin/pricing-formulas');
        }
      } catch (error) {
        console.error('Error fetching formula:', error);
        alert('Error fetching formula');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchFormula();
    }
  }, [productId, router]);

  // Save formula
  const handleSave = async () => {
    if (!formula) return;

    try {
      setSaving(true);
      const response = await fetch(`/api/admin/pricing-formulas/${productId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formula)
      });

      const data = await response.json();

      if (data.success) {
        alert('Pricing formula saved successfully!');
      } else {
        alert(`Failed to save: ${data.error}`);
      }
    } catch (error) {
      console.error('Error saving formula:', error);
      alert('Error saving formula');
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!formula) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-600">Formula not found</p>
          <button
            onClick={() => router.push('/admin/pricing-formulas')}
            className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Back to List
          </button>
        </div>
      </div>
    );
  }

  const sections = [
    { number: 1, name: 'Material Cost', component: RigidMaterialCostEditor },
    { number: 2, name: 'Scanning Cost', component: RigidScanningCostEditor },
    { number: 3, name: 'Printing Cost', component: RigidPrintingCostEditor },
    { number: 4, name: 'Lamination Cost', component: RigidLaminationCostEditor },
    { number: 5, name: 'Making Cost', component: RigidMakingCostEditor },
    { number: 6, name: 'Vendor Percentage', component: RigidVendorPercentageEditor },
    { number: 7, name: 'Shipping Cost', component: RigidShippingCostEditor },
    { number: 8, name: 'Margin Cost', component: RigidMarginCostEditor }
  ];

  const activeComponent = sections.find(s => s.number === activeSection);

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Edit Rigid Pricing Formula</h1>
              <p className="mt-2 text-sm text-gray-600">
                {formula.productName}
              </p>
              <span className="inline-block mt-2 px-3 py-1 bg-purple-100 text-purple-800 text-xs font-semibold rounded-full">
                RIGID PRODUCT (8 Sections)
              </span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => router.push('/admin/pricing-formulas')}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSave}
                disabled={saving}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {/* Sidebar Navigation */}
          <div className="col-span-1">
            <div className="bg-white rounded-lg shadow sticky top-4">
              <div className="p-4 border-b">
                <h3 className="font-semibold text-gray-900">Formula Sections</h3>
              </div>
              <nav className="p-2">
                {sections.map((section) => (
                  <button
                    key={section.number}
                    onClick={() => setActiveSection(section.number)}
                    className={`w-full text-left px-4 py-3 rounded-lg mb-1 transition-colors ${
                      activeSection === section.number
                        ? 'bg-blue-50 text-blue-700 font-medium'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${
                        activeSection === section.number
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-200 text-gray-600'
                      }`}>
                        {section.number}
                      </span>
                      <span className="text-sm">{section.name}</span>
                    </div>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="col-span-3">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Section {activeSection}: {activeComponent?.name}
                </h2>
              </div>

              {/* Render Active Component */}
              {activeComponent && React.createElement(activeComponent.component as React.ComponentType<{
                formula: RigidProductPricingFormula;
                onUpdate: (data: unknown) => void;
              }>, {
                formula: formula,
                onUpdate: (data: unknown) => {
                  const key = getSectionKey(activeSection);
                  setFormula({
                    ...formula,
                    [key]: data,
                    updatedAt: new Date()
                  });
                }
              })}

              {/* Navigation Buttons */}
              <div className="mt-8 flex justify-between pt-6 border-t">
                <button
                  onClick={() => setActiveSection(Math.max(1, activeSection - 1))}
                  disabled={activeSection === 1}
                  className="px-6 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setActiveSection(Math.min(8, activeSection + 1))}
                  disabled={activeSection === 8}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Helper function to map section numbers to formula keys
function getSectionKey(sectionNumber: number): string {
  const keyMap: Record<number, string> = {
    1: 'materialCost',
    2: 'scanningCost',
    3: 'printingCost',
    4: 'laminationCost',
    5: 'makingCost',
    6: 'vendorPercentage',
    7: 'shippingCost',
    8: 'marginCost'
  };
  return keyMap[sectionNumber];
}

