/* eslint-disable @next/next/no-img-element */
"use client";
import { CategoryTypes } from "@/types/type-categories";
import axios from "axios";
import { Oi } from "next/font/google";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});
function OldCategories() {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const result = await axios.get("/api/categories");
      setCategories(result.data);
    })();
  }, []);
  return (
    <div className="flex flex-col lg:mt-10 mt-4 ">
      <h1 className={`${oi.className} lg:text-4xl text-xl`}>
        Todas las Categorías
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 items-center justify-center mx-auto mt-4 lg:mt-10">
        {categories.map((category: CategoryTypes) => {
          return (
            <div
              key={category.category_id}
              className="flex items-center justify-center cursor-pointer"
              onClick={() => router.push(`/category/${category.category_id}`)}
            >
              <Carousel plugins={[Autoplay({ delay: 1500 })]}>
                <CarouselContent>
                  {category.images.map((foto) => {
                    return (
                      <CarouselItem key={foto}>
                        <img
                          src={foto}
                          alt={foto}
                          className="aspect-video object-cover"
                        />
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
              <h1 className="absolute text-white font-bold z-10 text-base">
                {category.category_name}
              </h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default OldCategories;
