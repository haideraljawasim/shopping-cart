import React from "react";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.png";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import useLocalStorageState from "use-local-storage-state";

function Header() {
  const [cart, setCart] = useLocalStorageState("cart", { defaultValue: {} });
  const productsCount = Object.values(cart).reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div className="flex justify-between m-4 border-b-2 p-4 border-gray-300  bg-blue-950 ">
      <div className="flex-[0.1] flex justify-between w-[50%] items-center  ">
        <Link to="/">
          <img src={logo} className="w-10" />
        </Link>
        <Link to="/products">
          <span className="hover:text-gray-500 hover:underline font-bold font-serif text-white ">
            shop
          </span>
        </Link>
      </div>
      <div className="w-10">
        <CartWidget productsCount={productsCount} />
      </div>
    </div>
  );
}

export default Header;
