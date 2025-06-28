import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { FotoTypes } from "../types/type-fotos";

interface CartStore {
  items: FotoTypes[];
  addItem: (item: FotoTypes) => void;
  removeItem: (item: FotoTypes) => void;
  clear: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: FotoTypes) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(
          (item) => item.foto_id === data.foto_id
        );

        if (existingItem) {
          existingItem.cant = existingItem.cant + data.cant;
          set({ items: currentItems });
          return;
        }
        set({ items: [...currentItems, data] });
      },
      removeItem: (data: FotoTypes) => {
        set({
          items: [
            ...get().items.filter((item) => item.foto_id !== data.foto_id),
          ],
        });
      },

      clear: () => {
        set({ items: [] });
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
