import { useEffect, useState } from "react";

function useGetProduct(id: number) {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const url = "https://api.escuelajs.co/api/v1/products/";

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url + id);
        const data = await res.json();
        setProducts(data);
        setLoading(false);
      } catch (error: any) {
        console.log(error);
        setError(error.message);
      }
    })();
  }, [url]);

  return { products, loading, error };
}

export default useGetProduct;
