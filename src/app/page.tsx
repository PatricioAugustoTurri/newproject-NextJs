import CarouselHome from "@/components/CarouselHome";
import IsFavorites from "@/components/IsFavoretes";
import OldCategories from "@/components/OldCategories";

export default function HomePage() {
  return (
    <div className="flex flex-col">
      <CarouselHome />
      <IsFavorites />
      <OldCategories />
    </div>
  );
}
