"use client";
import { Menu } from "lucide-react";
import { Oi } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function NavbarMovil() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div>
      <Menu
        strokeWidth={3}
        size={40}
        className="cursor-pointer"
        onClick={() => {
          setDrawerOpen(!drawerOpen);
        }}
      />
      <div
        className={`fixed top-0 left-0 bg-white h-full w-64 text-black transform transition-transform duration-500 ease-in-out z-50
            ${drawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex flex-col p-10 gap-10">
          <Link
            href={"/"}
            className={`hover:font-bold text-xl text-black ${oi.className}`}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            Home
          </Link>
          <Link
            href={"/shop"}
            className={`hover:font-bold text-xl text-black ${oi.className}`}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            Shop
          </Link>
          <Link
            href={"/about"}
            className={`hover:font-bold text-xl text-black ${oi.className}`}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            About
          </Link>
          <Link
            href={"/contact"}
            className={`hover:font-bold text-xl text-black ${oi.className}`}
            onClick={() => {
              setDrawerOpen(false);
            }}
          >
            Contatto
          </Link>
        </div>
      </div>
      {drawerOpen! && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
          onClick={() => {
            setDrawerOpen(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default NavbarMovil;
