/* eslint-disable @next/next/no-img-element */
"use client";
import useGetProducts from "@/app/api/getProducts";
import { ProductType } from "@/types/product";
import { Response } from "@/types/response";
import { Euro, Heart } from "lucide-react";
import { Oi } from "next/font/google";
import { useRouter } from "next/navigation";
import useFavorites from "@/hooks/use-favorites";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function ShopPage() {
  const router = useRouter();
  const { products, loading }: Response = useGetProducts();
  const { addFavorite } = useFavorites();

  return (
    <div className="flex flex-col gap-10">
      <h1 className={`${oi.className} text-2xl`}>Todos los productos</h1>
      {loading && <div>Cargando...</div>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products?.map((product: ProductType) => {
          return (
            <div
              key={product.id}
              className="shadow-md rounded-lg p-4 flex flex-col gap-4"
            >
              <h1 className="text-lg font-bold items-center justify-start flex">
                {product.title}
              </h1>
              <img
                src={product.images[0]}
                alt={product.title}
                className="rounded-lg hover:scale-110 transition-all duration-900 ease-in-out cursor-pointer object-cover aspect-square"
                onClick={() => router.push(`/shop/${product.id}`)}
              />
              <div className="flex items-center justify-between mb-2 px-2 bg-slate-100 w-full rounded-2xl">
                <p className="flex items-center justify-start text-base gap-1 font-bold">
                  Precio: <Euro size={15} strokeWidth={2}/>
                  {product.price}
                </p>
                <Heart
                  className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
                  size={40}
                  onClick={() => {
                    addFavorite(product);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ShopPage;
