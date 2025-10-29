import React from 'react';

export default function FilterPanel({ categories, active, setActive, search, setSearch }) {
  return (
    <aside className="bg-white rounded-md shadow-sm p-4 lg:sticky lg:top-6">
      <label htmlFor="search" className="block text-sm font-medium mb-2">Search</label>
      <input
        id="search"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="w-full border border-gray-200 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-(--accent) focus-ring"
        placeholder="Search products"
        aria-label="Search products"
      />

      <div className="mt-4">
        <h3 className="text-sm font-semibold mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map(cat => (
            <li key={cat}>
              <button
                className={`text-left w-full px-3 py-2 rounded ${active===cat? 'bg-[#E6F8FB] border-l-4 border-(--accent)' : 'hover:bg-gray-50'}`}
                onClick={() => setActive(cat)}
                aria-pressed={active===cat}
                aria-label={`Filter ${cat}`}
              >
                {cat}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
