"use client";

import { create } from "zustand";
import { useEffect } from "react";

const useCartStore = create((set) => ({
  cart: [],
  cartTotal: 0,
  totalItems: 0,
  addToCart: ({ product, quantity, color, sizes, additionalInfo }) =>
    set((state) => {
      const existingItemIndex = state.cart.findIndex(
        (item) => item._id === product._id && item.color === color
      );

      if (existingItemIndex !== -1) {
        const newCart = [...state.cart];
        newCart[existingItemIndex].quantity += quantity;
        newCart[existingItemIndex].sizes = sizes;
        newCart[existingItemIndex].additionalInfo = additionalInfo; // Capture additional info
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(newCart));
        }
        return {
          cart: newCart,
          cartTotal: calculateCartTotal(newCart),
          totalItems: calculateTotalItems(newCart),
        };
      } else {
        const newCart = [
          ...state.cart,
          { ...product, quantity, color, sizes, additionalInfo },
        ];
        if (typeof window !== "undefined") {
          localStorage.setItem("cart", JSON.stringify(newCart));
        }
        return {
          cart: newCart,
          cartTotal: calculateCartTotal(newCart),
          totalItems: calculateTotalItems(newCart),
        };
      }
    }),
  removeFromCart: (productId) =>
    set((state) => {
      const newCart = state.cart.filter((item) => item._id !== productId);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      return {
        cart: newCart,
        cartTotal: calculateCartTotal(newCart),
        totalItems: calculateTotalItems(newCart),
      };
    }),
  increaseQuantity: (productId) =>
    set((state) => {
      const newCart = state.cart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      return {
        cart: newCart,
        cartTotal: calculateCartTotal(newCart),
        totalItems: calculateTotalItems(newCart),
      };
    }),
  decreaseQuantity: (productId) =>
    set((state) => {
      let newCart = state.cart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
      newCart = newCart.filter((item) => item.quantity > 0);
      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(newCart));
      }
      return {
        cart: newCart,
        cartTotal: calculateCartTotal(newCart),
        totalItems: calculateTotalItems(newCart),
      };
    }),
  clearCart: () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("cart");
    }
    set({ cart: [], cartTotal: 0, totalItems: 0 });
  },
  persistCart: () => {
    if (typeof window !== "undefined") {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      set({
        cart: storedCart,
        cartTotal: calculateCartTotal(storedCart),
        totalItems: calculateTotalItems(storedCart),
      });
    }
  },
}));

// Initialize the cart with data from localStorage
if (typeof window !== "undefined") {
  useCartStore.getState().persistCart();
}

function calculateCartTotal(cart) {
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

function calculateTotalItems(cart) {
  return cart.reduce((total, item) => total + item.quantity, 0);
}

export default useCartStore;
