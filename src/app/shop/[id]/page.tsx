/* eslint-disable @next/next/no-img-element */
"use client";
import useGetProduct from "@/app/api/getProduct";
import { Button } from "@/components/ui/button";
import { Response } from "@/types/response";
import { useParams } from "next/navigation";
import useCart from "@/hooks/use-cart";
import { Separator } from "@/components/ui/separator";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";

function ShopPage() {
  const params = useParams();
  const { id } = params;
  const { addItem } = useCart();

  const { products, loading }: Response = useGetProduct(
    id as unknown as number
  );

  const [cant, setCant] = useState(1);

  const addCart = (cant: number) => {
    products.cant = cant;
    addItem(products);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px:16 gap-10 flex-col md:flex-row">
      <div className="flex-col md:flex-row flex gap-10">
        {loading && <div>Cargando...</div>}
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-bold">{products?.title}</div>
          <Separator />
          <div>{products?.description}</div>
          <Separator className="md:block hidden" />
          <p className="text-3xl font-bold">Precio: ${products?.price}</p>
          <div className="md:flex items-center justify-between md:gap-4 hidden mt-10 bg-slate-200 rounded-2xl p-4">
            <div className="flex items-center gap-4 ">
              <CirclePlus
                className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
                size={50}
                strokeWidth={2}
                onClick={() => {
                  if (cant < 10) {
                    setCant(cant + 1);
                  }
                }}
              />
              <p className="text-xl font-bold flex items-center text-black shadow-2xl">
                {cant}
              </p>
              <CircleMinus
                className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
                size={50}
                strokeWidth={2}
                onClick={() => {
                  if (cant > 1) {
                    setCant(cant - 1);
                  }
                }}
              />
            </div>
            <Button onClick={() => addCart(cant)}>Agregar al carrito</Button>
          </div>
        </div>
        <div>
          <img
            src={products?.images[0]}
            alt={products?.title}
            className="aspect-square object-cover rounded-lg w-auto h-auto"
          />
          <p className="text-3xl font-bold">Precio: ${products?.price}</p>
          <div className="flex items-center justify-between gap-4 md:hidden mt-10">
            <Button onClick={() => addItem(products)}>
              Agregar al carrito
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
