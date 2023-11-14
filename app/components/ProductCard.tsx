import React from "react";

interface Props {
  product: IProduct;
}

const ProductCard = ({ product }: Props) => {
  return (
    <div className="max-w-md bg-white bg-opacity-75 rounded-md overflow-hidden shadow-md mx-2">
      <img className="w-full h-48 object-cover" src={product.imageUrl} alt="Product Image" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">Brand: {product.brand}</p>
        <p className="text-sm text-gray-600">Asal: </p>
        <p className="text-gray-700 mt-2"></p>
      </div>
    </div>
  );
};

export default ProductCard;
