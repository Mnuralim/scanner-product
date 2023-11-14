"use client";
import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import { addNewProduct } from "@/utils/fetch";
import { useRouter } from "next/navigation";

const Page: React.FC = () => {
  const [scanResult, setScanResult] = useState<string | null>(null);
  const [nameProduct, setNameProduct] = useState<string>("");
  const [brandProduct, setBrandProduct] = useState<string>("");
  const [urlProduct, setUrlProduct] = useState<string>("");

  const router = useRouter();

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
      false
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await addNewProduct(scanResult as string, nameProduct, brandProduct, urlProduct);
      const data = await response?.json();
      console.log(data);
      if (response?.ok) {
        router.refresh();
        alert("Sukses menambahkan data");
        setBrandProduct("");
        setNameProduct(""), setScanResult(null);
        setUrlProduct("");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="pt-20 relative mx-3">
      <div className="bg-white bg-opacity-30">
        <div id="reader" className="p-5"></div>
      </div>
      {scanResult && (
        <div className="mx-auto flex flex-col max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
          <div className="p-6 mt-8">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="barcodeId"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="barcodeId"
                    placeholder="Masukan barcode id"
                    value={scanResult as string}
                    onChange={(e) => setScanResult(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex gap-4 mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="name"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="name"
                    placeholder="Nama produk"
                    value={nameProduct}
                    onChange={(e) => setNameProduct(e.target.value)}
                  />
                </div>
                <div className=" relative ">
                  <input
                    type="text"
                    id="brand"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    name="brand"
                    placeholder="Nama brand produk"
                    value={brandProduct}
                    onChange={(e) => setBrandProduct(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className=" relative ">
                  <input
                    type="text"
                    id="urlLogo"
                    className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="urlLogo"
                    value={urlProduct}
                    onChange={(e) => setUrlProduct(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex w-full my-4">
                <button
                  type="submit"
                  className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
