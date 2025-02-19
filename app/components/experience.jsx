"use client";
import React from "react";
import { experiences } from "/constants";
import Image from "next/image";

const Experience = () => {
  return (
    <div className="p-5 w-full lg:w-[70%] mx-auto">
      <h2 className="mb-5 pl-2 border-l-2 border-s-gray-200 text-gray-900">
        Experience
      </h2>
      <div className="experience_list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {experiences.map((exp, index) => (
          <div
            className="experience_card p-5 rounded-lg border transform transition-transform duration-300 hover:scale-105"
            key={index}
          >
            <Image
              src={exp.icon}
              width={100}
              height={100}
              alt={exp.title}
              className="bg-gray-100 rounded-full mb-2 p-1 m-auto"
            />
            <div className="job_info text-sm">
              <span className="mb-5 text-[11px] pl-2 border-l-2 border-s-gray-200 text-gray-400">
                {exp.date}
              </span>
              <p className="mb-3 mt-2 text-[12px] flex gap-1">
                <span>as →</span>
                <span className="uppercase text-[#009688] text-[10px]">
                  {exp.title}
                </span>
              </p>
              <p className="mb-3 mt-2 text-[11px] flex gap-1">
                <span>at →</span>
                <span className="uppercase text-[#009688] text-[10px]">
                  {exp.company_name}
                </span>
              </p>
              <div className="line-clamp-4 text-[11px]">
                <span className="text-[11px] pl-2 border-l-2 border-s-gray-200 text-gray-400">
                  Role
                </span>
                {exp.points.map((point, index) => (
                  <p className="text-gray-700" key={index}>
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
