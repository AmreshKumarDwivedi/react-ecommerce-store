import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import ProductCard from './ProductCard';
import products from '../data/products.json'; // import json

function ProductTab() {
  // tabs json se direct
  const tabs = products;

  const [tab, setTab] = useState(Object.keys(tabs)[0]); // pehla category default
  const { addToCart } = useContext(CartContext);

  return (
    <div className="p-6">
      {/* Category buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {Object.keys(tabs).map((tabKey) => (
          <button
            key={tabKey}
            onClick={() => setTab(tabKey)}
            className={`px-5 py-2 rounded-full border transition ${
              tab === tabKey
                ? "bg-[#8B5E3C] text-white border-[#8B5E3C]"
                : "bg-white text-black border-gray-300 hover:bg-gray-100"
            }`}
          >
            {tabKey}
          </button>
        ))}
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-center">
        {tabs[tab].map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductTab;
