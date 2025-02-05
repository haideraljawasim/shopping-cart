import React, { useState } from "react";
import cart from "../../assets/cart.png";
import { useNavigate } from "react-router-dom";

function CartWidget({ productsCount }) {
  const navigate = useNavigate();
  const navigateToCart = () => {
    navigate("/cart");
  };
  return (
    <div>
      <button onClick={navigateToCart} className="">
        <span className="absulate">{productsCount}</span>
        <img src={cart} alt="" />
      </button>
    </div>
  );
}

export default CartWidget;
