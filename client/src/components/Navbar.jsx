'use client';
// components/Navbar.jsx
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center py-4 px-2">
                <img
                  src="/logo.svg"
                  alt="Logo"
                  className="h-8 w-8 mr-2"
                />
                <span className="font-semibold text-gray-500 text-lg">
                  Harmony
                </span>
              </Link>
            </div>
            {/* Primary Nav (desktop) */}
            <div className="hidden md:flex items-center space-x-1">
              <Link
                href="/"
                className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold"
              >
                Home
              </Link>
              <Link
                href="/services"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/about"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300"
              >
                Contact
              </Link>
            </div>
          </div>
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="outline-none mobile-menu-button"
            >
              <svg
                className="w-6 h-6 text-gray-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <Link
          href="/"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-200"
        >
          Home
        </Link>
        <Link
          href="/services"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-200"
        >
          Services
        </Link>
        <Link
          href="/about"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-200"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="block py-2 px-4 text-sm text-gray-500 hover:bg-gray-200"
        >
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;