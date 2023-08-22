import React from "react";
import ProductDetail from "./ProductDetail";

const Cart = () => {
  return (
    <>
      {alert("Cart is opened")}
      <h1>Cart here</h1>
      <ProductDetail />
      <span>Total price: ₹price</span>
      <button>Proceed to payment</button>
    </>
  );
};

export default Cart;
