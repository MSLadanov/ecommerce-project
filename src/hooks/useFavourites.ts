import { IProduct } from "@/types/Carts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IFavouritesState {
  favourites: IProduct[];
  toggleFavourite: (product: IProduct) => void;
  isInFavourites: (productId: number) => boolean;
  clearFavourites: () => void;
}

export const useFavourites = create<IFavouritesState>()(
  persist(
    (set, get) => ({
      favourites: [],
      toggleFavourite: (product: IProduct) => {
        set((state) => {
          const exists = state.favourites.some(
            (item) => item.id === product.id
          );
          return {
            favourites: exists
              ? state.favourites.filter((item) => item.id !== product.id)
              : [...state.favourites, product],
          };
        });
      },
      isInFavourites: (productId: number) => {
        return get().favourites.some((item) => item.id === productId);
      },
      clearFavourites: () => {
        set({ favourites: [] });
      },
    }),
    {
      name: "favourites-storage",
    }
  )
);
