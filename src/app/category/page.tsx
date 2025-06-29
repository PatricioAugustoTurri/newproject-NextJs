"use client";
import { CategoryTypes } from "@/types/type-categories";
import axios from "axios";
import { useEffect, useState } from "react";
import CategoriesDetail from "./components/CategoriesDetail";
function CategoriesPage() {
  const [categories, setCategories] = useState<CategoryTypes[]>([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get("/api/categories");
      try {
        setCategories(result.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return <CategoriesDetail categories={categories} />;
}

export default CategoriesPage;
