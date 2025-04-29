import React from "react";
import "./Product.css";
export const Product = ({Product,cart,setCart}) => {

    const name=Product.name.Length>21?Product.name.substring(0,20)+"..":Product.name;

    const addCart=()=>{
        setCart([...cart,Product])
    };
    const removeCart=()=>{
        setCart(cart.filter((c)=>c.id !==Product.id))
    };
  return (
    <div className="product">
        <div className="img">
            <img src={Product.pic} alt={Product.name}/>
        </div>
      <div className="details">
      <h3>{name}</h3>
      <p>Price Rs:{Product.amt}</p>
      {
        cart.includes(Product)?
            <button className="btnRemove" onClick={removeCart}>remove from Cart</button>
        :
            <button onClick={addCart}>Add to Cart</button>
      }
      </div>
    </div>
  );
};