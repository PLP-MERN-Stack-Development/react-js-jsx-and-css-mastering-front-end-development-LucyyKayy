import React from 'react';

export default function Card({ title, children, className }) {
  return (
    <div className={`bg-white shadow-md rounded-lg p-6 transition-transform hover:scale-105 ${className}`}>
      {title && <h3 className="text-xl font-bold mb-4">{title}</h3>}
      {children}
    </div>
  );
}
