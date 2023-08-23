import React from "react";
import "./ProductDetail.css";

const ProductDetail = ({ name, image, price, description, producer }) => {
  return (
    <div className="detail">
      <h2>{name}</h2>
      <a href="/">
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
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
