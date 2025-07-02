"use client";
import useCart from "@/hooks/use-cart";
import useFavorites from "@/hooks/use-favorites";
import { Heart, ShoppingBasket } from "lucide-react";
import { useRouter } from "next/navigation";

function Cart() {
  const router = useRouter();
  const { items } = useCart();
  const { favorite } = useFavorites();
  const cantTotal = items.reduce((acc, item) => acc + item.cant, 0);

  return (
    <div className="flex items-center">
      <div className="flex items-center gap-0.5 hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-300 ease-in-out cursor-pointer">
        <ShoppingBasket
          strokeWidth={1}
          size={30}
          onClick={() => router.push("/cart")}
        />
        {items.length > 0 && <p className="text-xs">{cantTotal}</p>}
      </div>
      <div className="flex items-center gap-0.5 hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-300 ease-in-out cursor-pointer">
        <Heart
          size={30}
          strokeWidth={1}
          onClick={() => router.push("/favorites")}
        />
        {favorite.length > 0 && (
          <span className="text-xs">{favorite.length}</span>
        )}
      </div>
    </div>
  );
}

export default Cart;
