import { IProduct } from "@/types/Carts";
import { create } from "zustand";
import { persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";

export interface ICartState {
  cart: IProduct[];
  addToCart: (product: IProduct) => void;
  removeProduct: (product: IProduct) => void;
  removeAllProductsById: (product: IProduct) => void;
  getSum: () => string;
  getSumWithoutDiscounts: () => string;
  clearCart: () => void;
}

export const useCart = create<ICartState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product: IProduct) =>
        set((state: ICartState) => ({
          cart: [...state.cart, { ...product, cart_id: uuidv4() }],
        })),
      removeProduct: (product: IProduct) =>
        set((state: ICartState) => {
          const index = state.cart.findIndex((item) => item.id === product.id);
          if (index === -1) return { cart: state.cart };
          return {
            cart: [
              ...state.cart.slice(0, index),
              ...state.cart.slice(index + 1),
            ],
          };
        }),
      removeAllProductsById: (product: IProduct) =>
        set((state: ICartState) => {
          const cart = state.cart.filter((p) => +p.id !== +product.id)
          return {
            cart: [
              ...cart
            ],
          };
        }),
      getSum: () =>
        get()
          .cart.reduce((acc, curr) => acc + curr.price, 0)
          .toFixed(2),
      getSumWithoutDiscounts: () =>
        get()
          .cart.reduce(
            (acc, curr) =>
              acc + curr.price / (1 - curr.discountPercentage / 100),
            0
          )
          .toFixed(2),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    { name: "cart-storage" }
  )
);
