/* eslint-disable @next/next/no-img-element */
import { Separator } from "@/components/ui/separator";
import CantWindow from "./CantWindow";
import { Oi } from "next/font/google";
import Barra from "./Barra";
const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function FotoDetail({ fotosDetalles }) {
  return (
    <div>
      <div className="flex flex-col">
        <h1 className={`${oi.className} text-3xl`}>{fotosDetalles.name}</h1>
        <Barra fotosDetalles={fotosDetalles} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <img
          src={fotosDetalles.image}
          alt={fotosDetalles.name}
          className="aspect-auto object-cover rounded-lg shadow-md"
        />
        <div className="flex flex-col gap-4">
          <div>{fotosDetalles.description}</div>
          <Separator className="mt-1" />
          <CantWindow fotosDetalles={fotosDetalles} />
        </div>
      </div>
    </div>
  );
}

export default FotoDetail;
