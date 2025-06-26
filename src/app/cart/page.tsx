/* eslint-disable @next/next/no-img-element */
"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import useCart from "@/hooks/use-cart";
import { ProductType } from "@/types/product";
import { Euro, X } from "lucide-react";
import { Oi } from "next/font/google";
import { useRouter } from "next/navigation";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function CartPage() {
  const { items, clear, removeItem } = useCart();
  const router = useRouter();

  const handleCheckout = async (items: ProductType[]) => {
    const res = await fetch("/api/checkout", {
      method: "POST",
      body: JSON.stringify({ items }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    clear();
    const session = await res.json();
    window.location = session.url;
  };

  return (
    <div>
      <h1 className={`${oi.className} text-3xl`}>Mi carrito</h1>
      {items.length === 0 ? (
        <div className="text-center gap-4 flex flex-col mt-40">
          <h1 className="text-2xl font-bold">Tu carrito esta vacio</h1>
          <div>
            <p>Agrega algun producto a tu carrito,</p>
            <p
              onClick={() => {
                router.push("/shop");
              }}
              className="cursor-pointer text-blue-600"
            >
              para verlo aqui!!!
            </p>
          </div>
        </div>
      ) : (
        <div className="mt-16 bg-slate-50 rounded-4xl p-4">
          {items.map((item) => {
            return (
              <div className="flex flex-col" key={item.id}>
                <div className="grid grid-cols-3 md:grid-cols-6 items-center content-center gap-2">
                  <h1 className="text-xl font-bold">{item.title}</h1>
                  <p className="flex items-center text-base gap-1 text-center">
                    Precio: <Euro size={15} />
                    {item.price}
                  </p>
                  <img
                    src={item.images[0]}
                    alt={item.title}
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
      )}
      {items.length > 0 && (
        <div className="mt-10 flex justify-between">
          <Button
            className="cursor-pointer"
            onClick={() => handleCheckout(items)}
          >
            Comprar
          </Button>
          <Button
            variant="destructive"
            onClick={clear}
            className="text-xs cursor-pointer"
          >
            Eliminar todo el carrito
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
