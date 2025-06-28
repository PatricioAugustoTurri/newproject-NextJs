"use client";
import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { FotoTypes } from "@/types/type-fotos";
import { Oi } from "next/font/google";
import CartDetail from "./components/CartDetail";
import CartVoid from "./components/CartVoid";

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
      <h1 className={`${oi.className} text-3xl`}>Mi carrito</h1>
      {items.length === 0 ? <CartVoid /> : <CartDetail />}
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
