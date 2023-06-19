import React from "react";
import "../styles/cart.css";
import { useDispatch, useSelector } from "react-redux";
import { add, remove, decrement } from "../store/slices/cartSlice";
import { toast } from "react-hot-toast";

const Cart = () => {
  const products = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const handleRemove = (productId) => {
    dispatch(remove(productId));
    toast.success("Item removed from the cart");
    // console.log(productId);
  };

  const handleIncrement = (id) => {
    dispatch(add({ id }));
  };
  const handleDecrement = (id) => {
    dispatch(decrement(id));
  };
  return (
    <div className="cart">
      {products.length > 0 ? (
        products.map((item) => (
          <CartItem
            id={item.id}
            title={item.title}
            image={item.image}
            price={item.price}
            qty={item.quantity}
            handleRemove={handleRemove}
            handleIncrement={handleIncrement}
            handleDecrement={handleDecrement}
            key={item.id}
          />
        ))
      ) : (
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "bold",
            margin: "25px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          No items Yet
        </h1>
      )}
    </div>
  );
};
const CartItem = ({
  id,
  title,
  image,
  price,
  qty,
  handleRemove,
  handleIncrement,
  handleDecrement,
}) => {
  return (
    <div className="cart-item">
      <img src={image} alt="" />
      <div>
        <h3>{title}</h3>
        <p>Price: ${price}</p>
        <div className="quantity-container">
          <button onClick={() => handleDecrement(id)}>-</button>
          <p className="quantity">{qty}</p>
          <button onClick={() => handleIncrement(id)}>+</button>
        </div>
      </div>
      <button onClick={() => handleRemove(id)}>Remove</button>
    </div>
  );
};
export default Cart;
