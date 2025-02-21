import React from "react";
import Link from "next/link";
import Image from "next/image";
const project = (props) => {
  return (
    <div>
      <h2 className="mb-5 pl-2 border-l-2 border-s-gray-200 text-gray-900">
        Side projects
      </h2>
      <div className="flex flex-wrap gap-3">
        {props.projectTitle.map((project, index) => (
          <div
            className="project_list p-5 shadow-sm w-[300px]  border-gray-50 border-[1.2px] rounded-md hover:bg-[#fcfcfc]"
            key={index}
          >
            <Image
              src={props.projectIcon[index]}
              width={100}
              height={100}
              rel="meta"
              alt={project}
              className=" bg-gray-100 shadow-sm border-2 border-double w-[100%] border-gray-300 p-1"
            />
            <h2 className="mt-2 text-[12px]">{project}</h2>
            <p className="mt-2 text-[12px] mb-4 text-gray-500">
              {props.projectText[index]}
            </p>
            <Link
              href={"https://" + props.projectUrl[index]}
              className="text-[12px] text-[#009688] pt-8"
            >
              🔗 {props.projectUrl[index]}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default project;
