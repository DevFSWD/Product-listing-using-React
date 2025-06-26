import React from 'react';

const CartPage = ({ cartItems, onRemoveFromCart }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Cart</h2>
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <ul className="space-y-4 mb-4">
            {cartItems.map((item, index) => (
              <li key={index} className="bg-white p-4 rounded shadow flex justify-between items-center">
                <div>
                  <span className="font-medium">{item.name}</span>
                  <span className="block">₹{item.price}</span>
                </div>
                <button
                  onClick={() => onRemoveFromCart(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="text-right font-bold text-lg">
            Total: ₹{totalAmount}
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage