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
      <button onClick={navigateToCart} className=" relative">
        <span className="absolute w-6 h-6 rounded-3xl bg-blue-500 text-white">
          {productsCount}
        </span>
        <img src={cart} alt="" />
      </button>
    </div>
  );
}

export default CartWidget;
