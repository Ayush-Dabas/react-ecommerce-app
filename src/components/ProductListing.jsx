import React from "react";
import ProductDetail from "./ProductDetail";
// import Cart from "./Cart";
import {
  prod1,
  prod2,
  prod3,
  prod4,
  prod5,
  prod6,
  prod7,
  prod8,
} from "../utils/index";

const ProductListing = () => {
  return (
    <>
      <ProductDetail
        name={prod1.name}
        image={prod1.image}
        price={prod1.price}
        description={prod1.description}
        producer={prod1.producer}
      />
      <ProductDetail
        name={prod2.name}
        image={prod2.image}
        price={prod2.price}
        description={prod2.description}
        producer={prod2.producer}
      />
      <ProductDetail
        name={prod3.name}
        image={prod3.image}
        price={prod3.price}
        description={prod3.description}
        producer={prod3.producer}
      />
      <ProductDetail
        name={prod4.name}
        image={prod4.image}
        price={prod4.price}
        description={prod4.description}
        producer={prod4.producer}
      />
      <ProductDetail
        name={prod5.name}
        image={prod5.image}
        price={prod5.price}
        description={prod5.description}
        producer={prod5.producer}
      />
      <ProductDetail
        name={prod6.name}
        image={prod6.image}
        price={prod6.price}
        description={prod6.description}
        producer={prod6.producer}
      />
      <ProductDetail
        name={prod7.name}
        image={prod7.image}
        price={prod7.price}
        description={prod7.description}
        producer={prod7.producer}
      />
      <ProductDetail
        name={prod8.name}
        image={prod8.image}
        price={prod8.price}
        description={prod8.description}
        producer={prod8.producer}
      />
    </>
  );
};

export default ProductListing;
