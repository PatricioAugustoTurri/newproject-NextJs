import { ProductType } from "@/types/product";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FavoritesStore {
  favorite: ProductType[];
  addFavorite: (item: ProductType) => void;
  removeFavorite: (item: ProductType) => void;
  clear: () => void;
}

const useFavorites = create(
  persist<FavoritesStore>(
    (set, get) => ({
      favorite: [],

      addFavorite: (data: ProductType) => {
        const current = get().favorite;
        const existing = current.find((item) => item.id === data.id);
        if (existing) {
          return;
        }
        set({ favorite: [...current, data] });
      },

      removeFavorite: (data: ProductType) => {
        set({
          favorite: [...get().favorite.filter((item) => item.id !== data.id)],
        });
      },

      clear: () => {
        set({ favorite: [] });
      },
    }),
    {
      name: "favorites",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useFavorites;
