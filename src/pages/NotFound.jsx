import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-xl text-center">
        <h1 className="text-7xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-2">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Go to Homepage
        </Link>

        <div className="mt-8">
          <img
            src="./404-image.png" // Optional image
            alt="404 illustration"
            className="mx-auto max-w-xs sm:max-w-sm md:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
