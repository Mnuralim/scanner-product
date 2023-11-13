"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import Result from "./components/Result";
import Link from "next/link";
import { KeyedMutator } from "swr";
import { useProduct } from "@/utils/swr";

const Page: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const { product, isLoading, mutate }: { product: IProduct[]; isLoading: boolean; mutate: KeyedMutator<any> } = useProduct(scanResult as string);

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
    <div className="pt-20 relative mx-3">
      <div className="bg-white bg-opacity-30">
        <div id="reader" className="p-5"></div>
      </div>
      {scanResult && product && <Result setScanResult={setScanResult} product={product} />}
      {scanResult && !product && <p className="text-white  bg-black px-2 mx-2 text-center font-bold">Produk ini tidak masuk daftar boikot</p>}
      {scanResult && (
        <Link href={"/"} className="mt-3 text-white">
          Kembali
        </Link>
      )}
    </div>
  );
};

export default Page;
