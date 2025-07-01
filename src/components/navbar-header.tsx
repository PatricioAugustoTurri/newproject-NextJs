import { Oi } from "next/font/google";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function Navbar() {
  return (
    <div className="flex items-center gap-8 text-xl">
      <Link href="/" className={`${oi.className}`}>
        Home
      </Link>
      <NavigationMenu viewport={false}>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className={`${oi.className} text-xl`}>
              Shop
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[150px] gap-1 text-base">
                <li className="hover:bg-black hover:text-white transition duration-300 ease-in-out p-1 rounded-md">
                  <Link href="/shop">Todos las fotos</Link>
                </li>
                <li className="hover:bg-black hover:text-white transition duration-300 ease-in-out p-1 rounded-md">
                  <Link href="/category/1">Retratos</Link>
                </li>
                <li className="hover:bg-black hover:text-white transition duration-300 ease-in-out p-1 rounded-md">
                  <Link href="/category/2">Paisajes</Link>
                </li>
                <li className="hover:bg-black hover:text-white transition duration-300 ease-in-out p-1 rounded-md">
                  <Link href="/category/4">Lugares históricos</Link>
                </li>
                <li className="hover:bg-black hover:text-white transition duration-300 ease-in-out p-1 rounded-md">
                  <Link href="/category/3">Ciudades</Link>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      <Link href="/about" className={`${oi.className}`}>
        About
      </Link>
      <Link href="/contact" className={`${oi.className}`}>
        Contact
      </Link>
    </div>
  );
}

export default Navbar;

