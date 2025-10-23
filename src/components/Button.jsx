import React from 'react';
import classNames from 'classnames';

export default function Button({ children, variant = 'primary', onClick, className }) {
  const baseClasses = "px-4 py-2 rounded font-semibold transition-colors duration-300";
  
  const variantClasses = {
    primary: "bg-blue-600 text-white hover:bg-blue-700",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
    danger: "bg-red-600 text-white hover:bg-red-700"
  };

  return (
    <button
      className={classNames(baseClasses, variantClasses[variant], className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
