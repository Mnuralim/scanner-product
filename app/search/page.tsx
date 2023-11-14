"use client";
import React, { useState } from "react";
import Form from "./components/Form";
import ProductCard from "../components/ProductCard";
import { useProduct } from "@/utils/swr";
import { KeyedMutator } from "swr";
import { infinity } from "ldrs";

infinity.register();

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
        <l-infinity size="100" stroke="4" stroke-length="0.15" bg-opacity="0.1" speed="1.3" color="white"></l-infinity>
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
