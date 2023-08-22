import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import ProductListing from "./components/ProductListing";
import Cart from "./components/Cart";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="App">
        <ul className="App-header">
          <li>
            <Link className="list" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="list" to="/productlisting">
              Products
            </Link>
          </li>
          <li>
            <Link className="list" to="/cart">
              Cart
            </Link>
          </li>
        </ul>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/productlisting" element={<ProductListing />} />
          <Route exact path="/cart" element={<Cart />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
