import { Laugh } from "lucide-react";
import Link from "next/link";

function ThanksPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">Gracias por contactarnos</h1>
      <p className="text-xl font-bold">Le escribiremos en breve</p>
      <Laugh size={200} />
      <Link href="/" className="text-blue-500 hover:underline">
        Volver a la página de inicio
      </Link>
    </div>
  );
}

export default ThanksPage;
