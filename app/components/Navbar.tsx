"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  return (
    <header className="absolute top-0 left-0 w-full z-20">
      <nav className="flex flex-wrap justify-between items-center px-3 gap-3 mt-3 md:justify-center md:gap-14">
        <Link href={"/"} className="text-sm md:text-lg text-white uppercase cursor-pointer hover:text-gray-300">
          Beranda
        </Link>
        <Link href={"/search"} className="text-sm md:text-lg text-white uppercase cursor-pointer hover:text-gray-300">
          Cari
        </Link>
        <Link href={"/scan"} className="text-sm md:text-lg text-white uppercase cursor-pointer hover:text-gray-300">
          Scan
        </Link>
        <Link href={"/about"} className="text-sm md:text-lg text-white uppercase cursor-pointer hover:text-gray-300">
          Tentang
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
