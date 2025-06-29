"use client";
import { FotoTypes } from "@/types/type-fotos";
import { Oi } from "next/font/google";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { BreadcrumbWithCustomSeparator } from "./components/Barra";
import CategoryDetail from "./components/CategoryDetail";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function CategoryPage() {
  const params = useParams();
  const { id } = params;
  const [category, setCategory] = useState<FotoTypes[]>([]);
  useEffect(() => {
    (async () => {
      const result = await fetch("/api/categories/" + id);
      const data = await result.json();
      setCategory(data);
    })();
  }, [id]);
  return (
    <div className="flex flex-col">
      <h1 className={`text-3xl ${oi.className}`}>
        {category[0]?.category_name}
      </h1>
      <BreadcrumbWithCustomSeparator category={category} />
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {category.map((foto: FotoTypes) => {
          return <CategoryDetail foto={foto} key={foto.foto_id} />;
        })}
      </div>
    </div>
  );
}

export default CategoryPage;
