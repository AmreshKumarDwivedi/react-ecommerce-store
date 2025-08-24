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
          userQuantity: 1,
        })),
      };
      setProduct(updated);
      setCurrentVariant({ ...updated.variants[0] });
    }
  }, [id]);

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
    return <p className="text-center">Loading product...</p>;
  }

  return (
    <div className="mx-auto max-w-[1100px] px-4">
      <div className="flex flex-col md:flex-row md:gap-10 md:pt-20 md:pb-20">
        {/* Left Side Image */}
        <div className="w-full md:w-1/2 mx-auto max-w-[500px] rounded-[20px]">
          {product?.image || (product?.images && product.images.length > 0) ? (
            <img
              src={product?.images?.[0] || product?.image}
              alt={product?.name || "Product Image"}
              className="w-full h-auto object-cover rounded-[20px]"
            />
          ) : (
            <div className="w-full h-[300px] bg-gray-100 flex items-center justify-center rounded-[20px]">
              No Image
            </div>
          )}
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 text-left">
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
                    {(currentVariant.compareAtPrice - currentVariant.price).toFixed(0)}
                  </span>
                </>
              )}
          </p>
          <p>( MRP Inclusive of Taxes )</p>

          {/* Variants */}
          <div className="flex gap-4 flex-wrap md:justify-start mt-4">
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
          <QuantityAdd item={currentVariant}  updateQuantity={handleUpdateQuantity} productName={product.name} />
      

          {/* Description */}
          <p className="mt-6 text-gray-700 max-w-[400px] mx-auto md:mx-0">
            {product.description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;