/* eslint-disable @next/next/no-img-element */
import { Card, CardContent } from "@/components/ui/card";
import useFavorites from "@/hooks/use-favorites";
import { FotoTypes } from "@/types/type-fotos";
import { ShoppingCart, X } from "lucide-react";
import { useRouter } from "next/navigation";

function FavoritesDetail() {
  const { favorite, removeFavorite } = useFavorites();
  const router = useRouter();
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {favorite.map((foto: FotoTypes) => (
        <Card
          key={foto.foto_id}
          className="p-1 hover:scale-105 transition duration-700 ease-in-out"
        >
          <CardContent className="p-1 flex flex-col gap-2">
            <h1 className="text-xs font-bold">{foto.name}</h1>
            <img
              src={foto.image}
              alt={foto.name}
              className="aspect-video object-cover rounded-md shadow-md"
            />
            <div className="flex items-center justify-between px-2 text-sm mt-1">
              <ShoppingCart
                className="cursor-pointer"
                onClick={() => {
                  router.push(`/shop/${foto.foto_id}`);
                }}
              />
              <X
                className="cursor-pointer"
                onClick={() => {
                  removeFavorite(foto);
                }}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default FavoritesDetail;
