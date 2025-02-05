import React, { useEffect, useState } from "react";

function Quantifier({ cartArray }) {
  const totalQuantity = cartArray.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cartArray
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div>
      <h2>Cart Summary</h2>
      {cartArray.length > 0 ? (
        <>
          <p>Total Items: {totalQuantity}</p>
          <p>Total Price: ${totalPrice}</p>
        </>
      ) : (
        <p>Cart is empty</p>
      )}
    </div>
  );
}

export default Quantifier;
