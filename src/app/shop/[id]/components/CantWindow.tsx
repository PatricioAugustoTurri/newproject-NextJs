import { Button } from "@/components/ui/button";
import useCart from "@/hooks/use-cart";
import { FotoTypes } from "@/types/type-fotos";
import { CircleMinus, CirclePlus } from "lucide-react";
import { useState } from "react";
type Props = {
  fotosDetalles: FotoTypes;
};

function CantWindow({ fotosDetalles }: Props) {
  const { addItem } = useCart();
  const [cant, setCant] = useState(1);
  const addCart = (cant: number) => {
    fotosDetalles.price = 100; //momentaño
    fotosDetalles.cant = cant;
    addItem(fotosDetalles);
  };
  return (
    <div className="flex flex-col mt-10">
      <div>
asdasd
      </div>
      <div className="md:flex items-center justify-between md:gap-4 hidden bg-slate-200 rounded-2xl p-4">
        <div className="flex items-center gap-4 ">
          <CirclePlus
            className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
            size={50}
            strokeWidth={2}
            onClick={() => {
              if (cant < 10) {
                setCant(cant + 1);
              }
            }}
          />
          <p className="text-xl font-bold flex items-center text-black shadow-2xl">
            {cant}
          </p>
          <CircleMinus
            className="hover:bg-gray-100 hover:text-gray-700 hover:rounded-full p-2 text-gray-500 hover:shadow-md hover:shadow-black transition-all duration-700 ease-in-out cursor-pointer hover:scale-105"
            size={50}
            strokeWidth={2}
            onClick={() => {
              if (cant > 1) {
                setCant(cant - 1);
              }
            }}
          />
        </div>
        <Button onClick={() => addCart(cant)}>Agregar al carrito</Button>
      </div>
    </div>
  );
}

export default CantWindow;
