"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Product } from "@/lib/products";
import { getProductPrice } from "@/lib/products";

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartContextValue = {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  decreaseItem: (productId: string) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
};

const CartContext = createContext<CartContextValue | undefined>(undefined);
const STORAGE_KEY = "mangora-cart";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) setItems(JSON.parse(stored));
    } catch (error) {
      console.warn("No se pudo cargar el carrito", error);
    } finally {
      setIsReady(true);
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items, isReady]);

  const addItem = (product: Product, quantity = 1) => {
    if (product.stock <= 0) return;

    setItems((current) => {
      const existing = current.find((item) => item.product.id === product.id);
      if (!existing) return [...current, { product, quantity }];

      return current.map((item) =>
        item.product.id === product.id
          ? { ...item, product, quantity: Math.min(item.quantity + quantity, product.stock) }
          : item
      );
    });
  };

  const decreaseItem = (productId: string) => {
    setItems((current) =>
      current
        .map((item) => (item.product.id === productId ? { ...item, quantity: item.quantity - 1 } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (productId: string) => {
    setItems((current) => current.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => setItems([]);

  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.quantity, 0), [items]);
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity * getProductPrice(item.product), 0),
    [items]
  );

  const value = useMemo(
    () => ({ items, addItem, decreaseItem, removeItem, clearCart, totalItems, subtotal }),
    [items, subtotal, totalItems]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart debe usarse dentro de CartProvider");
  return context;
}
