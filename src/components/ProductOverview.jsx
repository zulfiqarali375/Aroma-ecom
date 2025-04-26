import React, { useState, useEffect } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

function ProductOverview() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [searchTerm, setSearchTerm] = useState("");


  const categories = ["All Products", "women's clothing", "men's clothing", "jewelery", "electronics"];

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    const data = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProducts(data);
    setFilteredProducts(data);
  };

  const handleCategoryFilter = (category) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter(
        (product) => product.category.toLowerCase() === category.toLowerCase()
      );
      setFilteredProducts(filtered);
    }
  };

  // search funtion

  useEffect(() => {
    let filtered = [...products];
  
    if (selectedCategory !== "All Products") {
      filtered = filtered.filter(
        (product) =>
          product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
  
    if (searchTerm.trim() !== "") {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
  
    setFilteredProducts(filtered);
  }, [products, selectedCategory, searchTerm]);
  

  return (
    <div className="w-[92%] max-w-screen-xl m-auto px-2">
    <h1 className="text-3xl font-bold mb-6 mt-8 text-center sm:text-left">PRODUCT OVERVIEW</h1>
  
    {/* Top Controls */}
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      
      {/* Categories */}
      <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
        {categories.map((cat, i) => (
          <button
            key={i}
            className={`text-gray-600 hover:text-black ${selectedCategory === cat ? "underline font-medium" : ""}`}
            onClick={() => handleCategoryFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
  
      {/* Filter + Search */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        
        {/* Filter */}
        <div className="flex items-center gap-2 px-4 py-2 border bg-white shadow-sm hover:shadow-md transition-all w-full sm:w-auto">
          <FaFilter className="text-gray-500" />
          <select
            className="border-none outline-none bg-transparent w-full sm:w-auto"
            onChange={(e) => {
              const value = e.target.value;
              let filtered = products;
  
              if (value === "lt10") {
                filtered = products.filter((p) => p.price < 10);
              } else if (value === "gt50") {
                filtered = products.filter((p) => p.price > 50);
              } else if (value === "btw20-50") {
                filtered = products.filter((p) => p.price >= 20 && p.price <= 50);
              }
  
              setFilteredProducts(filtered);
            }}
          >
            <option value="">All</option>
            <option value="lt10">Less than 10</option>
            <option value="gt50">More than 50</option>
            <option value="btw20-50">20 - 50</option>
          </select>
        </div>
  
        {/* Search */}
        <input
  type="text"
  placeholder="Item Search Here..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  className="w-full sm:w-40 md:w-60 bg-transparent outline-none text-gray-700 placeholder-gray-400"
/>

  
      </div>
    </div>
  
    {/* Product Cards */}
    <div className="flex flex-wrap justify-center gap-6">
      {filteredProducts.map((product, index) => (
        <div
          key={index}
          className="flex flex-col border rounded-2xl p-4 shadow hover:shadow-xl transition-all duration-300 bg-white items-center w-full sm:w-[48%] md:w-[30%] lg:w-[22%]"
        >
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain mb-3 rounded"
          />
          <p className="text-base font-semibold text-center mb-2">{product.title}</p>
  
          <div className="flex justify-around w-full text-sm font-medium text-gray-700 mb-3 gap-2">
            <span className="bg-gray-100 px-2 py-1 rounded">💲{product.price}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">⭐ {product.rating.rate}</span>
            <span className="bg-gray-100 px-2 py-1 rounded">{product.category}</span>
          </div>
  
          <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
            Buy Now 💲 {product.price}
          </button>
        </div>
      ))}
    </div>
  </div>
  
  );
}

export default ProductOverview;
