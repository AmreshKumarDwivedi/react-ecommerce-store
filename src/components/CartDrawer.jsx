import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function CartDrawer() {
  const { cart, removeFromCart, updateQuantity } = useContext(CartContext);

  
  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);


  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="h-full w-[400px] bg-white shadow-2xl flex flex-col">
      {/* Header */}
      <div className="p-4 border-b flex justify-between items-center">
        <h1 className="text-xl font-bold">
          Cart <span className="text-gray-600 text-sm">({totalItems} items)</span>
        </h1>
      </div>

      {/* Body */}
      <div className="flex-1 overflow-y-auto p-4">
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center mt-10">Your cart is empty</p>
        ) : (
          <ul className="flex flex-col gap-3">
            {cart.map((item) => (
              <li
                key={item.id}
                className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <img
                  src={item.image || item.images[0]}
                  alt={item.name}
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <p className="font-semibold">{item.productName && item.name ? item.productName : item.name}</p>
      {item.productName && item.name && (
                    <p className="text-gray-600">{item.name}</p>
                  )}
                  <p className="text-gray-700">₹{item.price}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <button
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={item.quantity}
                      min="1"
                      className="w-12 text-center border rounded"
                      onChange={(e) =>
                        updateQuantity(item.id, Number(e.target.value))
                      }
                    />
                    <button
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 font-bold ml-2 hover:text-red-700"
                >
                  ✕
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Footer */}
      {cart.length > 0 && (
        <div className="p-4 border-t">
          <div className="flex justify-between font-semibold mb-3">
            <span>Total:</span>
            <span>₹{totalPrice}</span>
          </div>
          <Link to="/checkout">
          <button className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition">
            Checkout
          </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default CartDrawer;
