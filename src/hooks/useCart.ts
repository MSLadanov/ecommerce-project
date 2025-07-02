import { IProduct } from "@/types/Products";
import { create } from "zustand";

export interface ICartState {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
}

export const useCart = create<ICartState>((set) => ({
  cart: [],
  addToCart: (product: IProduct) =>
    set((state: ICartState) => ({ cart: [...state.cart, product] })),
  removeFromCart: (product: IProduct) =>
    set((state: ICartState) => {
      const index = state.cart.findIndex((item) => item.id === product.id);
      if (index === -1) return { cart: state.cart };
      return {
        cart: [...state.cart.slice(0, index), ...state.cart.slice(index + 1)],
      };
    }),
}));
