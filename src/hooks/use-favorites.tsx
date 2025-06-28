import { FotoTypes } from "@/types/type-fotos";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface FavoritesStore {
  favorite: FotoTypes[];
  addFavorite: (item: FotoTypes) => void;
  removeFavorite: (item: FotoTypes) => void;
  clear: () => void;
}

const useFavorites = create(
  persist<FavoritesStore>(
    (set, get) => ({
      favorite: [],

      addFavorite: (data: FotoTypes) => {
        const current = get().favorite;
        const existing = current.find((item) => item.foto_id === data.foto_id);
        if (existing) {
          return;
        }
        set({ favorite: [...current, data] });
      },

      removeFavorite: (data: FotoTypes) => {
        set({
          favorite: [
            ...get().favorite.filter((item) => item.foto_id !== data.foto_id),
          ],
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
