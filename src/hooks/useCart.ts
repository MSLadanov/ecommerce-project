import { IProduct } from "@/types/Carts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export interface ICartState {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
}

export const useCart = create<ICartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (product: IProduct) =>
        set((state: ICartState) => ({
          cart: [...state.cart, { ...product, cart_id: uuidv4() }],
        })),
      removeFromCart: (product: IProduct) =>
        set((state: ICartState) => {
          const index = state.cart.findIndex(
            (item) => item.cart_id === product.cart_id
          );
          if (index === -1) return { cart: state.cart };
          return {
            cart: [
              ...state.cart.slice(0, index),
              ...state.cart.slice(index + 1),
            ],
          };
        }),
    }),
    { name: "cart-storage" }
  )
);
