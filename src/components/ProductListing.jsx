import React from "react";
import ProductDetail from "./ProductDetail";
// import Cart from "./Cart";

const ProductListing = () => {
  return (
    <>
      <ProductDetail />
      <ProductDetail />
      <ProductDetail />
      <a href={"./Cart.jsx"}>Cart</a>
    </>
  );
};

export default ProductListing;
