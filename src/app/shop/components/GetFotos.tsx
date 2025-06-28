/* eslint-disable @next/next/no-img-element */
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
      <h1 className={`${oi.className} text-2xl`}>Todos los productos</h1>
      {/* {loading && <div>Cargando...</div>} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {fotosFinales.map((fotos: FotoTypes) => {
          return (
            <div
              key={fotos.foto_id}
              className="shadow-md rounded-lg p-4 flex flex-col gap-4"
            >
              <h1 className="text-lg font-bold items-center justify-start flex">
                {fotos.name}
              </h1>
              <img
                src={fotos.image}
                alt={fotos.name}
                className="rounded-lg hover:scale-105 transition-all duration-900 ease-in-out cursor-pointer object-cover aspect-square"
                onClick={() => router.push(`/shop/${fotos.foto_id}`)}
              />
              <div className="flex items-center justify-between mb-2 px-2 bg-slate-100 w-full rounded-2xl">
                <Heart
                  className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
                  size={40}
                  onClick={() => {
                    addFavorite(fotos);
                  }}
                />
              </div>
            </div>
          );
        })}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </div>
    </div>
  );
}

export default GetFotos;
