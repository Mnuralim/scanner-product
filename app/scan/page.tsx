"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import products from "@/data/data";

const Page: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const filterProduct = products.filter((el) => el.qr.toLowerCase().includes(scanResult as string));

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
    <div className="bg-white relative h-screen pt-12">
      <div id="reader"></div>
      {scanResult && filterProduct.map((p) => <p key={p.id}>{p.name}</p>)}
    </div>
  );
};

export default Page;
