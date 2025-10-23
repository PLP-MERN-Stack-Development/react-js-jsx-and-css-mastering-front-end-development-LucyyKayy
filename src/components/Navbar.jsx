import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ links = [] }) {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center shadow-md">
      <h1 className="font-bold text-xl">DreamHomes Realty</h1>
      <div className="space-x-6">
        {links.map(link => (
          <Link key={link.to} to={link.to} className="hover:text-yellow-400 transition-colors">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
