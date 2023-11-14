"use client";
import React, { useState } from "react";
import Form from "./components/Form";
import ProductCard from "../components/ProductCard";
import { useProduct } from "@/utils/swr";
import { KeyedMutator } from "swr";

const Page = () => {
  const [name, setName] = useState<string>("");
  const [query, setQuery] = useState<string>("");

  const { product, isLoading, mutate }: { product: IProduct[]; isLoading: boolean; mutate: KeyedMutator<any> } = useProduct(undefined, { name: query });

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      setQuery(name);
    } else {
      setQuery("");
    }
  };

  if (isLoading || !product)
    return (
      <div className="h-screen inset-0 bg-black bg-opacity-40 w-full flex items-center justify-center">
        <svg className="container" x="0px" y="0px" viewBox="0 0 55 23.1" height="23.1" width="55" preserveAspectRatio="xMidYMid meet">
          <path
            className="track"
            fill="none"
            strokeWidth="4"
            pathLength="100"
            d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
          />
          <path
            className="car"
            fill="none"
            strokeWidth="4"
            pathLength="100"
            d="M26.7,12.2c3.5,3.4,7.4,7.8,12.7,7.8c5.5,0,9.6-4.4,9.6-9.5C49,5,45.1,1,39.8,1c-5.5,0-9.5,4.2-13.1,7.8l-3.4,3.3c-3.6,3.6-7.6,7.8-13.1,7.8C4.9,20,1,16,1,10.5C1,5.4,5.1,1,10.6,1c5.3,0,9.2,4.5,12.7,7.8L26.7,12.2z"
          />
        </svg>
      </div>
    );
  return (
    <div className="relative flex justify-center w-full">
      <div>
        <Form name={name} setName={setName} handleSearch={handleSearch} />
        {product?.length === 0 && <p className="text-lg text-center text-white font-semibold mx-auto">Produk ini tidak masuk daftar boikot</p>}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-4 ">
          {product?.map((data) => (
            <ProductCard key={data._id} product={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
