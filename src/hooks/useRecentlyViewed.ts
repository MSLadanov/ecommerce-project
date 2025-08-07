import { IProduct } from "@/types/Products";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IRecentlyViewedState {
  recentlyViewed: IProduct[];
  addRecentlyViewed: (products: IProduct) => void;
  clearRecentlyViewed: () => void;
}

export const useRecentlyViewed = create<IRecentlyViewedState>()(
  persist(
    (set) => ({
      recentlyViewed: [],
      addRecentlyViewed: (product: IProduct) => {
        set((state) => {
          if (state.recentlyViewed.find((item) => product.id === item.id)) {
            return {
              recentlyViewed: [...state.recentlyViewed],
            };
          }
          return {
            recentlyViewed: [...state.recentlyViewed, product],
          };
        });
      },
      clearRecentlyViewed: () => {
        set(() => {
          return {
            recentlyViewed: [],
          };
        });
      },
    }),
    {
      name: "viewed-storage",
    }
  )
);
