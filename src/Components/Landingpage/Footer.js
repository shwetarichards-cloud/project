import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Brand Info */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h2 className="text-3xl font-extrabold mb-3">MyApp</h2>
            <p className="text-gray-100">
              A colorful landing page built with React and Tailwind CSS.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-300 transition">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-300 transition">About</a></li>
              <li><a href="/services" className="hover:text-yellow-300 transition">Services</a></li>
              <li><a href="/contact" className="hover:text-yellow-300 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-3">Follow Us</h3>
            <div className="flex space-x-8">
              <a href="#" className="flex flex-col items-center hover:text-yellow-300 transition">
                <FaFacebook className="text-3xl" />
                <span className="text-sm mt-1">Facebook</span>
              </a>
              <a href="#" className="flex flex-col items-center hover:text-yellow-300 transition">
                <FaTwitter className="text-3xl" />
                <span className="text-sm mt-1">Twitter</span>
              </a>
              <a href="#" className="flex flex-col items-center hover:text-yellow-300 transition">
                <FaInstagram className="text-3xl" />
                <span className="text-sm mt-1">Instagram</span>
              </a>
              <a href="#" className="flex flex-col items-center hover:text-yellow-300 transition">
                <FaLinkedin className="text-3xl" />
                <span className="text-sm mt-1">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 border-t border-white/30 pt-4 text-center text-sm text-gray-100">
          <p>&copy; {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
