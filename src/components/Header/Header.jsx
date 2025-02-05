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
    <div className="flex justify-between m-4">
      <Link to="/">
        <img src={logo} className="w-10" />
      </Link>
      <div className="font-black font-serif">My bigest project</div>
      <div className="w-10">
        <CartWidget productsCount={productsCount} />
      </div>
    </div>
  );
}

export default Header;
