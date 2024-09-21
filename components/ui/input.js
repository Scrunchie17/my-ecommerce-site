import React from 'react';

export function Input({ className, ...props }) {
  return (
    <input
      className={`px-4 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    />
  );
}
