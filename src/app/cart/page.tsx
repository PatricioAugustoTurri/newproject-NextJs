/* eslint-disable @next/next/no-img-element */
"use client";
import { Euro, MoveRight, ShoppingBag, SquareX } from "lucide-react";
import { Oi } from "next/font/google";
import { useRouter } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { Separator } from "@radix-ui/react-select";
import { Button } from "@/components/ui/button";
import { FotoTypes } from "@/types/type-fotos";
import { useState } from "react";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function CartPage() {
  const { items, clear, removeItem } = useCart();
  const router = useRouter();
  const [ifPagar, setIfPagar] = useState<boolean>(true);
  const totalPrice = items.reduce((acc, item) => {
    return acc + item.price * item.cant;
  }, 0);
  const handleCheckout = async (items: FotoTypes[]) => {
    if (items.length === 0) {
      setIfPagar(false);
      return;
    }
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
    <div className="max-w-6xl px-4 py-8 mx-auto sm:px-6 lg:px-8 h-auto md:h-screen">
      <h1 className={`${oi.className} text-4xl`}>Tu carrito</h1>
      <div className="grid md:grid-cols-2 sm:gap-4 items-center mt-4">
        <div>
          {items.length === 0 && (
            <div className="flex my-10 justify-center items-center">
              <div
                className="flex flex-col justify-center items-center cursor-pointer gap-4"
                onClick={() => {
                  router.push("/category");
                }}
              >
                <h1 className="text-3xl font-bold">Lista vacia</h1>
                <div className="flex flex-col items-center gap-0.5 text-center">
                  <h2>
                    <ShoppingBag size={70} />
                  </h2>
                  <span className="text-gray-500 text-xs">
                    Todavía no has agregado productos a tu carrito.
                  </span>
                  <span className="text-gray-500">Nuestro Shop</span>
                </div>
              </div>
            </div>
          )}
          <ul>
            {items.map((item) => {
              return (
                <div key={item.id_fotoPedido}>
                  <div className="flex justify-between items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-auto overflow-hidden rounded-sm object-cover cursor-pointer hover:scale-95 transition duration-700 ease-in-out"
                    />
                    <div className="flex flex-col">
                      <p className="md:text-2xl text-lg">{item.name}</p>
                      <div className="flex gap-1 text-sm">
                        <p>Cantidad:</p>
                        <p>{item.cant}</p>
                      </div>
                      <div className="flex gap-1 text-sm items-center">
                        <p>Tamaño:</p>
                        <p>{item.size}</p>
                        <MoveRight />
                        <p className="flex items-center gap-1 text-base">
                          <Euro />
                          {item.price}
                        </p>
                      </div>
                      <div className="flex gap-1 text-sm items-center">
                        <p>Precio:</p>
                        <p className="flex items-center gap-1 text-base">
                          <Euro />
                          {item.price * item.cant}
                        </p>
                      </div>
                    </div>
                    <SquareX
                      className="w-6 h-6 cursor-pointer flex my-6 hover:fill-black duration-300 hover:text-white"
                      onClick={() => removeItem(item)}
                    />
                  </div>
                  <Separator className="my-2 sm:my-0" />
                </div>
              );
            })}
          </ul>
        </div>
        <div className="max-w-xl py-4 sm:py-0">
          <div className="p-6 rounded-lg bg-slate-100">
            <p className="mb-1 text-lg font-semibold">Order Sumary</p>
            <Separator />
            <div className="flex justify-between gap-5 my-4">
              <p>Order Total</p>
              <p className="flex items-center text-3xl font-bold gap-1">
                <Euro />
                {totalPrice}
              </p>
            </div>
            <div className="flex items-center justify-center w-full mt-3 flex-col gap-1">
              <Button
                className="w-full cursor-pointer"
                onClick={() => handleCheckout(items)}
              >
                Comprar
              </Button>
              {ifPagar == false && (
                <p className="text-red-600 text-xs">
                  No tenes productos en tu carrito
                </p>
              )}
            </div>
          </div>
          {items.length !== 0 && (
            <p
              className="text-end my-2 text-red-500/70 cursor-pointer text-xs"
              onClick={() => clear()}
            >
              Vacia todo el carrito
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartPage;
