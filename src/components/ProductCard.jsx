import React from 'react';
import { formatMoney } from '../utils/currency';

export default function ProductCard({ product, onAdd }) {
  return (
    <article className="bg-white rounded-md shadow p-4 flex flex-col">
      <img src={product.image} alt={product.name} className="h-36 w-full object-cover rounded" />
      <div className="mt-3 flex-1">
        <h4 className="font-semibold">{product.name}</h4>
        <p className="text-xs text-gray-500 mt-1">{product.category}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold">{formatMoney(product.price)}</div>
        <button
          onClick={() => onAdd(product)}
          style={{ backgroundColor: 'var(--accent)' }}
          className="hover:bg-[#2d92a8] text-white px-3 py-1 rounded focus:outline-none focus-ring"
          aria-label={`Add ${product.name} to cart`}
        >
          Add
        </button>
      </div>
    </article>
  );
}
