import React from "react";
import Image from "next/image";
import Link from "next/link";

const Work = (props) => {
  return (
    <div className="flex justify-center">
      <div className="work w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl p-5 shadow-sm mt-10 rounded-md border-2 border-solid border-gray-200">
        <div className="title flex items-center gap-2">
          <Image
            src={"/work.png"}
            width={30}
            height={20}
            className="opacity-70"
            alt="work"
          />
          <span className="text-[12px]">Work</span>
        </div>
        {props.workplace.map((place, index) => (
          <div
            className="work_list flex justify-between text-sm mt-7 gap-2"
            key={index}
          >
            <div className="flex gap-2">
              <Image
                src={props.workIcon[index]}
                width={40}
                height={30}
                rel="meta"
                alt={place}
                className="rounded-full bg-gray-100 shadow-sm border-2 border-double border-gray-300 p-1"
              />
              <div>
                <p className="line-clamp-1 text-[11px]">{place}</p>
                <span className="text-[12px] text-gray-500">
                  {props.workTitle[index]}
                </span>
              </div>
            </div>
            <div>
              <span className="text-[8px] text-gray-500 line-clamp-1">
                {props.workDate[index]}
              </span>
            </div>
          </div>
        ))}
        <a
          href="/Muhammed Olayemi.pdf"
          download
          className="text-[10px] p-2 bg-gray-300 text-black mt-5 w-full rounded-md flex justify-center items-center gap-4"
        >
          <p>Download CV</p>
          <Image
            src={"/android-download.png"}
            width={20}
            height={20}
            alt="Download"
          />
        </a>
        <div className="mt-6 text-right pt-3">
          <Link href={"/projects"} className="text-[12px] text-[#009688]">
            Projects ▸
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
