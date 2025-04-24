import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from 'lucide-react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="mx-auto px-5 py-16 flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-1/4 md:text-left">
          <img src="/images/logo.png" alt="Logo" className="h-8  md:mx-0" />
          <p className="mt-5 text-sm text-gray-400">
          Fashion That Fits Your Life.
          </p>
        </div>

        <div className="flex-grow flex flex-wrap gap-10 justify-around">
          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-3 text-white">Categories</h2>
            <nav className="flex flex-col gap-2">
              <Link to="#" className="hover:text-white">Women</Link>
              <Link to="#" className="hover:text-white">Men</Link>
              <Link to="#" className="hover:text-white">Shoes</Link>
              <Link to="#" className="hover:text-white">Watches</Link>
            </nav>
          </div>

          <div className="w-full md:w-1/4">
            <h2 className="text-lg font-semibold mb-3 text-white">Help</h2>
            <nav className="flex flex-col gap-2">
              <Link to="#" className="hover:text-white">Track Order</Link>
              <Link to="#" className="hover:text-white">Returns</Link>
              <Link to="#" className="hover:text-white">Shipping</Link>
              <Link to="#" className="hover:text-white">FAQs</Link>
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

    <div className="flex sm:flex-row justify-center items-center  sm:justify-around border-t border-gray-700 py-3 px-5 bg-gray-800">  
    <div className='w-[96%] flex justify-between  '>
    <p className="text-sm text-gray-400 text-center sm:text-left">
    © 2025 Aroma Store —{' '}
    <a
      href="https://twitter.com/knyttneve"
      className="text-gray-300 hover:text-white ml-1"
      target="_blank"
      rel="noopener noreferrer"
    >
      @zulfiqarali375
    </a>
    </p>

    <div className="flex mt-4 sm:mt-0 space-x-4 justify-center">
        <Link to="#" className="hover:text-white" aria-label="Facebook"><Facebook size={20} /></Link>
        <Link to="#" className="hover:text-white" aria-label="Twitter"><Twitter size={20} /></Link>
        <Link to="#" className="hover:text-white" aria-label="Instagram"><Instagram size={20} /></Link>
        <Link to="#" className="hover:text-white" aria-label="LinkedIn"><Linkedin size={20} /></Link>
    </div>
    </div>

    </div>

    </footer>
  );
}

export default Footer;
