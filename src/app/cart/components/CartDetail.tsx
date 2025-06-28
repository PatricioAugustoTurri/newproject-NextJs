/* eslint-disable @next/next/no-img-element */
import useCart from "@/hooks/use-cart";
import { FotoTypes } from "@/types/type-fotos";
import { Separator } from "@radix-ui/react-separator";
import { Euro, X } from "lucide-react";

function CartDetail() {
  const { items, removeItem } = useCart();
  return (
    <div className="mt-16 bg-slate-50 rounded-4xl p-4">
      {items.map((item: FotoTypes) => {
        return (
          <div className="flex flex-col" key={item.foto_id}>
            <div className="grid grid-cols-3 md:grid-cols-6 items-center content-center gap-2">
              <h1 className="text-xl font-bold">{item.name}</h1>
              <p className="flex items-center text-base gap-1 text-center">
                Precio: <Euro size={15} />
                {item.price}
              </p>
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-full"
              />
              <p>Cant: {item.cant}</p>
              <p className="flex items-center text-base gap-1 text-center">
                Total: <Euro size={15} />
                {item.price * item.cant}
              </p>
              <X
                className="cursor-pointer"
                size={30}
                strokeWidth={1}
                onClick={() => removeItem(item)}
              />
            </div>
            {items.length > 1 && <Separator className="my-4" />}
          </div>
        );
      })}
    </div>
  );
}

export default CartDetail;
