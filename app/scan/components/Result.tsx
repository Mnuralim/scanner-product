import ProductCard from "@/app/components/ProductCard";
import React from "react";

interface Props {
  product: any;
  setScanResult: React.Dispatch<React.SetStateAction<string | null>>;
}

const Result = ({ product, setScanResult }: Props) => {
  return (
    <div>
      <ProductCard product={product} />
    </div>
  );
};

export default Result;
