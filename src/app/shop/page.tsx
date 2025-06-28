"use client";

import { FotoTypes } from "@/types/type-fotos";
import axios from "axios";
import { useEffect, useState } from "react";
import GetFotos from "./components/GetFotos";

function ShopPage() {
  const [fotosFinales, setFotosFinales] = useState<FotoTypes[]>([]);
  useEffect(() => {
    const fechFotos = async () => {
      const result = await axios.get("/api/fotos");
      setFotosFinales(result.data);
    };
    fechFotos();
  }, []);

  return (
    <>
      <GetFotos fotosFinales={fotosFinales} />
    </>
  );
}

export default ShopPage;
