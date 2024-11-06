import React from "react";
import Image from "next/image";
import { projects } from "/constants";
import Link from "next/link";
const projectsList = () => {
  return (
    <div className="mt-7">
      <h2 className="mb-5 pl-2 border-l-2 border-s-gray-200 text-gray-900">
        Real projects
      </h2>
      <div className="flex flex-wrap gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project_list p-5 shadow-sm w-60 border-gray-50 border-[1.2px] rounded-md hover:bg-[#fcfcfc]">
            <Image
              src={project.image}
              width={200}
              height={200}
              rel="meta"
              alt="img"
              className="rounded-md bg-no-repeat bg-center bg-gray-100 shadow-sm border-2 border-double bac border-gray-300 p-1"
            />
            <h2 className="mt-2 text-[13px] ">{project.name}</h2>
            <p className="mt-2 text-[12px] mb-4 text-gray-500">
              {project.description}
            </p>
            <div>
              <span className="text-gray-400 text-[10px]">Tags</span>
              <div className="flex gap-2">
                {project.tags.map((tag, index) => (
                  <p
                    className="text-[12px] text-[#328379] mb-3 inline-block"
                    key={index}>
                    #{tag.name}
                  </p>
                ))}
              </div>
            </div>
            <Link
              href={"https://" + project.name}
              target="_blank"
              className="text-[12px] text-[#009688] pt-8 lowercase tracking-[0px]">
              {project.source_code_link} {project.name}→
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default projectsList;
