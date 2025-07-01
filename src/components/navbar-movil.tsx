"use client";
import { ArrowBigLeft, ArrowBigRight, Menu } from "lucide-react";
import { Oi } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const oi = Oi({
  variable: "--font-oi",
  weight: ["400"],
  subsets: ["latin"],
});

function NavbarMovil() {
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
  const [shopMenuOpen, setShopMenuOpen] = useState<boolean>(false);

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
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => {
              setShopMenuOpen(true);
            }}
          >
            <p className={`hover:font-bold text-xl text-black ${oi.className}`}>
              Shop
            </p>
            <ArrowBigRight size={40} strokeWidth={1} />
          </div>
          <div
            className={`fixed top-0 left-0 bg-white shadow-md transform transition-transform duration-500 ease-in-out z-40 h-full w-64
    ${shopMenuOpen ? "translate-x-0" : "-translate-x-full"}`}
          >
            <div className="flex flex-col py-4 px-10 gap-4">
              <ArrowBigLeft
                size={40}
                strokeWidth={1}
                className="cursor-pointer"
                onClick={() => {
                  setShopMenuOpen(false);
                }}
              />
              <ul className={`mt-4 space-y-4 text-base font-bold`}>
                <li>
                  <Link
                    href={"/shop"}
                    onClick={() => {
                      setShopMenuOpen(false);
                      setDrawerOpen(false);
                    }}
                  >
                    Todas las fotos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/1"
                    onClick={() => {
                      setShopMenuOpen(false);
                      setDrawerOpen(false);
                    }}
                  >
                    Retratos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/2"
                    onClick={() => {
                      setShopMenuOpen(false);
                      setDrawerOpen(false);
                    }}
                  >
                    Paisajes
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/3"
                    onClick={() => {
                      setShopMenuOpen(false);
                      setDrawerOpen(false);
                    }}
                  >
                    Ciudad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/category/4"
                    onClick={() => {
                      setShopMenuOpen(false);
                      setDrawerOpen(false);
                    }}
                  >
                    Lugares históricos
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
            setShopMenuOpen(false);
          }}
        ></div>
      )}
    </div>
  );
}

export default NavbarMovil;
