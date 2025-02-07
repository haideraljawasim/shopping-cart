import React from "react";

function Quantifier({ cartArray }) {
  if (!cartArray.length)
    return (
      <div className="flex flex-col items-center justify-center mt-4 p-6 border border-dashed border-gray-400 rounded-lg bg-gray-100 shadow-md">
        <p className="text-gray-500 text-lg font-medium">
          🛒 Your cart is empty!
        </p>
        <p className="text-gray-400 text-sm">Start adding some products.</p>
      </div>
    );

  const totalQuantity = cartArray.reduce(
    (total, item) => total + item.quantity,
    0
  );
  const totalPrice = cartArray
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-lg bg-gray-100">
      <h2 className="text-lg font-semibold">Cart Summary</h2>
      <p className="text-gray-700">
        Total Items: <strong>{totalQuantity}</strong>
      </p>
      <p className="text-gray-700">
        Total Price: <strong>${totalPrice}</strong>
      </p>
    </div>
  );
}

export default Quantifier;
