import React from "react";

interface Props {
  product: IProduct;
  isLoading: boolean;
}

const ProductCard = ({ product, isLoading }: Props) => {
  return isLoading || !product ? (
    <div className="max-w-md bg-white bg-opacity-75 rounded-md overflow-hidden shadow-md mx-2">
      <div className="w-full h-48 object-cover bg-gray-200 rounded-md"></div>
      <div className="p-4">
        <h2 className="text-xl font-semibold h-2 w-full bg-gray-200 rounded-md"></h2>
        <p className="text-sm h-2 w-full bg-gray-200 rounded-md">Brand: XYZ</p>
        <p className="text-sm h-2 w-full bg-gray-200 rounded-md">Asal: </p>
        <p className="text-gray-700 mt-2 h-2 w-full bg-gray-200 rounded-md"></p>
      </div>
    </div>
  ) : (
    <div className="max-w-md bg-white bg-opacity-75 rounded-md overflow-hidden shadow-md mx-2">
      <img className="w-full h-48 object-cover" src={product.imageUrl} alt="Product Image" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
        <p className="text-sm text-gray-600">Brand: XYZ</p>
        <p className="text-sm text-gray-600">Asal: </p>
        <p className="text-gray-700 mt-2"></p>
      </div>
    </div>
  );
};

export default ProductCard;
