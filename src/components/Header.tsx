/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Cart from "./cart-header";
import Navbar from "./navbar-header";


function Header() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full md:h-56 h-32 z-30 top-0 left-0 bg-white content-center ${
        scrolled ? "shadow-md" : ""
      }`}
    >
      <div className="flex lg:px-28 md:px-16 px-8 items-center justify-between">
        <img src={"/favicon.ico"} alt="logo" className="w-20 h-20 md:w-40 md:h-40" />
        <div className="md:block hidden">
          <Navbar />
        </div>
        
        <Cart />
      </div>
    </header>
  );
}

export default Header;
