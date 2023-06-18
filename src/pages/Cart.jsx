import React from "react";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/slices/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
    // console.log(productId);
  };
  return (
    <div className="cart">
      <h2>Cart</h2>
      {products.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt="" />
          <div>
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
          </div>
          <button onClick={() => handleRemove(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
