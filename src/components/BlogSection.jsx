import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

function BlogSection() {
  return (
    <>
      {/* Banner */}
      <div
        className="w-full h-60 bg-cover bg-center brightness-75 flex items-center justify-center"
        style={{ backgroundImage: "url('/images/gallery-06.jpg')" }}
      >
        <h1 className="font-bold text-5xl md:text-7xl text-white">Blog</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row p-5 md:p-10 gap-10 mt-12">
        {/* Left Content (Blog Posts) */}
        <div className="flex-1">
          {/* Blog Post */}
          {[1, 2, 3].map((item, index) => (
            <div key={index} className="mb-16">
              <div
                className="w-full h-64 md:h-96 bg-cover bg-center rounded-lg shadow-md"
                style={{
                  backgroundImage: `url('/images/blog-0${index + 4}.jpg')`,
                }}
              >
                <div className="bg-white w-16 text-center font-bold py-2 rounded-br-lg">
                  27
                  <br /> April 2025
                </div>
              </div>

              <h1 className="font-bold text-2xl md:text-3xl mt-6">
                {index === 0
                  ? "8 Inspiring Ways to Wear Dresses in the Winter"
                  : index === 1
                  ? "The Great Big List of Men’s Gifts for the Holidays"
                  : "5 Winter-to-Spring Fashion Trends to Try Now"}
              </h1>

              <p className="text-gray-600 mt-4">
                Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Fusce eget dictum tortor. Donec
                dictum vitae sapien eu varius.
              </p>

              <p className="text-gray-400 text-sm mt-4">
                By Admin | StreetStyle, Fashion, Couple | 8 Comments
              </p>
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-full md:w-1/3">
          {/* Search Box */}
          <div className="flex items-center border border-gray-300 rounded-md overflow-hidden mb-10">
            <div className="p-2">
              <FaSearch className="text-gray-500" />
            </div>
            <input
              type="text"
              placeholder="Item Search Here..."
              className="w-full h-10 px-2 focus:outline-none"
            />
          </div>

          {/* Categories */}
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-5">Categories</h2>
            <div className="flex flex-col gap-4">
              {[
                "Fashion",
                "Beauty",
                "Street Style",
                "Life Style",
                "DIY & Crafts",
              ].map((cat, idx) => (
                <Link
                  key={idx}
                  to="/con"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-300"
                >
                  {cat}
                  <hr />
                </Link>
              ))}
            </div>
          </div>

          {/* Featured Products */}
          {/* <div className="mb-10">
            <h2 className="text-2xl font-bold mb-5">Featured Products</h2>
              <div key={index} className="flex items-center gap-4 mb-6">
                <img
                  src="/images/product-03.jpg"
                  alt="Product"
                />
                <div className="text-sm">
                  <p className="font-semibold">White Shirt With Pleat Details Black</p>
                  <p className="text-blue-600">$19.00</p>
                </div>
              </div>
          </div> */}
          <div className="flex gap-5 mb-8 h-24">
            <img src="/images/product-03.jpg" alt="Product" />
            <div className="text-sm">
              <p className="font-semibold">
                White Shirt With Pleat Details Black
              </p>
              <p className="text-blue-600">$19.00</p>
            </div>
          </div>
          <div className="flex gap-5 mb-8 h-24">
            <img src="/images/product-13.jpg" alt="Product" />
            <div className="text-sm">
              <p className="font-semibold">
                White Shirt With Pleat Details Black
              </p>
              <p className="text-blue-600">$19.00</p>
            </div>
          </div>
          <div className="flex gap-5 mb-8 h-24">
            <img src="/images/product-04.jpg" alt="Product" />
            <div className="text-sm">
              <p className="font-semibold">
                White Shirt With Pleat Details Black
              </p>
              <p className="text-blue-600">$19.00</p>
            </div>
          </div>

          {/* Archive */}
          <h2 className="text-2xl font-bold mt-10 mb-5">Archive</h2>
          <div className="flex flex-col space-y-3">
            <div className="flex justify-between text-gray-600">
              <p>January 2025</p>
              <p>(9)</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>February 2025</p>
              <p>(7)</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>March 2025</p>
              <p>(5)</p>
            </div>
            <div className="flex justify-between text-gray-600">
              <p>April 2025</p>
              <p>(8)</p>
            </div>
          </div>

          {/* TAGS */}
          <h2 className="text-2xl font-bold mt-20 mb-5">Tags</h2>
          <div className=" space-y-3">

            <div className="flex gap-3 text-gray-600">
              <p className="border p-2 ">Fashion</p>
              <p className="border p-2 ">Lifestyle</p>
              <p className="border p-2 ">Denim</p>
              <p className="border p-2 ">Streetstyle</p>
              <p className="border p-2 ">Crafts</p>


            </div>
            
          </div>
          
        </div>
      </div>
    </>
  );
}

export default BlogSection;
