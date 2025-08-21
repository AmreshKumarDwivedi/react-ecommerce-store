import React, { useEffect, useState } from "react";
import products from "../data/Products.json";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const [product, setProduct] = useState(null);

  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    if (!id) return;
    const merged = Object.values(products).flat();
    const foundProduct = merged.find(
      (item) => String(item.id) === String(id)
    );
    console.log(foundProduct);
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div className="mx-auto max-w-[1100px] flex justify-between pt-20 pb-20 gap-10">
      {/* Left Side Image */}
      <div className="w-1/2">
        {(product.image || (product.images && product.images.length > 0)) && (
          <img
            src={product.image || product.images[0]}
            alt={product.name}
            className="w-[500px] object-cover"
          />
        )}
      </div>

      {/* Right Side Content */}
      <div className="w-1/2">
        <h1 className="text-[34px] leading-[40px] font-normal">
          {product.name}
        </h1>

        <p className="text-[28px] leading-tight font-normal pt-4 pb-4">
          ₹{product.variants[0].price}{" "}
          <s>₹{product.variants[0].compareAtPrice}</s>
        </p>

        {/* Variants */}
        <div className="flex gap-4 flex-wrap">
          {product.variants.map((item) => (
            <div key={item.variantId} className="w-[120px] text-center">
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

        {/* Description */}
        <p className="mt-6 text-gray-700">{product.description}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
