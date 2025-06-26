import { Oi } from "next/font/google";
import Link from "next/link";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function Navbar() {
  return (
    <div className={`flex items-center gap-8 text-xl ${oi.className}`}>
      <Link href="/">Home</Link>
      <Link href="/shop">Shop</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </div>
  );
}

export default Navbar;
