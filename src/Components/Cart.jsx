import React, { useEffect, useState } from 'react';
import "./Cart.css";

export const Cart = ({ cart }) => {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseInt(curr.amt), 0));
  }, [cart]);

  return (
    <>
      <h1 className="Cart-heading">Cart Products</h1>
      <div className="Cart-Container">
        {cart.map((Product) => (
          <div className="Cart-Product" key={Product.id}>
            <div className="img">
              <img src={Product.pic} alt="image"></img>
            </div>
            <div className="Cart-Product-details">
              <h3>{Product.name}</h3> {/* Fixed reference to Product.name */}
              <p>Price RS:{Product.amt}</p>
            </div>  
          </div>
        ))}
      </div>
      <h2 className="Cart-amt">Total Amount Rs:{total}</h2>
    </>
  );
};
