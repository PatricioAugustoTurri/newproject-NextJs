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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {fotosFinales.map((fotos: FotoTypes) => {
          return (
           <div
              key={fotos.foto_id}
              className="relative hover:scale-105 transition duration-700 ease-in-out shadow-md flex flex-col items-center justify-center group"
            >
              <img
                src={fotos.image}
                alt={fotos.name}
                className="aspect-square w-full h-full object-cover rounded-md cursor-pointer"
                onClick={() => {
                  router.push("/shop/" + fotos.foto_id);
                }}
              />
              <Heart
                strokeWidth={3}
                size={50}
                className="absolute bottom-10 opacity-0 group-hover:opacity-100 duration-700 ease-in-out hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-white hover:shadow-md hover:shadow-black transition-all cursor-pointer"
                onClick={() => addFavorite(fotos)}
              />
            </div>
          );
        })}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"></div>
      </div>
    </div>
  );
}

export default GetFotos;
