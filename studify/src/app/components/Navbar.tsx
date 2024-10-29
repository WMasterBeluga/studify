// src/components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-transparent">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-semibold text-black">Studify</h1>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Home
              </Link>
              <Link href="/features" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Features
              </Link>
              <Link href="/chat" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Sign up
              </Link>
              <Link href="/login" className="text-black hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium">
                Login
              </Link>
            </div>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className=" inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-black hover:bg-neutral-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Home
            </Link>
            <Link href="/features" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Features
            </Link>
            <Link href="/chat" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Sign up
            </Link>
            <Link href="#contact" className="text-black hover:text-gray-300 block px-3 py-2 rounded-md text-base font-medium">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
