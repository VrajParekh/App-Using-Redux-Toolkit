import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart);

  return (
    <nav>
      <div className="logo">LOGO</div>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <div className="cart-items">
          <p>Cart items : </p>
          {products.length}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
