import React, { useState, useEffect } from "react";

function Woman() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getDataFromApi();
  }, []);

  const getDataFromApi = async () => {
    const data = await fetch("https://fakestoreapi.com/products").then((res) =>
      res.json()
    );
    setProducts(data);
  };

  // Filter men's clothing
  const menProducts = products.filter(
    (product) => product.category === "women's clothing"
  );

  return (
    <div className="w-[90%] mx-auto py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {menProducts.map((product, index) => (
          <div
            key={product.id || index}
            className="border rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-700 font-medium">Price: ${product.price}</p>
            <div className="flex justify-center mt-4">
              <button className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-all">
                Buy Now 💲 {product.price}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Woman;
