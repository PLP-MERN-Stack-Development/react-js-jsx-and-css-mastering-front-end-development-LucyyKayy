import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children }) {
  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar links={navLinks} />
      <main className="flex-1 p-6">{children}</main>
      <Footer />
    </div>
  );
}
