import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
        <div className="relative z-10 flex flex-col items-center w-full">
          <h1 className="mt-4 font-extrabold leading-tight text-center text-white text-7xl sm:text-8xl">Free Palestine</h1>
          <p className="mt-4 font-extrabold leading-tight text-center text-white text-lg sm:text-xl max-w-md">Cari produk yang masih mendukung penjajahan saudara kita di Palestina</p>
          <Link href="/search" className="block px-4 py-3 mt-10 text-lg font-bold text-white uppercase bg-gray-800 hover:bg-gray-900">
            Mulai Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Page;
