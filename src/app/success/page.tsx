import { PartyPopper } from "lucide-react";
import { Oi } from "next/font/google";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});
function SuccessPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className={`${oi.className} text-3xl`}>Pago exitoso!!!</h1>
      <div className="flex flex-col items-center justify-center gap-1">
      <PartyPopper size={200} strokeWidth={1} className="bg-slate-50 p-1 rounded-full" />
        <p>Gracias por tu compra.</p>
        <p>En Breve nos pondremos en contacto con usted.</p>
      </div>
    </div>
  );
}

export default SuccessPage;
