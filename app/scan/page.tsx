"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Page: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);

  useEffect(() => {
    const scanner = new Html5QrcodeScanner(
      "reader",
      {
        qrbox: {
          width: 1000,
          height: 1000,
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

    // Cleanup when the component unmounts
    return () => {
      scanner.clear();
    };
  }, []);

  return (
    <div className="bg-white relative h-screen">
      <div id="reader"></div>
      {scanResult && <p>{scanResult}</p>}
    </div>
  );
};

export default Page;
