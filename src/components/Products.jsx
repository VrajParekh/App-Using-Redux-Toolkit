import React, { useEffect, useState } from "react";
import "../styles/products.css";
import { add } from "../store/slices/cartSlice";
import { useDispatch } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const products = await res.json();
      console.log(products);
      setProducts(products);
    };
    fetchProducts();
  }, []);

  const dispatch = useDispatch();

  const addHandler = (product) => {
    dispatch(add(product));
  };

  return (
    <div className="products">
      {products.map((product) => (
        <div className="product-card" key={product.id}>
          <img src={product.image} alt="" />
          <h4>{product.title}</h4>
          <h5>Price: ${product.price}</h5>
          <button onClick={() => addHandler(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Products;
