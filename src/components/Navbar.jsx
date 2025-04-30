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

  const [isCartOpen, setIsCartOpen] = useState(false); // کارٹ کے کھلنے/بند ہونے کا کنٹرول
const [isWishlistOpen, setIsWishlistOpen] = useState(false); // وش لسٹ کے کھلنے/بند ہونے کا کنٹرول


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
          <Link to="/" className="text-xl font-bold text-blue-600 ">
            <img src="/images/logo.png" alt="Logo" className="h-6" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex m-auto space-x-6">
            <Link to="/" className="nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/Shop" className="nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Shop</Link>
            <Link to="/BlogSection" className="nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Blog</Link>
            <Link to="/About" className="nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/Contact" className="nav-text-style nav-hover-eff-desk text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          {/* Icon Bar */}
          <div className="navbar-icons-style flex items-center gap-3 mobile:ml-14">

{/* سرچ آئیکون */}
<button onClick={() => {}} className="relative">
  <MagnifyingGlassIcon className="w-6 h-6 text-gray-800" />
</button>

{/* کارٹ آئیکون */}
<button onClick={() => setIsCartOpen(true)} className="relative">
  <ShoppingCartIcon className="w-6 h-6 text-gray-800" />
  <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold px-1.5 rounded-full">2</span>
</button>

{/* وش لسٹ آئیکون */}
<button onClick={() => setIsWishlistOpen(true)} className="relative">
  <HeartIcon className="w-6 h-6 text-gray-800" />
  <span className="absolute -top-2 -right-3 bg-blue-500 text-white text-xs font-bold px-1.5 rounded-full">0</span>
</button>

</div>


{/* Overlay */}
{(isCartOpen || isWishlistOpen) && (
  <div
    className="fixed inset-0 bg-black bg-opacity-30 z-40"
    onClick={() => {
      setIsCartOpen(false);
      setIsWishlistOpen(false);
    }}
  ></div>
)}

{/* Cart Drawer */}
{isCartOpen && (
  <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-lg p-4">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Your Cart</h2>
      <button onClick={() => setIsCartOpen(false)} className="text-xl">&times;</button>
    </div>
    <p className="text-gray-600">Cart is empty.</p>
  </div>
)}

{/* Wishlist Drawer */}
{isWishlistOpen && (
  <div className="fixed top-0 right-0 w-80 h-full bg-white z-50 shadow-lg p-4">
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-xl font-bold">Your Wishlist</h2>
      <button onClick={() => setIsWishlistOpen(false)} className="text-xl">&times;</button>
    </div>
    <p className="text-gray-600">Wishlist is empty.</p>
  </div>
)}


          {/* Mobile Menu Button */}
          <div className="md:hidden ">
            <button onClick={toggleMenu} className="text-gray-600 ">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pb-4 text-center space-y-2">
          <Link to="/" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/Shop" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/BlogSection" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Blog</Link>
          <Link to="/About" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/Contact" className="nav-hover-eff-mob block text-gray-600 hover:text-blue-600" onClick={() => setIsOpen(false)}>Contact</Link>

        </div>
      )}

      
    </nav>
  );
};

export default Navbar;
