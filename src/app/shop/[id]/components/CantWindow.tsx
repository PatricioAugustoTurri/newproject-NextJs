import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import useCart from "@/hooks/use-cart";
import { FotoTypes } from "@/types/type-fotos";
import { ArrowRight, CircleMinus, CirclePlus, Euro } from "lucide-react";
type Props = {
  fotosDetalles: FotoTypes;
};
import { generarCodigoAleatorio } from "@/lib/string-randow";
import { useState } from "react";

function CantWindow({ fotosDetalles }: Props) {
  const { addItem } = useCart();
  const [cant, setCant] = useState(1);
  const [size, setSize] = useState<number>(0);
  const [ifSize, setIfSize] = useState<boolean>(true);
  const addCart = (cant: number) => {
    if (size === 0) {
      setIfSize(false);
    } else {
      if (size === 60) {
        fotosDetalles.size = "XL (A2)";
      } else if (size === 45) {
        fotosDetalles.size = "L (A3)";
      } else if (size === 30) {
        fotosDetalles.size = "M (A4)";
      }
      fotosDetalles.price = size;
      fotosDetalles.cant = cant;
      fotosDetalles.id_fotoPedido = generarCodigoAleatorio(100);
      addItem(fotosDetalles);
    }
  };
  return (
    <div className="flex-col mt-4">
      <div>
        <Select
          onValueChange={(value) => {
            setSize(parseInt(value));
            setIfSize(true);
          }}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Selecciona el tamaño" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Opciones</SelectLabel>
              <SelectItem
                value="60"
                className="flex items-center justify-between"
              >
                <p>XL (A2)</p>
                <ArrowRight />
                <p className="flex items-center">
                  <Euro /> 60
                </p>{" "}
                {/* 60 */}
              </SelectItem>
              <SelectItem
                value="45"
                className="flex items-center justify-between"
              >
                <p>L (A3)</p>
                <ArrowRight />
                <p className="flex items-center">
                  <Euro /> 45
                </p>{" "}
                {/* 60 */}
              </SelectItem>
              <SelectItem
                value="30"
                className="flex items-center justify-between"
              >
                <p>M (A4)</p>
                <ArrowRight />
                <p className="flex items-center">
                  <Euro /> 30
                </p>{" "}
                {/* 60 */}
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        {ifSize == false && (
          <p className="text-xs text-red-400 mt-0.5">Elige el tamaño</p>
        )}
      </div>
      <div className="grid grid-cols-2 bg-slate-200 rounded-2xl p-4 mt-4 items-center">
        <div className="flex items-center gap-4 ">
          <CircleMinus
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
          <CirclePlus
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
