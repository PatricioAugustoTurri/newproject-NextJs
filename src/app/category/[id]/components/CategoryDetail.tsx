import useFavorites from "@/hooks/use-favorites";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
function CategoryDetail({foto}) {
    const router = useRouter();
    const { addFavorite } = useFavorites();
    return (
          <div
              key={foto.foto_id}
              className="relative hover:scale-105 transition duration-700 ease-in-out shadow-md flex flex-col items-center justify-center group"
            >
              <img
                src={foto.image}
                alt={foto.name}
                className="aspect-square w-full h-full object-cover rounded-md cursor-pointer"
                onClick={() => {
                  router.push("/shop/" + foto.foto_id);
                }}
              />
              <Heart
                strokeWidth={3}
                size={50}
                className="absolute bottom-10 opacity-0 group-hover:opacity-100 duration-700 ease-in-out hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-white hover:shadow-md hover:shadow-black transition-all cursor-pointer"
                onClick={() => addFavorite(foto)}
              />
            </div>
    )
}

export default CategoryDetail;