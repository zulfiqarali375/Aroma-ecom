import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16 text-center">
      <div className="max-w-screen-xl mx-auto px-5 py-16 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/4 text-center md:text-left">
          <img src="/images/logo.png" alt="Logo" className="h-8 mx-auto md:mx-0" />
          <p className="mt-5 text-sm text-gray-400">Fashion That Fits Your Life.</p>
        </div>

        <div className="flex-grow flex flex-wrap gap-10 justify-around">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-3 text-white">Categories</h2>
            <nav className="flex flex-col gap-2 text-sm  text-gray-400">
              <Link to="#" className="hover:text-white transition-colors duration-200">Women</Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">Men</Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">Shoes</Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">Watches</Link>
            </nav>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-3  text-white">Help</h2>
            <nav className="flex flex-col gap-2 text-sm  text-gray-400">
              <Link to="#" className="hover:text-white transition-colors duration-200">Track Order</Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">Returns</Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">Shipping</Link>
              <Link to="#" className="hover:text-white transition-colors duration-200">FAQs</Link>
            </nav>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-3 text-white">Get in Touch</h2>
            <p className="text-sm text-gray-400">
              Visit us at Dawood Mart, 8th floor, Hyderabad. Call us: (+92) 3045533902
            </p>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 border-t border-gray-700  py-5 px-5 ">
        <div className="max-w-screen-xl mx-auto w-[96%] flex justify-between flex-wrap items-center text-center">
          <p className="text-sm text-gray-400 text-center sm:text-left">
            © 2025 Aroma Store
            <a
              href="https://twitter.com/zulfiqarali375"
              className="text-gray-300 hover:text-white transition-colors duration-200 ml-1"
              target="_blank"
              rel="noopener noreferrer"
            >
            
            </a>
          </p>

          <div className="flex sm:mt-0 space-x-4 justify-center ">
            <Link to="#" className="hover:text-white transition-colors duration-200" aria-label="Facebook">
              <Facebook size={17} />
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-200" aria-label="Twitter">
              <Twitter size={17} />
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-200" aria-label="Instagram">
              <Instagram size={17} />
            </Link>
            <Link to="#" className="hover:text-white transition-colors duration-200" aria-label="LinkedIn">
              <Linkedin size={17} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
