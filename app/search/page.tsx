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
  console.log(product);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name) {
      setQuery(name);
    } else {
      setQuery("");
    }
    mutate();
  };

  if (isLoading) return <p>loading...</p>;

  return (
    <div className="absolute">
      <Form name={name} setName={setName} handleSearch={handleSearch} />
      {product.length === 0 && <p className="text-lg text-center text-white font-semibold mx-auto">Produk ini tidak masuk daftar boikot</p>}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-4 mx-auto">
        {product?.map((data) => (
          <ProductCard key={data._id} product={data} />
        ))}
      </div>
    </div>
  );
};

export default Page;
