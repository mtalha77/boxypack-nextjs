'use client';

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
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

  // Lock body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleCheckout = () => {
    router.push('/checkout');
    onClose();
  };

  const handleRequestQuote = () => {
    router.push('/#request-quote-section');
    onClose();
  };

  // Use portal to render outside normal DOM flow
  const cartContent = (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{ 
          zIndex: 9998,
          backgroundColor: 'rgba(0, 0, 0, 0.2)',
          backdropFilter: 'blur(0px)'
        }}
        onClick={onClose}
      />

      {/* Cart Modal - Centered below cart icon */}
      <div 
        className="fixed top-20 right-4 w-full max-w-md bg-white rounded-lg shadow-2xl flex flex-col max-h-[80vh]"
        style={{ zIndex: 9999 }}
      >
        {/* Header - Fixed at top */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 flex-shrink-0">
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

        {/* Cart Items - Scrollable middle section */}
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <ShoppingCart className="w-12 h-12 text-gray-300 mb-3" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-4 text-sm">
                Add some products to get started!
              </p>
              <button
                onClick={onClose}
                className="bg-[#0c6b76] hover:bg-[#0ca6c2] text-white font-semibold py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <>
              {items.length > 2 && (
                <div className="mb-3 p-2 bg-blue-50 border border-blue-200 rounded-lg text-center">
                  <p className="text-xs text-blue-700 font-medium">
                    📦 {items.length} items in cart
                  </p>
                </div>
              )}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-gray-50 rounded-lg p-3 border border-gray-200"
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

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, Math.max(1, item.quantity - 1))
                          }
                          className="w-6 h-6 flex items-center justify-center bg-white border border-gray-300 rounded hover:bg-gray-100 transition-colors"
                        >
                          −
                        </button>
                        <span className="text-sm font-medium text-gray-900 w-8 text-center">
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
            </>
          )}
        </div>

        {/* Footer with Total and Actions - Fixed at bottom */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 p-4 bg-gray-50 flex-shrink-0">
            <div className="flex justify-between items-center mb-3">
              <span className="text-lg font-semibold text-gray-900">Total:</span>
              <span className="text-xl font-bold text-green-600">
                ${getTotalPrice().toFixed(2)}
              </span>
            </div>

            <div className="space-y-2">
              <button
                onClick={handleCheckout}
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingCart className="w-4 h-4" />
                Proceed to Checkout
              </button>
              <button
                onClick={handleRequestQuote}
                className="w-full bg-[#0c6b76] hover:bg-[#0ca6c2] text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Request Quote
              </button>
              <button
                onClick={() => {
                  if (confirm('Are you sure you want to clear your cart?')) {
                    clearCart();
                  }
                }}
                className="w-full bg-white hover:bg-gray-100 text-gray-700 border border-gray-300 font-medium py-2 px-4 rounded-lg transition-colors text-sm"
              >
                Clear Cart
              </button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-2">
              Final pricing will be confirmed after quote review
            </p>
          </div>
        )}
      </div>
    </>
  );

  // Render using portal to document.body
  return createPortal(cartContent, document.body);
};

export default CartDropdown;
