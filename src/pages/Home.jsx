import React from "react";
import Products from "../components/Products";
const Home = () => {
  return (
    <div>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          margin: "25px 0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        WELCOME TO THE STORE
      </h1>
      <h2
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        Products
      </h2>
      <Products />
    </div>
  );
};

export default Home;
