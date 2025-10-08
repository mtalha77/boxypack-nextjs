'use client';

import React from 'react';
import { useCart } from '../contexts/CartContext';
import { X, ShoppingCart, Trash2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CartDropdownProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDropdown: React.FC<CartDropdownProps> = ({ isOpen, onClose }) => {
  const { items, removeItem, updateQuantity, getTotalPrice, clearCart } = useCart();
  const router = useRouter();

  if (!isOpen) return null;

  const handleCheckout = () => {
    // Navigate to contact form or checkout page
    router.push('/#request-quote-section');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black bg-opacity-30 z-40"
        onClick={onClose}
      />

      {/* Cart Dropdown */}
      <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-2xl z-50 flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-[#0c6b76]" />
            <h2 className="text-lg font-semibold text-gray-900">
              Shopping Cart ({items.length})
            </h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-6">
                Add some products to get started!
              </p>
              <button
                onClick={onClose}
                className="bg-[#0c6b76] hover:bg-[#0ca6c2] text-white font-semibold py-2 px-6 rounded-lg transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-gray-50 rounded-lg p-4 border border-gray-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {item.productName}
                      </h3>
                      <p className="text-xs text-gray-600 mt-1">
                        {item.material} • {item.length}&apos; × {item.width}&apos; × {item.height}&apos;
                      </p>
                      <p className="text-xs text-gray-600">
                        PT: {item.pt} • {item.printedSides} • {item.lamination}
                      </p>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors ml-2"
                      title="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, Math.max(1, item.quantity - 1))
                        }
                        className="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                      >
                        −
                      </button>
                      <span className="text-sm font-medium text-gray-900 w-12 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                      >
                        +
                      </button>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">
                        ${item.unitPrice.toFixed(2)} each
                      </div>
                      <div className="text-sm font-semibold text-green-600">
                        ${item.subtotal.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer with Total and Actions */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-2xl font-bold text-green-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-5 h-5" />
                Checkout Now
              </button>
              <button
                onClick={handleCheckout}
                className="w-full bg-[#0c6b76] hover:bg-[#0ca6c2] text-white font-medium py-3 px-4 rounded-lg transition-colors"
              >
                Request Quote
              </button>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to clear your cart?')) {
                    clearCart();
                  }
                }}
                className="w-full bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Clear Cart
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-3">
              Final pricing will be confirmed after quote review
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDropdown;
