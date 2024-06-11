// src/context/CartContext.tsx
'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of a product
interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  imgUrl: string;
}

// Define the context type
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}

// Create a context for the cart
const CartContext = createContext<CartContextType | undefined>(undefined);

// Create a provider component
export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the Cart context
export const useCart = (): CartContextType => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
