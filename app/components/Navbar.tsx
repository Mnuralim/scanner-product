"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-20">
      <nav className="container px-6 py-4 mx-auto md:px-12">
        <div className="items-center justify-center md:flex">
          <div className={`items-center flex }`}>
            <Link href={"/"} className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
              Beranda
            </Link>
            <Link href={"/search"} className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
              Cari
            </Link>
            <Link href={"/scan"} className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
              Scan
            </Link>
            <Link href={"/"} className="mx-3 text-lg text-white uppercase cursor-pointer hover:text-gray-300">
              Tentang
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
