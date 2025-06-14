import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";
import Hovermenu from "./Hovermenu";

function Productcard({ product }) {
  const showOriginalPrice =
    product.originalPrice && product.originalPrice > product.price;

  const productlink = "/";
  return (
    <div className="group w-full rounded-2xl shadow-md delay-500 hover:delay-[0s] duration-500 hover:duration-[0s] hover:shadow-none overflow-hidden">
      <div className="relative overflow-hidden">
        <Link
          href={productlink}
          className="relative block w-full aspect-square  bg-white lg:group-hover:scale-90 lg:group-hover:rounded-3xl shadow-md lg:group-hover:-translate-x-1/2 overflow-hidden duration-500 z-10"
        >
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-full object-cover object-center"
          />
        </Link>
        <Hovermenu />
      </div>
      <Link
        href={productlink}
        className="block p-4 bg-white lg:group-hover:rounded-2xl duration-500"
      >
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2">
          {product.title}
        </h3>
        <div className="flex items-start justify-between mt-2 text-sm">
          <div className="flex flex-wrap">
            <span className="flex items-center gap-1 text-gray-700">
              <FaStar className="text-sm text-yellow-500" /> {product.rating}
            </span>
            <span className="text-gray-500">({product.reviews} reviews)</span>
          </div>
          <div className="text-right">
            {showOriginalPrice && (
              <p className="text-xs text-gray-500 line-through">
                ₹{product.originalPrice}
              </p>
            )}
            <p className="text-base font-bold text-gray-800">
              ₹{product.price}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Productcard;
