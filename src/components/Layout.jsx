import React from 'react';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen font-sans bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </div>
  );
}
