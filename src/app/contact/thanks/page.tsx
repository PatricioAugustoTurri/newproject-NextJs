/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

function ThanksPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="md:text-4xl text-2xlfont-bold">
        Gracias por contactarnos
      </h1>
      <p className="text-xl font-bold">Le escribiremos en breve</p>
      <img
        src="/favicon.ico"
        alt="logo"
        className="w-20 h-auto md:w-60 md:h-60"
      />
      <Link href="/" className="text-blue-500 hover:underline">
        Volver a la página de inicio
      </Link>
    </div>
  );
}

export default ThanksPage;
