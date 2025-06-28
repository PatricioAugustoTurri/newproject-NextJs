/* eslint-disable @next/next/no-img-element */
"use client";

import { FotoTypes } from "@/types/type-fotos";
import axios from "axios";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import FotoDetail from "./components/FotoDetail";

function ShopPage() {
  const params = useParams();
  const { id } = params;
  const [fotosDetalles, setFotosDetalles] = useState<FotoTypes>(
    {} as FotoTypes
  );

  useEffect(() => {
    const fechFotos = async () => {
      const result = await axios.get("/api/fotos/" + id);
      setFotosDetalles(result.data);
    };
    fechFotos();
  }, [id]);

  return <FotoDetail fotosDetalles={fotosDetalles} />;
}

export default ShopPage;
