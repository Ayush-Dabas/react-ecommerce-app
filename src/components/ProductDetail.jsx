import React from "react";
import "./ProductDetail.css";

var totalPrice = 0;
const ProductDetail = ({ id, name, image, price, description, producer }) => {
  function addCart(price, id) {
    totalPrice = totalPrice + { price };
    console.log({ id });
    console.log(totalPrice);
  }

  async function buttoncounter() {
    console.log("working");
    addCart({ price, id });
  }
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
      <button onClick={buttoncounter}>Add</button>
    </div>
  );
};

export default ProductDetail;
