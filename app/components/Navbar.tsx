"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container px-6 py-4 mx-auto md:px-12">
        <div className="items-center justify-center md:flex">
          <div className={`items-center flex`}>
            <Link href={"/"} className={`mx-3 text-lg  uppercase cursor-pointer hover:text-gray-300 ${pathName === "/scan" ? "text-black" : "text-white"}`}>
              Beranda
            </Link>
            <Link href={"/search"} className={`mx-3 text-lg  uppercase cursor-pointer hover:text-gray-300 ${pathName === "/scan" ? "text-black" : "text-white"}`}>
              Cari
            </Link>
            <Link href={"/scan"} className={`mx-3 text-lg uppercase cursor-pointer hover:text-gray-300 ${pathName === "/scan" ? "text-black" : "text-white"}`}>
              Scan
            </Link>
            <Link href={"/"} className={`mx-3 text-lg  uppercase cursor-pointer hover:text-gray-300 ${pathName === "/scan" ? "text-black" : "text-white"}`}>
              Tentang
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
