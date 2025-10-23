import React from 'react';

export default function Footer({ text }) {
  return (
    <footer className="bg-gray-800 text-gray-300 p-6 text-center">
      <p>{text || `© ${new Date().getFullYear()} DreamHomes Realty. All rights reserved.`}</p>
      <p className="mt-2">123 Main St, Cityville | Phone: (123) 456-7890 | Email: info@dreamhomes.com</p>
    </footer>
  );
}
