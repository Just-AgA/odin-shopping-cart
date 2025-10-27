import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="page shop">
      <h2>Shop</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
