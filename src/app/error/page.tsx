"use client";
import { ThumbsDown } from "lucide-react";
import { Oi } from "next/font/google";
import { useRouter } from "next/navigation";
const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function ErrorPage() {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center justify-center gap-10">
      <h1 className={`${oi.className} text-3xl`}>Error</h1>
      <ThumbsDown size={200} strokeWidth={1} className="bg-slate-50 p-1 rounded-full" />
      <div className="flex flex-col items-center justify-center gap-1">
        <p className="text-xl">Hubo un error al procesar tu pago</p>
        <p
          className="text-blue-400 font-bold text-xl cursor-pointer"
          onClick={() => {
            router.push("/shop");
          }}
        >
          Reintentar
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
