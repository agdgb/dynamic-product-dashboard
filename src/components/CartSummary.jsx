import React from 'react';
import { formatMoney } from '../utils/currency';

export default function CartSummary({ cart }) {
  return (
    <aside className="bg-white rounded-md shadow-sm p-4 lg:sticky lg:top-6">
      <h3 className="font-semibold">Cart</h3>
      <div className="text-sm text-gray-600 mt-2">Items: {cart.count}</div>
      <ul className="mt-3 space-y-2">
        {cart.items.map(item => (
          <li key={item.id} className="flex items-center justify-between border border-gray-100 p-2 rounded">
            <div>
              <div className="font-medium">{item.name}</div>
              <div className="text-xs text-gray-500">{formatMoney(item.price)} × {item.qty}</div>
            </div>
            <div className="flex items-center gap-2">
              <button aria-label={`decrement ${item.name}`} onClick={() => cart.decrement(item.id)} className="px-2 py-1 bg-gray-100 rounded focus:outline-none focus-ring">−</button>
              <button aria-label={`increment ${item.name}`} onClick={() => cart.increment(item.id)} className="px-2 py-1 bg-gray-100 rounded focus:outline-none focus-ring">＋</button>
              <button aria-label={`remove ${item.name}`} onClick={() => cart.remove(item.id)} className="text-red-500 hover:underline focus:outline-none focus-ring">✕</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-4 border-t border-gray-100 pt-3 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><span>{formatMoney(cart.subtotal)}</span></div>
        <div className="flex justify-between"><span>Discount</span><span className="text-green-600">-{formatMoney(cart.discount)}</span></div>
        <div className="flex justify-between font-semibold mt-2"><span>Total</span><span>{formatMoney(cart.total)}</span></div>
      </div>
    </aside>
  );
}
