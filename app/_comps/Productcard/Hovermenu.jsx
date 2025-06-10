import React from "react";
import { IoMdShare } from "react-icons/io";
import { IoIosHeart } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";

function Hovermenu() {
  return (
    <div className="flex flex-col gap-2 absolute h-full w-1/2 top-0 right-0 scale-90 translate-x-full lg:group-hover:translate-x-0 duration-500 lg:group-hover:delay-100">
      <div className="h-full w-full bg-white rounded-2xl shadow-md">
        {new Array(5).fill(null).map((item, i) => (
          <div key={i} className="px-2 py-1">
            storage: 8gb
          </div>
        ))}
      </div>
      <div className="flex gap-1 mt-auto bg-white rounded-2xl shadow-md p-2 translate-x-28 lg:group-hover:translate-x-0 duration-500 lg:group-hover:delay-150">
        <button className="w-full aspect-square grid place-content-center rounded-full lg:hover:bg-gray-100 lg:hover:text-theme">
          <IoIosHeart />
        </button>
        <button className="w-full aspect-square grid place-content-center rounded-full lg:hover:bg-gray-100 lg:hover:text-theme">
          <FaCartShopping />
        </button>
        <button className="w-full aspect-square grid place-content-center rounded-full lg:hover:bg-gray-100 lg:hover:text-theme">
          <IoMdShare />
        </button>
      </div>
    </div>
  );
}

export default Hovermenu;
