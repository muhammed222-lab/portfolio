import React from "react";
import { testimonials } from "/constants";
import Image from "next/image";

const Testimonial = () => {
  return (
    <div className="p-5">
      <h2 className="mb-5 pl-2 border-l-2 border-s-gray-200 text-gray-900">
        Testimonials
      </h2>
      <div className="testimonial_list flex gap-3 flex-wrap w-[100%]  text-sm ">
        {testimonials.map((rate, index) => (
          <div
            className="testimonial_card overflow-hidden gap-3 w-[450px] rounded-lg h-[300px] "
            key={index}>
            <Image
              src={rate.image}
              width={100}
              height={100}
              alt="jess"
              className="w-[100px] mb-5 h-[100px] rounded-full border-4 border-s-gray-300 hover:w-[105px] hover:h-[105px] "
            />
            <div className="data p-3">
              <h2 className="uppercase text-[#009688] text-[13px] mb-2">
                {rate.name}
              </h2>
              <p className="text-[12px] mb-1">"{rate.testimonial}"</p>
              <p className="text-[11px] border-t border-s-gray-200 mt-3 pt-3 flex gap-2">
                Company →{" "}
                <p className="capitalize text-[#009688] text-[10px]">
                  {rate.company}
                </p>
              </p>
              <p className="text-[11px] mb-1 flex gap-2">
                Designation →{" "}
                <p className="capitalize text-[#009688] text-[10px]">
                  {rate.designation}
                </p>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
