import React from "react";
import useLocalStorageState from "use-local-storage-state";
import Quantifier from "../Quantifier/Quantifier";

function Cart() {
  const [cart, setCart] = useLocalStorageState("cart", { defaultValue: {} });

  const cartArray = Object.values(cart);
  function handleIncrease(item) {
    const newCart = {
      ...cart,
      [item.id]: { ...item, quantity: item.quantity + 1 },
    };
    setCart(newCart);
  }

  return (
    <div>
      {cartArray.length > 0 ? (
        cartArray.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-3 m-4 border border-blue-500 p-4 w-fit"
          >
            <img src={item.image} alt={item.title} width="100" />
            <h3>{item.title}</h3>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <button className="w-4 h-4" onClick={() => handleIncrease(item)}>
              +
            </button>
          </div>
        ))
      ) : (
        <p>Cart is empty</p>
      )}
      <Quantifier cartArray={cartArray} />
    </div>
  );
}

export default Cart;
