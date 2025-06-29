/* eslint-disable @next/next/no-img-element */
import { CategoryTypes } from "@/types/type-categories";
import { Oi } from "next/font/google";
import Link from "next/link";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});
interface Props {
  categories: CategoryTypes[];
}
function CategoriesDetail({ categories }: Props) {
  return (
    <div className="flex flex-col">
      <h1 className={`text-4xl ${oi.className}`}>Categorias</h1>
      <ul className="grid grid-cols-2 gap-4 p-4 mt-10">
        {categories.map((category: CategoryTypes) => {
          return (
            <Link
              key={category.category_id}
              href={`/category/${category.category_id}`}
              className="relative flex flex-col items-center justify-center hover:scale-105 transition duration-300 ease-in-out"
            >
              <img
                src={category.images[0]}
                alt={category.category_name}
                className="w-full h-full object-cover rounded-md"
              />
              <h2 className="text-xl absolute bg-white/50 p-2 w-full bottom-10 text-center">
                {category.category_name}
              </h2>
            </Link>
          );
        })}
      </ul>
    </div>
  );
}

export default CategoriesDetail;
