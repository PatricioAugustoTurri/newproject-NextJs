/* eslint-disable @next/next/no-img-element */

import { Card, CardContent } from "@/components/ui/card";
import useFavorites from "@/hooks/use-favorites";
import { FotoTypes } from "@/types/type-fotos";
import { Heart } from "lucide-react";
import { Oi } from "next/font/google";
import { useRouter } from "next/navigation";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function GetFotos({ fotosFinales }) {
  const router = useRouter();
  const { addFavorite } = useFavorites();
  return (
    <div className="flex flex-col gap-10">
      <h1 className={`${oi.className} text-2xl`}>Todos las fotos</h1>
      {/* {loading && <div>Cargando...</div>} */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {fotosFinales.map((fotos: FotoTypes) => {
          return (
            <Card key={fotos.foto_id} className="p-1">
              <CardContent className="p-1 flex flex-col gap-2">
                <img
                  src={fotos.image}
                  alt={fotos.name}
                  className="aspect-square object-cover rounded-lg shadow-md cursor-pointer"
                  onClick={() => {
                    router.push(`/shop/${fotos.foto_id}`);
                  }}
                />
                <div className="flex items-center justify-between px-2 text-sm">
                  <h1>{fotos.name}</h1>
                  <Heart
                    size={25}
                    className="hover:fill-black transition duration-800 ease-in-out cursor-pointer"
                    onClick={() => {
                      addFavorite(fotos);
                    }}
                  />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default GetFotos;
