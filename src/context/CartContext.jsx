import React, { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const STORAGE_KEY = "cartProducts";

  const [cart, setCart] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product,quantity) => {
console.log(product)

    const existingProduct = cart.find((item) => item.id === product.id);
    console.log(product.id)
    if (existingProduct) {
      console.log("yes it's exist")
      const updated = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: quantity + (quantity || 1) }
          : item
      );
      setCart(updated);
    } else {
      console.log("Not exist yrr")
      setCart([...cart, { ...product, quantity: quantity || 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id, quantity) => {
    const updated = cart.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
    );
    setCart(updated);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}
