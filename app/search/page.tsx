"use client";
import React, { useState } from "react";
import Form from "./components/Form";
import products from "@/data/data";

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
    <div className="relative h-screen flex flex-col items-center justify-center">
      <Form name={name} setName={setName} handleSearch={handleSearch} />
      {allProducts.map((data) => (
        <p className="text-white" key={data.id}>
          {data.name}
        </p>
      ))}
    </div>
  );
};

export default Page;
