import React from 'react';

export function Select({ children, className }) {
  return (
    <div className={`relative ${className}`}>
      {children}
    </div>
  );
}

export function SelectTrigger({ children, className }) {
  return (
    <button className={`px-4 py-2 rounded bg-gray-700 text-gray-100 border border-gray-600 ${className}`}>
      {children}
    </button>
  );
}

export function SelectContent({ children, className }) {
  return (
    <div className={`absolute mt-2 w-full bg-gray-700 text-gray-100 border border-gray-600 ${className}`}>
      {children}
    </div>
  );
}

export function SelectItem({ children, ...props }) {
  return (
    <button className="block px-4 py-2 hover:bg-gray-600" {...props}>
      {children}
    </button>
  );
}

export function SelectValue({ placeholder }) {
  return <span className="text-gray-400">{placeholder}</span>;
}
