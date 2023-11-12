"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const Page = () => {
  const [scanResult, setScanResult] = useState(null);

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
      undefined
    );

    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
    }
    function error(err) {
      console.warn(err);
    }
  }, []);

  return (
    <div>
      <div>scanner</div>
      <div id="reader"></div>
      {scanResult && <p>{scanResult}</p>}
    </div>
  );
};

export default Page;
