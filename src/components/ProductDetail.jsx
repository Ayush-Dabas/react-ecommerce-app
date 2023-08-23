import React from "react";

const ProductDetail = ({ name, image, price, description, producer }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} alt="logo" />
      <br />
      <span>Price: ₹{price}</span>
      <section className="description">
        <p>
          Product details:
          <br />
          {description}
          <br />
          Sold by: {producer}
        </p>
      </section>
      <button>Add to Cart</button>
    </>
  );
};

export default ProductDetail;
