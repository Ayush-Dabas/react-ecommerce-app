import React from "react";
import ProductDetail from "./ProductDetail";

const Cart = () => {
  return (
    <>
      Cart here
      <ProductDetail />
      <span>Total price: ₹price</span>
      <button>Proceed to payment</button>
    </>
  );
};

export default Cart;
