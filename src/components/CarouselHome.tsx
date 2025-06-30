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
    <Carousel className="w-full" plugins={[Autoplay({ delay: 3000 })]}>
      <CarouselContent>
        <CarouselItem>
          <img src="/11.JPG" alt="foto" className="aspect-video object-cover" />
        </CarouselItem>
        <CarouselItem>
          <img src="/35.JPG" alt="foto" className="aspect-video object-cover" />
        </CarouselItem>
        <CarouselItem>
          <img src="/1.JPG" alt="foto" className="aspect-video object-cover" />
        </CarouselItem>
        <CarouselItem>
          <img src="/10.JPG" alt="foto" className="aspect-video object-cover" />
        </CarouselItem>
        <CarouselItem>
          <img src="/3.JPG" alt="foto" className="aspect-video object-cover"/>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default CarouselHome;
