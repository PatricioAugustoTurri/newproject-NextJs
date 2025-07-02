/* eslint-disable @next/next/no-img-element */
"use client";
import axios from "axios";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { useEffect, useState } from "react";
import { FotoTypes } from "@/types/type-fotos";
import { useRouter } from "next/navigation";
import { Oi } from "next/font/google";
import { Heart } from "lucide-react";
import useFavorites from "@/hooks/use-favorites";
const oi = Oi({
  variable: "--font-io",
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
});

function IsFavorites() {
  const [fotos, setFotos] = useState<FotoTypes[]>([]);
  const router = useRouter();
  const { addFavorite } = useFavorites();
  useEffect(() => {
    (async () => {
      const result = await axios.get("/api/fotos/isTrue");
      setFotos(result.data);
    })();
  }, []);
  return (
    <div className="flex flex-col md:mt-16 mt-10">
      <h1 className={`text-xl lg:text-4xl ${oi.className}`}>
        Favoritas de este mes
      </h1>
      <Carousel className="w-full h-auto mt-2 lg:mt-8 mx-auto">
        <CarouselContent className="-ml-2 md:-ml-4">
          {fotos.map((foto: FotoTypes) => (
            <CarouselItem
              key={foto.foto_id}
              className="basis-1/2 lg:basis-1/4 group py-4"
            >
              <Card className="p-1 hover:scale-105 transition duration-700 ease-in-out hover:shadow-md">
                <CardContent className="p-1">
                  <img
                    src={foto.image}
                    alt={foto.name}
                    className="aspect-square object-cover rounded-lg shadow-md cursor-pointer"
                    onClick={() => router.push(`/shop/${foto.foto_id}`)}
                  />
                  <div className="flex items-center justify-between px-2 text-sm font-bold mt-2">
                    <h1>{foto.name}</h1>
                    <Heart
                      onClick={() => {
                        addFavorite(foto);
                      }}
                      className="cursor-pointer hover:fill-black"
                    />
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}

export default IsFavorites;
