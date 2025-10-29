import { useMemo, useState } from "react";

export function useCart() {
  const [items, setItems] = useState([]);

  const add = (product) => {
    setItems((prev) => {
      const i = prev.findIndex(p => p.id === product.id);
      if (i >= 0) {
        const copy = [...prev]; copy[i] = {...copy[i], qty: copy[i].qty + 1};
        return copy;
      }
      return [...prev, {...product, qty: 1}];
    });
  };
  const remove = (id) => setItems((prev) => prev.filter(p => p.id !== id));
  const increment = (id) => setItems((prev) => prev.map(p => p.id === id ? {...p, qty: p.qty + 1} : p));
  const decrement = (id) => setItems((prev) => prev.flatMap(p => {
    if (p.id !== id) return [p];
    const qty = p.qty - 1; return qty <= 0 ? [] : [{...p, qty}];
  }));

  const { subtotal, discount, total, count } = useMemo(() => {
    const subtotal = items.reduce((s, p) => s + p.price * p.qty, 0);
    const discount = subtotal < 500 ? subtotal * 0.10 : 0;
    const total = subtotal - discount;
    const count = items.reduce((s, p) => s + p.qty, 0);
    return { subtotal, discount, total, count };
  }, [items]);

  return { items, add, remove, increment, decrement, subtotal, discount, total, count };
}
