"use client";
import React, { useState } from "react";
import Form from "./components/Form";
import products from "@/data/data";
import ProductCard from "../components/ProductCard";

const Page = () => {
  const [name, setName] = useState<string>("");
  const [numberBarcode, setNumberBarcode] = useState<string>("");
  const [allProducts, setAllProducts] = useState(products);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.preventDefault();

    const filterProduct = products.filter((el) => {
      const isNameMatch = name ? el.name.toLowerCase().includes(name.toLowerCase()) : true;
      const isBarcodeMatch = numberBarcode ? el.qr.toLowerCase().includes(numberBarcode.toLowerCase()) : true;

      return isNameMatch && isBarcodeMatch;
    });

    setAllProducts(filterProduct);

    return true;
  };

  return (
    <div className="relative h-screen ">
      <Form name={name} setName={setName} handleSearch={handleSearch} numberBarcode={numberBarcode} setNumberBarcode={setNumberBarcode} />
      <p className="text-red-500 mb-5 px-2">
        *<span className="text-white text-sm"> Filter dengan salah satu pilihan input diatas</span>
      </p>
      {allProducts.length === 0 && <p className="text-lg text-center text-white font-semibold mx-auto">Produk ini tidak masuk daftar boikot</p>}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-4 mx-auto">
        {allProducts.map((data) => (
          <ProductCard key={data.id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default Page;
