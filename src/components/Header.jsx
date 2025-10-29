import React from 'react';
import logo from '../assets/logo.svg';

export default function Header() {
  return (
  <header style={{ backgroundColor: 'var(--accent)' }} className="flex items-center justify-between text-white px-4 py-3 rounded-md">
      <div className="flex items-center gap-3">
        <img src={logo} alt="eCoach logo" className="h-8 w-auto" />
        <h1 className="font-semibold text-lg">Dynamic Product Dashboard</h1>
      </div>
      <div>
        <button className="text-sm opacity-90 px-2 py-1 rounded focus:outline-none focus-ring" aria-label="Open user menu">admin</button>
      </div>
    </header>
  );
}
