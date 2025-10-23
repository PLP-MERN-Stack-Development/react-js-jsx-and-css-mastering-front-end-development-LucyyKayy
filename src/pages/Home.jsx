import React from 'react';
import Button from '../components/Button';

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <h1 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Find Your Dream Home
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
          Explore premium properties in prime locations. Buy, sell, or rent with confidence.
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="primary">View Listings</Button>
          <Button variant="secondary">Contact Us</Button>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300x200" alt="Property 1" className="rounded mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Modern Apartment</h3>
            <p className="text-gray-700 dark:text-gray-300">$350,000 • 2 Beds • 2 Baths</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300x200" alt="Property 2" className="rounded mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Luxury Villa</h3>
            <p className="text-gray-700 dark:text-gray-300">$1,200,000 • 5 Beds • 4 Baths</p>
          </div>
          <div className="bg-white dark:bg-gray-700 rounded-lg shadow p-4">
            <img src="https://via.placeholder.com/300x200" alt="Property 3" className="rounded mb-4" />
            <h3 className="font-semibold text-lg text-gray-900 dark:text-white">Cozy Cottage</h3>
            <p className="text-gray-700 dark:text-gray-300">$250,000 • 3 Beds • 2 Baths</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">About DreamHomes Realty</h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
          At DreamHomes Realty, we specialize in connecting buyers and sellers with the perfect property.
          Our experienced agents provide personalized service and expert guidance to ensure a smooth experience
          from start to finish.
        </p>
      </section>
    </div>
  );
}
