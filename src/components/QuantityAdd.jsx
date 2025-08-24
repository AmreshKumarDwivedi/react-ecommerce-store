import React from "react";

function QuantityAdd({ item, updateQuantity }) {
  // Ensure user-selected quantity (displayed) is between 1 and the variant's stock (item.quantity)
  const handleQuantityChange = (newQty) => {
    const constrainedQty = Math.max(1, Math.min(newQty, item.stock || item.quantity)); // Use stock or quantity as max
    updateQuantity(item.variantId, constrainedQty);
  };

  return (
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
  );
}

export default QuantityAdd;