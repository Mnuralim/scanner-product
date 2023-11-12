import React from "react";

interface Props {
  product: any;
}

const Result = ({ product }: Props) => {
  return <div>{product.name}</div>;
};

export default Result;
