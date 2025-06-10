import React from "react";
import categories from "@/app/_Globalfiles/Categories";
import { BsOpencollective } from "react-icons/bs";
import Link from "next/link";

function Sidemenu() {
  return (
    <div className="space-y-2">
      {Object.entries(categories).map(([category, value], i) => (
        <div key={i} className="text-sm bg-white rounded-2xl shadow-md">
          <div className="relative px-5 py-2 font-semibold rounded-2xl bg-black text-white z-10">
            <BsOpencollective className=" inline mr-1" />
            {category.replace(/-/g, " ")}
          </div>
          <div className="pl-5">
            <div className="">
              {Object.entries(value.subcat).map(([subcat, subcatvalue], j) => (
                <Link
                  key={j}
                  href={"/"}
                  className="block relative px-5 py-2 lg:hover:text-theme last:pb-4 before:absolute before:h-14 before:w-4 before:border-l before:border-b before:border-gray-300 before:left-0 left-0 before:bottom-1/2 last:before:rounded-bl-md"
                >
                  <BsOpencollective className=" inline mr-1" />
                  {subcat.replace(/-/g, " ")}
                </Link>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidemenu;
