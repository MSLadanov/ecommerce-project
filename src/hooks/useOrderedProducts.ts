import { IProduct } from "@/types/Carts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IOrderedProductsState {
  orderedProducts: IProduct[];
  addToOrderedProducts: (products: IProduct[]) => void;
  cancelOrderedProduct: (productId: string) => void;
}

export const useOrderedProducts = create<IOrderedProductsState>()(
  persist(
    (set) => ({
      orderedProducts: [],
      addToOrderedProducts: (products: IProduct[]) => {
        set((state) => {
          return {
            orderedProducts: [...state.orderedProducts, ...products],
          };
        });
      },
      cancelOrderedProduct: (productId: string) => {
        set((state) => {
          return {
            orderedProducts: state.orderedProducts.filter(
              (item) => item.cart_id !== productId
            ),
          };
        });
      },
    }),
    {
      name: "ordered-storage",
    }
  )
);
