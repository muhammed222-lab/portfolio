import React from "react";
import Image from "next/image";
import Link from "next/link";
const work = (props) => {
  return (
    <div>
      <div className="work w-[300px] p-5 shadow-sm mt-10 tablet:ml-0 laptop:ml-10  rounded-md border-2 border-solid border-gray-200 align-middle">
        <div className="title flex align-center gap-2 items-center">
          <Image
            src={"/work.png"}
            width={30}
            height={20}
            className="opacity-[.7]"
            alt="work"
          />
          <span className="text-[12px]">Work</span>
        </div>
        {props.workplace.map((place, index) => (
          <div
            className="work_list flex justify-between text-sm mt-7 gap-2"
            key={index}>
            <div className="flex gap-2">
              <Image
                src={props.workIcon[index]}
                width={40}
                height={30}
                rel="meta"
                alt={place}
                className="rounded-[50%] bg-gray-100 shadow-sm border-2 border-double border-gray-300 p-1"
              />
              <div>
                <p className="line-clamp-1 text-[11px]">{place}</p>
                <span className="text-[12px] text-[gray]">
                  {props.workTitle[index]}
                </span>
              </div>
            </div>
            <div>
              <span className="text-[8px] text-[gray] line-clamp-1">
                {props.workDate[index]}
              </span>
            </div>
          </div>
        ))}
        <button className="text-[10px] p-2 bg-gray-300 text-black mt-5 w-[100%] rounded-md flex justify-center justify-items-center gap-4 items-center">
          <p>Download CV</p>{" "}
          <Image src={"/android-download.png"} width={20} height={20} />
        </button>
        <div className="mt-6 text-right pt-3">
          <Link href={"/projects"} className="text-[12px] text-[#009688] ">
            Projects ▸
          </Link>
        </div>
      </div>
    </div>
  );
};

export default work;
