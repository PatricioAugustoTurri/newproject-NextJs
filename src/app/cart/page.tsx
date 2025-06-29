"use client";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { FotoTypes } from "@/types/type-fotos";
import { Oi } from "next/font/google";
import CartDetail from "./components/CartDetail";
import CartVoid from "./components/CartVoid";
import { Euro } from "lucide-react";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function CartPage() {
  const { items, clear } = useCart();
  const handleCheckout = async (items: FotoTypes[]) => {
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
      <div className="flex justify-between">
        <h1 className={`${oi.className} text-3xl`}>Mi carrito</h1>
        {items.length > 0 && (
          <Button
            variant="ghost"
            onClick={clear}
            className="text-xs cursor-pointer"
          >
            Eliminar todo el carrito
          </Button>
        )}
      </div>
      {items.length === 0 ? <CartVoid /> : <CartDetail />}
      {items.length > 0 && (
        <div className="mt-6 flex justify-start gap-8 items-center">
          <div className="flex items-center gap-2">
            <h1>Total a pagar:</h1>
            <p className="flex items-center gap-1 bg-red-700 rounded-full p-2 text-white text-2xl">
              <Euro size={30} strokeWidth={2}/>
              {items.reduce(
                (acc: number, item: FotoTypes) => acc + item.price * item.cant,
                0
              )}
            </p>
          </div>
          <Button
            className="cursor-pointer w-full"
            onClick={() => handleCheckout(items)}
          >
            Pagar
          </Button>
        </div>
      )}
    </div>
  );
}

export default CartPage;
