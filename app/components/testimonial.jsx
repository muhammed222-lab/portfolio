import React from "react";
import { testimonials } from "/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="p-5 bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg shadow-lg">
      <h2 className="mb-5 pl-2 border-l-4 border-[#009688] text-gray-900 text-2xl font-semibold">
        Testimonials
      </h2>
      <div className="testimonial_list flex gap-5 flex-wrap w-[100%] text-sm">
        {testimonials.map((rate, index) => (
          <div
            className="testimonial_card overflow-hidden gap-3 w-[300px] rounded-lg h-[350px] bg-white shadow-md transform transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <div className="flex justify-center mt-5">
              <Image
                src={rate.image}
                width={100}
                height={100}
                alt={rate.name}
                className="w-[100px] h-[100px] rounded-full border-4 border-[#009688] transition-transform duration-300 hover:scale-110"
              />
            </div>
            <div className="data p-5 text-center">
              <h2 className="uppercase text-[#009688] text-[15px] mb-2">
                {rate.name}
              </h2>
              <p className="text-[12px] mb-3 italic">"{rate.testimonial}"</p>
              <p className="text-[11px] border-t border-s-gray-200 mt-3 pt-3 flex justify-center gap-2">
                Company →
                <span className="capitalize text-[#009688] text-[10px]">
                  {rate.company}
                </span>
              </p>
              <p className="text-[11px] mb-1 flex justify-center gap-2">
                Designation →
                <span className="capitalize text-[#009688] text-[10px]">
                  {rate.designation}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
