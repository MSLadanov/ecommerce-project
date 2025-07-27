import { IProduct } from "@/types/Carts";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface IWishlistState {
  wishlist: IProduct[];
  toggleWishlist: (product: IProduct) => void;
  isInWishlist: (productId: number) => boolean;
  removeFromWishlist: (productId: number) => void;
  clearWishlist: () => void;
}

export const useWishlist = create<IWishlistState>()(
  persist(
    (set, get) => ({
      wishlist: [],
      toggleWishlist: (product: IProduct) => {
        set((state) => {
          const exists = state.wishlist.some(
            (item) => item.id === product.id
          );
          return {
            wishlist: exists
              ? state.wishlist.filter((item) => item.id !== product.id)
              : [...state.wishlist, product],
          };
        });
      },
      isInWishlist: (productId: number) => {
        return get().wishlist.some((item) => item.id === productId);
      },
      removeFromWishlist: (productId: number) => {
        set((state) => {
          return {
            wishlist: state.wishlist.filter((item) => item.id !== productId)
          }
        })
      },
      clearWishlist: () => {
        set({ wishlist: [] });
      },
    }),
    {
      name: "wishlist-storage",
    }
  )
);
