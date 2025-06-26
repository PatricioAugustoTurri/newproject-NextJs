import { ProductType } from "@/types/product";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CartStore {
  items: ProductType[];
  addItem: (item: ProductType) => void;
  removeItem: (item: ProductType) => void;
  clear: () => void;
}

const useCart = create(
  persist<CartStore>(
    (set, get) => ({
      items: [],

      addItem: (data: ProductType) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);

        if (existingItem) {
          existingItem.cant = existingItem.cant + data.cant;
          set({ items: currentItems });
          return;
        }
        set({ items: [...currentItems, data] });
      },
      removeItem: (data: ProductType) => {
        set({ items: [...get().items.filter((item) => item.id !== data.id)] });
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
