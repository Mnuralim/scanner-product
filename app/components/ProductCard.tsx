import React from "react";

interface Props {
  product: any;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="max-w-md bg-white bg-opacity-75 rounded-md overflow-hidden shadow-md mx-2">
      <img className="w-full h-48 object-cover" src={product.url} alt="Product Image" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">Brand: XYZ</p>
        <p className="text-sm text-gray-600">Asal: {product.asal}</p>
        <p className="text-gray-700 mt-2">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
