import React from "react";
// import ProductDetail from "./components/ProductDetail";
import ProductListing from "./components/ProductListing";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <ProductListing />

        {/* <Route path="/" element={<ProductListing />} /> */}
        {/* <Route path="/Cart" element={<Cart />} /> */}
        {/* <Link to="/Cart">Cart</Link> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
