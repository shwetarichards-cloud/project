import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 shadow-md fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-3xl font-extrabold text-white tracking-wide">
          <a href="#home">MyApp</a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6">
          {["Home", "About", "Services", "Testimonials", "Clients", "Contact"].map(
            (item, i) => (
              <a
                key={i}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-yellow-300 font-medium transition duration-200"
              >
                {item}
              </a>
            )
          )}
        </nav>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="text-white hover:text-yellow-300 transition duration-200"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-yellow-300 transition duration-300"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              // Close icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              // Hamburger icon
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-b from-purple-600 via-pink-500 to-red-500 shadow-lg">
          <nav className="flex flex-col space-y-4 px-6 py-6">
            {["Home", "About", "Services", "Testimonials", "Clients", "Contact"].map(
              (item, i) => (
                <a
                  key={i}
                  href={`#${item.toLowerCase()}`}
                  className="text-white hover:text-yellow-200 text-lg font-medium transition duration-200"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="/login"
              className="text-white hover:text-yellow-200 text-lg font-medium transition duration-200"
            >
              Login
            </a>
            <a
              href="/signup"
              className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-full text-center font-semibold shadow-md hover:bg-yellow-300 transition duration-300"
            >
              Sign Up
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
