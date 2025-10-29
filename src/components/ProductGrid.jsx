import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products, onAdd }) {
  return (
    <main className="">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {products.map(p => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </main>
  );
}
