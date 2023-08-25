import React, { useState } from "react";
import "./ProductDetail.css";

// var totalPrice = 0;
const ProductDetail = ({ id, name, image, price, description, producer }) => {
  const [cart, setCart] = useState();
  const addToCart = (id) => {};
  return (
    <div className="detail">
      <h2>{name}</h2>
      <a href="/productlisting">
        <img src={image} alt="logo" />
      </a>
      <br />
      <span>Price: ₹{price}</span>
      <br />
      <section className="description">
        <p>
          Product details:
          <br />
          {description}
          <br />
          <br />
          Sold by: {producer}
        </p>
      </section>
      <button>Add</button>
    </div>
  );
};

export default ProductDetail;
