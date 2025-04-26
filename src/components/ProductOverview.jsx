import React, { useState, useEffect } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

function ProductOverview() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All Products");

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

  return (
    <div className="w-[92%] m-auto">
      <h1 className="text-3xl font-bold mb-6 mt-8">PRODUCT OVERVIEW</h1>

      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex flex-wrap gap-x-4">
          {categories.map((cat, i) => (
            <button
              key={i}
              className={`text-gray-600 hover:text-black ${selectedCategory === cat && "underline font-medium"}`}
              onClick={() => handleCategoryFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="flex justify-between sm:justify-end w-full gap-2 mt-4 sm:mt-0 ">
          <button className="flex items-center gap-2 px-6 py-1 border rounded">
            <FaFilter />
            <select
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
          </button>

          <button className="flex items-center gap-2 px-6 py-1 border rounded">
            <FaSearch /> <input type="text"  placeholder="Item Search Here..." className=""/> 
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
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
              Buy Now 💲 {product.price}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductOverview;
