import React, { useEffect, useState, useContext } from "react";
import products from "../data/Products.json";
import { useParams } from "react-router-dom";
import QuantityAdd from "./QuantityAdd";
import { CartContext } from "../context/CartContext";

function ProductDetail() {
  const [product, setProduct] = useState(null);
  const [currentVariant, setCurrentVariant] = useState(null);
  const { addToCart } = useContext(CartContext);

  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const merged = Object.values(products).flat();
    const foundProduct = merged.find((item) => String(item.id) === String(id));

    if (foundProduct) {
      const updated = {
        ...foundProduct,
        variants: foundProduct.variants.map((v) => ({
          ...v,
          userQuantity: 1, // Initialize user-selected quantity to 1
        })),
      };
      setProduct(updated);
      setCurrentVariant({ ...updated.variants[0] }); // Set first variant with userQuantity: 1
    }
  }, [id]);

  // Update user-selected quantity of variant
  const handleUpdateQuantity = (variantId, newQty) => {
    setProduct((prev) => ({
      ...prev,
      variants: prev.variants.map((v) =>
        v.variantId === variantId ? { ...v, userQuantity: newQty } : v
      ),
    }));

    if (currentVariant && currentVariant.variantId === variantId) {
      setCurrentVariant((prev) => ({ ...prev, userQuantity: newQty }));
    }
  };

 
  const changeVariants = (item) => {
    setCurrentVariant(item);
  };

  if (!product || !currentVariant) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="mx-auto max-w-[1100px] flex justify-between pt-20 pb-20 gap-10">
      {/* Left Side Image */}
      <div className="w-1/2 rounded-[20px]">
        {product.image || (product.images && product.images.length > 0) ? (
          <img
            src={product.images[0] || product.image}
            alt={product.name}
            className="w-full object-cover rounded-[20px]"
          />
        ) : (
          <div className="w-[500px] h-[500px] bg-gray-100 flex items-center justify-center">
            No Image
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="w-1/2">
        <h1 className="text-[34px] leading-[40px] font-normal">
          {product.name}
        </h1>

        {/* Price Section */}
        <p className="text-[28px] leading-tight font-normal pt-4 pb-4">
          ₹{currentVariant.price}{" "}
          {currentVariant.compareAtPrice &&
            currentVariant.compareAtPrice > currentVariant.price && (
              <>
                <s className="text-[20px]">₹{currentVariant.compareAtPrice}</s>
                <span className="ml-2 text-green-700 text-[16px] leading-[10px]">
                  {(
                    ((currentVariant.compareAtPrice - currentVariant.price) /
                      currentVariant.compareAtPrice) *
                    100
                  ).toFixed(0)}
                  % OFF
                </span>
                <span className="ml-2 text-red-500 text-[16px]">
                  You’ll save ₹
                  {(currentVariant.compareAtPrice - currentVariant.price).toFixed(
                    0
                  )}
                </span>
              </>
            )}
        </p>
        <p>( MRP Inclusive of Taxes )</p>

        {/* Variants */}
        <div className="flex gap-4 flex-wrap">
          {product.variants.map((item) => (
            <div
              key={item.variantId}
              className={`w-[120px] text-center border rounded p-2 cursor-pointer ${
                currentVariant.variantId === item.variantId
                  ? "border-green-600"
                  : "border-gray-300"
              }`}
              onClick={() => changeVariants(item)}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-[100px] h-[100px] object-cover mx-auto"
                />
              )}
              <h3 className="mt-2 text-sm">{item.name}</h3>
            </div>
          ))}
        </div>

        {/* Quantity & Add to Cart */}
        <QuantityAdd
          item={currentVariant}
          updateQuantity={handleUpdateQuantity}
        />
        <div className="group-hover:opacity-100 transition duration-300 mt-4">
         <div className="group-hover:opacity-100 transition duration-300 mt-4">
  <button
    className={`w-full bg-green-600 text-white py-2 rounded-xl font-medium hover:bg-green-700 transition ${
      currentVariant.quantity < 1 ? "opacity-50 cursor-not-allowed" : ""
    }`}
    disabled={currentVariant.quantity < 1}
    onClick={() => addToCart(currentVariant)}
  >
    {currentVariant.quantity > 0 ? "Add To Cart" : "Sold Out"}
  </button>
</div>
        </div>

        {/* Description */}
        <p className="mt-6 text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;