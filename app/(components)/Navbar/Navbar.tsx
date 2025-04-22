"use client";

import Link from "next/link";
import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
              <span className="text-xl font-bold text-gray-800 cursor-pointer">
                Clothing<span className="text-indigo-600">Store</span>
              </span>
            </Link>
          </div>
          <div className="hidden md:flex space-x-6">
            <Link href="/" className="text-gray-700 hover:text-indigo-600">
              Home
            </Link>
            <Link href="/shop" className="text-gray-700 hover:text-indigo-600">
              Cart
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">
              Checkout
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-indigo-600"
            >
              Product
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/cart">
              <FaShoppingCart
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
                size={20}
              />
            </Link>
            <Link href="/login">
              <FaUser
                className="text-gray-700 hover:text-indigo-600 cursor-pointer"
                size={20}
              />
            </Link>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                <svg
                  className="h-6 w-6 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {menuOpen ? (
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
      </div>
      {menuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-3 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Shop
            </Link>
            <Link
              href="/about"
              className="block text-gray-700 hover:text-indigo-600"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-gray-700 hover:text-indigo-600"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
