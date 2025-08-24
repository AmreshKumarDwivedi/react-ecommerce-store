import React from "react";
import { CartContext } from "../context/CartContext";
import { useContext } from "react";

function QuantityAdd({ item,updateQuantity,productName }) {

  const {addToCart} = useContext(CartContext)
  // Ensure user-selected quantity (displayed) is between 1 and the variant's stock (item.quantity)
  const handleQuantityChange = (newQty) => {
    const constrainedQty = Math.max(1, Math.min(newQty, item.stock || item.quantity)); // Use stock or quantity as max
    updateQuantity(item.variantId, constrainedQty);
  };

  return (
    <>
    <div className="flex items-center gap-2 mt-4">
      <button
        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => handleQuantityChange(item.userQuantity - 1)}
        disabled={item.userQuantity <= 1}
      >
        -
      </button>
      <input
        type="number"
        value={item.userQuantity} // Bind to user-selected quantity
        min="1"
        max={item.stock || item.quantity} // Use stock or quantity as max
        className="w-12 text-center border rounded"
        onChange={(e) => handleQuantityChange(Number(e.target.value))}
      />
      <button
        className="px-2 bg-gray-200 rounded hover:bg-gray-300"
        onClick={() => handleQuantityChange(item.userQuantity + 1)}
        disabled={item.userQuantity >= (item.stock || item.quantity)} // Disable if at max
      >
        +
      </button>
    </div>
       <div className="transition duration-300 mt-4">
            <button
              className={`w-full max-w-[400px] mx-auto bg-green-600 text-white py-2 rounded-xl font-medium hover:bg-green-700 transition ${
                item.quantity < 1 ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={item.quantity < 1}
              itemID={item.quantity}
              getQuantity={item.userQuantity}
              onClick={() => addToCart({ ...item, id: item.variantId,productName:productName },item.userQuantity)}
            >
              {item.quantity > 0 ? "Add To Cart" : "Sold Out"}
            </button>
          </div>
    </>
  );
}

export default QuantityAdd;