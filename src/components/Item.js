import React from "react";
import { useState } from "react";


function Item({ name, category }) {
    const[isInCart, setIsInCart] =useState(false)

//this function notes on when adding or removing from cart
    const toggleCartStatus = () => {
      setIsInCart(!isInCart);
    };

  return (
<li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={toggleCartStatus}>
        {isInCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
