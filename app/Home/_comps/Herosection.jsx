"use client";
import React, { useState, useRef } from "react";
import Link from "next/link";
import Nextimage from "@/app/_comps/Nextimage";
import { FaAngleLeft } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";

function Herosection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const imageArray = [
    {
      img: [
        "https://i.pinimg.com/736x/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg",
        "https://i.pinimg.com/736x/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg",
      ],
      link: "/Furniture",
      title: "Furniture",
    },
    {
      img: [
        "https://www.cyberwala.com/wp-content/uploads/2022/05/refurbished-laptops.jpg",
        "https://www.cyberwala.com/wp-content/uploads/2022/05/refurbished-laptops.jpg",
      ],
      link: "/Furniture",
      title: "Furniture",
    },
    {
      img: [
        "https://scontent.fdel1-3.fna.fbcdn.net/v/t1.6435-9/104779665_157208822527507_7251583900332304606_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nZIgSMXj9pIQ7kNvwHo1nkh&_nc_oc=AdnqjXyJRhfKzl1PlyZfU6tllG7jZw5Ddcci7_zMQ1IlMIpcyN2YQ2tlfOnE1LKuKkdGGAVbGBJlpAc8YTb9lJVt&_nc_zt=23&_nc_ht=scontent.fdel1-3.fna&_nc_gid=QhPdzI02XWQg2CmsH6mfYw&oh=00_AfO0nGSoOC0OLb8uRyavwMFLQTKqph18SxKAGMmYRMSpZg&oe=686B8D5B",
        "https://scontent.fdel1-3.fna.fbcdn.net/v/t1.6435-9/104779665_157208822527507_7251583900332304606_n.jpg?stp=dst-jpg_p180x540_tt6&_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=nZIgSMXj9pIQ7kNvwHo1nkh&_nc_oc=AdnqjXyJRhfKzl1PlyZfU6tllG7jZw5Ddcci7_zMQ1IlMIpcyN2YQ2tlfOnE1LKuKkdGGAVbGBJlpAc8YTb9lJVt&_nc_zt=23&_nc_ht=scontent.fdel1-3.fna&_nc_gid=QhPdzI02XWQg2CmsH6mfYw&oh=00_AfO0nGSoOC0OLb8uRyavwMFLQTKqph18SxKAGMmYRMSpZg&oe=686B8D5B",
      ],
      link: "/Furniture",
      title: "Furniture",
    },
  ];

  return (
    <div className="relative w-full aspect-square md:aspect-[3.5/1] overflow-hidden group">
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-full w-full"
      >
        {imageArray.map((item, i) => (
          <SwiperSlide key={i}>
            <Link
              href={`/${item?.link}`}
              prefetch={false}
              className="relative h-full w-full block"
            >
              <picture className="w-full h-full">
                <source media="(min-width: 768px)" srcSet={item?.img[1]} />
                <img
                  className="h-full w-full object-cover p-2 lg:p-0"
                  src={item?.img[0]}
                  alt={item?.title}
                  fill="true"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 70vw"
                  priority={i == 0 ? "true" : "false"}
                  quality={100}
                  loading={i != 0 ? "lazy" : "eager"}
                />
              </picture>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 w-12 aspect-square flex items-center justify-center bg-white lg:bg-gray-300 rounded-full opacity-0 lg:group-hover:opacity-80 transition hover:bg-white z-10"
        onClick={() => swiperRef.current.swiper.slidePrev()}
        aria-label="Scroll Left"
        title="Scroll Left"
      >
        <FaAngleLeft />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 w-12 aspect-square flex items-center justify-center bg-white lg:bg-gray-300 rounded-full opacity-0 lg:group-hover:opacity-80 transition hover:bg-white rotate-180 z-10"
        onClick={() => swiperRef.current.swiper.slideNext()}
        aria-label="Scroll Right"
        title="Scroll Right"
      >
        <FaAngleLeft />
      </button>

      {/* custom pagination */}
      <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex z-10">
        {imageArray.map((_, i) => (
          <button
            key={i}
            className={`flex items-center justify-center p-1`}
            onClick={() => swiperRef.current.swiper.slideTo(i)}
            aria-label="Index"
            title="Index"
          >
            <span
              className={`block h-1 rounded-full bg-gray-400 duration-150 ${
                i === activeIndex ? "w-8" : "w-1"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Herosection;
