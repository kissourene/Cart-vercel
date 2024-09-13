import React from 'react';
import ProductCard from './ProductCard';

const Produits = ({ products }) => {
  return (
    <section className="produits">
      <h2>Nos produits</h2>
      <div className="produits-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Produits;
