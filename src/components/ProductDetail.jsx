import React from "react";

const ProductDetail = (prop) => {
  const Logo = "sdfj";
  console.log({ prop });
  return (
    <>
      <h2>{prop.product.name}</h2>
      <img src={prop.product.image} alt="logo" />
      <br />
      <span>Price: ₹{prop.product.price}</span>
      <section className="description">
        <p>
          Product details:
          <br />
          {prop.product.description}
          <br />
          Sold by: {prop.product.producer}
        </p>
      </section>
      <button>Add to Cart</button>
    </>
  );
};

export default ProductDetail;
