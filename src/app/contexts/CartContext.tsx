'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface CartItem {
  id: string;
  productName: string;
  productSlug: string;
  material: string;
  length: number;
  width: number;
  height: number;
  pt: string;
  printedSides: string;
  lamination: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  addedAt: number;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => { success: boolean; isUpdate: boolean };
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getItemCount: () => number;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  isItemInCart: (item: Omit<CartItem, 'id' | 'addedAt'>) => boolean;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('boxypack_cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem('boxypack_cart', JSON.stringify(items));
    }
  }, [items, isLoaded]);

  const isItemInCart = (item: Omit<CartItem, 'id' | 'addedAt'>) => {
    return items.some(
      (i) =>
        i.productSlug === item.productSlug &&
        i.material === item.material &&
        i.length === item.length &&
        i.width === item.width &&
        i.height === item.height &&
        i.pt === item.pt &&
        i.printedSides === item.printedSides &&
        i.lamination === item.lamination &&
        i.quantity === item.quantity
    );
  };

  const addItem = (item: CartItem): { success: boolean; isUpdate: boolean } => {
    // Check if item with same base specs exists (ignoring quantity)
    const existingItemIndex = items.findIndex(
      (i) =>
        i.productSlug === item.productSlug &&
        i.material === item.material &&
        i.length === item.length &&
        i.width === item.width &&
        i.height === item.height &&
        i.pt === item.pt &&
        i.printedSides === item.printedSides &&
        i.lamination === item.lamination
    );

    if (existingItemIndex > -1) {
      // Item exists - update it with new values
      setItems((prevItems) => {
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex] = {
          ...item,
          id: updatedItems[existingItemIndex].id, // Keep original ID
          addedAt: Date.now() // Update timestamp
        };
        return updatedItems;
      });
      return { success: true, isUpdate: true };
    } else {
      // Add new item
      setItems((prevItems) => [...prevItems, item]);
      return { success: true, isUpdate: false };
    }
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity, subtotal: item.unitPrice * quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getItemCount = () => {
    return items.length; // Number of unique products
  };

  const getTotalItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0); // Total units
  };

  const getTotalPrice = () => {
    return items.reduce((total, item) => total + item.subtotal, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getItemCount,
        getTotalItems,
        getTotalPrice,
        isItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
