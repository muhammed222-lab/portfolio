import React from "react";
import { technologies } from "/constants";
import Image from "next/image";
const technology = () => {
  return (
    <div className="p-5 mb-6">
      <h2 className="mb-5 pl-2 border-l-2 border-s-gray-200 text-gray-900">
        Technologies
      </h2>
      <div className="flex flex-wrap w-[100%] gap-5">
        {technologies.map((tech, index) => (
          <div
            className="tech_lists p-1 items-center rounded-full shadow-md  flex gap-2   w-[170px] h-[50px]"
            key={index}>
            <Image
              src={tech.icon}
              width={40}
              height={40}
              alt="css"
              className="ml-0 rounded-full p-1 bg-gray-200"
            />
            <div className="tech_title">
              <h2 className="text-[12px] mt-1 capitalize">{tech.name}</h2>
              <span className="text-[10px]">Technology stack </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default technology;
