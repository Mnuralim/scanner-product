"use client";
import React, { useState } from "react";
import Form from "./components/Form";
import products from "@/data/data";
import ProductCard from "../components/ProductCard";

const Page = () => {
  const [name, setName] = useState<string>("");
  const [allProducts, setAllProducts] = useState(products);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const filterProduct = products.filter((el) => el.name.toLowerCase().includes(name.toLowerCase()));
    setAllProducts(filterProduct);

    return true;
  };

  return (
    <div className="relative h-screen ">
      <Form name={name} setName={setName} handleSearch={handleSearch} />
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
