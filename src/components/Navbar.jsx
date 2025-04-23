import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    gsap.fromTo(
      ".nav-hover-eff-desk",
      { opacity: 0, y: -20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-blue-600">
            <img src="/images/logo.png" alt="Logo" className="h-7" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex m-auto space-x-6">
            <Link to="/" className=" nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/about" className=" nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Shop</Link>
            <Link to="/services" className=" nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Features</Link>
            <Link to="/contact" className=" nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/contact" className=" nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className=" nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          {/* Icon Bar */}
          <div className="navbar-icons-style flex items-center gap-10 sm:gap-8">
            <Link to="/search" className="relative">
              <MagnifyingGlassIcon className="w-6 h-6 text-gray-800" />
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCartIcon className="w-6 h-6 text-gray-800" />
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold px-1.5 rounded-full">2</span>
            </Link>
            <Link to="/wishlist" className="relative">
              <HeartIcon className="w-6 h-6 text-gray-800" />
              <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold px-1.5 rounded-full">0</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-gray-600 ">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8 " />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-center space-y-2">
          <Link to="/" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/services" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/contact" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}

      
    </nav>
  );
};

export default Navbar;
