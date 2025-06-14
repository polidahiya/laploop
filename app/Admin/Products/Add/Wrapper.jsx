"use client";
import React, { useState } from "react";
import categorylist from "@/app/_Globalfiles/Categories";
import Standardinputfield from "./_comps/Standardinputfield";

const getinitialvalues = (opt) => {
  return Object.keys(categorylist[opt].subcat)[0];
};

const initialdata = {
  name: "Dell Latitude 5420",
  brand: getinitialvalues("brand"),
  usecase: [getinitialvalues("usecase")],
  images: [""],
  options: {
    processor: [getinitialvalues("processor")],
    ram: [getinitialvalues("ram")],
    storage: [getinitialvalues("storage")],
  },

  priceMatrix: [
    {
      processor: "i5-1145G7",
      ram: "8GB",
      storage: "256GB SSD",
      price: 32999,
    },
  ],
};

function Wrapper() {
  const [data, setdata] = useState(initialdata);
  console.log(data);

  const handleSubmit = () => {};

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="p-2 pb-20 md:p-6 bg-white space-y-6"
      >
        <p className="text-center font-bold  text-2xl my-5">Add Product</p>
        <Standardinputfield
          titlename="Name"
          value={data.name}
          onchange={(e) => setdata((pre) => ({ ...pre, name: e.target.value }))}
          clear={() => setdata((pre) => ({ ...pre, name: "" }))}
          placeholder="Enter the name of the product"
        />
      </form>
    </div>
  );
}

export default Wrapper;
