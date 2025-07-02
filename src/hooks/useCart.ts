import { IProduct } from "@/types/Products";
import { create } from "zustand";

export interface ICartState {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
}

export const useCart = create((set) => ({
  cart: [],
  addToCart: (product: IProduct) =>
    set((state: ICartState) => ({ cart: [...state.cart, product] })),
}));
