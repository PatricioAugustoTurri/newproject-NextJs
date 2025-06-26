import { useEffect, useState } from "react";

function useGetProducts() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("https://api.escuelajs.co/api/v1/products");
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      }
    })();
  }, []);

  return { products, loading, error };
}

export default useGetProducts;
