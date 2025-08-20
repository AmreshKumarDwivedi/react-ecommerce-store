import React, { useEffect, useState } from 'react';
import products from '../data/products.json';
import { useLocation } from 'react-router-dom';

function ProductDetail() {
  const [product, setProduct] = useState(null);
     const location = useLocation();
  const id = location.state?.id;  
  console.log(id)  
  useEffect(() => {
     if (!id) return;
    const merged = Object.values(products).flat();
    const foundProduct = merged.find(item =>  String(item.id) === String(id));
    console.log(foundProduct)
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return <p>Loading product...</p>;
  }

  return (
    <div>
      <div>
    {product.image || product.images && <img src={product.image || product.images[0]} alt={product.name} />}
      </div>
      <div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: {product.price}</p>
      </div>
    </div>
  );
}

export default ProductDetail;
