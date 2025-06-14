import React from "react";
import Sidemenu from "./_comps/Sidemenu";
import Productcard from "@/app/_comps/Productcard/Productcard";

async function page({ searchParams }) {
  const sp = await searchParams;

  return (
    <div>
      <div className="flex p-2 md:p-10 gap-2 bg-gray-100">
        <div className="w-80">
          <Sidemenu />
        </div>
        <div
          className={`w-full grid gap-2 grid-cols-[repeat(auto-fit,minmax(300px,1fr))] place-items-center place-content-start`}
        >
          {new Array(20).fill(null).map((item, i) => (
            <Productcard
              key={i}
              product={{
                imageUrl:
                  "https://i.pinimg.com/736x/c4/56/3f/c4563f33f93c5ac81a51921b34fb7251.jpg",
                title: "Dell latitude 7390",
                rating: "4.3",
                reviews: "1.4k",
                price: 23000,
                originalPrice: 30000,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default page;
