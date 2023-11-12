"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import products from "@/data/data";
import Result from "./components/Result";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const router = useRouter();
  const filterProduct = products.filter((el) => el.qr.toLowerCase().includes(scanResult as string));
  const product = filterProduct[0];

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 250,
          height: 250,
        },
        fps: 5,
      },
      true
    );

    scanner.render(success, error);

    function success(result: string) {
      scanner.clear();
      setScanResult(result);
    }
    function error(err: any) {
      console.warn(err);
    }

    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="pt-20 relative">
      <div className="bg-white bg-opacity-30">
        <div id="reader" className="p-5"></div>
      </div>
      {scanResult && filterProduct.length !== 0 && <Result setScanResult={setScanResult} product={product} />}
      {scanResult && filterProduct.length === 0 && <p className="text-white  bg-black px-2 mx-2 text-center font-bold">Produk ini tidak masuk daftar boikot</p>}
      {scanResult && (
        <Link href={"/"} className="mt-3 text-white">
          Kembali
        </Link>
      )}
    </div>
  );
};

export default Page;
