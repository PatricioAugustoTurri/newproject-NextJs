"use client";

import { Oi } from "next/font/google";
import FavoritesDetail from "./components/FavoritesDetail";
import useFavorites from "@/hooks/use-favorites";
import FavoritesVoid from "./components/FavoritesVoid";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function FavoritesPage() {
  const { favorite } = useFavorites();
  return (
    <div className="flex flex-col gap-10">
      <h1 className={`${oi.className} text-3xl`}>Tus favoritos</h1>
      {favorite.length === 0 && <FavoritesVoid />}
      <FavoritesDetail />
    </div>
  );
}

export default FavoritesPage;
