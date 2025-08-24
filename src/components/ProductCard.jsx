import React from "react";
import { Link } from "react-router-dom";

function ProductCard({ product, addToCart }) {

  function handleize(text) {
    return text
      .toLowerCase()        // lowercase
      .replace(/\s+/g, '-') // spaces ko -
      .replace(/[^a-z0-9-]/g, ''); // special chars remove
  }


  return (
    <div
      key={product.variants?.[0]?.id || product.id}
      className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform p-4 relative group"
    >
      {/* Tag Badge */}
      {product.tag && (
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {product.tag}
        </span>
      )}

      {/* Product Image */}
      <Link to={`/products/${handleize(product.name)}/${product.id}`}>
        <div className="-hidden rounded-lg">
          <img
            src={product.image || product.images?.[0]}
            alt={product.name}
            className="rounded-lg w-full h-56 object-cover transform group-hover:scale-105 transition"
          />
        </div>

        {/* Product Info */}
        <div className="mt-4">
          <h4 className="text-lg font-semibold text-gray-800 truncate">
            {product.name}
          </h4>
          <p className="text-xl font-bold text-green-600 mt-1">
            ₹{product.variants?.[0]?.price || product.price || "N/A"}
          </p>
        </div>
      </Link>
      {/* Add to Cart */}
      <div className="opacity-0 group-hover:opacity-100 transition duration-300 mt-4">
        <button
          className="w-full bg-green-600 text-white py-2 rounded-xl font-medium hover:bg-green-700 transition"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
