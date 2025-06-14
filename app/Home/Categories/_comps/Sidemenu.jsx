"use client";
import React from "react";
import categories from "@/app/_Globalfiles/Categories";
import { BsOpencollective } from "react-icons/bs";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

function Sidemenu() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const generateHref = (category, subcat) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(category, subcat);
    return `${pathname}?${params.toString()}`;
  };

  return (
    <div className="space-y-2">
      {Object.entries(categories).map(([category, value], i) => (
        <div key={i} className="text-sm bg-white rounded-2xl shadow-md p-2">
          <div className="relative px-5 py-2 font-semibold rounded-xl bg-gray-100 z-10">
            <BsOpencollective className="inline mr-1" />
            {value?.name}
          </div>
          <div className="pl-5">
            {Object.entries(value.subcat).map(([subcat, subcatvalue], j) => (
              <Link
                key={j}
                href={generateHref(category, subcat)}
                className="block relative px-5 py-2 lg:hover:text-theme last:pb-4 before:absolute before:h-14 before:w-4 before:border-l before:border-b before:border-gray-300 before:left-0 left-0 before:bottom-1/2 last:before:rounded-bl-md"
              >
                <BsOpencollective className="inline mr-1" />
                {subcatvalue?.name}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Sidemenu;
