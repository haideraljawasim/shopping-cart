import React from "react";
import useLocalStorageState from "use-local-storage-state";
import Quantifier from "../Quantifier/Quantifier";

function Cart() {
  const [cart, setCart] = useLocalStorageState("cart", { defaultValue: {} });
  const cartArray = Object.values(cart);

  const updateCart = (productId, quantity) => {
    setCart((prevCart) => {
      if (quantity > 0) {
        return {
          ...prevCart,
          [productId]: { ...prevCart[productId], quantity },
        };
      } else {
        // If quantity is 0, remove the item from the cart
        const { [productId]: _, ...newCart } = prevCart;
        return newCart;
      }
    });
  };

  const handleIncrease = (product) =>
    updateCart(product.id, product.quantity + 1);
  const handleDecrease = (product) =>
    updateCart(product.id, product.quantity - 1);

  return (
    <div className="container mx-auto p-5">
      <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>

      {cartArray.length > 0 ? (
        cartArray.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-4 m-4 p-5 bg-white rounded-lg shadow-md border border-gray-300"
          >
            <div className="flex items-center justify-between">
              <img
                src={item.image}
                alt={item.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div className="flex flex-col flex-grow ml-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">Price: ${item.price}</p>
                <div className="flex items-center mt-2">
                  <button
                    className="px-4 py-2 bg-gray-300 text-black rounded-lg hover:bg-gray-400"
                    onClick={() => handleDecrease(item)}
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="mx-4 text-lg">{item.quantity}</span>
                  <button
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    onClick={() => handleIncrease(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-lg text-center text-gray-500">Your cart is empty.</p>
      )}

      <Quantifier cartArray={cartArray} />
    </div>
  );
}

export default Cart;
