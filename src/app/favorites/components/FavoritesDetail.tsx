/* eslint-disable @next/next/no-img-element */
import useFavorites from "@/hooks/use-favorites";
import { FotoTypes } from "@/types/type-fotos";
import { ShoppingCart, X } from "lucide-react";
import { useRouter } from "next/navigation";

function FavoritesDetail() {
    const { favorite, removeFavorite } = useFavorites();
    const router = useRouter();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {favorite.map((foto: FotoTypes) => {
          return (
            <div
              key={foto.foto_id}
              className="hover:scale-105 transition-all duration-900 ease-in-out relative group"
            >
              <img
                src={foto.image}
                alt={foto.name}
                className="rounded-lg object-cover aspect-square"
              />
              <div className="absolute top-0 right-0 flex items-center justify-between w-full px-10 py-2 opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                <ShoppingCart
                  className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-white hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
                  size={50}
                  onClick={() => {
                    router.push(`/shop/${foto.foto_id}`);
                  }}
                />
                <X
                  className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-white hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
                  size={50}
                  onClick={() => {
                    removeFavorite(foto);
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    )
}

export default FavoritesDetail;