"use client";
/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
function CarouselHome() {
  return (
    <Carousel className="w-auto h-full" plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent>
        <CarouselItem>
          <img
            src="/mamitas.jpg"
            alt="foto"
            className="aspect-video object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/arrozales.jpg"
            alt="foto"
            className="aspect-video object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/abuela.jpg"
            alt="foto"
            className="aspect-video object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/volcan.jpg"
            alt="foto"
            className="aspect-video object-cover"
          />
        </CarouselItem>
        <CarouselItem>
          <img
            src="/monje-tren.jpg"
            alt="foto"
            className="aspect-video object-cover"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselHome;
