import { Instagram, Youtube } from "lucide-react";
import Link from "next/link";

function Footer() {
  return (
    <div className="max-w-6xl mx-auto px-2 md:px-26 py-4 flex items-center justify-between">
      <div className="flex flex-col">
        <div className="flex gap-4">
          <Link href="https://www.instagram.com/patoturri/">
            <Instagram size={40} strokeWidth={2} className="cursor-pointer" />
          </Link>
          <Link href="https://www.youtube.com/@pato_turri">
            <Youtube size={40} strokeWidth={2} className="cursor-pointer" />
          </Link>
        </div>
        <h1 className="text-3xl font-bold mt-2">Pato Turri</h1>
      </div>
      <div className="flex gap-4 text-gray-500">
        <Link href="/">Home</Link>
        <Link href="/shop">Shop</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
