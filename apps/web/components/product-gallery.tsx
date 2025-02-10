/* eslint-disable @next/next/no-img-element */
"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Product } from "@/app/utils/products";

interface Props {
  images: Product["images"][0][];
}

export const ProductGallery: React.FC<Props> = ({ images }) => {
  if (!images || images.length === 0) {
    return (
      <div className="w-full max-w-3xl mx-auto text-center py-12">
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-[min-content,minmax(0,1fr),min-content] items-center gap-6">
        <div className="prev cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-7 text-gray hover:text-darkGray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl: ".prev",
            nextEl: ".next",
          }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            type: "bullets",
          }}
          loop={images.length > 1}
          className="w-full rounded-md"
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full">
                <img
                  loading="lazy"
                  src={image.url}
                  width={image.width}
                  height={image.height}
                  alt={`product image: ${index + 1}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="next cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-7 text-gray hover:text-darkGray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <div className="mt-10">
        <div className="swiper-pagination !relative"></div>
      </div>
    </div>
  );
};
