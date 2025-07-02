import { Card, CardContent } from "@/components/ui/card";
import useFavorites from "@/hooks/use-favorites";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";

/* eslint-disable @next/next/no-img-element */
function CategoryDetail({ foto }) {
  const router = useRouter();
  const { addFavorite } = useFavorites();
  return (
    <Card
      key={foto.foto_id}
      className="p-1 hover:scale-105 transition duration-700 ease-in-out"
    >
      <CardContent className="p-1 flex flex-col gap-2">
        <img
          src={foto.image}
          alt={foto.name}
          className="aspect-square object-cover rounded-lg shadow-md cursor-pointer"
          onClick={() => {
            router.push("/shop/" + foto.foto_id);
          }}
        />
        <div className="flex items-center justify-between px-2 text-sm">
          <h1>{foto.name}</h1>
          <Heart
            size={25}
            className="hover:fill-black transition duration-800 ease-in-out cursor-pointer"
            onClick={() => {
              addFavorite(foto);
            }}
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default CategoryDetail;
