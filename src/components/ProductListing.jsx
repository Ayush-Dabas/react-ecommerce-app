import React from "react";
import ProductDetail from "./ProductDetail";
// import Cart from "./Cart";
import { prod1 } from "../utils/index";

const ProductListing = () => {
  return (
    <>
      <ProductDetail product={prod1} />
    </>
  );
};

export default ProductListing;
