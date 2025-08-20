import React, { useState, useEffect, useContext } from "react";
import products from "../data/Products.json";
import { CartContext } from "../context/CartContext";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function AllProducts() {
  const [allProduct, setProduct] = useState([]);
  const { addToCart } = useContext(CartContext);
  const { category } = useParams();

  const formattedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  useEffect(() => {
    const merged = Object.values(products).flat();

    if (category === "all") {
      setProduct(merged);
    } else {
      const getFormattedData = products[formattedCategory] || [];
      setProduct(getFormattedData);
    }
  }, [category]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Heading */}
      <h1 className="text-3xl font-extrabold text-gray-800 text-center mb-10">
        {category === "all" ? "All Products" : formattedCategory}
      </h1>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {allProduct.length > 0 ? (
          allProduct.map((product) => (
            <ProductCard key={product.variants[0].id} product={product} addToCart={addToCart} />
          ))
        ) : (
          <h2 className="col-span-full text-center text-xl font-semibold text-gray-500">
            No Products Found
          </h2>
        )}
      </div>
    </div>
  );
}

export default AllProducts;
