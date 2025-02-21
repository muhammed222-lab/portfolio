"use client";
import React, { useState } from "react";
import { technologies } from "/constants";
import Image from "next/image";

const Technology = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  const handleCloseModal = () => {
    setSelectedTech(null);
  };

  return (
    <div className="p-5 mb-6 w-full lg:w-[70%] mx-auto">
      <h2 className="mb-5 pl-2 border-l-2 border-s-gray-200 text-gray-900">
        Technologies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {technologies.map((tech, index) => (
          <div
            className="tech_lists p-1 items-center rounded-full border flex gap-2 cursor-pointer"
            key={index}
            onClick={() => handleTechClick(tech)}
          >
            <Image
              src={tech.icon}
              width={40}
              height={40}
              alt={tech.name}
              className="ml-0 rounded-full p-1 bg-gray-200"
            />
            <div className="tech_title">
              <h2 className="text-[12px] mt-1 capitalize">{tech.name}</h2>
              <span className="text-[10px]">Technology stack</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technology;
