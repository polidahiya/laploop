"use client";
import React, { useState } from "react";

const ProductPage = () => {
  const [selectedProcessor, setSelectedProcessor] = useState("i5");
  const [selectedRam, setSelectedRam] = useState("8GB");
  const [selectedStorage, setSelectedStorage] = useState("512GB");

  const processors = ["i5", "i7", "i9"];
  const rams = ["8GB", "16GB", "32GB"];
  const storages = ["256GB", "512GB", "1TB"];

  return (
    <div className="">
      <div className="grid md:grid-cols-2 gap-10 px-10 mt-10">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src="https://headsupfortails.com/cdn/shop/articles/How_to_Calculate_Your_Cat_s_Age_in_Human_Years_large.jpg?v=1738042061"
            alt="Laptop"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">UltraBook Pro X14</h1>
          <p className="text-gray-600 mb-4">
            A sleek and powerful laptop with lightning performance, ideal for
            professionals and creatives.
          </p>

          <div className="text-2xl text-green-600 font-semibold mb-4">
            ₹89,999
          </div>

          <div className="flex items-center space-x-2 mb-6">
            <span className="text-yellow-500 text-xl">★★★★☆</span>
            <span className="text-sm text-gray-500">(120 reviews)</span>
          </div>

          {/* Processor Selection */}
          <div className="mb-4">
            <p className="font-medium mb-1">Processor:</p>
            <div className="flex gap-2">
              {processors.map((proc) => (
                <button
                  key={proc}
                  onClick={() => setSelectedProcessor(proc)}
                  className={`px-4 py-2 border rounded-full ${
                    selectedProcessor === proc
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {proc}
                </button>
              ))}
            </div>
          </div>

          {/* RAM Selection */}
          <div className="mb-4">
            <p className="font-medium mb-1">RAM:</p>
            <div className="flex gap-2">
              {rams.map((ram) => (
                <button
                  key={ram}
                  onClick={() => setSelectedRam(ram)}
                  className={`px-4 py-2 border rounded-full ${
                    selectedRam === ram
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {ram}
                </button>
              ))}
            </div>
          </div>

          {/* Storage Selection */}
          <div className="mb-6">
            <p className="font-medium mb-1">Storage:</p>
            <div className="flex gap-2">
              {storages.map((storage) => (
                <button
                  key={storage}
                  onClick={() => setSelectedStorage(storage)}
                  className={`px-4 py-2 border rounded-full ${
                    selectedStorage === storage
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-700 border-gray-300"
                  }`}
                >
                  {storage}
                </button>
              ))}
            </div>
          </div>

          {/* Add to Cart */}
          <button className="w-full md:w-auto px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;

// const productdata = {
//   name: "Dell Latitude 5420",
//   brand: "Dell",
//   usecase: ["Office", "Student"],

//   options: {
//     processor: ["i5-1145G7", "i7-1185G7"],
//     ram: ["8GB", "16GB"],
//     storage: ["256GB SSD", "512GB SSD"],
//   },

//   priceMatrix: [
//     {
//       processor: "i5-1145G7",
//       ram: "8GB",
//       storage: "256GB SSD",
//       price: 32999,
//     },
//     {
//       processor: "i5-1145G7",
//       ram: "8GB",
//       storage: "512GB SSD",
//       price: 34999,
//     },
//     {
//       processor: "i7-1185G7",
//       ram: "16GB",
//       storage: "512GB SSD",
//       price: 39999,
//     },
//     {
//       processor: "i7-1185G7",
//       ram: "16GB",
//       storage: "1TB SSD",
//       price: 42999,
//     },
//   ],
// };

// const getPrice = (selectedOptions) => {
//   const match = productdata.priceMatrix.find(
//     (entry) =>
//       entry.processor === selectedOptions.processor &&
//       entry.ram === selectedOptions.ram &&
//       entry.storage === selectedOptions.storage
//   );
//   return match?.price ?? "Out of Stock";
// };
