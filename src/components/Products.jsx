import React, { useEffect, useState } from "react";
import "../styles/products.css";
import { add } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      setProducts(products);
      // console.log(products);
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const addHandler = (product) => {
    dispatch(add(product));
    toast.success("Added to cart");
  };

  return (
    <div className="products">
      {products.map((item) => (
        <ProductCard
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          handler={addHandler}
          key={item.id}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ id, image, price, title, handler }) => (
  <div className="product-card">
    <img src={image} alt="" />
    <h4>{title}</h4>
    <h5>Price: ${price}</h5>
    <button onClick={() => handler({ id, image, price, title, quantity: 1 })}>
      Add to Cart
    </button>
  </div>
);

export default Products;
