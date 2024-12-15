'use client'

import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

import iphone14 from "@/images/banneriphone.png";

const SidebarBanner = () => {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:max-w-7xl lg:mx-auto gap-5 lg:gap-0 lg:py-10 px-4 sm:px-6 lg:px-8">
      {/* Sidebar */}
      <div className="lg:w-1/4 pr-4">
        <ul className="space-y-4 text-lg font-medium text-gray-800">
          {[
            "Woman's Fashion",
            "Men's Fashion",
            "Electronics",
            "Home & Lifestyle",
            "Medicine",
            "Sports & Outdoor",
            "Baby's & Toys",
            "Groceries & Pets",
            "Health & Beauty",
          ].map((item, index) => (
            <li
              key={index}
              className="flex items-center justify-between hover:text-black cursor-pointer"
            >
              {item}
              <FaChevronRight className="text-sm" />
            </li>
          ))}
        </ul>
      </div>

      {/* Banner */}
      <div className="lg:w-3/4">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          className="rounded-lg overflow-hidden"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="relative bg-black text-white flex items-center h-60 md:h-80">
              <div className="p-8">
                <h4 className="text-sm font-medium">iPhone 14 Series</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Up to 10% off Voucher
                </h2>
                <button className="mt-2 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200">
                  Shop Now &rarr;
                </button>
              </div>
              <Image
                src={iphone14}
                alt="iPhone 14"
                className="absolute right-0 bottom-0 h-full object-contain"
              />
              <Image
                src={iphone14}
                alt="iPhone 14"
                className="absolute right-0 bottom-0 h-full object-contain"
              />
            </div>
          </SwiperSlide>

          {/* Add more slides if needed */}
          <SwiperSlide>
            <div className="relative bg-gray-800 text-white flex items-center h-60 md:h-80">
              <div className="p-8">
                <h4 className="text-sm font-medium">Electronics Sale</h4>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Up to 20% off
                </h2>
                <button className="mt-2 px-6 py-2 bg-white text-black font-medium rounded-lg hover:bg-gray-200">
                  Shop Now &rarr;
                </button>
              </div>
              <Image
                src={iphone14}
                alt="iPhone 14"
                className="absolute right-0 bottom-0 h-full object-contain"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default SidebarBanner;
