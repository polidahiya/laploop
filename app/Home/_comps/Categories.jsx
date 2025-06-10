"use client";
import React, { useState } from "react";
import categories from "@/app/_Globalfiles/Categories";
import Link from "next/link";

export default function Categoriesfn() {
  const [selectedcategory, setselectedcategory] = useState(
    Object.keys(categories)[0]
  );

  return (
    <div className="p-6">
      {/* Category Buttons */}
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(categories).map((key, i) => (
          <button
            key={i}
            className={`px-4 py-2 rounded-full text-sm font-medium transition 
              ${
                selectedcategory === key
                  ? "bg-black text-white"
                  : "bg-gray-100 hover:bg-gray-300"
              }`}
            onClick={() => setselectedcategory(key)}
          >
            {key.replace(/-/g, " ")}
          </button>
        ))}
      </div>

      {/* Subcategories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {Object.entries(categories[selectedcategory].subcat).map(
          ([key, value], i) => (
            <Link
              href={`/Home/Categories?${selectedcategory}=${key}`}
              key={i + new Date()}
              className="overflow-hidden"
            >
              <div className="bg-gray-100 w-full rounded-lg overflow-hidden">
                <img
                  src={value.image}
                  alt={key}
                  className="clip-reveal-up w-full aspect-square object-cover mix-blend-multiply"
                  style={{ animationDelay: `${i * 0.05}s` }}
                />
              </div>
              <div className="p-2 text-center">
                <p className="text-sm font-medium text-gray-800">
                  {key.replace(/-/g, " ")}
                </p>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
}
