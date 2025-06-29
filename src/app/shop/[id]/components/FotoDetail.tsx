/* eslint-disable @next/next/no-img-element */
import { Separator } from "@/components/ui/separator";
import CantMobile from "./CantMobile";
import CantWindow from "./CantWindow";

function FotoDetail({ fotosDetalles }) {
  return (
    <div className="gap-10 flex-col md:flex-row">
      <div className="flex-col md:flex-row flex gap-10">
        <div className="flex flex-col gap-4">
          <div className="text-4xl font-bold">{fotosDetalles.name}</div>
          <Separator />
          <div>{fotosDetalles.description}</div>
          <Separator className="md:block hidden" />
          <CantWindow fotosDetalles={fotosDetalles} />
        </div>
        <div>
          <img
            src={fotosDetalles.image}
            alt={fotosDetalles.name}
            className="aspect-auto object-cover rounded-lg w-auto h-auto shadow-md"
          />
          <CantMobile fotosDetalles={fotosDetalles} />
        </div>
      </div>
    </div>
  );
}

export default FotoDetail;
