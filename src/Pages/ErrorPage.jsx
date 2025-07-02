import React from 'react';
import { Link } from 'react-router';
import { FaExclamationTriangle } from 'react-icons/fa';

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100 text-center px-4">
      <FaExclamationTriangle className="text-6xl text-primary mb-4 animate-bounce" />
      <h1 className="text-5xl font-bold text-secondary mb-2">Oops!</h1>
      <p className="text-lg text-gray-600 mb-6">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="btn btn-primary px-6 py-2 rounded text-white text-sm font-medium hover:bg-secondary transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
