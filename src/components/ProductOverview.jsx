import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

function ProductOverview() {
  const [products, setProducts] = useState([]);
  const categories = [
    "All Products",
    "Women",
    "Men",
    "Bag",
    "Shoes",
    "Watches",
  ];

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    const data = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProducts(data); // <-- yeh line add karo
  };

  return (
    <div className="w-[92%] m-auto ">
      <h1 className="text-3xl font-bold mb-6 mt-8">PRODUCT OVERVIEW</h1>

      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex flex-wrap gap-x-4">
          {categories.map((cat, i) => (
            <button className={`text-gray-600 hover:text-black ${i === 0 && "underline font-medium"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="flex justify-between sm:justify-end w-full gap-2 mt-4 sm:mt-0 ">
          <button className="flex items-center gap-2 px-6 py-1 border rounded"><FaFilter /> Filter</button>
          <button className="flex items-center gap-2 px-6 py-1 border rounded"><FaSearch /> Search</button>
        </div>

      </div>
      
      <div className="w-[100%] m-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 cursor-pointer">
        
      {products.map((product, index) => (
  <div 
    key={index}
    className="border rounded-2xl p-4 shadow hover:shadow-xl transition-all duration-300 bg-white flex flex-col items-center"
  >
    <img
      src={product.image}
      alt={product.title}
      
      className="w-full h-48 object-contain mb-3 rounded"
    />

    <p className="text-base font-semibold text-center mb-2">{product.title}</p>

    <div className="flex justify-around w-full text-sm font-medium text-gray-700 mb-3">
      <span className="bg-gray-100 px-2 py-1 rounded">💲{product.price}</span>
      <span className="bg-gray-100 px-2 py-1 rounded">⭐ {product.rating.rate}</span>
      <span className="bg-gray-100 px-2 py-1 rounded">{product.category}</span>
    </div>

    <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
      Buy Now
    </button>
  </div>
))}

      </div>
      </div>
  );
}

export default ProductOverview;

