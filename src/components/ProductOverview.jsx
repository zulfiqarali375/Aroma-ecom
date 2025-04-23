import React, { useEffect, useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

const ProductOverview = () => {
  const [products, setProducts] = useState([]);
  const categories = ["All Products", "Women", "Men", "Bag", "Shoes", "Watches"];

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  return (
    <div className="w-[92%] m-auto mt-14 ">
      <h1 className="text-3xl font-bold mb-6">PRODUCT OVERVIEW</h1>

      <div className="flex flex-wrap justify-between items-center mb-6">
        <div className="flex gap-6">
          {categories.map((cat, i) => (
            <button className={`text-gray-600 hover:text-black ${i === 0 && "underline font-medium"}`}>
              {cat}
            </button>
          ))}
        </div>

        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-6 my-5 py-1 border rounded"><FaFilter /> Filter</button>
          <button className="flex items-center gap-2 px-6 my-5 py-1  border rounded"><FaSearch /> Search</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map(p => (
          <div key={p.id} className="w-full overflow-hidden">
            <img src={p.image} alt={p.title} className="w-full h-72 object-contain border-2 cursor-pointer rounded" />
            <p className="mt-2 text-sm">{p.title}</p>   
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOverview;
