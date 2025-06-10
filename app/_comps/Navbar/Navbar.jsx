import React from "react";
import Nextimage from "../Nextimage";
import Searchbar from "./Searchbar";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="h-16 flex bg-black text-white px-2 md:px-10 sticky top-0 z-40">
      <div className="h-full flex items-center">
        <Nextimage
          src="/Images/logopng.png"
          alt="logo"
          height="50"
          width="271"
          className="h-full p-2"
        ></Nextimage>
      </div>
      <div className="h-full ml-10">
        <div className="flex items-center h-full">
          {new Array(5).fill(null).map((item, i) => (
            <Link
              key={i}
              href={"/"}
              className="group/navlink h-full flex items-center justify-center px-3"
            >
              <div className="relative w-full">
                Home{" "}
                <span className="absolute top-full right-0 lg:group-hover/navlink:right-auto lg:group-hover/navlink:left-0 bg-theme h-0.5 w-0 lg:group-hover/navlink:w-full duration-300"></span>{" "}
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center h-full ml-auto text-black">
        <div className="h-9">
          <Searchbar />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
