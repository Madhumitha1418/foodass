import React, { useState } from "react";
import data from "../assets/Products.json";
import { Product } from "../Components/Product";
import "./Home.css";

export const Home = ({ cart, setCart }) => {
  const [Products] = useState(data);

  return (
    <div className="Product-Container">
      {Products.map((item) => (
        <Product 
          key={item.id} 
          Product={item} 
          cart={cart} 
          setCart={setCart} 
        />
      ))}
    </div>
  );
};