import { create } from "zustand";

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product) => set((state) => ({ cart: [...state.cart, product] })),
}));
