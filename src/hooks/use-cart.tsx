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
        const existingItem = currentItems.find((item: FotoTypes) => {
          return item.id_fotoPedido === data.id_fotoPedido;
        });
        if (existingItem) {
          return;
        }
        set({ items: [...currentItems, data] });
      },
      removeItem: (data: FotoTypes) => {
        set({
          items: [
            ...get().items.filter(
              (item) => item.id_fotoPedido !== data.id_fotoPedido
            ),
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
